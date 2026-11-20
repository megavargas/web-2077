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
        lineHover: 'hover:border-paper',
        hover: 'group-hover:underline underline-offset-4',
        focus: '',
      }
    : tone === 'light'
      ? {
          section: 'bg-mist',
          strong: 'text-void-black',
          muted: 'text-ink-mid',
          line: 'border-mist-border',
          lineHover: 'hover:border-void-black',
          hover: 'group-hover:text-accent-deep',
          focus: 'focus-visible:outline-void-black',
        }
      : {
          section: '',
          strong: 'text-bone-white',
          muted: 'text-fog-light',
          line: 'border-graphite-border',
          lineHover: 'hover:border-bone-white',
          hover: 'group-hover:text-accent',
          focus: '',
        },
)
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
      <ol class="grid gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
        <li
          v-for="pillar in pillars"
          :key="pillar.key"
          class="group relative flex flex-col gap-4 border-t border-graphite-border pt-6"
          :class="[c.line, c.lineHover]"
        >
          <span aria-hidden="true" class="font-mono text-caption" :class="c.muted">
            {{ pillar.number }}
          </span>
          <h3 class="font-display text-heading-sm font-normal" :class="c.strong">
            <NuxtLinkLocale
              :to="{ name: 'servicios-pillar', params: { pillar: pillar.slug } }"
              class="after:absolute after:inset-0"
              :class="[c.hover, c.focus]"
            >
              {{ pillar.name }}
            </NuxtLinkLocale>
          </h3>
          <p v-if="pillar.subtitle" class="font-mono text-caption uppercase" :class="c.muted">
            {{ pillar.subtitle }}
          </p>
          <p class="font-body text-body text-pretty" :class="c.muted">{{ pillar.summary }}</p>
          <ul class="border-t font-body text-caption" :class="[c.line, c.strong]">
            <!-- Enlaces a cada subservicio por encima del enlace de la tarjeta (z-10) -->
            <li v-for="s in pillar.subservices" :key="s.key" class="border-b" :class="c.line">
              <NuxtLinkLocale
                :to="{
                  name: 'servicios-pillar-service',
                  params: { pillar: pillar.slug, service: s.slug },
                }"
                class="relative z-10 block py-2.5 underline-offset-4 hover:underline"
                :class="c.focus"
              >
                {{ s.name }}
              </NuxtLinkLocale>
            </li>
          </ul>
          <p
            class="mt-auto flex items-start justify-between gap-4 pt-2 font-body text-body"
            :class="c.strong"
          >
            {{ pillar.benefit }}
            <Icon
              name="lucide:arrow-right"
              class="mt-1 size-5 shrink-0"
              :class="[c.muted, c.hover]"
              aria-hidden="true"
            />
          </p>
        </li>
      </ol>
    </UiContainer>
  </section>
</template>
