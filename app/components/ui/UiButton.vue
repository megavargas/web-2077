<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const {
  variant = 'filled',
  to,
  href,
  type = 'button',
} = defineProps<{
  variant?: 'filled' | 'ghost'
  /** Ruta interna (se localiza automáticamente) */
  to?: RouteLocationRaw
  /** Enlace externo */
  href?: string
  type?: 'button' | 'submit' | 'reset'
}>()

const NuxtLinkLocale = resolveComponent('NuxtLinkLocale')

const variants = {
  filled: 'border-accent bg-accent text-void-black hover:border-bone-white hover:bg-bone-white',
  ghost:
    'border-bone-white bg-transparent text-bone-white hover:bg-bone-white hover:text-void-black',
} as const

const tag = computed(() => (to ? NuxtLinkLocale : href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    class="inline-flex items-center justify-center gap-2 border px-4 py-2 font-mono text-caption uppercase transition-colors duration-150"
    :class="variants[variant]"
  >
    <slot />
  </component>
</template>
