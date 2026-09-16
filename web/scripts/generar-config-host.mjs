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
  /* Se emiten DOS variantes de cada regla, con barra final y sin ella.
     Las URLs del WordPress antiguo están indexadas CON barra
     (/tienda/), pero Vercel compara la ruta literal: una regla escrita
     sin barra no captura la versión con barra y la petición acaba en
     404. Es el fallo que apareció en el primer despliegue. */
  redirects: Object.entries(redirecciones).flatMap(([origen, destino]) => {
    // /alumno/[...ruta] → /alumno/:ruta*  (sintaxis de Vercel)
    const base = origen.replace(/\/\[\.\.\.(\w+)\]$/, '/:$1*');
    const fuentes = base.includes('.') || base.endsWith('*')
      ? [base, base.endsWith('*') ? base.replace(/\/:(\w+)\*$/, '/:$1*/') : base + '/']
      : [base, base + '/'];
    return [...new Set(fuentes)].map((source) => ({ source, destination: destino, permanent: true }));
  }),
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
