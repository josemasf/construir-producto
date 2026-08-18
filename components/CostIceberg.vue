<template>
  <figure
    class="iceberg"
    role="img"
    aria-label="El coste de una funcionalidad: construir la primera versión es visible; mantener, probar, documentar, migrar, soportar, explicar y refactorizar permanecen bajo la superficie."
  >
    <svg class="iceberg__art" viewBox="0 0 1120 620" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g v-click class="iceberg__tip">
        <polygon class="iceberg__tip-shape" points="560,40 755,242 365,242" />
        <path class="iceberg__tip-facet" d="M560 40 755 242H560Z" />
        <text class="iceberg__overline" x="560" y="164" text-anchor="middle">LO VISIBLE</text>
        <text class="iceberg__build" x="560" y="203" text-anchor="middle">Construir</text>
        <text class="iceberg__version" x="560" y="226" text-anchor="middle">la primera versión</text>
      </g>

      <g v-click class="iceberg__surface">
        <line x1="80" y1="252" x2="1040" y2="252" />
      </g>

      <g v-click class="iceberg__depth">
        <path class="iceberg__mass" d="M365 252H755L892 321 803 549 670 586H450L317 549 228 321Z" />
        <path class="iceberg__facet iceberg__facet--left" d="M365 252 560 586H450L317 549 228 321Z" />
        <path class="iceberg__facet iceberg__facet--right" d="M755 252 892 321 803 549 670 586 560 586Z" />
      </g>

      <g v-click class="iceberg__permanent">
        <text class="iceberg__overline iceberg__overline--depth" x="560" y="316" text-anchor="middle">EL COSTE QUE PERMANECE</text>
      </g>

      <g class="iceberg__costs">
        <text v-click class="iceberg__cost" x="385" y="374" text-anchor="middle">Mantener</text>
        <text v-click class="iceberg__cost" x="560" y="374" text-anchor="middle">Probar</text>
        <text v-click class="iceberg__cost" x="735" y="374" text-anchor="middle">Documentar</text>
        <text v-click class="iceberg__cost" x="415" y="436" text-anchor="middle">Migrar</text>
        <text v-click class="iceberg__cost" x="560" y="436" text-anchor="middle">Soportar</text>
        <text v-click class="iceberg__cost" x="705" y="436" text-anchor="middle">Explicar</text>
      </g>

      <g v-click class="iceberg__refactor">
        <text x="560" y="522" text-anchor="middle">Refactorizar</text>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.iceberg { width:min(100%,68rem); margin:-.45rem auto 0; }
.iceberg__art { display:block; width:auto; max-width:100%; height:min(50vh,23rem); margin:0 auto; overflow:visible; }
.iceberg__tip-shape { fill:#5eead4; }
.iceberg__tip-facet { fill:#99f6e4; opacity:.5; }
.iceberg__mass { fill:#4c347c; }
.iceberg__facet { opacity:.22; }
.iceberg__facet--left { fill:#9b7bc8; }
.iceberg__facet--right { fill:#1e173e; }
.iceberg__surface line { stroke:#bae6fd; stroke-width:4; vector-effect:non-scaling-stroke; }
.iceberg__overline { fill:#08343c; font-family:"Aptos","Segoe UI",sans-serif; font-size:14px; font-weight:800; letter-spacing:3px; }
.iceberg__overline--depth { fill:#ede9fe; }
.iceberg__build { fill:#062c36; font-family:"Iowan Old Style","Palatino Linotype",Georgia,serif; font-size:46px; font-weight:700; letter-spacing:-2px; }
.iceberg__version { fill:#08343c; font-family:"Aptos","Segoe UI",sans-serif; font-size:16px; font-weight:700; }
.iceberg__cost { fill:#fff7ed; font-family:"Aptos","Segoe UI",sans-serif; font-size:25px; font-weight:700; letter-spacing:-.6px; }
.iceberg__refactor text { fill:#fdba74; font-family:"Iowan Old Style","Palatino Linotype",Georgia,serif; font-size:37px; font-weight:700; letter-spacing:-1.5px; }
@media (max-width:700px) { .iceberg { margin-top:.25rem; } .iceberg__art { height:auto; width:100%; } .iceberg__cost { font-size:22px; } }
</style>
