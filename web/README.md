# Educana · web

Astro 7 + Tailwind 4 + TypeScript estricto. Sin React: la web no envía ni un archivo JavaScript.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + build. Debe terminar con 0 errores
```

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
| `public/_redirects` | Mapa de 301 contrastado con Search Console |

## Reglas que no se saltan

1. **Ningún color, fuente o radio suelto en un componente.** Todo sale de los tokens.
2. **Rojo sobre tinta está prohibido** — 2,88:1, falla el contraste. Sobre oscuro, ámbar o blanco.
3. **Antes de cambiar una URL**, mirar Search Console. El primer mapa de redirecciones iba al revés y habría tirado la página de PEvAU que funciona.
4. **`npm run build` con 0 errores** antes de subir nada. `astro check` corre dentro.
5. **Añadir JavaScript exige justificarlo.** Hoy la home son 18,9 KB de HTML y 0 archivos JS.

## Pendiente

- Sustituir `public/logo-educana.svg` por el vectorial real del cliente.
- Rellenar los `[PRECIO]`, `[FECHA]` y demás marcadores de `src/data/`.
- Endpoint `/api/contacto` (necesita modo servidor + Resend).
- Las 20 páginas restantes: esto es el sistema, no el sitio (fase 6).
