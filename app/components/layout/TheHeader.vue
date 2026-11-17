<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header class="bg-void-black">
    <UiContainer class="flex items-center justify-between py-4">
      <UiLogo />
      <!-- TODO: navegación principal cuando existan las páginas (ver content.md §5) -->
      <nav :aria-label="t('common.language')">
        <LayoutTheLocaleSwitch />
      </nav>
    </UiContainer>
  </header>
</template>
