<template>
  <figure class="stop-signals" aria-label="Señales conceptuales para plantearse dejar de invertir: valor, aprendizaje y coste de oportunidad">
    <div class="stop-signals__grid">
      <section v-click><small>01 · VALOR</small><svg viewBox="0 0 200 65" aria-hidden="true"><path d="M4 4V60H196" class="axis"/><path d="M12 12L55 24 98 25 145 43 188 53" class="trend"/></svg><strong>No justifica el esfuerzo</strong><p>Lo que aporta no compensa sostenerlo.</p></section>
      <section v-click><small>02 · APRENDIZAJE</small><svg viewBox="0 0 200 65" aria-hidden="true"><path d="M4 4V60H196" class="axis"/><path d="M12 55Q40 15 85 15H188" class="trend trend--evidence"/></svg><strong>Ya no descubrimos nada</strong><p>Añadimos sin reducir incertidumbre.</p></section>
      <section v-click><small>03 · OPORTUNIDAD</small><svg viewBox="0 0 200 65" aria-hidden="true"><path d="M4 4V60H196" class="axis"/><path d="M12 53L55 45 98 30 145 21 188 8" class="trend"/></svg><strong>Hay mejores opciones</strong><p>Tiempo y foco valen más en otro sitio.</p></section>
    </div>
    <figcaption>Señales conceptuales, no datos medidos. Parar es una decisión basada en contexto.</figcaption>
  </figure>
</template>

<style scoped>
.stop-signals { width:100%; margin:1.1rem 0 0; }
.stop-signals__grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1.5rem; }
.stop-signals section { border-top:2px solid var(--deck-rule); padding:.7rem .2rem 0; }
.stop-signals small { color:var(--deck-accent-light); font-size:.8rem; font-weight:800; letter-spacing:.08em; }
.stop-signals svg { display:block; width:100%; height:4.5rem; margin:.65rem 0; }
.stop-signals svg path { fill:none; stroke-linecap:round; stroke-linejoin:round; }
.stop-signals .axis { stroke:var(--deck-rule); stroke-width:1; }
.stop-signals .trend { stroke:var(--deck-accent); stroke-width:3; }
.stop-signals .trend--evidence { stroke:var(--deck-evidence); }
.stop-signals strong { display:block; font:700 1.3rem/1.2 var(--deck-font-display); }
.stop-signals p { margin:.35rem 0 0; font-size:1rem; line-height:1.3; }
.stop-signals figcaption { margin:1rem 0 0; color:var(--deck-muted); font-size:.95rem; }
</style>
