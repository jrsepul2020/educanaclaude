#!/usr/bin/env node
/**
 * Verificación previa al lanzamiento.
 *
 * Comprueba contra `dist/` lo que de verdad hunde un rediseño:
 *  1. Que no se pierde ninguna URL con tráfico en Search Console.
 *  2. Que toda redirección apunta a una página que existe.
 *  3. Que no queda ningún enlace interno roto.
 *  4. Que los títulos y metadescripciones caben en el resultado de Google.
 *  5. Que hay un solo H1 por página y que las imágenes llevan alt.
 *  6. Que los datos estructurados están donde tienen que estar.
 *  7. Que lo que no debe indexarse lleva noindex.
 *  8. Que no se publican textos legales sin revisar ni datos sin rellenar.
 *
 * Uso:  npm run verificar
 * Sale con código 1 si hay algún fallo bloqueante.
 */
import { readFileSync, existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = existsSync('dist/client') ? 'dist/client' : 'dist';
const fallos = [];
const avisos = [];
const bien = [];
const fallo = (m) => fallos.push(m);
const aviso = (m) => avisos.push(m);
const ok = (m) => bien.push(m);

/* URLs con clics en los últimos 12 meses (export de Search Console).
   Perder una de estas es perder tráfico que ya está ganado. */
const URLS_CON_TRAFICO = [
  '/', '/academia-de-ingles-en-sevilla-este/', '/prueba-acceso-grado-superior-sevilla/',
  '/curso-selectividad-sevilla-pevau/', '/acceso-universidad-mayores-25/',
  '/curso-intensivos-selectividad-pevau/', '/horarios-cursos/',
  '/bolsa-de-trabajo-academia-sevilla/', '/clases-particulares-sevilla/',
  '/acceso-grado-medio-academia-sevilla/', '/conseguir-titulo-eso/', '/contacto/',
  '/cursos-verano-sevilla/', '/cursos-de-invierno/', '/quienes-somos-academia-educana/',
  '/noticias-academia-educana/', '/aviso-legal/', '/politica-de-privacidad/',
  '/politica-de-cookies/',
];

async function listar(dir) {
  const salida = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) salida.push(...(await listar(p)));
    else if (e.name.endsWith('.html')) salida.push(p);
  }
  return salida;
}

const archivos = await listar(DIST);
const rutaDe = (f) => ('/' + relative(DIST, f).replace(/index\.html$/, '').replace(/\\/g, '/')).replace(/\/+/g, '/');
const paginas = new Map(archivos.map((f) => [rutaDe(f), readFileSync(f, 'utf8')]));

// ── 1 · URLs con tráfico ────────────────────────────────────────────
const redirecciones = new Map();
const redFile = join(DIST, '_redirects');
if (existsSync(redFile)) {
  for (const l of readFileSync(redFile, 'utf8').split('\n')) {
    const t = l.split('#')[0].trim().split(/\s+/);
    if (t.length >= 3) redirecciones.set(t[0], { destino: t[1], codigo: +t[2] });
  }
  ok(`_redirects presente con ${redirecciones.size} reglas`);
} else {
  fallo('Falta public/_redirects en el build: no habría ninguna 301');
}

const perdidas = URLS_CON_TRAFICO.filter((u) => !paginas.has(u) && !redirecciones.has(u));
if (perdidas.length) fallo(`URLs con tráfico que desaparecen sin redirección: ${perdidas.join(', ')}`);
else ok(`Las ${URLS_CON_TRAFICO.length} URLs con tráfico se conservan`);

// ── 2 · Destinos de las redirecciones ───────────────────────────────
for (const [origen, r] of redirecciones) {
  if (r.codigo === 410) continue;
  if (origen.includes('*')) continue;
  if (!paginas.has(r.destino)) fallo(`La redirección ${origen} apunta a ${r.destino}, que no existe`);
}
if (!fallos.some((f) => f.includes('apunta a'))) ok('Toda redirección apunta a una página existente');

// ── 3 · Enlaces internos ────────────────────────────────────────────
const rotos = new Map();
for (const [ruta, html] of paginas) {
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const h = m[1];
    if (/\.(png|jpe?g|svg|webp|avif|xml|txt|css|js|ico|webmanifest|pdf)$/.test(h)) continue;
    if (h.startsWith('/api/')) continue;
    if (!paginas.has(h) && !redirecciones.has(h)) {
      if (!rotos.has(h)) rotos.set(h, new Set());
      rotos.get(h).add(ruta);
    }
  }
}
if (rotos.size) for (const [h, o] of rotos) fallo(`Enlace roto ${h} (en ${[...o].slice(0, 3).join(', ')})`);
else ok('Ningún enlace interno roto');

// ── 4 al 8 · Calidad página a página ────────────────────────────────
let sinSchemaLocal = 0, conDatosSinRellenar = [], legalesSinRevisar = [];
for (const [ruta, html] of paginas) {
  const interna = ruta.startsWith('/design-system') || ruta === '/gracias/' || ruta === '/404.html' || ruta.endsWith('404/');
  const noindex = /name="robots"[^>]*noindex/.test(html);

  const titulo = html.match(/<title>(.*?)<\/title>/s)?.[1] ?? '';
  const meta = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  if (!interna) {
    if (!titulo) fallo(`${ruta} no tiene <title>`);
    else if (titulo.length > 60) aviso(`${ruta} · título de ${titulo.length} caracteres, Google lo cortará`);
    if (!meta) fallo(`${ruta} no tiene metadescripción`);
    else if (meta.length > 160) fallo(`${ruta} · metadescripción de ${meta.length} caracteres`);
    if (!/rel="canonical"/.test(html)) fallo(`${ruta} no tiene canonical`);
  }

  const h1 = [...html.matchAll(/<h1[\s>]/g)].length;
  if (!interna && h1 !== 1) fallo(`${ruta} tiene ${h1} etiquetas H1 (debe haber exactamente una)`);

  for (const img of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt=/.test(img[0])) fallo(`${ruta} tiene una imagen sin alt`);
  }

  if (!interna && !/EducationalOrganization/.test(html)) sinSchemaLocal++;

  if (interna && !noindex) fallo(`${ruta} debería llevar noindex y no lo lleva`);

  if (!interna && /\[(PRECIO|FECHA|MES|HORARIO|SEDE|HORAS|SEMANAS|MESES|NOMBRE|CONFIRMAR|PENDIENTE)[^\]]*\]/.test(html)) {
    conDatosSinRellenar.push(ruta);
  }
  if (/pendiente de revisión/i.test(html)) legalesSinRevisar.push(ruta);
}

if (sinSchemaLocal) fallo(`${sinSchemaLocal} páginas públicas sin schema EducationalOrganization`);
else ok('Todas las páginas públicas llevan el schema del negocio local');

const nSchemaCourse = [...paginas.values()].filter((h) => /"@type":"Course"/.test(h)).length;
const nFaq = [...paginas.values()].filter((h) => /FAQPage/.test(h)).length;
ok(`Datos estructurados: ${nSchemaCourse} Course · ${nFaq} FAQPage`);

if (legalesSinRevisar.length) fallo(`Textos legales sin revisar: ${legalesSinRevisar.join(', ')}`);
else ok('Los textos legales están revisados');

if (conDatosSinRellenar.length) {
  fallo(`${conDatosSinRellenar.length} páginas con datos sin rellenar: ${conDatosSinRellenar.slice(0, 4).join(', ')}${conDatosSinRellenar.length > 4 ? '…' : ''}`);
}

// ── Peso ────────────────────────────────────────────────────────────
const pesada = [...paginas.entries()].map(([r, h]) => [r, Buffer.byteLength(h)]).sort((a, b) => b[1] - a[1])[0];
if (pesada[1] > 60_000) fallo(`${pesada[0]} pesa ${(pesada[1] / 1024).toFixed(1)} KB (presupuesto: 60 KB)`);
else ok(`Página más pesada: ${pesada[0]} · ${(pesada[1] / 1024).toFixed(1)} KB`);

// ── Informe ─────────────────────────────────────────────────────────
const c = { v: '\x1b[32m', r: '\x1b[31m', a: '\x1b[33m', g: '\x1b[90m', x: '\x1b[0m' };
console.log(`\n  VERIFICACIÓN DE MIGRACIÓN · ${paginas.size} páginas en ${DIST}\n`);
for (const m of bien) console.log(`  ${c.v}✓${c.x} ${m}`);
if (avisos.length) { console.log(''); for (const m of avisos) console.log(`  ${c.a}!${c.x} ${m}`); }
if (fallos.length) { console.log(''); for (const m of fallos) console.log(`  ${c.r}✗${c.x} ${m}`); }

console.log('');
if (fallos.length) {
  console.log(`  ${c.r}NO SE PUEDE LANZAR${c.x} · ${fallos.length} fallo(s) bloqueante(s), ${avisos.length} aviso(s)\n`);
  process.exit(1);
}
console.log(`  ${c.v}LISTO PARA LANZAR${c.x} · ${avisos.length} aviso(s)\n`);
