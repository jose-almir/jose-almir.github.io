import styles from "./Card.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "@/lib/LanguageContext";

export function Card({ post }) {
  const router = useRouter();
  const { t, language } = useTranslation();

  const handleCardClick = () => {
    router.push(`/${language}/blog/${post.id}`);
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
              {new Date(post.date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}
            </span>
            <span onClick={(e) => e.stopPropagation()}>
              <Link
                className={styles.cardCategory}
                href={`/${language}/blog/category/${post.category}`}
              >
                #{post.category}
              </Link>
            </span>
          </span>
          {post.readingTime && (
            <span className={styles.readingTime}>
              <i className="bi bi-clock"></i>
              {post.readingTime} {t("blog.reading_time")}
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
