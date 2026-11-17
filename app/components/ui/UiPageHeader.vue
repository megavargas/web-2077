<script setup lang="ts">
const { eyebrow, title, intro } = defineProps<{
  eyebrow: string
  title: string
  intro?: string
}>()
</script>

<template>
  <section class="bg-void-black py-16 md:py-24" aria-labelledby="page-title">
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
