# Carlos Conde Leganés — versión "sala"

Propuesta de rediseño para **Carlos Conde Plaza Nueva (Leganés)**, barbería y
peluquería masculina dentro del Parque Comercial Plaza Nueva.

Página estática, sin dependencias ni proceso de build: HTML, CSS y un JavaScript
corto en un único archivo, con las imágenes servidas desde `assets/img/`.

## Lo que hay que saber del negocio

No es un negocio independiente: es un **centro franquiciado** de la cadena Carlos
Conde Peluqueros, que tiene su propia web corporativa. Por eso la propuesta no
compite con esa web, sino que ocupa el hueco que la corporativa deja vacío: la
página del centro de Leganés, con sus precios, su equipo, su horario y su enlace
de reserva. El argumento de venta es el SEO local ("barbería Leganés") y la
reserva directa, no sustituir a la cadena.

## De qué va la propuesta

De las cuatro direcciones que se plantearon, esta es la **"Sala"**: cálida y
fotográfica, tomada del interior real del local.

- **Paleta muestreada del propio negocio**, no elegida a ojo: el bronce
  `#A87830` del logotipo del centro, el taupe `#A8906C` de la pared, el nogal
  `#54402A` de los muebles y el negro `#181818` del raíl de focos.
- **Las bombillas del espejo de camerino como motivo de luz** de toda la página:
  la tira de la portada, el halo de las iniciales del equipo y el resplandor
  cálido del bloque oscuro de opiniones.
- Tipografías **Oswald** y **Ubuntu**, que son las de la marca: la corporativa
  usa exactamente ese par.
- **Portada apilada**: el logotipo arriba con el texto de apoyo a su derecha, y
  debajo la foto del equipo en banda a todo lo ancho. Es apaisada y las cuatro
  personas se reparten de lado a lado, así que en una columna vertical se
  perdían dos; la banda va anclada arriba (`object-position: center top`)
  porque lo que sobra por abajo son capas y sillas.
- **El logotipo preside la portada**, rehecho en texto vivo en vez de en imagen:
  el doble rombo en SVG, "Carlos Conde" en Oswald 600 y el lema debajo. El lema
  se mide en `em` del propio bloque, así que cae exactamente al ancho del
  nombre —como en el logotipo real— en cualquier tamaño de pantalla, sin
  imagen que se pixele ni fondo blanco que recortar.
- Grano cálido sobre todo el documento (`feTurbulence` en un data URI) para que
  el papel no quede plano.
- Registro deliberadamente **no lujoso**: es una barbería de barrio,
  profesional, rápida y de precio accesible. El vocabulario oscuro-y-oro sería
  del negocio equivocado.

## El motor funcional

Además del diseño, la página lleva lo que la ficha de Booksy no da:

- **Estado en vivo**: abierto o cerrado calculado con el horario real
  (10:00–21:00, los siete días) en hora de Madrid, con la cuenta atrás hasta el
  cierre o la apertura. Se refresca cada minuto y aparece en cuatro sitios:
  barra superior, ficha de la portada, pie y barra fija del móvil.
- **Carta filtrable**: por categoría (corte, barba, estética, promos) y por el
  rato que tiene libre el cliente (15 min, 30 min, 1 hora). El recuento se
  recalcula solo, con singular y plural, y tiene su caso de cero resultados.
- **Fila del día resaltada** en la tabla de horarios.
- **Barra fija de reserva en móvil**, que entra al pasar la portada.
- Recorrido fotográfico horizontal con arrastre de ratón, flechas y barra de
  progreso.

## Qué contenido lleva y de dónde sale

| Bloque | Fuente |
| --- | --- |
| Servicios, precios, duraciones y promociones | Ficha pública en Booksy |
| Nota, desglose de estrellas y citas de reseñas | Booksy (reseñas verificadas) |
| Nombres del equipo | Booksy |
| Horario y dirección | Booksy |
| Fotografías | Galería del propio negocio en Booksy |
| Colores del logotipo | Logotipo del centro en Booksy |
| Teléfono | Ficha del centro en la web de la cadena |
| Tipografías y doble rombo | Web corporativa de la cadena |
| Parking, hipermercado y acceso | Web del Parque Comercial Plaza Nueva |

**No hay contenido inventado.** Vidal es el único del equipo sin cita porque no
tiene reseñas nominales en Booksy: su tarjeta lleva una línea neutra en vez de
un testimonio inventado.

## Qué tiene la cadena para este centro

La corporativa sí tiene ficha del local:
<https://www.carloscondepeluqueros.com/centro/leganes-cc-plaza-nueva-2/>

Lleva dirección, teléfono (911 632 160) y horario. Nada más: ni precios, ni la
lista de servicios, ni el equipo, ni una sola foto del sitio, ni enlace a
Booksy. Para pedir cita, llamar. Esa ficha es la referencia contra la que se
compara esta propuesta, y el hueco que ocupa.

## Las fotos

Las 25 fotos de la galería de Booksy se descargaron **en original** (hasta
2592 px: basta con quitar el parámetro `?size=` de la URL de CloudFront) y de
ahí se eligieron siete. Están reescaladas a 900–1200 px y calidad 74, que es lo
que la página realmente necesita: el conjunto pesa menos de 800 KB.

```
index.html              la página completa (marcado, estilos y script)
build-artifact.js       genera artifact.html a partir de index.html
artifact.html           la misma página como fragmento, para publicar en Artifacts
assets/img/
  equipo.jpg            dos barberos y dos clientes: la banda de la portada
  sala-local.jpg        vista general de la sala, primera del recorrido
  sala-lamparas.jpg     las lámparas campana y los carteles de la casa
  sala-puesto.jpg       un puesto con su espejo y su repisa
  sala-productos.jpg    la estantería de producto
  sala-ceras.jpg        bodegón de ceras sobre el mostrador
  sala-mostrador.jpg    el mostrador con producto a la venta
  sala-ninos.jpg        la silla de coche del corte infantil
  og.jpg                miniatura 1200×630, recortada de equipo.jpg
```

`equipo.jpg` no sale de la galería: es una **segunda `biz_photo`** que Booksy
guarda para este local pero que no aparece en la página, ni siquiera abriendo
"Mostrar todas las fotos". Se llega a ella reconstruyendo la URL de CloudFront
a partir del nombre del archivo y cambiando la extensión a `.jpeg`; así baja a
1165×655 en vez de los 640×360 que sirve la miniatura.

## Decisiones técnicas que conviene no deshacer

- **La pista de fotos no lleva `scroll-snap`.** Con `scroll-snap-type` puesto, el
  navegador re-encaja en bucle y la página nunca llega a reposo, y además el
  snap cancela el `scrollBy({behavior:'smooth'})` de las flechas. Sin snap, el
  arrastre es libre y las flechas responden.
- Las filas de la carta colocan sus celdas **explícitamente** en la rejilla
  (`grid-row` / `grid-column`). Con colocación automática, el botón de reservar
  empujaba el precio a una tercera fila.
- La hora se calcula sobre `Europe/Madrid`, no sobre la del navegador, para que
  el estado sea correcto también fuera de España.
- Marcada `noindex` mientras es una propuesta, para no competir en Google con la
  ficha real del negocio ni con la web de la cadena. Al aprobarse, se quita.

## La versión de Artifacts

`index.html` es la fuente; `artifact.html` se genera desde ella y no se edita a
mano:

```bash
node build-artifact.js
```

El script hace tres cosas, y las tres son obligatorias:

1. **Quita `<!doctype>`, `<html>`, `<head>` y `<body>`.** La galería envuelve lo
   que recibe en su propio esqueleto; si le pasas un documento entero, el
   `<head>` acaba dentro del `<body>`.
2. **Incrusta las fotos en `data:` URI.** La carpeta `assets/` no viaja con el
   artefacto. Google Fonts es el único recurso externo que sobrevive a la CSP
   de la galería.
3. **Añade un aviso fijo arriba**: *propuesta de rediseño, no es la web oficial
   de Carlos Conde*. El enlace de un artefacto se reenvía, y sin ese aviso la
   página pasa por la web real del negocio. En `index.html` no está, porque ahí
   el contexto lo da la carpeta y el `noindex`.

Tras cualquier cambio en `index.html`, hay que volver a lanzar el script y
republicar el artefacto sobre la misma URL.

## Ver en local

```bash
python -m http.server 8000
```

Y abrir <http://localhost:8000/carlos-conde-leganes/>.

## En línea

<https://nestordefrancis-collab.github.io/Muestras-paginas-web/carlos-conde-leganes/>

Si cambias el nombre del repositorio o mueves esta carpeta, actualiza las
etiquetas `og:url` y `og:image` de `index.html`: llevan la URL completa escrita
a mano, que es lo que exige WhatsApp para mostrar la miniatura.

## Detalles técnicos

- Diseño responsive y respeto por `prefers-reduced-motion`.
- La entrada de las secciones al hacer scroll usa `IntersectionObserver`; si no
  está disponible, el contenido sale visible desde el principio.
- Sin cookies ni rastreadores: nada que consentir.
- Las únicas peticiones externas son las tipografías de Google Fonts.

---

Las fotografías y el logotipo pertenecen a Carlos Conde Plaza Nueva (Leganés).
Los datos se consultaron en septiembre de 2026 y pueden haber cambiado.
