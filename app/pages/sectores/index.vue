<script setup lang="ts">
definePageMeta({ i18n: { paths: { es: '/sectores', en: '/industries' } } })

const l = useContentLocale()
const { data: site } = await useSiteData()
const { data } = await useAsyncData(
  () => `sectors-page-${l.value}`,
  async () => {
    const [page, home] = await Promise.all([
      queryCollection(`sectorsPage_${l.value}`).first(),
      queryCollection(`home_${l.value}`).first(),
    ])
    return { page, home }
  },
)
if (!data.value?.page || !data.value.home) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

usePageSeo(() => data.value?.page?.seo)
</script>

<template>
  <div v-if="data?.page && data.home && site">
    <UiPageHeader v-bind="data.page.header">
      <template #visual><BlueprintField class="h-full w-full" /></template>
    </UiPageHeader>
    <SectionSectors :sectors="site.sectors" />
    <SectionOtherSectors :others="data.page.others" />
    <SectionStatement :statement="data.home.statement" />
    <SectionCta :cta="data.home.cta" />
  </div>
</template>
