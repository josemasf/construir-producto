<script setup lang="ts">
defineProps<{ belief: string; reality: string; learning: string }>()
</script>

<template>
  <div class="evidence-flow" role="img" aria-label="De lo que creíamos, pasando por el usuario real, a lo aprendido">
    <div class="evidence-flow__item"><small>LO QUE CREÍAMOS</small><strong>{{ belief }}</strong></div>
    <span class="evidence-flow__arrow" aria-hidden="true">→</span>
    <div class="evidence-flow__item evidence-flow__item--real"><small>USUARIO REAL</small><strong>{{ reality }}</strong></div>
    <span class="evidence-flow__arrow" aria-hidden="true">→</span>
    <div class="evidence-flow__item evidence-flow__item--learning"><small>LO QUE APRENDEMOS</small><strong>{{ learning }}</strong></div>
  </div>
</template>

<style scoped>
.evidence-flow { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr); align-items: stretch; gap: .65rem; max-width: 59rem; margin-top: 1.8rem; }
.evidence-flow__item { display: grid; align-content: start; min-height: 9.25rem; padding: 1rem; border-top: 2px solid #64748b; background: rgba(148, 163, 184, .08); }
.evidence-flow__item small { display: block; margin-bottom: .2rem; color: #94a3b8; font-size: .6rem; font-weight: 800; letter-spacing: .12em; }
.evidence-flow__item strong { color: #f8fafc; font-family: "Iowan Old Style", Georgia, serif; font-size: 1.2rem; letter-spacing: -.03em; line-height: 1.12; }
.evidence-flow__arrow { align-self: center; color: #a78bfa; font-size: 1.35rem; font-weight: 700; }
.evidence-flow__item--real { border-color: #a78bfa; background: rgba(139, 92, 246, .12); }
.evidence-flow__item--learning { border-color: #f97316; background: rgba(249, 115, 22, .12); }

@media (max-width: 700px) {
  .evidence-flow { grid-template-columns: 1fr; justify-items: stretch; gap: .45rem; margin-top: 1rem; }
  .evidence-flow__item { min-height: 0; padding: .85rem 1rem; border-top: 0; border-left: 2px solid #64748b; }
  .evidence-flow__item--real { border-left-color: #a78bfa; }
  .evidence-flow__item--learning { border-left-color: #f97316; }
  .evidence-flow__arrow { justify-self: start; transform: rotate(90deg); }
}
</style>
