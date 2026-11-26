---
theme: default
layout: cover
background: /images/cover-producto.png
title: "De escribir código a construir producto"
info: |
  Versión corta: 13 minutos de exposición y 2 de margen.
class: text-left portada
transition: slide-left
mdc: true
colorSchema: dark
duration: 15min
---

# De escribir código

# a construir

# <span class="product-word">PRODUCTO</span>

## Por qué desarrollar más no siempre es avanzar

José María Santos  
Tech Lead

<!--
00:00–00:20. No vengo a decir que el código no importe. Importa más cuando sabemos para qué lo escribimos.
-->


---
layout: statement
class: statement-thesis
---

# Un producto técnicamente impecable que nadie necesita sigue siendo algo que <span class="thesis-emphasis">nadie necesita</span>.

<!--
00:20–01:00. Una arquitectura impecable no compensa la falta de valor. Desarrollar se ve; medir, escuchar y renunciar se ve menos. No confundamos actividad con progreso.
-->


---
layout: default
class: concept-slide
---

# Web, servicio y producto

## Construir una web es solo el principio.

<ConceptLayers />

<!--
01:00–02:00. Es una definición práctica para esta charla, no universal: web, funciona; servicio, resuelve un problema; producto comercial, hay disposición a pagar directa o indirectamente por resolverlo.
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
02:00–03:00. El usuario quiere encontrar algo que ver, no acumular filtros. Con IA era fácil añadir funcionalidades. El servicio acabó cerrándose porque no conseguí monetizarlo suficientemente. No atribuir métricas ni comportamientos no medidos.
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
03:00–04:00. Una petición menor puede merecer una respuesta rápida. No hace falta un estudio para cada campo: el esfuerzo de validación debe ser proporcional al riesgo, coste e incertidumbre. Escuchar al cliente no implica ejecutar automáticamente su solución. Incluso lo barato de construir tiene coste de existencia.
-->

---
layout: default
class: stop-signals-slide
---

# Cerrar no siempre es fracasar

## A veces, la mejor decisión es dejar de invertir.

<StopSignals />

<!--
04:00–05:00. Qué Veo Ahora ilustra que retirar puede ser una decisión responsable cuando el valor no compensa el coste. También podemos mantener pequeño, experimentar o invertir. Si cerramos, comunicar y retirar ordenadamente.
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
05:00–07:00. Caso real comentado en la charla: comparar el uso de búsqueda y exportación, preguntar por qué se exporta y descubrir el contexto de integración. La intervención puede ser comercial o de integración, no otra pantalla. No publicar cifras, mercados ni datos internos en una presentación pública; usar detalles solo oralmente ante audiencia autorizada. No afirmar que la solución ya se implantó.
-->

---
layout: statement
class: statement-thesis
---

# Los datos muestran qué.

# El contexto explica <span class="thesis-emphasis">por qué</span>.

<!--
07:00–08:00. La telemetría permite observar uso real, no leer intenciones. Complementarla con conversaciones y comprobar calidad de la instrumentación. Una exportación frecuente puede indicar una necesidad fuera de nuestra aplicación.
-->

---
layout: default
class: loop-slide
---

# Del problema al código

<ProductLoop />

<!--
08:00–09:00. Primero entender el problema, luego decidir la intervención mínima, implementar si procede y medir. No es una cascada obligatoria. Seguridad, accesibilidad y fiabilidad también justifican acciones. El código es una consecuencia de la decisión.
-->

---
layout: default
class: ai-impact-slide
---

# La IA aumenta la velocidad

## El criterio decide la dirección.

<AIImpact />

<!--
09:00–11:00. La IA abarata generar alternativas, no mantenerlas ni validarlas. Producto define hipótesis, diseño evalúa experiencia, ingeniería valora viabilidad, seguridad y mantenimiento. Un prototipo Storybook con componentes reales y MSW puede ser útil si reduce incertidumbre; una conversación puede ser todavía más barata. Evitar duplicar aplicaciones o automatizar procesos que no entendemos.
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
11:00–12:40. Recorrer las cuatro preguntas. Aplicarlas proporcionalmente: una corrección pequeña no requiere un documento. Sirven también antes de encargar trabajo a agentes. Esta es la diapositiva para fotografiar.
-->


---
layout: end
---

# Gracias

## ¿Qué problema resolvemos antes de escribir más código?

José María Santos  
josemariasantos.com

<!--
12:40–13:00. Cerrar con la pregunta. Dos minutos de margen hasta los 15; debate después de la exposición.
-->
