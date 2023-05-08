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
            &copy; 2023 Your Website. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
