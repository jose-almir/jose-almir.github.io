import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const site = context.site || new URL("https://almirdev.com");

  const content = [
    "# Almir Dev - Portfolio & Blog",
    "",
    `- Português: ${new URL("pt/llms.txt", site).href}`,
    `- English: ${new URL("en/llms.txt", site).href}`,
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
