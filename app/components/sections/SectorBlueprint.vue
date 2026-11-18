<script setup lang="ts">
/**
 * Ilustración decorativa de la cabecera de cada sector: dibujo técnico a línea fina,
 * estático y solo en grises (sin acento).
 *  - telco: torre de telecomunicaciones de celosía con antenas, radioenlaces y ondas
 *  - banking: alzado de fachada clásica de banco (frontón, columnas, escalinata)
 *  - insurance: distribución de pérdidas con la cola rayada, observaciones y umbral
 */
const { sector } = defineProps<{ sector: 'telco' | 'banking' | 'insurance' }>()

const W = 1200
const H = 900
const GROUND = 820

function range(from: number, to: number, step: number) {
  const out: number[] = []
  for (let v = from; v <= to + 0.5; v += step) out.push(v)
  return out
}
const hatch = range(140, 1140, 18)

/* Telco: celosía que se estrecha hacia arriba */
const CX = 640
const T_TOP = 180
const hw = (y: number) => 18 + ((110 - 18) * (y - T_TOP)) / (GROUND - T_TOP)
const levels = range(T_TOP, GROUND, 80)
const bracing = levels.slice(0, -1).map((y, i) => {
  const y2 = levels[i + 1]!
  return { y1: y, y2, a: hw(y), b: hw(y2) }
})
const waves = [70, 110, 150]

/* Banca: columnas */
const columns = range(352, 892, 108)

/* Seguros: distribución de pérdidas (curva actuarial) con la cola rayada */
const X0 = 200
const X1 = 1080
const Y_TOP = 180
const g = (t: number, k: number, r: number) => t ** k * Math.exp(-t * r)
function curve(k: number, r: number) {
  const ts = range(0, 1, 0.01)
  const max = Math.max(...ts.map((t) => g(t, k, r)))
  return ts.map((t) => ({
    t,
    x: X0 + (X1 - X0) * t,
    y: GROUND - (GROUND - Y_TOP) * (g(t, k, r) / max),
  }))
}
const model = curve(2, 8)
const observed = curve(2.3, 7.4)
const toPath = (pts: { x: number; y: number }[]) =>
  pts.map((p, i) => `${i ? 'L' : 'M'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ')
const TAIL = 0.62
const XT = X0 + (X1 - X0) * TAIL
const tail = model.filter((p) => p.t >= TAIL)
const tailArea = `${toPath(tail)} L ${X1} ${GROUND} L ${XT} ${GROUND} Z`
const tailHatch = range(XT - 200, X1, 12)
const gridX = range(X0, X1, 88)
const gridY = range(Y_TOP - 20, GROUND, 80)
const points = observed.filter((_, i) => i % 6 === 3)
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
      <!-- Eje de simetría -->
      <line
        v-if="sector !== 'insurance'"
        :x1="CX"
        :x2="CX"
        y1="0"
        :y2="H"
        stroke-dasharray="14 6 2 6"
        class="stroke-graphite-border"
      />

      <!-- TELCO -->
      <g v-if="sector === 'telco'">
        <g class="stroke-graphite-border">
          <template v-for="(b, i) in bracing" :key="`br-${i}`">
            <line :x1="CX - b.a" :x2="CX + b.a" :y1="b.y1" :y2="b.y1" />
            <line :x1="CX - b.a" :x2="CX + b.b" :y1="b.y1" :y2="b.y2" />
            <line :x1="CX + b.a" :x2="CX - b.b" :y1="b.y1" :y2="b.y2" />
          </template>
          <path
            v-for="r in waves"
            :key="`wl-${r}`"
            :d="`M ${CX - r * 0.7} ${120 - r * 0.7} A ${r} ${r} 0 0 0 ${CX - r * 0.7} ${120 + r * 0.7}`"
          />
          <path
            v-for="r in waves"
            :key="`wr-${r}`"
            :d="`M ${CX + r * 0.7} ${120 - r * 0.7} A ${r} ${r} 0 0 1 ${CX + r * 0.7} ${120 + r * 0.7}`"
          />
        </g>
        <g class="stroke-steel-mid">
          <line :x1="CX - hw(T_TOP)" :x2="CX - hw(GROUND)" :y1="T_TOP" :y2="GROUND" />
          <line :x1="CX + hw(T_TOP)" :x2="CX + hw(GROUND)" :y1="T_TOP" :y2="GROUND" />
          <line :x1="CX" :x2="CX" :y1="T_TOP" y2="70" />
          <!-- Antenas de panel -->
          <rect :x="CX - hw(210) - 16" y="200" width="12" height="64" />
          <rect :x="CX + hw(210) + 4" y="200" width="12" height="64" />
          <rect :x="CX - 6" y="190" width="12" height="54" />
          <!-- Radioenlaces -->
          <circle :cx="CX - hw(340) - 34" cy="340" r="24" />
          <circle :cx="CX + hw(420) + 34" cy="420" r="24" />
          <line :x1="CX - hw(340) - 10" :x2="CX - hw(340)" y1="340" y2="340" />
          <line :x1="CX + hw(420) + 10" :x2="CX + hw(420)" y1="420" y2="420" />
          <!-- Caseta de equipos -->
          <rect x="820" y="740" width="150" height="80" />
          <rect x="850" y="770" width="30" height="50" />
          <line x1="900" x2="950" y1="770" y2="770" />
          <line x1="900" x2="950" y1="790" y2="790" />
        </g>
      </g>

      <!-- BANCA -->
      <g v-else-if="sector === 'banking'">
        <g class="stroke-steel-mid">
          <!-- Frontón -->
          <path d="M 290 340 L 640 200 L 990 340 Z" />
          <!-- Entablamento -->
          <rect x="290" y="340" width="700" height="60" />
          <!-- Escalinata -->
          <rect x="250" y="790" width="780" height="30" />
          <rect x="270" y="760" width="740" height="30" />
          <rect x="290" y="730" width="700" height="30" />
          <!-- Columnas: fuste, basa y capitel -->
          <template v-for="x in columns" :key="`col-${x}`">
            <rect :x="x - 22" y="416" width="44" height="300" />
            <rect :x="x - 30" y="400" width="60" height="16" />
            <rect :x="x - 28" y="716" width="56" height="14" />
          </template>
        </g>
        <g class="stroke-graphite-border">
          <path d="M 340 330 L 640 216 L 940 330 Z" />
          <line x1="290" x2="990" y1="360" y2="360" />
          <line x1="290" x2="990" y1="380" y2="380" />
          <template v-for="x in columns" :key="`flute-${x}`">
            <line :x1="x - 10" :x2="x - 10" y1="420" y2="712" />
            <line :x1="x" :x2="x" y1="420" y2="712" />
            <line :x1="x + 10" :x2="x + 10" y1="420" y2="712" />
          </template>
          <!-- Puerta -->
          <rect x="604" y="560" width="72" height="170" />
          <line x1="640" x2="640" y1="560" y2="730" />
          <circle cx="640" cy="290" r="22" />
        </g>
      </g>

      <!-- SEGUROS -->
      <g v-else>
        <defs>
          <clipPath id="sector-blueprint-tail"><path :d="tailArea" /></clipPath>
        </defs>
        <g class="stroke-graphite-border" stroke-dasharray="2 6">
          <line v-for="x in gridX" :key="`gx-${x}`" :x1="x" :x2="x" :y1="Y_TOP - 20" :y2="GROUND" />
          <line v-for="y in gridY" :key="`gy-${y}`" :x1="X0" :x2="X1" :y1="y" :y2="y" />
        </g>
        <g class="stroke-graphite-border" clip-path="url(#sector-blueprint-tail)">
          <line
            v-for="x in tailHatch"
            :key="`th-${x}`"
            :x1="x"
            :x2="x + 200"
            :y1="GROUND"
            :y2="GROUND - 200"
          />
        </g>
        <g class="stroke-steel-mid">
          <!-- Ejes -->
          <line :x1="X0" :x2="X0" :y1="GROUND" :y2="Y_TOP - 60" />
          <path :d="`M ${X0 - 6} ${Y_TOP - 48} L ${X0} ${Y_TOP - 60} L ${X0 + 6} ${Y_TOP - 48}`" />
          <line
            v-for="x in gridX"
            :key="`tick-${x}`"
            :x1="x"
            :x2="x"
            :y1="GROUND"
            :y2="GROUND + 10"
          />
          <!-- Curva del modelo y umbral de la cola -->
          <path :d="toPath(model)" />
          <line :x1="XT" :x2="XT" :y1="GROUND" :y2="Y_TOP + 60" stroke-dasharray="14 6 2 6" />
          <path :d="`M ${XT - 8} ${Y_TOP + 60} L ${XT + 8} ${Y_TOP + 60}`" />
          <!-- Observaciones -->
          <circle v-for="(p, i) in points" :key="`pt-${i}`" :cx="p.x" :cy="p.y" r="4" />
        </g>
        <path :d="toPath(observed)" class="stroke-graphite-border" stroke-dasharray="6 6" />
      </g>

      <!-- Terreno y cota común -->
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
      <g class="stroke-steel-mid">
        <line x1="1110" x2="1110" y1="70" :y2="GROUND" />
        <line x1="1102" x2="1118" y1="78" y2="62" />
        <line x1="1102" x2="1118" :y1="GROUND + 8" :y2="GROUND - 8" />
      </g>
    </svg>
  </div>
</template>
