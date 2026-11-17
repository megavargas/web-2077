<script setup lang="ts">
const { t } = useI18n()
const l = useContentLocale()
const { data: site } = await useSiteData()
const year = new Date().getFullYear()

const columns = computed(() => [
  {
    title: t('nav.services'),
    links: [
      ...(site.value?.pillars ?? []).map((p) => ({
        label: p.name,
        to: { name: 'servicios-pillar', params: { pillar: p.slug } },
      })),
      { label: t('nav.assessment'), to: { name: 'servicios-diagnostico' } },
    ],
  },
  {
    title: t('nav.sectors'),
    links: (site.value?.sectors ?? []).map((s) => ({
      label: s.name,
      to: { name: 'sectores-sector', params: { sector: s.slug } },
    })),
  },
  {
    title: t('footer.company'),
    links: [
      { label: t('nav.ecosystem'), to: { name: 'ecosistema' } },
      { label: t('nav.about'), to: { name: 'nosotros' } },
      { label: t('nav.careers'), to: { name: 'talento' } },
      { label: t('nav.contact'), to: { name: 'contacto' } },
    ],
  },
  {
    title: t('footer.legal'),
    links: (['notice', 'privacy', 'cookies'] as const).map((k) => ({
      label: t(`legal.${k}`),
      to: { name: 'legal-slug', params: { slug: legalSlugs[l.value][k] } },
    })),
  },
])
</script>

<template>
  <footer class="border-t border-graphite-border bg-void-black py-12 md:py-20">
    <UiContainer class="flex flex-col gap-12">
      <div class="grid gap-12 lg:grid-cols-3">
        <div class="flex flex-col gap-4">
          <UiLogo />
          <p class="max-w-xs font-body text-body text-fog-light">{{ t('footer.tagline') }}</p>
        </div>
        <nav :aria-label="t('nav.footer')" class="lg:col-span-2">
          <div class="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div v-for="col in columns" :key="col.title">
              <h2 class="mb-4 font-mono text-caption text-fog-light uppercase">{{ col.title }}</h2>
              <ul class="flex flex-col gap-3 font-body text-caption">
                <li v-for="link in col.links" :key="link.label">
                  <NuxtLinkLocale :to="link.to" class="text-bone-white hover:text-accent">
                    {{ link.label }}
                  </NuxtLinkLocale>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <p
        class="border-t border-graphite-border pt-6 font-mono text-caption text-fog-light uppercase"
      >
        © {{ year }} Contextual Intelligence Partners · {{ t('footer.rights') }}
      </p>
    </UiContainer>
  </footer>
</template>
