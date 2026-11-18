<script setup lang="ts">
const { items, tone = 'dark' } = defineProps<{ items: string[]; tone?: 'dark' | 'light' }>()
</script>

<template>
  <ul class="flex flex-wrap gap-2">
    <li v-for="item in items" :key="item">
      <UiBadge :tone="tone">{{ item }}</UiBadge>
    </li>
  </ul>
</template>
