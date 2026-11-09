---
theme: default
layout: cover
background: /images/cover-producto.png
title: "De escribir código a construir producto"
info: |
  Guion detallado para ponencia técnica en Slidev.
class: text-left portada
transition: slide-left
mdc: true
colorSchema: dark
duration: 45min
---

# De escribir código

# a construir

# <span class="product-word">PRODUCTO</span>

## Por qué desarrollar más no siempre es avanzar

José María Santos  
Tech Lead

<!--
Notas del ponente:
Abrir con calma, sin vender humo. La idea principal es sencilla: muchas veces confundimos construir software con avanzar. Esta charla va de cambiar esa mirada.

Mensaje clave:
No vengo a decir que el código no importe. Vengo a decir que el código importa más cuando sabemos para qué lo estamos escribiendo.
-->

---
layout: statement
class: statement-thesis
---

# Un producto técnicamente impecable

# que nadie necesita sigue siendo

# algo que nadie necesita.

<!--
Notas del ponente:
Dejar unos segundos de silencio tras la frase. Es la tesis emocional de la charla.

Puedes decir:
Esta frase duele un poco, sobre todo a quienes disfrutamos construyendo. Pero es bastante sana. Porque nos recuerda que la calidad técnica no compensa la falta de valor.
-->

---
layout: default
class: compare-slide
---

# El problema no es desarrollar.

## El problema es confundir desarrollo con avance.

- Más funcionalidades ≠ más valor.
- Más arquitectura ≠ más futuro.
- Más automatización ≠ más foco.
- Más IA ≠ mejor criterio.

<img class="compare-side-asset" src="/images/desarrollo-avance-side-right.png" alt="Un desarrollador contempla una torre de funcionalidades mientras busca dirección" />

<!--
Notas del ponente:
Aquí no ataques el desarrollo. Tú eres técnico y esta charla debe sonar desde dentro, no como discurso de producto contra ingeniería.

Idea:
Construir es necesario. Pero construir sin aprender puede convertirse en una forma muy cara de evitar tomar decisiones.
-->

---
layout: cover
background: /images/progreso-visible.png
class: progreso-visible
---

# La trampa del progreso visible

## Desarrollar se ve.

Medir, escuchar, borrar, decidir y renunciar se ve mucho menos.

Por eso muchas veces premiamos lo que parece avance, aunque no reduzca ninguna incertidumbre importante.

<!--
Notas del ponente:
Puedes usar ejemplos:
- Hemos montado autenticación.
- Hemos añadido filtros.
- Hemos creado un dashboard.
- Hemos metido una cola, caché, analítica, tests E2E, IA, notificaciones.

Y luego lanzar la pregunta:
¿Y estamos más cerca de resolver un problema real o solo tenemos una aplicación más sofisticada?
-->

---
layout: section
---

# 1 · Del código al problema

## Antes de preguntarnos si podemos construirlo, necesitamos saber para quién y para qué.

---
layout: default
class: concept-slide
---

# Web, servicio y producto

## No son peldaños de una escalera.

<div class="concept-grid">
  <section class="concept-panel"><small>CANAL</small><strong>Web</strong><p>Una interfaz o punto de acceso. Puede ser parte de un producto.</p></section>
  <section class="concept-panel"><small>EXPERIENCIA</small><strong>Servicio</strong><p>Resuelve una necesidad. Puede ser, a la vez, un producto.</p></section>
  <section class="concept-panel"><small>PROPUESTA DE VALOR</small><strong>Producto</strong><p>Una apuesta por aportar valor a unas personas de forma viable.</p></section>
</div>

<p class="concept-note">Un producto también puede ser interno, gratuito, un servicio o una web. Importa qué valor crea y cómo se sostiene.</p>

<!--
Notas del ponente:
No plantear web, servicio y producto como etapas universales ni categorías excluyentes. Un producto interno no necesita venderse a sus usuarios. El valor se concreta en resultados y en viabilidad, no en tener una pantalla de login.
-->

---
layout: default
class: evidence-criteria-slide
---

# La pregunta no es cómo llamarlo

## Es qué evidencia tenemos para seguir invirtiendo.

<div class="evidence-criteria">
  <div><span>01</span><strong>Problema</strong><p>¿A quién le duele y en qué contexto?</p></div>
  <div><span>02</span><strong>Uso</strong><p>¿Qué consigue hacer realmente?</p></div>
  <div><span>03</span><strong>Valor</strong><p>¿Qué mejora respecto a su alternativa?</p></div>
  <div><span>04</span><strong>Viabilidad</strong><p>¿Compensa sostenerlo y evolucionarlo?</p></div>
</div>

<!--
Notas del ponente:
Ninguna métrica aislada demuestra que tenemos un producto. No exigir recurrencia a una solución para un problema puntual. En proyectos internos, el valor puede ser menos tiempo perdido, menos errores o mejor servicio.
-->

---
layout: default
class: case-slide
---

# Caso conductor · Qué Veo Ahora

## El usuario no busca filtros: quiere encontrar algo que ver.

<div class="case-panels">
  <section><small>LO QUE EXISTE</small><strong>Recomendaciones</strong><p>Estado de ánimo, duración, géneros y plataformas.</p></section>
  <section><small>LA HIPÓTESIS DE VALOR</small><strong>Decidir con menos fricción</strong><p>Encontrar algo adecuado sin dar vueltas por varios catálogos.</p></section>
  <section><small>LA INCERTIDUMBRE</small><strong>¿Qué ayuda a decidir?</strong><p>¿Más opciones, una propuesta mejor o un recorrido más corto?</p></section>
</div>

<p class="hypothesis-note">Producto real; hipótesis y decisiones del ejemplo planteadas con fines didácticos, sin atribuirle métricas.</p>

<!--
Notas del ponente:
Qué Veo Ahora es un proyecto real con recomendaciones por estado de ánimo y preferencias, filtros y datos de plataformas. Fuente: README de josemasf/que-veo-hoy.
Las hipótesis siguientes NO son resultados demostrados del proyecto. Evitar cualquier afirmación sobre uso o conversión sin datos.
Volveremos a este caso después para tomar decisiones distintas.
-->

---
layout: section
---

# 2 · El espejismo de seguir construyendo

## Cuando no sabemos qué hacer, solemos hacer más de lo que ya dominamos.

---
layout: default
class: sequence-slide
---

# Cuando algo no despega,

# hacemos lo que sabemos hacer

<div class="build-sequence">
  <span v-click>OTRA FEATURE</span>
  <span v-click>OTRO REFACTOR</span>
  <span v-click>OTRO DASHBOARD</span>
  <strong v-click>¿Pero qué hemos aprendido?</strong>
</div>

<!--
Notas del ponente:
Aquí puedes meter humor seco:
Cuando eres técnico, cualquier problema empieza pareciendo una issue de Jira. Incluso cuando el problema no es técnico.

La idea es que construir más nos da sensación de control, porque es el terreno que conocemos.
-->

---
layout: two-cols-header
---

# Hay preguntas que no se contestan programando

::left::

- ¿Quién tiene realmente este problema?
- ¿Con qué frecuencia lo sufre?
- ¿Qué hace ahora para resolverlo?
- ¿Qué le costaría cambiar?
- ¿Qué tendría que ocurrir para que pagara?
- ¿Qué parte del sistema genera valor y cuál solo decora?

::right::

<img class="side-asset" style="width: 24rem; height: 48vh; object-fit: contain" src="/images/preguntas-usuarios-side-right.png" alt="Dos personas conversan junto a un mapa de preguntas y una lupa" />

<!--
Notas del ponente:
Insistir en que estas preguntas son incómodas pero necesarias.

No hace falta convertirnos en Product Managers, pero sí necesitamos criterio de producto para no usar la ingeniería como anestesia.
-->

---
layout: cover
background: /images/feature-peligrosa.png
---

# La feature más peligrosa

La que construimos para evitar una conversación incómoda.

<!--
Notas del ponente:
De nuevo, pausa.

Ejemplos:
- Añadimos más opciones porque no sabemos para quién estamos diseñando.
- Creamos configuración avanzada porque no queremos elegir un flujo principal.
- Automatizamos algo que todavía no sabemos si merece ser automatizado.
- Metemos IA antes de entender el proceso manual.

Remate:
A veces una feature no es una solución. Es una forma elegante de aplazar una decisión.
-->

---
layout: section
---

# 3 · Cuando aparecen usuarios, cambia el juego

## El juguete técnico empieza a tener consecuencias.

---
layout: default
class: responsibility-slide
---

# Tener usuarios cambia el juego

## La experiencia deja de depender solo de tu código.

- Ya no solo construyes.
- Ahora mantienes.
- Das soporte.
- Corriges expectativas.
- Mides comportamiento real.
- Priorizas con restricciones.
- Decides qué no merece la pena tocar.

<img class="responsibility-side-asset" src="/images/usuarios-responsabilidad-side-right-v2.png" alt="Una persona mantiene un servicio mientras atiende señales y necesidades de usuarios" />

<!--
Notas del ponente:
Este bloque conecta con tu experiencia: proyectos propios que llegaron a ser pequeños servicios.

Idea:
El usuario convierte el juguete técnico en algo que tiene consecuencias. Aunque sean pocas personas, ya hay alguien esperando que funcione.
-->

---
layout: default
class: evidence-slide
---

# El usuario rompe nuestras fantasías

<EvidenceFlow belief="Pensamos que más filtros facilitarán elegir." reality="Puede explorar, abandonar o no entender una opción." learning="Antes de ampliar filtros, hay que descubrir qué dificulta decidir." />

<p class="hypothesis-note">Ejemplo hipotético: una hipótesis de comportamiento, no un resultado medido.</p>

<!--
Notas del ponente:
No inventar datos ni afirmar que este comportamiento ha ocurrido en Qué Veo Ahora. Si existen observaciones contrastadas, mostrar las evidencias. Un usuario no siempre utiliza lo que construimos como imaginábamos.
-->

---
layout: default
class: evidence-slide
---

# La analítica no sirve para decorar dashboards

<MetricsToDecision />

<!--
Notas del ponente:
Aquí puedes mencionar que medir no es poner GA4, PostHog o cualquier herramienta y ya está.

La analítica útil empieza antes:
¿Qué necesito aprender?
¿Qué evento demostraría valor?
¿Qué señal me diría que debo parar?

Remate:
Un dashboard que no cambia decisiones es un salvapantallas caro.
-->

---
layout: default
class: case-slide
---

# Caso conductor · Medir para decidir

## «¿Ayudamos a encontrar algo?» es mejor pregunta que «¿Cuántas visitas hay?»

<div class="case-metrics">
  <div><span>01</span><strong>Abre una recomendación</strong></div>
  <div><span>02</span><strong>Consulta una ficha</strong></div>
  <div><span>03</span><strong>Va al proveedor</strong></div>
  <div><span>04</span><strong>Vuelve a buscar o abandona</strong></div>
</div>

<p class="case-insight">Eventos que podríamos instrumentar, no cifras observadas. Un clic al proveedor es una señal indirecta: no demuestra que haya visto la película.</p>

<!--
Notas del ponente:
Reutilizar el caso Qué Veo Ahora: hipótesis de que reducir la fricción facilitaría pasar de una recomendación a elegir proveedor.
No afirmar que los eventos ya están implementados o medidos. Combinar la telemetría con conversaciones para interpretar el porqué.
-->

---
layout: section
---

# 4 · Aprender a no construir

## La decisión más madura reduce incertidumbre antes de añadir complejidad.

---
layout: default
class: decision-slide
---

# Antes de desarrollar

<p class="product-criterion-intro"><span>CRITERIO DE PRODUCTO</span> Elegir qué merece la pena hacer, no solo qué sabemos implementar.</p>

<DecisionTree />

<!--
Notas del ponente:
No todo problema se resuelve con código; tampoco toda decisión técnica requiere investigar usuarios.
Seguridad, accesibilidad, fiabilidad y mantenimiento pueden reducir riesgos significativos. La pregunta es qué justifica actuar y qué intervención lo resuelve con menos coste.
-->

---
layout: default
class: audience-slide
---

# Tú decides · 90 segundos

## Entran en la web, pero no sabemos si consiguen elegir. ¿Qué harías primero?

<div class="audience-choices">
  <div><span>A</span><strong>Construir un recomendador más avanzado con IA.</strong></div>
  <div><span>B</span><strong>Hablar con personas para entender cómo eligen.</strong></div>
  <div><span>C</span><strong>Instrumentar el recorrido hasta el proveedor.</strong></div>
  <div><span>D</span><strong>Simplificar directamente el flujo existente.</strong></div>
</div>

<p v-click class="audience-reveal">No hay respuesta universal: B y C pueden aportar evidencia para decidir si D tiene sentido. A sigue siendo una apuesta sin justificar.</p>

<!--
Notas del ponente:
Pedir levantar la mano y razonar la opción elegida; revelar la respuesta después.
El resultado depende de la evidencia disponible y del coste de cada intervención. Evitar ridiculizar cualquiera de las opciones.
Caso hipotético, no diagnóstico de un problema real. Reservar tres minutos incluyendo el debate.
-->

---
layout: two-cols-header
---

# Experimentos baratos,

# aprendizaje rápido

::left::

Antes de construir la versión grande, prueba la intervención que reduce mejor la incertidumbre.

- Conversación antes que soluciones para usuarios imaginados.
- Proceso manual antes de automatizar lo incierto.
- Prototipo para validar comprensión.
- Prueba controlada antes de ampliar el alcance.
- Señal accionable antes que dashboard universal.

::right::

<img class="side-asset" style="width: 24rem; height: 48vh; object-fit: contain" src="/images/experimentos-baratos-side-right.png" alt="Un experimento manual ligero frente a una plataforma compleja aún en construcción" />

<!--
Notas del ponente:
No vender esto como metodología mágica. Simplemente como higiene.

Frase posible:
No todo MVP tiene que dar vergüenza, pero sí debería impedirte gastar seis meses en validar una suposición que podías validar en una semana.

Evitar prometer tiempos concretos si lo usas como frase cerrada; mejor mantenerlo conceptual.
-->

---
layout: two-cols-header
---

# Cerrar no siempre es fracasar

::left::

A veces es reconocer que algo ya te ha dado el aprendizaje que podía darte.

Y que seguir invirtiendo no es constancia.  
Es apego con repositorio.

::right::

<img class="side-asset" style="width: 24rem; height: 48vh; object-fit: contain" src="/images/cerrar-aprendizaje-side-right.png" alt="Una persona cierra una caja de proyecto y conserva una libreta con aprendizajes" />

<!--
Notas del ponente:
Este es el cierre más personal. Puedes hablar de QueVeoAhora o de otro proyecto propio sin entrar en detalles privados si no quieres.

Idea:
Un proyecto puede pasar de web a servicio. Puede tener usuarios. Puede ser útil. Y aun así no tener suficiente recorrido como producto.
-->

---
layout: default
class: stop-signals-slide
---

# Señales de que quizá toca parar

- Cada mejora exige más energía de la que devuelve.
- La necesidad no se repite o no genera el valor esperado.
- El valor que aporta no justifica su coste de mantenimiento.
- Estás construyendo para mantener viva la idea, no para validar el producto.
- El coste de oportunidad empieza a ser evidente.

<img class="stop-signals-side-asset" src="/images/senales-parar-side-right-v2.png" alt="Una persona detiene con calma un pequeño servicio y abre espacio para otro camino" />

<!--
Notas del ponente:
No presentarlo como lista cerrada. Presentarlo como señales.

Puedes decir:
No hay una métrica universal para cerrar un proyecto. Pero sí hay momentos en los que, si eres honesto, sabes que estás empujando más por orgullo que por evidencia.
-->

---
layout: default
class: options-slide
---

# No todo acaba en «hacerlo» o «cerrarlo»

<div class="options-grid">
  <section><span>01</span><strong>Invertir</strong><p>Hay señales de valor y una mejora concreta que merece la pena.</p></section>
  <section><span>02</span><strong>Experimentar</strong><p>La incertidumbre aún pesa más que la implementación.</p></section>
  <section><span>03</span><strong>Mantener</strong><p>Ya resuelve una necesidad y no hace falta hacerlo más grande.</p></section>
  <section><span>04</span><strong>Retirar</strong><p>El valor o aprendizaje no justifican seguir asumiendo el coste.</p></section>
</div>

<!--
Notas del ponente:
Evitar el falso dilema entre escalar y fracasar. Muchos productos y servicios deben mantenerse estables.
Cerrar exige responsabilidad: comunicarlo, preservar datos, desactivar con orden y documentar aprendizajes.
-->

---
layout: section
---

# 5 · Criterio de producto en ingeniería

## No sustituye a la calidad técnica: conecta decisiones de ingeniería con resultados y riesgos.

---
layout: two-cols-header
---

# Cambia la forma de priorizar

::left::

<div class="priority-questions" aria-label="Preguntas que orientan la priorización">
  <section class="priority-question priority-question--before">
    <p>Antes</p>
    <strong>¿Qué podemos construir?</strong>
  </section>
  <section class="priority-question priority-question--after">
    <p>Después</p>
    <strong>¿Qué necesitamos aprender o mejorar ahora?</strong>
  </section>
</div>

::right::

<div class="priority-shift priority-shift--horizontal" aria-label="La prioridad cambia de construir funcionalidades a aprender o mejorar">
  <div class="priority-card priority-card-old">
    <span>ANTES</span>
    <strong>Más cosas</strong>
    <i>features · backlog · entrega</i>
  </div>
  <div class="priority-arrow priority-arrow--right" aria-hidden="true">→</div>
  <div class="priority-card priority-card-new">
    <span>DESPUÉS</span>
    <strong>Más criterio</strong>
    <i>aprendizaje · impacto · riesgo</i>
  </div>
</div>

<!--
Notas del ponente:
Este bloque sirve para aterrizar la charla en práctica profesional, no solo en side projects.

En empresa también pasa:
- Roadmaps llenos de funcionalidades.
- Migraciones sin criterios de adopción.
- Refactors sin explicación de riesgo.
- Automatizaciones sin impacto medible.

La mentalidad de producto no es solo para startups.
-->

---
layout: default
class: technical-decision-slide
---

# Cambia la conversación técnica

<div class="technical-decision">
  <div class="technical-decision__old"><small>EN LUGAR DE</small><strong>«Hay que rehacer este módulo porque está mal diseñado».</strong></div>
  <div class="technical-decision__new"><small>PROBAMOS A DECIR</small><strong>«Esta complejidad provoca fallos y retrasos; propongo simplificar esta parte y comprobar el efecto».</strong></div>
</div>

<p class="technical-decision__bottom">El criterio no elimina los refactors: obliga a explicar qué riesgo reducen y cómo comprobaremos su efecto.</p>

<!--
Notas del ponente:
Conectar con liderazgo técnico y refactors. No reducir todas las decisiones al retorno financiero. Preguntar: ¿cuándo fue la última vez que defendimos un cambio explicando el riesgo que evitaba?
-->

---
layout: two-cols-header
---

# Cambia tu relación con la IA

::left::

La IA puede ayudarnos a investigar, contrastar hipótesis, explorar alternativas y desarrollar.

Pero también puede implementar muy rápido una respuesta a la pregunta equivocada.

::right::

<img class="side-asset" style="width: 24rem; height: 48vh; object-fit: contain" src="/images/ia-criterio-side-right.png" alt="Una persona dirige un vehículo mientras un asistente de IA lo acelera" />

<!--
Notas del ponente:
Meter aquí tu visión de IA con criterio.

Puedes decir:
Usar IA para construir más rápido está bien. Pero antes hay que decidir qué merece la pena construir. Si no, solo estamos poniendo turbo a una dirección equivocada.

Conectar con Research, Plan, Implement:
- Research para entender.
- Plan para decidir.
- Implement para construir.

La IA ayuda en las tres fases, pero no sustituye el criterio.
-->

---
layout: default
class: loop-slide
---

# Todo desemboca aquí

<ProductLoop />

<!--
Notas del ponente:
Esta slide reúne las decisiones de la charla. El ciclo no es una cascada obligatoria y el criterio no es una fase aislada.

Research:
- Usuarios.
- Contexto.
- Alternativas.
- Problema real.

Plan:
- Alcance.
- Riesgos.
- Métricas.
- Decisiones explícitas.

Implement:
- Código.
- Tests.
- Observabilidad.
- Entrega.

Measure:
- Uso real.
- Feedback.
- Decisiones nuevas.
-->

---
layout: default
class: takeaway-slide
---

# Antes de abrir una issue

## Cuatro preguntas que merece la pena contestar

<div class="takeaway-questions">
  <div><span>01</span><strong>¿Qué problema real estamos resolviendo?</strong></div>
  <div><span>02</span><strong>¿Qué evidencia tenemos?</strong></div>
  <div><span>03</span><strong>¿Cuál es la intervención mínima que crea valor o reduce riesgo?</strong></div>
  <div><span>04</span><strong>¿Qué señal nos dirá si funcionó?</strong></div>
</div>

<!--
Notas del ponente:
Esta es la diapositiva para fotografiar y usar al día siguiente. No convertirla en burocracia: una corrección pequeña no requiere un documento. Sirve para pensar mejor tickets, refactors, funcionalidades y encargos a agentes de IA.
-->

---
layout: statement
class: closing-question
---

<div class="closing-question__content">
  <p class="closing-question__eyebrow">La pregunta no es</p>
  <p class="closing-question__discarded">«¿qué más podemos desarrollar?»</p>

  <div class="closing-question__rule" aria-hidden="true"></div>

  <p class="closing-question__eyebrow">La pregunta es</p>
  <h1 class="closing-question__answer">«¿qué decisión<br>estamos evitando?»</h1>
</div>


<!--
Notas del ponente:
Esta es una de las frases finales fuertes.

No correr. Que quede clara.
-->

---
layout: end
---

# Gracias

## ¿Qué estás construyendo ahora mismo?

Y, sobre todo:

## ¿qué necesitas aprender antes de seguir construyendo?

José María Santos  
josemariasantos.com

<!--
Notas del ponente:
Cerrar con pregunta, no con moraleja excesiva.

Posible frase final:
Construir software es una habilidad poderosa. Precisamente por eso conviene usarla con criterio.
-->
