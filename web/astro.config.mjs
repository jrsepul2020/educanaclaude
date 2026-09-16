// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.academiaeducana.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/design-system'),
    }),
  ],
  /* Estático por defecto: las 34 páginas se sirven desde CDN.
     Sólo los endpoints de formulario marcan prerender = false y se
     ejecutan como función. Cambiar a Vercel es sustituir este adaptador. */
  adapter: cloudflare({ imageService: 'passthrough' }),
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
