import Image from "next/image";
import styles from "./../styles/Navbar.module.scss";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Navbar() {
  const { theme, setTheme } = useTheme();
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

  if (!mounted) return null;

  const hiddenStyle = show ? "" : ` ${styles.hidden}`;

  return (
    <header className={styles.navbar + hiddenStyle}>
      <div className={styles.brand}>
        <Link href="/" title="Navegar para tela principal">
          <Image src="/brand.png" width={42} height={42} alt="Brand" />{" "}
        </Link>
      </div>
      <nav className={styles.navlinks}>
        <Link href="/portfolio" title="Navegar para tela sobre">
          Portfólio
        </Link>
        <Link href="/blog" title="Navegar para tela sobre">
          Blog
        </Link>
      </nav>
      <div>
        <span className={styles.themeicon}>
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

        <span className={styles.githubicon}>
          <a href="https://github.com/jose-almir/jose-almir.github.io">
            <i className="bi bi-github"></i>
          </a>
        </span>
      </div>
    </header>
  );
}
