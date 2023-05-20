const fs = require("fs");
const globby = require("globby");

const siteUrl = "https://jose-almir.github.io/";

function addPage(page) {
  const path = page
    .replace("pages/", "")
    .replace(".js", "")
    .replace(".md", "")
    .replace("posts/", "blog/")
    .replace("/index", "");

  return `  <url>
      <loc>${`${siteUrl}${path}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>`;
}

(async () => {
  const pages = await globby([
    "posts/",
    "pages/**/*.js",
    "!pages/**/[id].js",
    "!pages/**/[categoria].js",
    "!pages/index.js",
    "!pages/api",
    "!pages/_*.js",
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(addPage).join("\n")}
    </urlset>`;
  fs.writeFileSync("public/sitemap.xml", sitemap);
})();
