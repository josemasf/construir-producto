# De escribir código a construir producto

Charla técnica de **45 minutos** creada con [Slidev](https://sli.dev/) sobre cómo tomar mejores decisiones de ingeniería desde el criterio de producto. La idea central no es escribir menos código, sino entender qué problemas y riesgos merece la pena abordar.

[Ver presentación publicada](https://construir-producto.vercel.app/1).

## Estructura actual (25 diapositivas)

1. **Del código al problema.** Web, servicio y producto no son escalones excluyentes. Lo importante es el valor y la evidencia.
2. **El espejismo de seguir construyendo.** Por qué añadir funcionalidades puede retrasar las conversaciones importantes.
3. **La realidad de los usuarios.** Uso real, responsabilidades y analítica para decidir.
4. **Aprender a no construir.** Experimentos pequeños, votación con la audiencia y decisiones para invertir, experimentar, mantener o retirar.
5. **Criterio de producto en ingeniería.** Priorización, deuda técnica, agentes de IA y ciclo Research → Plan → Implement → Measure.

### Caso conductor: Qué Veo Ahora

El proyecto [Qué Veo Ahora](https://github.com/josemasf/que-veo-hoy) se utiliza como ejemplo de una web de descubrimiento de películas y series. Sus funcionalidades (recomendaciones por preferencias, filtros y plataformas) proceden del repositorio del proyecto.

**Importante:** las hipótesis sobre el comportamiento de los usuarios, los embudos propuestos y las opciones de decisión **son escenarios didácticos, no métricas ni resultados observados**. Antes de contar la charla como experiencia real de uso, hay que sustituir las hipótesis por datos o conversaciones verificables.

### Participación del público

La diapositiva **«Tú decides · 90 segundos»** presenta cuatro opciones para un mismo problema y revela una reflexión con `v-click`. Reservar tres minutos para las respuestas y el debate (diapositiva 16). No existe una opción universal sin entender la evidencia.

La diapositiva **«Antes de abrir una issue»** (24) resume cuatro preguntas aplicables a funcionalidades, refactors, deuda técnica y trabajo con agentes de IA. La 25 cierra con una pregunta para la audiencia.

## Desarrollo

Requisitos: **Node.js 20.19 o superior** y [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

La presentación y las notas del ponente se editan en [`slides.md`](./slides.md). Las notas van en comentarios HTML y aparecen en el modo presentador de Slidev.

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Abre el editor y previsualización de Slidev. |
| `pnpm build` | Genera la versión estática en `dist/`. |
| `pnpm export` | Exporta a PDF (puede requerir navegador instalado). |

## Archivos principales

- [`slides.md`](./slides.md): narrativa, diapositivas y notas.
- [`style.css`](./style.css): sistema visual de la charla.
- [`global-bottom.vue`](./global-bottom.vue): navegación de los cinco capítulos y contador.
- [`components/ProductLoop.vue`](./components/ProductLoop.vue): ciclo SVG accesible y escalable.
- [`components/DecisionTree.vue`](./components/DecisionTree.vue): marco para cuestionar una petición.
- [`components/MetricsToDecision.vue`](./components/MetricsToDecision.vue): vínculo entre preguntas, señales y decisiones.
- [`public/images/`](./public/images/): ilustraciones y fondos.
- [`docs/guion-ponencia.md`](./docs/guion-ponencia.md): tiempos y dinámica recomendada de la sesión.

## Identidad visual

Se respetan **todas las ilustraciones originales del autor**, que forman parte de la identidad del blog. La composición utiliza Montserrat Alternates e Inter, un fondo azul oscuro, naranja de acento y diagramas con los mismos tokens de color y tipografía.

La guía para mantener el estilo sin introducir composiciones genéricas está en [`docs/design-system.md`](./docs/design-system.md).

## Comprobaciones antes de presentar

- Ejecutar `node scripts/check-deck.mjs` y `pnpm build`, y revisar la consola.
- Proyectar en formato 16:9 y comprobar contraste, textos y elementos que aparecen tras `v-click`.
- Verificar que ninguna anécdota o métrica hipotética se presenta como hallazgo real.
- Ensayar la duración de las cinco partes y el tiempo de interacción.
- Si hay imágenes demasiado pesadas, optimizarlas manteniendo legibilidad y calidad.

El repositorio incluye configuración de despliegue para Netlify y Vercel. El directorio publicado es `dist/`.

## Créditos

José María Santos.
