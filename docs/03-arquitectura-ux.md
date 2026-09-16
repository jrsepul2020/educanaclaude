# 03 · Arquitectura de información y UX
> Revisado el 2026-09-16 con los datos reales de Search Console. Ver [doc 07](07-analisis-search-console.md).

## 1. Regla de oro de la migración
> **Ninguna URL que hoy reciba clics se cambia.** Se conserva aunque el slug sea feo.

Ya ha demostrado su valor: mi propuesta inicial redirigía la página de PEvAU que funciona (148 clics) hacia una que está muerta (2 clics). Los datos lo corrigieron. Todo lo de abajo está contrastado contra el informe de 12 meses.

## 2. Mapa del sitio

```
/                                   Home
│
├── Estudios
│   ├── /clases-de-apoyo/                      ★ NUEVA — 17.155 impr. desatendidas
│   ├── /clases-particulares-sevilla/          [conservar · pos 7,0 · 12.014 impr]
│   ├── /cursos-verano-sevilla/                [conservar]
│   └── /cursos-de-invierno/                   [conservar]
│
├── Pruebas de acceso
│   ├── /curso-selectividad-sevilla-pevau/     [MAESTRA PEvAU · 148 clics · no tocar]
│   ├── /curso-intensivos-selectividad-pevau/  [página propia · 136 clics · pos 12,1]
│   ├── /prueba-acceso-grado-superior-sevilla/ [mejor página de captación · 194 clics]
│   ├── /acceso-grado-medio-academia-sevilla/  [conservar]
│   ├── /acceso-universidad-mayores-25/        [conservar · 148 clics · pos 10,0]
│   ├── /conseguir-titulo-eso/                 [conservar]
│   └── /fechas-y-convocatorias/               ★ NUEVA — consultas "2026" en pos 1,5–5,8
│
├── Inglés  ← SECCIÓN COMPLETA (48.890 impr. y sólo 59 clics hoy)
│   └── /academia-de-ingles-en-sevilla-este/   [HUB · 67.812 impr · URL intocable]
│       ├── /ninos/         ★ Inglés para niños (6–12)
│       ├── /teens/         ★ Inglés para adolescentes (ESO y Bachillerato)
│       ├── /adultos/       ★ Inglés para adultos
│       ├── /trinity/       ★ 2.908 impr · ya en pos 4–13 · CENTRO EXAMINADOR
│       ├── /aptis/         ★ 2.638 impr · pos 34 · sin atender
│       ├── /cambridge/     ★ 804 impr · pos 44
│       ├── /b1/            ★ 3.603 impr · pos 17–23 · el más cercano a página 1
│       ├── /c1/            ★ 2.266 impr · pos 14
│       ├── /b2/            ★ 1.744 impr · pos 24–27
│       └── /intensivos/    ★ 5.807 impr · clúster entero sin página
│
├── /horarios-cursos/                [conservar · pos 2,5 · absorbe /horarios-2/]
├── /quienes-somos-academia-educana/ [conservar]
├── /noticias-academia-educana/      [conservar] → /noticias-academia-educana/{slug}
├── /bolsa-de-trabajo-academia-sevilla/ [conservar · 65 clics]
├── /contacto/
└── Legales: /aviso-legal/ · /politica-de-privacidad/ · /politica-de-cookies/
```

★ = 12 páginas nuevas. **Las subpáginas de inglés cuelgan de la URL del hub** para heredar su autoridad, el activo SEO más grande del sitio después de la home.

### Los dos ejes de la sección de inglés (y por qué no se canibalizan)
| Eje | Páginas | Para qué sirve | Demanda medida |
|---|---|---|---|
| **Público** | niños · teens · adultos | **Navegación y conversión.** Es como piensa quien llega: "busco algo para mi hijo de 9 años" | Baja en Search Console |
| **Nivel y examen** | B1 · B2 · C1 · Trinity · APTIS · Cambridge · Intensivos | **Captación SEO.** Es como se busca en Google | **19.000+ impresiones** |

⚠️ **Matiz honesto sobre niños/teens/adultos:** Search Console apenas registra demanda (126 y 376 impresiones). Eso **no significa que no exista** — significa que la web nunca ha aparecido para esas consultas, y sólo se ven las búsquedas en las que ya apareces. Esas tres páginas se justifican por navegación y conversión, no por volumen demostrado. Las de nivel y examen sí van sobre demanda medida.

**Regla anti-canibalización:** una intención por página. La de adultos habla de horarios compatibles con el trabajo y de por qué empezar de mayor; la de B2 habla del examen, el temario y las convocatorias. Se enlazan entre sí, no compiten.

### Descartadas por falta de demanda
**EOI: 0 impresiones. IELTS: 41. A1/A2: 0.** Aunque se impartan, no merecen página propia: viven dentro del hub. Yo había propuesto una página de EOI en la versión anterior de este documento — los datos dicen que no.

## 3. Redirecciones 301 (corregidas con datos)

| Origen | Clics/12m | Destino | Motivo |
|---|---|---|---|
| `/preparacion-selectividad-sevilla/` | 2 | `/curso-selectividad-sevilla-pevau/` | Canibaliza a la que funciona |
| `/pruebas-acceso-universidad/` | 0 | `/acceso-universidad-mayores-25/` | Sin tráfico |
| `/horarios-2/` | 0 | `/horarios-cursos/` | Duplicado |
| `/educaline.html` | 15 | `/` | Web antigua viva; conserva 5.220 impr. y posición 10 |
| `/educaline-mantenimiento/` | 0 | `410` | Huérfana |
| `/tienda/`, `/carrito/`, `/finalizar-compra/`, `/mi-cuenta/`, `/mi-perfil/`, `/producto/reserva/`, `/reserva-clases/` | 7 total | `/contacto/` | Se retira la tienda |
| `/lessons/*` (28 URLs) | 3 total | `410` | Duplicados `-copy`/`-2` ensuciando el índice |
| `/courses/*` | 0 | `410` | LearnDash |
| `/alumno/login.php` y `/alumno/*` | 6 | `/contacto/` + **retirada del servidor** | Área de alumno descartada en esta fase |

**Se conservan tal cual** (reglas que ya funcionan, verificadas): `http → https` y `sin-www → www`.

⚠️ **`/alumno/login.php` se retira** (decisión tomada: el área de alumno queda fuera de esta fase). Dos avisos antes de ejecutarlo:
1. **Avisar a quien lo esté usando.** Recibe 6 clics al año desde Google, pero los alumnos entrarían por enlace directo, no por búsqueda: el uso real no se ve en estos datos.
2. **Borrar los archivos PHP del servidor, no sólo redirigir la URL.** Un formulario de acceso de 2013 expuesto es un riesgo de seguridad, y una redirección no lo elimina.
3. Si algún día vuelve el área de alumno, se hará con Astro + Supabase (doc 06), no resucitando esto.

## 4. Plantillas a diseñar (9)
1. **Home**
2. **Página de servicio** — maestra, la usan las 11 páginas de cursos y accesos
3. **Hub de inglés** — reparte hacia público, niveles y exámenes
4. **Inglés por público** — plantilla para niños / teens / adultos
5. **Nivel o examen de inglés** — plantilla compartida por B1, B2, C1, Trinity, APTIS, Cambridge e intensivos
6. **Horarios y precios** — tabla filtrable
7. **Fechas y convocatorias** — cronología del curso
8. **Listado + detalle de noticias**
9. **Quiénes somos** · más **Contacto** y **Legal**

## 5. Estructura de la home
La home concentra el **68% del tráfico**, así que tiene que funcionar como repartidor, no como folleto.

1. **Hero** — titular de posicionamiento + 2 acciones (Pedir información · Llamar) + foto real. Sin carrusel.
2. **Bloque de campaña estacional** — intercambiable desde un archivo de contenido.
3. **"¿Qué necesitas?"** — 3 entradas por público, no 9 servicios en fila: *Mi hijo necesita refuerzo* · *Me juego la PEvAU* · *Necesito un título*.
4. **Trinity** — centro examinador oficial, sobre navy. El diferencial, con protagonismo.
5. **Cifras** — 20+ años · 6.796 alumnos · grupos de 6–8.
6. **Cómo trabajamos** — 3 o 4 pasos, sin jerga.
7. **Testimonios** reales.
8. **Horarios** — acceso directo, es lo que más se busca.
9. **Cierre** — formulario corto + mapa + teléfono.

## 6. Conversión
- **Acción principal:** "Pide información" (nombre, teléfono, qué necesitas, curso o nivel). Nada más.
- **Acciones secundarias siempre visibles:** llamar y WhatsApp.
- **Barra fija inferior en móvil:** `Llamar · WhatsApp · Información`.
- Cada página de servicio termina con su CTA contextual, no con uno genérico.
- Página `/gracias/` propia para medir conversiones de verdad.

## 7. Accesibilidad (objetivo WCAG 2.2 AA)
Navegación completa por teclado con foco visible · contrastes verificados en el doc 02 · `alt` real en todas las imágenes · un solo H1 por página · formularios con `label` asociada y errores en texto · objetivos táctiles de 44×44 px · `prefers-reduced-motion`.
