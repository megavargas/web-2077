<script setup lang="ts">
import type { FaqItem } from '~/types/content'

const { items = [] } = defineProps<{ items?: FaqItem[] }>()
const { t } = useI18n()

useFaqSchema(() => items)
</script>

<template>
  <section v-if="items.length" class="py-12 md:py-20" aria-labelledby="faq-title">
    <UiContainer class="grid gap-10 lg:grid-cols-3">
      <h2 id="faq-title" class="font-display text-heading font-light text-bone-white">
        {{ t('labels.faq') }}
      </h2>
      <div class="lg:col-span-2"><UiFaq :items="items" /></div>
    </UiContainer>
  </section>
</template>
