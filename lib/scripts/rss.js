// import RSS from "rss";
// import { getPosts } from "./posts";
// import fs from "fs";
const RSS = require("rss");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDir = path.join(process.cwd(), "posts");
const siteUrl = "https://almirdev.com";

function getPosts(language = "pt") {
  const files = fs.readdirSync(postsDir);
  
  const postsData = files.map((filename) => {
    const parts = filename.split(".");
    let fileLang = "pt"; // default
    let id = filename.replace(/\.md$/, "");

    if (parts.length > 2) {
      fileLang = parts[parts.length - 2];
      id = parts.slice(0, -2).join(".");
    }

    const fullpath = path.join(postsDir, filename);
    const content = fs.readFileSync(fullpath, "utf-8");
    const metadata = matter(content);

    return {
      id,
      lang: fileLang,
      ...metadata.data,
    };
  });

  return postsData
    .filter((p) => p.lang === language)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .filter((p) => p.hidden === undefined);
}

const languages = ["pt", "en"];
const feedConfigs = {
  pt: {
    title: "Blog | Almir Dev",
    description: "Reflexões sobre tecnologia, software e design.",
    copyright: `Todos os direitos reservados ${new Date().getFullYear()}, Almir Dev`,
  },
  en: {
    title: "Blog | Almir Dev",
    description: "Reflections on technology, software and design.",
    copyright: `All rights reserved ${new Date().getFullYear()}, Almir Dev`,
  }
};

languages.forEach((lang) => {
  const posts = getPosts(lang);
  const config = feedConfigs[lang];

  const feedOptions = {
    title: config.title,
    description: config.description,
    site_url: `${siteUrl}/${lang}`,
    feed_url: `${siteUrl}/feed.${lang}.xml`,
    image_url: `${siteUrl}/brand.png`,
    pubDate: new Date().toISOString(),
    copyright: config.copyright,
    language: lang,
  };

  const feed = new RSS(feedOptions);

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.desc,
      url: `${siteUrl}/${lang}/blog/${post.id}`,
      date: post.date,
      categories: post.category ? [post.category] : [],
    });
  });

  const xmlContent = feed.xml({ indent: true });
  fs.writeFileSync(`./public/feed.${lang}.xml`, xmlContent);
  
  // Backward compatibility: save pt as feed.xml
  if (lang === "pt") {
    fs.writeFileSync("./public/feed.xml", xmlContent);
  }
});
