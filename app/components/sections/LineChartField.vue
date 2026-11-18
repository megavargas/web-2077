<script setup lang="ts">
/**
 * Ilustración decorativa (cabecera de Servicios): gráfico de líneas técnico, estático.
 * Varias series en gris y una destacada en el color de acento que crece hacia la derecha.
 * Semilla fija → SVG idéntico en servidor y cliente.
 */
const W = 1200
const H = 900
const X0 = 120
const X1 = 1140
const Y0 = 800
const Y1 = 120
const STEPS = 24

function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const rand = mulberry32(2016)

/** Serie como paseo aleatorio con tendencia; v en [0, 1]. */
function series(start: number, trend: number, noise: number) {
  let v = start
  return Array.from({ length: STEPS + 1 }, (_, i) => {
    if (i > 0) v = Math.min(0.95, Math.max(0.05, v + trend + (rand() - 0.5) * noise))
    return { x: X0 + ((X1 - X0) * i) / STEPS, y: Y0 - (Y0 - Y1) * v }
  })
}
const toPath = (pts: { x: number; y: number }[]) =>
  pts.map((p, i) => `${i ? 'L' : 'M'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ')

const grey = [
  series(0.42, 0.0, 0.12),
  series(0.3, 0.004, 0.1),
  series(0.55, -0.006, 0.1),
  series(0.2, 0.002, 0.08),
]
const highlight = series(0.15, 0.032, 0.07)
const last = highlight[highlight.length - 1]!
const area = `${toPath(highlight)} L ${X1} ${Y0} L ${X0} ${Y0} Z`

const gridX = Array.from({ length: 7 }, (_, i) => X0 + ((X1 - X0) * i) / 6)
const gridY = Array.from({ length: 6 }, (_, i) => Y0 - ((Y0 - Y1) * i) / 5)
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
      <!-- Rejilla -->
      <g class="stroke-graphite-border" stroke-dasharray="2 6">
        <line v-for="x in gridX" :key="`gx-${x}`" :x1="x" :x2="x" :y1="Y1 - 40" :y2="Y0" />
        <line v-for="y in gridY" :key="`gy-${y}`" :x1="X0" :x2="X1" :y1="y" :y2="y" />
      </g>
      <!-- Ejes -->
      <g class="stroke-steel-mid">
        <line :x1="X0" :x2="X0" :y1="Y0" :y2="Y1 - 60" />
        <line :x1="X0" :x2="X1 + 20" :y1="Y0" :y2="Y0" />
        <line v-for="x in gridX" :key="`t-${x}`" :x1="x" :x2="x" :y1="Y0" :y2="Y0 + 10" />
      </g>
      <!-- Series secundarias -->
      <path
        v-for="(s, i) in grey"
        :key="`s-${i}`"
        :d="toPath(s)"
        :class="i % 2 ? 'stroke-graphite-border' : 'stroke-steel-mid opacity-60'"
      />
      <!-- Serie destacada -->
      <path :d="area" class="fill-accent opacity-10" stroke="none" />
      <path :d="toPath(highlight)" class="stroke-accent" stroke-width="2.5" />
      <line
        :x1="last.x"
        :x2="last.x"
        :y1="last.y"
        :y2="Y0"
        class="stroke-accent opacity-60"
        stroke-dasharray="4 4"
      />
      <circle :cx="last.x" :cy="last.y" r="6" class="fill-accent" stroke="none" />
      <circle :cx="last.x" :cy="last.y" r="14" class="stroke-accent opacity-60" />
    </svg>
  </div>
</template>
