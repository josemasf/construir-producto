<script setup lang="ts">
withDefaults(defineProps<{
  phase?: 'idea' | 'web' | 'service' | 'product' | 'stop'
}>(), { phase: 'product' })

const steps = ['Idea', 'Web', 'Servicio', 'Producto']
const activeByPhase = { idea: 0, web: 1, service: 2, product: 3, stop: 2 }
</script>

<template>
  <div class="journey" :class="`journey--${phase}`" role="img" :aria-label="`Evolución: ${steps.slice(0, activeByPhase[phase] + 1).join(', ')}`">
    <template v-for="(step, index) in steps" :key="step">
      <div class="journey__step" :class="{ 'journey__step--active': index <= activeByPhase[phase], 'journey__step--stop': phase === 'stop' && index === 3 }">
        <span>0{{ index + 1 }}</span>
        <strong>{{ phase === 'stop' && index === 3 ? 'No escalar' : step }}</strong>
      </div>
      <div v-if="index < steps.length - 1" class="journey__line" :class="{ 'journey__line--active': index < activeByPhase[phase] }" aria-hidden="true" />
    </template>
  </div>
</template>

<style scoped>
.journey { display: flex; align-items: center; width: 100%; margin-top: 2.8rem; }
.journey__step { display: grid; gap: .35rem; min-width: 6.5rem; color: #64748b; }
.journey__step span { font-family: "Aptos", sans-serif; font-size: .7rem; font-weight: 800; letter-spacing: .12em; }
.journey__step strong { color: inherit; font-family: "Iowan Old Style", Georgia, serif; font-size: 1.55rem; letter-spacing: -.04em; }
.journey__step--active { color: #5eead4; }
.journey__step--active strong { color: #f8fafc; }
.journey__step--stop { color: #fb923c; }
.journey__line { height: 1px; flex: 1; min-width: 1rem; margin: 0 .8rem; background: #334155; }
.journey__line--active { background: #5eead4; }
</style>
