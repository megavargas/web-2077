<script setup lang="ts">
import type { HomeContent } from '~/types/content'

const { tone = 'dark' } = defineProps<{
  ecosystem: HomeContent['ecosystem']
  partners: { name: string; icon?: string }[]
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
      }
    : {
        section: '',
        strong: 'text-bone-white',
        muted: 'text-fog-light',
        line: 'border-graphite-border',
      },
)
</script>

<template>
  <section class="py-12 md:py-20" :class="c.section" aria-labelledby="ecosystem-title">
    <UiContainer class="grid gap-10 md:grid-cols-2 md:items-center">
      <div class="flex flex-col gap-6">
        <h2
          id="ecosystem-title"
          class="font-display text-heading font-light text-balance md:text-heading-lg"
          :class="c.strong"
        >
          {{ ecosystem.title }}
        </h2>
        <p class="max-w-prose font-body text-subheading text-pretty" :class="c.muted">
          {{ ecosystem.text }}
        </p>
        <UiLinkArrow :to="{ name: 'ecosistema' }" :tone="tone">{{
          ecosystem.linkLabel
        }}</UiLinkArrow>
      </div>
      <ul class="border-t" :class="c.line">
        <li
          v-for="p in partners"
          :key="p.name"
          class="flex items-center gap-4 border-b py-5 font-display text-heading-sm font-normal"
          :class="[c.line, c.strong]"
        >
          <Icon v-if="p.icon" :name="p.icon" class="size-7 shrink-0" aria-hidden="true" />
          {{ p.name }}
        </li>
      </ul>
    </UiContainer>
  </section>
</template>
