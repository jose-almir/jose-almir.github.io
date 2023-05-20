import { getPosts } from "@/lib/posts";
import { Card } from "@/components/Card";
import Link from "next/link";
import { Seo } from "@/components/Seo";

export async function getStaticPaths() {
  const categorias = getPosts().map((p) => p.categoria);
  return {
    paths: categorias.map((p) => `/blog/categoria/${p}`),
    fallback: false,
  };
}

export async function getStaticProps({ params: { categoria } }) {
  const posts = getPosts(categoria);

  return {
    props: {
      posts,
      categoria,
    },
  };
}

export default function Categoria({ posts, categoria }) {
  return (
    <>
      <Seo title={`categoria: ${categoria} | jose-almir`} />
      <div className="container ">
        <Link href="/blog" className="back-btn">
          <i className="bi bi-arrow-left"></i> Voltar
        </Link>
        <h2>Categoria: {categoria}</h2>
        <div className="grid">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
