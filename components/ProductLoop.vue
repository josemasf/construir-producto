<template>
  <div class="product-loop" role="img" aria-label="Ciclo: Research, Plan, Implement, Measure, y vuelta a Research">
    <div class="product-loop__center">CRITERIO<br>DE PRODUCTO</div>
    <div v-for="(step, index) in ['Research', 'Plan', 'Implement', 'Measure']" :key="step" class="product-loop__step" :class="`product-loop__step--${index + 1}`">
      <span>0{{ index + 1 }}</span><strong>{{ step }}</strong>
    </div>
    <div class="product-loop__return" aria-hidden="true">↺</div>
  </div>
</template>

<style scoped>
.product-loop { position: relative; width: min(30rem, 76vw); aspect-ratio: 1.55; margin: 1.6rem auto 0; border: 1px solid rgba(167, 139, 250, .45); border-radius: 50%; }
.product-loop__center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #f8fafc; font-family: "Iowan Old Style", Georgia, serif; font-size: 1.3rem; font-weight: 700; letter-spacing: -.04em; line-height: 1; text-align: center; }
.product-loop__step { position: absolute; display: grid; gap: .1rem; color: #ddd6fe; }
.product-loop__step span { font-size: .56rem; font-weight: 800; letter-spacing: .12em; }
.product-loop__step strong { font-family: "Iowan Old Style", Georgia, serif; font-size: 1.45rem; letter-spacing: -.04em; }
.product-loop__step--1 { top: -1.1rem; left: 15%; }.product-loop__step--2 { top: .45rem; right: 3%; }.product-loop__step--3 { right: 15%; bottom: -1.1rem; }.product-loop__step--4 { bottom: .45rem; left: 2%; }
.product-loop__return { position: absolute; right: 50%; bottom: -1.1rem; color: #f97316; font-size: 1.45rem; }
</style>
