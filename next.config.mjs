import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: [
      'images.unsplash.com', 
      's3-us-west-2.amazonaws.com', 
      'prod-files-secure.s3.us-west-2.amazonaws.com', 
      'photos.smugmug.com'
    ],
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/, // Process .md and .mdx files
  options: {
    remarkPlugins: [], // Add remark plugins here if needed (e.g., for GFM, footnotes)
    rehypePlugins: [], // Add rehype plugins here if needed (e.g., for syntax highlighting)
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

// Export the combined config
export default withMDX(nextConfig);
