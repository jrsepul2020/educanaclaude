# Educana · Plan de nueva web

Rediseño completo de [academiaeducana.com](https://www.academiaeducana.com). Estos documentos son el trabajo previo al diseño: sin ellos, rediseñar es decorar.

## Documentos
| # | Documento | Contenido |
|---|---|---|
| 00 | [Auditoría de la web actual](00-auditoria-web-actual.md) | Stack detectado, rendimiento medido, inventario de URLs, problemas |
| 01 | [Estrategia de marca](01-estrategia-marca.md) | Posicionamiento, públicos, estacionalidad, mensajes, tono de voz |
| 02 | [Identidad visual](02-identidad-visual.md) | Logotipo, paleta, tipografía, estilo de diseño, fotografía |
| 03 | [Arquitectura y UX](03-arquitectura-ux.md) | Mapa del sitio, redirecciones, plantillas, conversión, accesibilidad |
| 04 | [Sistema de diseño](04-sistema-diseno.md) | Tokens, componentes, presupuesto de rendimiento |
| 05 | [SEO y contenido](05-seo-contenido.md) | Keywords, schema, esquema de contenido, medición, checklist |
| 06 | [Stack y arquitectura](06-stack-arquitectura.md) | Astro vs Next vs Vite, pila completa, estructura del repo |
| 07 | [Análisis de Search Console](07-analisis-search-console.md) | **Datos reales de 12 meses. Manda sobre el resto.** |
| 08 | [Datos pendientes](08-datos-pendientes.md) | Los 137 huecos que tiene que rellenar el cliente, por página |

## Decisiones cerradas
- **Marca única Educana.** El inglés es un servicio, no una marca aparte.
- **Logotipo intocable.** El sistema visual se construye a su alrededor (y se resuelve su uso sobre fondo oscuro).
- **Contenido editado desde el código** (Markdown/MDX). Sin CMS por ahora; Keystatic queda preparado para más adelante.
- **Sin tienda ni campus en esta fase.** Prioridad: una web que posicione y salga rápido.
- **Área de alumno retirada.** Se borra el PHP de 2013 del servidor, no sólo se redirige.
- **Inglés es sección, no página:** hub + 10 subpáginas (3 por público, 7 por nivel y examen).
- **Astro 7 + Tailwind 4, sin React.** La home compila en 18,9 KB de HTML y 0 archivos JS. Reservas y área de alumno caben después sin cambiar de framework.
- **Dirección visual A** implementada en los tokens. Cambiar a B o C es editar un archivo.

## Decisiones pendientes
1. **Dirección visual:** A · Editorial de barrio *(recomendada)* · B · Cuaderno · C · Señal. → canvas de identidad
   *(Fraunces + Inter quedan descartadas: demasiado usadas, aspecto de plantilla.)*
2. **Precios en la web:** sí, no, o "desde X €". → doc 05
3. ⚠️ **Sesión de fotos — ahora es requisito, no mejora.** Las imágenes del cliente son stock, no fotos de la academia. → doc 02 §5
4. ~~Verificar las dos páginas de PEvAU~~ → ✅ **resuelto con datos: la maestra es `/curso-selectividad-sevilla-pevau/`.** → doc 07 §4
5. ~~¿Qué hacemos con `/alumno/login.php`?~~ → ✅ **se retira.** Pendiente sólo: avisar a quien lo use y **borrar el PHP del servidor**, no sólo redirigir. → doc 03 §3
6. **¿Ofrecéis oposiciones?** 1.417 impresiones al año en consultas de oposiciones sin página que las atienda. → doc 07 §6

## Bloqueantes para lanzar
1. **Los datos entre corchetes.** 137 marcadores, listados uno a uno en el [doc 08](08-datos-pendientes.md): precios, fechas de convocatoria, horarios de atención, cifras confirmadas.
2. **Los textos legales.** Aviso legal, privacidad y cookies están deliberadamente vacíos y en `noindex`: los valida quien asesora legalmente a la academia, no nosotros.
3. **La sesión de fotos.** Sin ella el sitio va sin imágenes, porque poner stock contradice el posicionamiento.
4. **Elegir dirección visual** (está montada la A).
5. **Endpoint del formulario** — necesita modo servidor y Resend.

## Lo que hace falta del cliente para arrancar
- [x] ~~Acceso a Search Console~~ → **línea base capturada** (doc 07)
- [ ] Acceso a **Google Analytics**
- [ ] Acceso al dominio (DNS) y al hosting actual
- [ ] Logotipo en vectorial + versión fondo claro + una tinta + isotipo «ae» para favicon
- [ ] Horarios, precios y calendario de convocatorias del curso
- [ ] **Sesión de fotos** (media jornada): aulas, profesorado, fachada
- [ ] 6–8 testimonios reales · nº de centro examinador Trinity · datos verificados de años y alumnos

## Entregables visuales
- [Identidad visual](https://claude.ai/artifact/XgmhqvZ2T3PSxikp4g7PNW) — 3 direcciones + sistema (color, tipografía, logotipo, fotografía, componentes). Fuente en [`identidad/`](../identidad/).

## Wireframes
[Canvas de wireframes](https://claude.ai/artifact/N2iKsd5qEhxjKZsMd3c22r) — 10 plantillas en gris, con el porqué de cada bloque anclado a Search Console. Archivos fuente en [`wireframes/`](../wireframes/).

## Fases
| Fase | Duración | Estado |
|---|---|---|
| 0 · Descubrimiento y auditoría | — | ✅ Hecha |
| 1 · Estrategia de marca | 1 sem | ✅ Borrador listo, pendiente de validar |
| 2 · Identidad visual | 1 sem | ✅ [Canvas publicado](https://claude.ai/artifact/XgmhqvZ2T3PSxikp4g7PNW) · pendiente elegir dirección |
| 3 · Arquitectura y UX | 1–2 sem | ✅ Cerrada con datos |
| 3b · Wireframes (10 plantillas) | — | ✅ [Canvas publicado](https://claude.ai/artifact/N2iKsd5qEhxjKZsMd3c22r) |
| 4 · Sistema de diseño en código | 1 sem | ✅ **Construido y compilando** → [`web/`](../web/) |
| 5 · Contenido y copy | 1–2 sem | ✅ **Escrito** · faltan los datos del cliente |
| 6 · Maquetación en Astro | 2–3 sem | ✅ **34 páginas, 0 errores** |
| 7 · Migración, 301 y lanzamiento | 1 sem | ▶️ Siguiente |
