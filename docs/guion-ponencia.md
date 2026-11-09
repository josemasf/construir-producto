# Guion para presentar «De escribir código a construir producto»

Duración objetivo: **45 minutos**. Audiencia: desarrolladores, Tech Leads y perfiles de ingeniería. El propósito no es impartir una clase de Product Management, sino mostrar cómo cambiar una decisión técnica cuando entendemos qué problema buscamos resolver.

## Ritmo de la sesión

| Minutos | Diapositivas | Hilo narrativo | Tiempo |
| --- | --- | --- | ---: |
| 0–9 | 1–8 | Tesis, distinciones, evidencia y presentación de Qué Veo Ahora | 9 min |
| 9–16 | 9–12 | La trampa de seguir construyendo | 7 min |
| 16–25 | 13–17 | Usuarios, responsabilidades, métricas y el caso conductor | 9 min |
| 25–36 | 18–24 | Árbol de decisión, votación, experimentos y opciones de continuidad | 11 min |
| 36–45 | 25–32 | Priorizar, defender decisiones, IA, ciclo y cuatro preguntas finales | 9 min |

Hay notas del ponente en los comentarios HTML de `slides.md`. Esta tabla es una guía, no un temporizador rígido.

## Tres momentos de la historia

### 1. El problema: diapositiva 8

Presenta Qué Veo Ahora como proyecto existente para descubrir películas y series. Explica funciones comprobables (filtros, estado de ánimo, proveedores) y plantea una **hipótesis**: el problema real podría ser la dificultad para elegir, no la ausencia de funciones.

No atribuir a la aplicación métricas, entrevistas o descubrimientos que no estén contrastados. La página de referencia es el [README de Qué Veo Ahora](https://github.com/josemasf/que-veo-hoy).

### 2. El aprendizaje: diapositivas 15–17

Contrasta lo que creemos que hace el usuario con lo que deberíamos comprobar. Explica la diferencia entre eventos instrumentables y resultados observados. Un clic hacia la plataforma de streaming no demuestra que se haya visto el contenido ni que el usuario haya quedado satisfecho.

Pregunta a la audiencia: «¿Qué dato podría hacerte cambiar de opinión sobre la siguiente funcionalidad?».

### 3. La decisión: diapositivas 19–24

El árbol de decisión ya no ordena construir cualquier cosa que reduzca incertidumbre: exige justificar el problema, el riesgo o el aprendizaje y elegir una intervención proporcional. La respuesta puede ser conversar, medir, simplificar, mantener o retirar.

## Dinámica participativa: diapositiva 20

Duración recomendada: **3 minutos**, aunque el título reserve 90 segundos para pensar y elegir.

1. Lee el problema y las cuatro alternativas.
2. Da unos segundos para decidir y pide votar levantando la mano.
3. Escucha los motivos de dos alternativas diferentes.
4. Pulsa avanzar para revelar la reflexión y conecta con el bloque de experimentos.

La opción A (IA) no es automáticamente errónea; está **sin justificar** si no tenemos evidencia suficiente del problema. B y C son buenas maneras de aprender; D tiene sentido cuando ya conocemos dónde está la fricción. Evitar presentar una votación como una pregunta de examen con solución única.

## Qué matices no conviene perder

- Una web puede ser un producto; un servicio también. No son una escalera universal.
- No todas las necesidades son recurrentes, y un producto no necesita cobrar a cada usuario.
- La deuda técnica, la accesibilidad, la seguridad y el rendimiento pueden justificar cambios por reducción de riesgo, no solo por nuevas funcionalidades.
- Un producto puede mantenerse pequeño sin fracasar. Pausar y retirar también son opciones diferentes.
- La IA puede ayudar a investigar y planificar, no solo a implementar, pero no sustituye las decisiones responsables.
- El diagrama Research → Plan → Implement → Measure es un bucle de aprendizaje, no una metodología lineal obligatoria.

## Ensayo final

- Presentar a 16:9 sin tener que leer texto pequeño de las diapositivas.
- Comprobar el ciclo SVG, la secuencia de revelado y la diapositiva de votación.
- Mantener el caso real diferenciado de los ejemplos hipotéticos.
- No leer las preguntas finales como checklist burocrática; convertirlas en una herramienta sencilla.
- Si la sesión se alarga, reducir ejemplos secundarios antes de cortar el debate o el cierre.
