import styles from "./Navbar.module.scss";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/LanguageContext";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t, isLoaded } = useTranslation();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (!mounted || !isLoaded) return null;

  const hiddenStyle = show ? "" : ` ${styles.hidden}`;

  return (
    <header className={styles.navbar + hiddenStyle}>
      <div className={styles.brand}>
        <Link href="/" title={t("nav.home")}>
          <div className={styles.avatar}></div>
        </Link>
      </div>
      <nav className={styles.navlinks}>
        <Link href={`/${language}/blog`} title={t("nav.blog")}>
          {t("nav.blog")}
        </Link>
        <Link href={`/${language}/projects`} title={t("nav.projects")}>
          {t("nav.projects")}
        </Link>
      </nav>
      <div className={styles.actions}>
        <span className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/jose-almir/" target="_blank" rel="noreferrer" title="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/jose-almir" target="_blank" rel="noreferrer" title="GitHub">
            <i className="bi bi-github"></i>
          </a>
        </span>

        <span className={styles.themeicon}>
          <button
            className={styles.themebutton}
            onClick={() => toggleLanguage()}
            title={language === "pt" ? "Switch to English" : "Mudar para Português"}
            style={{ fontSize: '0.8rem', fontWeight: 'bold' }}
          >
            {language.toUpperCase()}
          </button>
          <button
            className={styles.themebutton}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <i className="bi bi-moon-fill"></i>
            ) : (
              <i className="bi bi-moon"></i>
            )}
          </button>
        </span>
      </div>
    </header>
  );
}
