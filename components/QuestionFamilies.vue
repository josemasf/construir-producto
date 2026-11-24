<template>
  <figure class="question-families" aria-label="Tres familias de preguntas: problema, comportamiento y valor">
    <div class="question-families__grid">
      <section v-click>
        <span>01</span>
        <small>PROBLEMA</small>
        <strong>¿Quién lo tiene?</strong>
        <p>¿Con qué frecuencia aparece?</p>
      </section>
      <section v-click>
        <span>02</span>
        <small>COMPORTAMIENTO</small>
        <strong>¿Qué hace ahora?</strong>
        <p>¿Qué le costaría cambiar?</p>
      </section>
      <section v-click>
        <span>03</span>
        <small>VALOR</small>
        <strong>¿Qué le haría volver?</strong>
        <p>¿Qué justificaría pagar o invertir?</p>
      </section>
    </div>
    <div class="question-families__footer">
      <img src="/images/preguntas-usuarios-side-right.png" alt="Dos personas conversan junto a un mapa de preguntas y una lupa" />
      <p>El compilador puede validar el código. Estas respuestas necesitan evidencia.</p>
    </div>
  </figure>
</template>

<style scoped>
.question-families { width:min(60rem,100%); margin:1.6rem 0 0; }
.question-families__grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:2rem; }
.question-families section { min-height:11rem; padding:.9rem .5rem .7rem 1rem; border-left:2px solid var(--deck-rule); }
.question-families section:last-child { border-left-color:var(--deck-accent); }
.question-families span { display:block; color:var(--deck-accent-light); font-size:.75rem; font-weight:800; letter-spacing:.1em; }
.question-families small { display:block; margin:.5rem 0 .8rem; color:var(--deck-soft); font-size:.78rem; font-weight:800; letter-spacing:.08em; }
.question-families strong { display:block; font-family:var(--deck-font-display); font-size:1.35rem; letter-spacing:-.035em; line-height:1.2; }
.question-families p { margin:.45rem 0 0; font-size:1rem; line-height:1.35; }
.question-families__footer { display:grid; grid-template-columns:8rem 1fr; align-items:center; gap:1.25rem; margin-top:.7rem; padding-top:.7rem; border-top:1px solid var(--deck-rule); }
.question-families__footer img { width:7.2rem; height:4.5rem; object-fit:contain; object-position:left center; }
.question-families__footer p { margin:0; color:var(--deck-ink); font-weight:600; }
@media (max-width:700px) {
  .question-families__grid { grid-template-columns:1fr; gap:.4rem; }
  .question-families section { min-height:0; }
  .question-families__footer { grid-template-columns:1fr; }
  .question-families__footer img { display:none; }
}
</style>
