import { getAllPostSlugs, getPostData } from '@/utils/blogPosts';
import { MDXRemote } from 'next-mdx-remote/rsc'; // RSC version for App Router
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image

// Props for the page component
type Props = {
  params: { slug: string };
};

// Generate metadata for the page (title, description, OG tags)
export async function generateMetadata(
  { params }: Props
  // _parent: ResolvingMetadata // Removed as it's unused
): Promise<Metadata> {
  const post = await getPostData((await params).slug);
  if (!post) {
    return {
      title: 'Post Not Found | Clavis Blog',
    };
  }

  return {
    title: `${post.title} | Clavis Blog`,
    description: post.summary || 'A Clavis blog post.',
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.ogImage ? [post.ogImage] : ['/OG-image.png'], 
      url: `https://iyer.dev/blog/${post.slug}`, 
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const paths = getAllPostSlugs(); 
  return paths.map(p => ({ slug: p.params.slug })); 
}

import React from 'react'; // Import React for JSX types

// Define types for MDX components
type MDXImageProps = React.ComponentProps<typeof Image>;
type MDXLinkProps = React.ComponentProps<typeof Link>;
// Use React's HTML attribute types for better compatibility
type MDXHeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type MDXParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
type MDXListProps = React.HTMLAttributes<HTMLUListElement | HTMLOListElement>;
type MDXListItemProps = React.HTMLAttributes<HTMLLIElement>;
type MDXBlockquoteProps = React.HTMLAttributes<HTMLQuoteElement>;
type MDXCodeProps = React.HTMLAttributes<HTMLElement> & { className?: string }; // HTMLElement for <code>
type MDXPreProps = React.HTMLAttributes<HTMLPreElement>;


// Custom components to pass to MDXRemote
const components = {
  img: (props: MDXImageProps) => (
    <div className="my-6"> {/* Added margin for spacing */}
      <Image
        {...props}
        // Ensure required props for next/image are handled or defaulted
        // width and height are required if layout is not "fill"
        // For layout="responsive", width and height define the aspect ratio
        width={props.width || 700} 
        height={props.height || 450}
        layout="responsive" 
        loading="lazy"
        className={`rounded-lg shadow-lg ${props.className || ''}`} 
        alt={props.alt || "Blog image"}
      />
    </div>
  ),
  a: (props: MDXLinkProps) => <Link {...props} className={`text-accent-blue-deep hover:underline hover:text-accent-pink-vivid transition-colors ${props.className || ''}`} />,
  h1: (props: MDXHeadingProps) => <h1 {...props} className={`text-4xl font-bold mt-8 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 ${props.className || ''}`} />,
  h2: (props: MDXHeadingProps) => <h2 {...props} className={`text-3xl font-semibold mt-6 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-accent-blue-light via-accent-blue-deep to-accent-pink-soft ${props.className || ''}`} />,
  h3: (props: MDXHeadingProps) => <h3 {...props} className={`text-2xl font-semibold mt-5 mb-2 text-text-primary ${props.className || ''}`} />,
  p: (props: MDXParagraphProps) => <p {...props} className={`text-text-secondary leading-relaxed my-4 ${props.className || ''}`} />,
  ul: (props: MDXListProps) => <ul {...props} className={`list-disc list-inside my-4 pl-4 text-text-secondary ${props.className || ''}`} />,
  ol: (props: MDXListProps) => <ol {...props} className={`list-decimal list-inside my-4 pl-4 text-text-secondary ${props.className || ''}`} />,
  li: (props: MDXListItemProps) => <li {...props} className={`mb-2 ${props.className || ''}`} />,
  blockquote: (props: MDXBlockquoteProps) => <blockquote {...props} className={`border-l-4 border-accent-3 pl-4 italic my-6 text-text-secondary ${props.className || ''}`} />,
  code: (props: MDXCodeProps) => {
    // Check if it's an inline code or a block (often by presence of language- class)
    if (props.className?.includes('language-')) {
      // Code block - usually wrapped in <pre> by MDX processor
      // The `pre` component below will handle the main styling for blocks
      return <code {...props} className={`${props.className || ''}`} />;
    }
    // Inline code
    return <code {...props} className={`bg-bg-panel-dark text-accent-pink-soft px-1 py-0.5 rounded-sm text-sm ${props.className || ''}`} />;
  },
  pre: (props: MDXPreProps) => <pre {...props} className={`rounded-md p-4 block overflow-x-auto bg-bg-panel-dark shadow-md my-6 ${props.className || ''}`} />,
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostData((await params).slug);

  if (!post || !post.content) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <p className="text-text-secondary">Sorry, we couldn't find the post you were looking for.</p>
        <Link href="/blog" className="text-accent-2 hover:underline mt-4 inline-block">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-bg-deep-dark py-8"> {/* Ensure page background matches theme */}
      <article className="prose prose-invert lg:prose-xl mx-auto px-4 md:px-0 bg-bg-panel-dark py-8 md:py-12 px-6 md:px-10 rounded-xl shadow-2xl border border-glass-border backdrop-blur-lg bg-glass-bg/70">
        <header className="mb-10 text-center border-b border-glass-border pb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-1 via-accent-pink-vivid to-accent-blue-light mb-4">
            {post.title}
          </h1>
          <p className="text-text-tertiary text-base"> {/* Increased font size slightly */}
            By <span className="text-accent-1 font-semibold">{post.author}</span> on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          {/* TODO: Add reading time estimate here */}
        </header>

        <MDXRemote source={post.content} components={components} />

        <div className="mt-16 pt-6 border-t border-glass-border text-center">
          <Link href="/blog" className="text-accent-blue-deep hover:text-accent-pink-vivid font-semibold transition-colors duration-300 text-lg">
            &larr; Back to All Posts
          </Link>
        </div>
      </article>
    </div>
  );
}
