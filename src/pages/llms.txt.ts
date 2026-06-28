import { getCollection } from "astro:content";

import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog", ({ id }) => id.startsWith("pt/"));
  const projects = await getCollection(
    "projects",
    ({ id, data }) => id.startsWith("pt/") && !data.hidden,
  );

  let content = `# Almir Dev - Portfolio & Blog\n\n`;

  content += `## Projects\n`;
  projects.forEach((p) => {
    content += `- ${p.data.title}: ${p.data.description} (URL: ${context.site}/pt/projects/${p.id.replace("pt/", "")})\n`;
  });

  content += `\n## Blog\n`;
  blog.forEach((p) => {
    content += `- ${p.data.title}: ${p.data.description} (URL: ${context.site}/pt/blog/${p.id.replace("pt/", "")})\n`;
  });

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
