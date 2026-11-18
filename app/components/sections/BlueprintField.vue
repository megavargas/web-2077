<script setup lang="ts">
/**
 * Ilustración decorativa (cabecera de Sectores): alzado técnico de torres de oficinas,
 * a línea fina, estático. Ejes de replanteo, muro cortina, cotas y terreno rayado.
 * Solo tokens de color (stroke-*), sin acento.
 */
const W = 1200
const H = 900
const GROUND = 820

const axes = [
  { x: 180, label: 'A' },
  { x: 400, label: 'B' },
  { x: 620, label: 'C' },
  { x: 840, label: 'D' },
  { x: 1060, label: 'E' },
]

/** Volúmenes: x, ancho, cota superior, paso de montantes y de forjados. */
const volumes = [
  { x: 180, w: 220, top: 600, col: 27.5, floor: 30 }, // podio
  { x: 440, w: 360, top: 200, col: 24, floor: 26 }, // torre principal
  { x: 480, w: 280, top: 110, col: 28, floor: 30 }, // coronación
  { x: 840, w: 220, top: 380, col: 27.5, floor: 26 }, // torre secundaria
]

function range(from: number, to: number, step: number) {
  const out: number[] = []
  for (let v = from + step; v < to - 0.5; v += step) out.push(v)
  return out
}

const hatch = range(120, 1140, 18)
</script>

<template>
  <div class="pointer-events-none select-none" aria-hidden="true">
    <svg
      :viewBox="`0 0 ${W} ${H}`"
      preserveAspectRatio="xMidYMid meet"
      class="h-full w-full"
      role="presentation"
      fill="none"
      stroke-width="1"
    >
      <!-- Ejes de replanteo -->
      <g class="stroke-graphite-border">
        <line
          v-for="a in axes"
          :key="`axis-${a.label}`"
          :x1="a.x"
          :x2="a.x"
          y1="66"
          :y2="H"
          stroke-dasharray="14 6 2 6"
        />
        <circle v-for="a in axes" :key="`c-${a.label}`" :cx="a.x" cy="48" r="16" />
      </g>
      <g class="fill-steel-mid font-mono" font-size="14" text-anchor="middle">
        <text v-for="a in axes" :key="`t-${a.label}`" :x="a.x" y="53">{{ a.label }}</text>
      </g>

      <!-- Muro cortina: montantes y forjados -->
      <g v-for="(v, i) in volumes" :key="`vol-${i}`">
        <rect :x="v.x" :y="v.top" :width="v.w" :height="GROUND - v.top" class="fill-void-black" />
        <g class="stroke-graphite-border">
          <line
            v-for="x in range(v.x, v.x + v.w, v.col)"
            :key="`m-${x}`"
            :x1="x"
            :x2="x"
            :y1="v.top"
            :y2="GROUND"
          />
          <line
            v-for="y in range(v.top, GROUND, v.floor)"
            :key="`f-${y}`"
            :x1="v.x"
            :x2="v.x + v.w"
            :y1="y"
            :y2="y"
          />
        </g>
        <rect :x="v.x" :y="v.top" :width="v.w" :height="GROUND - v.top" class="stroke-steel-mid" />
      </g>
      <!-- Mástil -->
      <line x1="620" x2="620" y1="110" y2="40" class="stroke-steel-mid" />

      <!-- Terreno -->
      <line x1="100" :x2="W" :y1="GROUND" :y2="GROUND" class="stroke-fog-light" />
      <g class="stroke-graphite-border">
        <line
          v-for="x in hatch"
          :key="`h-${x}`"
          :x1="x"
          :x2="x - 14"
          :y1="GROUND + 2"
          :y2="GROUND + 16"
        />
      </g>

      <!-- Cotas -->
      <g class="stroke-steel-mid">
        <line x1="1110" x2="1110" y1="110" :y2="GROUND" />
        <line x1="1102" x2="1118" y1="118" y2="102" />
        <line x1="1102" x2="1118" :y1="GROUND + 8" :y2="GROUND - 8" />
        <line x1="440" x2="800" :y1="GROUND + 50" :y2="GROUND + 50" />
        <line x1="432" x2="448" :y1="GROUND + 58" :y2="GROUND + 42" />
        <line x1="792" x2="808" :y1="GROUND + 58" :y2="GROUND + 42" />
      </g>
    </svg>
  </div>
</template>
