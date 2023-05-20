import { Footer } from "@/components/Footer";
import { Layout } from "@/components/Layout";
import "@/styles/globals.scss";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-KV71RHKNM9"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KV71RHKNM9', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <ThemeProvider defaultTheme="dark" enableSystem={false}>
        <Layout>
          <Head>
            <title>jose-almir</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
}
