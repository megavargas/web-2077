<script setup lang="ts">
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-void-black py-12 md:py-20">
    <UiContainer class="flex flex-col gap-10">
      <UiLogo />
      <p
        class="border-t border-graphite-border pt-6 font-mono text-caption text-fog-light uppercase"
      >
        © {{ year }} Contextual Intelligence Partners · {{ t('footer.rights') }}
      </p>
    </UiContainer>
  </footer>
</template>
