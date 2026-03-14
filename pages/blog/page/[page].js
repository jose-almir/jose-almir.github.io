import { getPosts } from "@/lib/posts";
import { Card } from "@/components/Card";
import { Seo } from "@/components/Seo";
import { Pagination } from "@/components/Pagination";

const POSTS_PER_PAGE = 4;

export async function getStaticPaths() {
  const allPosts = getPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  // Generate paths for all pages starting from 1
  // Even if index.js handles page 1, having /page/1 as a static file is consistent
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page);
  const allPosts = getPosts();
  
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const posts = allPosts.slice(start, end);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  return {
    props: {
      posts,
      currentPage: page,
      totalPages,
    },
  };
}

export default function BlogPaged({ posts, currentPage, totalPages }) {
  return (
    <>
      <Seo title={`Blog - Página ${currentPage} | jose-almir`} />
      <div className="container ">
        <div className="pt-xs">
          <h2>Página {currentPage}</h2>
          <div className="bento-grid">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </>
  );
}
