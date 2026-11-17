<script setup lang="ts">
import type { HomeContent } from '~/types/content'

defineProps<{ hero: HomeContent['hero'] }>()
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-void-black py-20 md:py-40"
    aria-labelledby="hero-title"
  >
    <!-- Ilustración de racks con fundido a negro (izquierda, arriba y abajo) -->
    <div
      class="absolute inset-x-0 bottom-0 -z-10 h-3/5 opacity-50 lg:inset-y-0 lg:right-0 lg:left-auto lg:h-full lg:w-3/5 lg:opacity-100"
    >
      <HeroRacks class="h-full w-full" />
      <div class="absolute inset-0 bg-linear-to-b from-void-black via-transparent to-void-black" />
      <div
        class="absolute inset-0 hidden bg-linear-to-r from-void-black via-void-black/40 to-transparent lg:block"
      />
    </div>
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
