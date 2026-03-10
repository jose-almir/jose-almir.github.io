import styles from "./Card.module.scss";
import Link from "next/link";

export function Card({ post }) {
  return (
    <div className={styles.card + " mt-md mb-md"}>
      <img className={styles.cardImage} src={post.thumbnail} alt="Imagem" />
      <div className={styles.cardContent}>
        <h4 className={styles.cardTitle}>{post.title}</h4>
        <span className={styles.postedAt}>
          <span>
            <i className="bi bi-calendar mr-xs"></i>
            {new Date(post.date).toLocaleDateString('pt-BR')}
          </span>
          <span>
            <Link
              className={styles.cardCategoria}
              href={`/blog/categoria/${post.categoria}`}
            >
              #{post.categoria}
            </Link>
          </span>
        </span>
        {post.readingTime && (
          <span className={styles.readingTime}>
            <i className="bi bi-clock"></i>
            {post.readingTime} min de leitura
          </span>
        )}
        <p className={styles.cardText}>
          {post.desc.trim().split(" ").slice(0, 20).join(" ") + "..."}
        </p>
        <div className={styles.cardTags}>
          {post.tags.split(", ").map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <Link href={`/blog/${post.id}`} className={styles.cardLink}>
          Ler mais
          <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
