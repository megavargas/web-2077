<script setup lang="ts">
const model = defineModel<string>({ default: '' })
const {
  id,
  rows = 6,
  invalid = false,
  describedby,
} = defineProps<{
  id: string
  rows?: number
  invalid?: boolean
  describedby?: string
}>()
</script>

<template>
  <textarea
    :id="id"
    v-model="model"
    :name="id"
    :rows="rows"
    :aria-invalid="invalid ? 'true' : undefined"
    :aria-describedby="describedby"
    class="w-full resize-y border border-graphite-border bg-carbon px-4 py-3 font-body text-body text-bone-white outline-none placeholder:text-steel-mid focus:border-accent aria-[invalid=true]:border-accent"
  />
</template>
