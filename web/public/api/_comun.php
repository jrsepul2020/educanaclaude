<?php
/* Lógica compartida por los dos formularios.
   Traducción literal de src/lib/formulario.ts, que es la que tenía las
   pruebas en scripts/probar-formulario.mjs: mismos motivos de rechazo,
   mismos límites y mismo texto del aviso, para que lo que llegue al
   correo no cambie respecto a lo que llegaba antes.

   Por qué PHP: el alojamiento es clásico, por FTP, y no ejecuta Node.
   Las rutas /api/contacto y /api/empleo eran funciones serverless y
   aquí no hay dónde ejecutarlas. */

/** Lee el .env de la raíz. No se usa getenv(): en alojamiento
 *  compartido rara vez se pueden definir variables de entorno. */
function entorno(): array {
  static $env = null;
  if ($env !== null) return $env;
  $env = [];
  $ruta = __DIR__ . '/../.env';
  if (!is_readable($ruta)) return $env;
  foreach (file($ruta, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $linea) {
    $linea = trim($linea);
    if ($linea === '' || $linea[0] === '#' || strpos($linea, '=') === false) continue;
    [$k, $v] = explode('=', $linea, 2);
    $env[trim($k)] = trim($v, " \t\"'");
  }
  return $env;
}

/** Redirige con 303 y corta. 303 y no 302: tras un POST evita que
 *  recargar la página de gracias reenvíe el formulario.
 *
 *  Todo el archivo se mantiene en PHP 7.4 a propósito: no se sabe qué
 *  versión tiene el alojamiento y un fallo de sintaxis aquí deja los
 *  formularios muertos sin avisar. */
function volver(string $destino) {
  header('Location: ' . $destino, true, 303);
  exit;
}

/** Antispam sin captcha: un captcha es una barrera más para la madre
 *  que escribe desde el móvil. El honeypot filtra a los bots tontos y
 *  el control de longitud y de enlaces a los que copian y pegan. */
function validar(array $d): array {
  if (trim($d['empresa'] ?? '') !== '') {
    return ['ok' => false, 'motivo' => 'honeypot']; // el bot cree que ha colado
  }
  $nombre   = trim($d['nombre'] ?? '');
  $telefono = trim($d['telefono'] ?? '');

  $largo = mb_strlen($nombre);
  if ($largo < 2 || $largo > 80)                             return ['ok' => false, 'motivo' => 'nombre'];
  if (!preg_match('/^[+\d][\d\s().-]{7,19}$/', $telefono))   return ['ok' => false, 'motivo' => 'telefono'];
  if (empty($d['rgpd']))                                      return ['ok' => false, 'motivo' => 'rgpd'];

  $mensaje = $d['mensaje'] ?? '';
  if (mb_strlen($mensaje) > 2000)                             return ['ok' => false, 'motivo' => 'mensaje-largo'];
  if (preg_match_all('#https?://#', $mensaje) > 2)            return ['ok' => false, 'motivo' => 'spam-enlaces'];

  return ['ok' => true];
}

function textoAviso(array $d, string $asunto): string {
  $campos = ['nombre', 'telefono', 'email', 'necesidad', 'materia', 'mensaje', 'contexto'];
  $lineas = [];
  foreach ($campos as $c) {
    $v = trim($d[$c] ?? '');
    if ($v !== '') $lineas[] = "$c: $v";
  }
  return $asunto . "\n\n" . implode("\n", $lineas) . "\n\nEnviado desde academiaeducana.com";
}

const CV_MAX_BYTES = 3145728; // 3 MB
const CV_EXTENSIONES = ['pdf', 'doc', 'docx', 'jpg', 'jpeg'];

function validarCv(?array $cv): array {
  if (!$cv || ($cv['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK || ($cv['size'] ?? 0) === 0) {
    return ['ok' => false, 'motivo' => 'cv-falta'];
  }
  if ($cv['size'] > CV_MAX_BYTES) return ['ok' => false, 'motivo' => 'cv-grande'];
  $ext = strtolower(pathinfo($cv['name'], PATHINFO_EXTENSION));
  if (!in_array($ext, CV_EXTENSIONES, true)) return ['ok' => false, 'motivo' => 'cv-tipo'];
  return ['ok' => true];
}

/** Envía por Resend, igual que la versión en Node. */
function enviar(array $env, string $asunto, string $texto, ?array $adjunto = null): bool {
  $clave    = $env['RESEND_API_KEY']  ?? '';
  $destino  = $env['EMAIL_DESTINO']   ?? '';
  $remite   = $env['EMAIL_REMITENTE'] ?? '';
  if ($clave === '' || $destino === '' || $remite === '') return false;

  $cuerpo = ['from' => $remite, 'to' => [$destino], 'subject' => $asunto, 'text' => $texto];
  if ($adjunto) $cuerpo['attachments'] = [$adjunto];

  $ch = curl_init('https://api.resend.com/emails');
  curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 20,
    CURLOPT_HTTPHEADER     => ['Authorization: Bearer ' . $clave, 'Content-Type: application/json'],
    CURLOPT_POSTFIELDS     => json_encode($cuerpo, JSON_UNESCAPED_UNICODE),
  ]);
  curl_exec($ch);
  $estado = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);
  return $estado >= 200 && $estado < 300;
}
