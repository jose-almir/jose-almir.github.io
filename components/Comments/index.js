import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import styles from "./Comments.module.scss";
import { useState, useEffect } from "react";

/**
 * Comments component that wraps Giscus with premium styling and a loading skeleton.
 * 
 * @param {Object} props
 * @param {string} props.id - Post ID for Giscus mapping.
 * @param {string} props.locale - Current locale (en/pt).
 * @param {string} props.title - Comments section title.
 */
export const Comments = ({ id, locale, title }) => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Simple loading state simulation as Giscus is an iframe
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [id, locale]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <i className="bi bi-chat-left-dots-fill"></i>
        <h4>{title}</h4>
      </div>

      {isLoading && (
        <div className={styles.skeleton}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div className={`${styles.skeletonItem} ${styles.avatar}`}></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className={`${styles.skeletonItem} ${styles.line}`} style={{ width: '30%' }}></div>
              <div className={`${styles.skeletonItem} ${styles.line}`}></div>
            </div>
          </div>
          <div className={`${styles.skeletonItem} ${styles.lineShort}`}></div>
        </div>
      )}

      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <Giscus
          id="comments"
          key={`giscus-${locale}-${id}`}
          repo="jose-almir/jose-almir.github.io"
          repoId="R_kgDOJcTwDQ"
          category="Announcements"
          categoryId="DIC_kwDOJcTwDc4CWYcC"
          mapping="pathname"
          strict="0"
          reactionsEnabled="0"
          emitMetadata="0"
          theme={theme === "dark" ? "dark" : "light"}
          lang={locale === "pt" ? "pt" : "en"}
          inputPosition="top"
          loading="lazy"
        />
      </div>
    </div>
  );
};
