<template>
  <figure class="product-loop">
    <img
      class="product-loop__image"
      src="/images/product-loop-criterion.png"
      alt="Ciclo de producto continuo: conocer a las personas, planificar, implementar y medir se conectan en un bucle guiado por un compás central que representa el criterio de producto."
    >
    <span class="product-loop__phase product-loop__phase--research">Research</span>
    <span class="product-loop__phase product-loop__phase--plan">Plan</span>
    <span class="product-loop__phase product-loop__phase--implement">Implement</span>
    <span class="product-loop__phase product-loop__phase--measure">Measure</span>
  </figure>
</template>

<style scoped>
.product-loop { position:relative; width:min(48rem,78vw); margin:-.65rem auto 0; }
.product-loop__image { display:block; width:100%; height:auto; max-height:calc(100vh - 15rem); object-fit:contain; }
.product-loop__phase { position:absolute; z-index:1; display:inline-flex; align-items:center; padding:.42em .62em .46em; border-bottom:2px solid #facc15; background:rgba(11,17,32,.88); color:#fff; font-family:"Iowan Old Style","Palatino Linotype",Georgia,serif; font-size:clamp(.85rem,1.55vw,1.25rem); font-weight:700; letter-spacing:-.035em; line-height:1; box-shadow:0 5px 15px rgba(2,6,23,.28); }
.product-loop__phase::before { content:""; display:inline-block; width:.42em; height:.42em; margin:0 .42em .08em 0; border-radius:50%; background:#facc15; box-shadow:0 0 0 3px rgba(250,204,21,.14); }
.product-loop__phase--research { top:11%; left:22%; }.product-loop__phase--plan { top:11%; left:68%; }.product-loop__phase--implement { top:75%; left:68%; }.product-loop__phase--measure { top:75%; left:22%; }
@media (max-width:700px) { .product-loop { width:min(42rem,94vw); margin-top:-.25rem; }.product-loop__image { max-height:calc(100vh - 12rem); }.product-loop__phase { font-size:clamp(.72rem,3vw,1rem); } }
</style>
