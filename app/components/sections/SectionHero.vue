<script setup lang="ts">
import type { HomeContent } from '~/types/content'

defineProps<{ hero: HomeContent['hero'] }>()

/** Trocea una línea del titular: lo marcado con **…** va en negrita. */
function parts(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*)/)
    .filter(Boolean)
    .map((t) =>
      t.startsWith('**') ? { text: t.slice(2, -2), bold: true } : { text: t, bold: false },
    )
}
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-void-black pt-20 md:pt-40"
    aria-labelledby="hero-title"
  >
    <!-- Espacio de embeddings con fundido a negro (izquierda, arriba y abajo) -->
    <div
      class="absolute inset-x-0 bottom-0 -z-10 h-3/5 opacity-50 lg:inset-y-0 lg:right-0 lg:left-auto lg:h-full lg:w-3/5 lg:opacity-100"
    >
      <EmbeddingField class="h-full w-full" />
      <div class="absolute inset-0 bg-linear-to-b from-void-black via-transparent to-void-black" />
      <div
        class="absolute inset-0 hidden bg-linear-to-r from-void-black via-void-black/40 to-transparent lg:block"
      />
    </div>
    <UiContainer class="flex flex-col gap-10">
      <p class="font-mono text-caption text-fog-light uppercase">{{ hero.eyebrow }}</p>
      <h1
        id="hero-title"
        class="font-display text-heading-lg font-light text-bone-white sm:text-display xl:text-display-lg"
      >
        <span
          v-for="(line, i) in hero.titleLines"
          :key="i"
          class="block"
          :class="{ 'text-accent': line.emphasis }"
          ><template v-for="(part, j) in parts(line.text)" :key="j"
            ><strong v-if="part.bold" class="font-bold">{{ part.text }}</strong
            ><template v-else>{{ part.text }}</template></template
          >{{ i < hero.titleLines.length - 1 ? ' ' : '' }}</span
        >
      </h1>
      <p class="max-w-[600px] font-body text-subheading text-pretty text-bone-white">
        {{ hero.subtitle }}
      </p>
      <div class="flex flex-wrap gap-4">
        <UiButton :to="{ name: 'servicios-diagnostico' }">{{ hero.primaryCta }}</UiButton>
        <UiButton variant="ghost" :to="{ name: 'servicios' }">{{ hero.secondaryCta }}</UiButton>
      </div>
    </UiContainer>
    <!-- Franja de cierre: lectura de sistema + paso a la sección de contexto -->
    <UiContainer
      class="mt-16 flex flex-col gap-4 border-t border-graphite-border py-6 sm:flex-row sm:items-center sm:justify-between md:mt-24"
    >
      <p class="font-mono text-caption text-fog-light uppercase">{{ hero.proof }}</p>
      <a
        href="#context"
        class="group inline-flex shrink-0 items-center gap-2 font-mono text-caption text-bone-white uppercase hover:text-accent"
      >
        {{ $t('common.scrollCue') }}
        <Icon
          name="lucide:arrow-down"
          class="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-y-0.5"
          aria-hidden="true"
        />
      </a>
    </UiContainer>
  </section>
</template>
