<template>
  <figure class="experiment-shift" aria-label="Cambios de intervenciones grandes a experimentos que permiten aprender antes">
    <div class="experiment-shift__row" v-click>
      <section><small>EVITA EMPEZAR POR</small><strong>Funcionalidad completa</strong></section>
      <span aria-hidden="true">→</span>
      <section class="experiment-shift__better"><small>EMPIEZA POR</small><strong>Hipótesis + prototipo</strong><p>Conversar primero; si procede, Issue → agente → Storybook → feedback.</p></section>
    </div>
    <div class="experiment-shift__row" v-click>
      <section><small>EVITA EMPEZAR POR</small><strong>Automatización</strong></section>
      <span aria-hidden="true">→</span>
      <section class="experiment-shift__better"><small>EMPIEZA POR</small><strong>Proceso manual</strong><p>Aprender el flujo antes de convertirlo en infraestructura.</p></section>
    </div>
    <div class="experiment-shift__row" v-click>
      <section><small>EVITA EMPEZAR POR</small><strong>Dashboard universal</strong></section>
      <span aria-hidden="true">→</span>
      <section class="experiment-shift__better"><small>EMPIEZA POR</small><strong>Una señal accionable</strong><p>Medir aquello que puede cambiar una decisión.</p></section>
    </div>
    <figcaption>No buscamos la versión más pequeña. Buscamos la que aprende antes.</figcaption>
  </figure>
</template>

<style scoped>
.experiment-shift { width:min(59rem,100%); margin:1.15rem 0 0; }
.experiment-shift__row {
  display:grid;
  grid-template-columns:minmax(0,.75fr) 3rem minmax(0,1.25fr);
  align-items:center;
  gap:1rem;
  min-height:6.2rem;
  padding:.75rem 0;
  border-bottom:1px solid var(--deck-rule);
}
.experiment-shift__row > span { color:var(--deck-accent-light); font-size:1.7rem; text-align:center; }
.experiment-shift small { display:block; margin-bottom:.3rem; color:var(--deck-soft); font-size:.7rem; font-weight:800; letter-spacing:.09em; }
.experiment-shift strong { font-family:var(--deck-font-display); font-size:1.3rem; letter-spacing:-.035em; }
.experiment-shift__better { padding-left:1rem; border-left:2px solid var(--deck-accent); }
.experiment-shift__better small { color:var(--deck-accent-light); }
.experiment-shift p { margin:.25rem 0 0; font-size:.94rem; line-height:1.3; }
.experiment-shift figcaption { margin-top:.9rem; color:var(--deck-ink); font-size:1.05rem; font-weight:700; }
@media (max-width:700px) {
  .experiment-shift__row { grid-template-columns:1fr; }
  .experiment-shift__row > span { transform:rotate(90deg); }
}
</style>
