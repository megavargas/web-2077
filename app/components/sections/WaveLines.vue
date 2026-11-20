<script setup lang="ts">
/**
 * Ilustración decorativa (fondo del pie): líneas onduladas que cruzan la pantalla de izquierda a
 * derecha, muy tenues, y una en el color de acento que sube más que el resto para dar énfasis.
 * Se estira a todo el ancho (preserveAspectRatio none) con trazo de 1px constante.
 * Semilla fija → SVG idéntico en servidor y cliente.
 */
const W = 1440
const H = 420
const STEP = 60
const LINES = 14

const rand = seededRandom(2016)

type Pt = { x: number; y: number }

/** Curva suave que pasa por los puntos (Catmull-Rom convertida a Bézier cúbicas). */
function smooth(pts: Pt[]) {
  let d = `M ${r1(pts[0]!.x)} ${r1(pts[0]!.y)}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i]!
    const p1 = pts[i]!
    const p2 = pts[i + 1]!
    const p3 = pts[i + 2] ?? p2
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 }
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 }
    d += ` C ${r1(c1.x)} ${r1(c1.y)} ${r1(c2.x)} ${r1(c2.y)} ${r1(p2.x)} ${r1(p2.y)}`
  }
  return d
}

/** Onda: suma de dos senos con fase y amplitud propias, sobre una línea base (y en función de x). */
function wave(base: (t: number) => number, amp: number) {
  const f1 = 1.2 + rand() * 1.2
  const f2 = 2.6 + rand() * 2
  const ph1 = rand() * Math.PI * 2
  const ph2 = rand() * Math.PI * 2
  return Array.from({ length: W / STEP + 1 }, (_, i) => {
    const x = i * STEP
    const t = x / W
    const y =
      base(t) +
      amp * Math.sin(t * Math.PI * 2 * f1 + ph1) +
      amp * 0.35 * Math.sin(t * Math.PI * 2 * f2 + ph2)
    return { x, y }
  })
}

// Haz de líneas casi paralelas en la mitad inferior, con ligera deriva
const lines = Array.from({ length: LINES }, (_, i) => {
  const y0 = 170 + i * 15
  const drift = (rand() - 0.5) * 40
  return smooth(wave((t) => y0 + drift * t, 14 + rand() * 10))
})

// La destacada: arranca abajo a la izquierda y sube con suavidad hacia la derecha
const ease = (t: number) => t * t * (3 - 2 * t)
const highlight = smooth(wave((t) => 330 - 250 * ease(t), 10))
</script>

<template>
  <svg
    :viewBox="`0 0 ${W} ${H}`"
    preserveAspectRatio="none"
    class="pointer-events-none"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <g class="stroke-bone-white opacity-4">
      <path v-for="(d, i) in lines" :key="i" :d="d" vector-effect="non-scaling-stroke" />
    </g>
    <path
      :d="highlight"
      class="stroke-accent opacity-15"
      stroke-width="1"
      vector-effect="non-scaling-stroke"
    />
  </svg>
</template>
