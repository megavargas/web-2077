<script setup lang="ts">
const { t } = useI18n()
const { theme, toggle } = useTheme()
const label = computed(() => (theme.value === 'dark' ? t('common.toLight') : t('common.toDark')))
</script>

<template>
  <button
    type="button"
    class="inline-flex size-8 items-center justify-center text-bone-white hover:text-accent"
    :aria-label="label"
    :title="label"
    @click="toggle"
  >
    <Icon
      :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'"
      class="size-5"
      aria-hidden="true"
    />
  </button>
</template>
