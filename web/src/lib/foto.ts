/**
 * Resuelve una foto por su ruta dentro de `public/fotos/`.
 *
 * Si el archivo existe, devuelve la URL pública. Si no, devuelve `null`
 * y la página muestra un `PhotoPlaceholder` en su lugar. El cliente sube
 * el archivo con el nombre exacto indicado en el placeholder — sin
 * tocar código — y en el siguiente build la foto real sustituye al hueco.
 *
 * El inventario lo resuelve Vite al compilar, no `fs` al ejecutar. La
 * versión anterior miraba el disco con `existsSync` y una ruta relativa
 * a `import.meta.url`: en `astro dev` funcionaba, pero en el build el
 * módulo queda empaquetado en otra carpeta, la ruta dejaba de apuntar a
 * `public/` y TODAS las fotos devolvían null. En producción la web salía
 * sin una sola foto. Con `import.meta.glob` la lista se calcula en el
 * build y no depende de dónde acabe el archivo.
 */
const disponibles = new Set(
  Object.keys(
    import.meta.glob('/public/fotos/**/*.{jpg,jpeg,png,webp,avif,svg}', { eager: false }),
  ).map((ruta) => ruta.replace('/public/fotos/', '')),
);

export function foto(ruta: string): string | null {
  return disponibles.has(ruta) ? `/fotos/${ruta}` : null;
}
