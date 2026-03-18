import { useState, useCallback } from "react";
import styles from "./CopyButton.module.scss";

/**
 * A premium copy-to-clipboard button with visual feedback and animations.
 * @param {Object} props
 * @param {string} props.code - The code string to copy.
 * @param {Function} props.t - Translation function.
 */
export function CopyButton({ code, t }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if (typeof window === "undefined" || !navigator.clipboard) return;
    
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <button
      onClick={handleCopy}
      className={`${styles.copyButton} ${copied ? styles.copied : ""}`}
      aria-label={t("blog.copy_link")}
      title={t("blog.copy_link")}
    >
      {copied ? (
        <>
          <i className="bi bi-check2"></i>
          <span>{t("blog.copied")}</span>
        </>
      ) : (
        <>
          <i className="bi bi-clipboard"></i>
          <span>{t("blog.copy_link").split(" ")[0]}</span>
        </>
      )}
    </button>
  );
}
