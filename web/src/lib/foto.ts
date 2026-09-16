import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/**
 * Resuelve una foto por su ruta dentro de `public/fotos/`.
 *
 * Si el archivo existe, devuelve la URL pública. Si no, devuelve `null`
 * y la página muestra un `PhotoPlaceholder` en su lugar. El cliente sube
 * el archivo con el nombre exacto indicado en el placeholder — sin
 * tocar código — y en el siguiente build la foto real sustituye al hueco.
 */
export function foto(ruta: string): string | null {
  const abs = fileURLToPath(new URL(`../../public/fotos/${ruta}`, import.meta.url));
  return existsSync(abs) ? `/fotos/${ruta}` : null;
}
