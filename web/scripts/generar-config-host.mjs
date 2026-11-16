#!/usr/bin/env node
/**
 * Genera public/.htaccess a partir de redirecciones.mjs.
 *
 * Una sola fuente de verdad para las 301. Se ejecuta antes de cada build,
 * así que el archivo del alojamiento nunca se queda desincronizado del
 * mapa. Si algún día se cambia de alojamiento, se añade aquí el formato
 * que toque y se borra el anterior.
 *
 * Antes generaba vercel.json. Se cambió a Apache (18-11-2026) al pasar
 * el sitio a un alojamiento clásico por FTP.
 *
 * Va en public/ para que el build lo copie a dist/client/ y suba junto
 * al resto: si se escribiera fuera, habría que acordarse de subirlo a
 * mano cada vez, que es justo como se pierden las redirecciones.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { redirecciones } from '../redirecciones.mjs';

/** Escapa lo que en una expresión regular de Apache significaría otra cosa. */
const re = (s) => s.replace(/[.+?^${}()|[\]\\]/g, '\\$&');

const reglas = Object.entries(redirecciones).flatMap(([origen, destino]) => {
  /* Comodín de Astro → comodín de Apache. /alumno/[...ruta] captura
     /alumno/ y todo lo que cuelgue, que es lo que hacía en Vercel. */
  const comodin = origen.match(/^(.*)\/\[\.\.\.\w+\]$/);
  if (comodin) {
    return [`RewriteRule ^${re(comodin[1].slice(1))}(/.*)?$ ${destino} [R=301,L]`];
  }
  /* Con barra final y sin ella en la misma regla: las URLs del WordPress
     antiguo están indexadas CON barra (/tienda/), y una regla escrita
     sin barra no captura esa variante. Es el fallo que apareció en el
     primer despliegue. */
  return [`RewriteRule ^${re(origen.slice(1))}/?$ ${destino} [R=301,L]`];
});

const htaccess = `# ────────────────────────────────────────────────────────────
# GENERADO AUTOMÁTICAMENTE · no editar a mano.
# Fuente: redirecciones.mjs · se regenera en cada build.
# ────────────────────────────────────────────────────────────

Options -Indexes
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On

  # ── Canónico: todo a https://www y con barra final ──────────
  # El sitio declara www en el canonical y en el sitemap. Sin esto,
  # Google ve cuatro URLs para cada página y reparte la autoridad.
  RewriteCond %{HTTPS} !=on [OR]
  RewriteCond %{HTTP_HOST} !^www\\. [NC]
  RewriteRule ^(.*)$ https://www.academiaeducana.com/$1 [R=301,L]

  # ── Barra final ─────────────────────────────────────────────
  # Astro genera /pagina/index.html y el sitio usa trailingSlash
  # siempre. Sin esta regla, /pagina y /pagina/ serían dos URLs.
  # Se excluyen los archivos reales para no tocar .css, .jpg ni .php.
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_URI} !\\.[a-zA-Z0-9]{2,5}$
  RewriteCond %{REQUEST_URI} !/$
  RewriteRule ^(.*)$ /$1/ [R=301,L]

  # ── 301 de la web antigua ───────────────────────────────────
  # CONTRASTADAS CONTRA SEARCH CONSOLE. Ver redirecciones.mjs.
${reglas.map((r) => '  ' + r).join('\n')}
</IfModule>

# ── Caché ─────────────────────────────────────────────────────
# Los archivos de /_astro/ llevan un hash en el nombre: si cambian,
# cambia el nombre, así que se pueden cachear para siempre.
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css                 "access plus 1 year"
  ExpiresByType application/javascript   "access plus 1 year"
  ExpiresByType image/jpeg               "access plus 6 months"
  ExpiresByType image/png                "access plus 6 months"
  ExpiresByType image/webp               "access plus 6 months"
  ExpiresByType font/woff2               "access plus 1 year"
  ExpiresByType text/html                "access plus 0 seconds"
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(css|js|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set X-Frame-Options "SAMEORIGIN"
</IfModule>

# ── Compresión ────────────────────────────────────────────────
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
  AddOutputFilterByType DEFLATE application/json image/svg+xml
</IfModule>

# ── El .env con la clave de Resend NO se sirve nunca ──────────
# Está dentro de public_html porque los endpoints PHP lo leen, así
# que esta regla es lo único que impide descargarlo desde el navegador.
<FilesMatch "^\\.env">
  Require all denied
</FilesMatch>
`;

mkdirSync('public', { recursive: true });
writeFileSync('public/.htaccess', htaccess);
console.log(`public/.htaccess generado · ${reglas.length} redirecciones 301`);
