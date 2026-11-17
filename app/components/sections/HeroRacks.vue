<script setup lang="ts">
/**
 * Ilustración decorativa del hero: pasillo de racks con LEDs, generada por código.
 * Semilla fija → el SVG es idéntico en servidor y cliente (sin desajustes de hidratación).
 * Colores solo con tokens (fill-*). Parpadeo con motion-safe (se anula con reduced motion).
 */
type Led = { x: number; y: number; tone: 'dim' | 'light' | 'accent'; blink: boolean; delay: number }

const RACKS = 7
const UNITS = 38
const RACK_W = 132
const GAP = 26
const UNIT_H = 18
const UNIT_GAP = 4
const TOP = 40
const LEFT = 30

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
const racks = Array.from({ length: RACKS }, (_, r) => LEFT + r * (RACK_W + GAP))
const units: { x: number; y: number }[] = []
const leds: Led[] = []

for (const x of racks) {
  for (let u = 0; u < UNITS; u++) {
    const y = TOP + u * (UNIT_H + UNIT_GAP)
    units.push({ x, y })
    for (let i = 0; i < 3; i++) {
      const p = rand()
      const tone: Led['tone'] = p < 0.07 ? 'accent' : p < 0.3 ? 'light' : 'dim'
      leds.push({
        x: x + RACK_W - 16 - i * 10,
        y: y + UNIT_H / 2 - 2,
        tone,
        blink: tone !== 'dim' && rand() < 0.35,
        delay: Math.round(rand() * 4000),
      })
    }
  }
}

const width = LEFT * 2 + RACKS * RACK_W + (RACKS - 1) * GAP
const height = TOP * 2 + UNITS * (UNIT_H + UNIT_GAP)
const toneClass = {
  dim: 'fill-graphite-border',
  light: 'fill-fog-light opacity-60',
  accent: 'fill-accent',
} as const
</script>

<template>
  <div class="pointer-events-none select-none" aria-hidden="true">
    <div class="h-full w-full origin-left [transform:perspective(1400px)_rotateY(-26deg)]">
      <svg
        :viewBox="`0 0 ${width} ${height}`"
        preserveAspectRatio="xMinYMid slice"
        class="h-full w-full"
        role="presentation"
      >
        <g class="fill-void-black stroke-graphite-border" stroke-width="1">
          <rect
            v-for="(x, i) in racks"
            :key="`rack-${i}`"
            :x="x - 6"
            :y="TOP - 10"
            :width="RACK_W + 12"
            :height="UNITS * (UNIT_H + UNIT_GAP) + 16"
          />
          <rect
            v-for="(u, i) in units"
            :key="`unit-${i}`"
            :x="u.x"
            :y="u.y"
            :width="RACK_W"
            :height="UNIT_H"
            class="fill-carbon"
            stroke-opacity="0.6"
          />
        </g>
        <rect
          v-for="(l, i) in leds"
          :key="`led-${i}`"
          :x="l.x"
          :y="l.y"
          width="4"
          height="4"
          :class="[toneClass[l.tone], l.blink && 'motion-safe:animate-blink']"
          :style="l.blink ? { animationDelay: `${l.delay}ms` } : undefined"
        />
      </svg>
    </div>
  </div>
</template>
