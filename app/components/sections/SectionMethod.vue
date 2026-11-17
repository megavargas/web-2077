<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import type { MethodContent } from '~/types/content'

const {
  method,
  title,
  intro,
  showDeliverables = false,
  link,
} = defineProps<{
  method: MethodContent
  title?: string
  intro?: string
  showDeliverables?: boolean
  link?: { label: string; to: RouteLocationRaw }
}>()
</script>

<template>
  <section id="approach" class="py-12 md:py-20" aria-labelledby="approach-title">
    <UiContainer>
      <UiSectionHeader id="approach-title" :title="title ?? method.title" />
      <p class="mb-12 max-w-prose font-body text-subheading text-pretty text-fog-light">
        {{ intro ?? method.intro }}
      </p>
      <ol class="grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
        <li
          v-for="phase in method.phases"
          :key="phase.key"
          class="flex flex-col gap-3 border-t pt-6"
          :class="phase.highlight ? 'border-bone-white' : 'border-graphite-border'"
        >
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h3 class="font-display text-heading-sm font-normal text-bone-white">
              {{ phase.name }}
            </h3>
            <UiBadge v-if="phase.tag">{{ phase.tag }}</UiBadge>
          </div>
          <p class="font-body text-body text-pretty text-fog-light">{{ phase.description }}</p>
          <div v-if="showDeliverables && phase.deliverables?.length" class="pt-2">
            <h4 class="mb-2 font-mono text-caption text-fog-light uppercase">
              {{ method.deliverablesLabel }}
            </h4>
            <ul class="border-t border-graphite-border font-body text-caption text-bone-white">
              <li
                v-for="d in phase.deliverables"
                :key="d"
                class="border-b border-graphite-border py-2.5"
              >
                {{ d }}
              </li>
            </ul>
          </div>
        </li>
      </ol>
      <div v-if="link" class="mt-10">
        <UiLinkArrow :to="link.to">{{ link.label }}</UiLinkArrow>
      </div>
    </UiContainer>
  </section>
</template>
