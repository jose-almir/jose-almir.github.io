import { Seo } from "@/components/Seo";
import { getPost, getPosts } from "@/lib/posts";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark as codeDark, coldarkCold as codeLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://jose-almir.github.io"
    : "http://localhost:3000";

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
  const { theme } = useTheme();

  return (
    <>
      <Seo
        title={`${post.title} | jose-almir`}
        description={post.desc}
        keywords={post.tags}
        image={`${baseUrl}${post.thumbnail}`}
      />
      <div className="container blog">
        <div className="pt-md">
          <Link className="back-btn" href="/blog">
            <i className="bi bi-arrow-left"></i> Voltar
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
                    style={theme === "dark" ? codeDark : codeLight}
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
        <div>
          <h4>Comentários</h4>
          <Giscus
            id="comments"
            repo="jose-almir/jose-almir.github.io"
            repoId="R_kgDOJcTwDQ"
            category="Announcements"
            categoryId="DIC_kwDOJcTwDc4CWYcC"
            mapping="pathname"
            strict="0"
            reactionsEnabled="0"
            emitMetadata="0"
            theme={theme === "dark" ? "dark" : "light"}
            lang="pt"
            inputPosition="top"
          />
        </div>
      </div>
    </>
  );
}
