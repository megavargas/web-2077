<script setup lang="ts">
// Home PROVISIONAL: solo valida el stack. La home real se construirá según content.md §5.
const { t } = useI18n()

useSeoMeta({
  title: () => t('home.seo.title'),
  description: () => t('home.seo.description'),
  ogTitle: () => t('home.seo.title'),
  ogDescription: () => t('home.seo.description'),
})
</script>

<template>
  <div>
    <section class="bg-void-black py-20 md:py-45" aria-labelledby="hero-title">
      <UiContainer class="flex flex-col gap-8">
        <p class="font-mono text-caption text-fog-light uppercase">{{ t('home.hero.eyebrow') }}</p>
        <i18n-t
          id="hero-title"
          keypath="home.hero.title"
          tag="h1"
          scope="global"
          class="font-display text-heading-lg font-light text-balance text-bone-white md:text-display xl:text-display-lg"
        >
          <template #emphasis>
            <span class="text-accent">{{ t('home.hero.emphasis') }}</span>
          </template>
        </i18n-t>
        <p class="max-w-[540px] font-body text-subheading text-pretty text-bone-white">
          {{ t('home.hero.subtitle') }}
        </p>
      </UiContainer>
    </section>

    <section
      class="w-full bg-accent py-20 [&_:focus-visible]:outline-void-black"
      :aria-label="t('home.statement.label')"
    >
      <UiContainer>
        <p
          class="mx-auto max-w-4xl text-center font-display text-heading-sm font-normal text-balance text-void-black md:text-heading lg:text-heading-lg"
        >
          {{ t('home.statement.text') }}
        </p>
      </UiContainer>
    </section>
  </div>
</template>
