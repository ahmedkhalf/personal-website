import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import getBlogEntries from '../lib/getBlogEntries';
import createSlug from '../lib/createSlug';

export async function GET(context: APIContext) {
  const blog = await getBlogEntries();

  return rss({
    title: "Ahmed's Blog",
    description: "Ahmed's blog",
    site: context.site ?? "",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date_published,
      link: `/posts/${createSlug(post.data.permatitle ?? post.data.title)}/`
    })),
    customData: `<language>en-ca</language>`,
  });
}
