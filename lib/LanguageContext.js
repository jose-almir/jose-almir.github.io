import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import pt from "../locales/pt.json";
import en from "../locales/en.json";

const translations = { pt, en };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const router = useRouter();
  const { asPath } = router;
  
  const [language, setLanguage] = useState("pt");
  const [mounted, setMounted] = useState(false);
  const [availableTranslations, setAvailableTranslations] = useState({});

  useEffect(() => {
    const pathParts = asPath.split("/");
    const pathLocale = pathParts[1];

    if (pathLocale === "pt" || pathLocale === "en") {
      setLanguage(pathLocale);
    } else {
      const savedLang = localStorage.getItem("language");
      if (savedLang && (savedLang === "pt" || savedLang === "en")) {
        setLanguage(savedLang);
      }
    }
    setMounted(true);
  }, [asPath]);

  const toggleLanguage = (lang) => {
    const newLang = lang || (language === "pt" ? "en" : "pt");
    setLanguage(newLang);
    localStorage.setItem("language", newLang);

    const pathParts = asPath.split("/");
    pathParts[1] = newLang;

    // If we are in a blog post, check if we have a translated slug
    if (pathParts[2] === "blog" && pathParts[3] && !pathParts[4]) {
      const currentSlug = pathParts[3];
      if (availableTranslations[newLang]) {
        pathParts[3] = availableTranslations[newLang];
      }
    }
    
    // Clean empty parts and handle root
    const newPath = pathParts.join("/") || `/${newLang}`;
    router.push(newPath);
  };

  const t = (path) => {
    const keys = path.split(".");
    let result = translations[language];
    
    for (const key of keys) {
      if (!result || result[key] === undefined) return path;
      result = result[key];
    }
    
    return result;
  };

  const value = {
    language,
    toggleLanguage,
    t,
    isLoaded: mounted,
    setAvailableTranslations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
