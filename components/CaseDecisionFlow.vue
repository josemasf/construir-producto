<template>
  <figure class="case-flow" aria-label="Qué Veo Ahora: necesidad, recomendaciones y elección">
    <div class="case-flow__need"><small>LA NECESIDAD</small><strong>«Quiero ver algo»</strong><p>No es una petición de más filtros.</p></div>
    <div class="case-flow__journey">
      <div><small>QUÉ VEO AHORA</small><strong>Recomendaciones</strong><p>Ánimo · duración · géneros · plataformas</p><a href="https://queveoahora.com" target="_blank" rel="noopener">queveoahora.com ↗</a></div>
      <span aria-hidden="true">→</span>
      <div><small>RESULTADO BUSCADO</small><strong>Una elección</strong><p>Encontrar algo adecuado con menos fricción.</p></div>
    </div>
    <figcaption>¿Qué ayuda de verdad a decidir: más opciones, mejores propuestas o menos pasos?</figcaption>
  </figure>
</template>

<style scoped>
.case-flow { width:100%; margin:1rem 0 0; }
.case-flow__need { display:grid; grid-template-columns:auto 1fr; gap:.35rem 1.2rem; align-items:center; border-left:3px solid var(--deck-accent); padding:.5rem 0 .5rem 1rem; }
.case-flow__need small { grid-column:1/-1; }
.case-flow__need strong { font-size:1.8rem; }
.case-flow__journey { display:grid; grid-template-columns:1.15fr auto 1fr; align-items:center; gap:1.4rem; margin:1.1rem 0; }
.case-flow__journey > div { border-top:2px solid var(--deck-rule); padding:.75rem 0; }
.case-flow__journey > div:first-child { border-color:var(--deck-accent); }
.case-flow__journey > span { color:var(--deck-accent-light); font-size:1.8rem; }
.case-flow small { display:block; color:var(--deck-soft); font-size:.78rem; letter-spacing:.08em; font-weight:800; }
.case-flow strong { display:block; font:700 1.4rem/1.2 var(--deck-font-display); }
.case-flow p { margin:.35rem 0; font-size:1rem; line-height:1.3; }
.case-flow a { color:var(--deck-evidence); font-size:.86rem; }
.case-flow figcaption { border-top:1px solid var(--deck-rule); padding-top:.75rem; color:var(--deck-ink); font-size:1.15rem; font-weight:700; }
</style>
