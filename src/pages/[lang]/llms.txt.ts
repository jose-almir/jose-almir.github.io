import { getCollection } from "astro:content";
import { byLang, slugFor } from "../../utils/content";

import type { APIRoute } from "astro";

export const getStaticPaths = () => {
  return [{ params: { lang: "pt" } }, { params: { lang: "en" } }];
};

export const GET: APIRoute = async (context) => {
  const lang = context.params.lang as "pt" | "en";
  const blog = await getCollection("blog", byLang(lang));
  const projects = await getCollection(
    "projects",
    (entry) => byLang(lang)(entry) && !entry.data.hidden,
  );

  let content = `# Almir Dev - Portfolio & Blog\n\n`;

  content += `## Projects\n`;
  projects.forEach((p) => {
    content += `- ${p.data.title}: ${p.data.description} (URL: ${new URL(`${lang}/projects/${slugFor(p.id, lang)}`, context.site).href})\n`;
  });

  content += `\n## Blog\n`;
  blog.forEach((p) => {
    content += `- ${p.data.title}: ${p.data.description} (URL: ${new URL(`${lang}/blog/${slugFor(p.id, lang)}`, context.site).href})\n`;
  });

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
