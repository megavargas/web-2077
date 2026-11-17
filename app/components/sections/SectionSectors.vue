<script setup lang="ts">
import type { Sector } from '~/types/content'

const {
  title,
  intro,
  sectors,
  headingLevel = 2,
} = defineProps<{
  title?: string
  intro?: string
  sectors: Sector[]
  headingLevel?: 2 | 3
}>()
</script>

<template>
  <section
    id="sectors"
    class="py-12 md:py-20"
    :aria-labelledby="title ? 'sectors-title' : undefined"
  >
    <UiContainer>
      <UiSectionHeader v-if="title" id="sectors-title" :title="title" />
      <p
        v-if="intro"
        class="mb-12 max-w-prose font-body text-subheading text-pretty text-fog-light"
      >
        {{ intro }}
      </p>
      <ul class="grid gap-12 lg:grid-cols-3 lg:gap-8">
        <li
          v-for="sector in sectors"
          :key="sector.key"
          class="group relative flex flex-col gap-5 border-t border-graphite-border pt-6 hover:border-bone-white"
        >
          <component
            :is="title ? 'h3' : `h${headingLevel}`"
            class="font-display text-heading font-light text-bone-white"
          >
            <NuxtLinkLocale
              :to="{ name: 'sectores-sector', params: { sector: sector.slug } }"
              class="group-hover:text-accent after:absolute after:inset-0"
            >
              {{ sector.name }}
            </NuxtLinkLocale>
          </component>
          <p class="font-body text-subheading text-pretty text-bone-white">{{ sector.benefit }}</p>
          <UiTagList :items="sector.domains.items.map((d) => d.name)" />
          <Icon
            name="lucide:arrow-right"
            class="mt-auto size-5 text-fog-light group-hover:text-accent"
            aria-hidden="true"
          />
        </li>
      </ul>
    </UiContainer>
  </section>
</template>
