<template>
  <figure
    class="concept-model"
    aria-label="En esta charla, toda solución puede empezar siendo una web; si resuelve un problema se convierte en servicio y, si además alguien pagaría por resolverlo, hablamos de producto"
  >
    <div class="concept-model__web">
      <div class="concept-model__label">
        <small>01 / WEB</small>
        <strong>Existe y funciona</strong>
        <p>Hemos construido algo accesible y utilizable.</p>
      </div>

      <div class="concept-model__gate">
        <span>¿Resuelve un problema real?</span>
        <b aria-hidden="true">→</b>
      </div>

      <div class="concept-model__service">
        <div class="concept-model__label">
          <small>02 / SERVICIO</small>
          <strong>Resuelve un problema</strong>
          <p>Alguien obtiene valor al utilizarlo.</p>
        </div>

        <div class="concept-model__gate concept-model__gate--product">
          <span>¿Alguien pagaría por ello?</span>
          <b aria-hidden="true">→</b>
        </div>

        <div class="concept-model__product">
          <small>03 / PRODUCTO</small>
          <strong>El valor justifica pagar</strong>
          <p>La solución no solo funciona y ayuda: existe disposición a pagar por resolver ese problema.</p>
        </div>
      </div>
    </div>

    <figcaption>
      En esta charla usamos una definición deliberadamente práctica:
      <strong>web ⊃ servicio ⊃ producto</strong>.
    </figcaption>
  </figure>
</template>

<style scoped>
.concept-model {
  width: min(60rem, 100%);
  margin: 1.35rem 0 0;
}

.concept-model__web {
  display: grid;
  grid-template-columns: minmax(0, .72fr) 8.5rem minmax(0, 1.65fr);
  align-items: stretch;
  gap: 1rem;
  padding: 1rem 1rem 1rem 1.15rem;
  border: 1px solid var(--deck-rule);
}

.concept-model__service {
  display: grid;
  grid-template-columns: minmax(0, .9fr) 8.5rem minmax(0, 1.1fr);
  align-items: stretch;
  gap: 1rem;
  padding: .9rem .9rem .9rem 1rem;
  border: 2px solid var(--deck-evidence);
}

.concept-model__product {
  padding: .8rem .7rem .7rem 1rem;
  border-left: 4px solid var(--deck-accent);
  background: rgba(249, 115, 22, .07);
}

.concept-model__label,
.concept-model__product {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.concept-model small {
  display: block;
  margin-bottom: .45rem;
  color: var(--deck-soft);
  font-size: .72rem;
  font-weight: 800;
  letter-spacing: .1em;
}

.concept-model__service > .concept-model__label small {
  color: var(--deck-evidence);
}

.concept-model__product small {
  color: var(--deck-accent-light);
}

.concept-model strong {
  display: block;
  color: var(--deck-ink);
  font-family: var(--deck-font-display);
  font-size: 1.34rem;
  line-height: 1.18;
  letter-spacing: -.04em;
}

.concept-model p {
  margin: .45rem 0 0;
  color: var(--deck-muted);
  font-size: .94rem;
  line-height: 1.34;
}

.concept-model__gate {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  text-align: center;
}

.concept-model__gate span {
  max-width: 10ch;
  color: var(--deck-muted);
  font-size: .82rem;
  font-weight: 700;
  line-height: 1.25;
}

.concept-model__gate b {
  color: var(--deck-evidence);
  font-size: 1.65rem;
  font-weight: 500;
}

.concept-model__gate--product b {
  color: var(--deck-accent);
}

.concept-model figcaption {
  margin-top: .9rem;
  color: var(--deck-muted);
  font-size: .96rem;
  line-height: 1.35;
}

.concept-model figcaption strong {
  display: inline;
  color: var(--deck-ink);
  font-family: var(--deck-font-body);
  font-size: inherit;
  letter-spacing: 0;
}

@media (max-width: 700px) {
  .concept-model__web,
  .concept-model__service {
    grid-template-columns: 1fr;
  }

  .concept-model__gate b {
    transform: rotate(90deg);
  }
}
</style>
