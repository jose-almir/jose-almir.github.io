import Link from "next/link";
import { getPosts } from "@/lib/posts";
import Image from "next/image";
import { Card } from "@/components/card";

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
