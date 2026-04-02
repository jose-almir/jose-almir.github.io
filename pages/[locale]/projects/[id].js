import { Seo } from "@/components/Seo";
import { getProject, getProjects, getAllProjects } from "@/lib/projects";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark as codeDark, coldarkCold as codeLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import mediumZoom from "medium-zoom";
import { useState, useEffect } from "react";
import { CopyButton } from "@/components/CopyButton";
import { useTranslation } from "@/lib/LanguageContext";
import styles from "./ProjectDetails.module.scss";

const baseUrl = process.env.NODE_ENV === "production" ? "https://almirdev.com" : "http://localhost:3000";

export function getStaticPaths() {
  const ptProjects = getProjects("pt");
  const enProjects = getProjects("en");

  const ptPaths = ptProjects.map((p) => ({ params: { locale: "pt", id: p.id } }));
  const enPaths = enProjects.map((p) => ({ params: { locale: "en", id: p.id } }));

  return {
    paths: [...ptPaths, ...enPaths],
    fallback: false,
  };
}

export function getStaticProps({ params: { id, locale } }) {
  const project = getProject(id, locale);
  const totalProjects = getAllProjects();

  const translations = {};
  if (project) {
    ["pt", "en"].forEach(lang => {
      const other = totalProjects.find(p => p.id === id && p.lang === lang);
      if (other) translations[lang] = other.id;
    });
  }

  if (project) {
    const allProjects = getProjects(locale);
    const currentIndex = allProjects.findIndex((p) => p.id === id);
    const nextProjectData = allProjects[(currentIndex + 1) % allProjects.length];
    
    const nextProject = {
      id: nextProjectData.id,
      title: nextProjectData.title,
      image: nextProjectData.image
    };

    return { 
      props: { 
        project,
        nextProject,
        locale,
        translations
      } 
    };
  } else {
    return { notFound: true };
  }
}

export default function Project({ project, nextProject, locale, translations }) {
  const { theme } = useTheme();
  const { t, isLoaded, setAvailableTranslations } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (translations && isClient) {
      setAvailableTranslations(translations);
    }
    return () => setAvailableTranslations({});
  }, [translations, isClient]);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const zoom = mediumZoom(".project-content img", {
      margin: 24,
      background: "rgba(0,0,0,0.9)",
    });

    return () => zoom.detach();
  }, [project]);

  if (!isLoaded) return null;

  return (
    <>
      <Seo
        title={`${project.title} - José Almir`}
        description={project.description}
        image={`${baseUrl}${project.image}`}
        path={`/projects/${project.id}`}
      />
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <div className="container">
        <div className="pt-md">
          
          <Link href={`/${locale}/projects`} className={styles.backLink}>
            <i className="bi bi-arrow-left"></i> {t("blog.back") || "Back"}
          </Link>

          <header className={styles.header}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>

            <div
              className={styles.projectStatus}
              title={project.isPrivate ? (project.confidentialityNote || t("projects.private_project_hint")) : t("projects.public_project_hint")}
            >
              <i className={`bi ${project.isPrivate ? "bi-lock" : "bi-globe-americas"}`}></i>
              <span>{project.isPrivate ? t("projects.private_case_label") : t("projects.public_case_label")}</span>
            </div>
            
            <div className={styles.techStack}>
              {project.tech?.map((techItem) => (
                <span key={techItem} className={styles.techPill}>
                  {techItem}
                </span>
              ))}
            </div>

            <div className={styles.actions}>
              {!project.isPrivate && (
                <>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.buttonMain}>
                      {t("projects.view_project")} <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.buttonSecondary}>
                      {t("projects.view_source")} <i className="bi bi-github"></i>
                    </a>
                  )}
                </>
              )}
            </div>
          </header>

          <section className={styles.summaryGrid} aria-label={t("projects.case_summary_label")}>
            {project.role && (
              <article className={styles.summaryCard}>
                <span className={styles.summaryLabel}>{t("projects.role_label")}</span>
                <p>{project.role}</p>
              </article>
            )}
            {project.challenge && (
              <article className={styles.summaryCard}>
                <span className={styles.summaryLabel}>{t("projects.challenge_label")}</span>
                <p>{project.challenge}</p>
              </article>
            )}
            {project.outcome && (
              <article className={styles.summaryCard}>
                <span className={styles.summaryLabel}>{t("projects.outcome_label")}</span>
                <p>{project.outcome}</p>
              </article>
            )}
          </section>

          {project.proofPoints?.length > 0 && (
            <section className={styles.proofSection}>
              <h2>{t("projects.proof_points_title")}</h2>
              <ul className={styles.proofList}>
                {project.proofPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>
          )}

          <ReactMarkdown
            className={`project-content ${styles.markdownContent}`}
            children={project.content}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const codeStr = String(children).replace(/\n$/, "");
                return !inline && match ? (
                  <div style={{ position: "relative" }}>
                    <CopyButton code={codeStr} t={t} />
                    <SyntaxHighlighter
                      children={codeStr}
                      style={theme === "dark" ? codeDark : codeLight}
                      language={match[1]}
                      showLineNumbers
                      PreTag="div"
                      {...props}
                    />
                  </div>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
            rehypePlugins={[rehypeRaw]}
          />

          <hr className={styles.divider} />

          {project.confidentialityNote && (
            <section className={styles.confidentialityNote}>
              <strong>{t("projects.confidentiality_title")}</strong>
              <p>{project.confidentialityNote}</p>
            </section>
          )}

          <section className={styles.nextProjectSection}>
            <span className={styles.nextLabel}>{t("projects.next_project") || "Next Project"}</span>
            <Link href={`/${locale}/projects/${nextProject.id}`} className={styles.nextProjectCard}>
              <div className={styles.nextProjectImage}>
                <img src={nextProject.image} alt={nextProject.title} />
              </div>
              <div className={styles.nextProjectInfo}>
                <h4>{nextProject.title}</h4>
                <i className="bi bi-arrow-right"></i>
              </div>
            </Link>
          </section>

          <section className={styles.contactCta}>
            <div className={styles.contactCtaContent}>
              <h3>{t("home.contact_title")}</h3>
              <p>{t("home.contact_description")}</p>
              <Link href="mailto:jr.cod.dev@gmail.com" className={styles.ctaButton}>
                {t("home.contact_button")}
                <i className="bi bi-envelope"></i>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
