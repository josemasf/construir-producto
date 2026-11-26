<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentPage, total } = useNav()

const shortChapters = [
  { label: 'Del problema al producto', start: 1, end: 3 },
  { label: 'El coste de construir', start: 4, end: 6 },
  { label: 'Datos y contexto', start: 7, end: 8 },
  { label: 'Ingeniería con criterio', start: 9, end: 12 },
] as const

const extendedChapters = [
  { label: 'Del problema al código', start: 1, end: 6 },
  { label: 'Seguir construyendo', start: 7, end: 10 },
  { label: 'La realidad del usuario', start: 11, end: 13 },
  { label: 'Aprender a decidir', start: 14, end: 19 },
  { label: 'Ingeniería con criterio', start: 20, end: 25 },
] as const

const totalSlides = computed(() => total.value)
const chapters = computed(() => totalSlides.value === extendedChapters[extendedChapters.length - 1].end ? extendedChapters : shortChapters)
const fullBleedSlides = computed(() => new Set(totalSlides.value === extendedChapters[extendedChapters.length - 1].end
  ? [1, 2, 3, 4, 7, 10, 14, 20, totalSlides.value]
  : [1, 2, 8, totalSlides.value]))

const visible = computed(() => !fullBleedSlides.value.has(currentPage.value))
const activeChapter = computed(() => {
  const index = chapters.value.findIndex((chapter) => currentPage.value >= chapter.start && currentPage.value <= chapter.end)
  return index >= 0 ? index : 0
})
const pageLabel = computed(() => String(currentPage.value).padStart(2, '0'))
const chapterLabel = computed(() => String(activeChapter.value + 1).padStart(2, '0'))
</script>

<template>
  <footer v-if="visible" class="deck-footer" aria-label="Ubicación en la charla">
    <div class="deck-footer__chapter">
      <span class="deck-footer__chapter-number">{{ chapterLabel }}</span>
      <span>{{ chapters[activeChapter].label }}</span>
    </div>
    <div class="deck-footer__progress" aria-hidden="true">
      <span
        v-for="(chapter, index) in chapters"
        :key="chapter.label"
        :class="{ 'deck-footer__progress-step--active': index <= activeChapter }"
      />
    </div>
    <span class="deck-footer__counter">{{ pageLabel }} / {{ totalSlides }}</span>
  </footer>
</template>

<style scoped>
.deck-footer {
  position: fixed;
  z-index: 20;
  right: 4.5rem;
  bottom: 1.25rem;
  left: 4.5rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 7.2rem auto;
  align-items: center;
  gap: 1.4rem;
  min-height: 1.4rem;
  color: var(--deck-soft, #a8b5c7);
  font-family: var(--deck-font-body, "Inter", sans-serif);
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .035em;
  line-height: 1.2;
}
.deck-footer__chapter { display: flex; align-items: center; gap: .85rem; min-width: 0; }
.deck-footer__chapter-number { color: var(--deck-accent-light, #fdba74); font-weight: 800; }
.deck-footer__progress { display: flex; gap: .3rem; }
.deck-footer__progress span { height: 3px; flex: 1; background: rgba(148,163,184,.32); }
.deck-footer__progress .deck-footer__progress-step--active { background: var(--deck-accent, #f97316); }
.deck-footer__counter { color: var(--deck-ink, #f8fafc); font-variant-numeric: tabular-nums; white-space: nowrap; }
</style>
