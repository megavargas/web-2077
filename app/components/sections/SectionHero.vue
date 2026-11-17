<script setup lang="ts">
import type { HomeContent } from '~/types/content'

const { hero } = defineProps<{ hero: HomeContent['hero'] }>()

const parts = computed(() => hero.title.split('{emphasis}'))
</script>

<template>
  <section class="bg-void-black py-20 md:py-45" aria-labelledby="hero-title">
    <UiContainer class="flex flex-col gap-8">
      <p class="font-mono text-caption text-fog-light uppercase">{{ hero.eyebrow }}</p>
      <h1
        id="hero-title"
        class="font-display text-heading-lg font-light text-balance text-bone-white md:text-display xl:text-display-lg"
      >
        {{ parts[0] }}<span class="text-accent">{{ hero.emphasis }}</span
        >{{ parts[1] }}
      </h1>
      <p class="max-w-[540px] font-body text-subheading text-pretty text-bone-white">
        {{ hero.subtitle }}
      </p>
      <div class="flex flex-wrap gap-4">
        <UiButton :to="{ name: 'servicios-diagnostico' }">{{ hero.primaryCta }}</UiButton>
        <UiButton variant="ghost" :to="{ name: 'servicios' }">{{ hero.secondaryCta }}</UiButton>
      </div>
    </UiContainer>
  </section>
</template>
