<script setup lang="ts">
const { t, locale } = useI18n()
const site = useSiteConfig()

// Imagen para compartir (LinkedIn, X, Slack…) por idioma: public/og-es.png y og-en.png, 1200×630
const ogImage = computed(() => `${site.url}/og-${locale.value === 'es' ? 'es' : 'en'}.png`)
useSeoMeta({
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: () => t('common.ogAlt'),
  ogSiteName: 'Contextual Intelligence Partners',
  ogLocale: () => (locale.value === 'es' ? 'es_ES' : 'en_GB'),
  twitterCard: 'summary_large_image',
  twitterImage: ogImage,
})
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <a
      href="#main"
      class="sr-only bg-accent px-4 py-2 font-mono text-caption text-void-black uppercase focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
    >
      {{ t('common.skip') }}
    </a>
    <TheHeader />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
