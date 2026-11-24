<template>
  <figure class="product-loop">
    <svg viewBox="0 0 960 380" role="img" aria-labelledby="loop-title loop-desc" xmlns="http://www.w3.org/2000/svg">
      <title id="loop-title">Ciclo continuo de producto</title>
      <desc id="loop-desc">Research conduce a Plan, Plan a Implement, Implement a Measure, y Measure vuelve a Research. El criterio de producto guía todas las fases.</desc>
      <defs>
        <marker id="loop-arrow" viewBox="0 0 12 12" refX="10.5" refY="6" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 1 1 L 11 6 L 1 11" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </marker>
      </defs>
      <g class="product-loop__route" fill="none" stroke="#f97316" stroke-width="3.5" stroke-linecap="round" marker-end="url(#loop-arrow)">
        <path d="M 280 77 C 390 19, 570 19, 680 77"/>
        <path d="M 870 147 C 915 170, 915 210, 870 233"/>
        <path d="M 680 303 C 570 361, 390 361, 280 303"/>
        <path d="M 90 233 C 45 210, 45 170, 90 147"/>
      </g>
      <ellipse cx="480" cy="190" rx="170" ry="82" fill="var(--deck-surface, #111b2c)" stroke="#526278" stroke-opacity=".6" stroke-width="1.5"/>
      <g class="product-loop__criterion" text-anchor="middle">
        <text x="480" y="158" class="product-loop__eyebrow">LA BRÚJULA DE CADA DECISIÓN</text>
        <text x="480" y="198" class="product-loop__center">CRITERIO DE</text>
        <text x="480" y="235" class="product-loop__center">PRODUCTO</text>
      </g>
      <g v-click class="product-loop__phase" text-anchor="middle">
        <text x="185" y="91" class="product-loop__number">01</text>
        <text x="185" y="124" class="product-loop__name">Research</text>
        <text x="185" y="150" class="product-loop__hint">Comprender</text>
      </g>
      <g v-click class="product-loop__phase" text-anchor="middle">
        <text x="775" y="91" class="product-loop__number">02</text>
        <text x="775" y="124" class="product-loop__name">Plan</text>
        <text x="775" y="150" class="product-loop__hint">Elegir</text>
      </g>
      <g v-click class="product-loop__phase" text-anchor="middle">
        <text x="775" y="240" class="product-loop__number">03</text>
        <text x="775" y="273" class="product-loop__name">Implement</text>
        <text x="775" y="299" class="product-loop__hint">Entregar</text>
      </g>
      <g v-click class="product-loop__phase" text-anchor="middle">
        <text x="185" y="240" class="product-loop__number">04</text>
        <text x="185" y="273" class="product-loop__name">Measure</text>
        <text x="185" y="299" class="product-loop__hint">Aprender</text>
      </g>
    </svg>
    <figcaption v-click>Medir no termina el trabajo: informa la siguiente decisión.</figcaption>
  </figure>
</template>

<style scoped>
.product-loop { width: min(59rem,100%); margin: .25rem auto 0; }
/* Size against the fixed Slidev canvas, never the device viewport. */
.product-loop svg { display: block; width: 100%; height: 19rem; }
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
  font-size: 14px;
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
  margin: .35rem 0 0;
  color: var(--deck-accent-light, #fdba74);
  font-family: var(--deck-font-body, sans-serif);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
}
</style>
