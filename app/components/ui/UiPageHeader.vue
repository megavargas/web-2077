<script setup lang="ts">
const { eyebrow, title, intro } = defineProps<{
  eyebrow: string
  title: string
  intro?: string
}>()
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-void-black py-16 md:py-24"
    aria-labelledby="page-title"
  >
    <!-- Grafismo opcional a la derecha, con fundido al fondo (como el hero de la home) -->
    <div
      v-if="$slots.visual"
      class="absolute inset-0 -z-10 opacity-50 lg:right-0 lg:left-auto lg:w-1/2 lg:opacity-100"
    >
      <slot name="visual" />
      <div
        class="absolute inset-0 bg-linear-to-b from-void-black/80 via-transparent to-void-black"
      />
      <div class="absolute inset-0 bg-linear-to-r from-void-black via-transparent to-transparent" />
    </div>
    <UiContainer class="flex flex-col gap-6">
      <p class="font-mono text-caption text-fog-light uppercase">{{ eyebrow }}</p>
      <h1
        id="page-title"
        class="max-w-5xl font-display text-heading font-light text-balance wrap-break-word hyphens-auto text-bone-white sm:text-heading-lg lg:text-display"
      >
        {{ title }}
      </h1>
      <p v-if="intro" class="max-w-[640px] font-body text-subheading text-pretty text-fog-light">
        {{ intro }}
      </p>
      <div v-if="$slots.default" class="flex flex-wrap gap-4 pt-2">
        <slot />
      </div>
    </UiContainer>
  </section>
</template>
