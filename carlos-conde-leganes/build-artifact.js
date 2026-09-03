/*
 * Genera artifact.html a partir de index.html.
 *
 * La galería de Artifacts envuelve lo que recibe en su propio
 * <!doctype html><head></head><body>, así que el archivo que se publica tiene
 * que ser un FRAGMENTO: sin doctype, sin <html>, sin <head> y sin <body>. Y
 * como no se sirve la carpeta assets/, las fotos van incrustadas en data URI.
 *
 *   node build-artifact.js
 */
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const entrada = fs.readFileSync(path.join(DIR, 'index.html'), 'utf8');

// --- 1. las piezas del documento -------------------------------------------
const titulo = 'Carlos Conde Leganés';
const fuentes = entrada.match(/<link href="https:\/\/fonts\.googleapis\.com[^>]*>/)[0];
const estilos = entrada.match(/<style>[\s\S]*?<\/style>/)[0];
const cuerpo = entrada.match(/<body>([\s\S]*)<\/body>/)[1].trim();

// --- 2. el aviso de propuesta ----------------------------------------------
// El enlace de un artefacto se reenvía. Sin esto, la página pasa por la web
// oficial del negocio, que no lo es.
const avisoCss = `
<style>
:root{--aviso:34px;}
@media(max-width:700px){:root{--aviso:46px;}}
.aviso{
  position:fixed;top:0;left:0;right:0;z-index:70;min-height:var(--aviso);
  display:flex;align-items:center;justify-content:center;gap:.5rem;
  background:#2E2116;color:#F1E8DA;padding:.45rem .9rem;text-align:center;
  font-family:'Oswald',"Arial Narrow",sans-serif;font-size:.66rem;
  font-weight:300;letter-spacing:.16em;text-transform:uppercase;line-height:1.5;
}
.aviso b{color:#C79A4E;font-weight:500;}
.barra{top:var(--aviso)!important;}
.filtros{top:calc(5.5rem + var(--aviso))!important;}
</style>`;

const avisoHtml =
  '<p class="aviso"><b>Propuesta de rediseño</b> · muestra de trabajo · no es la web oficial de Carlos Conde</p>';

// --- 3. fotos a data URI ----------------------------------------------------
let salida = cuerpo.replace(/src="assets\/img\/([^"]+)"/g, (todo, archivo) => {
  const bruto = fs.readFileSync(path.join(DIR, 'assets', 'img', archivo));
  return `src="data:image/jpeg;base64,${bruto.toString('base64')}"`;
});

// Las lazy que quedan fuera de pantalla ya no ahorran nada: están incrustadas.
salida = salida.replace(/ loading="lazy"/g, '');

const artefacto = [
  `<title>${titulo}</title>`,
  fuentes,
  estilos,
  avisoCss,
  avisoHtml,
  salida
].join('\n');

fs.writeFileSync(path.join(DIR, 'artifact.html'), artefacto, 'utf8');
console.log(`artifact.html escrito: ${(artefacto.length / 1024 / 1024).toFixed(2)} MB`);
