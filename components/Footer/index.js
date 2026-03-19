import styles from "./Footer.module.scss";
import { useTranslation } from "@/lib/LanguageContext";

export function Footer() {
  const { t, language } = useTranslation();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["social-icons"]}>
          <a href="https://github.com/jose-almir/jose-almir.github.io" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href={`/feed.${language}.xml`} target="_blank" rel="noopener noreferrer" title={t("nav.rss_feed")}>
            <i className="bi bi-rss-fill"></i>
          </a>
          <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" title="Mapa do site">
            <i className="bi bi-diagram-3-fill"></i>
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Almir Dev. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}
