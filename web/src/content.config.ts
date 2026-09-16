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
    metaTitulo: z.string().max(60),
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

/* El inglés tiene su propio esquema: una página de nivel o de examen
   necesita cosas que una de refuerzo escolar no (partes del examen,
   nivel de partida, convocatorias). Doc 03 §2. */
const ingles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/ingles' }),
  schema: z.object({
    titulo: z.string(),
    h1: z.string(),
    entradilla: z.string().min(120).max(420),
    metaTitulo: z.string().max(60),
    metaDescripcion: z.string().min(80).max(160),
    // publico = navegación y conversión · nivel/examen = captación SEO
    eje: z.enum(['publico', 'nivel', 'examen', 'formato']),
    orden: z.number().default(50),
    datos: z.object({
      partida: z.string(),
      duracion: z.string(),
      dias: z.string(),
      grupo: z.string(),
      desde: z.string(),
    }),
    puntos: z.array(z.object({ titulo: z.string(), texto: z.string() })).min(3),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(4).max(8),
    relacionados: z.array(z.string()).default([]),
  }),
});

/* Textos legales: NO los redacta la agencia. Se porta el texto vigente
   del cliente y lo revisa quien corresponda antes de publicar. */
const legales = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/legales' }),
  schema: z.object({
    titulo: z.string(),
    metaDescripcion: z.string().min(40).max(160),
    actualizado: z.string(),
    revisado: z.boolean().default(false),
  }),
});

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/noticias' }),
  schema: z.object({
    titulo: z.string(),
    entradilla: z.string().max(300),
    metaDescripcion: z.string().min(60).max(160),
    fecha: z.coerce.date(),
    categoria: z.enum(['Convocatorias', 'PEvAU', 'Accesos', 'Inglés', 'Academia']),
    autor: z.string(),
    borrador: z.boolean().default(false),
  }),
});

/* Calendario oficial de exámenes Trinity, tomado de la web actual.
   Es el diferencial de la marca y hasta ahora estaba enterrado. */
const convocatorias = defineCollection({
  loader: file('./src/data/convocatorias.json'),
  schema: z.object({
    id: z.string(),
    tipo: z.string(),
    titulo: z.string(),
    escrito: z.string(),
    oral: z.string(),
    sede: z.string(),
  }),
});

/* Testimonios reales, tomados de la web actual. Sólo se publican los
   que existen: dos. Hacen falta más, con su convocatoria y su curso. */
const testimonios = defineCollection({
  loader: file('./src/data/testimonios.json'),
  schema: z.object({
    id: z.string(),
    texto: z.string().min(60),
    nombre: z.string(),
    contexto: z.string(),
  }),
});

export const collections = { cursos, horarios, ingles, legales, noticias, convocatorias, testimonios };
