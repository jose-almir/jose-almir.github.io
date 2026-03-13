import styles from "./Card.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export function Card({ post }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/blog/${post.id}`);
  };

  const cardSizeClass = post.size ? styles[post.size] : styles.small;
  const descLength = post.size === 'large' || post.size === 'wide' ? 40 : 20;

  return (
    <div
      className={`${styles.card} ${cardSizeClass}`}
      style={{ cursor: "pointer" }}
      onClick={handleCardClick}
    >
        <img className={styles.cardImage} src={post.thumbnail} alt="Imagem" />
        <div className={styles.cardContent}>
          <h4 className={styles.cardTitle}>{post.title}</h4>
          <span className={styles.postedAt}>
            <span>
              <i className="bi bi-calendar mr-xs"></i>
              {new Date(post.date).toLocaleDateString('pt-BR')}
            </span>
            <span onClick={(e) => e.stopPropagation()}>
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
            {post.desc.trim().split(" ").slice(0, descLength).join(" ") + "..."}
          </p>
          <div className={styles.cardTags}>
            {post.tags.split(", ").map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
