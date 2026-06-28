// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://almirdev.com",
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "vitesse-light",
        dark: "nord",
      },
    },
  },
});
