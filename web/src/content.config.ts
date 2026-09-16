import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/* El contenido vive separado de la maquetación: cambiar un precio o un
   horario es editar un .md, no tocar un componente. El esquema Zod hace
   que un campo olvidado rompa el build, no la web en producción. */

const cursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/cursos' }),
  schema: z.object({
    titulo: z.string(),
    h1: z.string(),
    // Respuesta directa: 40–60 palabras. Google la usa como fragmento.
    entradilla: z.string().min(120).max(420),
    metaTitulo: z.string().max(65),
    metaDescripcion: z.string().min(80).max(160),
    categoria: z.enum(['estudios', 'accesos', 'ingles']),
    orden: z.number().default(50),
    // La caja de datos duros — obligatoria en toda página de servicio
    datos: z.object({
      duracion: z.string(),
      dias: z.string(),
      grupo: z.string(),
      desde: z.string(),
      convocatoria: z.string(),
    }),
    incluye: z.array(z.object({ titulo: z.string(), texto: z.string() })).min(3),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(5).max(8),
    imagen: z.string().optional(),
    relacionados: z.array(z.string()).default([]),
  }),
});

const horarios = defineCollection({
  loader: file('./src/data/horarios/curso.json'),
  schema: z.object({
    id: z.string(),
    curso: z.string(),
    nivel: z.string(),
    dias: z.string(),
    horario: z.string(),
    grupo: z.string(),
    desde: z.string(),
    plazas: z.number().int().min(0),
    categoria: z.string(),
  }),
});

export const collections = { cursos, horarios };
