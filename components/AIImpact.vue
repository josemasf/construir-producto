<template>
  <figure class="ai-impact" aria-label="La IA aumenta la velocidad; el criterio determina la dirección">
    <div class="ai-impact__message"><strong>Un prototipo no valida la hipótesis.</strong><p>Producto, diseño e ingeniería deciden qué merece construirse.</p></div>
    <img src="/images/ia-criterio-side-right.png" alt="Una persona dirige un vehículo mientras un asistente de IA lo acelera" />
  </figure>
</template>

<style scoped>
.ai-impact { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); align-items:center; gap:2rem; width:100%; margin:.8rem 0 0; }
.ai-impact__message { border-left:3px solid var(--deck-accent); padding:1rem 0 1rem 1.25rem; }
.ai-impact__message strong { display:block; font:800 1.95rem/1.18 var(--deck-font-display); }
.ai-impact__message p { margin:.8rem 0 0; color:var(--deck-muted); font-size:1.18rem; line-height:1.4; }
.ai-impact img { display:block; justify-self:center; width:auto; height:auto; max-width:100%; max-height:18rem; object-fit:contain; }
</style>
