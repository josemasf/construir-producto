<script setup lang="ts">
defineProps<{ belief: string; reality: string; learning: string }>()
</script>

<template>
  <div class="evidence-flow" role="img" aria-label="De lo que creíamos, pasando por el usuario real, a lo aprendido">
    <div class="evidence-flow__item"><small>LO QUE CREÍAMOS</small><strong>{{ belief }}</strong></div>
    <span class="evidence-flow__arrow" aria-hidden="true">↓</span>
    <div class="evidence-flow__item evidence-flow__item--real"><small>USUARIO REAL</small><strong>{{ reality }}</strong></div>
    <span class="evidence-flow__arrow" aria-hidden="true">↓</span>
    <div class="evidence-flow__item evidence-flow__item--learning"><small>LO QUE APRENDEMOS</small><strong>{{ learning }}</strong></div>
  </div>
</template>

<style scoped>
.evidence-flow { display: grid; justify-items: start; gap: .5rem; margin-top: 1.5rem; }
.evidence-flow__item { width: min(100%, 33rem); padding: .8rem 1rem; border-left: 2px solid #64748b; background: rgba(148, 163, 184, .08); }
.evidence-flow__item small { display: block; margin-bottom: .2rem; color: #94a3b8; font-size: .6rem; font-weight: 800; letter-spacing: .12em; }
.evidence-flow__item strong { color: #f8fafc; font-family: "Iowan Old Style", Georgia, serif; font-size: 1.32rem; letter-spacing: -.03em; }
.evidence-flow__arrow { color: #a78bfa; font-size: 1.35rem; font-weight: 700; }
.evidence-flow__item--real { border-color: #a78bfa; background: rgba(139, 92, 246, .12); }
.evidence-flow__item--learning { border-color: #f97316; background: rgba(249, 115, 22, .12); }
</style>
