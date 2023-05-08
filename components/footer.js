import styles from "../styles/Footer.module.scss";

export function Footer() {
  return (
    <>
      <hr />
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles["social-icons"]}>
            <a href="https://github.com/jose-almir/jose-almir.github.io">
              <i className="bi bi-github"></i>
            </a>
            <a href="/feed.xml" title="Inscrever no feed">
              <i className="bi bi-rss-fill"></i>
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
