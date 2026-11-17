<script setup lang="ts">
const model = defineModel<string>({ default: '' })
const {
  id,
  type = 'text',
  invalid = false,
  describedby,
} = defineProps<{
  id: string
  type?: 'text' | 'email' | 'tel'
  invalid?: boolean
  describedby?: string
}>()
</script>

<template>
  <input
    :id="id"
    v-model="model"
    :name="id"
    :type="type"
    :aria-invalid="invalid ? 'true' : undefined"
    :aria-describedby="describedby"
    class="w-full border border-graphite-border bg-carbon px-4 py-3 font-body text-body text-bone-white outline-none placeholder:text-steel-mid focus:border-accent aria-[invalid=true]:border-accent"
  />
</template>
