import React, { useState, useEffect } from "react";
import styles from "./TypingAnimation.module.scss";

export function TypingAnimation({ text }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let animationTimeout;
    let textIndex = 0;

    const animateText = () => {
      if (textIndex <= text.length) {
        setDisplayText(text.substring(0, textIndex));
        textIndex++;
        animationTimeout = setTimeout(animateText, 175);
      }
    };

    animateText();

    return () => clearTimeout(animationTimeout);
  }, [text]);

  return (
    <span className={styles["typing-animation"]}>
      {displayText}
      <span className={styles.cursor}></span>
    </span>
  );
}
