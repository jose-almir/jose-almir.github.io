import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getPosts() {
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

  return postsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(id) {
  const file = `${id}.md`;
  const fullpath = path.join(postsDir, file);
  const content = fs.readFileSync(fullpath, "utf-8");
  const metadata = matter(content);
  return { id, ...metadata.data, content: metadata.content };
}
