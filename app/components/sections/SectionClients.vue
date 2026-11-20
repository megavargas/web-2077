<script setup lang="ts">
import data from '~/assets/data/clients.json'
import type { HomeContent } from '~/types/content'

/**
 * Muro de logos de clientes: rejilla fija de 3 filas, sin líneas, en la que, cada pocos segundos, una
 * celda al azar cambia su logo por el siguiente en espera (sube y se funde). En lugar de un
 * carrusel, el muro se ve entero y quieto, y solo una celda se mueve a la vez.
 *
 * Logos planos en el color del texto (blanco en oscuro, marino en claro), vectorizados en
 * assets/data/clients.json. La rejilla es decorativa para lectores de pantalla: la lista
 * completa de clientes va aparte, oculta visualmente.
 *
 * Se para al pasar el ratón, fuera de pantalla, con la pestaña oculta y con el botón de
 * pausa (WCAG 2.2.2). Con «reducir movimiento» empieza en pausa.
 */
const { clients } = defineProps<{ clients: HomeContent['clients'] }>()
const { t } = useI18n()

const logos = data.clients
/** Celdas, siempre en 3 filas: 6 en móvil (2×3), 12 en tablet (4×3), 18 en escritorio (6×3) */
const CELLS = 18
const INTERVAL = 2400

const state = ref(createLogoRotation(logos.length, CELLS))
const visible = ref(6)

const cellClass = (i: number) => (i >= 12 ? 'hidden lg:flex' : i >= 6 ? 'hidden md:flex' : 'flex')
/** Sin logos en espera (todos caben a la vez) no hay nada que rotar ni que pausar. */
const rotates = computed(() => logos.length > visible.value)

/** Tamaño óptico: los logos alargados se ensanchan menos que proporcionalmente. */
function logoWidth(viewBox: string) {
  const [, , w = 1, h = 1] = viewBox.split(' ').map(Number)
  return `${Math.min(64, 34 * Math.sqrt(w / h))}%`
}

const paused = ref(false)
const hovered = ref(false)
const inView = ref(false)
const root = useTemplateRef<HTMLElement>('root')

let timer: ReturnType<typeof setInterval> | undefined
let recent: number[] = []

function tick() {
  if (!rotates.value || paused.value || hovered.value || !inView.value || document.hidden) return
  const options = Array.from({ length: visible.value }, (_, i) => i).filter(
    (i) => !recent.includes(i),
  )
  const cell = options[Math.floor(Math.random() * options.length)] ?? 0
  recent = [cell, ...recent].slice(0, Math.min(3, visible.value - 1))
  state.value = rotateLogo(state.value, logos.length, visible.value, cell)
}

let cleanup = () => {}

onMounted(() => {
  const md = window.matchMedia('(min-width: 48rem)')
  const lg = window.matchMedia('(min-width: 64rem)')
  const measure = () => {
    visible.value = lg.matches ? 18 : md.matches ? 12 : 6
    state.value = syncLogoRotation(state.value, logos.length, visible.value)
    recent = []
  }
  measure()
  md.addEventListener('change', measure)
  lg.addEventListener('change', measure)

  paused.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const io = new IntersectionObserver(([entry]) => (inView.value = !!entry?.isIntersecting))
  if (root.value) io.observe(root.value)

  timer = setInterval(tick, INTERVAL)

  cleanup = () => {
    clearInterval(timer)
    io.disconnect()
    md.removeEventListener('change', measure)
    lg.removeEventListener('change', measure)
  }
})
onBeforeUnmount(() => cleanup())
</script>

<template>
  <section ref="root" class="pt-6 md:pt-10" aria-labelledby="clients-title">
    <UiContainer>
      <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-10">
        <div class="flex flex-col gap-3">
          <p class="font-mono text-caption text-fog-light uppercase">{{ clients.label }}</p>
          <h2
            id="clients-title"
            class="font-display text-heading-sm font-light text-balance text-bone-white md:text-heading"
          >
            {{ clients.title }}
          </h2>
        </div>
        <div v-if="rotates">
          <button
            type="button"
            class="inline-flex items-center gap-2 font-mono text-caption text-fog-light uppercase hover:text-bone-white"
            @click="paused = !paused"
          >
            <Icon
              :name="paused ? 'lucide:play' : 'lucide:pause'"
              class="size-4"
              aria-hidden="true"
            />
            {{ paused ? t('clients.play') : t('clients.pause') }}
          </button>
        </div>
      </div>

      <ul class="sr-only" :aria-label="t('clients.list')">
        <li v-for="logo in logos" :key="logo.key">{{ logo.name }}</li>
      </ul>

      <div
        class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
        aria-hidden="true"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
      >
        <div
          v-for="(logoIndex, i) in state.slots"
          :key="i"
          class="relative h-24 items-center justify-center overflow-hidden md:h-28"
          :class="cellClass(i)"
        >
          <Transition
            enter-active-class="transition delay-150 duration-700 ease-out"
            enter-from-class="translate-y-8 opacity-0"
            leave-active-class="transition duration-500 ease-in"
            leave-to-class="-translate-y-8 opacity-0"
          >
            <div
              :key="logos[logoIndex]!.key"
              class="absolute inset-0 flex items-center justify-center text-bone-white"
            >
              <svg
                :viewBox="logos[logoIndex]!.viewBox"
                :style="{ width: logoWidth(logos[logoIndex]!.viewBox) }"
                class="h-auto fill-current"
                focusable="false"
              >
                <g :transform="logos[logoIndex]!.transform">
                  <path :d="logos[logoIndex]!.d" />
                </g>
              </svg>
            </div>
          </Transition>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
