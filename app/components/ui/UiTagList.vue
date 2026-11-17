<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <ul class="flex flex-wrap gap-2">
    <li v-for="item in items" :key="item">
      <UiBadge>{{ item }}</UiBadge>
    </li>
  </ul>
</template>
