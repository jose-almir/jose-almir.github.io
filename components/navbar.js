import Image from "next/image";
import styles from "./../styles/Navbar.module.scss";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <Image src="/brand.png" width={42} height={42} alt="Brand" />
      </div>
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
