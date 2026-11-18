<script setup lang="ts">
/*
 * En páginas con slug traducido (servicios, sectores, legal) el href sale de
 * useLocaleParams, que viaja en el payload SSR: así servidor y cliente pintan el mismo
 * enlace desde el primer render. En el resto, switchLocalePath basta.
 */
const { locale, locales } = useI18n()
const route = useRoute()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const getRouteBaseName = useRouteBaseName()
const state = useLocaleParamsState()

function href(code: string) {
  const s = state.value
  const name = getRouteBaseName(route) as string | undefined
  if (s && s.path === route.path && name && s.params[code]) {
    return localePath({ name, params: s.params[code], query: route.query }, code as never)
  }
  return switchLocalePath(code as never)
}
</script>

<template>
  <ul class="flex gap-3 font-mono text-caption uppercase">
    <li v-for="l in locales" :key="l.code">
      <NuxtLink
        :to="href(l.code)"
        :hreflang="l.language"
        :lang="l.language"
        :aria-current="l.code === locale ? 'true' : undefined"
        :class="l.code === locale ? 'text-accent' : 'text-bone-white hover:text-accent'"
      >
        <span aria-hidden="true">{{ l.code }}</span>
        <span class="sr-only">{{ l.name }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>
