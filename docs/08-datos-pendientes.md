# 08 · Datos pendientes del cliente
Generado del código el 2026-09-16. **146 huecos** en 39 archivos.

Todo lo que aparece entre corchetes en la web es un dato real que falta. No hemos
inventado ni un precio ni una fecha: preferimos que se vea el hueco a que salga a
producción un dato falso.

## Cómo rellenarlo
Los textos están en `web/src/data/`. Se edita el `.md`, se guarda, y `npm run build`
avisa si algo no cuadra con el esquema (por ejemplo, una metadescripción de más de
160 caracteres, que Google cortaría).

## Lo más urgente
| Dato | Veces | Por qué importa |
|---|---|---|
| **Precios** | 33 | La caja de datos duros es lo que decide la conversión. Un «desde X €» baja el volumen de contactos y sube mucho su calidad |
| **Fechas de convocatoria** | 35 | Las consultas con «2026» ya posicionan entre 1,5 y 5,8 sin contenido. Es tráfico a semanas de matricularse |
| **Horarios reales** | 11 | La página de horarios está en posición 2,5 y sólo recibe 77 clics al año |
| **Textos legales** | 3 | La web no puede publicarse sin ellos |

---


## `components/blocks/ScheduleTable.astro`

- **línea 55** · `[data-filtro]`  
  <sub>document.querySelectorAll<HTMLElement>('[data-filtro]').forEach((btn) => {</sub>
- **línea 58** · `[data-filtro]`  
  <sub>document.querySelectorAll<HTMLElement>('[data-filtro]').forEach((b) => {</sub>
- **línea 69** · `[data-categoria]`  
  <sub>document.querySelectorAll<HTMLElement>('[data-categoria]').forEach((row) => {</sub>
- **línea 74** · `[data-vacio]`  
  <sub>const vacio = document.querySelector<HTMLElement>('[data-vacio]');</sub>

## `components/blocks/Section.astro`

- **línea 6** · `[tone]`  
  <sub><section id={id} class={`${tones[tone]} py-14 md:py-20 ${extra}`}></sub>

## `components/layout/Footer.astro`

- **línea 24** · `[l, h]`  
  <sub>{c.links.map(([l, h]) => <li><a href={h} class="hover:text-cream transition-colors">{l}</a></li></sub>

## `components/layout/Header.astro`

- **línea 49** · `[data-menu-toggle]`  
  <sub>const btn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');</sub>

## `components/layout/Schema.astro`

- **línea 28** · `[org, ...(Array.isArray(extra) ? extra : [extra]`  
  <sub>const blocks = extra ? [org, ...(Array.isArray(extra) ? extra : [extra])] : [org];</sub>
- **línea 28** · `[org]`  
  <sub>const blocks = extra ? [org, ...(Array.isArray(extra) ? extra : [extra])] : [org];</sub>

## `components/ui/Badge.astro`

- **línea 12** · `[tone]`  
  <sub><span class={`inline-flex items-center h-7 px-3 rounded-pill text-[0.7rem] font-bold uppercase t</sub>

## `components/ui/Button.astro`

- **línea 25** · `[base, sizes[size]`  
  <sub>const cls = [base, sizes[size], variants[variant], extra].join(' ');</sub>
- **línea 25** · `[variant]`  
  <sub>const cls = [base, sizes[size], variants[variant], extra].join(' ');</sub>

## `components/ui/Card.astro`

- **línea 9** · `[tone]`  
  <sub><div class={`rounded-card overflow-hidden flex flex-col ${tones[tone]} ${extra}`}><slot /></div></sub>

## `components/ui/Field.astro`

- **línea 15** · `[hint ? `${id}-hint` : null, error ? `${id}-err` : null]`  
  <sub>const described = [hint ? `${id}-hint` : null, error ? `${id}-err` : null].filter(Boolean).join(</sub>

## `data/cursos/acceso-grado-medio-academia-sevilla.md`

- **línea 10** · `[MESES]`  
  <sub>duracion: "[MESES] meses"</sub>
- **línea 13** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>
- **línea 14** · `[MES]`  
  <sub>convocatoria: "Convocatoria [MES] de 2027"</sub>
- **línea 26** · `[CONFIRMAR CON NORMATIVA VIGENTE]`  
  <sub>a: "17 años cumplidos en el año de la prueba. [CONFIRMAR CON NORMATIVA VIGENTE]"</sub>
- **línea 30** · `[MES]`  
  <sub>a: "En [MES]. Está en nuestra página de fechas y convocatorias."</sub>
- **línea 34** · `[MESES]`  
  <sub>a: "[MESES] meses, de [MES] a [MES]."</sub>
- **línea 34** · `[MES]`  
  <sub>a: "[MESES] meses, de [MES] a [MES]."</sub>
- **línea 36** · `[TURNO]`  
  <sub>a: "Sí, hay grupo de [TURNO]. [CONFIRMAR]"</sub>
- **línea 36** · `[CONFIRMAR]`  
  <sub>a: "Sí, hay grupo de [TURNO]. [CONFIRMAR]"</sub>

## `data/cursos/acceso-universidad-mayores-25.md`

- **línea 10** · `[MES]`  
  <sub>duracion: "Octubre a [MES]"</sub>
- **línea 13** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>
- **línea 14** · `[MES]`  
  <sub>convocatoria: "Convocatoria [MES] de 2027"</sub>
- **línea 30** · `[MES]`  
  <sub>a: "La convocatoria andaluza suele ser en [MES]. Está en nuestra página de fechas."</sub>
- **línea 32** · `[CONFIRMAR HORARIOS]`  
  <sub>a: "Sí, los grupos son de tarde. [CONFIRMAR HORARIOS]"</sub>

## `data/cursos/clases-de-apoyo.md`

- **línea 11** · `[HORAS]`  
  <sub>dias: "2 o 3 días · [HORAS] h/semana"</sub>
- **línea 13** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>
- **línea 26** · `[CONFIRMAR CURSOS EXACTOS]`  
  <sub>a: "Desde Primaria hasta 2º de Bachillerato. [CONFIRMAR CURSOS EXACTOS]"</sub>
- **línea 36** · `[PRECIO ORIENTATIVO]`  
  <sub>a: "[PRECIO ORIENTATIVO] al mes según los días. Llámanos y te lo decimos en un minuto."</sub>

## `data/cursos/clases-particulares-sevilla.md`

- **línea 13** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / hora"</sub>
- **línea 19** · `[CONFIRMAR DISPONIBILIDAD]`  
  <sub>texto: "Mañanas, tardes o fines de semana, según lo que os venga bien. [CONFIRMAR DISPONIBILIDAD</sub>
- **línea 32** · `[CONFIRMAR ALCANCE]`  
  <sub>a: "Sí, sobre todo de asignaturas de primero: cálculo, física, estadística, química. [CONFIRMAR </sub>
- **línea 34** · `[PRECIO]`  
  <sub>a: "[PRECIO] €, y hay bonos si contratas varias. Llámanos y te lo detallamos."</sub>
- **línea 36** · `[CONFIRMAR: sí / no / según zona]`  
  <sub>a: "[CONFIRMAR: sí / no / según zona]"</sub>

## `data/cursos/conseguir-titulo-eso.md`

- **línea 10** · `[MESES]`  
  <sub>duracion: "[MESES] meses por convocatoria"</sub>
- **línea 13** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>
- **línea 14** · `[MES]`  
  <sub>convocatoria: "Convocatorias de [MES] y [MES]"</sub>
- **línea 26** · `[CONFIRMAR CON NORMATIVA VIGENTE]`  
  <sub>a: "18 años cumplidos en el año de la prueba. [CONFIRMAR CON NORMATIVA VIGENTE]"</sub>
- **línea 28** · `[MES]`  
  <sub>a: "Dos en Andalucía, normalmente en [MES] y [MES]."</sub>
- **línea 36** · `[CONFIRMAR HORARIOS]`  
  <sub>a: "Sí, los grupos son de tarde. [CONFIRMAR HORARIOS]"</sub>
- **línea 46** · `[MES]`  
  <sub>la convocatoria de [MES] y a por otro en la de [MES].</sub>

## `data/cursos/curso-intensivos-selectividad-pevau.md`

- **línea 10** · `[SEMANAS]`  
  <sub>duracion: "[SEMANAS] semanas"</sub>
- **línea 11** · `[HORAS]`  
  <sub>dias: "Intensivo · [HORAS] h/semana"</sub>
- **línea 13** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € por asignatura"</sub>
- **línea 26** · `[FECHAS]`  
  <sub>a: "[FECHAS]. Las plazas vuelan porque los grupos son de ocho."</sub>
- **línea 32** · `[HORAS]`  
  <sub>a: "[HORAS] semanales por asignatura durante [SEMANAS] semanas."</sub>
- **línea 32** · `[SEMANAS]`  
  <sub>a: "[HORAS] semanales por asignatura durante [SEMANAS] semanas."</sub>
- **línea 34** · `[CONFIRMAR FECHAS]`  
  <sub>a: "Sí, en julio. [CONFIRMAR FECHAS]"</sub>
- **línea 36** · `[PRECIO]`  
  <sub>a: "[PRECIO] € por asignatura. Llámanos y te decimos qué te conviene."</sub>

## `data/cursos/curso-selectividad-sevilla-pevau.md`

- **línea 13** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>
- **línea 26** · `[CONFIRMAR FECHA EXACTA]`  
  <sub>a: "En octubre, con el curso escolar ya arrancado. [CONFIRMAR FECHA EXACTA]"</sub>
- **línea 36** · `[PRECIO ORIENTATIVO]`  
  <sub>a: "[PRECIO ORIENTATIVO] — depende de cuántas asignaturas lleves. Llámanos y te lo decimos en un</sub>

## `data/cursos/cursos-de-invierno.md`

- **línea 11** · `[HORAS]`  
  <sub>dias: "Mañanas · [HORAS] h/día"</sub>
- **línea 13** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € por curso"</sub>
- **línea 14** · `[MES]`  
  <sub>convocatoria: "Matrícula desde [MES]"</sub>
- **línea 23** · `[CONFIRMAR CALENDARIO]`  
  <sub>texto: "Sólo mañanas, y no todos los días. [CONFIRMAR CALENDARIO]"</sub>
- **línea 26** · `[FECHAS DE NAVIDAD]`  
  <sub>a: "[FECHAS DE NAVIDAD] y [FECHAS DE SEMANA SANTA]."</sub>
- **línea 26** · `[FECHAS DE SEMANA SANTA]`  
  <sub>a: "[FECHAS DE NAVIDAD] y [FECHAS DE SEMANA SANTA]."</sub>
- **línea 28** · `[HORAS]`  
  <sub>a: "[HORAS] por la mañana."</sub>
- **línea 32** · `[CONFIRMAR: ESO, Bachillerato…]`  
  <sub>a: "[CONFIRMAR: ESO, Bachillerato…]"</sub>
- **línea 36** · `[PRECIO]`  
  <sub>a: "[PRECIO] € el curso completo."</sub>

## `data/cursos/cursos-verano-sevilla.md`

- **línea 10** · `[y agosto]`  
  <sub>duracion: "Julio [y agosto]"</sub>
- **línea 11** · `[HORAS]`  
  <sub>dias: "Mañanas · [HORAS] h/día"</sub>
- **línea 13** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>
- **línea 14** · `[MES]`  
  <sub>convocatoria: "Matrícula desde [MES]"</sub>
- **línea 26** · `[CONFIRMAR FECHAS EXACTAS]`  
  <sub>a: "En julio. [CONFIRMAR FECHAS EXACTAS]"</sub>
- **línea 30** · `[CONFIRMAR: sí / no]`  
  <sub>a: "[CONFIRMAR: sí / no]"</sub>
- **línea 34** · `[CONFIRMAR]`  
  <sub>a: "[CONFIRMAR]"</sub>
- **línea 36** · `[PRECIO]`  
  <sub>a: "[PRECIO] € al mes según asignaturas y días."</sub>

## `data/cursos/prueba-acceso-grado-superior-sevilla.md`

- **línea 10** · `[MESES]`  
  <sub>duracion: "[MESES] meses"</sub>
- **línea 13** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>
- **línea 14** · `[MES]`  
  <sub>convocatoria: "Convocatoria [MES] de 2027"</sub>
- **línea 23** · `[CONFIRMAR TURNOS]`  
  <sub>texto: "Para que puedas compaginarlo con el trabajo. [CONFIRMAR TURNOS]"</sub>
- **línea 26** · `[MES]`  
  <sub>a: "La convocatoria de Andalucía suele ser en [MES]. Puedes verla en nuestra página de fechas y </sub>
- **línea 28** · `[CONFIRMAR CON NORMATIVA VIGENTE]`  
  <sub>a: "Tener 19 años cumplidos en el año de la prueba, o 18 si ya tienes un título de Grado Medio. </sub>
- **línea 36** · `[CONFIRMAR]`  
  <sub>a: "[CONFIRMAR]. Mucha gente que prepara esta prueba trabaja por la tarde."</sub>

## `data/ingles/adultos.md`

- **línea 14** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>
- **línea 17** · `[CONFIRMAR HORARIOS]`  
  <sub>texto: "Grupos de tarde y de noche. [CONFIRMAR HORARIOS]"</sub>
- **línea 30** · `[CONFIRMAR]`  
  <sub>a: "[CONFIRMAR]"</sub>

## `data/ingles/aptis.md`

- **línea 14** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>
- **línea 21** · `[CONFIRMAR CASOS]`  
  <sub>texto: "Es el que más aparece en convocatorias públicas en España. [CONFIRMAR CASOS]"</sub>

## `data/ingles/b1.md`

- **línea 14** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>

## `data/ingles/b2.md`

- **línea 14** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>
- **línea 28** · `[PRECIO TASA]`  
  <sub>a: "La tasa la fija cada organismo y va aparte: [PRECIO TASA]."</sub>

## `data/ingles/c1.md`

- **línea 14** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>

## `data/ingles/cambridge.md`

- **línea 14** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>

## `data/ingles/intensivos.md`

- **línea 11** · `[SEMANAS]`  
  <sub>duracion: "[SEMANAS] semanas"</sub>
- **línea 12** · `[DÍAS]`  
  <sub>dias: "[DÍAS] días · [HORAS] h/semana"</sub>
- **línea 12** · `[HORAS]`  
  <sub>dias: "[DÍAS] días · [HORAS] h/semana"</sub>
- **línea 14** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € el curso"</sub>
- **línea 30** · `[HORAS]`  
  <sub>a: "[HORAS], bastante más que en el curso anual."</sub>

## `data/ingles/ninos.md`

- **línea 14** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>

## `data/ingles/teens.md`

- **línea 14** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>

## `data/ingles/trinity.md`

- **línea 14** · `[PRECIO]`  
  <sub>desde: "[PRECIO] € / mes"</sub>
- **línea 26** · `[Nº DE CENTRO]`  
  <sub>a: "Sí. Somos centro examinador oficial de Trinity College London. [Nº DE CENTRO]"</sub>
- **línea 30** · `[CONFIRMAR ALCANCE VIGENTE]`  
  <sub>a: "Sí, está reconocido por ACLES y por las universidades andaluzas. [CONFIRMAR ALCANCE VIGENTE]</sub>
- **línea 34** · `[PRECIO TASA]`  
  <sub>a: "La tasa la fija Trinity y va aparte del curso: [PRECIO TASA]."</sub>

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
  <sub>titulo: "Abierta la inscripción para los exámenes Trinity de [MES]"</sub>
- **línea 4** · `[MES]`  
  <sub>metaDescripcion: "Abierta la inscripción de los exámenes Trinity ISE I e ISE II de [MES] en Acad</sub>
- **línea 7** · `[NOMBRE REAL]`  
  <sub>autor: "[NOMBRE REAL]"</sub>
- **línea 11** · `[EJEMPLO DE ESTRUCTURA — sustituir por una noticia real.]`  
  <sub>[EJEMPLO DE ESTRUCTURA — sustituir por una noticia real.]</sub>
- **línea 14** · `[FECHA]`  
  <sub>en nuestras propias aulas. El plazo de inscripción termina el **[FECHA]**.</sub>

## `pages/[...slug].astro`

- **línea 26** · `[d.categoria]`  
  <sub>const migas = { estudios: 'Estudios', accesos: 'Pruebas de acceso', ingles: 'Inglés' }[d.categor</sub>

## `pages/bolsa-de-trabajo-academia-sevilla.astro`

- **línea 45** · `[CONDICIONES: jornada, tipo de contrato y retribución — a completar por el cliente.]`  
  <sub><li>[CONDICIONES: jornada, tipo de contrato y retribución — a completar por el cliente.]</li></sub>

## `pages/contacto.astro`

- **línea 50** · `[HORARIO]`  
  <sub><div class="flex justify-between gap-4"><dt class="text-slate">Lunes a jueves</dt><dd class="tab</sub>
- **línea 51** · `[HORARIO]`  
  <sub><div class="flex justify-between gap-4"><dt class="text-slate">Viernes</dt><dd class="tabular">[</sub>
- **línea 74** · `[PARADA MÁS CERCANA]`  
  <sub><Card class="gap-2 p-5"><h3 class="font-semibold">En metro</h3><p class="text-[0.92rem] text-sla</sub>
- **línea 75** · `[LÍNEAS]`  
  <sub><Card class="gap-2 p-5"><h3 class="font-semibold">En autobús</h3><p class="text-[0.92rem] text-s</sub>
- **línea 76** · `[INDICACIÓN]`  
  <sub><Card class="gap-2 p-5"><h3 class="font-semibold">Aparcamiento</h3><p class="text-[0.92rem] text</sub>
- **línea 82** · `[data-mapa]`  
  <sub>const btn = document.querySelector<HTMLButtonElement>('[data-mapa]');</sub>

## `pages/design-system.astro`

- **línea 191** · `[PRECIO]`  
  <sub>{ k: 'Desde', v: '[PRECIO] € / mes' },</sub>

## `pages/fechas-y-convocatorias.astro`

- **línea 12** · `[FECHA]`  
  <sub>{ t: 'Trinity · ISE I y ISE II', examen: '[FECHA]', plazo: '[FECHA]', sede: 'Nuestro centro', ab</sub>
- **línea 13** · `[FECHA]`  
  <sub>{ t: 'Prueba de acceso a Grado Superior', examen: '[FECHA]', plazo: '[FECHA]', sede: '[SEDE]', a</sub>
- **línea 13** · `[SEDE]`  
  <sub>{ t: 'Prueba de acceso a Grado Superior', examen: '[FECHA]', plazo: '[FECHA]', sede: '[SEDE]', a</sub>
- **línea 14** · `[FECHA]`  
  <sub>{ t: 'Prueba de acceso a Grado Medio', examen: '[FECHA]', plazo: '[FECHA]', sede: '[SEDE]', abie</sub>
- **línea 14** · `[SEDE]`  
  <sub>{ t: 'Prueba de acceso a Grado Medio', examen: '[FECHA]', plazo: '[FECHA]', sede: '[SEDE]', abie</sub>
- **línea 15** · `[FECHA]`  
  <sub>{ t: 'Acceso a universidad · mayores de 25 y 45', examen: '[FECHA]', plazo: '[FECHA]', sede: '[S</sub>
- **línea 15** · `[SEDE]`  
  <sub>{ t: 'Acceso a universidad · mayores de 25 y 45', examen: '[FECHA]', plazo: '[FECHA]', sede: '[S</sub>
- **línea 16** · `[FECHA]`  
  <sub>{ t: 'Título de ESO · pruebas libres', examen: '[FECHA]', plazo: '[FECHA]', sede: '[SEDE]', abie</sub>
- **línea 16** · `[SEDE]`  
  <sub>{ t: 'Título de ESO · pruebas libres', examen: '[FECHA]', plazo: '[FECHA]', sede: '[SEDE]', abie</sub>
- **línea 17** · `[FECHA]`  
  <sub>{ t: 'PEvAU · convocatoria ordinaria', examen: '[FECHA]', plazo: '[FECHA]', sede: '[SEDE]', abie</sub>
- **línea 17** · `[SEDE]`  
  <sub>{ t: 'PEvAU · convocatoria ordinaria', examen: '[FECHA]', plazo: '[FECHA]', sede: '[SEDE]', abie</sub>

## `pages/quienes-somos-academia-educana.astro`

- **línea 11** · `[Nombre]`  
  <sub>{ n: '[Nombre]', m: 'Matemáticas y Física' },</sub>
- **línea 12** · `[Nombre]`  
  <sub>{ n: '[Nombre]', m: 'Lengua y Latín' },</sub>
- **línea 13** · `[Nombre]`  
  <sub>{ n: '[Nombre]', m: 'Inglés · Trinity y Cambridge' },</sub>
- **línea 14** · `[Nombre]`  
  <sub>{ n: '[Nombre]', m: 'Historia y Economía' },</sub>
- **línea 43** · `[CONFIRMAR CIFRAS con el cliente: la web actual dice a la vez «15 años» y «20+».]`  
  <sub><p class="text-[0.82rem] text-slate">[CONFIRMAR CIFRAS con el cliente: la web actual dice a la v</sub>