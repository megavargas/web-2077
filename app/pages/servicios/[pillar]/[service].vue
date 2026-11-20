<script setup lang="ts">
import type { Subservice } from '~/types/content'

/**
 * Landing de un subservicio (/servicios/<pilar>/<subservicio>). Misma gramática que la del
 * pilar: problema → qué hacemos → cómo → resultado y entregables (claro) → dónde lo aplicamos
 * (blanco) → tecnologías → FAQ → resto del pilar y relacionados → anterior/siguiente → CTA.
 */
definePageMeta({
  middleware: 'locale-params',
  i18n: {
    paths: { es: '/servicios/[pillar]/[service]', en: '/services/[pillar]/[service]' },
  },
})

const { t } = useI18n()
const route = useRoute()
const l = useContentLocale()
const localePath = useLocalePath()
const setI18nParams = useSetI18nParams()
const { data: site } = await useSiteData()

const slug = computed(() => String(route.params.service))
const { data: service } = await useAsyncData(
  () => `subservice-${l.value}-${slug.value}`,
  () => queryCollection(`subservices_${l.value}`).where('slug', '=', slug.value).first(),
)
const pillar = computed(() => site.value?.pillars.find((p) => p.key === service.value?.pillar))

// El subservicio tiene que existir y colgar del pilar de la URL
if (!service.value || pillar.value?.slug !== String(route.params.pillar))
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

setI18nParams(useLocaleParamsState().value?.params ?? {})
usePageSeo(() => service.value?.seo)

const linkTo = (s: Subservice) => {
  const p = site.value?.pillars.find((x) => x.key === s.pillar)
  return { name: 'servicios-pillar-service', params: { pillar: p?.slug, service: s.slug } }
}
const numberOf = (s: Subservice) =>
  `${site.value?.pillars.find((x) => x.key === s.pillar)?.number}.${s.order}`

/** Recorrido global 01.1 → 04.5: anterior y siguiente cruzan de un pilar al siguiente. */
const all = computed(() => site.value?.subservices ?? [])
const index = computed(() => all.value.findIndex((s) => s.key === service.value?.key))
const prev = computed(() => (index.value > 0 ? all.value[index.value - 1] : undefined))
const next = computed(() => all.value[index.value + 1])

const related = computed(() =>
  (service.value?.related ?? [])
    .map((key) => all.value.find((s) => s.key === key))
    .filter((s): s is Subservice => !!s),
)

const sectorOf = (key: string) => site.value?.sectors.find((s) => s.key === key)

const crumbs = computed(() => [
  { label: t('labels.services'), to: { name: 'servicios' } },
  {
    label: `${pillar.value?.number} · ${pillar.value?.name}`,
    to: { name: 'servicios-pillar', params: { pillar: pillar.value?.slug } },
  },
])

// Datos estructurados: servicio y ruta de navegación
const siteUrl = 'https://contextual.team'
useHead({
  script: [
    {
      key: 'service-schema',
      type: 'application/ld+json',
      innerHTML: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: service.value?.name,
              description: service.value?.seo.description,
              serviceType: pillar.value?.name,
              provider: {
                '@type': 'Organization',
                name: 'Contextual Intelligence Partners',
                url: siteUrl,
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                ...crumbs.value.map((c, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  name: c.label,
                  item: siteUrl + localePath(c.to),
                })),
                { '@type': 'ListItem', position: 3, name: service.value?.name },
              ],
            },
          ],
        }),
    },
  ],
})
</script>

<template>
  <div v-if="service && pillar && site">
    <UiPageHeader
      :eyebrow="numberOf(service)"
      :crumbs="crumbs"
      :title="service.name"
      :intro="service.intro"
    >
      <template #visual><PillarVisual :pillar="pillar.key" class="h-full w-full" /></template>
      <UiButton :to="{ name: 'servicios-diagnostico' }">{{ service.cta.button }}</UiButton>
    </UiPageHeader>

    <section class="py-12 md:py-20" aria-labelledby="problem-title">
      <UiContainer class="grid gap-10 border-t border-graphite-border pt-12 lg:grid-cols-3">
        <h2 id="problem-title" class="font-display text-heading font-light text-bone-white">
          {{ service.problem.title }}
        </h2>
        <p class="font-body text-subheading text-pretty text-fog-light lg:col-span-2">
          {{ service.problem.text }}
        </p>
      </UiContainer>
    </section>

    <section class="py-12 md:py-20" aria-labelledby="capabilities-title">
      <UiContainer>
        <UiSectionHeader id="capabilities-title" :title="service.capabilities.title" />
        <ul class="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <li
            v-for="item in service.capabilities.items"
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

    <!-- Cómo lo hacemos: línea de pasos (sin números, para no chocar con la numeración del pilar) -->
    <section class="py-12 md:py-20" aria-labelledby="approach-title">
      <UiContainer>
        <UiSectionHeader id="approach-title" :title="service.approach.title" />
        <ol class="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <li
            v-for="step in service.approach.steps"
            :key="step.name"
            class="relative flex flex-col gap-3 border-l border-graphite-border pl-6 lg:border-t lg:border-l-0 lg:pt-8 lg:pr-8 lg:pl-0"
          >
            <span
              aria-hidden="true"
              class="absolute top-0 -left-1 size-2 bg-bone-white lg:-top-1 lg:left-0"
            />
            <h3 class="font-display text-heading-sm font-normal text-bone-white">
              {{ step.name }}
            </h3>
            <p class="font-body text-body text-pretty text-fog-light">{{ step.text }}</p>
          </li>
        </ol>
      </UiContainer>
    </section>

    <!-- Resultado y entregables: sección azul muy claro -->
    <section class="bg-mist py-16 md:py-24" aria-labelledby="outcome-title">
      <UiContainer class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="border-l border-void-black pl-6 md:pl-10">
          <h2 id="outcome-title" class="mb-4 font-mono text-caption text-ink-mid uppercase">
            {{ service.outcome.title }}
          </h2>
          <p
            class="font-display text-heading-sm font-light text-balance text-void-black md:text-heading"
          >
            {{ service.outcome.text }}
          </p>
        </div>
        <div>
          <h2 class="mb-4 font-mono text-caption text-ink-mid uppercase">
            {{ service.deliverables.title }}
          </h2>
          <ul class="border-t border-mist-border font-body text-body text-void-black">
            <li
              v-for="d in service.deliverables.items"
              :key="d"
              class="flex gap-3 border-b border-mist-border py-3"
            >
              <Icon name="lucide:check" class="mt-1 size-4 shrink-0" aria-hidden="true" />
              {{ d }}
            </li>
          </ul>
        </div>
      </UiContainer>
    </section>

    <!-- Dónde lo aplicamos: sección blanca -->
    <section
      class="bg-paper py-16 md:py-24 [&_:focus-visible]:outline-void-black"
      aria-labelledby="usecases-title"
    >
      <UiContainer>
        <UiSectionHeader id="usecases-title" :title="service.useCases.title" tone="light" />
        <ul class="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <li
            v-for="u in service.useCases.items"
            :key="u.sector"
            class="flex flex-col gap-3 border-t border-mist-border pt-6"
          >
            <NuxtLinkLocale
              v-if="sectorOf(u.sector)"
              :to="{ name: 'sectores-sector', params: { sector: sectorOf(u.sector)!.slug } }"
              class="font-mono text-caption text-ink-mid uppercase underline-offset-4 hover:text-accent-deep hover:underline"
            >
              {{ t('labels.sectorLabel', { sector: sectorOf(u.sector)!.name }) }}
            </NuxtLinkLocale>
            <h3 class="font-display text-heading-sm font-normal text-void-black">{{ u.name }}</h3>
            <p class="font-body text-body text-pretty text-ink-mid">{{ u.text }}</p>
          </li>
        </ul>
      </UiContainer>
    </section>

    <section
      v-if="service.technologies?.length"
      class="py-12 md:py-20"
      aria-labelledby="tech-title"
    >
      <UiContainer class="grid gap-6 lg:grid-cols-3">
        <h2 id="tech-title" class="font-mono text-caption text-fog-light uppercase">
          {{ t('labels.technologies') }}
        </h2>
        <div class="lg:col-span-2"><UiTagList :items="service.technologies ?? []" /></div>
      </UiContainer>
    </section>

    <SectionFaq :items="service.faq" />

    <!-- Resto del pilar y servicios relacionados -->
    <section class="py-12 md:py-20" aria-labelledby="more-title">
      <UiContainer
        class="grid gap-12 border-t border-graphite-border pt-12 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <h2 id="more-title" class="mb-6 font-mono text-caption text-fog-light uppercase">
            {{ t('labels.inPillar', { pillar: pillar.name }) }}
          </h2>
          <ul class="border-t border-graphite-border">
            <li
              v-for="s in pillar.subservices"
              :key="s.key"
              class="border-b border-graphite-border"
            >
              <NuxtLinkLocale
                :to="linkTo(s)"
                :aria-current="s.key === service.key ? 'page' : undefined"
                class="group flex items-baseline gap-4 py-3 font-body text-subheading aria-[current=page]:text-accent"
                :class="s.key === service.key ? '' : 'text-bone-white hover:text-accent'"
              >
                <span aria-hidden="true" class="font-mono text-caption text-fog-light">
                  {{ numberOf(s) }}
                </span>
                {{ s.name }}
              </NuxtLinkLocale>
            </li>
          </ul>
          <div class="mt-6">
            <UiLinkArrow :to="{ name: 'servicios-pillar', params: { pillar: pillar.slug } }">
              {{ t('labels.pillarOverview', { pillar: pillar.name }) }}
            </UiLinkArrow>
          </div>
        </div>
        <div v-if="related.length">
          <h2 class="mb-6 font-mono text-caption text-fog-light uppercase">
            {{ t('labels.related') }}
          </h2>
          <ul class="border-t border-graphite-border">
            <li v-for="s in related" :key="s.key" class="border-b border-graphite-border">
              <NuxtLinkLocale
                :to="linkTo(s)"
                class="group flex flex-col gap-1 py-4 text-bone-white hover:text-accent"
              >
                <span class="flex items-baseline gap-4 font-body text-subheading">
                  <span aria-hidden="true" class="font-mono text-caption text-fog-light">
                    {{ numberOf(s) }}
                  </span>
                  {{ s.name }}
                </span>
                <span class="font-body text-caption text-fog-light">{{ s.summary }}</span>
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>
      </UiContainer>
    </section>

    <nav :aria-label="t('labels.services')" class="pb-12">
      <UiContainer class="grid grid-cols-2 gap-6 border-t border-graphite-border pt-8">
        <div>
          <NuxtLinkLocale v-if="prev" :to="linkTo(prev)" class="group flex flex-col gap-2">
            <span class="font-mono text-caption text-fog-light uppercase">
              ← {{ t('labels.previous') }} · {{ numberOf(prev) }}
            </span>
            <span class="font-display text-heading-sm text-bone-white group-hover:text-accent">
              {{ prev.name }}
            </span>
          </NuxtLinkLocale>
        </div>
        <div class="text-right">
          <NuxtLinkLocale
            v-if="next"
            :to="linkTo(next)"
            class="group flex flex-col items-end gap-2"
          >
            <span class="font-mono text-caption text-fog-light uppercase">
              {{ numberOf(next) }} · {{ t('labels.next') }} →
            </span>
            <span class="font-display text-heading-sm text-bone-white group-hover:text-accent">
              {{ next.name }}
            </span>
          </NuxtLinkLocale>
        </div>
      </UiContainer>
    </nav>

    <SectionCta :cta="service.cta" />
  </div>
</template>
