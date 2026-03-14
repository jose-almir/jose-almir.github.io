import styles from "./Footer.module.scss";
import { useTranslation } from "@/lib/LanguageContext";

export function Footer() {
  const { t, language } = useTranslation();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["social-icons"]}>
          <a href="https://github.com/jose-almir/jose-almir.github.io" target="_blank" title="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="/feed.xml" target="_blank" title="Inscrever no feed">
            <i className="bi bi-rss-fill"></i>
          </a>
          <a href="/sitemap.xml" target="_blank" title="Mapa do site">
            <i className="bi bi-diagram-3-fill"></i>
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} jose-almir. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}
