// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: 'https://<lyg6666>.github.io',
  base: '/',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          strict: false,
        },
      ],
    ],
  },
});
