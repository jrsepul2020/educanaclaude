# 04 · Sistema de diseño

## 1. Tokens (fuente única de verdad)
Se definen una sola vez en CSS y Tailwind los consume. Ningún color ni espaciado suelto en los componentes.

```css
:root {
  /* Color */
  --color-red:      #CD1228;   /* marca, acciones */
  --color-red-ink:  #A50D1F;   /* rojo para texto sobre claro */
  --color-navy:     #14212F;   /* texto y fondos oscuros */
  --color-navy-700: #26364A;
  --color-cream:    #FAF7F2;   /* fondo base */
  --color-white:    #FFFFFF;
  --color-amber:    #FFC957;   /* destacados y campaña */
  --color-slate:    #4A5568;   /* texto secundario */
  --color-line:     rgb(20 33 47 / .10);

  /* Tipografía */
  --font-display: "Fraunces", Georgia, serif;
  --font-body:    "Inter", system-ui, sans-serif;

  /* Espaciado — base 4 */
  --space-1:4px; --space-2:8px;  --space-3:12px; --space-4:16px;
  --space-6:24px; --space-8:32px; --space-12:48px; --space-16:64px;
  --space-24:96px; --space-32:128px;

  /* Radios y elevación */
  --radius-sm:8px; --radius-md:12px; --radius-lg:20px; --radius-pill:999px;
  --shadow-sm: 0 1px 2px rgb(20 33 47 / .06);
  --shadow-md: 0 8px 24px rgb(20 33 47 / .08);

  /* Movimiento */
  --ease: cubic-bezier(.16,1,.3,1);
  --dur-fast:150ms; --dur-base:300ms; --dur-slow:450ms;

  /* Layout */
  --container: 1200px;
}
```

**Modo oscuro: no.** Una web de captación local no lo necesita y duplica el coste de QA. Si algún día se hace, los tokens ya están preparados.

## 2. Inventario de componentes
**Base:** `Button` (primario rojo, secundario navy, contorno, fantasma · tamaños sm/md/lg) · `Link` · `Badge` (nivel A2–C1, examen, "nuevo") · `Tag` · `Input`, `Select`, `Textarea`, `Checkbox` con estados de error · `Card` · `Accordion` · `Table` (horarios) · `Breadcrumb` · `Pagination`.

**Compuestos:** `Header` (navy, menú de 2 niveles, CTA) · `MobileBottomBar` (llamar/WhatsApp/info) · `Hero` · `CourseCard` · `ServiceHero` · `LevelLadder` (A2→C1) · `ExamCard` (Trinity/Cambridge/APTIS/EOI) · `StatBlock` (cifras grandes) · `StepsBlock` · `TestimonialCard` · `FAQ` (acordeón + schema FAQPage) · `ScheduleTable` (filtrable) · `CampaignBanner` (estacional) · `LeadForm` · `Footer` (navy) · `CTASection` (variantes crema y navy).

**Estados obligatorios en cada uno:** normal · hover · foco visible · activo · deshabilitado · cargando · error · vacío.

## 3. Entregable — hecho
Página **`/design-system`** dentro de la propia web (`web/src/pages/design-system.astro`): renderiza los tokens y los componentes **reales**, no una copia. Si alguien cambia un botón, aquí se ve cambiado. Con `noindex` y excluida del sitemap.

Levantarla en local:
```bash
cd web && npm run dev
```
y abrir `/design-system`.

## 4. Presupuesto de rendimiento — **medido**, no estimado
Resultados reales del primer build (`npm run build`, 16-09-2026):

| Métrica | Objetivo | **Medido** | |
|---|---|---|---|
| HTML de la home | < 60 KB | **18,9 KB** (4,7 KB gzip) | ✅ |
| CSS de todo el sitio | — | **26,6 KB** (6,2 KB gzip) | ✅ |
| Archivos JS servidos | 0 | **0** | ✅ |
| JS en línea (menú móvil) | — | **290 B** | ✅ |
| Fuentes | autoalojadas | 5 woff2 variables, por subconjunto | ✅ |
| Errores de `astro check` | 0 | **0** | ✅ |

**La home pasa de 1.388.186 B a 18.884 B: 74 veces menos HTML.** Y sin un solo archivo JavaScript, frente a los 89 scripts actuales.

| Resto de objetivos | Objetivo |
|---|---|
| LCP móvil (4G) | < 2,0 s |
| CLS | < 0,05 |
| INP | < 200 ms |
| Lighthouse móvil | ≥ 95 en las 4 categorías |
| Peticiones en la home | < 25 |

Comparación: la home actual son **1,39 MB de HTML, 89 scripts y 43 hojas de estilo**.

**Reglas que lo garantizan:** imágenes en AVIF/WebP con `astro:assets` y `width`/`height` siempre · fuentes `woff2` autoalojadas con `font-display: swap` y precarga de una sola variable · sin librerías de animación · sin jQuery · sin iframes de terceros por encima del pliegue · el mapa de Google se carga bajo demanda al hacer clic.
