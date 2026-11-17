<script setup lang="ts">
import type { HomeContent } from '~/types/content'

defineProps<{ hero: HomeContent['hero'] }>()
</script>

<template>
  <section class="bg-void-black py-20 md:py-40" aria-labelledby="hero-title">
    <UiContainer class="flex flex-col gap-10">
      <p class="font-mono text-caption text-fog-light uppercase">{{ hero.eyebrow }}</p>
      <h1
        id="hero-title"
        class="font-display text-heading-lg font-light text-bone-white sm:text-display xl:text-display-lg"
      >
        <span
          v-for="(line, i) in hero.titleLines"
          :key="i"
          class="block"
          :class="{ 'text-accent': line.emphasis }"
          >{{ line.text }}{{ i < hero.titleLines.length - 1 ? ' ' : '' }}</span
        >
      </h1>
      <p class="max-w-[600px] font-body text-subheading text-pretty text-bone-white">
        {{ hero.subtitle }}
      </p>
      <div class="flex flex-wrap gap-4">
        <UiButton :to="{ name: 'servicios-diagnostico' }">{{ hero.primaryCta }}</UiButton>
        <UiButton variant="ghost" :to="{ name: 'servicios' }">{{ hero.secondaryCta }}</UiButton>
      </div>
      <p
        class="max-w-[600px] border-t border-graphite-border pt-6 font-mono text-caption text-fog-light uppercase"
      >
        {{ hero.proof }}
      </p>
    </UiContainer>
  </section>
</template>
