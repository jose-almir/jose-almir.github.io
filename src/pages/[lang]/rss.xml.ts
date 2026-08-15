import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { useTranslations } from "../../i18n";
import { byLang, slugFor } from "../../utils/content";

import type { APIRoute } from "astro";

export const getStaticPaths = () => {
  return [{ params: { lang: "pt" } }, { params: { lang: "en" } }];
};

export const GET: APIRoute = async (context) => {
  const lang = context.params.lang as "pt" | "en";
  const t = useTranslations(lang);
  const blog = await getCollection("blog", byLang(lang));

  return rss({
    title: t("seo.title"),
    description: t("seo.description"),
    site: context.site || "https://almirdev.com",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/${lang}/blog/${slugFor(post.id, lang)}/`,
    })),
    customData: `<language>${lang === "pt" ? "pt-br" : "en-us"}</language>`,
  });
};
