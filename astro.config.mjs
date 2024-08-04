import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings
      ],
    }),
  ],
});
