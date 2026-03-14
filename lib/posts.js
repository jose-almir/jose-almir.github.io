import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

/**
 * Get all posts filtered by language and optionally by category.
 * @param {string} language - 'pt' or 'en'
 * @param {string} categoria - optional category filter
 */
export function getPosts(language = "pt", categoria) {
  const files = fs.readdirSync(postsDir);
  
  const postsData = files.map((filename) => {
    // Check if it's a localized file (e.g., slug.en.md)
    const parts = filename.split(".");
    
    let fileLang = "pt"; // default
    let id = filename.replace(/\.md$/, "");

    if (parts.length > 2) {
      // It has a language suffix: slug.en.md
      fileLang = parts[parts.length - 2];
      id = parts.slice(0, -2).join(".");
    }

    const fullpath = path.join(postsDir, filename);
    const content = fs.readFileSync(fullpath, "utf-8");
    const metadata = matter(content);
    const readingTime = getReadingTime(metadata.content);

    return {
      id, // This is the slug (filename without lang and ext)
      lang: fileLang,
      ...metadata.data,
      readingTime,
      filename
    };
  });

  return postsData
    .filter((p) => p.lang === language)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .filter((p) => p.hidden === undefined)
    .filter((p) => (categoria ? p.categoria === categoria : true));
}

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  return files.map((filename) => {
    const parts = filename.split(".");
    let fileLang = "pt";
    let id = filename.replace(/\.md$/, "");
    if (parts.length > 2) {
      fileLang = parts[parts.length - 2];
      id = parts.slice(0, -2).join(".");
    }
    const fullpath = path.join(postsDir, filename);
    const content = fs.readFileSync(fullpath, "utf-8");
    const metadata = matter(content);
    return { id, lang: fileLang, ...metadata.data };
  });
}

/**
 * Get a single post by ID and language.
 * @param {string} id - The slug of the post
 * @param {string} language - 'pt' or 'en'
 */
export function getPost(id, language = "pt") {
  // If we search by link/URL slug, the ID already matches part of the filename
  const allPosts = getAllPosts();
  
  // Try to find the exact file first
  let post = allPosts.find(p => p.id === id && p.lang === language);

  // If not found, try fallback (if it was a PT post accessed via EN route, etc.)
  if (!post) {
    post = allPosts.find(p => p.id === id);
  }

  if (!post) return null;

  const file = post.lang === "pt" ? `${post.id}.md` : `${post.id}.${post.lang}.md`;
  const fullpath = path.join(postsDir, file);
  const content = fs.readFileSync(fullpath, "utf-8");
  const metadata = matter(content);
  const readingTime = getReadingTime(metadata.content);
  
  return { 
    id: post.id, 
    lang: post.lang, 
    ...metadata.data, 
    content: metadata.content, 
    readingTime 
  };
}

export function getCategories(language = "pt") {
  return [...new Set(getPosts(language).map((post) => post.categoria))];
}

export function getReadingTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
}
