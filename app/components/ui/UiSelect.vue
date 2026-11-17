<script setup lang="ts">
const model = defineModel<string>({ default: '' })
const {
  id,
  options,
  placeholder,
  invalid = false,
  describedby,
} = defineProps<{
  id: string
  options: { value: string; label: string }[]
  placeholder: string
  invalid?: boolean
  describedby?: string
}>()
</script>

<template>
  <div class="relative">
    <select
      :id="id"
      v-model="model"
      :name="id"
      :aria-invalid="invalid ? 'true' : undefined"
      :aria-describedby="describedby"
      class="w-full appearance-none border border-graphite-border bg-carbon py-3 pr-12 pl-4 font-body text-body text-bone-white outline-none focus:border-accent aria-[invalid=true]:border-accent"
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>
    <Icon
      name="lucide:chevron-down"
      class="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-fog-light"
      aria-hidden="true"
    />
  </div>
</template>
