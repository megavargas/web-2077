<script setup lang="ts">
import type { Pillar } from '~/types/content'

const {
  id = 'services',
  title,
  intro,
  pillars,
} = defineProps<{
  id?: string
  title: string
  intro?: string
  pillars: Pillar[]
}>()
</script>

<template>
  <section :id="id" class="py-12 md:py-20" :aria-labelledby="`${id}-title`">
    <UiContainer>
      <UiSectionHeader :id="`${id}-title`" :title="title" />
      <p
        v-if="intro"
        class="mb-12 max-w-prose font-body text-subheading text-pretty text-fog-light"
      >
        {{ intro }}
      </p>
      <ol class="grid gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
        <li
          v-for="pillar in pillars"
          :key="pillar.key"
          class="group relative flex flex-col gap-4 border-t border-graphite-border pt-6 hover:border-bone-white"
        >
          <span aria-hidden="true" class="font-mono text-caption text-fog-light">
            {{ pillar.number }}
          </span>
          <h3 class="font-display text-heading-sm font-normal text-bone-white">
            <NuxtLinkLocale
              :to="{ name: 'servicios-pillar', params: { pillar: pillar.slug } }"
              class="group-hover:text-accent after:absolute after:inset-0"
            >
              {{ pillar.name }}
            </NuxtLinkLocale>
          </h3>
          <p v-if="pillar.subtitle" class="font-mono text-caption text-fog-light uppercase">
            {{ pillar.subtitle }}
          </p>
          <p class="font-body text-body text-pretty text-fog-light">{{ pillar.summary }}</p>
          <ul class="border-t border-graphite-border font-body text-caption text-bone-white">
            <li
              v-for="item in pillar.includes.items"
              :key="item.name"
              class="border-b border-graphite-border py-2.5"
            >
              {{ item.name }}
            </li>
          </ul>
          <p
            class="mt-auto flex items-start justify-between gap-4 pt-2 font-body text-body text-bone-white"
          >
            {{ pillar.benefit }}
            <Icon
              name="lucide:arrow-right"
              class="mt-1 size-5 shrink-0 text-fog-light group-hover:text-accent"
              aria-hidden="true"
            />
          </p>
        </li>
      </ol>
    </UiContainer>
  </section>
</template>
