# Taller RS 49 — muestra "especialista alemán premium"

Rediseño de una sola página para **Talleres RS 49**, taller mecánico familiar en
Carabanchel (Madrid) desde 1972, especializado en marcas alemanas.

Actualización de su web actual (WordPress + Divi, contenido de 2017-2018).
**Todo el contenido y todas las fotos salen de su propia web.** No hay ni una sola
imagen de stock ni un solo texto inventado.

---

## De dónde sale cada cosa

| Bloque | Origen |
|---|---|
| Fotos del taller, fachada, motor, equipo | Biblioteca de medios de `tallerrs49.es` (originales a 1920 px) |
| Logo naranja | `Rs49-logo-definitivo.png` de su web |
| Proceso (llamas → recogemos → reparamos → entregamos) | Home actual, textos suyos con las erratas corregidas |
| Los 8 servicios + recogida | Home actual |
| Descripciones de cada servicio | Página "Servicios" (`taller-de-coches-de-confianza`), textos literales suyos |
| Turbos, cambios automáticos, climatización, emisiones | Página "Servicios" — servicios reales que no estaban en el brief |
| Chips "también en el taller" | **Rótulo de la fachada** (dirección, frenos y ABS, suspensión, aire acondicionado, híbridos, pre-ITV) |
| Historia de 1972 y el fundador | Página "Quiénes somos" |
| Juan Carlos, Marisol y Jesús | Página "Quiénes somos" (fotos y descripciones suyas) |
| 4 reseñas con nombre | Home actual, reseñas reales de Google |
| Cifras 1.820 / 19.850 / 15.020 / 98 % | Contadores de su home actual |
| Rapidez / profesionalidad / económico / satisfacción | Home actual, textos literales |
| Enlaces legales y redes | URLs reales de su web |

### Descartado a propósito
- `our-company-history-img.jpg`, `project-image-01..08.jpg`, `bmw-medium.jpg`,
  `mercedes-medium-1.jpg` → son **stock de la plantilla Divi**, no del taller.
- Las barras de porcentaje de "Quiénes somos" (99 % conocimientos mecánicos, etc.):
  son relleno de plantilla y bajan el registro premium.

---

## Dirección de estilo

Registro premium alemán —composición, aire y tipografía— pero con **los colores del
propio taller**, no con un azul acero genérico:

| Token | Valor | De dónde sale |
|---|---|---|
| Naranja | `#dc5100` | muestreado del PNG del logo |
| Azul | `#2643a7` | muestreado del rótulo de la fachada |
| Base | blanco / `#0c0e12` | — |

Tipografía **Archivo** (display + texto) y **JetBrains Mono** para numeración,
etiquetas y datos: el aire de hoja técnica es lo que separa esto de un taller genérico.

Esqueleto propio de esta muestra: raíl lateral fijo con índice de secciones, hero a
sangre con tira de datos, banda ancha de foto + rejilla de 13 servicios separados con
descripción propia, banda de cita a sangre y reseñas en carril.

Las cuatro fotos del taller que iban en carril al final de "Nuestra historia" se han
quitado. Los archivos siguen en `assets/img/` (`entrada-taller`, `nave-panoramica`,
`nave-audi-subaru`, `nave-mercedes`) por si hacen falta.

---

## Decisiones que conviene repasar con el cliente

1. **Horario: hay tres versiones distintas.**
   - Ficha de Google / dato del cliente: L-J 6:30-15:00, V 6:30-14:00 → **es el que está puesto**
   - Su página de contacto: L-V 9:00-14:00 y 16:00-19:30
   - El rótulo de la fachada (visible en la foto de la sección contacto): 9:15-13:30 y 16:00-19:30

   Hay que confirmar cuál es el bueno; además la foto del rótulo enseña el horario viejo.

2. **Solo llamada, sin WhatsApp.** El único CTA de contacto en toda la página es
   `tel:607669566`, igual que en su web actual. No hay formulario ni ningún otro canal.
   El email `info@tallerrs49.es` sigue en la ficha de datos de contacto (no como botón),
   porque es un dato suyo que ya aparece en su web; si quieren que desaparezca, se quita.

3. **Cifras de 2017.** 1.820 clientes / 19.850 coches / 15.020 averías / 98 % vienen de su
   web actual. Ocho años después seguramente se quedan cortas.

4. **Marcas en tipografía, no en logos.** Audi, BMW, Mercedes y Volkswagen aparecen como
   texto. Encaja mejor con el registro y evita el tema de marcas registradas. Si el cliente
   prefiere los logos oficiales, es un cambio de cinco minutos.

5. **Sin mapa embebido.** En su lugar va la foto del rótulo + botones "Cómo llegar" y
   "Abrir en Google Maps". Para encontrar un taller en un sótano de Carabanchel, reconocer
   el rótulo funciona mejor que un iframe. Si lo quieren, el `<iframe>` es una línea.

6. **Redes sin verificar.** Los enlaces de Facebook y Twitter existen en su web; falta
   comprobar si siguen activos. Un perfil abandonado resta.

7. **`CGA Car Service`** aparece en el rótulo y en los polos del equipo. No se ha usado en
   la web porque no sé qué relación tiene con RS 49.

8. **Su web promete vídeo por WhatsApp.** En su página de servicios: "te enviamos un
   vídeo por whatsapp informándote de todo lo que hemos encontrado". Como esta muestra
   va sin WhatsApp, ese argumento —que es bueno— se queda fuera. Si lo siguen haciendo,
   merece la pena recuperarlo aunque el canal de contacto siga siendo solo el teléfono.

## Pendiente marcado en la página
- `[PENDIENTE: razón social y CIF]` en el pie.
- `[PENDIENTE: descripción]` en "Trabajos a medida": es el único servicio del que su web
  no da ni una línea de texto.
- Coordenadas exactas para el `geo` del schema (comentario en el HTML).
- Precios: no hay ninguno en su web, así que no se inventa nada.

---

## Técnico
- Un solo `index.html`, sin frameworks. CSS y JS en línea.
- Mobile-first, barra fija de llamada a ancho completo en móvil.
- Modo claro y oscuro.
- Schema.org `AutoRepair` con los datos reales, horario y `aggregateRating` 4,9.
- Fotos reescaladas y comprimidas: 1,3 MB en total para 14 imágenes.
- Respeta `prefers-reduced-motion`.
