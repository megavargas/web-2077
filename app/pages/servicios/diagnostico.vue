<script setup lang="ts">
definePageMeta({ i18n: { paths: { en: '/services/assessment' } } })

const l = useContentLocale()
const { data: page } = await useAsyncData(
  () => `diagnostic-${l.value}`,
  () => queryCollection(`diagnostic_${l.value}`).first(),
)
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

usePageSeo(() => page.value?.seo)
</script>

<template>
  <div v-if="page">
    <UiPageHeader v-bind="page.header">
      <UiButton href="#form">{{ page.form.title }}</UiButton>
    </UiPageHeader>

    <section class="py-12 md:py-20" aria-labelledby="forwho-title">
      <UiContainer class="grid gap-10 border-t border-graphite-border pt-12 lg:grid-cols-3">
        <h2 id="forwho-title" class="font-display text-heading font-light text-bone-white">
          {{ page.forWho.title }}
        </h2>
        <ul class="border-t border-graphite-border lg:col-span-2">
          <li
            v-for="item in page.forWho.items"
            :key="item"
            class="border-b border-graphite-border py-4 font-body text-subheading text-bone-white"
          >
            {{ item }}
          </li>
        </ul>
      </UiContainer>
    </section>

    <section class="py-12 md:py-20" aria-labelledby="analysis-title">
      <UiContainer>
        <UiSectionHeader id="analysis-title" :title="page.analysis.title" />
        <ul class="grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          <li
            v-for="item in page.analysis.items"
            :key="item.name"
            class="flex flex-col gap-3 border-t border-graphite-border pt-6"
          >
            <h3 class="font-display text-heading-sm font-normal text-bone-white">
              {{ item.name }}
            </h3>
            <p class="font-body text-body text-pretty text-fog-light">{{ item.text }}</p>
          </li>
        </ul>
      </UiContainer>
    </section>

    <section class="py-12 md:py-20" aria-labelledby="deliverables-title">
      <UiContainer class="grid gap-12 lg:grid-cols-2">
        <div>
          <h2
            id="deliverables-title"
            class="mb-8 font-display text-heading font-light text-bone-white"
          >
            {{ page.deliverables.title }}
          </h2>
          <ul class="border-t border-graphite-border">
            <li
              v-for="item in page.deliverables.items"
              :key="item"
              class="flex gap-4 border-b border-graphite-border py-4 font-body text-body text-bone-white"
            >
              <Icon
                name="lucide:check"
                class="mt-1 size-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-12">
          <div>
            <h2 class="mb-8 font-display text-heading font-light text-bone-white">
              {{ page.format.title }}
            </h2>
            <dl class="border-t border-graphite-border">
              <div
                v-for="item in page.format.items"
                :key="item.label"
                class="grid grid-cols-2 gap-4 border-b border-graphite-border py-4"
              >
                <dt class="font-mono text-caption text-fog-light uppercase">{{ item.label }}</dt>
                <dd class="font-body text-body text-bone-white">{{ item.value }}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h2 class="mb-4 font-display text-heading-sm font-normal text-bone-white">
              {{ page.next.title }}
            </h2>
            <p class="font-body text-body text-pretty text-fog-light">{{ page.next.text }}</p>
          </div>
        </div>
      </UiContainer>
    </section>

    <SectionFaq :items="page.faq" />

    <section id="form" class="py-12 md:py-20" aria-labelledby="form-title">
      <UiContainer class="grid gap-10 border-t border-graphite-border pt-12 lg:grid-cols-3">
        <div class="flex flex-col gap-4">
          <h2 id="form-title" class="font-display text-heading font-light text-bone-white">
            {{ page.form.title }}
          </h2>
          <p class="font-body text-body text-fog-light">{{ page.form.text }}</p>
        </div>
        <div class="lg:col-span-2">
          <ContactForm id-prefix="assessment" reason="assessment" />
        </div>
      </UiContainer>
    </section>
  </div>
</template>
