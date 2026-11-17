<script setup lang="ts">
const localePath = useLocalePath()
const { to, tone = 'dark' } = defineProps<{
  to: Parameters<typeof localePath>[0]
  tone?: 'dark' | 'light'
}>()
</script>

<template>
  <NuxtLink
    :to="localePath(to)"
    class="inline-flex items-center gap-2 font-mono text-caption uppercase underline-offset-4 hover:underline"
    :class="tone === 'light' ? 'text-accent-deep focus-visible:outline-void-black' : 'text-accent'"
  >
    <slot />
    <Icon name="lucide:arrow-right" class="size-4" aria-hidden="true" />
  </NuxtLink>
</template>
