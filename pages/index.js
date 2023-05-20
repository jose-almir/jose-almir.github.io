import { Seo } from "@/components/Seo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Seo />
      <h1>BEM VINDO!</h1>
      <Link href="/blog">Ir para o blog</Link>
    </>
  );
}
