<script setup lang="ts">
/**
 * Contenedor de página: el envoltorio exterior aporta el ancho máximo y el gutter;
 * las clases que recibe (grid, borde, padding…) se aplican al bloque interior,
 * de modo que bordes y fondos quedan alineados con el contenido, no con el gutter.
 */
defineOptions({ inheritAttrs: false })
const { as = 'div' } = defineProps<{ as?: string }>()
</script>

<template>
  <component :is="as" class="mx-auto w-full max-w-page px-4 md:px-10">
    <div v-bind="$attrs"><slot /></div>
  </component>
</template>
