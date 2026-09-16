/**
 * Mapa de redirecciones 301 · doc 03 §3
 *
 * Fuente única de verdad. Lo consume `astro.config.mjs`, así que funciona
 * con cualquier adaptador — Vercel, Cloudflare, Netlify — sin mantener un
 * archivo distinto por alojamiento. Antes había un `_redirects` de
 * Cloudflare que Vercel ignoraba en silencio.
 *
 * CONTRASTADO CONTRA SEARCH CONSOLE (12 meses). No cambiar sin mirar los
 * datos: la primera versión de este mapa iba al revés y habría tirado a la
 * basura la página de PEvAU que recibe 148 clics al año.
 */
export const redirecciones = {
  // Canibalización de selectividad — la maestra es la que tiene 148 clics
  '/preparacion-selectividad-sevilla':   '/curso-selectividad-sevilla-pevau/',
  '/pruebas-acceso-universidad':         '/acceso-universidad-mayores-25/',

  // Duplicado literal
  '/horarios-2':                         '/horarios-cursos/',

  // Web antigua, anterior a WordPress: 5.220 impresiones y posición 10
  '/educaline.html':                     '/',
  '/educaline-mantenimiento':            '/',

  // Tienda WooCommerce — nunca llegó a abrir («está en obras»)
  '/tienda':                             '/contacto/',
  '/carrito':                            '/contacto/',
  '/finalizar-compra':                   '/contacto/',
  '/mi-cuenta':                          '/contacto/',
  '/mi-perfil':                          '/contacto/',
  '/producto/reserva':                   '/contacto/',
  '/reserva-clases':                     '/contacto/',

  // Área de alumno retirada.
  // ⚠️ Redirigir NO basta: hay que BORRAR los .php del servidor.
  //    Es un formulario de acceso de 2013 expuesto en producción.
  '/alumno/[...ruta]':                   '/contacto/',

  // Campus LearnDash: duplicados -copy y -2 que ensuciaban el índice.
  // Sin tráfico real (3 clics al año entre todos).
  '/lessons/[...ruta]':                  '/',
  '/courses/[...ruta]':                  '/',
};

/** Las que apuntan a una página concreta y se pueden comprobar. */
export const destinos = Object.entries(redirecciones)
  .filter(([origen]) => !origen.includes('['))
  .map(([origen, destino]) => ({ origen: origen + (origen.includes('.') ? '' : '/'), destino }));
