<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentPage } = useNav()

const stages = [
  { label: 'Construir', end: 12 },
  { label: 'Usuarios', end: 14 },
  { label: 'Evidencia', end: 16 },
  { label: 'Decidir', end: 21 },
  { label: 'Parar', end: 25 },
  { label: 'Producto', end: Number.POSITIVE_INFINITY },
]

const activeStage = computed(() =>
  stages.findIndex((stage) => currentPage.value <= stage.end),
)
</script>

<template>
  <nav v-if="currentPage > 1" class="story-nav" aria-label="Progreso de la charla">
    <template v-for="(stage, index) in stages" :key="stage.label">
      <span class="story-nav__stage" :class="{ 'story-nav__stage--active': index <= activeStage }">
        <i aria-hidden="true" />{{ stage.label }}
      </span>
      <span v-if="index < stages.length - 1" class="story-nav__line" :class="{ 'story-nav__line--active': index < activeStage }" aria-hidden="true" />
    </template>
  </nav>
</template>

<style scoped>
.story-nav {
  position: fixed;
  isolation: isolate;
  z-index: 20;
  right: 4.5rem;
  bottom: 1.35rem;
  left: 4.5rem;
  display: flex;
  align-items: center;
  color: rgba(203, 213, 225, .46);
  font-family: "Aptos", "Segoe UI", sans-serif;
  font-size: .57rem;
  font-weight: 700;
  letter-spacing: .12em;
  line-height: 1;
  text-transform: uppercase;
}

.story-nav::before {
  position: absolute;
  z-index: -1;
  right: -4.5rem;
  bottom: -1.35rem;
  left: -4.5rem;
  height: 4.4rem;
  content: "";
  background: linear-gradient(to top, rgba(8, 15, 28, .78) 0%, rgba(8, 15, 28, .48) 45%, transparent 100%);
  pointer-events: none;
}

.story-nav__stage { display: inline-flex; align-items: center; gap: .32rem; white-space: nowrap; }
.story-nav__stage i { width: .39rem; height: .39rem; border: 1px solid currentColor; border-radius: 999px; }
.story-nav__stage--active { color: #f8fafc; }
.story-nav__stage--active i { border-color: #f97316; background: #f97316; box-shadow: 0 0 0 3px rgba(249, 115, 22, .13); }
.story-nav__line { height: 1px; flex: 1; min-width: .75rem; margin: 0 .55rem; background: rgba(203, 213, 225, .18); }
.story-nav__line--active { background: rgba(249, 115, 22, .8); }
</style>
