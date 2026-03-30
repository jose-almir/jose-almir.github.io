const fs = require("fs");
const globby = require("globby");

const siteUrl = "https://almirdev.com/";

function addPage(path) {
  return `  <url>
      <loc>${`${siteUrl}${path}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>`;
}

const matter = require("gray-matter");

(async () => {
  const posts = await globby(["posts/*.md"]);
  const projects = await globby(["projects/*.md"]);
  
  const postPaths = [];
  
  posts.forEach(post => {
    const id = post.replace("posts/", "").replace(".md", "");
    if (id.endsWith(".en")) {
      postPaths.push(`en/blog/${id.replace(".en", "")}`);
    } else {
      postPaths.push(`pt/blog/${id}`);
      postPaths.push(`en/blog/${id}`);
    }
  });

  projects.forEach(project => {
    const content = fs.readFileSync(project, "utf-8");
    const { data } = matter(content);
    if (data.isPrivate === true) return;

    const id = project.replace("projects/", "").replace(".md", "");
    if (id.endsWith(".en")) {
      postPaths.push(`en/projects/${id.replace(".en", "")}`);
    } else {
      postPaths.push(`pt/projects/${id}`);
      postPaths.push(`en/projects/${id}`);
    }
  });

  const staticPages = await globby([
    "pages/**/*.js",
    "!pages/**/[id].js",
    "!pages/**/[categoria].js",
    "!pages/index.js",
    "!pages/api",
    "!pages/_*.js",
  ]);

  const allPages = [
    ...new Set([
      ...postPaths,
      ...staticPages.map(page => page.replace("pages/", "").replace(".js", "").replace("/index", ""))
    ])
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages.map(addPage).join("\n")}
    </urlset>`;
  fs.writeFileSync("public/sitemap.xml", sitemap);
})();
