<template>
  <figure class="case-flow" aria-label="Caso Qué Veo Ahora: de la necesidad de elegir algo que ver a la incertidumbre sobre qué ayuda realmente a decidir">
    <div class="case-flow__route">
      <section>
        <small>NECESIDAD</small>
        <strong>«Quiero ver algo»</strong>
        <p>Una decisión cotidiana, no una petición de más filtros.</p>
      </section>
      <span aria-hidden="true">→</span>
      <section class="case-flow__product">
        <small>QUÉ VEO AHORA</small>
        <strong>Recomendaciones</strong>
        <p>Ánimo · duración · géneros · plataformas</p>
      </section>
      <span aria-hidden="true">→</span>
      <section>
        <small>RESULTADO BUSCADO</small>
        <strong>Una elección</strong>
        <p>Menos fricción para encontrar algo adecuado.</p>
      </section>
    </div>
    <div class="case-flow__question">
      <small>LA INCERTIDUMBRE</small>
      <strong>¿Qué ayuda de verdad a decidir?</strong>
      <div><span>más opciones</span><span>mejores propuestas</span><span>menos pasos</span></div>
    </div>
  </figure>
</template>

<style scoped>
.case-flow { width:min(60rem,100%); margin:1.2rem 0 0; }
.case-flow__route {
  display:grid;
  grid-template-columns:minmax(0,1fr) 2.2rem minmax(0,1fr) 2.2rem minmax(0,1fr);
  align-items:center;
  gap:.7rem;
}
.case-flow__route section { min-height:10rem; padding:1rem .6rem .7rem 0; border-top:2px solid var(--deck-rule); }
.case-flow__route section:first-child { border-top-color:var(--deck-soft); }
.case-flow__route .case-flow__product { border-top-color:var(--deck-accent); }
.case-flow__route > span { color:var(--deck-accent-light); font-size:1.8rem; text-align:center; }
.case-flow small { display:block; margin-bottom:.7rem; color:var(--deck-soft); font-size:.74rem; font-weight:800; letter-spacing:.1em; }
.case-flow__product small { color:var(--deck-accent-light); }
.case-flow strong { display:block; font-family:var(--deck-font-display); font-size:1.35rem; line-height:1.18; letter-spacing:-.04em; }
.case-flow p { margin:.55rem 0 0; font-size:.97rem; line-height:1.35; }
.case-flow__question { display:grid; grid-template-columns:10rem 1.25fr 1fr; align-items:center; gap:1.2rem; margin-top:1.1rem; padding:1rem 0; border-top:1px solid var(--deck-rule); }
.case-flow__question small { margin:0; color:var(--deck-accent-light); }
.case-flow__question strong { font-size:1.45rem; }
.case-flow__question div { display:flex; flex-wrap:wrap; gap:.45rem .8rem; }
.case-flow__question span { color:var(--deck-muted); font-size:.9rem; }
@media (max-width:700px) {
  .case-flow__route { grid-template-columns:1fr; }
  .case-flow__route > span { transform:rotate(90deg); }
  .case-flow__route section { min-height:0; }
  .case-flow__question { grid-template-columns:1fr; }
}
</style>
