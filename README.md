# Muestras de páginas web

Rediseños de webs para negocios locales. Cada muestra vive en su propia
carpeta y es un sitio estático independiente: se abre con doble clic sobre
`index.html`, sin build ni dependencias.

## Muestras

| Muestra | Negocio | Sector | Registro |
| --- | --- | --- | --- |
| [`the-barber-lab/`](the-barber-lab/) | The Barber Lab — Leganés, Madrid | Barbería | Editorial, papel y tinta |
| [`the-barber-lab-lujo/`](the-barber-lab-lujo/) | The Barber Lab — Leganés, Madrid | Barbería | Casa de lujo: negro, oro y vidrio |

Cuando hay dos filas del mismo negocio son propuestas alternativas para el
mismo cliente, no versiones sucesivas: se le enseñan las dos y elige.

## Ver una muestra en local

```bash
cd the-barber-lab
python -m http.server 8000
```

Y abrir <http://localhost:8000>.
