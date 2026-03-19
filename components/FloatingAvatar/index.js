import { useState, useEffect } from "react";
import styles from "./FloatingAvatar.module.scss";
import { useTranslation } from "@/lib/LanguageContext";

export function FloatingAvatar({ title, url }) {
  const { t, language } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 40 && !isVisible) {
        setIsVisible(true);
        // Delay bubble appearance for a nice effect
        setTimeout(() => setShowBubble(true), 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const productionUrl = "https://almirdev.com";
  const shareUrl = url || currentUrl;
  const finalUrl = shareUrl && shareUrl.includes("localhost") 
    ? shareUrl.replace(/http:\/\/localhost:3000/, productionUrl)
    : shareUrl;

  const encodedUrl = encodeURIComponent(finalUrl || "");
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = () => {
    navigator.clipboard.writeText(finalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
      {showBubble && (
        <div className={styles.speechBubble}>
          <button className={styles.closeBtn} onClick={() => setShowBubble(false)}>
            <i className="bi bi-x"></i>
          </button>
          
          <div className={styles.content}>
            <p>{t("blog.like_share")}</p>
            <div className={styles.actions}>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="X"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <button onClick={handleCopy} title={t("blog.copy_link")}>
                <i className={`bi ${copied ? "bi-check2" : "bi-link-45deg"}`}></i>
              </button>
            </div>
            <div className={styles.divider}></div>
            <a href={`/feed.${language}.xml`} className={styles.rssLink} target="_blank" rel="noopener noreferrer">
              {t("blog.subscribe_rss")} <i className="bi bi-rss-fill"></i>
            </a>
          </div>
        </div>
      )}
      
      <div className={styles.avatarWrapper} onClick={() => setShowBubble(!showBubble)}>
        <img 
          src="/profile/avatar-color.png" 
          alt={language === 'pt' ? 'Foto de perfil de José Almir' : "José Almir's profile picture"} 
          className={styles.avatar}
        />
        <div className={styles.ping}></div>
      </div>
    </div>
  );
}
