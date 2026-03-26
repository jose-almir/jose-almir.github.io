import { getPosts } from "@/lib/posts";
import { Card } from "@/components/Card";
import { Seo } from "@/components/Seo";
import { Pagination } from "@/components/Pagination";
import { useTranslation } from "@/lib/LanguageContext";

const POSTS_PER_PAGE = 4;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { locale: "pt" } },
      { params: { locale: "en" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params: { locale } }) {
  const allPosts = getPosts(locale);
  const posts = allPosts.slice(0, POSTS_PER_PAGE);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  return {
    props: {
      posts,
      currentPage: 1,
      totalPages,
      locale,
    },
  };
}

export default function Blog({ posts, currentPage, totalPages, locale }) {
  const { t, isLoaded } = useTranslation();

  if (!isLoaded) return null;

  return (
    <>
      <Seo />
      <div className="container ">
        <div className="pt-xs">
          <h2>{t("home.description_link_blog").charAt(0).toUpperCase() + t("home.description_link_blog").slice(1)} - {t("nav.home")}</h2>
          <div className="bento-grid">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl={`/${locale}/blog`} />
        </div>
      </div>
    </>
  );
}
