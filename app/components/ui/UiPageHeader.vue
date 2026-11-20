<script setup lang="ts">
const localePath = useLocalePath()
const { eyebrow, title, intro, crumbs } = defineProps<{
  eyebrow: string
  title: string
  intro?: string
  /** Migas de pan antes del eyebrow (páginas de tercer nivel): enlaces a los niveles superiores */
  crumbs?: { label: string; to: Parameters<typeof localePath>[0] }[]
}>()
const { t } = useI18n()
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-void-black py-16 md:py-24"
    aria-labelledby="page-title"
  >
    <!-- Grafismo opcional a la derecha, con fundido al fondo (como el hero de la home) -->
    <div
      v-if="$slots.visual"
      class="absolute inset-0 -z-10 opacity-50 lg:right-0 lg:left-auto lg:w-1/2 lg:opacity-100"
    >
      <slot name="visual" />
      <div
        class="absolute inset-0 bg-linear-to-b from-void-black/80 via-transparent to-void-black"
      />
      <div class="absolute inset-0 bg-linear-to-r from-void-black via-transparent to-transparent" />
    </div>
    <UiContainer class="flex flex-col gap-6">
      <nav v-if="crumbs?.length" :aria-label="t('labels.breadcrumb')">
        <ol class="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-caption uppercase">
          <li v-for="c in crumbs" :key="c.label" class="flex items-center gap-2">
            <NuxtLink
              :to="localePath(c.to)"
              class="text-fog-light underline-offset-4 hover:text-bone-white hover:underline"
            >
              {{ c.label }}
            </NuxtLink>
            <span aria-hidden="true" class="text-steel-mid">/</span>
          </li>
          <li class="text-bone-white">{{ eyebrow }}</li>
        </ol>
      </nav>
      <p v-else class="font-mono text-caption text-fog-light uppercase">{{ eyebrow }}</p>
      <h1
        id="page-title"
        class="max-w-5xl font-display text-heading font-light text-balance wrap-break-word hyphens-auto text-bone-white sm:text-heading-lg lg:text-display"
      >
        {{ title }}
      </h1>
      <p v-if="intro" class="max-w-[640px] font-body text-subheading text-pretty text-fog-light">
        {{ intro }}
      </p>
      <div v-if="$slots.default" class="flex flex-wrap gap-4 pt-2">
        <slot />
      </div>
    </UiContainer>
  </section>
</template>
