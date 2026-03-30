import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Seo } from "@/components/Seo";

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "pt";
    router.replace(`/${savedLang}`);
  }, [router]);

  return (
    <>
      <Seo path="/" />
      <Head>
        <meta httpEquiv="refresh" content="0;url=/pt" />
      </Head>
      <div style={{ display: 'none' }}>
        <h1>Almir Dev</h1>
        <p>Desenvolvedor Fullstack - Redirecionando para o portfólio... / Fullstack Developer - Redirecting to portfolio...</p>
      </div>
    </>
  );
}
