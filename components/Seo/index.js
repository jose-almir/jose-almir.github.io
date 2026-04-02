import Head from "next/head";
import { useTranslation } from "@/lib/LanguageContext";

export function Seo(props) {
  const { language } = useTranslation();

  const defaultPageTitle =
    language === "pt"
      ? "Almir Dev - Portfolio e Blog de Tecnologia"
      : "Almir Dev - Portfolio and Tech Blog";
  const defaultDescription =
    language === "pt"
      ? "Portfolio e blog de José Almir sobre desenvolvimento web, Java, Spring Boot, React e Next.js."
      : "José Almir's portfolio and blog about web development, Java, Spring Boot, React, and Next.js.";
  const defaultKeywords =
    language === "pt"
      ? "portfolio, blog, desenvolvimento, programação, tecnologia, javascript, java, react, nextjs"
      : "portfolio, blog, development, programming, tech, javascript, java, react, nextjs";

  const title = props.title ? `${props.title} | Almir Dev` : defaultPageTitle;
  const description = props.description || defaultDescription;
  const keywords = props.keywords || defaultKeywords;
  const image = props.image || "https://almirdev.com/profile/og.png";

  const baseUrl = "https://almirdev.com";
  const path = props.path || "";
  const cleanPath = path === "/" ? "" : path.endsWith("/") ? path.slice(0, -1) : path;

  const canonicalUrl = `${baseUrl}/${language}${cleanPath}`;
  const ptUrl = `${baseUrl}/pt${cleanPath}`;
  const enUrl = `${baseUrl}/en${cleanPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="José Almir" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={language === "pt" ? "pt_BR" : "en_US"} />
      <meta property="og:site_name" content="Almir Dev" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hreflang="x-default" href={`${baseUrl}/pt${cleanPath}`} />
      <link rel="alternate" hreflang="pt" href={ptUrl} />
      <link rel="alternate" hreflang="en" href={enUrl} />

      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </Head>
  );
}
