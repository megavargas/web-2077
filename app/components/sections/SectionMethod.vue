<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import type { MethodContent } from '~/types/content'

const {
  method,
  title,
  intro,
  showDeliverables = false,
  link,
  tone = 'dark',
} = defineProps<{
  method: MethodContent
  title?: string
  intro?: string
  showDeliverables?: boolean
  link?: { label: string; to: RouteLocationRaw }
  /** light: sección clara (mist) */
  tone?: 'dark' | 'light'
}>()

const c = computed(() =>
  tone === 'light'
    ? {
        section: 'bg-mist',
        strong: 'text-void-black',
        muted: 'text-ink-mid',
        line: 'border-mist-border',
        lineStrong: 'border-void-black',
      }
    : {
        section: '',
        strong: 'text-bone-white',
        muted: 'text-fog-light',
        line: 'border-graphite-border',
        lineStrong: 'border-bone-white',
      },
)
</script>

<template>
  <section id="approach" class="py-12 md:py-20" :class="c.section" aria-labelledby="approach-title">
    <UiContainer>
      <UiSectionHeader id="approach-title" :title="title ?? method.title" :tone="tone" />
      <p class="mb-12 max-w-prose font-body text-subheading text-pretty" :class="c.muted">
        {{ intro ?? method.intro }}
      </p>
      <ol class="grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
        <li
          v-for="phase in method.phases"
          :key="phase.key"
          class="flex flex-col gap-3 border-t pt-6"
          :class="phase.highlight ? c.lineStrong : c.line"
        >
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h3 class="font-display text-heading-sm font-normal" :class="c.strong">
              {{ phase.name }}
            </h3>
            <UiBadge v-if="phase.tag" :tone="tone">{{ phase.tag }}</UiBadge>
          </div>
          <p class="font-body text-body text-pretty" :class="c.muted">{{ phase.description }}</p>
          <div v-if="showDeliverables && phase.deliverables?.length" class="pt-2">
            <h4 class="mb-2 font-mono text-caption uppercase" :class="c.muted">
              {{ method.deliverablesLabel }}
            </h4>
            <ul class="border-t font-body text-caption" :class="[c.line, c.strong]">
              <li v-for="d in phase.deliverables" :key="d" class="border-b py-2.5" :class="c.line">
                {{ d }}
              </li>
            </ul>
          </div>
        </li>
      </ol>
      <div v-if="link" class="mt-10">
        <UiLinkArrow :to="link.to" :tone="tone">{{ link.label }}</UiLinkArrow>
      </div>
    </UiContainer>
  </section>
</template>
