<script setup lang="ts">
const { as = 'div' } = defineProps<{ as?: string }>()
</script>

<template>
  <component :is="as" class="mx-auto w-full max-w-page px-4 md:px-10">
    <slot />
  </component>
</template>
