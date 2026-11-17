<script setup lang="ts">
import type { HomeContent } from '~/types/content'

defineProps<{ context: HomeContent['context'] }>()
</script>

<template>
  <section class="py-12 md:py-20" aria-labelledby="context-title">
    <UiContainer>
      <UiSectionHeader id="context-title" :title="context.title" />
      <p class="mb-12 max-w-prose font-body text-subheading text-pretty text-fog-light">
        {{ context.intro }}
      </p>
      <ul class="grid gap-10 md:grid-cols-3 md:gap-8">
        <li
          v-for="layer in context.layers"
          :key="layer.name"
          class="flex flex-col gap-3 border-t border-bone-white pt-6"
        >
          <h3 class="font-display text-heading font-light text-bone-white">{{ layer.name }}</h3>
          <p class="font-body text-body text-pretty text-fog-light">{{ layer.text }}</p>
        </li>
      </ul>
    </UiContainer>
  </section>
</template>
