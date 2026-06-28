import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog", ({ id }) => id.startsWith("pt/"));
  return rss({
    title: "José Almir’s Blog",
    description: "A humble astronaut’s guide to the stars",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/pt/blog/${post.id.replace("pt/", "")}/`,
    })),
    customData: `<language>pt-br</language>`,
  });
}
