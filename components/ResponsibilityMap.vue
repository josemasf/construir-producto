<template>
  <figure class="responsibility-map" aria-label="Con usuarios la responsabilidad se amplía desde construir hasta operar, observar, soportar y priorizar">
    <div class="responsibility-map__before">
      <small>SIN USUARIOS</small>
      <strong>Construir</strong>
    </div>
    <div class="responsibility-map__arrow" aria-hidden="true">→</div>
    <div class="responsibility-map__after">
      <small>CON USUARIOS</small>
      <strong>Construir + cuidar</strong>
      <div class="responsibility-map__branches">
        <span>Operar</span>
        <span>Observar</span>
        <span>Soportar</span>
        <span>Priorizar</span>
      </div>
    </div>
    <figcaption>La calidad técnica deja de afectar solo al repositorio: alguien depende de que funcione.</figcaption>
  </figure>
</template>

<style scoped>
.responsibility-map {
  display:grid;
  grid-template-columns:minmax(0,.7fr) 4rem minmax(0,1.3fr);
  align-items:center;
  gap:1.3rem;
  width:min(58rem,100%);
  margin:1.1rem 0 0;
}
.responsibility-map small { display:block; margin-bottom:.7rem; color:var(--deck-soft); font-size:.78rem; font-weight:800; letter-spacing:.1em; }
.responsibility-map strong { font-family:var(--deck-font-display); font-size:2rem; letter-spacing:-.045em; }
.responsibility-map__before { padding:1rem 0 1rem 1.2rem; border-left:2px solid var(--deck-rule); }
.responsibility-map__arrow { color:var(--deck-accent-light); font-size:2.4rem; text-align:center; }
.responsibility-map__after { padding:1rem 0 1rem 1.2rem; border-left:3px solid var(--deck-accent); }
.responsibility-map__after small { color:var(--deck-accent-light); }
.responsibility-map__branches { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.55rem 1.4rem; margin-top:.75rem; padding-top:.7rem; border-top:1px solid var(--deck-rule); }
.responsibility-map__branches span { color:var(--deck-muted); font-size:1.08rem; font-weight:700; }
.responsibility-map figcaption { grid-column:1/-1; margin-top:.6rem; color:var(--deck-muted); font-size:1rem; }
</style>
