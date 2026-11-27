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
class: opening-question-slide
---

<div class="opening-question">
  <small>PREGUNTA A LA AUDIENCIA</small>
  <h1>¿Alguna vez habéis construido algo que nadie terminó utilizando?</h1>
  <p>Levantad la mano.</p>
  <div v-click class="opening-question__followup">¿Qué os habría gustado saber antes de construirlo?</div>
</div>

<!--
01:20–02:00. Pedir levantar la mano. Esperar unos segundos. Revelar la segunda pregunta y escuchar un ejemplo breve si surge. Enlazar con la diferencia entre funcionar, resolver y aportar valor.
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
class: example-cards-slide
---

# Qué Veo Ahora

## Construir más no siempre es avanzar.

<div class="example-cards">
  <section v-click class="example-card">
    <small>01 · EL PROBLEMA</small>
    <strong>Elegir una película</strong>
    <p>Recomendaciones por estado de ánimo y plataformas.</p>
  </section>
  <section v-click class="example-card">
    <small>02 · LA TRAMPA</small>
    <strong>Otra funcionalidad</strong>
    <p>Buscador, favoritos, listas compartidas… La IA lo hacía fácil.</p>
  </section>
  <section v-click class="example-card">
    <small>03 · EL COSTE</small>
    <strong>Crear no es mantener</strong>
    <p>Más código, servicios y gastos recurrentes.</p>
  </section>
  <section v-click class="example-card example-card--last">
    <small>04 · LA DECISIÓN</small>
    <strong>Cerrar el servicio</strong>
    <p>No conseguí monetizarlo suficientemente.</p>
  </section>
</div>

<!--
03:15–04:45. Contar una tarjeta por clic. No atribuir métricas no medidas. No repetir el caso al hablar de cierre.
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
class: example-cards-slide
---

# «Solo es añadir un campo»

## Crearlo es solo una parte del coste.

<div class="example-cards">
  <section v-click class="example-card">
    <small>01 · EJEMPLO</small>
    <strong>El dato ya existe</strong>
    <p>Quizá basta con mostrarlo o cambiar su etiqueta.</p>
  </section>
  <section v-click class="example-card">
    <small>02 · DEPENDENCIAS</small>
    <strong>El dato está en otra aplicación</strong>
    <p>Puede requerir una API, sincronización, eventos y pruebas.</p>
  </section>
  <section v-click class="example-card">
    <small>03 · FRECUENCIA</small>
    <strong>Crear un concesionario</strong>
    <p>Una tarea pequeña, repetida muchas veces, puede justificar una inversión.</p>
  </section>
  <section v-click class="example-card example-card--last">
    <small>04 · CRITERIO</small>
    <strong>Validación proporcional</strong>
    <p>Si es sencillo y aporta valor, hazlo. Si hay incertidumbre, entiende primero.</p>
  </section>
</div>

<!--
09:00–10:15. Avanzar una tarjeta por clic. Contrastar ejemplos; evitar cifras internas. No convertir una petición pequeña en burocracia.
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
class: example-cards-slide
---

# ¿Por qué exportamos tanto a CSV?

## Un prototipo descartado nos llevó a investigar.

<div class="example-cards">
  <section v-click class="example-card">
    <small>01 · INTUICIÓN</small>
    <strong>Simplificar el buscador</strong>
    <p>Muchas columnas. Prototipo rápido, descartado antes de implementarlo.</p>
  </section>
  <section v-click class="example-card">
    <small>02 · EVIDENCIA</small>
    <strong>Comparar el uso real</strong>
    <p>Exportaciones por mercado; ponderar también por usuarios y frecuencia.</p>
  </section>
  <section v-click class="example-card">
    <small>03 · CONTEXTO</small>
    <strong>Faltan integraciones</strong>
    <p>El equipo explicó por qué algunos usuarios necesitan verificar datos fuera.</p>
  </section>
  <section v-click class="example-card example-card--last">
    <small>04 · DECISIÓN</small>
    <strong>Explorar antes de construir</strong>
    <p>Valorar una integración o acción comercial, no otra pantalla.</p>
  </section>
</div>

<!--
12:45–15:00. Revelar 01 y 02; dejar que el público aporte su hipótesis antes de 03. No presentar la explicación como validada con clientes ni la solución como implantada.
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
class: example-cards-slide
---

# Cambia la conversación técnica

## Del diseño de una pieza al riesgo que reduce.

<div class="example-cards example-cards--three">
  <section v-click class="example-card">
    <small>01 · ANTES</small>
    <strong>«Hay que rehacer el módulo»</strong>
    <p>Una preferencia técnica no explica la prioridad.</p>
  </section>
  <section v-click class="example-card">
    <small>02 · EJEMPLO</small>
    <strong>La complejidad provoca bloqueos</strong>
    <p>Timeouts, entregas lentas o fallos de base de datos.</p>
  </section>
  <section v-click class="example-card example-card--last">
    <small>03 · DESPUÉS</small>
    <strong>Reducir el riesgo</strong>
    <p>Simplificar y medir fallos, latencia o tiempo de entrega.</p>
  </section>
</div>

<!--
16:45–18:00. Relacionar el ejemplo con fiabilidad y mantenibilidad. No reducir toda mejora a ingresos.
-->

---
layout: default
class: example-cards-slide
---

# Experimentos baratos, aprendizaje rápido

## Aprender antes de comprometerse con una implementación.

<div class="example-cards example-cards--three">
  <section v-click class="example-card">
    <small>01 · FACTURACIÓN</small>
    <strong>Una factura en modo lectura</strong>
    <p>Descubrir necesidades de impuestos sin construir todo el flujo.</p>
  </section>
  <section v-click class="example-card">
    <small>02 · AUTOMATIZACIÓN</small>
    <strong>Validar primero con personas</strong>
    <p>Entender el flujo y sus excepciones antes de automatizarlo.</p>
  </section>
  <section v-click class="example-card example-card--last">
    <small>03 · PROTOTIPO</small>
    <strong>Issue → agente → Storybook</strong>
    <p>Simular con MSW, obtener feedback y decidir qué validar.</p>
  </section>
</div>

<!--
18:00–19:30. Un ejemplo por clic. El flujo Storybook es una propuesta; feedback interno no equivale a validación de usuario.
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
class: example-cards-slide
---

# La IA aumenta la velocidad

## El criterio decide la dirección.

<div class="example-cards example-cards--three">
  <section v-click class="example-card">
    <small>01 · PRODUCTO</small>
    <strong>¿Qué problema y para quién?</strong>
    <p>Hipótesis, prioridad y criterio de éxito.</p>
  </section>
  <section v-click class="example-card">
    <small>02 · DISEÑO</small>
    <strong>¿Cómo se usa?</strong>
    <p>Experiencia, coherencia y accesibilidad.</p>
  </section>
  <section v-click class="example-card example-card--last">
    <small>03 · INGENIERÍA</small>
    <strong>¿Cómo lo hacemos sostenible?</strong>
    <p>Viabilidad, contratos, seguridad y mantenimiento.</p>
  </section>
</div>

<!--
20:15–21:45. Explicar el Product Trio como responsabilidades, no necesariamente tres personas. Un prototipo no valida por sí mismo la hipótesis.
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
