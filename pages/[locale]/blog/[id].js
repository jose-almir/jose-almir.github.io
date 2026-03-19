import { Seo } from "@/components/Seo";
import { getPost, getPosts, getAllPosts } from "@/lib/posts";
import { Comments } from "@/components/Comments";
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
import mediumZoom from "medium-zoom";
import { useState, useEffect } from "react";
import { ShareButtons } from "@/components/ShareButtons";
import { FloatingAvatar } from "@/components/FloatingAvatar";
import { CopyButton } from "@/components/CopyButton";

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

// CopyButton is now a separate component

export default function Post({ post, prevPost, nextPost, locale, translations }) {
  const { theme } = useTheme();
  const router = useRouter();
  const { t, language, isLoaded, setAvailableTranslations } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (translations && isClient) {
      setAvailableTranslations(translations);
    }
    return () => setAvailableTranslations({});
  }, [translations, isClient]);

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
        title={`${post.title}`}
        description={post.desc}
        keywords={post.tags}
        image={`${baseUrl}${post.thumbnail}`}
        path={`/blog/${post.id}`}
      />
      {/* Scroll progress bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <div className="container blog">
        <div className="pt-md">
          <FloatingAvatar title={post.title} url={`${baseUrl}/${locale}/blog/${post.id}`} />
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
          <ShareButtons title={post.title} url={`${baseUrl}/${locale}/blog/${post.id}`} />
        </div>

        <div className="post-navigation-container mt-lg mb-lg">
          <div className="hr mb-lg"></div>
          <div className="post-navigation">
            {prevPost ? (
              <Link href={`/${locale}/blog/${prevPost.id}`} className="nav-link prev">
                <div className="nav-image-container">
                  <img src={prevPost.thumbnail} alt={prevPost.title} className="nav-image" width="80" height="80" />
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
                  <img src={nextPost.thumbnail} alt={nextPost.title} className="nav-image" width="80" height="80" />
                </div>
              </Link>
            ) : (
              <div className="nav-placeholder"></div>
            )}
          </div>
        </div>

        <Comments id={post.id} locale={locale} title={t("blog.comments")} />
      </div>
    </>
  );
}
