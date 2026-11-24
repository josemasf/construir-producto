<template>
  <figure class="concept-model" aria-label="Definición práctica de la charla: web contiene servicio y servicio contiene producto">
    <div class="concept-model__web">
      <div class="concept-model__label"><small>01 / WEB</small><strong>Existe y funciona</strong></div>
      <div class="concept-model__service">
        <div class="concept-model__label"><small>02 / SERVICIO</small><strong>Resuelve un problema real</strong></div>
        <div class="concept-model__product"><small>03 / PRODUCTO</small><strong>Alguien pagaría por resolverlo</strong></div>
      </div>
    </div>
    <figcaption>Definición práctica para esta charla: <strong>web ⊃ servicio ⊃ producto</strong>.</figcaption>
  </figure>
</template>

<style scoped>
.concept-model { width:100%; margin:1.2rem 0 0; }
.concept-model__web,.concept-model__service { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,2fr); align-items:stretch; gap:1rem; padding:1.2rem; border:1px solid var(--deck-rule); }
.concept-model__web { min-height:15rem; background:var(--deck-surface); }
.concept-model__service { grid-template-columns:minmax(0,1fr) minmax(0,1.1fr); border:2px solid var(--deck-evidence); background:#132436; }
.concept-model__label,.concept-model__product { display:flex; flex-direction:column; justify-content:center; gap:.55rem; min-width:0; }
.concept-model__product { padding:1rem; border:2px solid var(--deck-accent); background:#30231f; }
.concept-model small { color:var(--deck-soft); font-size:.84rem; font-weight:800; letter-spacing:.08em; }
.concept-model__service > .concept-model__label small { color:var(--deck-evidence); }
.concept-model__product small { color:var(--deck-accent-light); }
.concept-model strong { font-family:var(--deck-font-display); font-size:1.35rem; line-height:1.2; overflow-wrap:normal; }
.concept-model figcaption { margin-top:1rem; color:var(--deck-muted); font-size:1rem; }
.concept-model figcaption strong { font-family:var(--deck-font-body); font-size:inherit; }
</style>
