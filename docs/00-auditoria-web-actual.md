# 00 · Auditoría de la web actual
**Dominio:** https://www.academiaeducana.com · **Fecha:** 2026-09-16

## 1. Pila técnica detectada
| Elemento | Detectado |
|---|---|
| CMS | WordPress 7.0.4 |
| Tema | **Avada** + Fusion Builder + Fusion Core (page builder pesado) |
| Slider | LayerSlider 6.11.4 |
| Ecommerce | **WooCommerce** (carrito, mi cuenta, finalizar compra, producto "reserva") |
| Campus | **LearnDash (sfwd-lms)** + ld-content-cloner → 28 lecciones de inglés publicadas |
| Formularios | Contact Form 7 |
| Otros | cookie-law-info, call-now-button, whatsapp-for-wordpress, embed-office-viewer |
| SEO | Rank Math |
| Base JS | jQuery |

## 2. Rendimiento (medición directa del HTML de portada)
- **HTML de la home: 1,39 MB** (una home moderna debería estar entre 30–80 KB).
- **89 etiquetas `<script src>`** y **43 hojas de estilo** en una sola página.
- Cadena crítica de render enorme: jQuery + Avada + LayerSlider + Woo + LearnDash se cargan en **todas** las páginas, incluso en las que no usan nada de eso.
- Diagnóstico: el problema no es "el diseño está viejo", es que **la arquitectura obliga a cargar toda la plataforma en cada visita**. Con este stack, por mucho que se rediseñe, las Core Web Vitals seguirán siendo malas en móvil (que es donde está el tráfico local).

## 3. Inventario de contenidos (sitemap real)
### Páginas de servicio (las que generan negocio)
1. `/` — home
2. `/academia-de-ingles-en-sevilla-este/` — inglés (Trinity, Cambridge, APTIS, EOI)
3. `/clases-particulares-sevilla/`
4. `/cursos-de-invierno/`
5. `/cursos-verano-sevilla/`
6. `/preparacion-selectividad-sevilla/`
7. `/curso-selectividad-sevilla-pevau/`
8. `/curso-intensivos-selectividad-pevau/`
9. `/pruebas-acceso-universidad/`
10. `/prueba-acceso-grado-superior-sevilla/`
11. `/acceso-grado-medio-academia-sevilla/`
12. `/acceso-universidad-mayores-25/`
13. `/conseguir-titulo-eso/`

### Institucionales / soporte
- `/quienes-somos-academia-educana/`, `/contacto/`, `/horarios-cursos/`, `/horarios-2/` (duplicada), `/noticias-academia-educana/`, `/bolsa-de-trabajo-academia-sevilla/`
- Legales: `/aviso-legal/`, `/politica-de-privacidad/`, `/politica-de-cookies/`

### Transaccional / privado
- Woo: `/tienda/`, `/producto/reserva/`, `/carrito/`, `/finalizar-compra/`, `/mi-cuenta/`, `/reserva-clases/`, `/mi-perfil/`
- LearnDash: 28 URLs `/lessons/...` (temas 1–9 de gramática inglesa, con duplicados `-copy` y `-2` indexados)

## 4. Problemas detectados (más allá del diseño)
1. **Canibalización SEO**: 4 páginas compiten por "selectividad / PEvAU" y 2 por "horarios". Hay que consolidar y redirigir.
2. **Contenido duplicado indexado**: lecciones `-copy` y `-2` de LearnDash en el sitemap público. No deberían indexarse.
3. **Datos estructurados pobres**: sólo `WebSite`, `WebPage`, `Article`, `Person`. Falta lo que realmente da resultados a una academia local: `EducationalOrganization` / `LocalBusiness`, `Course`, `FAQPage`, `AggregateRating`.
4. **Identidad inconsistente**: el logotipo actual (`ae` rojo + "academia educana" en gris claro) pierde legibilidad a tamaño pequeño y el texto claro sobre fondo blanco es casi invisible.
5. **Posicionamiento difuso**: la home presenta 9 servicios al mismo nivel. Nadie sabe en 3 segundos a quién se dirige la academia.
6. **Arquitectura de marca sin resolver**: existe un prototipo previo de "Educana Inglés" como marca aparte, mientras la web trata inglés como un servicio más. Hay que decidirlo antes de diseñar nada.

## 5. Activos reutilizables
- ⚠️ **CORRECCIÓN (16-09-2026):** revisé una a una las imágenes de la carpeta `ACADEMIA EDUCANA/fotos` y **son fotografía de stock**, no fotos de la academia: niños rubios con letras de colores, un grupo de adultos con gráficos de negocio, una profesora sonriendo a cámara. En un documento anterior las di por reales; me equivoqué. **No hay fotografía propia utilizable.** Ver doc 02 §5.
- Prueba social cuantificada y acreditación Trinity (abajo) siguen siendo activos sólidos.
- Prueba social cuantificada: "6.796+ estudiantes", "+20 años", centro examinador oficial Trinity.
- Prototipo de sistema visual previo (navy #142130 / rojo #DF0923 / amarillo #FFC057, Plus Jakarta Sans + Inter) → sirve como punto de partida, no como decisión cerrada.
