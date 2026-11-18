<script setup lang="ts">
const head = useLocaleHead()
const { theme } = useTheme()

useHead({
  htmlAttrs: { lang: () => head.value.htmlAttrs.lang, 'data-theme': () => theme.value },
  link: () => [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ...(head.value.link ?? []),
  ],
  meta: () => head.value.meta ?? [],
  titleTemplate: (title) =>
    title ? `${title} · Contextual Intelligence Partners` : 'Contextual Intelligence Partners',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
