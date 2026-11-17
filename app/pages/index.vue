<script setup lang="ts">
const l = useContentLocale()
const { data: site } = await useSiteData()
const { data } = await useAsyncData(
  () => `home-${l.value}`,
  async () => {
    const [home, services, ecosystem] = await Promise.all([
      queryCollection(`home_${l.value}`).first(),
      queryCollection(`services_${l.value}`).first(),
      queryCollection(`ecosystem_${l.value}`).first(),
    ])
    return { home, services, ecosystem }
  },
)

if (!data.value?.home || !data.value.services || !data.value.ecosystem) {
  throw createError({ statusCode: 500, statusMessage: 'Home content not found', fatal: true })
}

usePageSeo(() => data.value?.home?.seo)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Contextual Intelligence Partners',
        url: 'https://contextual.team',
        foundingDate: '2016',
      }),
    },
  ],
})
</script>

<template>
  <div v-if="data?.home && data.services && data.ecosystem && site">
    <SectionHero :hero="data.home.hero" />
    <SectionContextStack
      :context="data.home.context"
      :pillars="site.pillars"
      :sectors="site.sectors"
    />
    <SectionPillars
      tone="light"
      :title="data.home.pillars.title"
      :intro="data.home.pillars.intro"
      :pillars="site.pillars"
    />
    <SectionMethod
      :method="data.services.method"
      :title="data.home.method.title"
      :intro="data.home.method.intro"
      :link="{ label: data.home.method.linkLabel, to: { name: 'servicios', hash: '#approach' } }"
    />
    <SectionSectors
      :title="data.home.sectors.title"
      :intro="data.home.sectors.intro"
      :sectors="site.sectors"
    />
    <SectionStatement :statement="data.home.statement" />
    <SectionEcosystemTeaser
      :ecosystem="data.home.ecosystem"
      :partners="data.ecosystem.partners.items.map((p) => p.name)"
    />
    <SectionCta :cta="data.home.cta" />
  </div>
</template>
