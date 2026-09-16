# Marca · archivos del logotipo

El cliente aportó **la versión para fondo claro** (`identidad/img/logo1.png`, 350×157).
Las demás están derivadas de ella **recoloreando y recortando: el dibujo no se ha tocado.**

El logotipo tiene exactamente dos colores planos:

| | Valor | Dónde |
|---|---|---|
| Rojo | `#CD1228` | El monograma «ae» |
| Azul | `#21307F` | La palabra «academia educana» |

| Archivo | Para qué |
|---|---|
| `logo-educana-claro.png` | Original del cliente. Fondos claros |
| `logo-educana-oscuro.png` | Palabra en crema. Cabecera y pie |
| `logo-educana-mono-tinta.png` | Una tinta, azul. Sellos, prensa |
| `logo-educana-mono-blanco.png` | Una tinta, negativo |
| `isotipo-ae.png` · `isotipo-ae-blanco.png` | Sólo el monograma |
| `favicon-256.png` | «ae» en crema sobre el azul de marca |

Los que están en producción se copian a `web/public/`.

## Reglas

1. **Tamaño mínimo: 120 px de ancho.** Comprobado en navegador: a 32 px de alto la palabra deja de leerse. Por debajo, isotipo.
2. **Zona de respeto:** margen libre igual a la altura de la «a» minúscula.
3. **Rojo sobre azul está prohibido** — 2,07:1. Son los dos colores de la marca y el instinto pide juntarlos, pero falla el contraste. Sobre azul: ámbar o blanco.

## Pendiente

**Los vectoriales.** Estos PNG salen de un original de 350 px de ancho: valen para la web, no para imprimir un cartel ni rotular la fachada. Hace falta el `.ai`, `.eps` o `.svg` del cliente.
