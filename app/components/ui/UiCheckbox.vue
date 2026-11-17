<script setup lang="ts">
const model = defineModel<boolean>({ default: false })
const {
  id,
  invalid = false,
  describedby,
} = defineProps<{
  id: string
  invalid?: boolean
  describedby?: string
}>()
</script>

<template>
  <div class="flex items-start gap-3">
    <span class="relative mt-0.5 inline-flex size-5 shrink-0">
      <input
        :id="id"
        v-model="model"
        :name="id"
        type="checkbox"
        :aria-invalid="invalid ? 'true' : undefined"
        :aria-describedby="describedby"
        class="peer size-5 cursor-pointer appearance-none border border-fog-light bg-carbon checked:border-accent checked:bg-accent aria-[invalid=true]:border-accent"
      />
      <Icon
        name="lucide:check"
        class="pointer-events-none absolute inset-0 hidden size-5 text-void-black peer-checked:block"
        aria-hidden="true"
      />
    </span>
    <label :for="id" class="font-body text-caption text-fog-light">
      <slot />
    </label>
  </div>
</template>
