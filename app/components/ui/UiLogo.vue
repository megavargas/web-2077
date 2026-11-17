<script setup lang="ts">
// TODO: sustituir por el logo vectorial de Contextual (versión monocroma blanca).
const { t } = useI18n()
</script>

<template>
  <NuxtLinkLocale
    to="/"
    :aria-label="t('common.home')"
    class="font-mono text-body tracking-widest text-bone-white uppercase"
  >
    Contextual
  </NuxtLinkLocale>
</template>
