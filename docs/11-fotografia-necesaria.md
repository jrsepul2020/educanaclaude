# 11 · Fotografía necesaria — lista de subida

Cada foto que falta se ve directamente en la web como un hueco gris con el nombre exacto
del archivo y las medidas recomendadas (componente `PhotoPlaceholder`). **En cuanto subas
el archivo con ese nombre a `web/public/fotos/`, la foto aparece sola en el siguiente
build — no hay que tocar ni una línea de código.**

## Dónde subirlas
```
web/public/fotos/
├── home-hero.jpg
├── home-necesita-apoyo.jpg
├── home-necesita-pevau.jpg
├── home-necesita-titulo.jpg
├── quienes-fachada.jpg
├── quienes-aula.jpg
├── quienes-equipo.jpg
├── trinity-sello.png          ← no es una foto, es el logotipo oficial que da Trinity
├── cursos/
│   └── <una por cada curso, 10 en total>
└── ingles/
    ├── hub.jpg
    └── <una por cada página de inglés, 10 en total>
```

## La lista completa — 27 fotos + 1 logotipo

### Home (4)
| Archivo | Medidas | Dónde sale |
|---|---|---|
| `home-hero.jpg` | 1600×1067 px · 3:2 | Cabecera de la portada |
| `home-necesita-apoyo.jpg` | 800×533 px · 3:2 | Tarjeta "Mi hijo necesita refuerzo" |
| `home-necesita-pevau.jpg` | 800×533 px · 3:2 | Tarjeta "Me juego la PEvAU" |
| `home-necesita-titulo.jpg` | 800×533 px · 3:2 | Tarjeta "Necesito un título" |

### Quiénes somos (3)
| Archivo | Medidas | Dónde sale |
|---|---|---|
| `quienes-fachada.jpg` | 1600×900 px · 16:9 | Fachada del Edificio Galileo — también sirve para Google Business Profile |
| `quienes-aula.jpg` | 1200×800 px · 3:2 | Un aula con alumnos trabajando |
| `quienes-equipo.jpg` | 1200×800 px · 3:2 | El equipo, sin nombres (el profesorado cambia — ver doc 10) |

### Centro examinador (1, no es foto)
| Archivo | Qué es | Dónde sale |
|---|---|---|
| `trinity-sello.png` | Logotipo oficial, PNG con fondo transparente | Banda de confianza de Trinity, en home, inglés y quiénes somos |

Pídelo directamente a Trinity College London junto con el número de centro examinador.

### Páginas de servicio — 10 fotos, una por curso
`public/fotos/cursos/<archivo>.jpg` · 1200×800 px · 3:2 · foto del aula o la clase concreta de ese servicio

| Archivo | Página |
|---|---|
| `cursos/acceso-grado-medio-academia-sevilla.jpg` | Acceso a Grado Medio |
| `cursos/acceso-universidad-mayores-25.jpg` | Acceso universidad mayores de 25 y 45 |
| `cursos/clases-de-apoyo.jpg` | Clases de apoyo |
| `cursos/clases-particulares-sevilla.jpg` | Clases particulares |
| `cursos/conseguir-titulo-eso.jpg` | Título de ESO para adultos |
| `cursos/curso-intensivos-selectividad-pevau.jpg` | Intensivos PEvAU |
| `cursos/curso-selectividad-sevilla-pevau.jpg` | Selectividad PEvAU |
| `cursos/cursos-de-invierno.jpg` | Cursos de invierno |
| `cursos/cursos-verano-sevilla.jpg` | Cursos de verano |
| `cursos/prueba-acceso-grado-superior-sevilla.jpg` | Acceso a Grado Superior |

### Páginas de inglés — 11 fotos, una por página
`public/fotos/ingles/<archivo>.jpg` · 1200×900 px · 4:3 (el hub, 1600×1067 · 3:2) · foto real de esa clase o ese público

| Archivo | Página |
|---|---|
| `ingles/hub.jpg` | Hub de inglés |
| `ingles/ninos.jpg` | Inglés para niños |
| `ingles/teens.jpg` | Inglés para teens |
| `ingles/adultos.jpg` | Inglés para adultos |
| `ingles/trinity.jpg` | Trinity |
| `ingles/cambridge.jpg` | Cambridge |
| `ingles/aptis.jpg` | APTIS |
| `ingles/b1.jpg` | Nivel B1 |
| `ingles/b2.jpg` | Nivel B2 |
| `ingles/c1.jpg` | Nivel C1 |
| `ingles/intensivos.jpg` | Intensivos de inglés |

## Criterios (doc 02 §5)
- **Luz natural**, temperatura cálida, saturación contenida — sin filtros agresivos.
- Alumnos y profesores **trabajando de verdad**, no posando mirando a cámara.
- Formatos exactos: si la medida pide 3:2, sube 3:2. Un recorte automático puede cortar caras.
- **Menores de edad**: consentimiento de imagen por escrito, o composiciones sin rostro —
  manos, material, pizarra, planos de espalda. Ambas opciones funcionan igual de bien.
- Mismo tratamiento de color en toda la sesión, para que parezca una sola sesión y no un
  collage de fechas distintas.

## Prioridad si no da tiempo a las 27
1. `home-hero.jpg` — es lo primero que ve cualquier visitante
2. `quienes-fachada.jpg` — para Google Business Profile
3. `ingles/hub.jpg` + `trinity-sello.png` — el diferencial de la marca
4. El resto, según se vaya pudiendo
