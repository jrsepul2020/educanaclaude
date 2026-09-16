import type { APIRoute } from 'astro';
import { validar, textoAviso, enviar } from '../../lib/formulario';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const datos = await request.formData();
  const v = validar(datos);
  if (!v.ok) {
    if (v.motivo === 'honeypot') return redirect('/gracias/', 303);
    return redirect(`/bolsa-de-trabajo-academia-sevilla/?error=${v.motivo}`, 303);
  }
  const env = (locals as any)?.runtime?.env ?? import.meta.env;
  const res = await enviar(env, 'Candidatura · bolsa de trabajo',
                            textoAviso(datos, 'Nueva candidatura'));
  if (!res.ok) return redirect('/gracias/?aviso=email', 303);
  return redirect('/gracias/', 303);
};
