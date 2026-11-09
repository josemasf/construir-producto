<template>
  <figure class="product-loop">
    <svg viewBox="0 0 960 520" role="img" aria-labelledby="loop-title loop-desc" xmlns="http://www.w3.org/2000/svg">
      <title id="loop-title">Ciclo continuo de producto</title>
      <desc id="loop-desc">Research conduce a Plan, Plan a Implement, Implement a Measure, y Measure vuelve a Research. El criterio de producto guía todas las fases.</desc>
      <defs>
        <marker id="loop-arrow" viewBox="0 0 12 12" refX="10.5" refY="6" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M 1 1 L 11 6 L 1 11" fill="none" stroke="#f97316" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
        </marker>
      </defs>
      <g class="product-loop__route" fill="none" stroke="#f97316" stroke-width="5" stroke-linecap="round" marker-end="url(#loop-arrow)">
        <path d="M 292 119 C 405 52, 555 52, 669 119"/>
        <path d="M 731 161 C 802 227, 802 310, 731 375"/>
        <path d="M 669 421 C 555 488, 405 488, 292 421"/>
        <path d="M 229 375 C 158 310, 158 227, 229 161"/>
      </g>
      <ellipse cx="480" cy="270" rx="205" ry="104" fill="var(--deck-surface, #111b2c)" stroke="#526278" stroke-opacity=".6" stroke-width="1.5"/>
      <g class="product-loop__criterion">
        <text x="480" y="250" class="product-loop__eyebrow" text-anchor="middle">LA BRÚJULA DE CADA DECISIÓN</text>
        <text x="480" y="288" class="product-loop__center" text-anchor="middle">CRITERIO DE</text>
        <text x="480" y="325" class="product-loop__center" text-anchor="middle">PRODUCTO</text>
      </g>
      <g class="product-loop__phase">
        <text x="238" y="187" class="product-loop__number">01</text>
        <text x="238" y="217" class="product-loop__name">Research</text>
        <text x="238" y="238" class="product-loop__hint">Comprender</text>
      </g>
      <g class="product-loop__phase">
        <text x="724" y="187" class="product-loop__number" text-anchor="end">02</text>
        <text x="724" y="217" class="product-loop__name" text-anchor="end">Plan</text>
        <text x="724" y="238" class="product-loop__hint" text-anchor="end">Elegir</text>
      </g>
      <g class="product-loop__phase">
        <text x="724" y="332" class="product-loop__number" text-anchor="end">03</text>
        <text x="724" y="362" class="product-loop__name" text-anchor="end">Implement</text>
        <text x="724" y="383" class="product-loop__hint" text-anchor="end">Entregar</text>
      </g>
      <g class="product-loop__phase">
        <text x="238" y="332" class="product-loop__number">04</text>
        <text x="238" y="362" class="product-loop__name">Measure</text>
        <text x="238" y="383" class="product-loop__hint">Aprender</text>
      </g>
    </svg>
    <figcaption>Medir no termina el trabajo: informa la siguiente decisión.</figcaption>
  </figure>
</template>

<style scoped>
.product-loop { width: min(59rem,100%); margin: -.7rem auto 0; }
.product-loop svg { display: block; width: 100%; max-height: calc(100vh - 11rem); }
.product-loop__route { stroke: var(--deck-accent, #f97316); }
.product-loop__number {
  fill: var(--deck-accent-light, #fdba74);
  font-family: var(--deck-font-body, sans-serif);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: .08em;
}
.product-loop__name {
  fill: var(--deck-ink, #f8fafc);
  font-family: var(--deck-font-display, sans-serif);
  font-size: 31px;
  font-weight: 800;
  letter-spacing: -.035em;
}
.product-loop__hint {
  fill: var(--deck-muted, #cbd5e1);
  font-family: var(--deck-font-body, sans-serif);
  font-size: 21px;
  font-weight: 500;
}
.product-loop__eyebrow {
  fill: var(--deck-soft, #a8b5c7);
  font-family: var(--deck-font-body, sans-serif);
  font-size: 17px;
  font-weight: 800;
  letter-spacing: .07em;
}
.product-loop__center {
  fill: var(--deck-ink, #f8fafc);
  font-family: var(--deck-font-display, sans-serif);
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -.04em;
}
.product-loop figcaption {
  margin: -.8rem 0 0;
  color: var(--deck-accent-light, #fdba74);
  font-family: var(--deck-font-body, sans-serif);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
}
@media (max-width: 700px) {
  .product-loop { margin-top: .5rem; }
  .product-loop svg { max-height: calc(100vh - 12rem); }
  .product-loop figcaption { margin-top: -.25rem; font-size: .88rem; }
}
</style>
