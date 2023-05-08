import RSS from "rss";
import { getPosts } from "./posts";
import fs from "fs";

export default function feedRss() {
  const siteUrl = "https://jose-almir.github.io/";

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
}