import { getCollection } from 'astro:content';

export default async function () {
  var blogEntries = await getCollection('blog', entry => (import.meta.env.DEV || !entry.data.draft));
  blogEntries = blogEntries.sort((a, b) => {
    if (a.data.date_published === undefined && b.data.date_published === undefined) {
      return 0;
    }
    if (a.data.date_published === undefined) {
      return -1;
    }
    if (b.data.date_published === undefined) {
      return 1;
    }
    if (a.data.date_published > b.data.date_published) {
      return -1;
    } else if (a.data.date_published < b.data.date_published) {
      return 1;
    }
    return 0;
  });
  return blogEntries;
}
