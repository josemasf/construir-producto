# Guion para presentar «De escribir código a construir producto»

Duración objetivo: **45 minutos**. Audiencia: desarrolladores, Tech Leads y perfiles de ingeniería. La versión condensada contiene **25 diapositivas**: la idea es ganar tiempo para casos y decisiones, no correr entre slides.

## Ritmo de la sesión

| Minutos | Diapositivas | Hilo narrativo | Tiempo |
| --- | --- | --- | ---: |
| 0–7 | 1–6 | Tesis, trampa del progreso, qué entendemos por producto y presentación de Qué Veo Ahora | 7 min |
| 7–14 | 7–10 | El espejismo de seguir construyendo y las preguntas que no se resuelven programando | 7 min |
| 14–24 | 11–13 | Responsabilidades con usuarios, hipótesis y analítica para decidir | 10 min |
| 24–36 | 14–19 | Árbol de decisión, votación, experimentos y opciones para invertir, mantener o retirar | 12 min |
| 36–45 | 20–25 | Priorización y deuda técnica, IA, ciclo de producto, cuatro preguntas y cierre | 9 min |

La transición entre secciones no necesita una separadora adicional en cada bloque. Las notas del ponente, dentro de `slides.md`, explican los cambios de ritmo.

## Tres momentos del caso conductor

### 1. La hipótesis: diapositiva 6

Presenta [Qué Veo Ahora](https://github.com/josemasf/que-veo-hoy) como proyecto real de descubrimiento de películas y series, con filtros de preferencias y proveedores. Plantea **como hipótesis didáctica**, no como hallazgo, que el problema de fondo podría ser la dificultad para decidir qué ver.

No atribuir a la aplicación métricas, entrevistas ni comportamientos que no estén contrastados.

### 2. La observación: diapositivas 12–13

Contrasta creencias y realidad. Pregunta qué señales podrían indicar que el usuario encuentra algo útil. Ejemplos de eventos **que se podrían instrumentar**: abrir recomendación, consultar ficha, visitar enlace de proveedor y volver a buscar.

Un clic hacia la plataforma de streaming **no prueba** que haya visto una película ni que esté satisfecho. Combina señales cuantitativas con conversaciones para decidir qué cambiar.

Pregunta al público: «¿Qué dato te haría cambiar de opinión sobre la siguiente funcionalidad?».

### 3. La decisión: diapositivas 15–19

El árbol ya no ordena construir cualquier cosa que reduzca incertidumbre. Pide justificar el problema, el riesgo o el aprendizaje y elegir la intervención proporcional. La respuesta puede ser conversar, medir, simplificar, mantener, invertir o retirar.

## Dinámica participativa: diapositiva 16

Duración: **3 minutos**, de los que 90 segundos se reservan a elegir y razonar.

1. Lee el problema y las cuatro alternativas.
2. Pide votar levantando la mano.
3. Escucha los motivos de dos opciones diferentes.
4. Avanza para revelar la reflexión con `v-click`.

La alternativa con IA no es automáticamente equivocada, pero está sin justificar si desconocemos el problema. Hablar con usuarios e instrumentar el flujo son formas de obtener evidencia; simplificar puede ser lo adecuado después de entender dónde está la fricción. No presentar la votación como examen con respuesta universal.

## Lo que importa conservar

- Una web puede ser un producto; un servicio también. No son escalones excluyentes.
- Un producto puede ser interno, gratuito, pequeño o resolver una necesidad no recurrente.
- Seguridad, accesibilidad, fiabilidad, rendimiento y deuda técnica pueden justificar decisiones por reducción de riesgo.
- Mantener algo estable también es una elección válida; retirar no equivale automáticamente a fracasar.
- La IA puede ayudar a investigar, planificar y desarrollar, pero no reemplaza el criterio.
- Research → Plan → Implement → Measure funciona como bucle de aprendizaje, no como cascada.
- Las **cuatro preguntas antes de abrir una issue** (24) deben quedar como herramienta práctica, no como burocracia.
- La **última diapositiva (25)** deja una sola pregunta memorable: «¿Qué decisión estamos evitando?».

## Ensayo final

- Comprobar el formato 16:9, el contraste y el tamaño de los textos.
- Verificar el ciclo SVG, los componentes Vue y el revelado progresivo de la votación.
- Separar explícitamente los datos comprobados de las hipótesis didácticas.
- Ensayar las transiciones entre los cinco bloques; no leer las diapositivas.
- Si faltan minutos, recortar anécdotas secundarias antes que eliminar el debate o el cierre.
