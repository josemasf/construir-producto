<template>
  <div class="decision-tree" role="img" aria-label="Una funcionalidad que reduce incertidumbre se construye; si no, se cuestiona">
    <div class="decision-tree__question">¿Qué incertidumbre reduce<br>esta funcionalidad?</div>
    <div class="decision-tree__branches">
      <div class="decision-tree__branch decision-tree__branch--yes"><small>SI LA REDUCE</small><strong>Construir</strong><span>con una hipótesis clara</span></div>
      <div class="decision-tree__branch decision-tree__branch--no"><small>SI NO LA REDUCE</small><strong>Cuestionar</strong><span>antes de añadir complejidad</span></div>
    </div>
  </div>
</template>

<style scoped>
.decision-tree { display: grid; gap: 2.2rem; margin-top: 1.5rem; }
.decision-tree__question { color: #fff; font-family: "Iowan Old Style", Georgia, serif; font-size: 2.25rem; font-weight: 700; letter-spacing: -.05em; line-height: 1.02; }
.decision-tree__branches { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
.decision-tree__branch { display: grid; gap: .3rem; padding: 1.15rem 1.3rem; border: 1px solid; border-radius: .25rem; }
.decision-tree__branch small { font-size: .61rem; font-weight: 800; letter-spacing: .12em; }
.decision-tree__branch strong { font-family: "Iowan Old Style", Georgia, serif; font-size: 1.75rem; letter-spacing: -.04em; }
.decision-tree__branch span { font-size: .83rem; }
.decision-tree__branch--yes { border-color: rgba(45, 212, 191, .7); background: rgba(45, 212, 191, .1); color: #99f6e4; }
.decision-tree__branch--no { border-color: rgba(249, 115, 22, .7); background: rgba(249, 115, 22, .1); color: #fdba74; }
</style>
