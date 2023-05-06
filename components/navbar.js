import Image from "next/image";
import styles from "./../styles/Navbar.module.scss";

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <Image src="/brand.png" width={42} height={42} alt="Brand" />
      </div>
      <span className={styles.githubicon}>
        <a href="https://github.com/jose-almir/jose-almir.github.io"><i className="bi bi-github"></i></a>
      </span>
    </header>
  );
}
