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
    <p class="decision-tree__exception">Excepción: seguridad, cumplimiento o continuidad pueden exigir actuar de inmediato.</p>
  </div>
</template>

<style scoped>
.decision-tree { display: grid; gap: 1.25rem; margin-top: 1.5rem; }
.decision-tree__question { margin: 0; color: #fff; font-family: Georgia,serif; font-size: 2.15rem; font-weight: 700; letter-spacing: -.045em; line-height: 1.05; }
.decision-tree__branches { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
.decision-tree__branch { display: grid; align-content: start; gap: .65rem; min-height: 11.5rem; padding: 1.25rem 1.4rem; border: 1px solid; border-radius: .25rem; }
.decision-tree__branch small { font-size: .82rem; font-weight: 800; letter-spacing: .07em; line-height: 1.3; }
.decision-tree__branch strong { font-family: Georgia,serif; font-size: 1.65rem; letter-spacing: -.035em; line-height: 1.1; }
.decision-tree__branch span { color: #e2e8f0; font-size: 1.01rem; line-height: 1.35; }
.decision-tree__branch--yes { border-color: rgba(45,212,191,.7); background: rgba(45,212,191,.08); color: #99f6e4; }
.decision-tree__branch--no { border-color: rgba(249,115,22,.7); background: rgba(249,115,22,.08); color: #fdba74; }
.decision-tree__exception { margin: .2rem 0 0; color: #cbd5e1; font-size: .9rem; line-height: 1.3; }
@media (max-width: 700px) {
  .decision-tree__question { font-size: 1.65rem; }
  .decision-tree__branches { grid-template-columns: 1fr; }
  .decision-tree__branch { min-height: 0; }
}
</style>
