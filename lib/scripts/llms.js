const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDir = path.join(process.cwd(), "posts");
const projectsDir = path.join(process.cwd(), "projects");
const siteUrl = "https://almirdev.com";

function getCollection(dir, language = "pt") {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  
  const data = files.map((filename) => {
    if (!filename.endsWith(".md")) return null;

    const parts = filename.split(".");
    let fileLang = "pt"; // default
    let id = filename.replace(/\.md$/, "");

    if (parts.length > 2) {
      fileLang = parts[parts.length - 2];
      id = parts.slice(0, -2).join(".");
    }

    const fullpath = path.join(dir, filename);
    const content = fs.readFileSync(fullpath, "utf-8");
    const metadata = matter(content);

    return {
      id,
      lang: fileLang,
      ...metadata.data,
    };
  }).filter(item => item !== null);

  return data
    .filter((p) => p.lang === language)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .filter((p) => p.hidden === undefined);
}

const ptPosts = getCollection(postsDir, "pt");
const enPosts = getCollection(postsDir, "en");
const ptProjects = getCollection(projectsDir, "pt");
const enProjects = getCollection(projectsDir, "en");

// Generate llms.txt
const llmsTxt = `# Almir Dev - Programming & Tech Blog

> Personal portfolio and technical blog of José Almir, a Fullstack Developer.

## Summary
The site features technical articles and tutorials focused on Java, Spring Boot, React, Next.js, and modern web development practices. It serves as a dual-language (Portuguese and English) resource for software engineering.

## Key Sections
- [Blog (PT)](${siteUrl}/pt/blog)
- [Blog (EN)](${siteUrl}/en/blog)
- [Projects](${siteUrl}/pt/projects)
- [About](${siteUrl}/pt/blog/sobre-mim)

## Feeds & Indices
- [RSS Feed PT](${siteUrl}/feed.pt.xml)
- [RSS Feed EN](${siteUrl}/feed.en.xml)
- [Sitemap](${siteUrl}/sitemap.xml)
- [Full LLM Index](${siteUrl}/llms-full.txt)
`;

// Generate llms-full.txt
let llmsFullTxt = `# Almir Dev - Full Content Index for LLMs

This document provides a detailed index of the content available on Almir Dev.

## Articles (Portuguese)
${ptPosts.map(p => `- [${p.title}](${siteUrl}/pt/blog/${p.id})`).join("\n")}

## Articles (English)
${enPosts.map(p => `- [${p.title}](${siteUrl}/en/blog/${p.id})`).join("\n")}

## Projects (Portuguese)
${ptProjects.map(p => `- [${p.title}](${siteUrl}/pt/projects/${p.id})`).join("\n")}

## Projects (English)
${enProjects.map(p => `- [${p.title}](${siteUrl}/en/projects/${p.id})`).join("\n")}

## Social & Contact
- GitHub: https://github.com/jose-almir
- Email: jr.cod.dev@gmail.com
`;

fs.writeFileSync(path.join(process.cwd(), "public/llms.txt"), llmsTxt);
fs.writeFileSync(path.join(process.cwd(), "public/llms-full.txt"), llmsFullTxt);

console.log("✅ LLM documentation generated successfully!");
