<?php
/* Formulario general de contacto. Equivalente de src/pages/api/contacto.ts. */
require __DIR__ . '/_comun.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') volver('/contacto/');

$v = validar($_POST);
if (!$v['ok']) {
  if ($v['motivo'] === 'honeypot') volver('/gracias/');   // al bot se le da por bueno
  volver('/contacto/?error=' . $v['motivo']);
}

$contexto = trim($_POST['contexto'] ?? 'web');
$ok = enviar(entorno(),
             "Nueva solicitud de información ($contexto)",
             textoAviso($_POST, 'Solicitud de información'));

/* Si el correo falla, NO se pierde el lead: se manda a la página de
   gracias con un aviso para que llame. Perder un contacto por un fallo
   de un servicio de terceros es inaceptable en una web de captación. */
volver($ok ? '/gracias/' : '/gracias/?aviso=email');
