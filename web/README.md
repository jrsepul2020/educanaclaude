# Educana · web

Astro 7 + Tailwind 4 + TypeScript estricto. Sin React: la web no envía ni un archivo JavaScript.

**Alojamiento: Vercel.** El *Root Directory* del proyecto tiene que ser `web`.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + build. Debe terminar con 0 errores
npm run probar     # pruebas de la validación de formularios
npm run verificar  # build + verificación previa al lanzamiento
```

**`npm run verificar` es la que manda.** Comprueba que no se pierde ninguna de las 19 URLs
con tráfico, que las 301 apuntan a páginas que existen, que no hay enlaces rotos, que
títulos y metas caben en Google, que hay un solo H1 por página, que el schema está donde
toca y que no se publican legales sin revisar ni datos sin rellenar. Si falla, no se lanza.

**`/design-system`** es la referencia viva de tokens y componentes. Renderiza los componentes reales, así que no se desactualiza. Lleva `noindex` y está fuera del sitemap.

## Dónde está cada cosa

| | |
|---|---|
| `src/styles/tokens.css` | **Fuente única de verdad.** Color, tipografía, forma, movimiento. Cambiar de dirección visual (A/B/C) es editar sólo este archivo. |
| `src/components/ui/` | Piezas base: Button, Badge, Card, Field, Faq |
| `src/components/blocks/` | Bloques de página: Hero, DataBox, ScheduleTable, TrinityBand, LeadForm, CampaignBanner, StatBlock |
| `src/components/layout/` | Header, Footer, MobileBar, Seo, Schema |
| `src/data/` | Contenido en Markdown y JSON, validado con Zod en `src/content.config.ts` |
| `src/lib/nap.ts` | NAP oficial. Debe coincidir con Google Business Profile |
| `redirecciones.mjs` | Mapa de 301 contrastado con Search Console. Única fuente de verdad: `vercel.json` se genera de aquí en cada build |

## Reglas que no se saltan

1. **Ningún color, fuente o radio suelto en un componente.** Todo sale de los tokens.
2. **Rojo sobre tinta está prohibido** — 2,88:1, falla el contraste. Sobre oscuro, ámbar o blanco.
3. **Antes de cambiar una URL**, mirar Search Console. El primer mapa de redirecciones iba al revés y habría tirado la página de PEvAU que funciona.
4. **`npm run build` con 0 errores** antes de subir nada. `astro check` corre dentro.
5. **Añadir JavaScript exige justificarlo.** Hoy la home son 18,9 KB de HTML y 0 archivos JS.

## Variables de entorno
Copiar `.env.example` a `.env`. Sin `PUBLIC_GA4_ID` no se carga analítica ni aparece el
banner de cookies. Sin `RESEND_API_KEY` el formulario responde 503 y avisa al usuario de
que llame por teléfono, en vez de perder el contacto en silencio.

## Pendiente
- Rellenar los marcadores entre corchetes de `src/data/` — están listados en [docs/08](../docs/08-datos-pendientes.md).
- Portar y revisar los tres textos legales.
- Los vectoriales del logotipo (los PNG actuales salen de un original de 350 px).
- La sesión de fotos: hoy el sitio va sin imágenes a propósito.
