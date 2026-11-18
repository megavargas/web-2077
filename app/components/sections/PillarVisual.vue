<script setup lang="ts">
/**
 * Ilustración decorativa de la cabecera de cada pilar: diagrama técnico a línea fina,
 * estático, en grises con un único elemento destacado en el color de acento.
 *  - strategy: matriz de priorización (impacto/esfuerzo) con el caso de uso elegido
 *  - data: arquitectura de datos (fuentes → plataforma → consumo) con un flujo destacado
 *  - intelligence: histórico en barras y previsión con banda de confianza
 *  - ai: red de agentes/neuronas por capas con el camino de decisión destacado
 * Semilla fija → SVG idéntico en servidor y cliente.
 */
const { pillar } = defineProps<{ pillar: 'strategy' | 'data' | 'intelligence' | 'ai' }>()

const W = 1200
const H = 900

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
const range = (n: number) => Array.from({ length: n }, (_, i) => i)

/* Estrategia: matriz 2×2 */
const M = { x0: 200, x1: 1100, y0: 800, y1: 120 }
const mx = (M.x0 + M.x1) / 2
const my = (M.y0 + M.y1) / 2
const dots = range(22).map(() => ({
  x: M.x0 + 40 + rand() * (M.x1 - M.x0 - 80),
  y: M.y1 + 40 + rand() * (M.y0 - M.y1 - 80),
  r: 6 + rand() * 16,
}))
const chosen = { x: 420, y: 250, r: 22 }

/* Datos: fuentes → plataforma → consumo */
const sources = range(5).map((i) => ({ x: 140, y: 170 + i * 130 }))
const outputs = range(3).map((i) => ({ x: 960, y: 260 + i * 170 }))
const core = { x: 520, y: 300, w: 220, h: 300 }
const pipe = (a: { x: number; y: number }, b: { x: number; y: number }) => {
  const mxp = (a.x + b.x) / 2
  return `M ${a.x} ${a.y} C ${mxp} ${a.y} ${mxp} ${b.y} ${b.x} ${b.y}`
}

/* Inteligencia: barras + previsión */
const BX0 = 160
const BY0 = 800
const BAR = 46
const bars = range(10).map((i) => ({
  x: BX0 + i * 64,
  h: 160 + i * 26 + (rand() - 0.5) * 120,
}))
const lastBar = bars[bars.length - 1]!
const fStart = { x: lastBar.x + BAR / 2, y: BY0 - lastBar.h }
const forecast = range(5).map((i) => ({ x: fStart.x + i * 90, y: fStart.y - i * 55 }))
const band = (() => {
  const up = forecast.map((p, i) => `${p.x} ${p.y - i * 22}`)
  const down = [...forecast]
    .reverse()
    .map((p, i, arr) => `${p.x} ${p.y + (arr.length - 1 - i) * 22}`)
  return `M ${[...up, ...down].join(' L ')} Z`
})()
const fEnd = forecast[forecast.length - 1]!
const toPath = (pts: { x: number; y: number }[]) =>
  pts.map((p, i) => `${i ? 'L' : 'M'} ${p.x} ${p.y}`).join(' ')

/* IA: red por capas */
const layers = [4, 6, 6, 3].map((n, li) =>
  range(n).map((i) => ({ x: 200 + li * 280, y: 450 + (i - (n - 1) / 2) * 120 })),
)
const edges = layers
  .slice(0, -1)
  .flatMap((layer, li) => layer.flatMap((a) => layers[li + 1]!.map((b) => ({ a, b }))))
const path = [layers[0]![1]!, layers[1]![3]!, layers[2]![2]!, layers[3]![1]!]
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
      <!-- ESTRATEGIA -->
      <g v-if="pillar === 'strategy'">
        <g class="stroke-graphite-border" stroke-dasharray="2 6">
          <line :x1="M.x0" :x2="M.x1" :y1="my" :y2="my" />
          <line :x1="mx" :x2="mx" :y1="M.y1" :y2="M.y0" />
        </g>
        <g class="stroke-steel-mid">
          <line :x1="M.x0" :x2="M.x0" :y1="M.y0" :y2="M.y1 - 40" />
          <line :x1="M.x0" :x2="M.x1 + 40" :y1="M.y0" :y2="M.y0" />
          <path
            :d="`M ${M.x0 - 6} ${M.y1 - 28} L ${M.x0} ${M.y1 - 40} L ${M.x0 + 6} ${M.y1 - 28}`"
          />
          <path
            :d="`M ${M.x1 + 28} ${M.y0 - 6} L ${M.x1 + 40} ${M.y0} L ${M.x1 + 28} ${M.y0 + 6}`"
          />
        </g>
        <circle
          v-for="(d, i) in dots"
          :key="`d-${i}`"
          :cx="d.x"
          :cy="d.y"
          :r="d.r"
          :class="i % 3 ? 'stroke-graphite-border' : 'stroke-steel-mid opacity-70'"
        />
        <g class="stroke-accent">
          <line
            :x1="M.x0"
            :x2="chosen.x"
            :y1="chosen.y"
            :y2="chosen.y"
            stroke-dasharray="4 4"
            class="opacity-60"
          />
          <line
            :x1="chosen.x"
            :x2="chosen.x"
            :y1="chosen.y"
            :y2="M.y0"
            stroke-dasharray="4 4"
            class="opacity-60"
          />
          <circle
            :cx="chosen.x"
            :cy="chosen.y"
            :r="chosen.r"
            class="fill-accent opacity-20"
            stroke="none"
          />
          <circle :cx="chosen.x" :cy="chosen.y" :r="chosen.r" stroke-width="2.5" />
          <circle :cx="chosen.x" :cy="chosen.y" :r="chosen.r + 14" class="opacity-60" />
        </g>
      </g>

      <!-- DATOS -->
      <g v-else-if="pillar === 'data'">
        <g class="stroke-graphite-border">
          <path
            v-for="(s, i) in sources"
            :key="`ps-${i}`"
            :d="pipe({ x: s.x + 120, y: s.y }, { x: core.x, y: core.y + 40 + i * 55 })"
          />
          <path
            v-for="(o, i) in outputs"
            :key="`po-${i}`"
            :d="pipe({ x: core.x + core.w, y: core.y + 80 + i * 70 }, { x: o.x, y: o.y })"
          />
        </g>
        <g class="stroke-steel-mid">
          <rect
            v-for="(s, i) in sources"
            :key="`s-${i}`"
            :x="s.x"
            :y="s.y - 30"
            width="120"
            height="60"
          />
          <!-- Plataforma: capas -->
          <rect :x="core.x" :y="core.y" :width="core.w" :height="core.h" />
          <line :x1="core.x" :x2="core.x + core.w" :y1="core.y + 100" :y2="core.y + 100" />
          <line :x1="core.x" :x2="core.x + core.w" :y1="core.y + 200" :y2="core.y + 200" />
          <!-- Consumo: cuadros de mando -->
          <rect
            v-for="(o, i) in outputs"
            :key="`o-${i}`"
            :x="o.x"
            :y="o.y - 45"
            width="140"
            height="90"
          />
        </g>
        <g class="stroke-graphite-border">
          <line
            v-for="(s, i) in sources"
            :key="`sl-${i}`"
            :x1="s.x + 16"
            :x2="s.x + 80"
            :y1="s.y"
            :y2="s.y"
          />
          <template v-for="(o, i) in outputs" :key="`ob-${i}`">
            <line
              v-for="k in 4"
              :key="k"
              :x1="o.x + 16 + k * 24"
              :x2="o.x + 16 + k * 24"
              :y1="o.y + 30"
              :y2="o.y + 30 - k * 12"
            />
          </template>
          <line
            v-for="k in 6"
            :key="`cl-${k}`"
            :x1="core.x + 20"
            :x2="core.x + core.w - 20"
            :y1="core.y + 30 + (k - 1) * 45"
            :y2="core.y + 30 + (k - 1) * 45"
            stroke-dasharray="2 6"
          />
        </g>
        <g class="stroke-accent" stroke-width="2.5">
          <path
            :d="pipe({ x: sources[2]!.x + 120, y: sources[2]!.y }, { x: core.x, y: core.y + 150 })"
          />
          <path
            :d="
              pipe({ x: core.x + core.w, y: core.y + 150 }, { x: outputs[1]!.x, y: outputs[1]!.y })
            "
          />
          <line
            :x1="core.x"
            :x2="core.x + core.w"
            :y1="core.y + 150"
            :y2="core.y + 150"
            stroke-dasharray="6 6"
          />
          <circle :cx="outputs[1]!.x" :cy="outputs[1]!.y" r="6" class="fill-accent" stroke="none" />
        </g>
      </g>

      <!-- INTELIGENCIA -->
      <g v-else-if="pillar === 'intelligence'">
        <g class="stroke-graphite-border" stroke-dasharray="2 6">
          <line
            v-for="k in 6"
            :key="`g-${k}`"
            :x1="BX0 - 20"
            :x2="1120"
            :y1="BY0 - k * 110"
            :y2="BY0 - k * 110"
          />
        </g>
        <g class="stroke-steel-mid">
          <line :x1="BX0 - 20" :x2="1140" :y1="BY0" :y2="BY0" />
          <rect
            v-for="(b, i) in bars"
            :key="`b-${i}`"
            :x="b.x"
            :y="BY0 - b.h"
            :width="BAR"
            :height="b.h"
            :class="i % 2 ? 'opacity-60' : ''"
          />
        </g>
        <path
          :d="toPath(bars.map((b) => ({ x: b.x + BAR / 2, y: BY0 - b.h })))"
          class="stroke-graphite-border"
        />
        <line
          :x1="fStart.x"
          :x2="fStart.x"
          :y1="BY0"
          y2="100"
          class="stroke-graphite-border"
          stroke-dasharray="14 6 2 6"
        />
        <path :d="band" class="fill-accent opacity-10" stroke="none" />
        <g class="stroke-accent">
          <path :d="toPath(forecast)" stroke-width="2.5" stroke-dasharray="10 6" />
          <circle :cx="fEnd.x" :cy="fEnd.y" r="6" class="fill-accent" stroke="none" />
          <circle :cx="fEnd.x" :cy="fEnd.y" r="20" class="opacity-60" />
        </g>
      </g>

      <!-- IA -->
      <g v-else>
        <g class="stroke-graphite-border">
          <line
            v-for="(e, i) in edges"
            :key="`e-${i}`"
            :x1="e.a.x"
            :y1="e.a.y"
            :x2="e.b.x"
            :y2="e.b.y"
          />
        </g>
        <g class="fill-void-black stroke-steel-mid">
          <template v-for="(layer, li) in layers" :key="`l-${li}`">
            <circle v-for="(n, i) in layer" :key="`n-${li}-${i}`" :cx="n.x" :cy="n.y" r="16" />
          </template>
        </g>
        <g class="stroke-accent">
          <path :d="toPath(path)" stroke-width="2.5" />
          <circle
            v-for="(n, i) in path"
            :key="`p-${i}`"
            :cx="n.x"
            :cy="n.y"
            r="16"
            class="fill-void-black"
            stroke-width="2.5"
          />
          <circle :cx="path[3]!.x" :cy="path[3]!.y" r="6" class="fill-accent" stroke="none" />
          <circle :cx="path[3]!.x" :cy="path[3]!.y" r="30" class="opacity-60" />
        </g>
      </g>
    </svg>
  </div>
</template>
