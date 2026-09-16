# Lanzamiento · lista de ejecución

> **El código está listo.** `npm run verificar` pasa en verde. Lo que queda son accesos y
> decisiones que no están en el repositorio.

## Antes de tocar el DNS

### 1 · Confirmar los tres precios · 5 minutos, una llamada
La web actual los publica contradictorios. Estamos publicando los de septiembre de 2025:

| | Publicamos | La portada vieja decía |
|---|---|---|
| Acceso universidad · 4 asignaturas | **180 €** | 172 € |
| Cursos de inglés | **62 €** | 55 € |
| Grado Superior | **120 € · 3 asignaturas** | 195 € · 5 asignaturas |

Si alguno está mal, se corrige en `web/src/data/` y se vuelve a construir. Publicar un precio
equivocado es peor que no publicarlo.

### 2 · Resend · 30 minutos
Sin esto **los formularios no envían ningún correo**. La web avisa al usuario de que llame,
así que no se rompe, pero cada contacto que no llame se pierde.

Crear cuenta en [resend.com](https://resend.com), verificar el dominio con SPF y DKIM, generar
la API key y definir estas variables en **Vercel → Settings → Environment Variables**:

| Variable | Valor |
|---|---|
| `RESEND_API_KEY` | la clave de Resend |
| `EMAIL_DESTINO` | `secretaria@academiaeducana.com` |
| `EMAIL_REMITENTE` | `web@academiaeducana.com` |
| `EMAIL_EMPLEO` | `rrhh@academiaeducana.com` |

### 3 · Google Analytics 4 · 10 minutos
Crear la propiedad, copiar el ID `G-XXXXXXXXXX` y ponerlo como variable `PUBLIC_GA4_ID` en el
panel de Cloudflare Pages. Sin ella no se carga analítica **ni aparece el banner de cookies**. Se define como `PUBLIC_GA4_ID` en las variables de entorno de Vercel.

### 4 · Validación legal
Que la asesoría revise los tres textos, sobre todo destinatarios y plazos de conservación.

## Desplegar en Vercel

### Ajuste imprescindible del proyecto
| | |
|---|---|
| **Root Directory** | **`web`** |
| Framework preset | Astro |

> ⚠️ **Si el Root Directory se queda en `./`, todo responde 404.** El repositorio tiene el
> sitio en `web/`, no en la raíz. Es el primer sitio donde mirar si algo no carga.

```bash
cd web
npm run desplegar      # verifica y, sólo si está en verde, despliega
```

**Probar en la URL de previsualización antes de tocar el dominio:**

- [ ] Enviar el formulario de contacto y comprobar que llega el correo
- [ ] Enviar una candidatura con un CV real y comprobar que llega el adjunto a `rrhh@`
- [ ] Probar un CV de más de 3 MB: debe rebotar con aviso
- [ ] Banner de cookies: aceptar, rechazar, recargar
- [ ] Abrirlo en un móvil de verdad

## El día del cambio, en este orden

1. **Copia de seguridad completa del WordPress** (archivos + base de datos), guardada fuera del servidor.
2. **Bajar el TTL del DNS a 300 s** en Piensa Solutions. Hacerlo **24 h antes**.
3. Comprobar las 301 en `educana.pages.dev` una a una.
4. **Cambiar el DNS** en Piensa Solutions apuntando a Vercel (o añadir el dominio desde el panel de Vercel, que da los registros exactos).
5. Comprobar el certificado HTTPS y que `http://` y el dominio sin `www` siguen redirigiendo.
6. Enviar el sitemap nuevo en Search Console y retirar el antiguo.
7. Pedir indexación de las cinco páginas con más tráfico.
8. **Borrar del servidor el directorio `/alumno/`.** Redirigir no basta: es un formulario de acceso en PHP de 2013 expuesto.
9. Dejar WordPress **apagado pero no borrado** 30 días.

Detalle completo, vigilancia posterior y plan de vuelta atrás en [`docs/09`](docs/09-migracion-y-lanzamiento.md).
