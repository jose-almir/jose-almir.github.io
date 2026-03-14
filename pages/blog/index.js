import { getPosts } from "@/lib/posts";
import { Card } from "@/components/Card";
import { Seo } from "@/components/Seo";
import { Pagination } from "@/components/Pagination";

const POSTS_PER_PAGE = 4;

export async function getStaticProps() {
  const allPosts = getPosts();
  const posts = allPosts.slice(0, POSTS_PER_PAGE);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  return {
    props: {
      posts,
      currentPage: 1,
      totalPages,
    },
  };
}

export default function Blog({ posts, currentPage, totalPages }) {
  return (
    <>
      <Seo />
      <div className="container ">
        <div className="pt-xs">
          <h2>Confira meu conteúdo!</h2>
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
