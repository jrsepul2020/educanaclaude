# 08 · Datos pendientes del cliente
Regenerado del código el 2026-09-16, después de portar los contenidos reales de la web actual.

**Quedan 21 huecos en 7 archivos.** Antes eran 129 en 29 archivos: la diferencia son
los precios, fechas, horarios y estructuras de prueba que ya hemos sacado de `academiaeducana.com`
(ver [doc 10](10-contenido-portado.md)).

## Lo que queda no está en ninguna parte
Estos datos **no existen en la web actual**, así que sólo puede darlos el cliente:

| Dato | Dónde | Por qué importa |
|---|---|---|
| **Textos legales** | 3 páginas | La web no puede publicarse sin ellos. Están en `noindex` |
| **Horario de atención** | `/contacto/` | Lo pregunta todo el mundo antes de pasarse |
| **Cómo llegar** | `/contacto/` | Metro, autobús y aparcamiento. Es contenido que premia Google Business Profile |
| **Nombres del profesorado** | `/quienes-somos/` | Sostiene el pilar de «profesorado propio». Sin caras ni nombres es una afirmación sin prueba |
| **Condiciones laborales** | Bolsa de trabajo | Jornada, contrato y retribución |
| **Primera noticia real** | `/noticias/` | La de ejemplo está en borrador y no se indexa |

## Y una decisión que hay que tomar
⚠️ **Confirmar los tres precios.** La web actual los publica contradictorios entre la portada
y la página de inglés. Detalle en el [doc 10](10-contenido-portado.md).

---


## `data/legales/aviso-legal.md`

- **línea 4** · `[FECHA]`  
  <sub>actualizado: "[FECHA]"</sub>
- **línea 8** · `[TEXTO PENDIENTE DE PORTAR]`  
  <sub>> **[TEXTO PENDIENTE DE PORTAR]**</sub>

## `data/legales/politica-de-cookies.md`

- **línea 4** · `[FECHA]`  
  <sub>actualizado: "[FECHA]"</sub>
- **línea 8** · `[TEXTO PENDIENTE DE PORTAR]`  
  <sub>> **[TEXTO PENDIENTE DE PORTAR]**</sub>

## `data/legales/politica-de-privacidad.md`

- **línea 4** · `[FECHA]`  
  <sub>actualizado: "[FECHA]"</sub>
- **línea 8** · `[TEXTO PENDIENTE DE PORTAR]`  
  <sub>> **[TEXTO PENDIENTE DE PORTAR]**</sub>

## `data/noticias/ejemplo-convocatoria-trinity.md`

- **línea 2** · `[MES]`  
  <sub>titulo: "Inscripción abierta para los Trinity de [MES]"</sub>
- **línea 4** · `[MES]`  
  <sub>metaDescripcion: "Abierta la inscripción de los exámenes Trinity ISE I e ISE II de [MES] en Academia</sub>
- **línea 7** · `[NOMBRE REAL]`  
  <sub>autor: "[NOMBRE REAL]"</sub>
- **línea 11** · `[EJEMPLO DE ESTRUCTURA — sustituir por una noticia real.]`  
  <sub>[EJEMPLO DE ESTRUCTURA — sustituir por una noticia real.]</sub>
- **línea 14** · `[FECHA]`  
  <sub>en nuestras propias aulas. El plazo de inscripción termina el **[FECHA]**.</sub>

## `pages/bolsa-de-trabajo-academia-sevilla.astro`

- **línea 45** · `[CONDICIONES: jornada, tipo de contrato y retribución — a completar por el cliente.]`  
  <sub><li>[CONDICIONES: jornada, tipo de contrato y retribución — a completar por el cliente.]</li></sub>

## `pages/contacto.astro`

- **línea 51** · `[HORARIO]`  
  <sub><div class="flex justify-between gap-4"><dt class="text-slate">Lunes a jueves</dt><dd class="tabular</sub>
- **línea 52** · `[HORARIO]`  
  <sub><div class="flex justify-between gap-4"><dt class="text-slate">Viernes</dt><dd class="tabular">[HORA</sub>
- **línea 75** · `[PARADA MÁS CERCANA]`  
  <sub><Card class="gap-2 p-5"><h3 class="font-semibold">En metro</h3><p class="text-[0.92rem] text-slate"></sub>
- **línea 76** · `[LÍNEAS]`  
  <sub><Card class="gap-2 p-5"><h3 class="font-semibold">En autobús</h3><p class="text-[0.92rem] text-slate</sub>
- **línea 77** · `[INDICACIÓN]`  
  <sub><Card class="gap-2 p-5"><h3 class="font-semibold">Aparcamiento</h3><p class="text-[0.92rem] text-sla</sub>

## `pages/quienes-somos-academia-educana.astro`

- **línea 12** · `[Nombre]`  
  <sub>{ n: '[Nombre]', m: 'Matemáticas y Física' },</sub>
- **línea 13** · `[Nombre]`  
  <sub>{ n: '[Nombre]', m: 'Lengua y Latín' },</sub>
- **línea 14** · `[Nombre]`  
  <sub>{ n: '[Nombre]', m: 'Inglés · Trinity y Cambridge' },</sub>
- **línea 15** · `[Nombre]`  
  <sub>{ n: '[Nombre]', m: 'Historia y Economía' },</sub>