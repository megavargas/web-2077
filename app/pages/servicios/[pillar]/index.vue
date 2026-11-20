<script setup lang="ts">
definePageMeta({
  middleware: 'locale-params',
  i18n: { paths: { es: '/servicios/[pillar]', en: '/services/[pillar]' } },
})

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

// Slug equivalente en el otro idioma: lo calcula el middleware locale-params
setI18nParams(useLocaleParamsState().value?.params ?? {})

usePageSeo(() => pillar.value?.seo)

const index = computed(
  () => site.value?.pillars.findIndex((p) => p.key === pillar.value?.key) ?? -1,
)
const prev = computed(() => (index.value > 0 ? site.value?.pillars[index.value - 1] : undefined))
const next = computed(() => site.value?.pillars[index.value + 1])
const subservices = computed(() => site.value?.pillars[index.value]?.subservices ?? [])

/** Casos de uso de cada sector en los que interviene este pilar. */
const applications = computed(() =>
  (site.value?.sectors ?? [])
    .map((s) => ({
      sector: s,
      useCases: s.domains.items
        .flatMap((d) => d.useCases)
        // El pilar de cada solución se deduce de sus subservicios
        .filter((u) =>
          u.services.some(
            (key) =>
              site.value?.subservices.find((x) => x.key === key)?.pillar === pillar.value?.key,
          ),
        ),
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
      <template #visual><PillarVisual :pillar="pillar.key" class="h-full w-full" /></template>
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
            v-for="s in subservices"
            :key="s.key"
            class="group relative flex flex-col gap-3 border-t border-graphite-border pt-6 hover:border-bone-white"
          >
            <span aria-hidden="true" class="font-mono text-caption text-fog-light">
              {{ pillar.number }}.{{ s.order }}
            </span>
            <h3 class="font-display text-heading-sm font-normal text-bone-white">
              <NuxtLinkLocale
                :to="{
                  name: 'servicios-pillar-service',
                  params: { pillar: pillar.slug, service: s.slug },
                }"
                class="group-hover:text-accent after:absolute after:inset-0"
              >
                {{ s.name }}
              </NuxtLinkLocale>
            </h3>
            <p class="font-body text-body text-pretty text-fog-light">{{ s.summary }}</p>
            <p
              class="mt-auto flex items-center gap-2 pt-2 font-mono text-caption text-accent uppercase"
            >
              {{ t('labels.readMore') }}
              <Icon name="lucide:arrow-right" class="size-4" aria-hidden="true" />
            </p>
          </li>
        </ul>
      </UiContainer>
    </section>

    <!-- Resultado: sección azul muy claro -->
    <section class="bg-mist py-16 md:py-24" aria-labelledby="outcome-title">
      <UiContainer>
        <div class="border-l border-void-black pl-6 md:pl-10">
          <h2 id="outcome-title" class="mb-4 font-mono text-caption text-ink-mid uppercase">
            {{ pillar.outcome.title }}
          </h2>
          <p
            class="max-w-4xl font-display text-heading-sm font-light text-balance text-void-black md:text-heading"
          >
            {{ pillar.outcome.text }}
          </p>
        </div>
      </UiContainer>
    </section>

    <!-- Dónde lo aplicamos: sección blanca -->
    <section
      v-if="applications.length"
      class="bg-paper py-16 md:py-24 [&_:focus-visible]:outline-void-black"
      aria-labelledby="apply-title"
    >
      <UiContainer>
        <UiSectionHeader id="apply-title" :title="t('labels.whereWeApply')" tone="light" />
        <ul class="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <li
            v-for="a in applications"
            :key="a.sector.key"
            class="flex flex-col gap-4 border-t border-mist-border pt-6"
          >
            <h3 class="font-display text-heading-sm font-normal text-void-black">
              <NuxtLinkLocale
                :to="{ name: 'sectores-sector', params: { sector: a.sector.slug } }"
                class="hover:text-accent-deep"
              >
                {{ a.sector.name }}
              </NuxtLinkLocale>
            </h3>
            <ul class="border-t border-mist-border font-body text-caption text-void-black">
              <li v-for="u in a.useCases" :key="u.name" class="border-b border-mist-border py-2.5">
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
