import { getPost, getPosts } from "@/lib/posts";
import Head from "next/head";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import { useRouter } from "next/router";

export function getStaticPaths() {
  const posts = getPosts();
  return {
    paths: posts.map((p) => `/blog/${p.id}`),
    fallback: false,
  };
}

export function getStaticProps({ params: { id } }) {
  const post = getPost(id);
  if (post) {
    return { props: { post } };
  } else {
    return { notFound: true };
  }
}

export default function Post({ post }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`${post.title} | jose-almir`}</title>
        <meta name="description" content={post.desc} />
        <meta name="keywords" content={post.tags} />
        <meta name="author" content="José Almir" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.desc} />
        <meta property="og:image" content={post.thumbnail} />
      </Head>
      <div className="container">
        <Link className="back-btn" href="/blog">
          {"<<< Voltar"}
        </Link>
        <ReactMarkdown
          className="blog-post"
          children={post.content}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={oneDark}
                  language={match[1]}
                  showLineNumbers
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
    </>
  );
}
