<template>
  <figure class="ai-impact" aria-label="La inteligencia artificial aumenta la velocidad de ejecución, mientras que el criterio determina la dirección">
    <div class="ai-impact__message">
      <div>
        <small>VELOCIDAD</small>
        <strong>La IA acelera.</strong>
      </div>
      <div class="ai-impact__direction">
        <small>DIRECCIÓN</small>
        <strong>El criterio sigue siendo nuestro.</strong>
      </div>
      <p>También puede implementar muy rápido una respuesta a la pregunta equivocada.</p>
    </div>
    <img src="/images/ia-criterio-side-right.png" alt="Una persona dirige un vehículo mientras un asistente de IA lo acelera" />
  </figure>
</template>

<style scoped>
.ai-impact {
  display:grid;
  grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);
  align-items:center;
  gap:2rem;
  width:min(60rem,100%);
  margin:.35rem 0 0;
}
.ai-impact__message { display:grid; gap:1.25rem; }
.ai-impact__message > div { padding:.8rem 0 .9rem 1rem; border-left:2px solid var(--deck-rule); }
.ai-impact__message .ai-impact__direction { border-left-color:var(--deck-accent); }
.ai-impact small { display:block; margin-bottom:.35rem; color:var(--deck-soft); font-size:.75rem; font-weight:800; letter-spacing:.1em; }
.ai-impact__direction small { color:var(--deck-accent-light); }
.ai-impact strong { display:block; font-family:var(--deck-font-display); font-size:1.65rem; line-height:1.16; letter-spacing:-.04em; }
.ai-impact p { margin:.2rem 0 0; font-size:.98rem; line-height:1.38; }
.ai-impact img { width:100%; max-height:22rem; object-fit:contain; }
@media (max-width:700px) {
  .ai-impact { grid-template-columns:1fr; }
  .ai-impact img { max-height:12rem; }
}
</style>
