import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Projects collection.
 * Write each project as Markdown/MDX in src/content/projects/.
 * You control the whole body: titres, sections, sous-sections, images, tableaux…
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().default('other'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    status: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/**
 * Blog / articles collection.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
