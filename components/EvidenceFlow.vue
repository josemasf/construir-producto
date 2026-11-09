<script setup lang="ts">
defineProps<{ belief: string; reality: string; learning: string }>()
</script>

<template>
  <div class="evidence-flow" role="group" aria-label="De las hipótesis a las decisiones basadas en evidencia">
    <div class="evidence-flow__item">
      <small>LO QUE CREÍAMOS</small>
      <strong>{{ belief }}</strong>
    </div>
    <span class="evidence-flow__arrow" aria-hidden="true">→</span>
    <div class="evidence-flow__item evidence-flow__item--real">
      <small>LO QUE PUEDE OCURRIR</small>
      <strong>{{ reality }}</strong>
    </div>
    <span class="evidence-flow__arrow" aria-hidden="true">→</span>
    <div class="evidence-flow__item evidence-flow__item--learning">
      <small>QUÉ NECESITAMOS APRENDER</small>
      <strong>{{ learning }}</strong>
    </div>
  </div>
</template>

<style scoped>
.evidence-flow {
  display: grid;
  grid-template-columns: minmax(0,1fr) 1.5rem minmax(0,1fr) 1.5rem minmax(0,1fr);
  align-items: start;
  gap: .85rem;
  max-width: 59rem;
  margin-top: 2.3rem;
}
.evidence-flow__item {
  min-height: 10rem;
  padding: 1.1rem .5rem .7rem 0;
  border-top: 2px solid var(--deck-rule, #64748b);
}
.evidence-flow__item small {
  display: block;
  margin-bottom: .85rem;
  color: var(--deck-soft, #a8b5c7);
  font-family: var(--deck-font-body, sans-serif);
  font-size: .8rem;
  font-weight: 800;
  letter-spacing: .07em;
  line-height: 1.25;
}
.evidence-flow__item strong {
  color: var(--deck-ink, #f8fafc);
  font-family: var(--deck-font-display, sans-serif);
  font-size: 1.22rem;
  font-weight: 700;
  letter-spacing: -.03em;
  line-height: 1.3;
}
.evidence-flow__arrow {
  margin-top: 1.85rem;
  color: var(--deck-accent-light, #fdba74);
  font-size: 1.5rem;
  text-align: center;
}
.evidence-flow__item--real { border-color: var(--deck-evidence, #67e8f9); }
.evidence-flow__item--learning { border-color: var(--deck-accent, #f97316); }
@media (max-width: 700px) {
  .evidence-flow { grid-template-columns: 1fr; gap: .2rem; margin-top: .8rem; }
  .evidence-flow__item { min-height: 0; padding: .35rem 0 .6rem; }
  .evidence-flow__item small { margin-bottom: .2rem; }
  .evidence-flow__arrow { margin: 0; transform: rotate(90deg); }
}
</style>
