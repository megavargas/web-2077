<script setup lang="ts">
definePageMeta({ i18n: { paths: { es: '/servicios/[pillar]', en: '/services/[pillar]' } } })

const { t } = useI18n()
const route = useRoute()
const l = useContentLocale()
const setI18nParams = useSetI18nParams()
const { data: site } = await useSiteData()

const slug = computed(() => String(route.params.pillar))
const { data: pillar } = await useAsyncData(
  () => `pillar-${l.value}-${slug.value}`,
  () => queryCollection(`pillars_${l.value}`).where('slug', '=', slug.value).first(),
)
if (!pillar.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

// Slug equivalente en el otro idioma, para el selector de idioma.
const other = l.value === 'es' ? 'en' : 'es'
const { data: otherPillar } = await useAsyncData(
  () => `pillar-${other}-${pillar.value?.key}`,
  () => queryCollection(`pillars_${other}`).where('key', '=', pillar.value!.key).first(),
)
setI18nParams({
  [l.value]: { pillar: slug.value },
  [other]: { pillar: otherPillar.value?.slug ?? slug.value },
})

usePageSeo(() => pillar.value?.seo)

const index = computed(
  () => site.value?.pillars.findIndex((p) => p.key === pillar.value?.key) ?? -1,
)
const prev = computed(() => (index.value > 0 ? site.value?.pillars[index.value - 1] : undefined))
const next = computed(() => site.value?.pillars[index.value + 1])

/** Casos de uso de cada sector en los que interviene este pilar. */
const applications = computed(() =>
  (site.value?.sectors ?? [])
    .map((s) => ({
      sector: s,
      useCases: s.domains.items
        .flatMap((d) => d.useCases)
        .filter((u) => pillar.value && u.pillars.includes(pillar.value.key)),
    }))
    .filter((a) => a.useCases.length),
)
</script>

<template>
  <div v-if="pillar">
    <UiPageHeader
      :eyebrow="`${pillar.number} · ${t('labels.services')}`"
      :title="pillar.name"
      :intro="pillar.summary"
    >
      <UiButton :to="{ name: 'servicios-diagnostico' }">{{ pillar.cta.button }}</UiButton>
    </UiPageHeader>

    <section class="py-12 md:py-20" aria-labelledby="problem-title">
      <UiContainer class="grid gap-10 border-t border-graphite-border pt-12 lg:grid-cols-3">
        <h2 id="problem-title" class="font-display text-heading font-light text-bone-white">
          {{ pillar.problem.title }}
        </h2>
        <p class="font-body text-subheading text-pretty text-fog-light lg:col-span-2">
          {{ pillar.problem.text }}
        </p>
      </UiContainer>
    </section>

    <section class="py-12 md:py-20" aria-labelledby="includes-title">
      <UiContainer>
        <UiSectionHeader id="includes-title" :title="pillar.includes.title" />
        <ul class="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <li
            v-for="item in pillar.includes.items"
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

    <section class="py-12 md:py-20" aria-labelledby="outcome-title">
      <UiContainer>
        <div class="border-l border-bone-white pl-6 md:pl-10">
          <h2 id="outcome-title" class="mb-4 font-mono text-caption text-fog-light uppercase">
            {{ pillar.outcome.title }}
          </h2>
          <p
            class="max-w-4xl font-display text-heading-sm font-light text-balance text-bone-white md:text-heading"
          >
            {{ pillar.outcome.text }}
          </p>
        </div>
      </UiContainer>
    </section>

    <section v-if="applications.length" class="py-12 md:py-20" aria-labelledby="apply-title">
      <UiContainer>
        <UiSectionHeader id="apply-title" :title="t('labels.whereWeApply')" />
        <ul class="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <li
            v-for="a in applications"
            :key="a.sector.key"
            class="flex flex-col gap-4 border-t border-graphite-border pt-6"
          >
            <h3 class="font-display text-heading-sm font-normal text-bone-white">
              <NuxtLinkLocale
                :to="{ name: 'sectores-sector', params: { sector: a.sector.slug } }"
                class="hover:text-accent"
              >
                {{ a.sector.name }}
              </NuxtLinkLocale>
            </h3>
            <ul class="border-t border-graphite-border font-body text-caption text-bone-white">
              <li
                v-for="u in a.useCases"
                :key="u.name"
                class="border-b border-graphite-border py-2.5"
              >
                {{ u.name }}
              </li>
            </ul>
          </li>
        </ul>
      </UiContainer>
    </section>

    <section v-if="pillar.technologies?.length" class="py-12 md:py-20" aria-labelledby="tech-title">
      <UiContainer class="grid gap-6 lg:grid-cols-3">
        <h2 id="tech-title" class="font-mono text-caption text-fog-light uppercase">
          {{ t('labels.technologies') }}
        </h2>
        <div class="lg:col-span-2"><UiTagList :items="pillar.technologies ?? []" /></div>
      </UiContainer>
    </section>

    <SectionFaq :items="pillar.faq" />

    <nav :aria-label="t('labels.services')" class="py-12">
      <UiContainer class="grid grid-cols-2 gap-6 border-t border-graphite-border pt-8">
        <div>
          <NuxtLinkLocale
            v-if="prev"
            :to="{ name: 'servicios-pillar', params: { pillar: prev.slug } }"
            class="group flex flex-col gap-2"
          >
            <span class="font-mono text-caption text-fog-light uppercase">
              ← {{ t('labels.previous') }} · {{ prev.number }}
            </span>
            <span class="font-display text-heading-sm text-bone-white group-hover:text-accent">
              {{ prev.name }}
            </span>
          </NuxtLinkLocale>
        </div>
        <div class="text-right">
          <NuxtLinkLocale
            v-if="next"
            :to="{ name: 'servicios-pillar', params: { pillar: next.slug } }"
            class="group flex flex-col items-end gap-2"
          >
            <span class="font-mono text-caption text-fog-light uppercase">
              {{ next.number }} · {{ t('labels.next') }} →
            </span>
            <span class="font-display text-heading-sm text-bone-white group-hover:text-accent">
              {{ next.name }}
            </span>
          </NuxtLinkLocale>
        </div>
      </UiContainer>
    </nav>

    <SectionCta :cta="pillar.cta" />
  </div>
</template>
