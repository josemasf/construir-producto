<template>
  <div class="iceberg" role="img" aria-label="El coste de una funcionalidad: construir es visible; mantener, probar, documentar, migrar, soportar, explicar y refactorizar permanecen ocultos">
    <div class="iceberg__waterline">LO VISIBLE</div>
    <div class="iceberg__tip"><strong>Construir</strong><span>la primera versión</span></div>
    <div class="iceberg__body">
      <small>LO QUE SE QUEDA CONTIGO</small>
      <div><span>Mantener</span><span>Probar</span><span>Documentar</span><span>Migrar</span><span>Soportar</span><span>Explicar</span><span>Refactorizar</span></div>
    </div>
  </div>
</template>

<style scoped>
.iceberg { position: relative; max-width: 43rem; margin: 1.5rem auto 0; padding-top: 1.5rem; text-align: center; }
.iceberg__waterline { position: absolute; top: 4rem; right: 0; left: 0; color: #94a3b8; font-size: .55rem; font-weight: 800; letter-spacing: .14em; }
.iceberg__tip { position: relative; z-index: 1; display: grid; justify-items: center; width: 14rem; margin: 0 auto; padding: 1rem 1rem 1.45rem; clip-path: polygon(50% 0, 100% 100%, 0 100%); background: #5eead4; color: #0f172a; }
.iceberg__tip strong { margin-top: .35rem; font-family: "Iowan Old Style", Georgia, serif; font-size: 1.55rem; letter-spacing: -.04em; }
.iceberg__tip span { font-size: .68rem; }
.iceberg__body { padding: 2.4rem 2rem 1.6rem; clip-path: polygon(7% 0, 93% 0, 80% 100%, 20% 100%); background: linear-gradient(180deg, rgba(139, 92, 246, .55), rgba(30, 41, 59, .9)); }
.iceberg__body small { color: #ddd6fe; font-size: .58rem; font-weight: 800; letter-spacing: .13em; }
.iceberg__body div { display: flex; flex-wrap: wrap; justify-content: center; gap: .55rem; margin-top: .9rem; }
.iceberg__body span { padding: .3rem .55rem; border: 1px solid rgba(255, 255, 255, .2); color: #fff; font-size: .76rem; }
</style>
