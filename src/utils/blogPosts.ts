import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary?: string;
  ogImage?: string;
  content?: string; // Full MDX content
  // Add any other frontmatter fields you expect
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => /\.mdx?$/.test(fileName)) // Ensure we only process .mdx or .md files
    .map(fileName => {
      // Remove ".mdx" from file name to get id
      const slug = fileName.replace(/\.mdx?$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        slug,
        ...(matterResult.data as { title: string; date: string; author: string; summary?: string; ogImage?: string }),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => /\.mdx?$/.test(fileName))
    .map(fileName => {
      return {
        params: {
          slug: fileName.replace(/\.mdx?$/, ''),
        },
      };
    });
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  // Check if .mdx exists, if not, try .md as a fallback (though we plan to use .mdx for all)
  // For simplicity, this example assumes .mdx. Add .md check if necessary.
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // matterResult.content is the MDX content string
  // For rendering, @next/mdx will handle this when the component is imported.
  // If you need to process the content to HTML here (e.g. for RSS),
  // you would use remark/rehype plugins.

  return {
    slug,
    content: matterResult.content,
    ...(matterResult.data as { title: string; date: string; author: string; summary?: string; ogImage?: string }),
  };
}
