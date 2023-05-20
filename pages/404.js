import { Seo } from "@/components/Seo";
import { TypingAnimation } from "@/components/TypingAnimation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.pathname);
  }, []);

  return (
    <>
      <Seo title="404 | jose-almir" description="Não encontramos esta página" />
      <div className="container full-height">
        <h1 className="mt-xs mb-xs" style={{ fontSize: "4.5rem" }}>
          <TypingAnimation text="404" />
        </h1>
        <p>
          Não encontramos esta página:{" "}
          <span style={{ fontStyle: "italic" }}>
            {url}
          </span>
        </p>
        <Link className="back-btn mt-xs" href="/">
          <i className="bi bi-house"></i> Início
        </Link>
      </div>
    </>
  );
}
