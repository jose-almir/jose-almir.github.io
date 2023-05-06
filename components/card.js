import styles from "./../styles/Card.module.scss";
import Link from "next/link";

export function Card({ post }) {
  return (
    <div className={styles.card + " mt-md mb-md"}>
      <img className={styles.cardImage} src={post.thumbnail} alt="Imagem" />
      <div className={styles.cardContent}>
        <h4 className="mt-xs mb-xs">{post.title}</h4>
        <span className={styles.postedAt}>
          <span>
            <i className="bi bi-calendar mr-xs"></i>
            {new Date(post.date).toLocaleDateString()}
          </span>
          <span>#{post.categoria}</span>
        </span>
        <p className={styles.cardText}>
          {post.desc.trim().split(" ").slice(0, 14).join(" ") + "..."}
        </p>
        <div className={styles.cardTags}>
          {post.tags.split(", ").map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <hr />
        <Link href={`/blog/${post.id}`} className={styles.cardLink}>
          Ler mais
          <i className={"bi " + styles.linkIcon}></i>
        </Link>
      </div>
    </div>
  );
}
