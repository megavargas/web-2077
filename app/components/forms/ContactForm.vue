<script setup lang="ts">
import {
  contactReasons,
  contactSchema,
  contactSectors,
  type ContactField,
  type ContactReason,
  type ContactSector,
} from '#shared/contact'

const { idPrefix = 'contact', reason: fixedReason } = defineProps<{
  idPrefix?: string
  /** Fija el motivo y oculta su selector (p. ej. en la página de diagnóstico). */
  reason?: ContactReason
}>()

const { t } = useI18n()
const route = useRoute()
const l = useContentLocale()
const { contact } = useAppConfig()
const localePath = useLocalePath()

const queryValue = <T extends string>(key: string, allowed: readonly T[]) => {
  const v = route.query[key]
  return typeof v === 'string' && (allowed as readonly string[]).includes(v) ? (v as T) : ''
}

const state = reactive({
  name: '',
  email: '',
  company: '',
  sector: queryValue<ContactSector>('sector', contactSectors) as ContactSector | '',
  reason: (fixedReason ?? queryValue<ContactReason>('reason', contactReasons)) as
    ContactReason | '',
  message: '',
  consent: false,
  website: '',
})

const errors = ref<Partial<Record<ContactField, string>>>({})
const status = ref<'idle' | 'sending' | 'sent' | 'unavailable' | 'error'>('idle')
const formEl = ref<HTMLFormElement>()

const fieldId = (f: string) => `${idPrefix}-${f}`
const sectorOptions = computed(() =>
  contactSectors.map((v) => ({ value: v, label: t(`form.sectors.${v}`) })),
)
const reasonOptions = computed(() =>
  contactReasons.map((v) => ({ value: v, label: t(`form.reasons.${v}`) })),
)

async function onSubmit() {
  const parsed = contactSchema.safeParse({ ...state, locale: l.value })
  if (!parsed.success) {
    const next: Partial<Record<ContactField, string>> = {}
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ContactField
      if (field && !next[field]) next[field] = t(`form.errors.${field}`)
    }
    errors.value = next
    await nextTick()
    formEl.value?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
    return
  }

  errors.value = {}
  status.value = 'sending'
  try {
    await $fetch('/api/contact', { method: 'POST', body: parsed.data })
    status.value = 'sent'
  } catch (e) {
    const code = (e as { statusCode?: number }).statusCode
    // 503: envío no configurado · 404/405: web estática sin servidor
    status.value = code === 503 || code === 404 || code === 405 ? 'unavailable' : 'error'
  }
}
</script>

<template>
  <div>
    <div
      v-if="status === 'sent'"
      role="status"
      class="flex flex-col gap-3 border-t border-bone-white pt-6"
    >
      <p class="font-display text-heading-sm text-bone-white">{{ t('form.success.title') }}</p>
      <p class="font-body text-body text-fog-light">{{ t('form.success.text') }}</p>
    </div>

    <form v-else ref="formEl" novalidate class="flex flex-col gap-6" @submit.prevent="onSubmit">
      <p v-if="Object.keys(errors).length" role="alert" class="font-mono text-caption text-accent">
        {{ t('form.errors.summary') }}
      </p>

      <div class="grid gap-6 md:grid-cols-2">
        <UiField :id="fieldId('name')" v-slot="f" :label="t('form.name')" :error="errors.name">
          <UiInput
            :id="fieldId('name')"
            v-model="state.name"
            autocomplete="name"
            :invalid="f.invalid"
            :describedby="f.describedby"
          />
        </UiField>
        <UiField :id="fieldId('email')" v-slot="f" :label="t('form.email')" :error="errors.email">
          <UiInput
            :id="fieldId('email')"
            v-model="state.email"
            type="email"
            autocomplete="email"
            :invalid="f.invalid"
            :describedby="f.describedby"
          />
        </UiField>
        <UiField
          :id="fieldId('company')"
          v-slot="f"
          :label="t('form.company')"
          :optional="t('form.optional')"
          :error="errors.company"
        >
          <UiInput
            :id="fieldId('company')"
            v-model="state.company"
            autocomplete="organization"
            :invalid="f.invalid"
            :describedby="f.describedby"
          />
        </UiField>
        <UiField
          :id="fieldId('sector')"
          v-slot="f"
          :label="t('form.sector')"
          :error="errors.sector"
        >
          <UiSelect
            :id="fieldId('sector')"
            v-model="state.sector"
            :options="sectorOptions"
            :placeholder="t('form.select')"
            :invalid="f.invalid"
            :describedby="f.describedby"
          />
        </UiField>
      </div>

      <UiField
        v-if="!fixedReason"
        :id="fieldId('reason')"
        v-slot="f"
        :label="t('form.reason')"
        :error="errors.reason"
      >
        <UiSelect
          :id="fieldId('reason')"
          v-model="state.reason"
          :options="reasonOptions"
          :placeholder="t('form.select')"
          :invalid="f.invalid"
          :describedby="f.describedby"
        />
      </UiField>

      <UiField
        :id="fieldId('message')"
        v-slot="f"
        :label="t('form.message')"
        :error="errors.message"
      >
        <UiTextarea
          :id="fieldId('message')"
          v-model="state.message"
          :placeholder="t('form.messagePlaceholder')"
          :invalid="f.invalid"
          :describedby="f.describedby"
        />
      </UiField>

      <!-- Honeypot antispam: oculto para personas y lectores de pantalla -->
      <div class="sr-only" aria-hidden="true">
        <label :for="fieldId('website')">{{ t('form.website') }}</label>
        <input
          :id="fieldId('website')"
          v-model="state.website"
          name="website"
          type="text"
          tabindex="-1"
          autocomplete="off"
        />
      </div>

      <div class="flex flex-col gap-2">
        <UiCheckbox
          :id="fieldId('consent')"
          v-model="state.consent"
          :invalid="Boolean(errors.consent)"
          :describedby="errors.consent ? `${fieldId('consent')}-error` : undefined"
        >
          <i18n-t keypath="form.consent" scope="global">
            <template #link>
              <NuxtLink
                :to="localePath({ name: 'legal-slug', params: { slug: legalSlugs[l].privacy } })"
                class="text-bone-white underline underline-offset-4 hover:text-accent"
              >
                {{ t('form.consentLink') }}
              </NuxtLink>
            </template>
          </i18n-t>
        </UiCheckbox>
        <p
          v-if="errors.consent"
          :id="`${fieldId('consent')}-error`"
          class="font-mono text-caption text-accent"
        >
          {{ errors.consent }}
        </p>
      </div>

      <div aria-live="polite">
        <p
          v-if="status === 'unavailable' || status === 'error'"
          class="font-body text-body text-fog-light"
        >
          <i18n-t :keypath="`form.${status}`" scope="global">
            <template #email>
              <a
                :href="`mailto:${contact.email}`"
                class="text-bone-white underline underline-offset-4 hover:text-accent"
              >
                {{ contact.email }}
              </a>
            </template>
          </i18n-t>
        </p>
      </div>

      <div>
        <UiButton type="submit">
          {{ status === 'sending' ? t('form.sending') : t('form.submit') }}
        </UiButton>
      </div>
    </form>
  </div>
</template>
