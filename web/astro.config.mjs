// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.academiaeducana.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/design-system'),
    }),
  ],
  /* Estático por defecto: las 33 páginas se sirven desde CDN.
     Sólo los endpoints de formulario marcan prerender = false y se
     ejecutan como función serverless. */
  adapter: vercel(),
  /* Las 301 NO van aquí: Astro no admite redirigir un comodín a una
     ruta fija (/alumno/* → /contacto/). Se generan en vercel.json
     desde redirecciones.mjs con scripts/generar-config-host.mjs. */

  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
