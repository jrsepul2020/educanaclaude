#!/usr/bin/env node
/* Pruebas de la validación de formularios. Sin servidor y sin dependencias:
   Node ejecuta el TypeScript directamente. */
import { validar, textoAviso } from '../src/lib/formulario.ts';

let fallos = 0;
const fd = (o) => { const f = new FormData(); for (const [k, v] of Object.entries(o)) f.set(k, v); return f; };
const caso = (nombre, datos, esperaOk, esperaMotivo) => {
  const r = validar(fd(datos));
  const bien = r.ok === esperaOk && (esperaMotivo === undefined || r.motivo === esperaMotivo);
  if (!bien) fallos++;
  console.log(`  ${bien ? '\x1b[32m✓\x1b[0m' : '\x1b[31m✗\x1b[0m'} ${nombre.padEnd(34)} ${r.ok ? 'acepta' : 'rechaza: ' + r.motivo}`);
};

console.log('\n  VALIDACIÓN DE FORMULARIOS\n');
caso('formulario vacío',            {},                                                              false, 'nombre');
caso('honeypot relleno (bot)',      { empresa: 'x', nombre: 'Ana', telefono: '954409696', rgpd: 'on' }, false, 'honeypot');
caso('sin aceptar privacidad',      { nombre: 'Ana', telefono: '954409696' },                        false, 'rgpd');
caso('nombre de una letra',         { nombre: 'A', telefono: '954409696', rgpd: 'on' },              false, 'nombre');
caso('teléfono demasiado corto',    { nombre: 'Ana', telefono: '123', rgpd: 'on' },                  false, 'telefono');
caso('teléfono con letras',         { nombre: 'Ana', telefono: 'no te lo doy', rgpd: 'on' },         false, 'telefono');
caso('fijo con espacios',           { nombre: 'Ana', telefono: '954 40 96 96', rgpd: 'on' },         true);
caso('móvil con prefijo +34',       { nombre: 'Ana', telefono: '+34 686 08 55 66', rgpd: 'on' },     true);
caso('móvil sin espacios',          { nombre: 'Ana Mª Ruiz', telefono: '686085566', rgpd: 'on' },    true);
caso('mensaje con 3 enlaces',       { nombre: 'Ana', telefono: '954409696', rgpd: 'on', mensaje: 'http://a.es http://b.es http://c.es' }, false, 'spam-enlaces');
caso('mensaje con 1 enlace',        { nombre: 'Ana', telefono: '954409696', rgpd: 'on', mensaje: 'mi web http://a.es' }, true);
caso('mensaje larguísimo',          { nombre: 'Ana', telefono: '954409696', rgpd: 'on', mensaje: 'x'.repeat(2001) }, false, 'mensaje-largo');
caso('caso normal completo',        { nombre: 'Ana', telefono: '954409696', rgpd: 'on', necesidad: 'Inglés', mensaje: 'Para mi hija de 12 años.' }, true);

const texto = textoAviso(fd({ nombre: 'Ana', telefono: '954409696', necesidad: 'Inglés', contexto: 'ingles-b1', vacio: '' }), 'Solicitud');
const tieneTodo = ['Ana', '954409696', 'Inglés', 'ingles-b1'].every((v) => texto.includes(v));
const omiteVacios = !texto.includes('vacio');
if (!tieneTodo || !omiteVacios) fallos++;
console.log(`  ${tieneTodo && omiteVacios ? '\x1b[32m✓\x1b[0m' : '\x1b[31m✗\x1b[0m'} el aviso incluye los datos y omite los campos vacíos`);

console.log(fallos ? `\n  \x1b[31m${fallos} prueba(s) fallan\x1b[0m\n` : '\n  \x1b[32mTodas las pruebas pasan\x1b[0m\n');
process.exit(fallos ? 1 : 0);
