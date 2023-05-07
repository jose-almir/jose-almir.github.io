import { Layout } from "@/components/layout";
import "@/styles/globals.scss";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" enableSystem={false}>
        <Layout>
          <Head>
            <title>jose-almir</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <base target="_blank" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
