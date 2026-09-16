# 02 · Identidad visual y estilo de diseño
**Decisión tomada:** el logotipo **no se toca**. Todo el sistema visual se construye a su alrededor.

## 1. El logotipo (resuelto)
El cliente aportó el archivo que faltaba: **la versión para fondo claro**. Con los dos archivos, el logotipo queda cerrado.

Muestreados los píxeles, el logotipo tiene **exactamente dos colores planos**:

| | Valor | Dónde está |
|---|---|---|
| Rojo | **#CD1228** | El monograma «ae» |
| Azul | **#21307F** | La palabra «academia educana» |

⚠️ **Corrección:** yo había asumido un azul marino neutro (#14212F). El azul real de la marca es **#21307F**, un azul mucho más saturado y más azul. La paleta está corregida.

Y se confirma lo que dedujimos del primer archivo: `educana.png` era la **versión para fondo oscuro** (palabra en blanco). No estaba mal diseñado, estaba mal usado sobre el fondo blanco de la web actual.

### Archivos generados
De la versión del cliente he derivado las que faltaban **recoloreando y recortando, sin tocar el dibujo**:

| Archivo | Para qué |
|---|---|
| `logo-educana-claro.png` | El original del cliente. Fondos claros |
| `logo-educana-oscuro.png` | Palabra en crema. Cabecera y pie |
| `logo-educana-mono-tinta.png` · `-mono-blanco.png` | Una tinta: sellos, prensa, fax |
| `isotipo-ae.png` · `isotipo-ae-blanco.png` | Sólo el monograma. Favicon, redes, tamaños pequeños |
| `favicon-256.png` | «ae» en crema sobre el azul de marca |

Están en [`marca/`](../marca/) y en producción en `web/public/`.

**Sigue pendiente: los vectoriales.** Estos PNG salen de un original de 350 px de ancho. Sirven para la web, pero para imprimir un cartel o rotular la fachada hacen falta el `.ai`, `.eps` o `.svg`.

### Tamaño mínimo, comprobado en pantalla
Lo verifiqué en el navegador: **a 32 px de alto la palabra deja de leerse**. La cabecera usa 40 px en móvil y 48 px en escritorio (≈107 px de ancho). **Por debajo de 120 px de ancho se usa el isotipo**, no el logotipo completo.

**Zona de respeto:** margen libre alrededor equivalente a la altura de la «a» minúscula.

## 2. Paleta

| Token | Valor | Uso |
|---|---|---|
| `--brand` | **#CD1228** | Rojo del logotipo. Sólo la acción principal. **Nunca como fondo de secciones largas.** |
| `--brand-ink` | **#A50D1F** | Rojo para *texto* sobre claro (7,8:1 — AAA). El #CD1228 en texto pequeño se queda justo. |
| `--blue` | **#21307F** | **Azul del logotipo.** Superficies grandes de marca: cabecera, pie, bandas de confianza. |
| `--ink` | **#141A33** | Texto y controles. 16,04:1 sobre crema. Emparentado con el azul, pero casi neutro para leer largo. |
| `--cream` | **#FAF7F2** | Fondo base de la web. Cálido, no el blanco clínico de plantilla. |
| `--white` | **#FFFFFF** | Tarjetas y superficies elevadas sobre el crema. |
| `--amber` | **#FFC957** | Destacados y campañas estacionales. Es el color que se enciende sobre navy. |
| `--slate` | **#4A5568** | Texto secundario (7:1 sobre crema). |
| `--line` | rgba(20,33,47,.10) | Bordes y separadores. |

**Contrastes verificados (WCAG), con el azul real:**
- #21307F sobre crema → **10,95:1** ✅ AAA
- Blanco sobre #21307F → **11,71:1** ✅ AAA
- #FFC957 sobre #21307F → **7,66:1** ✅ AAA
- #CD1228 sobre blanco → 5,66:1 ✅ AA
- #141A33 sobre crema → 16,04:1 ✅ AAA
- ⚠️ **#CD1228 sobre #21307F → 2,07:1 ❌.** Peor aún que con el azul que yo había supuesto (2,88:1). **Regla firme: sobre el azul de marca, los acentos van en ámbar o blanco. Jamás en rojo.**

**Reparto de las dos superficies:** el **azul** viste las superficies grandes de marca (cabecera, pie, banda de Trinity). La **tinta** es para texto y controles. El **rojo** sólo para la acción principal.

**Reparto de color (regla 60/30/10):** 60% crema y blanco · 30% navy · 10% rojo y ámbar. El rojo vale porque es escaso.

## 3. Tipografía
⚠️ **Corrijo mi recomendación anterior.** Había propuesto **Fraunces + Inter**. Es una mala elección: son dos de las tipografías más usadas de la web —Inter especialmente— y dan justo el aspecto de plantilla genérica que queremos evitar. Ninguna de las dos aporta nada que Educana no pueda conseguir con una fuente menos gastada y de la misma calidad. Descartadas.

Las tres direcciones de la fase 2 llevan cada una su pareja, todas libres y en Google Fonts:

| Dirección | Titulares | Texto y UI |
|---|---|---|
| **A · Editorial de barrio** *(recomendada)* | **Newsreader** — serif editorial, variable, con óptica real. Rima con el serif del propio logotipo y transmite trayectoria sin parecer antigua | **Schibsted Grotesk** — grotesca neutra con carácter, numerales tabulares excelentes para las tablas de horarios |
| **B · Cuaderno** | **Bricolage Grotesque** — display variable con personalidad, cercana y algo informal | **Onest** — humanista cálida, muy legible en móvil |
| **C · Señal** | **Archivo** 800, tracking cerrado — rotulación, contundencia | **Public Sans** — neutra, institucional, impecable en formularios |

**Escala tipográfica** (móvil → escritorio, fluida con `clamp()`):
`Display 40→72 · H1 32→56 · H2 26→40 · H3 20→26 · Cuerpo grande 18→20 · Cuerpo 16→17 · Pie 14`
Interlineado: 1,1 en titulares · 1,6 en cuerpo. Ancho máximo de lectura: **68 caracteres**. Horarios y precios con `font-variant-numeric: tabular-nums`.

## 4. Estilo de diseño general
**Nombre de la dirección: "editorial de barrio".** Aire de revista bien maquetada, con fotos reales y datos grandes, sobre una base cálida.

**Sí:**
- **Fotografía real protagonista.** Ya tienes fotos de las aulas y del alumnado; es la mayor ventaja frente a competidores llenos de stock. Fotos grandes, a sangre o en tarjeta con radio amplio.
- Mucho aire. Secciones con respiración generosa (96–140 px verticales en escritorio).
- Alternancia de fondos a ancho completo: crema → blanco → **navy** → crema. El navy marca los momentos de confianza y cierre.
- **Cifras como elemento gráfico**: "20+ años", "6.796 alumnos", "6–8 por grupo" en display grande.
- Tarjetas de borde suave (radio 16–20 px), borde de 1 px, sombra casi inexistente.
- Detalles de marca discretos: subrayado rojo dibujado a mano bajo palabras clave, etiquetas tipo *badge* para niveles (A2, B1, B2, C1) y exámenes (Trinity, Cambridge).

**No (esto es lo que hace que una web parezca genérica):**
- Degradados morado-azul, glassmorphism, ilustraciones 3D genéricas.
- Fotos de stock de gente sonriendo con portátiles.
- Sombras difusas grandes, esquinas de 4 px, iconos de librería sin criterio.
- Carruseles automáticos (el LayerSlider actual es exactamente lo que hay que eliminar).
- Texto sobre foto sin capa de contraste.

**Layout:** rejilla de 12 columnas, contenedor máximo 1200 px, gutter 24 px, base de espaciado de 4 px. Móvil primero, de verdad: el 70% del tráfico de una academia local es móvil.

**Movimiento:** discreto y funcional. Aparición `opacity + translateY(12px)` en 300–400 ms con `cubic-bezier(.16,1,.3,1)`, sólo una vez y sólo en bloques importantes. Hover de botones en 150 ms. **`prefers-reduced-motion` respetado siempre.** Nada que se mueva solo mientras se lee.

**Iconografía:** un único set lineal de 1,5 px (Lucide), tamaño 20/24, en navy o rojo. Nunca iconos multicolor de relleno.

## 5. Dirección fotográfica
⚠️ **Corrección importante.** Di por hecho que las fotos de la carpeta del cliente eran reales. **No lo son: es stock comprado.** Las he revisado una a una — niños rubios jugando con letras de colores, un grupo de adultos alrededor de gráficos de negocio, una profesora posando a cámara. Ninguna se ha hecho en la academia.

Esto cambia el diagnóstico: **la fotografía deja de ser un activo y pasa a ser el mayor agujero del proyecto.**

**Por qué importa más de lo que parece.** Todo el posicionamiento se apoya en ser la academia del barrio, con profesores propios, que conoce a los chavales del instituto de al lado. Ese argumento se cae solo si las fotos son las mismas que puede comprar cualquier competidor. Y se nota: el visitante no sabrá decir por qué, pero no se lo creerá.

**La sesión de fotos pasa de "convendría" a ser un requisito del proyecto.** Media jornada con el aula llena:
- **Imprescindible:** aulas con alumnos trabajando de verdad · profesores explicando en pizarra · el equipo completo · la fachada y la entrada (Edificio Galileo) para el SEO local y Google Business Profile.
- **Retratos individuales** del profesorado, fondo neutro, 1:1 — son el soporte del pilar "profesorado propio y estable".
- **Detalle:** manos, material, cuadernos, el cartel de centro examinador Trinity.
- **Tratamiento uniforme:** luz natural, temperatura cálida, saturación contenida, sin filtros.
- **Formatos:** 16:9 cabeceras · 3:2 tarjetas · 1:1 profesorado.
- **Menores:** consentimiento por escrito, o encuadres de manos, material, pizarra y planos de espalda.

**Mientras no exista esa sesión**, mejor poco y honesto que mucho y falso: fachada, aulas vacías bien iluminadas, material, y composiciones que se apoyen en tipografía y color en vez de en fotos de archivo.


## 6. Dirección elegida: C · Señal (17-09-2026)
El cliente eligió la **dirección C**. Implementada en `web/src/styles/tokens.css`:
titulares en **Archivo** (peso 800, tracking cerrado), texto en **Public Sans**, esquinas
cortas (6/4 px, nada de píldoras) y fondo más neutro (#F4F2ED). El rojo y el azul del
logotipo se mantienen intactos — la dirección visual cambia forma y tipografía, no la paleta.
