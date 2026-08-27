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
- Carta con guía de puntos, como la de un restaurante, y reseñas en carrusel
  con `scroll-snap`.

## Qué contenido lleva y de dónde sale

Todo lo que hay en la página está sacado de una fuente concreta:

| Bloque | Fuente |
| --- | --- |
| Servicios, precios, duraciones, packs y bonos | Ficha pública en Booksy |
| Nota, número de reseñas y textos de las reseñas | Booksy |
| Tricología (algas, ampolla, afecciones) | Descripción del servicio en Booksy |
| Horario y dirección | Booksy |
| Teléfono | Rótulo del escaparate |
| Fotos | Del propio negocio |
| Plano | OpenStreetMap, centrado en la dirección |

**No hay contenido inventado.** Hubo una sección de "colección de cortes" con
seis cortes acotados uno a uno; se quitó porque los nombres, las guardas y los
tiempos de mantenimiento eran plausibles pero inventados, y el negocio no
publica ese desglose en ninguna parte.

**La página no enseña ningún corte.** Solo había una foto (`cut1.jpg`, una nuca
con un diseño a navaja) y una sola foto se quedaba corta, así que la sección
*En la silla* pasó a construirse sobre la reseña. Es la pieza que falta: en
cuanto haya material real —cortes que Omar quiera anunciar, o fotos suyas de
Instagram— aquí es donde va.

## Estructura

```
index.html          la página completa (marcado + estilos)
assets/img/
  logo.png          logotipo dorado, fondo transparente
  shop.jpg          fachada del local (se enseña entera, sin recortar)
  lab.jpg           tratamiento capilar
  og.jpg            miniatura para WhatsApp y redes
```

`shop.jpg` es casi cuadrada (1200×1174). El marco de la fachada está limitado a
820 px de ancho y la deja a su proporción natural, con `height:auto`: la idea es
que se vea la foto completa, rótulo y moto incluidos, no una franja recortada.

## El mapa

`Visítanos` lleva un plano de OpenStreetMap embebido (`export/embed.html`, sin
clave ni API de pago) teñido a negro y oro con un `filter` de CSS. El iframe no
recibe clics: el plano orienta y para ir se usa el botón *Cómo llegar*, que
abre la ruta en Google Maps. El alfiler es un SVG propio centrado sobre el
`bbox`, que está centrado en la dirección. Una esquina en degradado tapa los
botones de zoom del mapa, que no harían nada.

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
