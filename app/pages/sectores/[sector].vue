<script setup lang="ts">
definePageMeta({ i18n: { paths: { es: '/sectores/[sector]', en: '/industries/[sector]' } } })

const { t } = useI18n()
const route = useRoute()
const l = useContentLocale()
const setI18nParams = useSetI18nParams()
const { data: site } = await useSiteData()

const slug = computed(() => String(route.params.sector))
const { data: sector } = await useAsyncData(
  () => `sector-${l.value}-${slug.value}`,
  () => queryCollection(`sectors_${l.value}`).where('slug', '=', slug.value).first(),
)
if (!sector.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const other = l.value === 'es' ? 'en' : 'es'
const { data: otherSector } = await useAsyncData(
  () => `sector-${other}-${sector.value?.key}`,
  () => queryCollection(`sectors_${other}`).where('key', '=', sector.value!.key).first(),
)
setI18nParams({
  [l.value]: { sector: slug.value },
  [other]: { sector: otherSector.value?.slug ?? slug.value },
})

usePageSeo(() => sector.value?.seo)

const pillarByKey = computed(() => new Map((site.value?.pillars ?? []).map((p) => [p.key, p])))
const otherSectors = computed(() =>
  (site.value?.sectors ?? []).filter((s) => s.key !== sector.value?.key),
)
const contactTo = computed(() => ({
  name: 'contacto',
  query: { sector: sector.value?.key, reason: 'project' },
}))
</script>

<template>
  <div v-if="sector">
    <UiPageHeader v-bind="sector.header">
      <UiButton :to="contactTo">{{ sector.cta.button }}</UiButton>
      <UiButton variant="ghost" :to="{ name: 'servicios-diagnostico' }">
        {{ t('nav.assessment') }}
      </UiButton>
    </UiPageHeader>

    <section class="py-12 md:py-20" aria-labelledby="challenges-title">
      <UiContainer>
        <UiSectionHeader id="challenges-title" :title="sector.challenges.title" />
        <ul class="grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          <li
            v-for="item in sector.challenges.items"
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

    <section class="py-12 md:py-20" aria-labelledby="domains-title">
      <UiContainer>
        <UiSectionHeader id="domains-title" :title="sector.domains.title" />
        <p class="mb-12 max-w-prose font-body text-subheading text-pretty text-fog-light">
          {{ sector.domains.intro }}
        </p>
        <div class="flex flex-col gap-12">
          <div
            v-for="domain in sector.domains.items"
            :key="domain.name"
            class="grid gap-6 border-t border-graphite-border pt-6 lg:grid-cols-3"
          >
            <h3 class="font-display text-heading font-light text-bone-white">{{ domain.name }}</h3>
            <ul class="flex flex-col gap-8 lg:col-span-2">
              <li v-for="u in domain.useCases" :key="u.name" class="flex flex-col gap-3">
                <h4 class="font-display text-heading-sm font-normal text-bone-white">
                  {{ u.name }}
                </h4>
                <p class="font-body text-body text-pretty text-fog-light">{{ u.text }}</p>
                <p class="sr-only">{{ t('labels.pillars') }}:</p>
                <ul class="flex flex-wrap gap-2">
                  <li v-for="key in u.pillars" :key="key">
                    <NuxtLinkLocale
                      v-if="pillarByKey.get(key)"
                      :to="{
                        name: 'servicios-pillar',
                        params: { pillar: pillarByKey.get(key)!.slug },
                      }"
                      class="inline-block border border-graphite-border bg-carbon px-2 py-1 font-mono text-caption text-fog-light uppercase hover:border-bone-white hover:text-bone-white"
                    >
                      {{ pillarByKey.get(key)!.number }} {{ pillarByKey.get(key)!.name }}
                    </NuxtLinkLocale>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </UiContainer>
    </section>

    <section class="py-12 md:py-20" aria-labelledby="regulation-title">
      <UiContainer class="grid gap-10 lg:grid-cols-3">
        <div class="flex flex-col gap-4">
          <h2 id="regulation-title" class="font-display text-heading font-light text-bone-white">
            {{ sector.regulation.title }}
          </h2>
          <p class="font-body text-body text-pretty text-fog-light">
            {{ sector.regulation.intro }}
          </p>
        </div>
        <dl class="border-t border-graphite-border lg:col-span-2">
          <div
            v-for="item in sector.regulation.items"
            :key="item.name"
            class="grid gap-3 border-b border-graphite-border py-5 md:grid-cols-3"
          >
            <dt>
              <UiBadge>{{ item.name }}</UiBadge>
            </dt>
            <dd class="font-body text-body text-pretty text-bone-white md:col-span-2">
              {{ item.text }}
            </dd>
          </div>
        </dl>
      </UiContainer>
    </section>

    <section v-if="sector.expert" class="py-12" aria-labelledby="expert-title">
      <UiContainer class="flex flex-col gap-2 border-t border-graphite-border pt-8">
        <h2 id="expert-title" class="font-display text-heading-sm text-bone-white">
          {{ sector.expert.name }}
        </h2>
        <p class="font-mono text-caption text-fog-light uppercase">{{ sector.expert.role }}</p>
      </UiContainer>
    </section>

    <SectionFaq :items="sector.faq" />

    <nav :aria-label="t('labels.otherSectors')" class="py-12">
      <UiContainer class="flex flex-col gap-6 border-t border-graphite-border pt-8">
        <h2 class="font-mono text-caption text-fog-light uppercase">
          {{ t('labels.otherSectors') }}
        </h2>
        <ul class="grid gap-6 md:grid-cols-2">
          <li v-for="s in otherSectors" :key="s.key">
            <NuxtLinkLocale
              :to="{ name: 'sectores-sector', params: { sector: s.slug } }"
              class="group flex flex-col gap-2"
            >
              <span class="font-display text-heading-sm text-bone-white group-hover:text-accent">
                {{ s.name }} →
              </span>
              <span class="font-body text-body text-fog-light">{{ s.benefit }}</span>
            </NuxtLinkLocale>
          </li>
        </ul>
      </UiContainer>
    </nav>

    <SectionCta :cta="sector.cta" :to="contactTo" />
  </div>
</template>
