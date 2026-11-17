<script setup lang="ts">
const { tone = 'dark' } = defineProps<{ tone?: 'dark' | 'light' }>()
</script>

<template>
  <span
    class="inline-block border px-2 py-1 font-mono text-caption uppercase"
    :class="
      tone === 'light'
        ? 'border-mist-border bg-paper text-ink-mid'
        : 'border-graphite-border bg-carbon text-fog-light'
    "
  >
    <slot />
  </span>
</template>
