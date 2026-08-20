<template>
  <figure class="metrics-decision" role="img" aria-label="La analítica útil parte de una pregunta, observa una señal, interpreta el comportamiento y conduce a una decisión">
    <div class="metrics-decision__track" aria-hidden="true"></div>
    <ol class="metrics-decision__steps">
      <li class="metrics-decision__step metrics-decision__step--question"><span>01</span><strong>Pregunta</strong><p>¿Qué necesito aprender?</p></li>
      <li class="metrics-decision__step metrics-decision__step--signal"><span>02</span><strong>Señal</strong><p>Uso, abandono o recurrencia.</p></li>
      <li class="metrics-decision__step metrics-decision__step--meaning"><span>03</span><strong>Lectura</strong><p>¿Qué está ocurriendo de verdad?</p></li>
      <li class="metrics-decision__step metrics-decision__step--decision"><span>04</span><strong>Decisión</strong><p>Seguir, cambiar o parar.</p></li>
    </ol>
    <figcaption class="metrics-decision__caption">Una métrica solo merece existir si puede cambiar una decisión.</figcaption>
  </figure>
</template>

<style scoped>
.metrics-decision { position:relative; max-width:61rem; margin:2.2rem auto 0; padding:1.7rem 0 .35rem; }
.metrics-decision__track { position:absolute; top:3.25rem; right:9%; left:9%; height:1px; background:linear-gradient(90deg,#64748b 0%,#a78bfa 32%,#facc15 66%,#fb923c 100%); }
.metrics-decision__track::after { content:""; position:absolute; top:-.22rem; right:-.05rem; width:.52rem; height:.52rem; border-top:1px solid #fb923c; border-right:1px solid #fb923c; transform:rotate(45deg); }
.metrics-decision__steps { position:relative; display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; margin:0; padding:0; list-style:none; }
.metrics-decision__step { position:relative; padding:2.65rem .65rem .7rem; color:#cbd5e1; text-align:center; }
.metrics-decision__step::before { content:""; position:absolute; top:1.36rem; left:50%; width:.82rem; height:.82rem; border:3px solid #0b1120; border-radius:50%; background:#64748b; transform:translateX(-50%); box-shadow:0 0 0 1px currentColor; }
.metrics-decision__step span { display:block; margin-bottom:.45rem; color:#94a3b8; font-size:.58rem; font-weight:800; letter-spacing:.14em; }
.metrics-decision__step strong { display:block; color:#fff; font-family:"Iowan Old Style","Palatino Linotype",Georgia,serif; font-size:1.65rem; letter-spacing:-.045em; line-height:1; }
.metrics-decision__step p { margin:.38rem auto 0; max-width:14ch; color:#cbd5e1; font-size:.82rem; line-height:1.3; }
.metrics-decision__step--signal { color:#a78bfa; }.metrics-decision__step--signal::before { background:#a78bfa; }
.metrics-decision__step--meaning { color:#facc15; }.metrics-decision__step--meaning::before { background:#facc15; }
.metrics-decision__step--decision { color:#fb923c; }.metrics-decision__step--decision::before { background:#fb923c; }
.metrics-decision__caption { margin-top:1.25rem; color:#fdba74; font-family:"Iowan Old Style","Palatino Linotype",Georgia,serif; font-size:1.25rem; font-weight:700; letter-spacing:-.03em; text-align:center; }
@media (max-width:700px) { .metrics-decision { margin-top:1rem; padding-top:0; }.metrics-decision__track { top:9%; bottom:16%; left:1rem; width:1px; height:auto; background:linear-gradient(#64748b 0%,#a78bfa 32%,#facc15 66%,#fb923c 100%); }.metrics-decision__track::after { top:auto; right:-.22rem; bottom:0; transform:rotate(135deg); }.metrics-decision__steps { grid-template-columns:1fr; gap:0; }.metrics-decision__step { padding:0 0 .9rem 2.25rem; text-align:left; }.metrics-decision__step::before { top:.12rem; left:1rem; }.metrics-decision__step p { max-width:none; margin-top:.25rem; }.metrics-decision__caption { margin:.55rem 0 0 2.25rem; text-align:left; } }
</style>
