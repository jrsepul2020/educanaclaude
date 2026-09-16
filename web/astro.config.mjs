// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.academiaeducana.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/design-system'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
