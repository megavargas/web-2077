<script setup lang="ts">
import type { SectorsPageContent } from '~/types/content'

/**
 * «También trabajamos en»: sectores fuera del foco (Telco, Banca y Seguros) en los que hay
 * clientes reales, con sus logos. Sin páginas propias: la salida es el contacto.
 */
const { others } = defineProps<{ others: SectorsPageContent['others'] }>()
</script>

<template>
  <section class="pb-12 md:pb-20" aria-labelledby="others-title">
    <UiContainer class="border-t border-graphite-border pt-12">
      <UiSectionHeader id="others-title" :title="others.title" />
      <p class="-mt-4 mb-12 max-w-prose font-body text-subheading text-pretty text-fog-light">
        {{ others.intro }}
      </p>
      <ul class="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <li
          v-for="item in others.items"
          :key="item.name"
          class="flex flex-col gap-3 border-t border-graphite-border pt-6"
        >
          <h3 class="font-display text-heading-sm font-normal text-bone-white">
            {{ item.name }}
          </h3>
          <p class="font-body text-body text-pretty text-fog-light">{{ item.text }}</p>
          <ul class="mt-auto flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 text-bone-white">
            <li v-for="c in item.clients" :key="c"><UiClientLogo :client="c" /></li>
          </ul>
        </li>
      </ul>
      <div class="mt-12">
        <UiLinkArrow :to="{ name: 'contacto' }">{{ others.link }}</UiLinkArrow>
      </div>
    </UiContainer>
  </section>
</template>
