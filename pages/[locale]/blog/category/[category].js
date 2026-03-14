import { getPosts } from "@/lib/posts";
import { Card } from "@/components/Card";
import { Seo } from "@/components/Seo";
import { useTranslation } from "@/lib/LanguageContext";

export async function getStaticPaths() {
  const ptPosts = getPosts("pt");
  const enPosts = getPosts("en");

  const ptCategories = [...new Set(ptPosts.map((p) => p.category).filter(Boolean))];
  const enCategories = [...new Set(enPosts.map((p) => p.category).filter(Boolean))];

  const ptPaths = ptCategories.map((cat) => ({
    params: { locale: "pt", category: cat },
  }));
  const enPaths = enCategories.map((cat) => ({
    params: { locale: "en", category: cat },
  }));

  return {
    paths: [...ptPaths, ...enPaths],
    fallback: false,
  };
}

export async function getStaticProps({ params: { category, locale } }) {
  const posts = getPosts(locale, category);

  return {
    props: {
      posts,
      category,
      locale,
    },
  };
}

export default function Category({ posts, category, locale }) {
  const { t, language, isLoaded } = useTranslation();

  if (!isLoaded) return null;

  return (
    <>
      <Seo title={`${language === 'pt' ? 'categoria' : 'category'}: ${category} | jose-almir`} />
      <div className="container ">
        <div className="pt-xs">
          <h2>{language === 'pt' ? 'Categoria' : 'Category'}: {category}</h2>
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
