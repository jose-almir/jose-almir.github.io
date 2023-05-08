import { getPosts } from "@/lib/posts";
import Head from "next/head";
import { Card } from "@/components/card";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`categoria: ${categoria} | jose-almir`}</title>
        <meta
          name="description"
          content="Meu blog pessoal destinado a compartilhar ideias, experiências e conhecimentos."
        />
        <meta
          property="og:title"
          content={`categoria: ${categoria} | jose-almir`}
        />
        <meta
          property="og:description"
          content="Meu blog pessoal destinado a compartilhar ideias, experiências e conhecimentos."
        />
        <meta property="og:image" content="/potato.png" />
      </Head>
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
