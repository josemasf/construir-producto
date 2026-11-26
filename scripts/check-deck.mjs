import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const style = readFileSync('style.css', 'utf8')
const footer = readFileSync('global-bottom.vue', 'utf8')

function checkDeck(file, chapterVariable) {
  const slides = readFileSync(file, 'utf8')
  const pages = slides.split(/(?=^---\r?\nlayout:)/gm)
  const chapterBlock = footer.match(new RegExp('const ' + chapterVariable + ' = \\[([\\s\\S]*?)\\]'))
  if (!chapterBlock) {
    throw new Error(`No se encontraron los capítulos de ${file}`)
  }
  const chapters = [...chapterBlock[1].matchAll(/start:\s*(\d+),\s*end:\s*(\d+)/g)]
    .map(([, start, end]) => ({ start: Number(start), end: Number(end) }))

  let nextPage = 1
  for (const { start, end } of chapters) {
    if (start !== nextPage || end < start || end > pages.length) {
      throw new Error(`Rango de capítulo inválido en ${file}: ${start}–${end}`)
    }
    nextPage = end + 1
  }
  if (!chapters.length || nextPage !== pages.length + 1) {
    throw new Error(`Los capítulos de ${file} no cubren sus ${pages.length} diapositivas`)
  }

  const imagePaths = [...slides.matchAll(/(?:background:\s*|src=")(\/images\/[^"\s]+)/g)]
    .map((match) => match[1])
  for (const imagePath of imagePaths) {
    const resolved = join('public', imagePath.slice(1))
    if (!existsSync(resolved)) {
      throw new Error(`Imagen no encontrada en ${file}: ${resolved}`)
    }
  }

  console.log(`OK: ${file}: ${pages.length} diapositivas, ${chapters.length} capítulos, ${imagePaths.length} referencias a imágenes.`)
}

checkDeck('slides.md', 'shortChapters')
checkDeck('slides-extended.md', 'extendedChapters')

for (const token of ['--deck-bg', '--deck-ink', '--deck-accent', '--deck-font-display', '--deck-font-body']) {
  if (!style.includes(token)) {
    throw new Error(`Falta el token visual ${token}`)
  }
}

if (!/\btotal\b/.test(footer) || /const totalSlides\s*=\s*\d+/.test(footer)) {
  throw new Error('El contador debe ser dinámico')
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

console.log('OK: tokens visuales, navegación e ilustraciones coherentes.')
