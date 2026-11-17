<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <a
      href="#main"
      class="sr-only bg-accent px-4 py-2 font-mono text-caption text-void-black uppercase focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
    >
      {{ t('common.skip') }}
    </a>
    <LayoutTheHeader />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <LayoutTheFooter />
  </div>
</template>
