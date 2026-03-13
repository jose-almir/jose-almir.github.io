import styles from "./ShareButtons.module.scss";
import { useState, useEffect } from "react";

export function ShareButtons({ title, url }) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const productionUrl = "https://almirdev.com";
  const shareUrl = url || currentUrl;
  
  // Só processa se tivermos uma URL
  const finalUrl = shareUrl && shareUrl.includes("localhost") 
    ? shareUrl.replace(/http:\/\/localhost:3000/, productionUrl)
    : shareUrl;

  const encodedUrl = encodeURIComponent(finalUrl || "");
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "#0077b5",
    },
    {
      name: "X",
      icon: "bi-twitter-x",
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "#ffffff",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(finalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Compartilhe este artigo</h3>
      <div className={styles.buttons}>
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className={styles.shareButton}
            title={`Compartilhar no ${link.name}`}
            style={{ "--hover-color": link.color }}
          >
            <i className={`bi ${link.icon}`}></i>
          </a>
        ))}
        <button
          onClick={handleCopy}
          className={`${styles.shareButton} ${copied ? styles.copied : ""}`}
          title="Copiar link"
        >
          {copied ? <i className="bi bi-check2"></i> : <i className="bi bi-link-45deg"></i>}
        </button>
      </div>
    </div>
  );
}
