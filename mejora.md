# Prompt para implementar la mejora de la slide “Todo desemboca aquí”

Actúa como un **especialista senior en diseño de presentaciones, diseño de información y SVG para web/Slidev**.

Quiero que **rediseñes e implementes visualmente** la slide titulada:

**“Todo desemboca aquí”**

La slide representa un ciclo compuesto por cuatro fases:

* Research
* Plan
* Implement
* Measure

y una idea central:

**CRITERIO DE PRODUCTO**

## Objetivo de la slide

La slide debe transmitir con claridad que:

* el trabajo no es lineal;
* Research, Plan, Implement y Measure forman un ciclo continuo;
* todo ese ciclo está guiado y conectado por el **criterio de producto**;
* “criterio de producto” no es una fase más, sino el núcleo que da sentido a todas las decisiones.

La idea debe entenderse de forma casi inmediata, en menos de 3 segundos.

---

## Problemas del diseño actual que debes corregir

Corrige específicamente estos problemas:

* El gráfico parece un óvalo decorativo con textos alrededor, no un ciclo de trabajo claro.
* La dirección del flujo no se entiende con suficiente fuerza.
* La pequeña flecha inferior resulta débil y parece un icono suelto.
* “Criterio de producto” no tiene suficiente protagonismo visual.
* Los labels de las fases parecen colocados alrededor del gráfico, pero no integrados en él.
* El diagrama central tiene menos peso del que debería.
* El título de la slide compite demasiado con el contenido principal.
* Hay demasiado espacio vacío entre el título y el gráfico.
* La navegación inferior tiene bastante presencia y compite visualmente con el diagrama.

---

## Nueva propuesta visual

Mantén el estilo general de la presentación:

* fondo azul noche muy oscuro;
* estética editorial y tecnológica;
* tipografía con personalidad;
* contraste alto;
* línea gráfica sobria;
* acentos de color puntuales;
* sin aspecto de dashboard;
* sin estética SaaS genérica.

### Composición general

* Mantén el título a la izquierda:
  **“Todo desemboca aquí”**
* Reduce ligeramente su peso visual para que no eclipse el diagrama.
* Amplía el diagrama principal y colócalo más arriba para ocupar mejor el centro de la slide.
* El diagrama debe ser claramente el protagonista visual.

---

## Rediseño del diagrama

Convierte el óvalo actual en un **ciclo visual mucho más claro y direccional**.

### Forma del ciclo

* Mantén una geometría ovalada o elíptica, no completamente circular.
* El ciclo debe sentirse adaptado al formato panorámico de una slide 16:9.
* Usa una línea o conjunto de trazos que hagan evidente el recorrido.
* La dirección debe leerse claramente como:

**Research → Plan → Implement → Measure → Research**

### Recorrido visual

* El flujo debe ser explícito.
* No dependas de una única flecha pequeña aislada.
* Integra la sensación de recorrido en el propio trazado.
* Puedes usar:

  * segmentos conectados,
  * pequeñas puntas de flecha discretas,
  * cambios sutiles de intensidad,
  * o un tratamiento del trazo que sugiera movimiento continuo.

La clave es que se entienda visualmente que hay un **bucle de trabajo continuo**.

---

## Fases del ciclo

Mantén exactamente estos textos:

* 01 Research
* 02 Plan
* 03 Implement
* 04 Measure

### Requisitos

* Cada fase debe estar asociada visualmente a un tramo del ciclo.
* No deben parecer etiquetas flotando sin relación con la geometría.
* Los números pequeños deben mantenerse como detalle editorial.
* Los nombres deben tener mejor alineación, jerarquía y equilibrio espacial.
* Deben leerse con claridad a distancia.

### Distribución recomendada

* **01 Research** en la parte superior izquierda del ciclo
* **02 Plan** en la parte superior derecha
* **03 Implement** en la parte inferior derecha
* **04 Measure** en la parte inferior izquierda

Pero haz que cada una quede claramente integrada con su tramo correspondiente del recorrido.

---

## Centro del diagrama

Haz que **CRITERIO DE PRODUCTO** se convierta en el verdadero núcleo visual del gráfico.

### Requisitos del centro

* Debe ocupar el centro exacto del ciclo.
* Debe sentirse como el punto de gravedad conceptual.
* No lo conviertas en una card tipo UI.
* Tampoco debe parecer texto suelto.

### Tratamiento visual sugerido

Puedes usar un recurso muy sobrio, por ejemplo:

* un halo suave;
* una elipse interior de baja opacidad;
* una ligera mancha de luz;
* un contenedor casi invisible;
* o una combinación de tipografía y aire negativo muy bien resuelta.

El resultado debe comunicar:

> “Todo el ciclo está gobernado por el criterio de producto.”

---

## Jerarquía visual

La lectura ideal debe ser esta:

1. Todo desemboca aquí
2. El ciclo general
3. Research / Plan / Implement / Measure
4. CRITERIO DE PRODUCTO
5. La idea de que todo está conectado y vuelve a empezar

Si consideras que el centro debe subir al punto 3 para ganar claridad conceptual, puedes hacerlo, pero sin romper el equilibrio de la slide.

---

## Estilo SVG

Implementa el gráfico como un **SVG limpio, bien estructurado y mantenible**.

### Requisitos técnicos

Usa una estructura clara y fácil de animar después en Slidev.

Prioriza:

* `<svg>`
* `viewBox`
* `<path>`
* `<g>`
* `<text>`
* `<defs>` solo si son realmente necesarios

Evita:

* filtros complejos;
* sombras pesadas;
* exceso de nodos;
* degradados agresivos;
* efectos decorativos innecesarios;
* formas difíciles de mantener.

### Estructura deseada

Organiza el SVG por grupos semánticos, por ejemplo:

* grupo del recorrido completo;
* grupo research;
* grupo plan;
* grupo implement;
* grupo measure;
* grupo del núcleo central.

Debe quedar preparado para poder aplicar luego animaciones o `v-click` de Slidev con facilidad.

Por ejemplo, la estructura debe permitir revelar de forma independiente:

* el contorno o recorrido;
* cada fase;
* el centro “criterio de producto”.

---

## Animación pensada para Slidev

No hace falta que implementes una animación compleja, pero sí que dejes el markup preparado para ello.

La secuencia ideal sería:

1. Aparece el título.
2. Aparece el trazado del ciclo.
3. Aparece Research.
4. Aparece Plan.
5. Aparece Implement.
6. Aparece Measure.
7. Aparece o se enfatiza “CRITERIO DE PRODUCTO”.
8. Se refuerza visualmente que el ciclo se cierra.

El diseño debe quedar preparado para eso, aunque no se implementen todas las transiciones en este momento.

---

## Legibilidad y proyección

La slide debe funcionar bien proyectada en una sala.

Por tanto:

* aumenta la claridad del trazado;
* evita líneas demasiado finas;
* evita textos pequeños;
* usa suficiente separación entre elementos;
* asegúrate de que los labels se distinguen bien;
* revisa contraste y equilibrio general.

No sacrifiques claridad por estética.

---

## Restricciones

* No cambies el texto del título.
* No cambies los nombres de las fases.
* No añadas nuevas fases.
* No conviertas la slide en una infografía recargada.
* No añadas iconos innecesarios.
* No hagas que el gráfico parezca una UI de producto.
* No uses cajas tipo botón para cada fase.
* No elimines la navegación inferior de la presentación.
* No rompas la coherencia estética del resto de la charla.

---

## Resultado esperado

Implementa directamente la mejora visual de esta slide.

Antes de dar el trabajo por terminado:

* comprueba que el ciclo se entiende claramente;
* verifica que la dirección del flujo sea evidente;
* revisa que “CRITERIO DE PRODUCTO” tenga el protagonismo adecuado;
* valida que el título y el diagrama estén equilibrados;
* comprueba que el SVG sea limpio y mantenible;
* asegúrate de que todo funciona bien dentro de una presentación Slidev.

El resultado final debe sentirse como una **slide de conferencia tecnológica bien diseñada**, sobria, elegante y con un diagrama mucho más claro, más intencional y más potente que el actual.
