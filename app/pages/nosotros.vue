<script setup lang="ts">
definePageMeta({ i18n: { paths: { es: '/nosotros', en: '/about' } } })

const l = useContentLocale()
const { data: page } = await useAsyncData(
  () => `about-${l.value}`,
  () => queryCollection(`about_${l.value}`).first(),
)
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

usePageSeo(() => page.value?.seo)
</script>

<template>
  <div v-if="page">
    <UiPageHeader v-bind="page.header" />

    <section class="py-12 md:py-20" aria-labelledby="story-title">
      <UiContainer class="grid gap-10 border-t border-graphite-border pt-12 lg:grid-cols-3">
        <h2 id="story-title" class="font-display text-heading font-light text-bone-white">
          {{ page.story.title }}
        </h2>
        <div class="flex flex-col gap-6 lg:col-span-2">
          <p
            v-for="p in page.story.paragraphs"
            :key="p"
            class="font-body text-subheading text-pretty text-fog-light"
          >
            {{ p }}
          </p>
        </div>
      </UiContainer>
    </section>

    <section class="py-12 md:py-20" aria-labelledby="principles-title">
      <UiContainer>
        <UiSectionHeader id="principles-title" :title="page.principles.title" />
        <ul class="grid gap-10 md:grid-cols-3 md:gap-8">
          <li
            v-for="item in page.principles.items"
            :key="item.name"
            class="flex flex-col gap-3 border-t border-bone-white pt-6"
          >
            <h3 class="font-display text-heading-sm font-normal text-bone-white">
              {{ item.name }}
            </h3>
            <p class="font-body text-body text-pretty text-fog-light">{{ item.text }}</p>
          </li>
        </ul>
      </UiContainer>
    </section>

    <section class="py-12 md:py-20" aria-labelledby="offices-title">
      <UiContainer class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 id="offices-title" class="mb-8 font-display text-heading font-light text-bone-white">
            {{ page.offices.title }}
          </h2>
          <ul class="border-t border-graphite-border">
            <li
              v-for="office in page.offices.items"
              :key="office.city"
              class="flex flex-col gap-2 border-b border-graphite-border py-5"
            >
              <span class="font-display text-heading-sm text-bone-white">
                {{ office.city }}
                <span class="ml-2 font-mono text-caption text-fog-light uppercase">
                  {{ office.label }}
                </span>
              </span>
              <span v-if="office.address" class="font-body text-body text-fog-light">
                {{ office.address }}
              </span>
            </li>
          </ul>
        </div>
        <WorldDotsMap />
      </UiContainer>
    </section>

    <SectionCta :cta="page.cta" :to="{ name: 'contacto' }" />
  </div>
</template>
