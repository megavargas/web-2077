<script lang="ts">
// Fuera de <script setup>: defineProps solo puede usar valores del ámbito del módulo
export type Cluster = { x: number; y: number; s: number; n: number; z: number; accent?: boolean }

const heroClusters: Cluster[] = [
  { x: 380, y: 300, s: 70, n: 150, z: 0.5 },
  { x: 640, y: 210, s: 55, n: 110, z: 0.3 },
  { x: 900, y: 330, s: 85, n: 170, z: 0.7 },
  { x: 520, y: 560, s: 65, n: 130, z: 0.9 },
  { x: 1020, y: 640, s: 60, n: 120, z: 0.6 },
  { x: 260, y: 690, s: 50, n: 90, z: 0.4 },
  { x: 760, y: 470, s: 48, n: 140, z: 1, accent: true },
]
</script>

<script setup lang="ts">
/**
 * Espacio de embeddings: nube de puntos agrupada en clústeres, como la proyección de cómo
 * un modelo organiza el significado. En el hero, un clúster en cian marcado: tu contexto.
 * Reutilizable como fondo sutil (sin marca, sin perspectiva) en otras secciones.
 */
const {
  clusters = heroClusters,
  seed = 7,
  width = 1200,
  height = 900,
  noise = 260,
  grid = true,
  tilt = true,
  highlight = true,
} = defineProps<{
  clusters?: Cluster[]
  /** Semilla del generador: misma salida en servidor y cliente (sin hydration mismatch) */
  seed?: number
  width?: number
  height?: number
  /** Puntos sueltos de fondo */
  noise?: number
  grid?: boolean
  /** Perspectiva lateral (solo hero) */
  tilt?: boolean
  /** Clúster cian con marca de selección */
  highlight?: boolean
}>()

const W = width
const H = height
const rand = seededRandom(seed)

type Point = {
  x: number
  y: number
  r: number
  o: number
  accent: boolean
  blink: boolean
  delay: number
}

const points: Point[] = []
for (const c of clusters) {
  const accent = highlight && Boolean(c.accent)
  for (let i = 0; i < c.n; i++) {
    const z = Math.min(1, Math.max(0.1, c.z + gaussian(rand) * 0.15))
    points.push({
      x: r1(c.x + gaussian(rand) * c.s),
      y: r1(c.y + gaussian(rand) * c.s * 0.8),
      r: r1(0.8 + z * 2.4),
      o: r1(0.25 + z * 0.6),
      accent,
      blink: accent && rand() < 0.25,
      delay: Math.round(rand() * 4000),
    })
  }
}
// Puntos sueltos de fondo
for (let i = 0; i < noise; i++) {
  points.push({
    x: r1(rand() * W),
    y: r1(rand() * H),
    r: 0.9,
    o: 0.3,
    accent: false,
    blink: false,
    delay: 0,
  })
}
// Los puntos cian se pintan los últimos (encima)
points.sort((a, b) => Number(a.accent) - Number(b.accent))

const target = highlight ? clusters.find((c) => c.accent) : undefined
</script>

<template>
  <div class="pointer-events-none select-none" aria-hidden="true">
    <div
      class="h-full w-full origin-left"
      :class="tilt && '[transform:perspective(1600px)_rotateY(-14deg)]'"
    >
      <svg :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="xMidYMid slice" class="h-full w-full">
        <!-- Retícula de referencia -->
        <g v-if="grid" class="stroke-graphite-border" stroke-width="1" opacity="0.5">
          <line v-for="x in 7" :key="`v${x}`" :x1="x * 150" y1="0" :x2="x * 150" :y2="H" />
          <line v-for="y in 5" :key="`h${y}`" x1="0" :y1="y * 150" :x2="W" :y2="y * 150" />
        </g>
        <circle
          v-for="(p, i) in points"
          :key="i"
          :cx="p.x"
          :cy="p.y"
          :r="p.r"
          :opacity="p.accent ? 1 : p.o"
          :class="[
            p.accent ? 'fill-accent' : 'fill-fog-light',
            p.blink && 'motion-safe:animate-blink',
          ]"
          :style="p.blink ? { animationDelay: `${p.delay}ms` } : undefined"
        />
        <!-- Marca de "tu contexto": cuadro de selección con esquinas, estilo lectura de sistema -->
        <g v-if="target" class="stroke-accent" stroke-width="1.5" fill="none">
          <path
            v-for="(d, i) in [
              `M${target.x - 140},${target.y - 95}h24M${target.x - 140},${target.y - 95}v24`,
              `M${target.x + 140},${target.y - 95}h-24M${target.x + 140},${target.y - 95}v24`,
              `M${target.x - 140},${target.y + 95}h24M${target.x - 140},${target.y + 95}v-24`,
              `M${target.x + 140},${target.y + 95}h-24M${target.x + 140},${target.y + 95}v-24`,
            ]"
            :key="i"
            :d="d"
          />
        </g>
      </svg>
    </div>
  </div>
</template>
