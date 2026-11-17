<script setup lang="ts">
const {
  title,
  id,
  counter,
  level = 2,
  tone = 'dark',
} = defineProps<{
  title: string
  /** id del título, para <section aria-labelledby> */
  id: string
  /** Contador decorativo: "01", "02"… */
  counter?: string
  level?: 2 | 3
  /** Fondo sobre el que va: oscuro (por defecto) o sección clara */
  tone?: 'dark' | 'light' | 'accent'
}>()
</script>

<template>
  <div class="mb-10 flex items-end justify-between gap-6 md:mb-12">
    <component
      :is="`h${level}`"
      :id="id"
      class="font-display text-heading font-light text-balance md:text-heading-lg lg:text-heading-xl"
      :class="tone !== 'dark' ? 'text-void-black' : 'text-bone-white'"
    >
      {{ title }}
    </component>
    <span
      v-if="counter"
      aria-hidden="true"
      class="font-mono text-body"
      :class="tone !== 'dark' ? 'text-void-black' : 'text-bone-white'"
    >
      {{ counter }}
    </span>
  </div>
</template>
