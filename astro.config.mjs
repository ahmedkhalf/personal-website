import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://khalf.ca',
  integrations: [
    mdx({
      shikiConfig: {
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
      },
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings
      ],
    }),
  ],
});
