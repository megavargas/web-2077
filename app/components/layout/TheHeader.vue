<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const nav = useMainNav()
const isActive = useIsActiveSection()

const open = ref(false)
watch(
  () => route.fullPath,
  () => (open.value = false),
)
</script>

<template>
  <header class="bg-void-black" @keydown.escape="open = false">
    <UiContainer class="flex items-center justify-between gap-6 py-4">
      <UiLogo />

      <nav :aria-label="t('nav.main')" class="hidden lg:block">
        <ul class="flex gap-6 font-mono text-caption uppercase">
          <li v-for="item in nav" :key="item.key">
            <NuxtLinkLocale
              :to="item.to"
              :aria-current="isActive(item.to) ? 'page' : undefined"
              :class="isActive(item.to) ? 'text-accent' : 'text-bone-white hover:text-accent'"
            >
              {{ item.label }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-6">
        <nav :aria-label="t('common.language')">
          <TheLocaleSwitch />
        </nav>
        <div class="hidden sm:block">
          <UiButton :to="{ name: 'contacto' }">{{ t('nav.contact') }}</UiButton>
        </div>
        <button
          type="button"
          class="inline-flex size-10 items-center justify-center text-bone-white lg:hidden"
          aria-controls="mobile-menu"
          :aria-expanded="open"
          @click="open = !open"
        >
          <Icon :name="open ? 'lucide:x' : 'lucide:menu'" class="size-6" aria-hidden="true" />
          <span class="sr-only">{{ open ? t('nav.close') : t('nav.open') }}</span>
        </button>
      </div>
    </UiContainer>

    <div v-if="open" id="mobile-menu" class="border-t border-graphite-border lg:hidden">
      <UiContainer class="flex flex-col gap-8 py-8">
        <nav :aria-label="t('nav.main')">
          <ul class="flex flex-col gap-6 font-mono text-body uppercase">
            <li v-for="item in nav" :key="item.key">
              <NuxtLinkLocale
                :to="item.to"
                :aria-current="isActive(item.to) ? 'page' : undefined"
                :class="isActive(item.to) ? 'text-accent' : 'text-bone-white hover:text-accent'"
              >
                {{ item.label }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </nav>
        <div>
          <UiButton :to="{ name: 'contacto' }">{{ t('nav.contact') }}</UiButton>
        </div>
      </UiContainer>
    </div>
  </header>
</template>
