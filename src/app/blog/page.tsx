import Link from 'next/link';
import { getSortedPostsData, PostData } from '@/utils/blogPosts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Clavis',
  description: 'Articles and insights on data quality, business strategy, and the Clavis journey.',
};

export default function BlogIndexPage() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <section className="py-8">
      <h1 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3">
        Clavis Blog
      </h1>
      
      {allPostsData.length === 0 && (
        <p className="text-center text-text-secondary">No blog posts found. Check back soon!</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPostsData.map(({ slug, title, date, summary, author }) => (
          <article 
            key={slug} 
            className="flex flex-col bg-bg-panel-dark p-6 rounded-lg shadow-lg border border-glass-border hover:shadow-xl transition-shadow duration-200 ease-in-out backdrop-blur-md bg-glass-bg"
          >
            <h2 className="text-2xl font-semibold mb-3">
              <Link href={`/blog/${slug}`} className="hover:text-accent-2 transition-colors">
                {title}
              </Link>
            </h2>
            <p className="text-sm text-text-tertiary mb-2">
              By {author} on {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            {summary && (
              <p className="text-text-secondary mb-4 flex-grow">{summary}</p>
            )}
            <Link href={`/blog/${slug}`} className="text-accent-2 hover:underline self-start font-medium">
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
