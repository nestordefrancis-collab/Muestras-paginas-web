# The Barber Lab — versión "casa de lujo"

Segunda propuesta para **The Barber Lab**, barbería en Leganés (Madrid).
Alternativa a [`the-barber-lab/`](../the-barber-lab/), no sustituta: la otra
es editorial y de papel; esta va al registro de una casa de lujo.

Página estática, sin dependencias ni proceso de build: HTML y CSS en un único
archivo, con las imágenes servidas desde `assets/img/`.

## De qué va la propuesta

- **Negro y oro**, que son los colores del propio logo y del rótulo de la
  fachada. Un solo registro, oscuro: aquí no hay tema claro.
- **Glassmorphism**: todo el contenido vive sobre paneles de vidrio esmerilado
  (`backdrop-filter`), con filo de oro y un destello especular que barre el
  panel al pasar por encima.
- Guilloché de fondo — los anillos concéntricos de una esfera de reloj — y una
  esfera real para la nota de las reseñas.
- Tipografías **Cormorant Garamond** (display) y **Jost** (interfaz).

## La colección de cortes

Es lo que separa esta versión de la otra. En lugar de una foto suelta, cada
corte es una **lámina técnica**: el degradado dibujado sobre un perfil de
cabeza, la línea acotada con su etiqueta, y al lado la ficha de ejecución
(guarda, arranque, herramienta y cada cuánto hay que volver).

Seis láminas, un índice para elegir, y **cero JavaScript**: son `input[type=radio]`
ocultos y selectores `:checked ~`. Funciona con teclado (flechas) y sin JS.

Las láminas comparten un mismo perfil de cabeza definido una sola vez en un
`<svg>` de `<defs>` al principio del `<body>`; cada corte solo aporta su
silueta de pelo, su degradado, su máscara de trama y sus acotaciones.

```
#hd-face / #hd-back / #hd-neck / #hd-ear   el perfil, reutilizado con <use>
#stipple                                    la trama de puntos del rapado
#g1 … #g6                                   cómo se disuelve el pelo en cada corte
#m1 … #m6                                   dónde cae la trama (y el hueco de la oreja)
#mear                                       el pelo pasa por detrás de la oreja
#skull                                      la trama no se sale del cráneo
```

Los seis cortes son **nombres genéricos de barbería a modo de ejemplo**. Hay
que confirmar con el negocio qué cortes quiere anunciar antes de publicar.

## Estructura

```
index.html          la página completa (marcado + estilos + láminas SVG)
assets/img/
  logo.png          logotipo dorado, fondo transparente
  shop.jpg          fachada del local
  lab.jpg           tratamiento capilar
  cut1.jpg          detalle de corte a navaja (ref. BL·04)
  og.jpg            miniatura para WhatsApp y redes
```

## El mapa

`Visítanos` lleva un plano de OpenStreetMap embebido (`export/embed.html`, sin
clave ni API de pago) teñido a negro y oro con un `filter` CSS. El iframe no
recibe clics: el plano orienta y para ir se usa el botón *Cómo llegar*, que
abre la ruta en Google Maps. El alfiler es un SVG propio centrado sobre el
`bbox`, que está centrado en la dirección.

Si se cambia la dirección hay que tocar tres sitios: el `bbox` del iframe, el
`destination` del botón y el texto de la placa.

## Ver en local

El plano necesita conexión, pero el resto funciona abriendo `index.html` sin
más. Para servirlo por HTTP:

```bash
python -m http.server 8000
```

Y abrir <http://localhost:8000>.

## En línea

<https://nestordefrancis-collab.github.io/Muestras-paginas-web/the-barber-lab-lujo/>

Si cambias el nombre del repositorio o mueves esta carpeta, actualiza las
etiquetas `og:url` y `og:image` de `index.html`: llevan la URL completa
escrita a mano, que es lo que exige WhatsApp para mostrar la miniatura.

## Detalles técnicos

- Sin JavaScript ni cookies: nada que consentir, nada que rastrear.
- Diseño responsive y respeto por `prefers-reduced-motion`.
- La entrada de las secciones al hacer scroll usa `animation-timeline: view()`,
  detrás de un `@supports`: donde no está soportado, el contenido sale visible
  desde el principio.
- Marcada `noindex` mientras es una propuesta, para no competir en Google con
  los perfiles reales del negocio. Al aprobarse, se quita esa etiqueta.

---

Las fotografías pertenecen a The Barber Lab. El plano es © colaboradores de
OpenStreetMap.
