<template>
  <figure class="concept-layers" aria-label="Web, servicio y producto son capas diferentes, no peldaños de una escalera">
    <div class="concept-layers__stack">
      <section>
        <small>CANAL</small>
        <strong>Web</strong>
        <p>Dónde ocurre la interacción.</p>
      </section>
      <section>
        <small>EXPERIENCIA</small>
        <strong>Servicio</strong>
        <p>Qué necesidad resolvemos de principio a fin.</p>
      </section>
      <section class="concept-layers__product">
        <small>PROPUESTA DE VALOR</small>
        <strong>Producto</strong>
        <p>Por qué merece existir y sostenerse.</p>
      </section>
    </div>
    <figcaption>La etiqueta importa menos que la evidencia: problema · uso · valor · viabilidad.</figcaption>
  </figure>
</template>

<style scoped>
.concept-layers { width: min(58rem,100%); margin: 1.45rem 0 0; }
.concept-layers__stack { display:grid; gap:0; border-top:1px solid var(--deck-rule); }
.concept-layers section {
  display:grid;
  grid-template-columns: 10rem 10rem 1fr;
  align-items:center;
  min-height:6.1rem;
  padding:.7rem 1rem;
  border-bottom:1px solid var(--deck-rule);
}
.concept-layers small { color:var(--deck-soft); font-size:.75rem; font-weight:800; letter-spacing:.11em; }
.concept-layers strong { font-family:var(--deck-font-display); font-size:1.65rem; letter-spacing:-.04em; }
.concept-layers p { margin:0; font-size:1.04rem; line-height:1.35; }
.concept-layers__product { border-left:4px solid var(--deck-accent); }
.concept-layers__product small { color:var(--deck-accent-light); }
.concept-layers figcaption { margin-top:1rem; color:var(--deck-muted); font-size:1rem; }
@media (max-width:700px) {
  .concept-layers section { grid-template-columns:1fr; gap:.2rem; min-height:0; }
}
</style>
