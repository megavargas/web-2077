<script setup lang="ts">
definePageMeta({ i18n: { paths: { en: '/careers' } } })

const l = useContentLocale()
const { data: page } = await useAsyncData(
  () => `talent-${l.value}`,
  () => queryCollection(`talent_${l.value}`).first(),
)
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

usePageSeo(() => page.value?.seo)
</script>

<template>
  <div v-if="page">
    <UiPageHeader v-bind="page.header">
      <UiButton :to="{ name: 'contacto', query: { reason: 'careers' } }">
        {{ page.openings.button }}
      </UiButton>
    </UiPageHeader>

    <section class="py-12 md:py-20" aria-labelledby="culture-title">
      <UiContainer>
        <UiSectionHeader id="culture-title" :title="page.culture.title" />
        <ul class="grid gap-10 md:grid-cols-3 md:gap-8">
          <li
            v-for="item in page.culture.items"
            :key="item.name"
            class="flex flex-col gap-3 border-t border-graphite-border pt-6"
          >
            <h3 class="font-display text-heading-sm font-normal text-bone-white">
              {{ item.name }}
            </h3>
            <p class="font-body text-body text-pretty text-fog-light">{{ item.text }}</p>
          </li>
        </ul>
      </UiContainer>
    </section>

    <section class="py-12 md:py-20" aria-labelledby="process-title">
      <UiContainer>
        <UiSectionHeader id="process-title" :title="page.process.title" />
        <ol class="grid gap-8 md:grid-cols-5 md:gap-6">
          <li
            v-for="(step, i) in page.process.steps"
            :key="step.name"
            class="flex flex-col gap-3 border-t border-graphite-border pt-6"
          >
            <span aria-hidden="true" class="font-mono text-caption text-fog-light">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <h3 class="font-display text-heading-sm font-normal text-bone-white">
              {{ step.name }}
            </h3>
            <p class="font-body text-body text-pretty text-fog-light">{{ step.text }}</p>
          </li>
        </ol>
      </UiContainer>
    </section>

    <section class="py-12 md:py-20" aria-labelledby="openings-title">
      <UiContainer>
        <div class="grid gap-10 border-t border-graphite-border pt-12 md:grid-cols-2">
          <h2
            id="openings-title"
            class="font-display text-heading font-light text-bone-white md:text-heading-lg"
          >
            {{ page.openings.title }}
          </h2>
          <div class="flex flex-col items-start gap-8">
            <p class="font-body text-subheading text-pretty text-fog-light">
              {{ page.openings.text }}
            </p>
            <UiButton :to="{ name: 'contacto', query: { reason: 'careers' } }">
              {{ page.openings.button }}
            </UiButton>
          </div>
        </div>
      </UiContainer>
    </section>
  </div>
</template>
