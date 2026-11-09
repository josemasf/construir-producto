<template>
  <div class="decision-tree" role="group" aria-label="Guía para decidir antes de construir">
    <p class="decision-tree__question">¿Qué problema, riesgo o aprendizaje<br>justifica actuar?</p>
    <div class="decision-tree__branches">
      <section class="decision-tree__branch decision-tree__branch--yes">
        <small>HAY UNA RAZÓN Y UN RESULTADO ESPERADO</small>
        <strong>Elegir la acción mínima</strong>
        <span>Puede ser código, simplificar, corregir, medir o hablar con usuarios.</span>
      </section>
      <section class="decision-tree__branch decision-tree__branch--no">
        <small>FALTAN EVIDENCIAS O CRITERIOS</small>
        <strong>Investigar antes de invertir</strong>
        <span>Convertir la suposición en una pregunta que podamos contrastar.</span>
      </section>
    </div>
    <p class="decision-tree__exception">Seguridad, cumplimiento o continuidad pueden requerir una respuesta inmediata.</p>
  </div>
</template>

<style scoped>
.decision-tree { display: grid; gap: 1.1rem; margin-top: 1.35rem; }
.decision-tree__question {
  margin: 0;
  color: var(--deck-ink, #f8fafc);
  font-family: var(--deck-font-display, sans-serif);
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -.04em;
  line-height: 1.2;
}
.decision-tree__branches { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 2rem; }
.decision-tree__branch {
  display: grid;
  align-content: start;
  gap: .6rem;
  min-height: 9.2rem;
  padding: .9rem .7rem .65rem 1.05rem;
  border-left: 2px solid var(--deck-accent, #f97316);
}
.decision-tree__branch small {
  color: var(--deck-accent-light, #fdba74);
  font-family: var(--deck-font-body, sans-serif);
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .075em;
  line-height: 1.22;
}
.decision-tree__branch strong {
  color: var(--deck-ink, #f8fafc);
  font-family: var(--deck-font-display, sans-serif);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -.035em;
  line-height: 1.24;
}
.decision-tree__branch span {
  color: var(--deck-muted, #cbd5e1);
  font-family: var(--deck-font-body, sans-serif);
  font-size: 1.02rem;
  line-height: 1.37;
}
.decision-tree__branch--no { border-color: var(--deck-rule, #64748b); }
.decision-tree__branch--no small { color: var(--deck-soft, #a8b5c7); }
.decision-tree__exception { margin: 0; color: var(--deck-soft, #a8b5c7); font-size: .91rem; line-height: 1.35; }
@media (max-width: 700px) {
  .decision-tree__question { font-size: 1.5rem; }
  .decision-tree__branches { grid-template-columns: 1fr; gap: .6rem; }
  .decision-tree__branch { min-height: 0; padding-top: .45rem; }
}
</style>
