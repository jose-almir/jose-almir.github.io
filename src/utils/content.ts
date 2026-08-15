export function byLang(lang: string): (entry: { id: string }) => boolean {
  return ({ id }) => id.startsWith(`${lang}/`);
}

export function slugFor(id: string, lang: string): string {
  return id.replace(`${lang}/`, "");
}
