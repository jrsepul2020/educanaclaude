/* NAP oficial, confirmado por el cliente. Debe ser IDÉNTICO en la web
   visible, en el schema y en Google Business Profile: cualquier
   variación resta en SEO local.
   Titular del sitio: Ana Moya · NIF 28.885.213-L */
export const NAP = {
  name: 'Academia Educana',
  street: 'Avenida de las Ciencias 25, local 7, Edificio Galileo',
  postal: '41020',
  city: 'Sevilla',
  region: 'Sevilla',
  phone: '+34954409696',
  phoneText: '954 40 96 96',
  mobile: '+34686085566',
  mobileText: '686 08 55 66',
  whatsapp: 'https://wa.me/34686085566',
  email: 'secretaria@academiaeducana.com',   // general y matrículas
  emailLegal: 'info@academiaeducana.com',     // titular del sitio, RGPD y reclamaciones
  emailEmpleo: 'rrhh@academiaeducana.com',    // bolsa de trabajo
  /* Pin de Google Maps (GBP): maps.app.goo.gl/kb1vnMA9dj6Ai5eFA */
  mapsUrl: 'https://maps.app.goo.gl/kb1vnMA9dj6Ai5eFA',
  geo: { lat: 37.3968631, lng: -5.9236771 },
  /* Lunes a viernes: mañana y tarde */
  openingHours: [
    { opens: '08:30', closes: '13:30' },
    { opens: '16:00', closes: '22:00' },
  ],
} as const;
