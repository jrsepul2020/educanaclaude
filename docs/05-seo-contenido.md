# 05 · SEO, contenido y medición
> Revisado el 2026-09-16 con datos reales de Search Console. Ver [doc 07](07-analisis-search-console.md).

## 1. El problema, en una línea
**328.729 impresiones · 3.898 clics · CTR 1,19% · el 78% de los clics son de marca.**
No hay un problema de visibilidad: hay un problema de CTR y de cobertura de intenciones.

## 2. Mapa de palabras clave (una intención por página, con datos)

| Página | Consulta principal | Impr./12m | Pos. hoy |
|---|---|---|---|
| Home | academia sevilla este | 512 | 5,2 |
| **Clases de apoyo** ★ | clases de apoyo sevilla | 17.155 (clúster) | 9,2–20,9 |
| Clases particulares | clases particulares sevilla este | 12.014 | 7,0 |
| PEvAU (maestra) | academia selectividad sevilla | 21.763 | 27,6 |
| Intensivos PEvAU | intensivo selectividad sevilla | 8.048 | 12,1 |
| Grado Superior | prueba acceso grado superior sevilla | 16.598 | 11,7 |
| Grado Medio | acceso grado medio sevilla | 9.692 | 13,3 |
| Mayores 25/45 | prueba acceso universidad mayores 25 sevilla | 9.917 | 10,0 |
| Título ESO | sacarse la eso adultos sevilla | 7.264 | 8,9 |
| **Inglés (hub)** | academia ingles sevilla este | 67.812 | 26,0 |
| **Inglés C1** ★ | academia ingles c1 sevilla | 1.832 | 14,0 |
| **Inglés B1** ★ | academia b1 ingles sevilla | ~1.100 | 17–19 |
| **Inglés B2** ★ | intensivo de inglés b2 en sevilla | ~1.000 | 27,4 |
| **Trinity** ★ | academia trinity sevilla | 2.908 (clúster) | 4,2–13,2 |
| **Cambridge** ★ | academia cambridge sevilla | 667 | 44,2 |
| **APTIS** ★ | academia aptis sevilla | 919 | 34,1 |
| **Fechas y convocatorias** ★ | prueba de acceso a grado superior 2026 | — | **1,5–5,8** |
| Verano / Invierno | cursos de verano sevilla | 6.579 | 21,7–34,7 |
| Horarios | horarios academia educana | 4.372 | **2,5** |

★ = página nueva. **Ancla geográfica obligatoria: "Sevilla Este"** — ese clúster rinde al 2,83% de CTR, más del doble que la media del sitio. En "Sevilla" a secas compites contra el centro y pierdes.

## 3. Prioridad nº 1: títulos y metadescripciones
Es la acción con mejor relación esfuerzo/resultado de todo el proyecto, y **se puede ejecutar sobre el WordPress actual antes de que la web nueva exista**.

| Página | Pos. | Clics hoy | Esperables | Factor |
|---|---|---|---|---|
| `/clases-particulares-sevilla/` | 7,0 | 49 | ~420 | **×8,6** |
| `/horarios-cursos/` | 2,5 | 77 | ~480 | **×6,2** |
| `/conseguir-titulo-eso/` | 8,9 | 41 | ~188 | ×4,6 |
| `/acceso-grado-medio-…/` | 13,3 | 43 | ~174 | ×4,0 |

**Fórmula de título:** `[Servicio] en Sevilla Este | [Prueba o beneficio concreto] · Academia Educana`
**Fórmula de meta:** qué consigue + dato diferencial (grupos de 6–8, centro examinador Trinity, 20 años) + llamada a la acción.

## 4. Datos estructurados (hoy prácticamente inexistentes)
- **Toda la web:** `EducationalOrganization` + `LocalBusiness` con el NAP del doc 07, horario, geo y `sameAs` a Google Business Profile.
- **Cada página de servicio:** `Course` con `provider`, `courseMode`, `educationalLevel` y `hasCourseInstance` con fechas reales.
- **FAQ de cada servicio:** `FAQPage` — gana superficie en el resultado, que es justo lo que falta.
- **Noticias:** `Article`. **Migas:** `BreadcrumbList`. **Reseñas:** `AggregateRating` sólo si son reales.

## 5. Contenido por página de servicio (esqueleto fijo)
1. H1 con la consulta + "Sevilla Este"
2. Párrafo de respuesta directa (a quién sirve y qué consigue), 40–60 palabras
3. **Datos duros en caja:** duración · días y horas · tamaño de grupo · precio o "desde" · próxima convocatoria
4. Qué incluye
5. Cómo trabajamos (3–4 pasos)
6. Profesor de esa materia
7. Testimonio relacionado
8. **FAQ** — 5 a 8 preguntas reales de las que llegan por teléfono
9. CTA contextual

> El punto 3 decide la conversión y es justo lo que la web actual esconde. **Un precio orientativo baja el volumen de contactos pero sube mucho su calidad.** Merece la pena.

## 6. SEO local
- Google Business Profile: categorías, fotos nuevas, horario, servicios, publicaciones estacionales.
- **NAP idéntico** en web, schema, GBP y directorios (ver doc 07 §8).
- Reseñas pedidas sistemáticamente al cerrar cada convocatoria de exámenes.

## 7. Medición
- GA4 + Search Console desde el día 1 (**la línea base ya está capturada**: 3.898 clics / 328.729 impresiones / 12 meses).
- Eventos: envío de formulario, clic en teléfono, clic en WhatsApp, descarga de horarios, vista de precios.
- Página `/gracias/` como confirmación de conversión.
- Consent Mode v2 real.

**Objetivos a 12 meses del lanzamiento:**
| Métrica | Hoy | Objetivo |
|---|---|---|
| CTR medio | 1,19% | ≥ 3% |
| Clics/mes | 325 | 900–1.200 |
| % de clics no-marca | 22% | ≥ 50% |
| Páginas con >50 clics/año | 9 | 20+ |

## 8. Checklist de lanzamiento
- [x] Exportar informe de páginas y consultas de Search Console (12 meses) — **hecho, doc 07**
- [ ] Rastreo completo del sitio actual (Screaming Frog) para inventario de títulos y metas
- [ ] Portar los títulos y metas que ya funcionan de Rank Math
- [ ] Mapa de 301 del doc 03 ejecutado y probado URL por URL
- [ ] Conservar las reglas `http → https` y `sin-www → www`
- [ ] Decidir qué hacer con `/alumno/login.php` **antes** de migrar
- [ ] `sitemap.xml` nuevo enviado y el antiguo retirado
- [ ] `robots.txt` limpio · `/design-system` en noindex
- [ ] Ningún enlace interno apuntando a URLs retiradas
- [ ] Vigilancia diaria de Search Console las 4 semanas siguientes
