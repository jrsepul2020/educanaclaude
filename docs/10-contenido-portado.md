# 10 · Contenido portado de la web actual
Extraído de `academiaeducana.com` el 2026-09-16. **Todo lo que hay en la web nueva sale de aquí**: no hemos inventado ni un precio, ni una fecha, ni un horario.

## ⚠️ Lo primero: los precios se contradicen
La web actual publica **tres precios distintos en dos sitios distintos**:

| | Portada · `lastmod 2025-01-03` | Página de inglés · `lastmod 2025-09-22` |
|---|---|---|
| Acceso universidad · 4 asignaturas | 172 € | **180 €** |
| Cursos de inglés | 55 € | **62 €** |
| Grado Superior | 195 € · **5** asignaturas | **120 € · 3 asignaturas** |

**Hemos usado los de la página de inglés** porque es nueve meses más reciente. Pero esto hay que confirmarlo con el cliente antes de publicar: en el caso de Grado Superior no cambia sólo el precio, cambia también el número de asignaturas, así que podrían ser dos productos distintos y no una subida.

> **Acción:** confirmar los tres precios y retirar los de la portada vieja.

## Precios usados
| Curso | Precio |
|---|---|
| Acceso universidad mayores de 25 y 45 | **180 €** · 4 asignaturas |
| Cursos de inglés | **62 €** · a tu nivel |
| Grado Superior · curso de invierno | **120 €** · 3 asignaturas |
| Todos | **Matrícula gratuita** y material incluido en el precio |

## Datos reales incorporados

### Calendario oficial
- **Trinity ISE 2026 completo**: diez convocatorias, con la fecha del escrito (siempre miércoles) y la ventana del oral. Está en `src/data/convocatorias.json` y se publica en `/fechas-y-convocatorias/`.
- **Acceso a ciclos formativos 2026**: solicitudes del 12 al 23 de enero · provisional 9 de febrero · reclamaciones del 10 al 12 de febrero · **pruebas del 6 al 30 de abril** · resultados 4 de mayo · reclamación del 5 al 7 de mayo · definitivos 11 de mayo.
- **Intensivos PEvAU**: el de junio va del 18 de mayo al 1 de junio, de lunes a sábado. El de julio, del 17 al 29 de junio, de lunes a viernes.

### Estructura de las pruebas
- **Grado Superior**: básicas (Lengua, Matemáticas, Digital) + claves (Plurilingüe inglés + opción A Emprendedora / B Ciencias / C Tecnología e ingeniería). 19 años cumplidos o cumplirlos ese año.
- **Grado Medio**: tres competencias — comunicativa en lengua castellana, matemática y digital. 17 años.
- **Mayores de 25**: fase general de tres exámenes de una hora (comentario de texto, Lengua Española y traducción de lengua extranjera: alemán, francés, inglés, italiano o portugués) + fase específica de dos materias de una rama, hora y media cada una.
- **Mayores de 45**: dos ejercicios de una hora + entrevista personal.
- **Título de ESO**: tres partes de 100 puntos — científico-tecnológico, comunicación y social.

### Cursos de inglés
- **Curso de invierno** (A2, B1, B2, C1): 9 meses, de octubre a junio, 3 h semanales en dos días de 1,5 h, mañanas o tardes.
- **Intensivo de invierno** (B1): 6 meses, de enero a junio.
- **Intensivo de verano** (B1, B2): julio, agosto y primera semana de septiembre, 6 h semanales en cuatro clases de 1,5 h, de lunes a jueves y sólo mañanas.
- **Test Trialling**: examen de prueba gratuito en condiciones reales de examen. Es un gancho real que la web actual esconde.

### Refuerzo escolar
- De Primaria a Bachillerato, todas las materias.
- Dos clases de hora y media, de lunes a jueves.
- **Horarios de 16:00 a 22:00.**
- Exámenes mensuales, control de asistencia y **plataforma Educaline** para consultar resultados.

### Testimonios
Dos, reales, de la página de contacto: **Marta** (química) y **Álvaro**. Publicados tal cual.

## Correcciones a lo que yo había escrito

**«Grupos de 6 a 8 alumnos» era invención mía.** La web dice siempre «grupos reducidos», sin dar número. Lo he sustituido en todas partes por las palabras del cliente. Si el número real es seis u ocho, es un argumento de venta fuerte y merece decirse — pero hay que confirmarlo, no suponerlo.

**«Prueba de nivel gratuita» también.** La que existe se llama **Test Trialling** y es mejor: es un examen de prueba completo en condiciones reales, con comentario de un examinador. Corregido.

**Años de experiencia:** la portada dice «más de 15 años» y la página de inglés «más de 20 años». Uso 20+, que es la más reciente. **Conviene unificar y retirar la otra.**

## Decisiones del cliente (16-09-2026)

| Asunto | Decisión | Cómo está resuelto |
|---|---|---|
| Precios de apoyo, particulares, verano e invierno | **No se publican.** Nos ceñimos a los contenidos actuales | Esas páginas muestran «matrícula gratuita» y «consúltanos», sin inventar importes |
| Cuadrante de horarios | **En preparación** | `/horarios-cursos/` lleva un aviso visible y el teléfono. La tabla muestra días y franja, no grupos concretos |
| Profesorado | **No se publica**, porque va cambiando | Retirada la sección de equipo de «Quiénes somos». Publicar nombres que caducan es peor que no publicarlos |
| Bolsa de trabajo | Contenido de la página actual | Requisitos reales, `rrhh@academiaeducana.com` y subida de CV en PDF, DOC o JPG hasta 3 MB |
| Textos legales | Datos del responsable facilitados | Los tres textos escritos y publicados |

## Los tres correos, cada uno a lo suyo
| Correo | Para qué |
|---|---|
| `secretaria@academiaeducana.com` | General y matrículas |
| `info@academiaeducana.com` | Titular del sitio, ejercicio de derechos RGPD y reclamaciones |
| `rrhh@academiaeducana.com` | Bolsa de trabajo |

## Textos legales
**Titular:** Ana Moya · NIF 28.885.213-L · Avenida de las Ciencias 25, local 7, Edificio Galileo, 41020 Sevilla · 954 40 96 96 · info@academiaeducana.com

Los tres textos se han **portado del sitio actual** y adaptados a lo que la web nueva hace de verdad:

**Aviso legal.** Portado íntegro. Se le ha añadido el **bloque de identidad del titular**, que faltaba y que exige el artículo 10 de la LSSI. Se ha retirado la «política de comentarios»: describía un sistema de comentarios que no existe.

**Política de privacidad.** Portada y corregida en las finalidades. Se han quitado las que ya no aplican —contratación a través de la plataforma, facturación y entrega, envío de newsletter y comunicaciones comerciales— porque la web nueva no hace nada de eso. Se han añadido las que sí: atender solicitudes de información, gestionar matrículas, gestionar candidaturas de la bolsa de trabajo y analítica bajo consentimiento.

**Política de cookies. Reescrita, no portada.** La anterior no podía publicarse tal cual por dos motivos:

1. Listaba `__utma`, `__utmb`, `__utmc` y `__utmz`, que son cookies de **Universal Analytics**, retirado en 2023. La web nueva usa GA4, que instala `_ga` y `_ga_<ID>`.
2. Decía que «si continúas navegando, estarás prestando tu consentimiento». **Ese modelo ya no es válido**: el consentimiento tiene que ser una acción afirmativa. El banner que hemos montado pide consentimiento explícito y rechazar cuesta lo mismo que aceptar, así que el texto tenía que decir eso.

También describía cookies de publicidad, geolocalización, registro y redes sociales que esta web no usa. La nueva política dice exactamente lo que hay: una cookie técnica propia y dos de analítica sólo si se aceptan.

> ⚠️ **Conviene que la asesoría del cliente los valide antes de lanzar**, sobre todo el apartado de destinatarios y los plazos de conservación. Está en la lista de comprobación del [doc 09](09-migracion-y-lanzamiento.md).

## Lo único que sigue pendiente
- **Horario de atención al público.** No está en la web actual y no se ha facilitado. De momento no se publica ningún bloque de horario: mejor eso que un hueco.
- **Cómo llegar**: metro, autobús y aparcamiento. Es contenido que premia Google Business Profile.
- **La primera noticia real.** La de ejemplo está en borrador y ya ni se construye en producción.
