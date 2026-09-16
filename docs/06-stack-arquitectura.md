# 06 · Stack técnico y arquitectura

## 1. La decisión: **Astro**

### Por qué Vite queda descartado de entrada
Vite no es un competidor de Astro o Next: **es el empaquetador**. Astro lo usa por debajo. "Vite a secas" significa una SPA de React que entrega un HTML vacío y lo rellena con JavaScript en el navegador. Para una web cuyo negocio entero depende de posicionar en búsquedas locales, es la peor opción disponible.

### Astro frente a Next.js
| Criterio | Astro | Next.js |
|---|---|---|
| Modelo | HTML estático; JavaScript sólo en las "islas" que lo necesitan | React en servidor y cliente |
| JS en una página de servicio | **0 KB** | 90–200 KB de base |
| LCP móvil esperado | 0,8–1,5 s | 1,5–2,5 s |
| Contenido editorial | `Content Collections` con esquema validado (Zod) de serie | Hay que construirlo |
| Curva y mantenimiento | Baja | Alta (RSC, caché, revalidación) |
| Dónde gana | Webs de captación y contenido | Aplicaciones con sesión y estado |

**Tu caso:** 20 páginas de contenido, SEO local como motor del negocio, sin tienda ni campus por ahora y prioridad en "salir rápido y posicionar". **Astro, sin discusión.**

### Y lo que puede venir después
Mencionaste reservas de clases particulares y un área de alumno como posibles. **No obligan a Next:**
- **Reservas** → Astro en modo servidor para esa ruta + Stripe Checkout (o sólo disponibilidad + confirmación por email). Se activa por página, sin convertir toda la web en dinámica.
- **Área de alumno** → rutas renderizadas en servidor + Supabase (autenticación, base de datos, RLS). Ya tienes Supabase disponible en tu entorno.

Astro permite **elegir el renderizado página a página**: la web sigue siendo HTML estático servido desde CDN, y sólo `/reservas` o `/area-alumno` se ejecutan en servidor. Es lo mejor de los dos mundos y no hay que rehacer nada.

## 2. Pila completa
| Capa | Elección | Motivo |
|---|---|---|
| Framework | **Astro 7.3.2** + TypeScript estricto | HTML por defecto, islas a demanda |
| Estilos | **Tailwind CSS 4** sobre los tokens del doc 04 | CSS nativo, configuración en el propio CSS |
| Islas interactivas | **Ninguna, de momento.** Ver abajo | La home no envía ni un archivo JS |
| Contenido | **Content Collections** en Markdown con esquema Zod, en `src/data/` | Decisión tomada: se edita desde el código |
| Imágenes | `astro:assets` → AVIF/WebP, tamaños responsivos, sin CLS | |
| Formularios | Endpoint de Astro + **Resend** + protección antispam (honeypot + límite de envíos) | Sin dependencias de terceros pesadas |
| SEO | `@astrojs/sitemap` + componente propio de metadatos y JSON-LD | |
| Alojamiento | **Vercel** | Despliegue desde git, CDN global, previsualizaciones por rama. ⚠️ El proyecto vive en `web/`, así que el **Root Directory del proyecto de Vercel tiene que ser `web`** |
| Analítica | GA4 + Search Console (+ Plausible si se quiere algo ligero) | |
| Control de versiones | Git desde el primer commit | Hoy el proyecto no está en git |

### Corrección: React no ha hecho falta
Planteé islas de React para la tabla de horarios, el acordeón de FAQ, el menú móvil y el formulario. Al construirlo, ninguna se justifica:

| Componente | Cómo está resuelto | Coste |
|---|---|---|
| Acordeón de FAQ | `<details>` nativo | **0 KB** y accesible de serie |
| Menú móvil | script propio | ~290 B en línea |
| Tabla de horarios filtrable | mejora progresiva con JS propio | ~400 B; **sin JS la tabla se ve entera**, que es lo que importa |
| Formulario | HTML nativo + validación del navegador | 0 KB |

Añadir React habría supuesto 90–200 KB para sustituir menos de 1 KB de código propio. **React se añadirá el día que un componente lo pida de verdad** — por ejemplo un buscador de horarios con estado complejo o el área de alumno. Astro permite añadirlo entonces sin tocar nada de lo ya construido.

## 3. Estructura del repositorio
```
educana/
├── src/
│   ├── components/
│   │   ├── ui/            Button, Badge, Card, Input, Accordion…
│   │   ├── blocks/        Hero, StatBlock, ExamCard, CTASection, LeadForm…
│   │   └── layout/        Header, Footer, MobileBottomBar, Seo, Schema
│   ├── data/              contenido (fuera de src/content, como pide Astro 7)
│   │   ├── cursos/        un .md por servicio (11 archivos)
│   │   ├── noticias/
│   │   ├── horarios/      curso.json — datos de la tabla
│   │   └── testimonios/
│   ├── content.config.ts  esquemas Zod de todas las colecciones
│   ├── layouts/           Base, Servicio, Articulo, Legal
│   ├── pages/             rutas = mapa del sitio del doc 03
│   ├── styles/tokens.css  los tokens del doc 04
│   └── lib/nap.ts         NAP oficial, usado por el schema y el pie
│   └── lib/               schema.ts, seo.ts, utils.ts
├── public/                favicon, logotipos, robots.txt, _redirects
└── docs/                  estos documentos
```

El contenido vive en `src/content` separado de la maquetación: cambiar un precio o un horario es editar un `.mdx`, no tocar un componente. Y el día que el personal quiera editar sin código, se conecta **Keystatic** sobre esos mismos archivos sin migrar nada.

## 4. Calidad antes de lanzar
Lighthouse ≥ 95 en móvil · axe sin incidencias críticas · prueba real en un iPhone y un Android de gama media, no sólo en el simulador del navegador · validación de datos estructurados con la herramienta de Google · las 301 comprobadas una a una · formularios probados con envíos reales.
