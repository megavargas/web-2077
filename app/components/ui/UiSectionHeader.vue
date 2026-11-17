<script setup lang="ts">
const {
  title,
  id,
  counter,
  level = 2,
} = defineProps<{
  title: string
  /** id del título, para <section aria-labelledby> */
  id: string
  /** Contador decorativo: "01", "02"… */
  counter?: string
  level?: 2 | 3
}>()
</script>

<template>
  <div class="mb-10 flex items-end justify-between gap-6 md:mb-12">
    <component
      :is="`h${level}`"
      :id="id"
      class="font-display text-heading font-light text-balance text-bone-white md:text-heading-lg lg:text-heading-xl"
    >
      {{ title }}
    </component>
    <span v-if="counter" aria-hidden="true" class="font-mono text-body text-bone-white">
      {{ counter }}
    </span>
  </div>
</template>
