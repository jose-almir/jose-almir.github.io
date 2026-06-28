import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    thumbnail: z.string(),
    description: z.string(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    hidden: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
