# 02 · Identidad visual y estilo de diseño
**Decisión tomada:** el logotipo **no se toca**. Todo el sistema visual se construye a su alrededor.

## 1. Hallazgo importante sobre el logotipo
He muestreado el archivo `educana.png`:
- Rojo real del logotipo: **#CD1228** (no el #DF0923 que asumía el prototipo anterior — hay que corregirlo).
- La palabra "academia educana" está en **blanco / gris muy claro (#D1DAFF)**.

Es decir: **el archivo que existe es la versión para fondo oscuro.** Por eso "se ve mal": se está usando sobre blanco un logotipo diseñado para navy. No es un problema del logotipo, es un problema de uso.

**Solución sin tocar el diseño:**
1. La barra de navegación y el pie van sobre **fondo navy** → el logotipo se ve perfecto y además gana presencia.
2. Pedir al cliente (o reconstruir con la misma tipografía y formas) las variantes que faltan: versión para fondo claro, versión de una tinta y un **isotipo "ae" suelto** para favicon, avatar de redes y móvil.
3. Entregable: `logo-educana.svg` en 4 versiones + favicon. El dibujo es idéntico, sólo cambian color y recorte.

**Zona de respeto:** margen libre alrededor equivalente a la altura de la "a" minúscula. **Tamaño mínimo:** 120 px de ancho en pantalla; por debajo, isotipo.

## 2. Paleta

| Token | Valor | Uso |
|---|---|---|
| `--red` | **#CD1228** | Color de marca. Botones principales, acentos, subrayados. **Nunca como fondo de secciones largas.** |
| `--red-ink` | **#A50D1F** | Rojo para *texto* sobre claro (contraste 7,8:1 — AAA). El #CD1228 en texto pequeño se queda justo. |
| `--navy` | **#14212F** | Texto principal, fondos de sección, navegación, pie. Es el color que sostiene la marca. |
| `--cream` | **#FAF7F2** | Fondo base de la web. Cálido, no el blanco clínico de plantilla. |
| `--white` | **#FFFFFF** | Tarjetas y superficies elevadas sobre el crema. |
| `--amber` | **#FFC957** | Destacados y campañas estacionales. Es el color que se enciende sobre navy. |
| `--slate` | **#4A5568** | Texto secundario (7:1 sobre crema). |
| `--line` | rgba(20,33,47,.10) | Bordes y separadores. |

**Contrastes verificados (WCAG):**
- #CD1228 sobre blanco → 5,66:1 ✅ (AA en texto normal, y botón rojo con texto blanco → 5,66:1 ✅)
- #14212F sobre crema → 15,25:1 ✅ AAA
- #FFC957 sobre navy → 10,67:1 ✅ AAA
- ⚠️ **#CD1228 sobre navy → 2,88:1 ❌.** Regla firme: sobre fondo navy, los acentos van en **ámbar o blanco**, jamás en rojo.

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
