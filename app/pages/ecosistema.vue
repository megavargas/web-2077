<script setup lang="ts">
definePageMeta({ i18n: { paths: { es: '/ecosistema', en: '/ecosystem' } } })

const l = useContentLocale()
const { data: page } = await useAsyncData(
  () => `ecosystem-${l.value}`,
  () => queryCollection(`ecosystem_${l.value}`).first(),
)
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

usePageSeo(() => page.value?.seo)
</script>

<template>
  <div v-if="page">
    <UiPageHeader v-bind="page.header">
      <template #visual><RackField class="h-full w-full" /></template>
    </UiPageHeader>

    <section class="py-12 md:py-20" aria-labelledby="partners-title">
      <UiContainer>
        <UiSectionHeader id="partners-title" :title="page.partners.title" />
        <p class="mb-12 max-w-prose font-body text-subheading text-pretty text-fog-light">
          {{ page.partners.intro }}
        </p>
        <ul class="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <li
            v-for="p in page.partners.items"
            :key="p.name"
            class="flex flex-col gap-4 border-t border-bone-white pt-6"
          >
            <h3 class="font-display text-heading font-light text-bone-white">{{ p.name }}</h3>
            <p class="font-mono text-caption text-fog-light uppercase">{{ p.role }}</p>
            <p class="font-body text-body text-pretty text-fog-light">{{ p.text }}</p>
            <UiTagList v-if="p.technologies?.length" :items="p.technologies" />
          </li>
        </ul>
      </UiContainer>
    </section>

    <section class="bg-accent-strong py-16 md:py-24" aria-labelledby="licensing-title">
      <UiContainer class="grid gap-10 lg:grid-cols-3">
        <div class="flex flex-col items-start gap-6">
          <h2 id="licensing-title" class="font-display text-heading font-light text-paper">
            {{ page.licensing.title }}
          </h2>
          <p class="font-body text-body text-pretty text-bone-white">{{ page.licensing.text }}</p>
          <UiButton variant="inverse" :to="{ name: 'contacto', query: { reason: 'licences' } }">
            {{ page.licensing.button }}
          </UiButton>
        </div>
        <ul class="grid gap-8 md:grid-cols-2 lg:col-span-2">
          <li
            v-for="point in page.licensing.points"
            :key="point.name"
            class="flex flex-col gap-2 border-t border-bone-white/30 pt-5"
          >
            <h3 class="font-display text-heading-sm font-normal text-paper">
              {{ point.name }}
            </h3>
            <p class="font-body text-body text-pretty text-bone-white">{{ point.text }}</p>
          </li>
        </ul>
      </UiContainer>
    </section>

    <section class="bg-mist py-16 md:py-24" aria-labelledby="tech-title">
      <UiContainer>
        <UiSectionHeader id="tech-title" :title="page.technologies.title" tone="light" />
        <p class="mb-12 max-w-prose font-body text-subheading text-pretty text-ink-mid">
          {{ page.technologies.intro }}
        </p>
        <dl class="border-t border-mist-border">
          <div
            v-for="g in page.technologies.groups"
            :key="g.name"
            class="grid gap-4 border-b border-mist-border py-5 md:grid-cols-4"
          >
            <dt class="font-mono text-caption text-void-black uppercase">{{ g.name }}</dt>
            <dd class="md:col-span-3"><UiTagList :items="g.items" tone="light" /></dd>
          </div>
        </dl>
      </UiContainer>
    </section>
  </div>
</template>
