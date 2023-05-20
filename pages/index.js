import { Seo } from "@/components/Seo";
import Link from "next/link";
import { TypingAnimation } from "@/components/TypingAnimation";

export default function Home() {
  return (
    <>
      <Seo />
      <div className="pt-lg pb-lg">
        <div className="container full-height">
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
            </div>
          </div>
          <div className="social">
            <span className="social-item">
              <a href="https://www.linkedin.com/in/jose-almir/" target="_blank">
                <i className="bi bi-linkedin"></i>
              </a>
            </span>
            <span className="social-item">
              <a href="https://www.instagram.com/jose.almir23/" target="_blank">
                <i className="bi bi-instagram"></i>
              </a>
            </span>
            <span className="social-item">
              <a href="mailto:jr.cod.dev@gmail.com">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
