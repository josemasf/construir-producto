import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const slides = readFileSync('slides.md', 'utf8')
const style = readFileSync('style.css', 'utf8')
const footer = readFileSync('global-bottom.vue', 'utf8')
const pages = slides.split(/(?=^---\r?\nlayout:)/gm)
const expectedPages = 25

if (pages.length !== expectedPages) {
  throw new Error(`Se esperaban ${expectedPages} diapositivas; hay ${pages.length}.`)
}

for (let chapter = 1; chapter <= 5; chapter++) {
  if (!slides.includes(`# ${chapter} ·`)) {
    throw new Error(`Falta el capítulo ${chapter} en slides.md`)
  }
}

const imagePaths = [...slides.matchAll(/(?:background:\s*|src=")(\/images\/[^"\s]+)/g)].map((match) => match[1])
for (const imagePath of imagePaths) {
  const resolved = join('public', imagePath.slice(1))
  if (!existsSync(resolved)) {
    throw new Error(`Imagen no encontrada: ${resolved}`)
  }
}

for (const token of ['--deck-bg', '--deck-ink', '--deck-accent', '--deck-font-display', '--deck-font-body']) {
  if (!style.includes(token)) {
    throw new Error(`Falta el token visual ${token}`)
  }
}

const chapterCount = [...footer.matchAll(/\{ label: '/g)].length
if (chapterCount !== 5 || !footer.includes('const totalSlides = 25')) {
  throw new Error('La navegación debe coincidir con los 5 capítulos y 25 diapositivas')
}

if (!slides.includes('<ProductLoop />') || !slides.includes('Tú decides · 90 segundos')) {
  throw new Error('Faltan elementos esenciales de la charla')
}

// Las ilustraciones laterales absolutas usan el lienzo de Slidev como
// referencia: los vw dependen del viewport y empequeñecen las imágenes
// cuando se consulta una diapositiva desde un móvil vertical.
const illustrationRules = style.split('/* Proporciones consistentes para todas las ilustraciones laterales. */')[1]
  ?.split('/* Jerarquía editorial para conceptos:')[0] ?? ''
for (const selector of ['.responsibility-side-asset', '.stop-signals-side-asset']) {
  if (!illustrationRules.includes(selector)) {
    throw new Error('Falta el selector de ilustración ' + selector)
  }
}
if (/\bwidth\s*:[^;]*\b\d+(?:\.\d+)?vw\b/.test(illustrationRules)) {
  throw new Error('No usar vw para dimensionar ilustraciones respecto al lienzo')
}

console.log(`OK: ${pages.length} diapositivas, 5 capítulos, ${imagePaths.length} referencias a imágenes, tokens y navegación coherentes.`)
