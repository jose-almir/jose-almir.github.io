import Head from "next/head";
import { useTranslation } from "@/lib/LanguageContext";

export function Seo(props) {
  const { language, t } = useTranslation();
  
  const defaultPageTitle = "jose-almir";
  const defaultDescription = t("home.description_1") + t("home.description_link") + t("home.description_2");
  const defaultKeywords = language === 'pt' ? "blog, desenvolvimento, programação, tecnologia" : "blog, development, programming, tech";

  const title = props.title || defaultPageTitle;
  const description = props.description || defaultDescription;
  const keywords = props.keywords || defaultKeywords;
  const image = props.image || "https://jose-almir.github.io/profile/og.png";

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
      <meta property="og:locale" content={language === 'pt' ? 'pt_BR' : 'en_US'} />
      <meta property="og:site_name" content="jose-almir" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </Head>
  );
}


