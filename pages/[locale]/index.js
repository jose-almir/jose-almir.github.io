import { Seo } from "@/components/Seo";
import Link from "next/link";
import { TypingAnimation } from "@/components/TypingAnimation";
import { useEffect } from "react";
import { getPosts } from "@/lib/posts";
import { Card } from "@/components/Card";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects";
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
  const posts = getPosts(locale).slice(0, 1);
  const projects = getProjects(locale).slice(0, 3);

  return {
    props: {
      posts,
      projects,
      locale,
    },
  };
}

export default function Home({ posts, projects, locale }) {
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
    { name: "Node.js", id: "nodejs" },
    { name: "React", id: "react" },
    { name: "Angular", id: "angular" },
  ];

  if (!isLoaded) return null;

  return (
    <>
      <Seo
        path="/"
        title={t("home.seo_title")}
        description={t("home.seo_description")}
        keywords={t("home.seo_keywords")}
      />
      <div className="spotlight" />
      <div className="home-wrapper">
        <div className="container home-main-container">
          <section className="presentation">
            <div className="hero-identity">
              <div className="avatar-presentation wave-animation" />
              <p className="intro-line">
                <span className="name">
                  <TypingAnimation text="José Almir" />
                </span>
              </p>
            </div>

            <div className="text-presentation">
              <h1 className="title mt-xs mb-xs">{t("home.title")}</h1>
              <div className="desc-block mt-xs mb-xs">
                <p className="desc">{t("home.description")}</p>
              </div>

              <div className="hero-actions">
                <Link href={`/${locale}/projects`} className="cta-button-main">
                  {t("home.primary_cta")}
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="cta-button-secondary">
                  {t("home.resume_cta")}
                  <i className="bi bi-file-earmark-text"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jose-almir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button-secondary"
                >
                  LinkedIn
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="mailto:jr.cod.dev@gmail.com" className="cta-button-secondary">
                  {t("home.contact_button")}
                  <i className="bi bi-envelope"></i>
                </a>
              </div>

              <div className="trust-points" aria-label={t("home.trust_points_label")}>
                <div className="trust-item">
                  <strong>{t("home.trust_point_1_title")}</strong>
                  <span>{t("home.trust_point_1_desc")}</span>
                </div>
                <div className="trust-item">
                  <strong>{t("home.trust_point_2_title")}</strong>
                  <span>{t("home.trust_point_2_desc")}</span>
                </div>
                <div className="trust-item">
                  <strong>{t("home.trust_point_3_title")}</strong>
                  <span>{t("home.trust_point_3_desc")}</span>
                </div>
              </div>

              <div className="tech-stack-container" aria-label={t("home.stack_label")}>
                {techStack.map((tech) => (
                  <div key={tech.id} className="tech-pill">
                    <img
                      src={`https://skillicons.dev/icons?i=${tech.id}&theme=dark`}
                      alt={tech.name}
                      title={tech.name}
                      width="48"
                      height="48"
                    />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="home-projects-highlights">
            <h2 className="section-title">{t("home.featured_projects")}</h2>
            <div className="projects-grid-featured">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} locale={locale} />
              ))}
            </div>
            <div className="view-all-container">
              <Link href={`/${locale}/projects`} className="view-all-btn">
                {t("home.view_all_projects")}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </section>

          <section className="home-blog-highlights">
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
          </section>

          <section className="home-contact-cta">
            <div className="contact-cta-content">
              <h3>{t("home.contact_title")}</h3>
              <p>{t("home.contact_description")}</p>
              <div className="contact-cta-actions">
                <Link href="mailto:jr.cod.dev@gmail.com" className="cta-button-main">
                  {t("home.contact_button")}
                  <i className="bi bi-envelope"></i>
                </Link>
                <a
                  href="https://www.linkedin.com/in/jose-almir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button-secondary"
                >
                  LinkedIn
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
