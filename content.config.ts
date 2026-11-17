import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Insights (blog/noticias), una colección por idioma.
const insights = (locale: 'es' | 'en') =>
  defineCollection({
    type: 'page',
    source: { include: `${locale}/insights/**/*.md`, prefix: '/insights' },
    schema: z.object({
      date: z.string(),
      author: z.string(),
      image: z.string().optional(),
      tags: z.array(z.string()).default([]),
    }),
  })

export default defineContentConfig({
  collections: {
    insights_es: insights('es'),
    insights_en: insights('en'),
  },
})
