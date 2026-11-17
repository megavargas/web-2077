import type { FaqItem } from '~/types/content'

/** Datos estructurados FAQPage para las preguntas frecuentes de la página. */
export function useFaqSchema(faq: MaybeRefOrGetter<FaqItem[] | undefined>) {
  useHead({
    script: [
      {
        key: 'faq-schema',
        type: 'application/ld+json',
        innerHTML: () => {
          const items = toValue(faq) ?? []
          if (!items.length) return ''
          return JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })
        },
      },
    ],
  })
}
