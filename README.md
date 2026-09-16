# Academia Educana · web

Rediseño completo de [academiaeducana.com](https://www.academiaeducana.com), una academia de
Sevilla Este con más de veinte años y centro examinador oficial de Trinity College London.

**Astro 7 · Tailwind 4 · TypeScript estricto · sin React.** La home son 18,9 KB de HTML y
**cero archivos JavaScript**, frente a los 1,39 MB y 89 scripts de la web actual.

## Empezar

```bash
cd web
npm install
npm run dev        # http://localhost:4321
npm run probar     # pruebas de validación de formularios
npm run verificar  # build + comprobación previa al lanzamiento
```

**`npm run verificar` es la que manda.** Comprueba que no se pierde ninguna de las 19 URLs con
tráfico en Search Console, que las 301 apuntan a páginas que existen, que no hay enlaces rotos,
que los títulos y las metadescripciones caben en Google, que hay un solo H1 por página, que el
schema está donde toca y que no se publican textos legales sin revisar ni datos sin rellenar.
Si falla, no se lanza.

## Qué hay aquí

| | |
|---|---|
| [`docs/`](docs/) | El trabajo previo al diseño: estrategia de marca, arquitectura, SEO, análisis de Search Console y manual de lanzamiento |
| [`web/`](web/README.md) | El sitio: 33 páginas, componentes, contenido y verificación |
| [`wireframes/`](wireframes/) | Wireframes de las 10 plantillas |
| [`identidad/`](identidad/) | Tres direcciones visuales y el sistema de color, tipografía y logotipo |
| [`marca/`](marca/README.md) | Archivos del logotipo y reglas de uso |
| [`LANZAMIENTO.md`](LANZAMIENTO.md) | Lista de ejecución del día del cambio |

## De dónde salen los datos

**Nada está inventado.** Precios, fechas de convocatoria, estructura de las pruebas, horarios y
testimonios están portados de la web actual, con la trazabilidad en
[`docs/10`](docs/10-contenido-portado.md). Donde no había dato, no se ha puesto nada.

Las decisiones de arquitectura están contrastadas contra los datos reales de Search Console de
doce meses ([`docs/07`](docs/07-analisis-search-console.md)), no contra suposiciones. Esos datos
son los que corrigieron, por ejemplo, la dirección de una redirección que habría tirado a la
basura la página de selectividad que funciona.

## Estado

`npm run verificar` pasa en verde. Falta confirmar tres precios que la web actual publica
contradictorios, la validación legal, las claves de Resend y GA4, y una sesión de fotos.
Detalle en [`LANZAMIENTO.md`](LANZAMIENTO.md).
