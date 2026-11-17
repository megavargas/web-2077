<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import type { CtaContent } from '~/types/content'

const {
  cta,
  to = { name: 'servicios-diagnostico' },
  divider = true,
} = defineProps<{
  cta: CtaContent
  to?: RouteLocationRaw
  /** Línea superior: separa de una sección oscura previa; sobra tras una sección de color */
  divider?: boolean
}>()
</script>

<template>
  <section class="py-12 md:py-20" aria-labelledby="cta-title">
    <UiContainer>
      <div
        class="grid gap-10 md:grid-cols-2"
        :class="divider && 'border-t border-graphite-border pt-12 md:pt-20'"
      >
        <h2
          id="cta-title"
          class="font-display text-heading font-light text-balance text-bone-white md:text-heading-lg"
        >
          {{ cta.title }}
        </h2>
        <div class="flex flex-col items-start gap-8">
          <p class="font-body text-subheading text-pretty text-fog-light">{{ cta.text }}</p>
          <UiButton :to="to">{{ cta.button }}</UiButton>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
