<template>
  <figure class="metrics-decision" aria-label="Recorrido hipotético de Qué Veo Ahora desde una recomendación hasta la salida al proveedor y la posible vuelta">
    <div class="metrics-decision__eyebrow">RECORRIDO OBSERVABLE · EJEMPLO HIPOTÉTICO</div>
    <ol class="metrics-decision__journey">
      <li>
        <span>01</span>
        <strong>Recomendación</strong>
        <p>¿Abre una propuesta?</p>
      </li>
      <li>
        <span>02</span>
        <strong>Ficha</strong>
        <p>¿Busca más contexto?</p>
      </li>
      <li>
        <span>03</span>
        <strong>Proveedor</strong>
        <p>¿Sale para verla?</p>
      </li>
      <li>
        <span>04</span>
        <strong>¿Vuelve?</strong>
        <p>¿Retoma la búsqueda?</p>
      </li>
    </ol>
    <div class="metrics-decision__questions">
      <strong>¿Dónde abandona?</strong>
      <span>→</span>
      <strong>¿Qué necesitamos aprender?</strong>
      <span>→</span>
      <strong>¿Qué decisión cambiaría?</strong>
    </div>
    <figcaption>Un clic al proveedor es una señal. No demuestra satisfacción.</figcaption>
  </figure>
</template>

<style scoped>
.metrics-decision { width:min(60rem,100%); margin:1.65rem 0 0; }
.metrics-decision__eyebrow { color:var(--deck-accent-light); font-size:.76rem; font-weight:800; letter-spacing:.1em; }
.metrics-decision__journey {
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:1.4rem;
  margin:1rem 0 0;
  padding:0;
  list-style:none;
}
.metrics-decision__journey li { position:relative; min-height:9.3rem; padding:1rem .4rem .6rem 0; border-top:2px solid var(--deck-rule); }
.metrics-decision__journey li::after { position:absolute; top:-.45rem; right:-1rem; content:"→"; color:var(--deck-soft); font-size:1.2rem; }
.metrics-decision__journey li:last-child { border-top-color:var(--deck-evidence); }
.metrics-decision__journey li:last-child::after { content:""; }
.metrics-decision__journey span { color:var(--deck-soft); font-size:.75rem; font-weight:800; letter-spacing:.1em; }
.metrics-decision__journey strong { display:block; margin-top:.5rem; font-family:var(--deck-font-display); font-size:1.35rem; letter-spacing:-.035em; }
.metrics-decision__journey p { max-width:16ch; margin:.45rem 0 0; font-size:.96rem; line-height:1.34; }
.metrics-decision__questions {
  display:grid;
  grid-template-columns:1fr auto 1.25fr auto 1fr;
  align-items:center;
  gap:.8rem;
  margin-top:.8rem;
  padding:1rem 0;
  border-top:1px solid var(--deck-rule);
  border-bottom:1px solid var(--deck-rule);
}
.metrics-decision__questions strong { font-size:1rem; line-height:1.3; }
.metrics-decision__questions span { color:var(--deck-accent-light); }
.metrics-decision figcaption { margin-top:.8rem; color:var(--deck-evidence); font-size:.96rem; font-weight:700; }
@media (max-width:700px) {
  .metrics-decision__journey { grid-template-columns:repeat(2,minmax(0,1fr)); }
  .metrics-decision__questions { grid-template-columns:1fr; }
  .metrics-decision__questions span { transform:rotate(90deg); }
}
</style>
