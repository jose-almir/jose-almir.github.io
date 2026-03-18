import { Seo } from "@/components/Seo";
import Link from "next/link";
import { TypingAnimation } from "@/components/TypingAnimation";
import { useEffect } from "react";
import { getPosts } from "@/lib/posts";
import { Card } from "@/components/Card";
import { useTranslation } from "@/lib/LanguageContext";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { locale: "pt" } },
      { params: { locale: "en" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params: { locale } }) {
  const posts = getPosts(locale).slice(0, 1); // Get most recent post in this language

  return {
    props: {
      posts,
      locale,
    },
  };
}

export default function Home({ posts, locale }) {
  const { t, isLoaded } = useTranslation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      document.body.style.setProperty("--mouse-x", `${clientX}px`);
      document.body.style.setProperty("--mouse-y", `${clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    { name: "Java", id: "java" },
    { name: "TypeScript", id: "ts" },
    { name: "Spring Boot", id: "spring" },
    { name: "Next.js", id: "nextjs" },
    { name: "React", id: "react" },
  ];

  if (!isLoaded) return null;

  return (
    <>
      <Seo path="/" />
      <div className="spotlight" />
      <div className="home-wrapper">
        <div className="container home-main-container">
          <div className="presentation">
            <div className="avatar-presentation wave-animation" />
            <div className="separator-presentation" />
            <div className="text-presentation">
              <h1 className="title mt-xs mb-xs">
                {t("home.title")}
                <span className="name">
                  <TypingAnimation text="Almir" />
                </span>
              </h1>
              <p className="desc mt-xs mb-xs">
                {t("home.description_1")}
                <Link href={`/${locale}/blog`}>{t("home.description_link")}</Link>
                {t("home.description_2")}
              </p>
              <div className="tech-stack-container">
                {techStack.map((tech) => (
                  <div key={tech.id} className="tech-pill">
                    <img 
                      src={`https://skillicons.dev/icons?i=${tech.id}&theme=dark`} 
                      alt={tech.name} 
                      title={tech.name}
                    />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="home-blog-highlights">
            <h2 className="section-title">{t("home.blog_highlights")}</h2>
            <div className="highlights-grid">
              {posts.map((post) => (
                <Card key={post.id} post={post} />
              ))}
            </div>
            <div className="view-all-container">
              <Link href={`/${locale}/blog`} className="view-all-btn">
                {t("home.view_all")}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
