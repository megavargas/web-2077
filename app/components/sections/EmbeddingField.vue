<script lang="ts">
// Fuera de <script setup>: defineProps solo puede usar valores del ámbito del módulo
export type Cluster = { x: number; y: number; s: number; n: number; z: number; accent?: boolean }

const heroClusters: Cluster[] = [
  // A la izquierda, más dispersos: el campo ocupa todo el hero y el titular va encima
  { x: 110, y: 230, s: 60, n: 80, z: 0.3 },
  { x: 160, y: 470, s: 70, n: 100, z: 0.35 },
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
  noise = 340,
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

/*
 * Perspectiva calculada sobre las coordenadas (giro de 14° alrededor del borde izquierdo, como
 * hacía antes un transform 3D de CSS). Al no deformar el SVG como imagen, los puntos y las líneas
 * siguen siendo vectores nítidos y redondos a cualquier tamaño. Se reescala para llenar el ancho.
 */
const THETA = (14 * Math.PI) / 180
const DEPTH = 1600
const CY = H / 2
function rawProject(x: number, y: number) {
  const k = DEPTH / (DEPTH + x * Math.sin(THETA))
  return { x: x * Math.cos(THETA) * k, y: CY + (y - CY) * k, k }
}
const X_SCALE = W / rawProject(W, CY).x
function project(x: number, y: number) {
  if (!tilt) return { x, y, k: 1 }
  const p = rawProject(x, y)
  return { x: r1(p.x * X_SCALE), y: r1(p.y), k: p.k }
}

const drawn = points.map((pt) => {
  const p = project(pt.x, pt.y)
  return { ...pt, x: p.x, y: p.y, r: r1(pt.r * p.k) }
})

/** Retícula de referencia, también en perspectiva (las horizontales convergen a la derecha). */
const gridLines = [
  ...Array.from({ length: 7 }, (_, i) => [project((i + 1) * 150, 0), project((i + 1) * 150, H)]),
  ...Array.from({ length: 5 }, (_, i) => [project(0, (i + 1) * 150), project(W, (i + 1) * 150)]),
].map(([a, b]) => ({ x1: a!.x, y1: a!.y, x2: b!.x, y2: b!.y }))

/** Esquinas del cuadro de selección: cada brazo de 24 unidades, proyectado. */
const brackets = target
  ? [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ].map(([sx, sy]) => {
      const cx = target.x + sx! * 140
      const cy = target.y + sy! * 95
      const c = project(cx, cy)
      const h = project(cx - sx! * 24, cy)
      const v = project(cx, cy - sy! * 24)
      return `M${h.x},${h.y}L${c.x},${c.y}L${v.x},${v.y}`
    })
  : []
</script>

<template>
  <div class="pointer-events-none select-none" aria-hidden="true">
    <svg :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="xMidYMid slice" class="h-full w-full">
      <!-- Retícula de referencia -->
      <g v-if="grid" class="stroke-graphite-border" stroke-width="1" opacity="0.5">
        <line
          v-for="(l, i) in gridLines"
          :key="i"
          :x1="l.x1"
          :y1="l.y1"
          :x2="l.x2"
          :y2="l.y2"
          vector-effect="non-scaling-stroke"
        />
      </g>
      <circle
        v-for="(p, i) in drawn"
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
        <path v-for="(d, i) in brackets" :key="i" :d="d" vector-effect="non-scaling-stroke" />
      </g>
    </svg>
  </div>
</template>
