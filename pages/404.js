import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Root404() {
  const router = useRouter();

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'pt';
    router.replace(`/${savedLang}`);
  }, []);

  return null;
}
