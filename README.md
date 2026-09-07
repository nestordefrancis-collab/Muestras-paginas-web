# Muestras de páginas web

Rediseños de webs para negocios locales. Cada muestra vive en su propia
carpeta y es un sitio estático independiente: se abre con doble clic sobre
`index.html`, sin build ni dependencias.

## Muestras

| Muestra | Negocio | Sector | Registro |
| --- | --- | --- | --- |
| [`the-barber-lab-lujo/`](the-barber-lab-lujo/) | The Barber Lab — Leganés, Madrid | Barbería | Casa de lujo: negro, oro y vidrio |
| [`meson-rias-gallegas-pulpo/`](meson-rias-gallegas-pulpo/) | Mesón Rías Gallegas — Leganés, Madrid | Restaurante gallego | Pizarra y latón: portada oscura y carta sobre mantel |
| [`el-venezolano-leganes/`](el-venezolano-leganes/) | El Venezolano — Leganés, Madrid | Restaurante venezolano | Botica del maíz: masa, papelón y caraota, con las arepas como léxico |
| [`clinica-dental-egle-estudio/`](clinica-dental-egle-estudio/) | Clínica Dental Egle — Leganés, Madrid | Clínica dental | Estudio: hueso y mármol, panel fijo con las dos consultas y los tratamientos como catálogo |
| [`clinica-dental-egle-cian/`](clinica-dental-egle-cian/) | Clínica Dental Egle — Leganés y Madrid | Clínica dental | Cian: su propio blanco y azul de redes, entrada por síntoma y tratamientos en tira horizontal |

## Ver una muestra en local

```bash
cd the-barber-lab-lujo
python -m http.server 8000
```

Y abrir <http://localhost:8000>.
