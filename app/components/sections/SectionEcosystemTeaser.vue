<script setup lang="ts">
import type { HomeContent } from '~/types/content'

defineProps<{ ecosystem: HomeContent['ecosystem']; partners: string[] }>()
</script>

<template>
  <section class="py-12 md:py-20" aria-labelledby="ecosystem-title">
    <UiContainer class="grid gap-10 md:grid-cols-2 md:items-end">
      <div class="flex flex-col gap-6">
        <h2
          id="ecosystem-title"
          class="font-display text-heading font-light text-balance text-bone-white md:text-heading-lg"
        >
          {{ ecosystem.title }}
        </h2>
        <p class="max-w-prose font-body text-subheading text-pretty text-fog-light">
          {{ ecosystem.text }}
        </p>
        <UiLinkArrow :to="{ name: 'ecosistema' }">{{ ecosystem.linkLabel }}</UiLinkArrow>
      </div>
      <ul class="border-t border-graphite-border">
        <li
          v-for="p in partners"
          :key="p"
          class="border-b border-graphite-border py-5 font-display text-heading-sm font-normal text-bone-white"
        >
          {{ p }}
        </li>
      </ul>
    </UiContainer>
  </section>
</template>
