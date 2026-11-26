---
theme: default
layout: cover
background: /images/cover-producto.png
title: "De escribir código a construir producto"
info: |
  Versión principal: 19 minutos y 5 segundos de exposición, 4 minutos y 25 segundos de participación y 1 minuto y 30 segundos de margen.
class: text-left portada
transition: slide-left
mdc: true
colorSchema: dark
duration: 25min
---

# De escribir código

# a construir

# <span class="product-word">PRODUCTO</span>

## Por qué desarrollar más no siempre es avanzar

José María Santos  
Tech Lead

<!--
00:00–00:30. Abrir con calma. No vengo a decir que el código no importe: importa más cuando sabemos para qué lo escribimos. Plantear la diferencia entre actividad y resultado.
-->

---
layout: statement
class: statement-thesis
---

# Un producto técnicamente impecable que nadie necesita sigue siendo algo que <span class="thesis-emphasis">nadie necesita</span>.

<!--
00:30–01:20. Dejar unos segundos para leer. Una arquitectura impecable no compensa la falta de valor. No confundir cantidad de entregas con progreso; medir y renunciar también son trabajo.
-->

---
layout: default
class: audience-slide
---

# Levantad la mano

## ¿Habéis desarrollado algo que después nadie ha utilizado?

<div class="audience-choices">
  <div><span>1</span><strong>Sí, una funcionalidad.</strong></div>
  <div><span>2</span><strong>Sí, un proyecto entero.</strong></div>
</div>

<p v-click class="audience-reveal">Que funcione no significa que aporte valor.</p>

<!--
01:20–02:00. Pedir levantar la mano. Escuchar un ejemplo breve si aparece y revelar el mensaje. No abrir debate largo.
-->

---
layout: default
class: concept-slide
---

# Web, servicio y producto

## Construir una web es solo el principio.

<ConceptLayers />

<!--
02:00–03:15. Definición práctica, no universal: web, funciona; servicio, resuelve un problema; producto comercial, existe disposición a pagar por resolverlo, directa o indirectamente. La señal económica no sustituye a la utilidad.
-->

---
layout: default
class: case-slide
---

# Qué Veo Ahora

## Construir más no siempre es avanzar.

<CaseDecisionFlow />

<p class="hypothesis-note">Proyecto real; flujo ilustrativo, no resultados de analítica.</p>

<!--
03:15–04:45. Contar la experiencia personal: el usuario quiere encontrar algo que ver, no acumular filtros. La IA facilitó añadir funcionalidades. Cerré el servicio porque no conseguí monetizarlo suficientemente. No atribuir métricas o comportamientos no medidos. Reservar la explicación de cómo medir para el siguiente ejercicio.
-->

---
layout: default
class: audience-slide
---

# Tú decides · 75 segundos

## Entran en la web, pero no sabemos si consiguen elegir. ¿Qué harías primero?

<div class="audience-choices">
  <div><span>A</span><strong>Construir un recomendador más avanzado con IA.</strong></div>
  <div><span>B</span><strong>Hablar con personas para entender cómo eligen.</strong></div>
  <div><span>C</span><strong>Instrumentar el recorrido hasta el proveedor.</strong></div>
  <div><span>D</span><strong>Simplificar directamente el flujo existente.</strong></div>
</div>

<p v-click class="audience-reveal">No hay respuesta universal: B y C pueden aportar evidencia para decidir si D tiene sentido. A sigue siendo una apuesta sin justificar.</p>

<!--
04:45–06:00. Ejercicio hipotético, no diagnóstico de Qué Veo Ahora. Pedir votar, escuchar dos razones breves y revelar el criterio. No hay solución universal: hablar o medir ayuda a decidir si simplificar tiene sentido.
-->

---
layout: default
class: evidence-slide
---

# Medir para decidir · Qué Veo Ahora

<MetricsToDecision />

<!--
06:00–07:15. Pregunta previa: ¿ayudamos a elegir? Ejemplos de eventos que podríamos instrumentar: abrir recomendación, ficha, enlace del proveedor, nueva búsqueda o abandono. Pulsar un enlace no prueba satisfacción ni reproducción. Contrastar con conversaciones y decidir qué intervención probar. Son hipótesis de instrumentación, no resultados reales.
-->

---
layout: default
class: responsibility-slide
---

# Con usuarios cambia la responsabilidad

## Ya no solo construimos: alguien depende de que funcione.

<ResponsibilityMap />

<!--
07:15–08:15. Pasar de la utilidad a la responsabilidad: alguien depende del servicio. Explicar disponibilidad, seguridad, soporte y expectativas desde el punto de vista de quien lo usa. No repetir aquí el coste de cada feature; ese es el siguiente caso.
-->

---
layout: default
class: audience-slide
---

# Una petición aparentemente sencilla

## ¿Cuánto cuesta añadir un campo a una pantalla?

<div class="audience-choices">
  <div><span>1</span><strong>¿Qué hay que hacer para que funcione?</strong></div>
  <div><span>2</span><strong>¿Qué cuesta mantenerlo después?</strong></div>
</div>

<!--
08:15–09:00. Pedir dos respuestas concretas: qué hay que tocar y qué ocurre una vez desplegado. No mostrar todavía los costes; avanzar para contrastar.
-->

---
layout: default
class: options-slide
---

# «Solo es añadir un campo»

## Crearlo es solo una parte del coste.

<div class="options-grid">
  <section><span>01</span><strong>Desarrollo</strong><p>Contratos, datos y dependencias.</p></section>
  <section><span>02</span><strong>Calidad</strong><p>Pruebas y compatibilidad.</p></section>
  <section><span>03</span><strong>Operación</strong><p>Soporte y mantenimiento.</p></section>
  <section><span>04</span><strong>Producto</strong><p>Valor, frecuencia y alcance.</p></section>
</div>

<!--
09:00–10:15. Escuchar una petición no implica ejecutar literalmente la solución. Añadir un campo puede requerir contratos, pruebas, eventos, documentación y soporte. Validación proporcional: si es una corrección clara y de bajo riesgo, actuar rápido; si hay alcance incierto o coste recurrente, entender primero el objetivo. Distinguir necesidad común de personalización a medida.
-->

---
layout: default
class: stop-signals-slide
---

# Cerrar no siempre es fracasar

## A veces, la mejor decisión es dejar de invertir.

<StopSignals />

<!--
10:15–11:45. Retomar el cierre de Qué Veo Ahora. Retirar puede ser una decisión responsable, no un fracaso. No es un dilema binario: invertir cuando hay valor, experimentar si falta evidencia, mantener pequeño si funciona, retirar si no compensa. Avisar, preservar datos cuando proceda y documentar aprendizajes. No repetir la historia completa del proyecto.
-->

---
layout: default
class: audience-slide
---

# Tú decides · 60 segundos

## Un mercado exporta muchos más CSV que otro. ¿Qué harías primero?

<div class="audience-choices">
  <div><span>A</span><strong>Mejorar los filtros.</strong></div>
  <div><span>B</span><strong>Mejorar las exportaciones.</strong></div>
  <div><span>C</span><strong>Investigar por qué exportan tanto.</strong></div>
  <div><span>D</span><strong>Esperar a tener más información.</strong></div>
</div>

<p v-click class="audience-reveal">Sin conocer la causa, A y B son apuestas. C puede aportar evidencia para decidir.</p>

<!--
11:45–12:45. Votar A, B, C o D. Escuchar un par de razonamientos antes de revelar. No presentar una respuesta universal. Avanzar al descubrimiento real.
-->

---
layout: default
class: options-slide
---

# ¿Por qué exportamos tanto a CSV?

## Un comportamiento distinto no implica que falte una feature.

<div class="options-grid">
  <section><span>01</span><strong>Observación</strong><p>Distinto uso de CSV entre mercados.</p></section>
  <section><span>02</span><strong>Hipótesis</strong><p>¿Mejorar búsqueda o exportación?</p></section>
  <section><span>03</span><strong>Contexto</strong><p>Integraciones ausentes; verificaciones manuales.</p></section>
  <section><span>04</span><strong>Decisión</strong><p>Explorar la integración antes de construir.</p></section>
</div>

<!--
12:45–15:00. Caso real: describir la comparación de búsquedas y exportaciones, preguntar qué podría explicar las diferencias y contar cómo el contexto de integración reveló verificaciones manuales. La respuesta puede ser comercial o de integración, no una pantalla nueva. No afirmar que se implantó la solución. No publicar cifras, nombres de mercados ni datos internos; detalles solo oralmente ante audiencia autorizada.
-->

---
layout: statement
class: statement-thesis
---

# Los datos muestran qué.

# El contexto explica <span class="thesis-emphasis">por qué</span>.

<!--
15:00–15:45. La telemetría registra comportamiento, no intención. Comprobar instrumentación y complementar con personas. El ejemplo anterior demuestra que una misma señal admite explicaciones distintas.
-->

---
layout: default
class: loop-slide
---

# Del problema al código

<ProductLoop />

<!--
15:45–16:45. Research: entender. Plan: decidir alcance, riesgos y señal de éxito. Implement: construir si procede. Measure: aprender. No es una cascada rígida. Conectar ahora con decisiones técnicas y experimentos concretos.
-->

---
layout: default
class: technical-decision-slide
---

# Cambia la conversación técnica

## De «¿qué podemos construir?» a «¿qué riesgo o problema reducimos?».

<div class="technical-decision">
  <div class="technical-decision__old"><small>ANTES</small><strong>«Hay que rehacer este módulo porque está mal diseñado».</strong></div>
  <div class="technical-decision__new"><small>CON CRITERIO DE PRODUCTO</small><strong>«Esta complejidad provoca fallos y retrasos; simplifiquemos y comprobemos el efecto».</strong></div>
</div>

<p class="technical-decision__bottom">La buena ingeniería no deja de priorizar refactors: explica su impacto en el equipo, en el usuario o en el riesgo.</p>

<!--
16:45–18:00. Comparar las dos formulaciones del refactor. Seguridad, accesibilidad, fiabilidad y mantenibilidad no necesitan una justificación directa en ingresos; sí explicar el riesgo o problema que reducen. Ejemplo: medir fallos, retrasos o tiempo de cambio antes y después.
-->

---
layout: default
class: experiment-shift-slide
---

# Experimentos baratos, aprendizaje rápido

<ExperimentShift />

<!--
18:00–19:30. Validar primero con la intervención más barata: conversación, observación o proceso manual asistido antes de automatizarlo. Si hace falta contrastar una interfaz, una issue puede describir hipótesis y criterio de validación; un agente reutiliza componentes Vue, genera stories de Storybook con MSW y comparte preview. Es un flujo propuesto, no un resultado real; feedback interno no equivale a validación con usuarios. Decidir si iterar, descartar o implementar.
-->

---
layout: default
class: audience-slide
---

# Si construir es diez veces más barato…

## ¿Deberíamos construir diez veces más funcionalidades?

<div class="audience-choices">
  <div><span>A</span><strong>Sí, aprovechar la capacidad extra.</strong></div>
  <div><span>B</span><strong>Depende del valor que aporten.</strong></div>
</div>

<p v-click class="audience-reveal">Abaratar la creación no elimina el coste de existencia.</p>

<!--
19:30–20:15. Supuesto hipotético, no dato medido. Pedir respuestas rápidas y revelar la conclusión. Trasladar la conversación de capacidad de producción a criterio.
-->

---
layout: default
class: ai-impact-slide
---

# La IA aumenta la velocidad

## El criterio decide la dirección.

<AIImpact />

<!--
20:15–21:45. La IA acelera alternativas, no garantiza que respondan al problema ni que estén listas para producción. Producto define hipótesis y prioridades; diseño evalúa experiencia y accesibilidad; ingeniería evalúa viabilidad, contratos, seguridad y mantenimiento. Los tres participan en identificar evidencia que falta. No duplicar la explicación de Storybook ni la del coste de existencia.
-->

---
layout: default
class: takeaway-slide
---

# Antes de abrir una issue

## Cuatro preguntas, también al prototipar con IA

<div class="takeaway-questions">
  <div><span>01</span><strong>¿Qué problema real resolvemos?</strong></div>
  <div v-click><span>02</span><strong>¿Qué evidencia tenemos?</strong></div>
  <div v-click><span>03</span><strong>¿Qué intervención mínima crea valor o reduce riesgo?</strong></div>
  <div v-click><span>04</span><strong>¿Cómo sabremos si ha funcionado?</strong></div>
</div>

<!--
21:45–23:00. Recorrer las cuatro preguntas progresivamente. Aplicarlas proporcionalmente, sin burocratizar cambios pequeños. Sirven también antes de encargar un prototipo o un refactor a un agente. Es la diapositiva para fotografiar.
-->

---
layout: end
---

# Gracias

## ¿Qué problema resolvemos antes de escribir más código?

José María Santos  
josemariasantos.com

<!--
23:00–23:30. Cerrar con la pregunta y dejar unos segundos de reflexión. Margen de 1 minuto y 30 segundos hasta el objetivo de 25 minutos; debate abierto después.
-->
