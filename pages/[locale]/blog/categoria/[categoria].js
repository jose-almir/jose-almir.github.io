import { getPosts } from "@/lib/posts";
import { Card } from "@/components/Card";
import { Seo } from "@/components/Seo";
import { useTranslation } from "@/lib/LanguageContext";

export async function getStaticPaths() {
  const ptCategories = getPosts("pt").map((p) => p.categoria);
  const enCategories = getPosts("en").map((p) => p.categoria);

  const ptPaths = ptCategories.map((cat) => ({
    params: { locale: "pt", categoria: cat },
  }));
  const enPaths = enCategories.map((cat) => ({
    params: { locale: "en", categoria: cat },
  }));

  return {
    paths: [...ptPaths, ...enPaths],
    fallback: false,
  };
}

export async function getStaticProps({ params: { categoria, locale } }) {
  const posts = getPosts(locale, categoria);

  return {
    props: {
      posts,
      categoria,
      locale,
    },
  };
}

export default function Categoria({ posts, categoria, locale }) {
  const { t, language, isLoaded } = useTranslation();

  if (!isLoaded) return null;

  return (
    <>
      <Seo title={`${language === 'pt' ? 'categoria' : 'category'}: ${categoria} | jose-almir`} />
      <div className="container ">
        <div className="pt-xs">
          <h2>{language === 'pt' ? 'Categoria' : 'Category'}: {categoria}</h2>
          <div className="bento-grid">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
