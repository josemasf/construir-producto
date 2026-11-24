<template>
  <figure class="stop-signals" aria-label="Tres señales conceptuales para plantearse dejar de invertir: valor, aprendizaje y coste de oportunidad">
    <div class="stop-signals__grid">
      <section v-click>
        <small>SEÑAL 01</small>
        <div class="stop-signals__trend">VALOR <span>↘</span></div>
        <strong>No justifica el esfuerzo</strong>
        <p>Lo que aporta no compensa lo que exige sostenerlo.</p>
      </section>
      <section v-click>
        <small>SEÑAL 02</small>
        <div class="stop-signals__trend">APRENDIZAJE <span>↘</span></div>
        <strong>Ya no descubrimos nada</strong>
        <p>Seguimos añadiendo funciones sin reducir incertidumbre.</p>
      </section>
      <section v-click>
        <small>SEÑAL 03</small>
        <div class="stop-signals__trend">COSTE <span>↗</span></div>
        <strong>La oportunidad pesa más</strong>
        <p>Tiempo y foco empiezan a valer más en otro sitio.</p>
      </section>
    </div>
    <figcaption>Parar no es una fórmula automática: es una decisión basada en señales y contexto.</figcaption>
  </figure>
</template>

<style scoped>
.stop-signals { width:min(59rem,100%); margin:1.45rem 0 0; }
.stop-signals__grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1.8rem; }
.stop-signals section { min-height:13rem; padding:1rem .5rem .5rem 1rem; border-left:2px solid var(--deck-rule); }
.stop-signals section:last-child { border-left-color:var(--deck-accent); }
.stop-signals small { display:block; color:var(--deck-soft); font-size:.72rem; font-weight:800; letter-spacing:.1em; }
.stop-signals__trend { margin:.8rem 0 1.1rem; color:var(--deck-muted); font-size:.82rem; font-weight:800; letter-spacing:.08em; }
.stop-signals__trend span { margin-left:.4rem; color:var(--deck-accent-light); font-size:1.4rem; }
.stop-signals strong { display:block; font-family:var(--deck-font-display); font-size:1.3rem; line-height:1.2; letter-spacing:-.035em; }
.stop-signals p { margin:.55rem 0 0; font-size:.96rem; line-height:1.35; }
.stop-signals figcaption { margin-top:1rem; color:var(--deck-muted); font-size:.96rem; }
@media (max-width:700px) {
  .stop-signals__grid { grid-template-columns:1fr; gap:.5rem; }
  .stop-signals section { min-height:0; }
}
</style>
