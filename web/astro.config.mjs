// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.academiaeducana.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      /* Noindex y demos internas no deben aparecer en el sitemap. */
      filter: (page) => {
        const path = new URL(page).pathname;
        return !path.startsWith('/design-system')
          && !path.startsWith('/demo-')
          && !path.startsWith('/gracias');
      },
    }),
  ],
  /* Sitio 100 % estático: se sube por FTP a un alojamiento clásico.
     Sin adaptador no hay funciones de servidor, así que los formularios
     los atienden dos endpoints PHP en public/api/ (ver ahí el porqué).

     Las 301 NO van aquí: Astro no admite redirigir un comodín a una
     ruta fija (/alumno/* → /contacto/). Se generan como .htaccess
     desde redirecciones.mjs con scripts/generar-config-host.mjs. */
  output: 'static',

  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
