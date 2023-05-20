import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <>
      <hr className="hr" />
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles["social-icons"]}>
            <a href="https://github.com/jose-almir/jose-almir.github.io" target="_blank">
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
            &copy; {new Date().getFullYear()} jose-almir. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
