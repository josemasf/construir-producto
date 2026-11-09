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

# Un producto técnicamente impecable que nadie necesita sigue siendo algo que nadie necesita.

<!--
Notas del ponente:
Dejar unos segundos de silencio tras la frase. Es la tesis emocional de la charla.

Puedes decir:
Esta frase duele un poco, sobre todo a quienes disfrutamos construyendo. Pero es bastante sana. Porque nos recuerda que la calidad técnica no compensa la falta de valor.
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
  <section class="concept-panel"><small>CANAL</small><strong>Web</strong><p>Una interfaz o punto de acceso. Puede formar parte de un producto.</p></section>
  <section class="concept-panel"><small>EXPERIENCIA</small><strong>Servicio</strong><p>Resuelve una necesidad. También puede ser un producto.</p></section>
  <section class="concept-panel"><small>PROPUESTA DE VALOR</small><strong>Producto</strong><p>Resuelve un problema de forma valiosa y viable.</p></section>
</div>

<p class="concept-note">No importa la etiqueta: ¿tenemos evidencias del <strong>problema, uso, valor y viabilidad</strong>?</p>

<!--
Notas del ponente:
La web, el servicio y el producto no son niveles universales de madurez ni categorías excluyentes.
Una web puede ser un producto y un producto puede ser interno o gratuito.
No exigir recurrencia a cualquier problema: algunos productos resuelven necesidades puntuales.
La pregunta importante no es cómo llamamos lo que hacemos, sino qué evidencias tenemos para justificar su valor y la inversión: ¿quién tiene el problema?, ¿lo resuelve?, ¿qué alternativa supera? y ¿cuánto cuesta sostenerlo?
-->

---
layout: default
class: case-slide
---

# Caso conductor · Qué Veo Ahora

## El usuario no busca filtros: quiere encontrar algo que ver.

<div class="case-story">
  <div class="case-story__question" aria-hidden="true">
    <span>LA PREGUNTA</span>
    <strong>¿Qué ayuda de verdad a decidir?</strong>
  </div>
  <div class="case-story__details">
    <div><small>01 / LO QUE EXISTE</small><strong>Recomendaciones</strong><p>Estado de ánimo, duración, géneros y plataformas.</p></div>
    <div><small>02 / HIPÓTESIS DE VALOR</small><strong>Menos fricción</strong><p>Encontrar algo adecuado sin recorrer varios catálogos.</p></div>
    <div><small>03 / INCERTIDUMBRE</small><strong>Qué facilita elegir</strong><p>¿Más opciones, mejores propuestas o un recorrido más corto?</p></div>
  </div>
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

<img class="side-asset" src="/images/preguntas-usuarios-side-right.png" alt="Dos personas conversan junto a un mapa de preguntas y una lupa" />

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
layout: default
class: responsibility-slide
---

# 3 · Con usuarios cambia la responsabilidad

## Ya no solo construimos: alguien depende de que funcione.

- Mantenemos y damos soporte.
- Respondemos a expectativas y errores reales.
- Observamos el uso, no solo las entregas.
- Priorizamos también fiabilidad y continuidad.

<img class="responsibility-side-asset" src="/images/usuarios-responsabilidad-side-right-v2.png" alt="Una persona mantiene un servicio mientras atiende necesidades reales de usuarios" />

<!--
Notas del ponente:
Esta diapositiva sustituye la separadora del bloque y la lista de responsabilidades.
Tener usuarios no convierte por sí solo algo en un producto viable, pero sí introduce obligaciones. Una decisión de arquitectura o un refactor puede afectar a gente real.
Pasa del ejemplo de funcionalidades al coste de mantener un servicio. Recuperar Qué Veo Ahora para preguntar qué cambia cuando alguien espera poder elegir qué ver.
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

# Medir para decidir · Qué Veo Ahora

<MetricsToDecision />

<p class="metrics-case-note"><strong>Ejemplo hipotético:</strong> recomendación → ficha → enlace al proveedor. Ese recorrido puede orientar decisiones, pero un clic no demuestra satisfacción.</p>

<!--
Notas del ponente:
Fusionamos la explicación de analítica y los eventos propuestos para Qué Veo Ahora.
Antes de instrumentar, formular la pregunta: ¿ayudamos al usuario a encontrar algo?
Señales que podríamos instrumentar, sin asegurar que ya existan: abre recomendación, consulta ficha, pulsa enlace del proveedor, vuelve a buscar o abandona.
Luego interpretar con cautela y complementar con conversaciones: pulsar un enlace no significa ver la película ni estar satisfecho.
Elegir una intervención con la evidencia obtenida. Un dashboard que nunca cambia decisiones no sirve como producto de análisis.
NO presentar métricas, conversiones o comportamientos hipotéticos como resultados reales.
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

<img class="side-asset" src="/images/experimentos-baratos-side-right.png" alt="Un experimento manual ligero frente a una plataforma compleja aún en construcción" />

<!--
Notas del ponente:
No vender esto como metodología mágica. Simplemente como higiene.

Frase posible:
No todo MVP tiene que dar vergüenza, pero sí debería impedirte gastar seis meses en validar una suposición que podías validar en una semana.

Evitar prometer tiempos concretos si lo usas como frase cerrada; mejor mantenerlo conceptual.
-->

---
layout: default
class: stop-signals-slide
---

# Cerrar no siempre es fracasar

## A veces, la mejor decisión es dejar de invertir.

- El valor para quien lo usa no justifica el coste de mantenerlo.
- Seguimos añadiendo funciones, pero no aprendemos nada nuevo.
- El coste de oportunidad supera lo que esperamos conseguir.

<img class="stop-signals-side-asset" src="/images/senales-parar-side-right-v2.png" alt="Una persona detiene con calma un pequeño servicio y abre espacio para otra decisión" />

<!--
Notas del ponente:
Fusiona «Cerrar no siempre es fracasar» con las señales para parar.
El humor se conserva para decir en voz alta: seguir invirtiendo no siempre es constancia, a veces es apego con repositorio.
No existe una métrica universal que obligue a cerrar. Importan el valor, las personas afectadas, el mantenimiento y el coste de oportunidad.
Cerrar responsablemente implica avisar, preservar datos si corresponde, retirar el servicio ordenadamente y documentar aprendizajes.
Conectar con la siguiente diapositiva: no todo exige cerrar; mantener pequeño o experimentar también son decisiones maduras.
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
Notas del ponente:
Fusiona la priorización y la conversación técnica.
Antes: más features, backlog o una preferencia arquitectónica. Después: aprendizaje, impacto, riesgo o capacidad de entrega.
No hay que justificar toda mejora con ingresos. Fiabilidad, accesibilidad, seguridad y mantenibilidad pueden ser razones suficientes.
Una decisión técnica gana fuerza si podemos explicar qué riesgo reduce, cómo sabremos que mejora y qué coste asumimos.
-->

---
layout: two-cols-header
---

# Cambia tu relación con la IA

::left::

La IA puede ayudarnos a investigar, contrastar hipótesis, explorar alternativas y desarrollar.

Pero también puede implementar muy rápido una respuesta a la pregunta equivocada.

::right::

<img class="side-asset" src="/images/ia-criterio-side-right.png" alt="Una persona dirige un vehículo mientras un asistente de IA lo acelera" />

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
layout: end
---

# Gracias

## ¿Qué decisión estamos evitando?

¿Y qué necesitaríamos aprender antes de volver a construir?

José María Santos  
josemariasantos.com

<!--
Notas del ponente:
La diapositiva anterior presenta cuatro preguntas aplicables al día siguiente.
Cerrar con una pregunta, no recitar de nuevo los aprendizajes.
Mensaje final: el código importa más cuando sabemos para qué lo estamos escribiendo.
Dejar silencio para la reflexión y abrir preguntas del público si hay tiempo.
-->
