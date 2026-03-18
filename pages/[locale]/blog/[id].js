import { Seo } from "@/components/Seo";
import { getPost, getPosts, getAllPosts } from "@/lib/posts";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
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
import { FloatingAvatar } from "@/components/FloatingAvatar";

import { useTranslation } from "@/lib/LanguageContext";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://jose-almir.github.io"
    : "http://localhost:3000";

export function getStaticPaths() {
  const ptPosts = getPosts("pt");
  const enPosts = getPosts("en");

  const ptPaths = ptPosts.map((p) => ({
    params: { locale: "pt", id: p.id },
  }));
  const enPaths = enPosts.map((p) => ({
    params: { locale: "en", id: p.id },
  }));

  return {
    paths: [...ptPaths, ...enPaths],
    fallback: false,
  };
}

export function getStaticProps({ params: { id, locale } }) {
  const post = getPost(id, locale);
  const allPosts = getPosts(locale);
  const totalPosts = getAllPosts();

  // Find other versions of this post using 'ref'
  const translations = {};
  if (post && post.ref) {
    totalPosts
      .filter(p => p.ref === post.ref)
      .forEach(p => {
        translations[p.lang] = p.id;
      });
  } else if (post) {
    // Fallback: if no ref, assume same id for other languages if file exists
    ["pt", "en"].forEach(lang => {
      const other = totalPosts.find(p => p.id === id && p.lang === lang);
      if (other) translations[lang] = other.id;
    });
  }

  const currentIndex = allPosts.findIndex((p) => p.id === id);
  
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  if (post) {
    return { 
      props: { 
        post,
        locale,
        translations,
        prevPost: prevPost ? { id: prevPost.id, title: prevPost.title, thumbnail: prevPost.thumbnail } : null,
        nextPost: nextPost ? { id: nextPost.id, title: nextPost.title, thumbnail: nextPost.thumbnail } : null
      } 
    };
  } else {
    return { notFound: true };
  }
}

function CopyButton({ code, t }) {
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
      title={t("blog.copy_link")}
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
          <i className="bi bi-check2" style={{ marginRight: "4px" }}></i>{t("blog.copied")}
        </>
      ) : (
        <>
          <i className="bi bi-clipboard" style={{ marginRight: "4px" }}></i>
          {t("blog.copy_link").split(" ")[0]}
        </>
      )}
    </button>
  );
}

export default function Post({ post, prevPost, nextPost, locale, translations }) {
  const { theme } = useTheme();
  const router = useRouter();
  const { t, language, isLoaded, setAvailableTranslations } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (translations) {
      setAvailableTranslations(translations);
    }
    return () => setAvailableTranslations({});
  }, [translations]);

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

  const handleBack = () => {
    // Check if there's history within our app. 
    // Simply using history.length > 1 isn't perfect but for SSG it works well
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push("/blog");
    }
  };

  if (!isLoaded) return null;

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
          <FloatingAvatar title={post.title} url={`${baseUrl}/blog/${post.id}`} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            {post.readingTime && (
              <span style={{ fontSize: "0.85rem", opacity: 0.55 }}>
                <i className="bi bi-clock" style={{ marginRight: "5px" }}></i>
                {post.readingTime} {t("blog.reading_time")}
              </span>
            )}
          </div>
          <ReactMarkdown
            className="blog-post"
            children={post.content}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const codeStr = String(children).replace(/\n$/, "");
                return !inline && match ? (
                  <div style={{ position: "relative" }}>
                    <CopyButton code={codeStr} t={t} />
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
              <Link href={`/${locale}/blog/${prevPost.id}`} className="nav-link prev">
                <div className="nav-image-container">
                  <img src={prevPost.thumbnail} alt="" className="nav-image" />
                </div>
                <div className="nav-content">
                  <span className="nav-label">
                    <i className="bi bi-arrow-left"></i> {t("blog.previous")}
                  </span>
                  <p className="nav-title">{prevPost.title}</p>
                </div>
              </Link>
            ) : (
              <div className="nav-placeholder"></div>
            )}
            
            {nextPost ? (
              <Link href={`/${locale}/blog/${nextPost.id}`} className="nav-link next">
                <div className="nav-content">
                  <span className="nav-label">
                    {t("blog.next")} <i className="bi bi-arrow-right"></i>
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
          <h4>{t("blog.comments")}</h4>
          <Giscus
            id="comments"
            key={`giscus-${locale}-${post.id}`}
            repo="jose-almir/jose-almir.github.io"
            repoId="R_kgDOJcTwDQ"
            category="Announcements"
            categoryId="DIC_kwDOJcTwDc4CWYcC"
            mapping="pathname"
            strict="0"
            reactionsEnabled="0"
            emitMetadata="0"
            theme={theme === "dark" ? "dark" : "light"}
            lang={language === 'pt' ? 'pt' : 'en'}
            inputPosition="top"
          />
        </div>
      </div>
    </>
  );
}
