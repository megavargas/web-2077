<script setup lang="ts">
definePageMeta({ i18n: { paths: { es: '/servicios', en: '/services' } } })

const l = useContentLocale()
const { data: site } = await useSiteData()
const { data: page } = await useAsyncData(
  () => `services-${l.value}`,
  () => queryCollection(`services_${l.value}`).first(),
)
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

usePageSeo(() => page.value?.seo)
</script>

<template>
  <div v-if="page && site">
    <UiPageHeader v-bind="page.header">
      <UiButton :to="{ name: 'servicios-diagnostico' }">{{ page.cta.button }}</UiButton>
    </UiPageHeader>

    <SectionPillars id="pillars" :title="page.pillarsTitle" :pillars="site.pillars" />
    <SectionMethod :method="page.method" show-deliverables />

    <section class="py-12 md:py-20" aria-labelledby="engagement-title">
      <UiContainer>
        <UiSectionHeader id="engagement-title" :title="page.engagement.title" />
        <p class="mb-12 max-w-prose font-body text-subheading text-pretty text-fog-light">
          {{ page.engagement.intro }}
        </p>
        <ul class="grid gap-10 md:grid-cols-3 md:gap-8">
          <li
            v-for="model in page.engagement.models"
            :key="model.name"
            class="flex flex-col gap-3 border-t border-graphite-border pt-6"
          >
            <h3 class="font-display text-heading-sm font-normal text-bone-white">
              {{ model.name }}
            </h3>
            <p class="font-body text-body text-pretty text-fog-light">{{ model.text }}</p>
          </li>
        </ul>
      </UiContainer>
    </section>

    <SectionFaq :items="page.faq" />
    <SectionCta :cta="page.cta" />
  </div>
</template>
