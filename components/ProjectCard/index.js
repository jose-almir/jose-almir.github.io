import Link from "next/link";
import styles from "./ProjectCard.module.scss";
import { useTranslation } from "@/lib/LanguageContext";

export function ProjectCard({ project }) {
  const { t, language } = useTranslation();

  return (
    <article className={styles.card}>
      <Link href={`/${language}/projects/${project.id}`} className={styles.cardLinkArea}>
        <div className={styles.imageWrapper}>
          <img 
            src={project.image} 
            alt={project.title} 
            className={styles.image}
            loading="lazy"
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          
          <div className={styles.techStack}>
            {project.tech?.map((techItem) => (
              <span key={techItem} className={styles.techPill}>
                {techItem}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className={styles.actionsBox}>
        <div className={styles.actions}>

          {project.isPrivate ? (
            <span className={styles.privateBadge}>
              <i className="bi bi-lock-fill"></i>
              {t("projects.private_project")}
            </span>
          ) : (
            <>
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.buttonMain}
                >
                  {t("projects.view_project")}
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              )}
              {project.repo && (
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.buttonSecondary}
                >
                  {t("projects.view_source")}
                  <i className="bi bi-github"></i>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
