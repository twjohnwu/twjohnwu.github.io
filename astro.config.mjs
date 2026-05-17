// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import mermaid from 'astro-mermaid';

export default defineConfig({
  site: 'https://twjohnwu.github.io',
  base: '/',
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'en'],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    mermaid({ theme: 'default', autoTheme: true }),
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap(),
    vue()
  ]
});
