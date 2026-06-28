import pt from "./locales/pt.json";
import en from "./locales/en.json";

const translations = { pt, en };

export function useTranslations(lang: "pt" | "en") {
  return function t(key: string): string {
    const keys = key.split(".");
    let value: unknown = translations[lang];
    for (const k of keys) {
      if (value === undefined) break;
      value = (value as Record<string, unknown>)[k];
    }
    if (value !== undefined) return String(value);

    let ptValue: unknown = translations["pt"];
    for (const k of keys) {
      if (ptValue === undefined) break;
      ptValue = (ptValue as Record<string, unknown>)[k];
    }
    return ptValue !== undefined ? String(ptValue) : key;
  };
}
