<?php
/* Bolsa de trabajo, con currículum adjunto.
   Equivalente de src/pages/api/empleo.ts. */
require __DIR__ . '/_comun.php';

const VUELVE = '/bolsa-de-trabajo-academia-sevilla/';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') volver(VUELVE);

$v = validar($_POST);
if (!$v['ok']) {
  if ($v['motivo'] === 'honeypot') volver('/gracias/');
  volver(VUELVE . '?error=' . $v['motivo']);
}

$cv  = $_FILES['cv'] ?? null;
$vcv = validarCv($cv);
if (!$vcv['ok']) volver(VUELVE . '?error=' . $vcv['motivo']);

$env = entorno();
/* Las candidaturas van a RRHH, no a secretaría. Si EMAIL_EMPLEO no
   está definida caen en el destino general, que es mejor que perderlas. */
$env['EMAIL_DESTINO'] = $env['EMAIL_EMPLEO'] ?? $env['EMAIL_DESTINO'] ?? '';

$ok = enviar($env,
             'Candidatura · ' . trim($_POST['nombre'] ?? ''),
             textoAviso($_POST, 'Nueva candidatura para la bolsa de trabajo'),
             ['filename' => basename($cv['name']),
              'content'  => base64_encode(file_get_contents($cv['tmp_name']))]);

/* Si el correo falla, el CV se perdería: se avisa para que lo reenvíe. */
volver($ok ? '/gracias/' : '/gracias/?aviso=email');
