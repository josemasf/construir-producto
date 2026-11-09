# Sistema visual de «De escribir código a construir producto»

La presentación debe sentirse como parte de [josemariasantos.com](https://josemariasantos.com), no como una colección de plantillas de diapositivas. Esta guía describe decisiones ya implementadas en `style.css` y los componentes Slidev.

## Lo que identifica la charla

**Las ilustraciones son obras originales del autor y parte de la identidad del blog.** Se conservan sus archivos, encuadres y proporciones. No sustituirlas por imágenes de stock ni generarlas de nuevo para conseguir uniformidad. En portadas, la superposición oscura solo facilita que el texto se lea; en composiciones laterales se usa `object-fit: contain`.

La charla combina los dos tipos del blog, **Montserrat Alternates para titulares** e **Inter para texto**, con la paleta oscura del sitio y un **naranja propio de esta ponencia**. Los estilos cargan las mismas familias desde Google Fonts con fuentes del sistema como fallback; el blog las sirve localmente. Para proyectar sin conexión habría que alojar esas mismas fuentes como recursos locales, respetando su licencia.

## Tokens principales

| Token | Valor | Uso |
| --- | --- | --- |
| `--deck-bg` | `#0b1120` | Fondo de contenido, sin degradados decorativos |
| `--deck-surface` | `#111b2c` | Fondo puntual para el centro del ciclo SVG |
| `--deck-ink` | `#f8fafc` | Texto principal |
| `--deck-muted` | `#cbd5e1` | Texto de apoyo |
| `--deck-soft` | `#a8b5c7` | Datos secundarios y navegación |
| `--deck-accent` | `#f97316` | Separadores, indicadores, énfasis |
| `--deck-accent-light` | `#fdba74` | Etiquetas legibles sobre oscuro |
| `--deck-evidence` | `#67e8f9` | Evidencia en diagramas, con significado específico |
| `--deck-rule` | línea gris semitransparente | Separaciones discretas |

No introducir violeta, amarillo, sombras ni nuevos degradados por defecto. Los colores adicionales necesitan una función informativa, no decorativa.

## Cuatro composiciones

1. **Impacto / ilustración:** portada, pregunta o frase grande; la ilustración original es protagonista.
2. **Separador:** naranja sólido, título oscuro y texto de apoyo.
3. **Editorial:** concepto, caso real, debate o comparación con texto y líneas finas; sin paneles de dashboard.
4. **Diagrama:** relación o secuencia legible, componentes Vue que consumen los mismos tokens.

No todas las diapositivas deben tener el mismo diseño, pero sí márgenes, contraste, jerarquía y tratamiento de imagen coherentes.

## Reglas de implementación

- El sistema compartido vive en `style.css`. Usar variables CSS también en los `<style scoped>` de los componentes Vue.
- Mantener las imágenes originales en `public/images` y evitar estilos en línea de tamaño. Para las laterales utilizar `.side-asset` o las clases compartidas de ilustración.
- Preferir una frase fuerte, una figura o una comparación a cuatro cajas de color. Las líneas de separación cumplen el mismo papel sin crear ruido.
- Mantener la navegación inferior al día con la numeración real. Los 5 capítulos cubren 25 diapositivas.
- Evitar texto demasiado pequeño y comprobar un ensayo real en 16:9, incluido el revelado con `v-click`.
- Los gráficos no son imágenes decorativas: deben explicar relaciones y ser accesibles.
- Las hipótesis de Qué Veo Ahora siguen etiquetadas como escenarios didácticos, no como métricas verificadas.

## Validación

Ejecutar `node scripts/check-deck.mjs` y `pnpm build` antes de abrir una PR. La comprobación estática impide perder diapositivas, capítulos o recursos de imagen por accidente. El build no sustituye una inspección visual de proyección.
