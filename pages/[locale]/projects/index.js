import { getProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Seo } from "@/components/Seo";
import { useTranslation } from "@/lib/LanguageContext";
import styles from "./Projects.module.scss";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { locale: "pt" } },
      { params: { locale: "en" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params: { locale } }) {
  const projects = getProjects(locale);

  return {
    props: {
      projects,
      locale,
    },
  };
}

export default function Projects({ projects, locale }) {
  const { t, isLoaded } = useTranslation();

  if (!isLoaded) return null;

  return (
    <>
      <Seo 
        title={`${t("projects.title")} - José Almir`} 
        description={t("projects.description")}
        path={`/projects`} 
      />
      <div className="container">
        <div className="pt-xs">
          <header className={styles.header}>
            <h1 className={styles.title}>{t("projects.title")}</h1>
            <p className={styles.description}>{t("projects.description")}</p>
          </header>
          
          {projects.length > 0 ? (
            <div className={styles.grid}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>{t("projects.no_projects")}</p>
            </div>
          )}

          <section className={styles.contactCta}>
            <div className={styles.contactCtaContent}>
              <h3>{t("home.contact_title")}</h3>
              <p>{t("home.contact_description")}</p>
              <a href="mailto:jr.cod.dev@gmail.com" className={styles.ctaButton}>
                {t("home.contact_button")}
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
