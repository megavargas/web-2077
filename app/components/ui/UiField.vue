<script setup lang="ts">
/** Etiqueta + control + error accesible. El control recibe `id` y los aria-* desde el slot. */
const { id, label, error, optional } = defineProps<{
  id: string
  label: string
  error?: string
  optional?: string
}>()

const errorId = computed(() => `${id}-error`)
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="id" class="font-mono text-caption text-fog-light uppercase">
      {{ label }}
      <span v-if="optional" class="normal-case">({{ optional }})</span>
    </label>
    <slot :invalid="Boolean(error)" :describedby="error ? errorId : undefined" />
    <p v-if="error" :id="errorId" class="font-mono text-caption text-accent">{{ error }}</p>
  </div>
</template>
