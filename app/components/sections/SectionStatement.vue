<script setup lang="ts">
defineProps<{ statement: { label: string; text: string } }>()
</script>

<template>
  <section
    class="w-full bg-accent py-20 [&_:focus-visible]:outline-void-black"
    :aria-label="statement.label"
  >
    <UiContainer>
      <p
        class="mx-auto max-w-4xl text-center font-display text-heading-sm font-normal text-balance text-void-black md:text-heading lg:text-heading-lg"
      >
        {{ statement.text }}
      </p>
    </UiContainer>
  </section>
</template>
