import type { APIRoute } from 'astro';
import { validar, validarCv, textoAviso, enviar } from '../../lib/formulario';

export const prerender = false;

const VUELVE = '/bolsa-de-trabajo-academia-sevilla/';

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const datos = await request.formData();

  const v = validar(datos);
  if (!v.ok) {
    if (v.motivo === 'honeypot') return redirect('/gracias/', 303);
    return redirect(`${VUELVE}?error=${v.motivo}`, 303);
  }

  const cv = datos.get('cv');
  const vcv = validarCv(cv);
  if (!vcv.ok) return redirect(`${VUELVE}?error=${vcv.motivo}`, 303);

  const archivo = cv as File;
  const bytes = new Uint8Array(await archivo.arrayBuffer());
  let binario = '';
  for (let i = 0; i < bytes.length; i++) binario += String.fromCharCode(bytes[i]);

  const env = (locals as any)?.runtime?.env ?? import.meta.env;
  const res = await enviar(
    { ...env, EMAIL_DESTINO: env.EMAIL_EMPLEO ?? env.EMAIL_DESTINO },
    `Candidatura · ${String(datos.get('nombre') ?? '')}`,
    textoAviso(datos, 'Nueva candidatura para la bolsa de trabajo'),
    { filename: archivo.name, content: btoa(binario) },
  );

  /* Si el correo falla, el CV se perdería: se avisa para que lo reenvíe. */
  if (!res.ok) return redirect('/gracias/?aviso=email', 303);
  return redirect('/gracias/', 303);
};
