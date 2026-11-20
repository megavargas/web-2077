<script setup lang="ts">
/**
 * «Qué hacemos» de cada subservicio. Columna izquierda fija (icono del servicio, título, resumen y
 * recuento) y, a la derecha, una rejilla de módulos con hairlines. Cada capacidad lleva su
 * «firma»: un glifo de 5×5 celdas generado a partir de su nombre (simétrico, como una marca de
 * plano), siempre el mismo en servidor y cliente. Al pasar el ratón el glifo se enciende en acento.
 */
const { title, items, icon, summary } = defineProps<{
  title: string
  items: { name: string; text: string }[]
  icon: string
  summary?: string
}>()
const { t } = useI18n()

const SIZE = 5
const CELL = 8
const GAP = 3

/** Semilla estable a partir del texto (FNV-1a). */
function hash(text: string) {
  let h = 2166136261
  for (const ch of text) h = Math.imul(h ^ ch.codePointAt(0)!, 16777619)
  return h >>> 0
}

/** Celdas encendidas: mitad izquierda al azar con semilla y espejo a la derecha, centro encendido. */
function draw(seed: number) {
  const rand = seededRandom(seed)
  const cells: { x: number; y: number; on: boolean }[] = []
  for (let y = 0; y < SIZE; y++) {
    const half = Array.from({ length: Math.ceil(SIZE / 2) }, () => rand() < 0.5)
    const row = [...half, ...half.slice(0, Math.floor(SIZE / 2)).reverse()]
    row.forEach((on, x) => cells.push({ x: x * (CELL + GAP), y: y * (CELL + GAP), on }))
  }
  cells[Math.floor((SIZE * SIZE) / 2)]!.on = true
  return cells
}

/** Glifo con densidad equilibrada (ni casi vacío ni macizo): prueba semillas consecutivas. */
function glyph(name: string) {
  const base = hash(name)
  for (let k = 0; k < 50; k++) {
    const cells = draw(base + k)
    const on = cells.filter((c) => c.on).length
    if (on >= 9 && on <= 17) return cells
  }
  return draw(base)
}

const modules = computed(() => items.map((item) => ({ ...item, cells: glyph(item.name) })))
const box = SIZE * CELL + (SIZE - 1) * GAP
</script>

<template>
  <section class="py-12 md:py-20" aria-labelledby="capabilities-title">
    <UiContainer class="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div class="lg:col-span-4">
        <div class="flex flex-col gap-6 lg:sticky lg:top-28">
          <span
            aria-hidden="true"
            class="flex size-16 items-center justify-center border border-graphite-border text-accent"
          >
            <Icon :name="icon" class="size-8" />
          </span>
          <h2
            id="capabilities-title"
            class="font-display text-heading font-light text-balance text-bone-white md:text-heading-lg"
          >
            {{ title }}
          </h2>
          <p
            v-if="summary"
            class="max-w-prose font-body text-subheading text-pretty text-fog-light"
          >
            {{ summary }}
          </p>
          <p class="font-mono text-caption text-fog-light uppercase">
            {{ t('labels.capabilities', { n: items.length }) }}
          </p>
        </div>
      </div>

      <ul
        class="grid gap-px self-start border border-graphite-border bg-graphite-border sm:grid-cols-2 lg:col-span-8"
      >
        <li
          v-for="m in modules"
          :key="m.name"
          class="group flex flex-col gap-6 bg-void-black p-6 transition-colors duration-150 hover:bg-carbon md:p-8"
        >
          <svg :viewBox="`0 0 ${box} ${box}`" class="size-12" aria-hidden="true" focusable="false">
            <rect
              v-for="(c, i) in m.cells"
              :key="i"
              :x="c.x"
              :y="c.y"
              :width="CELL"
              :height="CELL"
              :class="
                c.on
                  ? 'fill-bone-white transition-colors duration-150 group-hover:fill-accent'
                  : 'fill-none stroke-graphite-border'
              "
              :stroke-width="c.on ? 0 : 1"
            />
          </svg>
          <div class="flex flex-col gap-3">
            <h3 class="font-display text-heading-sm font-normal text-balance text-bone-white">
              {{ m.name }}
            </h3>
            <p class="font-body text-body text-pretty text-fog-light">{{ m.text }}</p>
          </div>
        </li>
        <!-- Si el número de módulos es impar, una celda vacía cierra la rejilla en dos columnas -->
        <li
          v-if="modules.length % 2 === 1"
          aria-hidden="true"
          class="hidden bg-void-black sm:block"
        />
      </ul>
    </UiContainer>
  </section>
</template>
