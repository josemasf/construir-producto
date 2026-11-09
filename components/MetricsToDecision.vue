<template>
  <figure class="metrics-decision" aria-label="La analítica parte de una pregunta y conduce a una decisión">
    <ol class="metrics-decision__steps">
      <li class="metrics-decision__step">
        <span>01</span>
        <strong>Pregunta</strong>
        <p>¿Qué necesito aprender?</p>
      </li>
      <li class="metrics-decision__step">
        <span>02</span>
        <strong>Señal</strong>
        <p>Uso, abandono o recurrencia.</p>
      </li>
      <li class="metrics-decision__step">
        <span>03</span>
        <strong>Lectura</strong>
        <p>¿Qué está ocurriendo de verdad?</p>
      </li>
      <li class="metrics-decision__step">
        <span>04</span>
        <strong>Decisión</strong>
        <p>Seguir, cambiar o parar.</p>
      </li>
    </ol>
    <figcaption>Una métrica importa cuando puede cambiar una decisión.</figcaption>
  </figure>
</template>

<style scoped>
.metrics-decision { position: relative; max-width: 60rem; margin: 2.4rem auto 0; }
.metrics-decision__steps {
  display: grid;
  grid-template-columns: repeat(4,minmax(0,1fr));
  gap: 1.2rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.metrics-decision__step {
  position: relative;
  min-height: 11rem;
  padding: 1.2rem .3rem .6rem 0;
  border-top: 2px solid var(--deck-rule, #64748b);
}
.metrics-decision__step:first-child { border-top-color: var(--deck-accent, #f97316); }
.metrics-decision__step:last-child { border-top-color: var(--deck-evidence, #67e8f9); }
.metrics-decision__step span {
  display: block;
  margin-bottom: .85rem;
  color: var(--deck-accent-light, #fdba74);
  font-family: var(--deck-font-body, sans-serif);
  font-size: .83rem;
  font-weight: 800;
  letter-spacing: .1em;
}
.metrics-decision__step strong {
  display: block;
  color: var(--deck-ink, #f8fafc);
  font-family: var(--deck-font-display, sans-serif);
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: -.04em;
  line-height: 1.16;
}
.metrics-decision__step p {
  max-width: 17ch;
  margin: .65rem 0 0;
  color: var(--deck-muted, #cbd5e1);
  font-family: var(--deck-font-body, sans-serif);
  font-size: 1.04rem;
  line-height: 1.38;
}
.metrics-decision figcaption {
  margin-top: .85rem;
  color: var(--deck-accent-light, #fdba74);
  font-family: var(--deck-font-display, sans-serif);
  font-size: 1.16rem;
  font-weight: 700;
  line-height: 1.3;
}
@media (max-width:700px) {
  .metrics-decision { margin-top: .8rem; }
  .metrics-decision__steps { grid-template-columns: repeat(2,minmax(0,1fr)); gap: .5rem; }
  .metrics-decision__step { min-height: 0; }
}
</style>
