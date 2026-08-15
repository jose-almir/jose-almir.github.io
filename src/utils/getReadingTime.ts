export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const trimmed = content.trim();
  if (!trimmed) return 1;
  const wordCount = trimmed.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
}
