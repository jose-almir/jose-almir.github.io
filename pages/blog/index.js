import Link from "next/link";
import { getPosts } from "@/lib/posts";
import Image from "next/image";
import { Card } from "@/components/card";
import Head from "next/head";

export async function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <>
    <Head>

      <title>blog | jose-almir</title>
      <meta name="description" content="Meu blog pessoal destinado a compartilhar ideias, experiências e conhecimentos." />
      <meta property="og:title" content="blog | jose-almir" />
      <meta property="og:description" content="Meu blog pessoal destinado a compartilhar ideias, experiências e conhecimentos." />
      <meta property="og:image" content="/potato.png" />
    </Head>
      <div className="container ">
        <h2>Confira meu conteúdo!</h2>
        <div className="grid">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
