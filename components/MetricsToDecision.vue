<template>
  <figure class="metrics-decision" aria-label="Recorrido hipotético desde una recomendación hasta la salida al proveedor y la posible vuelta">
    <small>RECORRIDO OBSERVABLE · EJEMPLO HIPOTÉTICO</small>
    <ol class="metrics-decision__journey">
      <li><span>01</span><strong>Recomendación</strong></li>
      <li><span>02</span><strong>Ficha</strong></li>
      <li><span>03</span><strong>Proveedor</strong></li>
      <li><span>04</span><strong>¿Vuelve?</strong></li>
    </ol>
    <div v-click class="metrics-decision__question"><strong>¿Dónde abandona?</strong><p>¿Qué necesitamos aprender para cambiar una decisión?</p></div>
    <figcaption v-click>Un clic al proveedor es una señal. No demuestra satisfacción.</figcaption>
  </figure>
</template>

<style scoped>
.metrics-decision { width:100%; margin:1.5rem 0 0; }
.metrics-decision > small { color:var(--deck-accent-light); font-size:.82rem; font-weight:800; letter-spacing:.09em; }
.metrics-decision__journey { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:0; padding:0; margin:1.7rem 0; list-style:none; }
.metrics-decision__journey li { position:relative; display:grid; justify-items:center; gap:.7rem; margin:0; padding:0 .2rem; text-align:center; }
.metrics-decision__journey li:not(:last-child)::after { content:""; position:absolute; height:2px; top:1.35rem; left:calc(50% + 1.6rem); width:calc(100% - 3.2rem); background:var(--deck-rule); }
.metrics-decision__journey span { display:grid; place-items:center; width:2.7rem; height:2.7rem; border:2px solid var(--deck-accent); border-radius:50%; font-size:1rem; font-weight:800; }
.metrics-decision__journey li:last-child span { border-color:var(--deck-evidence); }
.metrics-decision__journey strong { font:700 1.2rem/1.2 var(--deck-font-display); }
.metrics-decision__question { text-align:center; margin:1.3rem 0 1rem; }
.metrics-decision__question strong { color:var(--deck-evidence); font:800 2.1rem/1.15 var(--deck-font-display); }
.metrics-decision__question p { margin:.45rem 0 0; font-size:1.05rem; }
.metrics-decision figcaption { color:var(--deck-muted); text-align:center; font-size:1.05rem; }
</style>
