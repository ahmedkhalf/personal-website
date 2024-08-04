import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        draft: z.boolean().optional(),
        date_published: z.date().optional(),
        date_edited: z.date().optional(),
    }),
});

export const collections = {
  'blog': blogCollection,
};
