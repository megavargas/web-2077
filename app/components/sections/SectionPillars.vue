<script setup lang="ts">
import type { PillarWithSubservices } from '~/types/content'

const {
  id = 'services',
  title,
  intro,
  pillars,
  tone = 'dark',
} = defineProps<{
  id?: string
  title: string
  intro?: string
  pillars: PillarWithSubservices[]
  /** light: sección clara (mist); accent: banda azul (accent-strong) con texto blanco */
  tone?: 'dark' | 'light' | 'accent'
}>()

const c = computed(() =>
  tone === 'accent'
    ? {
        section: 'bg-accent-strong',
        strong: 'text-paper',
        muted: 'text-bone-white',
        line: 'border-bone-white/30',
        hover: 'group-hover:underline underline-offset-4',
        focus: '',
        boxHover: 'group-hover/item:bg-paper group-hover/item:text-accent-strong',
      }
    : tone === 'light'
      ? {
          section: 'bg-mist',
          strong: 'text-void-black',
          muted: 'text-ink-mid',
          line: 'border-mist-border',
          hover: 'group-hover:text-accent-deep',
          focus: 'focus-visible:outline-void-black',
          boxHover: 'group-hover/item:bg-void-black group-hover/item:text-mist',
        }
      : {
          section: '',
          strong: 'text-bone-white',
          muted: 'text-fog-light',
          line: 'border-graphite-border',
          hover: 'group-hover:text-accent',
          focus: '',
          boxHover: 'group-hover/item:bg-bone-white group-hover/item:text-void-black',
        },
)

/**
 * Filas compartidas por las tarjetas (subgrid): número, título, subtítulo, resumen, un subservicio
 * por fila y la frase final. Así cada bloque queda alineado con el de las otras columnas.
 */
const maxSubservices = computed(() => Math.max(1, ...pillars.map((p) => p.subservices.length)))
const cardRows = computed(() => 5 + maxSubservices.value)
</script>

<template>
  <section :id="id" class="py-12 md:py-20" :class="c.section" :aria-labelledby="`${id}-title`">
    <UiContainer>
      <UiSectionHeader :id="`${id}-title`" :title="title" :tone="tone" />
      <p
        v-if="intro"
        class="mb-12 max-w-prose font-body text-subheading text-pretty"
        :class="c.muted"
      >
        {{ intro }}
      </p>
      <ol class="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
        <li
          v-for="pillar in pillars"
          :key="pillar.key"
          class="grid grid-rows-subgrid gap-y-4 border-t pt-6"
          :class="c.line"
          :style="{ gridRow: `span ${cardRows}` }"
        >
          <span aria-hidden="true" class="font-mono text-caption" :class="c.muted">
            {{ pillar.number }}
          </span>
          <h3 class="group font-display text-heading-sm font-normal" :class="c.strong">
            <NuxtLinkLocale
              :to="{ name: 'servicios-pillar', params: { pillar: pillar.slug } }"
              :class="[c.hover, c.focus]"
            >
              {{ pillar.name }}
            </NuxtLinkLocale>
          </h3>
          <p v-if="pillar.subtitle" class="font-mono text-caption uppercase" :class="c.muted">
            {{ pillar.subtitle }}
          </p>
          <p class="font-body text-body text-pretty" :class="c.muted">{{ pillar.summary }}</p>
          <!-- Subservicios: el contenido principal de la tarjeta, cada uno con icono y enlace -->
          <ul
            class="grid grid-rows-subgrid gap-y-0 border-t"
            :class="c.line"
            :style="{ gridRow: `span ${maxSubservices}` }"
          >
            <li v-for="s in pillar.subservices" :key="s.key" class="border-b" :class="c.line">
              <NuxtLinkLocale
                :to="{
                  name: 'servicios-pillar-service',
                  params: { pillar: pillar.slug, service: s.slug },
                }"
                class="group/item flex h-full items-center gap-3 py-3 font-body text-body"
                :class="[c.strong, c.focus]"
              >
                <span
                  class="flex size-9 shrink-0 items-center justify-center border transition-colors duration-150"
                  :class="[c.line, c.boxHover]"
                >
                  <Icon :name="s.icon" class="size-5" aria-hidden="true" />
                </span>
                <span class="flex-1 text-pretty underline-offset-4 group-hover/item:underline">
                  {{ s.name }}
                </span>
                <Icon
                  name="lucide:arrow-right"
                  class="size-4 shrink-0 transition-transform duration-150 group-hover/item:translate-x-1"
                  aria-hidden="true"
                />
              </NuxtLinkLocale>
            </li>
          </ul>
          <p class="pt-2 font-body text-body text-pretty" :class="c.strong">
            {{ pillar.benefit }}
          </p>
        </li>
      </ol>
    </UiContainer>
  </section>
</template>
