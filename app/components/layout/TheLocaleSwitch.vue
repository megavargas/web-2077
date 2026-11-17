<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <ul class="flex gap-3 font-mono text-caption uppercase">
    <li v-for="l in locales" :key="l.code">
      <NuxtLink
        :to="switchLocalePath(l.code)"
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
