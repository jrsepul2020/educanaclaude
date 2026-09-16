#!/usr/bin/env node
/**
 * Genera vercel.json a partir de redirecciones.mjs.
 *
 * Una sola fuente de verdad para las 301. Se ejecuta antes de cada build,
 * así que el archivo del alojamiento nunca se queda desincronizado del
 * mapa. Si algún día se cambia de alojamiento, se añade aquí el formato
 * que toque y se borra el anterior.
 */
import { writeFileSync } from 'node:fs';
import { redirecciones } from '../redirecciones.mjs';

const vercel = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  trailingSlash: true,
  redirects: Object.entries(redirecciones).map(([origen, destino]) => ({
    // /alumno/[...ruta] → /alumno/:ruta*  (sintaxis de Vercel)
    source: origen.replace(/\/\[\.\.\.(\w+)\]$/, '/:$1*'),
    destination: destino,
    permanent: true,
  })),
  headers: [
    {
      source: '/_astro/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      ],
    },
  ],
};

writeFileSync('vercel.json', JSON.stringify(vercel, null, 2) + '\n');
console.log(`vercel.json generado · ${vercel.redirects.length} redirecciones 301`);
