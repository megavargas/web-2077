<script setup lang="ts">
import type { HomeContent, Pillar, Sector } from '~/types/content'

/**
 * Pila de contexto: capas numeradas de arriba (IA) a la base (sector), cada una con
 * tarjetas que enlazan al pilar o sector correspondiente.
 */
const { context, pillars, sectors } = defineProps<{
  context: HomeContent['context']
  pillars: Pillar[]
  sectors: Sector[]
}>()

type Tile = HomeContent['context']['layers'][number]['tiles'][number]

// resolveComponent solo funciona en setup (no dentro de la plantilla)
const NuxtLinkLocale = resolveComponent('NuxtLinkLocale')

function tileTo(tile: Tile) {
  if (tile.pillar) {
    const p = pillars.find((x) => x.key === tile.pillar)
    return p ? { name: 'servicios-pillar', params: { pillar: p.slug } } : undefined
  }
  if (tile.sector) {
    const s = sectors.find((x) => x.key === tile.sector)
    return s ? { name: 'sectores-sector', params: { sector: s.slug } } : undefined
  }
  return undefined
}
</script>

<template>
  <section id="context" class="py-12 md:py-20" aria-labelledby="context-title">
    <UiContainer>
      <div class="mb-12 flex flex-col gap-6 md:mb-20">
        <p class="max-w-prose font-body text-subheading text-pretty text-fog-light">
          “{{ context.quote }}”
        </p>
        <h2
          id="context-title"
          class="font-display text-heading font-light text-bone-white md:text-heading-lg lg:text-heading-xl"
        >
          <span v-for="(line, i) in context.titleLines" :key="i" class="block">{{ line }}</span>
        </h2>
      </div>

      <ol>
        <li
          v-for="layer in context.layers"
          :key="layer.number"
          class="grid gap-8 border-t border-graphite-border py-10 lg:grid-cols-12 lg:gap-10"
        >
          <div class="flex flex-col gap-3 lg:col-span-5">
            <div class="flex items-baseline gap-4">
              <span aria-hidden="true" class="font-mono text-body text-fog-light">
                {{ layer.number }}
              </span>
              <h3 class="font-display text-heading font-light text-bone-white md:text-heading-lg">
                {{ layer.name }}
              </h3>
            </div>
            <p class="font-mono text-caption text-accent uppercase">{{ layer.tagline }}</p>
            <p class="max-w-prose font-body text-body text-pretty text-fog-light">
              {{ layer.text }}
            </p>
          </div>

          <ul
            class="grid grid-cols-2 gap-px self-start border border-graphite-border bg-graphite-border sm:grid-cols-4 lg:col-span-7"
          >
            <li v-for="tile in layer.tiles" :key="tile.label" class="bg-void-black">
              <component
                :is="tileTo(tile) ? NuxtLinkLocale : 'div'"
                :to="tileTo(tile)"
                class="group flex h-full min-h-36 flex-col justify-between gap-6 p-5 transition-colors duration-150"
                :class="tileTo(tile) && 'hover:bg-bone-white'"
              >
                <Icon
                  :name="tile.icon"
                  class="size-6 text-bone-white"
                  :class="tileTo(tile) && 'group-hover:text-void-black'"
                  aria-hidden="true"
                />
                <span class="flex flex-col gap-1">
                  <span
                    class="font-body text-body text-bone-white"
                    :class="tileTo(tile) && 'group-hover:text-void-black'"
                  >
                    {{ tile.label }}
                  </span>
                  <span
                    class="font-mono text-caption text-fog-light uppercase"
                    :class="tileTo(tile) && 'group-hover:text-void-black'"
                  >
                    {{ tile.sub }}
                  </span>
                </span>
              </component>
            </li>
          </ul>
        </li>
      </ol>
    </UiContainer>
  </section>
</template>
