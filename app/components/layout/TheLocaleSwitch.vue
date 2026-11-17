<script setup lang="ts">
/*
 * SwitchLocalePathLink (y no switchLocalePath + NuxtLink): en SSR el selector se pinta
 * antes de que la página fije los slugs traducidos (useSetI18nParams); este componente
 * corrige el href al terminar el render, así el HTML estático no enlaza a rutas mezcladas.
 */
const { locale, locales } = useI18n()
</script>

<template>
  <ul class="flex gap-3 font-mono text-caption uppercase">
    <li v-for="l in locales" :key="l.code">
      <SwitchLocalePathLink
        :locale="l.code"
        :lang="l.language"
        :aria-current="l.code === locale ? 'true' : undefined"
        :class="l.code === locale ? 'text-accent' : 'text-bone-white hover:text-accent'"
      >
        <span aria-hidden="true">{{ l.code }}</span>
        <span class="sr-only">{{ l.name }}</span>
      </SwitchLocalePathLink>
    </li>
  </ul>
</template>
