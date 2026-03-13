import { Seo } from "@/components/Seo";
import Link from "next/link";
import { TypingAnimation } from "@/components/TypingAnimation";
import { useEffect } from "react";
import { getPosts } from "@/lib/posts";
import { Card } from "@/components/Card";

export async function getStaticProps() {
  const posts = getPosts().slice(0, 1); // Limitar a apenas 1 post mais recente

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
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

  return (
    <>
      <Seo />
      <div className="spotlight" />
      <div className="home-wrapper">
        <div className="container home-main-container">
          <div className="presentation">
            <div className="avatar-presentation wave-animation" />
            <div className="separator-presentation" />
            <div className="text-presentation">
              <h1 className="title mt-xs mb-xs">
                Olá, meu nome é{" "}
                <span className="name">
                  <TypingAnimation text="Almir" />
                </span>
              </h1>
              <p className="desc mt-xs mb-xs">
                Aproveite o <Link href="/blog">blog</Link> e conheça meus{" "}
                projetos de desenvolvimento.
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
            <h2 className="section-title">Destaques do Blog</h2>
            <div className="highlights-grid">
              {posts.map((post) => (
                <Card key={post.id} post={post} />
              ))}
            </div>
            <div className="view-all-container">
              <Link href="/blog" className="view-all-btn">
                Ver todas as postagens
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
