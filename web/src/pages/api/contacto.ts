import type { APIRoute } from 'astro';
import { validar, textoAviso, enviar } from '../../lib/formulario';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const datos = await request.formData();

  const v = validar(datos);
  if (!v.ok) {
    if (v.motivo === 'honeypot') return redirect('/gracias/', 303);
    return redirect(`/contacto/?error=${v.motivo}`, 303);
  }

  const env = (locals as any)?.runtime?.env ?? import.meta.env;
  const contexto = String(datos.get('contexto') ?? 'web');
  const res = await enviar(env, `Nueva solicitud de información (${contexto})`,
                            textoAviso(datos, 'Solicitud de información'));

  /* Si el correo falla, NO se pierde el lead: se manda a la página de
     gracias con un aviso para que llame. Perder un contacto por un fallo
     de un servicio de terceros es inaceptable en una web de captación. */
  if (!res.ok) return redirect('/gracias/?aviso=email', 303);
  return redirect('/gracias/', 303);
};
