import { Seo } from "@/components/Seo";
import { getPost, getPosts } from "@/lib/posts";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coldarkDark as codeDark,
  coldarkCold as codeLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import { useState, useEffect, useCallback } from "react";
import mediumZoom from "medium-zoom";
import { ShareButtons } from "@/components/ShareButtons";

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
  const allPosts = getPosts();
  const currentIndex = allPosts.findIndex((p) => p.id === id);
  
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  if (post) {
    return { 
      props: { 
        post,
        prevPost: prevPost ? { id: prevPost.id, title: prevPost.title, thumbnail: prevPost.thumbnail } : null,
        nextPost: nextPost ? { id: nextPost.id, title: nextPost.title, thumbnail: nextPost.thumbnail } : null
      } 
    };
  } else {
    return { notFound: true };
  }
}

function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <button
      onClick={handleCopy}
      title="Copiar código"
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        background: copied ? "rgba(100,200,100,0.2)" : "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "6px",
        color: copied ? "#7ee787" : "rgba(255,255,255,0.6)",
        cursor: "pointer",
        padding: "4px 10px",
        fontSize: "0.75rem",
        fontFamily: "inherit",
        transition: "all 0.2s ease",
        zIndex: 1,
      }}
    >
      {copied ? (
        <>
          <i className="bi bi-check2" style={{ marginRight: "4px" }}></i>Copiado
        </>
      ) : (
        <>
          <i className="bi bi-clipboard" style={{ marginRight: "4px" }}></i>
          Copiar
        </>
      )}
    </button>
  );
}

export default function Post({ post, prevPost, nextPost }) {
  const { theme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const zoom = mediumZoom(".blog-post img:not(.headline)", {
      margin: 24,
      background: "rgba(0,0,0,0.9)",
    });

    return () => zoom.detach();
  }, [post]);

  return (
    <>
      <Seo
        title={`${post.title} | jose-almir`}
        description={post.desc}
        keywords={post.tags}
        image={`${baseUrl}${post.thumbnail}`}
      />
      {/* Scroll progress bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <div className="container blog">
        <div className="pt-md">
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <Link className="back-btn" href="/blog">
              <i className="bi bi-arrow-left"></i> Voltar
            </Link>
            {post.readingTime && (
              <span style={{ fontSize: "0.85rem", opacity: 0.55 }}>
                <i className="bi bi-clock" style={{ marginRight: "5px" }}></i>
                {post.readingTime} min de leitura
              </span>
            )}
          </span>
          <ReactMarkdown
            className="blog-post"
            children={post.content}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const codeStr = String(children).replace(/\n$/, "");
                return !inline && match ? (
                  <div style={{ position: "relative" }}>
                    <CopyButton code={codeStr} />
                    <SyntaxHighlighter
                      children={codeStr}
                      style={theme === "dark" ? codeDark : codeLight}
                      language={match[1]}
                      showLineNumbers
                      PreTag="div"
                      {...props}
                    />
                  </div>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
            rehypePlugins={[rehypeRaw]}
          />
          <ShareButtons title={post.title} url={`${baseUrl}/blog/${post.id}`} />
        </div>

        <div className="post-navigation-container mt-lg mb-lg">
          <div className="hr mb-lg"></div>
          <div className="post-navigation">
            {prevPost ? (
              <Link href={`/blog/${prevPost.id}`} className="nav-link prev">
                <div className="nav-image-container">
                  <img src={prevPost.thumbnail} alt="" className="nav-image" />
                </div>
                <div className="nav-content">
                  <span className="nav-label">
                    <i className="bi bi-arrow-left"></i> Anterior
                  </span>
                  <p className="nav-title">{prevPost.title}</p>
                </div>
              </Link>
            ) : (
              <div className="nav-placeholder"></div>
            )}
            
            {nextPost ? (
              <Link href={`/blog/${nextPost.id}`} className="nav-link next">
                <div className="nav-content">
                  <span className="nav-label">
                    Próximo <i className="bi bi-arrow-right"></i>
                  </span>
                  <p className="nav-title">{nextPost.title}</p>
                </div>
                <div className="nav-image-container">
                  <img src={nextPost.thumbnail} alt="" className="nav-image" />
                </div>
              </Link>
            ) : (
              <div className="nav-placeholder"></div>
            )}
          </div>
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
