<script setup lang="ts">
/**
 * Pie: contacto destacado (email grande, sede y LinkedIn), navegación con iconos de trazo fino,
 * partners cloud y, de fondo, líneas onduladas a todo el ancho (`WaveLines`).
 */
const { t } = useI18n()
const { contact } = useAppConfig()
const partners = [
  { name: 'Google Cloud', icon: 'simple-icons:googlecloud' },
  { name: 'Microsoft Azure', icon: 'simple-icons:microsoftazure' },
  { name: 'AWS', icon: 'simple-icons:amazonwebservices' },
]
const l = useContentLocale()
const { data: site } = await useSiteData()
const year = new Date().getFullYear()

/** Iconos de los pilares (los sectores traen el suyo en su YAML) */
const pillarIcons: Record<string, string> = {
  strategy: 'lucide:compass',
  data: 'lucide:database',
  intelligence: 'lucide:gauge',
  ai: 'lucide:bot',
}

const columns = computed(() => [
  {
    title: t('nav.services'),
    links: [
      ...(site.value?.pillars ?? []).map((p) => ({
        label: p.name,
        icon: pillarIcons[p.key] ?? 'lucide:circle',
        to: { name: 'servicios-pillar', params: { pillar: p.slug } },
      })),
      {
        label: t('nav.assessment'),
        icon: 'lucide:scan-search',
        to: { name: 'servicios-diagnostico' },
      },
    ],
  },
  {
    title: t('nav.sectors'),
    links: (site.value?.sectors ?? []).map((s) => ({
      label: s.name,
      icon: s.icon,
      to: { name: 'sectores-sector', params: { sector: s.slug } },
    })),
  },
  {
    title: t('footer.company'),
    links: [
      { label: t('nav.ecosystem'), icon: 'lucide:cloud', to: { name: 'ecosistema' } },
      { label: t('nav.careers'), icon: 'lucide:users', to: { name: 'talento' } },
      { label: t('nav.contact'), icon: 'lucide:mail', to: { name: 'contacto' } },
    ],
  },
  {
    title: t('footer.legal'),
    links: (['notice', 'privacy', 'cookies'] as const).map((k) => ({
      label: t(`legal.${k}`),
      icon: {
        notice: 'lucide:file-text',
        privacy: 'lucide:shield-check',
        cookies: 'lucide:cookie',
      }[k],
      to: { name: 'legal-slug', params: { slug: legalSlugs[l.value][k] } },
    })),
  },
])
</script>

<template>
  <footer
    class="relative isolate overflow-hidden border-t border-graphite-border bg-void-black pt-16 md:pt-24"
  >
    <!-- Fondo: líneas onduladas a todo el ancho, con una en acento que sube (decorativo) -->
    <WaveLines class="absolute inset-x-0 bottom-0 -z-10 h-56 w-full md:h-3/4" />
    <UiContainer class="flex flex-col gap-16 md:gap-20">
      <!-- Contacto -->
      <div class="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div class="flex flex-col gap-4 lg:col-span-7">
          <p class="font-mono text-caption text-fog-light uppercase">{{ t('footer.talk') }}</p>
          <a
            :href="`mailto:${contact.email}`"
            class="group inline-flex w-fit items-center gap-3 font-display text-heading-sm font-light break-all text-bone-white hover:text-accent sm:text-heading md:gap-4 md:text-heading-lg"
          >
            {{ contact.email }}
            <Icon
              name="lucide:arrow-up-right"
              class="size-6 shrink-0 transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 md:size-9"
              aria-hidden="true"
            />
          </a>
        </div>
        <ul class="flex flex-col gap-4 font-body text-body text-fog-light lg:col-span-5">
          <li class="flex items-start gap-3">
            <Icon name="lucide:map-pin" class="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <span>{{ contact.address }}</span>
          </li>
          <li>
            <a
              :href="contact.linkedin"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-3 hover:text-bone-white"
            >
              <Icon name="simple-icons:linkedin" class="size-5 shrink-0" aria-hidden="true" />
              LinkedIn
              <span class="sr-only">({{ t('footer.newTab') }})</span>
            </a>
          </li>
          <li>
            <NuxtLinkLocale
              :to="{ name: 'servicios-diagnostico' }"
              class="inline-flex items-center gap-3 text-accent underline-offset-4 hover:underline"
            >
              <Icon name="lucide:arrow-right" class="size-5 shrink-0" aria-hidden="true" />
              {{ t('nav.assessmentCta') }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>

      <!-- Marca, partners y navegación -->
      <div class="grid gap-12 border-t border-graphite-border pt-12 lg:grid-cols-12">
        <div class="flex flex-col gap-8 lg:col-span-4">
          <div class="flex flex-col gap-4">
            <UiLogo size="md" />
            <p class="max-w-xs font-body text-body text-fog-light">{{ t('footer.tagline') }}</p>
          </div>
          <div class="flex flex-col gap-4">
            <p class="font-mono text-caption text-fog-light uppercase">
              {{ t('footer.partners') }}
            </p>
            <ul class="flex flex-wrap items-center gap-x-6 gap-y-3 text-bone-white">
              <li v-for="p in partners" :key="p.name" class="inline-flex items-center gap-2">
                <Icon :name="p.icon" class="size-5" aria-hidden="true" />
                <span class="font-body text-caption">{{ p.name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <nav :aria-label="t('nav.footer')" class="lg:col-span-8">
          <div class="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div v-for="col in columns" :key="col.title">
              <h2 class="mb-4 font-mono text-caption text-fog-light uppercase">{{ col.title }}</h2>
              <ul class="flex flex-col gap-3 font-body text-caption">
                <li v-for="link in col.links" :key="link.label">
                  <NuxtLinkLocale
                    :to="link.to"
                    class="group inline-flex items-center gap-2.5 text-bone-white hover:text-accent"
                  >
                    <Icon
                      :name="link.icon"
                      class="size-4 shrink-0 text-fog-light group-hover:text-accent"
                      aria-hidden="true"
                    />
                    {{ link.label }}
                  </NuxtLinkLocale>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </UiContainer>

    <UiContainer class="pt-16 md:pt-20">
      <div
        class="flex flex-col gap-2 border-t border-graphite-border py-6 font-mono text-caption text-fog-light uppercase sm:flex-row sm:justify-between"
      >
        <p>© {{ year }} Contextual Intelligence Partners · {{ t('footer.rights') }}</p>
        <p>Madrid · {{ t('footer.since') }}</p>
      </div>
    </UiContainer>
  </footer>
</template>
