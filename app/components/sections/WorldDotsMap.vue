<script setup lang="ts">
/**
 * Mapa de puntos decorativo (Nosotros · Dónde estamos): tierra en rejilla de puntos grises,
 * completa y muy transparente, y las ubicaciones destacadas en el color de acento.
 * Datos en assets/data/world-dots.json (Natural Earth 110m, generado una vez).
 */
import world from '~/assets/data/world-dots.json'

const places = [
  { name: 'Mexico', lon: -99.13, lat: 19.43 },
  { name: 'London', lon: -0.13, lat: 51.51 },
  { name: 'Madrid', lon: -3.7, lat: 40.42 },
  { name: 'Zurich', lon: 8.54, lat: 47.37 },
  { name: 'Tel Aviv', lon: 34.78, lat: 32.09 },
  { name: 'Riyadh', lon: 46.68, lat: 24.71 },
]

const CELL = 10
const W = world.cols * CELL
const H = world.runs.length * CELL
const runs = world.runs as [number, number][][]
const dots = runs.flatMap((row, r) =>
  row.flatMap(([start, len]) =>
    Array.from({ length: len }, (_, i) => ({
      x: (start + i) * CELL + CELL / 2,
      y: r * CELL + CELL / 2,
    })),
  ),
)
const project = (lon: number, lat: number) => ({
  x: ((lon - world.lon0) / world.step) * CELL + CELL / 2,
  y: ((world.lat0 - lat) / world.step) * CELL + CELL / 2,
})
const markers = places.map((p) => ({ ...p, ...project(p.lon, p.lat) }))
</script>

<template>
  <div class="pointer-events-none select-none" aria-hidden="true">
    <svg :viewBox="`0 0 ${W} ${H}`" class="h-auto w-full" role="presentation">
      <g class="fill-steel-mid opacity-25">
        <circle v-for="(d, i) in dots" :key="i" :cx="d.x" :cy="d.y" r="3" />
      </g>
      <g v-for="m in markers" :key="m.name">
        <circle :cx="m.x" :cy="m.y" r="24" class="fill-accent opacity-25" />
        <circle :cx="m.x" :cy="m.y" r="24" fill="none" class="stroke-accent" stroke-width="1" />
        <circle :cx="m.x" :cy="m.y" r="9" class="fill-accent" />
      </g>
    </svg>
  </div>
</template>
