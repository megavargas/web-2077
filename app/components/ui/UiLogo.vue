<script setup lang="ts">
/*
 * Logo de Contextual Intelligence Partners en vector (símbolo hexagonal + «contextual» +
 * «intelligence partners»), monocromo en el color del texto (bone-white sobre marino).
 * Trazado desde el logo de contextual.team; datos en assets/data/logo.json.
 */
import logo from '~/assets/data/logo.json'

const { size = 'sm' } = defineProps<{
  /** sm: cabecera · md: pie */
  size?: 'sm' | 'md'
}>()
const { t } = useI18n()
</script>

<template>
  <NuxtLinkLocale to="/" :aria-label="t('common.home')" class="inline-block text-bone-white">
    <svg
      :viewBox="logo.viewBox"
      class="w-auto fill-current"
      :class="size === 'md' ? 'h-12' : 'h-9'"
      fill-rule="evenodd"
      aria-hidden="true"
      focusable="false"
    >
      <path :d="logo.mark" />
      <path :d="logo.text" />
    </svg>
  </NuxtLinkLocale>
</template>
