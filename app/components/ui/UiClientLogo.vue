<script setup lang="ts">
import data from '~/assets/data/clients.json'

/**
 * Logo de cliente plano, en el color del texto (blanco en oscuro, marino en claro), con el
 * nombre para lectores de pantalla. Tamaño óptico: los alargados se ensanchan menos que
 * proporcionalmente, para que todos pesen parecido en una fila. Datos en assets/data/clients.json.
 */
const { client } = defineProps<{ client: string }>()

const logo = computed(() => data.clients.find((c) => c.key === client))
const width = computed(() => {
  const [, , w = 1, h = 1] = (logo.value?.viewBox ?? '').split(' ').map(Number)
  return `${Math.min(8, 3 * Math.sqrt(w / h))}rem`
})
</script>

<template>
  <span v-if="logo" class="inline-flex items-center">
    <svg
      :viewBox="logo.viewBox"
      :style="{ width }"
      class="h-auto fill-current"
      aria-hidden="true"
      focusable="false"
    >
      <g :transform="logo.transform || undefined"><path :d="logo.d" /></g>
    </svg>
    <span class="sr-only">{{ logo.name }}</span>
  </span>
</template>
