<script setup lang="ts">
import type { FaqItem } from '~/types/content'

defineProps<{ items: FaqItem[] }>()
</script>

<template>
  <div class="border-t border-graphite-border">
    <details v-for="item in items" :key="item.q" class="group border-b border-graphite-border">
      <summary
        class="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-heading-sm font-normal text-bone-white hover:text-accent [&::-webkit-details-marker]:hidden"
      >
        {{ item.q }}
        <Icon
          name="lucide:plus"
          class="size-5 shrink-0 transition-transform group-open:rotate-45"
          aria-hidden="true"
        />
      </summary>
      <p class="max-w-prose pb-6 font-body text-body text-pretty text-fog-light">{{ item.a }}</p>
    </details>
  </div>
</template>
