import Link from "next/link";
import styles from "./ProjectCard.module.scss";
import { useTranslation } from "@/lib/LanguageContext";

export function ProjectCard({ project }) {
  const { t, language } = useTranslation();
  const primaryTech = project.tech?.slice(0, 2) || [];
  const remainingTechCount = Math.max((project.tech?.length || 0) - primaryTech.length, 0);

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

          <dl className={styles.highlights}>
            {project.role && (
              <div className={styles.highlightItem}>
                <dt>{t("projects.role_label")}</dt>
                <dd>{project.role}</dd>
              </div>
            )}
            {project.challenge && (
              <div className={styles.highlightItem}>
                <dt>{t("projects.challenge_label")}</dt>
                <dd>{project.challenge}</dd>
              </div>
            )}
            {project.outcome && (
              <div className={styles.highlightItem}>
                <dt>{t("projects.outcome_short_label")}</dt>
                <dd>{project.outcome}</dd>
              </div>
            )}
          </dl>
          
          <div className={styles.techStack}>
            {primaryTech.map((techItem) => (
              <span key={techItem} className={styles.techPill}>
                {techItem}
              </span>
            ))}
            {remainingTechCount > 0 && (
              <span className={styles.techMore}>+{remainingTechCount}</span>
            )}
          </div>
        </div>
      </Link>

      <div className={styles.actionsBox}>
        <div
          className={styles.projectStatus}
          title={project.isPrivate ? (project.confidentialityNote || t("projects.private_project_hint")) : t("projects.public_project_hint")}
        >
          <i className={`bi ${project.isPrivate ? "bi-lock" : "bi-globe-americas"}`}></i>
          <span>{project.isPrivate ? t("projects.private_case_label") : t("projects.public_case_label")}</span>
        </div>

        <div className={styles.actions}>
          {!project.isPrivate && (
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
