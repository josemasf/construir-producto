<template>
  <figure class="decision-tree" aria-label="Decidir antes de construir: si hay una razón y resultado esperado elegir la acción mínima; si falta evidencia investigar">
    <div class="decision-tree__question">¿Qué problema, riesgo o aprendizaje justifica actuar?</div>
    <div class="decision-tree__connector" aria-hidden="true"></div>
    <div class="decision-tree__branches">
      <section><small>HAY RAZÓN Y RESULTADO ESPERADO</small><strong>Elegir la acción mínima</strong><span>Código, simplificar, corregir, medir o hablar con usuarios.</span></section>
      <section><small>FALTA EVIDENCIA</small><strong>Investigar antes de invertir</strong><span>Convertir la suposición en una pregunta contrastable.</span></section>
    </div>
    <figcaption>Seguridad, cumplimiento y continuidad pueden requerir actuar de inmediato.</figcaption>
  </figure>
</template>

<style scoped>
.decision-tree { margin:.9rem 0 0; width:100%; }
.decision-tree__question { max-width:31rem; margin:auto; padding:.7rem 1rem; border:1px solid var(--deck-rule); background:var(--deck-surface); text-align:center; font:700 1.35rem/1.2 var(--deck-font-display); }
.decision-tree__connector { position:relative; height:1.7rem; width:50%; margin:auto; border:1px solid var(--deck-rule); border-bottom:0; margin-top:.85rem; }
.decision-tree__connector::before { position:absolute; content:""; height:.85rem; left:50%; top:-.85rem; border-left:1px solid var(--deck-rule); }
.decision-tree__branches { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
.decision-tree__branches section { display:grid; align-content:start; gap:.45rem; padding:.75rem 1rem; border-top:2px solid var(--deck-evidence); background:var(--deck-surface); }
.decision-tree__branches section:last-child { border-color:var(--deck-accent); }
.decision-tree small { color:var(--deck-evidence); font-size:.78rem; font-weight:800; letter-spacing:.04em; }
.decision-tree section:last-child small { color:var(--deck-accent-light); }
.decision-tree strong { font:700 1.32rem/1.2 var(--deck-font-display); }
.decision-tree section span { color:var(--deck-muted); font-size:1rem; line-height:1.3; }
.decision-tree figcaption { text-align:center; margin:.85rem 0 0; color:var(--deck-soft); font-size:.96rem; }
</style>
