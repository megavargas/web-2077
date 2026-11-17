<script setup lang="ts">
const localePath = useLocalePath()
const { to } = defineProps<{ to: Parameters<typeof localePath>[0] }>()
</script>

<template>
  <NuxtLink
    :to="localePath(to)"
    class="inline-flex items-center gap-2 font-mono text-caption text-accent uppercase underline-offset-4 hover:underline"
  >
    <slot />
    <Icon name="lucide:arrow-right" class="size-4" aria-hidden="true" />
  </NuxtLink>
</template>
