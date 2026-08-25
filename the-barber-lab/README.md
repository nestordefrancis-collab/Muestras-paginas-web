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

## Publicar con GitHub Pages

En el repositorio: **Settings → Pages → Source: Deploy from a branch**,
rama `main` y carpeta `/ (root)`. La web queda publicada en
`https://<usuario>.github.io/<repositorio>/` en un par de minutos.

## Detalles técnicos

- Tipografías **Instrument Sans** y **Courier Prime** desde Google Fonts.
- Tema claro y oscuro automáticos vía `prefers-color-scheme`, con posibilidad
  de forzarlo con `data-theme="light"` o `data-theme="dark"` en `<html>`.
- Diseño responsive y respeto por `prefers-reduced-motion`.
- Sin JavaScript.
