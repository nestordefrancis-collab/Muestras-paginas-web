# The Barber Lab

Sitio web de **The Barber Lab**, barbería en Leganés (Madrid).

Página estática, sin dependencias ni proceso de build: HTML y CSS en un único
archivo, con las imágenes servidas desde `assets/img/`.

## Estructura

```
index.html          la página completa (marcado + estilos)
assets/img/
  logo.png          logotipo dorado, fondo transparente
  shop.jpg          fachada del local
  lab.jpg           tratamiento capilar
  cut1.jpg          detalle de corte a navaja
```

## Ver en local

No hace falta servidor: basta con abrir `index.html` en el navegador.

Si prefieres servirlo por HTTP (recomendado para comprobar rutas relativas):

```bash
python -m http.server 8000
```

Y abrir <http://localhost:8000>.

## En línea

<https://nestordefrancis-collab.github.io/Muestras-paginas-web/the-barber-lab/>

Si cambias el nombre del repositorio o mueves esta carpeta, actualiza las
etiquetas `og:url` y `og:image` de `index.html`: llevan la URL completa
escrita a mano, que es lo que exige WhatsApp para mostrar la miniatura.

## Detalles técnicos

- Tipografías **Instrument Sans** y **Courier Prime** desde Google Fonts.
- Tema claro y oscuro automáticos vía `prefers-color-scheme`, con posibilidad
  de forzarlo con `data-theme="light"` o `data-theme="dark"` en `<html>`.
- Diseño responsive y respeto por `prefers-reduced-motion`.
- Sin JavaScript ni cookies: nada que consentir, nada que rastrear.
- Marcada `noindex` mientras es una propuesta, para no competir en Google con
  los perfiles reales del negocio. Al aprobarse, se quita esa etiqueta.

---

Las fotografías pertenecen a The Barber Lab.
