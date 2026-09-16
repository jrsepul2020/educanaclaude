# 09 · Migración y lanzamiento

> **Regla que manda sobre todo lo demás:** `npm run verificar` tiene que salir en verde
> antes de tocar el DNS. Si falla, no se lanza. No hay excepciones «porque corre prisa»:
> el tráfico que se pierde en una migración mal hecha tarda meses en volver.

## 0 · Antes de nada: lo que bloquea hoy
```
✗ Textos legales sin revisar (3 páginas)
✗ 29 páginas con datos sin rellenar
```
Son los dos únicos fallos que quedan. El resto de la verificación está en verde.
Hasta que el cliente cierre el [doc 08](08-datos-pendientes.md) y los legales,
**no se puede lanzar**. Todo lo demás de este documento ya está preparado.

## 1 · Alojamiento: Cloudflare Pages
| | |
|---|---|
| Por qué | Plan gratuito suficiente, CDN global, `_redirects` y `_headers` nativos y previsualización por rama |
| Comando de build | `npm run build` |
| Carpeta de salida | `dist` |
| Nodo | 22 o superior |
| Funciones | Sólo `/api/contacto` y `/api/empleo`. Las 34 páginas son estáticas |

Cambiar a Vercel es sustituir `@astrojs/cloudflare` por `@astrojs/vercel` en
`astro.config.mjs`. El `vercel.json` ya está generado **a partir de** `_redirects`,
así que no hay dos listas que se desincronicen. Ojo: las tres reglas `410` de Vercel
no tienen equivalente declarativo y caerían en 404.

### Variables de entorno
| Variable | Para qué | Si falta |
|---|---|---|
| `PUBLIC_GA4_ID` | Medición | No se carga analítica ni aparece el banner. La web funciona igual |
| `RESEND_API_KEY` | Envío de formularios | El endpoint devuelve 503 y se avisa al usuario de que llame |
| `EMAIL_DESTINO` | Dónde llegan los avisos | Igual que arriba |
| `EMAIL_REMITENTE` | Remitente verificado en Resend | Igual que arriba |

## 2 · La semana anterior
- [ ] **Capturar la línea base otra vez.** Exportar de Search Console clics, impresiones y posición de los últimos 3 meses. Es contra lo que se compara después.
- [ ] Rastrear el sitio actual con Screaming Frog y guardar el CSV de títulos, metas y códigos de respuesta.
- [ ] Verificar que la propiedad de Search Console es de **dominio**, no de prefijo de URL. Si no, crearla ahora: tarda en verificarse.
- [ ] Crear la propiedad de GA4 y obtener el `PUBLIC_GA4_ID`.
- [ ] Verificar el dominio del remitente en Resend (registros SPF y DKIM). Sin esto, los avisos del formulario acaban en spam.
- [ ] Desplegar en la URL de Cloudflare (`*.pages.dev`) y probarlo todo allí **con `noindex` global**.
- [ ] Bajar el TTL del DNS a 300 segundos. Así una vuelta atrás tarda cinco minutos y no dos días.

## 3 · Pruebas en la URL de previsualización
- [ ] `npm run verificar` en verde.
- [ ] Enviar los dos formularios de verdad y comprobar que llega el correo.
- [ ] Probar el formulario con el teléfono mal: tiene que volver con el aviso en texto.
- [ ] Banner de cookies: aceptar, rechazar, recargar. Con «rechazar» no debe cargarse nada de `googletagmanager`.
- [ ] Probar en un iPhone y un Android reales, no sólo en el simulador del navegador.
- [ ] Validar los datos estructurados con la herramienta de resultados enriquecidos de Google.
- [ ] Lighthouse en móvil: objetivo ≥ 95 en las cuatro categorías.
- [ ] Navegar la web entera **sólo con teclado**. El foco tiene que verse siempre.

## 4 · El día del lanzamiento, en este orden
El orden importa. Cambiar el DNS antes de tener las 301 listas es exactamente cómo se pierde el tráfico.

1. **Copia de seguridad completa de WordPress**: archivos y base de datos. Guardarla fuera del servidor.
2. **Quitar el `noindex`** de la web nueva y desplegar a producción.
3. **Comprobar las 301 en el dominio de previsualización**, una a una, con `curl -I`. Las 15 reglas.
4. **Cambiar el DNS** al alojamiento nuevo.
5. **Comprobar el certificado** HTTPS y que `http://` y el dominio sin `www` siguen redirigiendo. Son reglas que ya funcionaban y que hay que conservar.
6. **Enviar el sitemap nuevo** en Search Console y retirar el antiguo.
7. **Usar «Inspección de URL»** en las cinco páginas con más tráfico y pedir indexación.
8. **Borrar del servidor el directorio `/alumno/`.** No basta con la redirección: es un formulario de acceso en PHP de 2013 expuesto en producción. Redirigir la URL no elimina el archivo.
9. **Dejar WordPress apagado pero no borrado** durante 30 días, por si hay que volver.

### Comprobar las redirecciones
```bash
while read -r origen destino codigo; do
  [ -z "$origen" ] && continue
  case "$origen" in \#*) continue;; esac
  real=$(curl -s -o /dev/null -w "%{http_code}" -I "https://www.academiaeducana.com$origen")
  [ "$real" = "$codigo" ] && echo "ok   $origen → $codigo" || echo "FALLO $origen esperaba $codigo y da $real"
done < web/public/_redirects
```

## 5 · Las cuatro semanas siguientes
| Cuándo | Qué mirar |
|---|---|
| Días 1 a 7 | Cobertura en Search Console **todos los días**. Cualquier pico de 404 o de «excluida» se investiga el mismo día |
| Día 3 | Que las páginas nuevas de inglés estén indexadas |
| Semana 2 | Core Web Vitals en datos de campo. Tardan 28 días en estabilizarse |
| Semana 4 | Comparar clics e impresiones contra la línea base del punto 2 |

**Una caída de posiciones las dos primeras semanas es normal**: Google tiene que rastrear
y reprocesar. Lo que no es normal es que a las cuatro semanas siga por debajo. Si pasa,
lo primero que se revisa es el mapa de redirecciones.

## 6 · Vuelta atrás
Mientras el TTL esté en 300 segundos, deshacer es apuntar el DNS otra vez a WordPress:
cinco minutos. Por eso WordPress se queda apagado pero intacto 30 días.

**Cuándo hay que dar marcha atrás:** caída de más del 40% de clics sostenida una semana,
o un fallo funcional que no se pueda arreglar en el día (formularios que no llegan,
páginas que no cargan).

**Cuándo no:** fluctuación de posiciones la primera semana. Eso es el proceso normal.

## 7 · Lo que pasa después del lanzamiento
No es una web que se entrega y se olvida:
- **Fechas y convocatorias** hay que actualizarla cada vez que salga una orden. Si se queda vieja, pierde todo su valor y el tráfico que capta.
- **El bloque de campaña de la portada** cambia cuatro veces al año: enero, abril, junio y septiembre.
- **Las plazas disponibles** de la tabla de horarios sólo sirven si son ciertas.
- **Reseñas de Google**: pedirlas sistemáticamente al cerrar cada convocatoria de exámenes.
