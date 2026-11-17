<script setup lang="ts">
const head = useLocaleHead()

useHead({
  htmlAttrs: { lang: () => head.value.htmlAttrs.lang },
  link: () => head.value.link ?? [],
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
