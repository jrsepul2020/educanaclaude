# 07 · Análisis de Search Console (12 meses)
Datos reales exportados el 2026-09-16. **Este documento manda sobre cualquier suposición anterior.**

## 1. La foto global
| Métrica | Valor | Lectura |
|---|---|---|
| Clics | **3.898** (≈325/mes) | Bajo para 20 años de trayectoria |
| Impresiones | **328.729** | La visibilidad existe |
| CTR medio | **1,19%** | **Aquí está el problema** |

**El diagnóstico no es que no te vean. Es que te ven y no te hacen clic.** 328.000 impresiones convertidas al 1,19% es un resultado anómalo: un sitio sano en estas posiciones debería estar entre el 3% y el 5%.

## 2. El 78% de los clics son de marca
| Origen | Clics | % |
|---|---|---|
| Buscan "educana" (ya te conocen) | **1.309** | **78%** |
| Todo lo demás (captación nueva) | 370 | 22% |

*(sobre las consultas visibles en el informe; Google anonimiza la cola larga)*

Las consultas de marca rinden al **21,95% de CTR** y en posición 1–3. Las de captación, al 0,1–0,8%.

**Traducción de negocio: la web no capta alumnos nuevos, sólo atiende a los que ya conocen la academia.** Ese es el problema a resolver, no el diseño.

## 3. Rendimiento por página

| Página | Clics | Impr. | Pos. | CTR | Lectura |
|---|---|---|---|---|---|
| `/` (https) | 1.585 | 105.286 | 22,8 | 1,51% | |
| `/` (http, índice heredado) | 1.056 | 43.276 | 6,4 | 2,44% | **68% del tráfico entra por la home** |
| `/academia-de-ingles-en-sevilla-este/` | 295 | **67.812** | 26,0 | 0,44% | 2ª en visibilidad, atascada en página 3 |
| `/prueba-acceso-grado-superior-sevilla/` | 194 | 16.598 | 11,7 | 1,17% | Mejor página de captación |
| `/curso-selectividad-sevilla-pevau/` | **148** | 21.763 | 27,6 | 0,68% | **La PEvAU que funciona** |
| `/acceso-universidad-mayores-25/` | 148 | 9.917 | 10,0 | 1,49% | Sólida |
| `/curso-intensivos-selectividad-pevau/` | 136 | 8.048 | 12,1 | 1,69% | Sólida, merece página propia |
| `/horarios-cursos/` | 77 | 4.372 | **2,5** | 1,76% | Posición 2,5 y sólo 77 clics |
| `/bolsa-de-trabajo-academia-sevilla/` | 65 | 4.144 | 9,3 | 1,57% | Más tráfico que clases particulares |
| `/clases-particulares-sevilla/` | 49 | 12.014 | 7,0 | **0,41%** | **La mayor fuga del sitio** |
| `/acceso-grado-medio-academia-sevilla/` | 43 | 9.692 | 13,3 | 0,44% | |
| `/conseguir-titulo-eso/` | 41 | 7.264 | 8,9 | 0,56% | |
| `/educaline.html` | 15 | 5.220 | 10,1 | 0,29% | **Web antigua, sigue viva** |
| `/cursos-verano-sevilla/` | 6 | 4.115 | 21,7 | 0,15% | |
| `/preparacion-selectividad-sevilla/` | **2** | 567 | 54,7 | — | **Prácticamente muerta** |

### Potencial sólo por arreglar título y meta (sin mejorar posiciones)
Aplicando el CTR normal de cada posición:

| Página | Pos. | Clics hoy | Esperables | Factor |
|---|---|---|---|---|
| `/clases-particulares-sevilla/` | 7,0 | 49 | ~420 | **×8,6** |
| `/horarios-cursos/` | 2,5 | 77 | ~480 | **×6,2** |
| `/conseguir-titulo-eso/` | 8,9 | 41 | ~188 | ×4,6 |
| `/acceso-grado-medio-…/` | 13,3 | 43 | ~174 | ×4,0 |
| `/prueba-acceso-grado-superior-…/` | 11,7 | 194 | ~298 | ×1,5 |

> **Esto se cobra en semanas, no en meses.** Reescribir 12 títulos y 12 metadescripciones, con datos estructurados que enriquezcan el resultado, puede duplicar el tráfico sin ganar una sola posición. Es lo primero que hay que hacer, incluso antes de que la web nueva esté lista.

## 4. Corrección a mi plan anterior ⚠️
En el doc 03 propuse redirigir `/curso-selectividad-sevilla-pevau/` hacia `/preparacion-selectividad-sevilla/`. **Los datos dicen justo lo contrario:**

| | Clics | Impresiones | Posición |
|---|---|---|---|
| `/curso-selectividad-sevilla-pevau/` | **148** | **21.763** | 27,6 |
| `/preparacion-selectividad-sevilla/` | 2 | 567 | 54,7 |

La redirección va **al revés**: `/curso-selectividad-sevilla-pevau/` es la página maestra de PEvAU y se conserva. Ya está corregido en el doc 03. Es exactamente el motivo por el que la regla era no mover nada sin mirar estos datos.

Segunda corrección: `/curso-intensivos-selectividad-pevau/` (136 clics, posición 12,1) **no se subordina a nadie**. Rinde bien sola y se queda como página propia.

## 5. El clúster de inglés: la mayor oportunidad del sitio
| | Consultas | Clics | Impresiones | CTR |
|---|---|---|---|---|
| Inglés, niveles y exámenes | 258 | **59** | **48.890** | **0,12%** |
| └ por nivel (B1 / B2 / C1) | 47 | 3 | 7.895 | 0,04% |
| └ Trinity | 31 | 17 | 2.908 | 0,58% |

48.890 impresiones y 59 clics. **Hay una sola página de inglés intentando responder a 258 consultas distintas.** Ejemplos con cero clics:

| Consulta | Impr. | Pos. |
|---|---|---|
| academia ingles c1 sevilla | 1.832 | 14,0 |
| academia de ingles en sevilla este | 869 | 11,7 |
| academia aptis sevilla | 919 | 34,1 |
| intensivo de inglés b2 en sevilla | 756 | 27,4 |
| academia cambridge sevilla | 667 | 44,2 |
| academia ingles trinity | 502 | 13,2 |
| academia ingles b1 sevilla | 280 | 19,1 |
| intensivo b1 sevilla | 276 | 17,7 |

**Decisión que sale de aquí:** el inglés deja de ser una página y pasa a ser una sección con página propia por **nivel** (B1, B2, C1) y por **examen** (Trinity, Cambridge, APTIS, EOI). Son 7 páginas nuevas sobre ~30.000 impresiones ya existentes, hoy desatendidas. Y encaja con el diferencial de ser centro examinador Trinity.

## 6. Otras señales accionables
**Apoyo y refuerzo escolar: 105 consultas, 17.155 impresiones, 16 clics (0,09%).**
Y no existe página de clases de apoyo: está en el menú pero no en el sitemap. Es el servicio más buscado y el único sin página. `clases de apoyo` (716 impr, pos 20,9), `academias de apoyo escolar en sevilla` (307, pos 16,6), `academias apoyo escolar sevilla` (101, **pos 5,14**, 0 clics).

**"Sevilla Este" es tu territorio real: 2,83% de CTR**, más del doble que la media del sitio. Todo el contenido debe anclarse al barrio, no a "Sevilla" a secas, donde compites contra el centro y pierdes.

**Consultas de convocatoria con intención altísima y posición ya buena:**
`pruebas de acceso a grado medio 2026` (pos 1,5) · `prueba de acceso a grado superior 2026` (pos 4,6) · `cuando es la prueba de acceso a grado superior 2026` (pos 5,8).
→ Merece una página viva de **fechas y convocatorias**, actualizada cada curso. Capta a quien está buscando justo antes de matricularse.

**Oposiciones:** 19 consultas, 1.417 impresiones, 11 clics — y no lo ofrecéis. Pregunta para el cliente: ¿hay servicio de oposiciones? Si lo hay, es una página que falta.

**Ruido a ignorar:** clases de canto, piano, guitarra, uñas, y academias de otras localidades (Tomares, Cantillana, Bormujos, Casariche…). No son vuestro público.

## 7. Hallazgo técnico: hay tres webs conviviendo
Verificado con peticiones directas:

| Capa | Estado | Evidencia |
|---|---|---|
| Web antigua HTML (pre-WordPress) | **Viva, HTTP 200** | `/educaline.html` — menú antiguo completo, 5.220 impresiones, posición 10 |
| Área de alumno PHP | **Viva, HTTP 200** | `/alumno/login.php` — login funcional con "**©2013**" en el pie |
| WordPress + Avada + LearnDash | Viva | El sitio actual |

Tres capas superpuestas acumuladas en más de una década.

⚠️ **Un formulario de acceso en PHP de 2013 expuesto en producción es un riesgo de seguridad**, no sólo deuda técnica. Hay que auditarlo y retirarlo o aislarlo. También conviene saber qué hace: si hay alumnos usándolo de verdad, eso cambia la conversación sobre el "área de alumno" futura — no sería construir algo nuevo, sería sustituir algo que ya existe.

✅ Lo que sí está bien: las redirecciones `http → https` y `sin-www → www` funcionan correctamente (301 verificados). Las filas `http://` del informe son índice heredado, no un fallo del servidor. **Hay que conservar esas reglas en la web nueva.**

## 8. NAP oficial (extraído de la web antigua, a confirmar)
```
Academia Educana
Avda. de las Ciencias 25, local 7 — Edificio Galileo
41020 Sevilla
954 40 96 96 · 686 08 55 66
secretaria@academiaeducana.com
```
Debe ser idéntico en la web, en el schema `LocalBusiness` y en Google Business Profile.

## 9. Prioridades que salen de los datos
1. **Reescribir títulos y metadescripciones de las 12 páginas con tráfico.** Semanas, no meses. Se puede hacer ya sobre el WordPress actual.
2. **Construir la sección de inglés por niveles y exámenes.** ~30.000 impresiones desatendidas.
3. **Crear la página de clases de apoyo.** El servicio más buscado y el único sin página.
4. **Rescatar `/clases-particulares-sevilla/` y `/horarios-cursos/`**, que están en buena posición y no convierten clics.
5. **Página de fechas y convocatorias**, viva y actualizada cada curso.
6. **Reducir la dependencia de la home** (68% del tráfico) repartiendo la entrada entre páginas de servicio.
7. **Auditar y retirar las capas de 2013.**
