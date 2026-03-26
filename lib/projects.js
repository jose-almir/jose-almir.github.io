import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "projects");

export function getProjects(language = "pt") {
  if (!fs.existsSync(projectsDir)) return [];

  const files = fs.readdirSync(projectsDir);
  
  const projectsData = files.map((filename) => {
    const parts = filename.split(".");
    
    let fileLang = "pt"; // default
    let id = filename.replace(/\.md$/, "");

    if (parts.length > 2) {
      fileLang = parts[parts.length - 2];
      id = parts.slice(0, -2).join(".");
    }

    const fullpath = path.join(projectsDir, filename);
    const content = fs.readFileSync(fullpath, "utf-8");
    const metadata = matter(content);

    return {
      id,
      lang: fileLang,
      ...metadata.data,
      filename
    };
  });

  return projectsData
    .filter((p) => p.lang === language)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getAllProjects() {
  if (!fs.existsSync(projectsDir)) return [];

  const files = fs.readdirSync(projectsDir);
  return files.map((filename) => {
    const parts = filename.split(".");
    let fileLang = "pt";
    let id = filename.replace(/\.md$/, "");
    if (parts.length > 2) {
      fileLang = parts[parts.length - 2];
      id = parts.slice(0, -2).join(".");
    }
    const fullpath = path.join(projectsDir, filename);
    const content = fs.readFileSync(fullpath, "utf-8");
    const metadata = matter(content);
    return { id, lang: fileLang, ...metadata.data };
  });
}

export function getProject(id, language = "pt") {
  if (!fs.existsSync(projectsDir)) return null;

  const allProjects = getAllProjects();
  let project = allProjects.find(p => p.id === id && p.lang === language);

  if (!project) {
    project = allProjects.find(p => p.id === id);
  }

  if (!project) return null;

  const file = project.lang === "pt" ? `${project.id}.md` : `${project.id}.${project.lang}.md`;
  const fullpath = path.join(projectsDir, file);
  const content = fs.readFileSync(fullpath, "utf-8");
  const metadata = matter(content);
  
  return { 
    id: project.id, 
    lang: project.lang, 
    ...metadata.data, 
    content: metadata.content
  };
}
