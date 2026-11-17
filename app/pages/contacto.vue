<script setup lang="ts">
definePageMeta({ i18n: { paths: { es: '/contacto', en: '/contact' } } })

const l = useContentLocale()
const { data: page } = await useAsyncData(
  () => `contact-${l.value}`,
  () => queryCollection(`contact_${l.value}`).first(),
)
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

usePageSeo(() => page.value?.seo)
</script>

<template>
  <div v-if="page">
    <UiPageHeader v-bind="page.header" />
    <section class="pb-12 md:pb-20" aria-label="Form">
      <UiContainer class="grid gap-12 border-t border-graphite-border pt-12 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <ContactForm />
        </div>
        <aside class="flex flex-col gap-6" aria-labelledby="channels-title">
          <h2 id="channels-title" class="font-mono text-caption text-fog-light uppercase">
            {{ page.channels.title }}
          </h2>
          <ul class="border-t border-graphite-border">
            <li
              v-for="c in page.channels.items"
              :key="c.email"
              class="flex flex-col gap-1 border-b border-graphite-border py-4"
            >
              <span class="font-mono text-caption text-fog-light uppercase">{{ c.label }}</span>
              <a
                :href="`mailto:${c.email}`"
                class="font-body text-body text-bone-white underline-offset-4 hover:text-accent hover:underline"
              >
                {{ c.email }}
              </a>
            </li>
          </ul>
        </aside>
      </UiContainer>
    </section>
  </div>
</template>
