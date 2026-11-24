<template>
  <figure class="question-families" aria-label="Tres familias de preguntas: problema, comportamiento y valor">
    <div class="question-families__questions">
      <section v-click><span>01</span><div><small>PROBLEMA</small><strong>¿Quién lo tiene?</strong><p>¿Con qué frecuencia aparece?</p></div></section>
      <section v-click><span>02</span><div><small>COMPORTAMIENTO</small><strong>¿Qué hace ahora?</strong><p>¿Qué le costaría cambiar?</p></div></section>
      <section v-click><span>03</span><div><small>VALOR</small><strong>¿Qué le haría volver?</strong><p>¿Qué justificaría pagar o invertir?</p></div></section>
    </div>
    <img src="/images/preguntas-usuarios-side-right.png" alt="Dos personas conversan junto a un mapa de preguntas y una lupa" />
    <figcaption>El compilador valida código. Estas respuestas necesitan evidencia.</figcaption>
  </figure>
</template>

<style scoped>
.question-families { display:grid; grid-template-columns:1.25fr 1fr; align-items:center; gap:.8rem 2rem; margin:1rem 0 0; width:100%; }
.question-families__questions { display:grid; gap:.55rem; }
.question-families section { display:grid; grid-template-columns:2.2rem 1fr; gap:.75rem; align-items:start; border-bottom:1px solid var(--deck-rule); padding:.35rem 0 .55rem; }
.question-families section:last-child { border:0; }
.question-families section > span { color:var(--deck-accent-light); font-size:1.35rem; font-weight:800; }
.question-families small { color:var(--deck-soft); font-size:.76rem; font-weight:800; letter-spacing:.08em; }
.question-families strong { display:block; font:700 1.45rem/1.2 var(--deck-font-display); }
.question-families p { margin:.2rem 0 0; font-size:1rem; line-height:1.25; }
.question-families img { display:block; width:100%; height:14rem; object-fit:contain; }
.question-families figcaption { grid-column:1/-1; padding-top:.65rem; border-top:1px solid var(--deck-rule); font-size:1.08rem; font-weight:700; color:var(--deck-ink); }
</style>
