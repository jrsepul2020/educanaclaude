/* Lógica compartida por los endpoints de formulario.
   Separada de la ruta para poder probarla sin levantar el servidor. */

export interface Resultado {
  ok: boolean;
  estado: number;
  motivo?: string;
}

/** Antispam sin captcha: un captcha es una barrera más para la madre
 *  que escribe desde el móvil. El honeypot filtra a los bots tontos y
 *  el control de longitud y de enlaces a los que copian y pegan. */
export function validar(datos: FormData): Resultado {
  if (String(datos.get('empresa') ?? '').trim() !== '') {
    return { ok: false, estado: 200, motivo: 'honeypot' }; // 200 a propósito: el bot cree que ha colado
  }
  const nombre = String(datos.get('nombre') ?? '').trim();
  const telefono = String(datos.get('telefono') ?? '').trim();
  const rgpd = datos.get('rgpd');

  if (nombre.length < 2 || nombre.length > 80) return { ok: false, estado: 422, motivo: 'nombre' };
  if (!/^[+\d][\d\s().-]{7,19}$/.test(telefono)) return { ok: false, estado: 422, motivo: 'telefono' };
  if (!rgpd) return { ok: false, estado: 422, motivo: 'rgpd' };

  const mensaje = String(datos.get('mensaje') ?? '');
  if (mensaje.length > 2000) return { ok: false, estado: 422, motivo: 'mensaje-largo' };
  if ((mensaje.match(/https?:\/\//g) ?? []).length > 2) return { ok: false, estado: 422, motivo: 'spam-enlaces' };

  return { ok: true, estado: 200 };
}

export function textoAviso(datos: FormData, asunto: string): string {
  const campos = ['nombre', 'telefono', 'email', 'necesidad', 'materia', 'mensaje', 'contexto'];
  const lineas = campos
    .map((c) => [c, String(datos.get(c) ?? '').trim()])
    .filter(([, v]) => v !== '')
    .map(([c, v]) => `${c}: ${v}`);
  return `${asunto}\n\n${lineas.join('\n')}\n\nEnviado desde academiaeducana.com`;
}

export async function enviar(
  env: { RESEND_API_KEY?: string; EMAIL_DESTINO?: string; EMAIL_REMITENTE?: string },
  asunto: string,
  texto: string,
): Promise<Resultado> {
  if (!env.RESEND_API_KEY || !env.EMAIL_DESTINO || !env.EMAIL_REMITENTE) {
    return { ok: false, estado: 503, motivo: 'sin-configurar' };
  }
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.EMAIL_REMITENTE, to: [env.EMAIL_DESTINO], subject: asunto, text: texto }),
  });
  return r.ok ? { ok: true, estado: 200 } : { ok: false, estado: 502, motivo: `resend-${r.status}` };
}
