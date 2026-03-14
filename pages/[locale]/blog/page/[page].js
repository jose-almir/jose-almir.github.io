import { getPosts } from "@/lib/posts";
import { Card } from "@/components/Card";
import { Seo } from "@/components/Seo";
import { Pagination } from "@/components/Pagination";
import { useTranslation } from "@/lib/LanguageContext";

const POSTS_PER_PAGE = 4;

export async function getStaticPaths() {
  const ptPosts = getPosts("pt");
  const enPosts = getPosts("en");

  const ptTotalPages = Math.ceil(ptPosts.length / POSTS_PER_PAGE);
  const enTotalPages = Math.ceil(enPosts.length / POSTS_PER_PAGE);

  const ptPaths = Array.from({ length: ptTotalPages }, (_, i) => ({
    params: { locale: "pt", page: (i + 1).toString() },
  }));
  const enPaths = Array.from({ length: enTotalPages }, (_, i) => ({
    params: { locale: "en", page: (i + 1).toString() },
  }));

  return {
    paths: [...ptPaths, ...enPaths],
    fallback: false,
  };
}

export async function getStaticProps({ params: { page, locale } }) {
  const pageNum = parseInt(page);
  const allPosts = getPosts(locale);
  
  const start = (pageNum - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const posts = allPosts.slice(start, end);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  return {
    props: {
      posts,
      currentPage: pageNum,
      totalPages,
      locale,
    },
  };
}

export default function BlogPaged({ posts, currentPage, totalPages, locale }) {
  const { t } = useTranslation();
  
  return (
    <>
      <Seo title={`Blog - ${t("pagination.page")} ${currentPage} | jose-almir`} />
      <div className="container ">
        <div className="pt-xs">
          <h2>{t("pagination.page")} {currentPage}</h2>
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
