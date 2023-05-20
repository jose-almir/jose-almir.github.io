import Head from "next/head";

export function Seo(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content="José Almir" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="jose-almir" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:image" content={props.image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={props.description} />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </Head>
  );
}

Seo.defaultProps = {
  title: "jose-almir",
  description:
    "Meu blog pessoal destinado a compartilhar ideias, experiências e conhecimentos.",
  keywords: "blog, desenvolvimento, programação, tecnologia",
  image: "https://jose-almir.github.io/blog/avatar-color.png",
};
