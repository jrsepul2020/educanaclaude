#!/usr/bin/env node
/**
 * Saca de dist/ las páginas de trabajo del rediseño.
 *
 * Están en .gitignore, así que no llegan a un despliegue desde el
 * repositorio. Pero el sitio se sube por FTP desde este ordenador, donde
 * los archivos SÍ existen, y el build las genera: sin este paso
 * acabarían publicadas. Llevan noindex, pero son borradores y no pintan
 * nada en el servidor del cliente.
 */
import { rmSync, readdirSync } from 'node:fs';

/* También los .DS_Store que mete macOS al abrir carpetas: por FTP se
   suben igual que todo lo demás y quedan servidos en el dominio. */
const fuera = readdirSync('dist').filter((d) => d.startsWith('demo-') || d === '.DS_Store');
for (const d of fuera) rmSync(`dist/${d}`, { recursive: true, force: true });

let ds = 0;
const barrer = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) barrer(`${dir}/${e.name}`);
    else if (e.name === '.DS_Store') { rmSync(`${dir}/${e.name}`, { force: true }); ds++; }
  }
};
barrer('dist');

console.log(`Fuera de dist: ${fuera.join(', ') || 'nada'}${ds ? ` · ${ds} .DS_Store` : ''}`);
