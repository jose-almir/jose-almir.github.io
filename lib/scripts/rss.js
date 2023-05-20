// import RSS from "rss";
// import { getPosts } from "./posts";
// import fs from "fs";
const RSS = require("rss");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDir = path.join(process.cwd(), "posts");

(() => {
  function getPosts(categoria) {
    const files = fs.readdirSync(postsDir);
    const postsData = files.map((filename) => {
      const id = filename.replace(/\.md$/, "");
      const fullpath = path.join(postsDir, filename);
      const content = fs.readFileSync(fullpath, "utf-8");
      const metadata = matter(content);

      return {
        id,
        ...metadata.data,
      };
    });

    return postsData
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .filter((p) => (categoria ? p.categoria === categoria : true));
  }
  const siteUrl = "https://jose-almir.github.io";

  const allPosts = getPosts();

  const feedOptions = {
    title: "blog | jose-almir",
    site_url: siteUrl,
    feed_url: `${siteUrl}/feed.xml`,
    image_url: `${siteUrl}/brand.png`,
    pubDate: new Date().toISOString(),
    copyright: `Todos os direitos reservados ${new Date().getFullYear()}, jose-almir`,
  };
  const feed = new RSS(feedOptions);

  allPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.desc,
      url: `${siteUrl}/blog/${post.id}`,
      date: post.date,
    });
  });

  fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
})();
