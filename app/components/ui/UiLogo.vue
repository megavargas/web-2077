<script setup lang="ts">
/*
 * Logotipo de Contextual Intelligence Partners (ruta 33 «Llave abierta», 20/11/2026):
 * «{» en el color de acento + «contextual» y, alineado a la derecha debajo,
 * «intelligence partners» en un tono más apagado. Archivo Regular convertida en trazados
 * (assets/data/logo.json); colores del tema (acento cian/azul de marca según el modo,
 * bone-white + fog-light sobre marino; marino + gris azulado en modo claro).
 */
import logo from '~/assets/data/logo.json'

const { size = 'sm' } = defineProps<{
  /** sm: cabecera · md: pie */
  size?: 'sm' | 'md'
}>()
const { t } = useI18n()
</script>

<template>
  <NuxtLinkLocale to="/" :aria-label="t('common.home')" class="inline-block">
    <svg
      :viewBox="logo.viewBox"
      class="w-auto"
      :class="size === 'md' ? 'h-14' : 'h-11'"
      aria-hidden="true"
      focusable="false"
    >
      <path :d="logo.brace" class="fill-accent" />
      <path :d="logo.name" class="fill-bone-white" />
      <path :d="logo.descriptor" class="fill-fog-light" />
    </svg>
  </NuxtLinkLocale>
</template>
