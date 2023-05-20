import { getPosts } from "@/lib/posts";
import { Card } from "@/components/Card";
import Head from "next/head";
import { Seo } from "@/components/Seo";

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
      <Seo />
      <div className="container ">
        <div className="pt-xs">
          <h2>Confira meu conteúdo!</h2>
          <div className="grid">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
