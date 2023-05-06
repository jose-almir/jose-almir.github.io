import styles from "./../styles/Card.module.scss";
import Link from "next/link";

export function Card({ post }) {
  return (
    <div className={styles.card + " mt-md mb-md"}>
      <img className={styles.cardImage} src={post.thumbnail} alt="Imagem" />
      <div className={styles.cardContent}>
        <h4>{post.title}</h4>
        <span>
          <i className="bi bi-calendar mr-xs"></i>
          {new Date(post.date).toLocaleDateString()}
        </span>
        <p className={styles.cardText}>{post.desc.slice(0, 64) + "..."}</p>
        <Link href={`/blog/${post.id}`} className={styles.cardLink}>
          Ler mais {">>>"}
        </Link>
      </div>
    </div>
  );
}
