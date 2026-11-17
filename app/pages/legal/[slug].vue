<script setup lang="ts">
definePageMeta({ i18n: { paths: { en: '/legal/[slug]' } } })

const { t } = useI18n()
const route = useRoute()
const l = useContentLocale()
const setI18nParams = useSetI18nParams()

const slug = computed(() => String(route.params.slug))
const { data: doc } = await useAsyncData(
  () => `legal-${l.value}-${slug.value}`,
  () => queryCollection(`legal_${l.value}`).path(`/legal/${slug.value}`).first(),
)
if (!doc.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const key = doc.value.key
setI18nParams({ es: { slug: legalSlugs.es[key] }, en: { slug: legalSlugs.en[key] } })

usePageSeo(() =>
  doc.value ? { title: doc.value.title, description: doc.value.description } : undefined,
)
useSeoMeta({ robots: 'noindex, follow' })
</script>

<template>
  <div v-if="doc">
    <UiPageHeader :eyebrow="t('footer.legal')" :title="doc.title" />
    <UiContainer class="pb-20">
      <div class="border-t border-graphite-border pt-12">
        <p class="mb-8 font-mono text-caption text-fog-light uppercase">
          {{ t('legal.updated', { date: doc.updated }) }}
        </p>
        <ContentRenderer :value="doc" class="prose-ctx max-w-prose" />
      </div>
    </UiContainer>
  </div>
</template>
