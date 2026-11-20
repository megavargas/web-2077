import { defineCollection, defineContentConfig, z } from '@nuxt/content'

/*
 * Modelo de contenido de la web. Cada colección existe por idioma (`<nombre>_es`, `<nombre>_en`)
 * con el mismo esquema, a partir de content/es/… y content/en/….
 * Ver .claude/skills/contextual-web/references/content.md.
 */

const locales = ['es', 'en'] as const
type Locale = (typeof locales)[number]

export const pillarKeys = ['strategy', 'data', 'intelligence', 'ai'] as const
export const sectorKeys = ['telco', 'banking', 'insurance'] as const
/** Subservicios, en orden de pilar (01→04) y de posición dentro del pilar. */
export const subserviceKeys = [
  'data-ai-strategy',
  'maturity-assessment',
  'use-case-portfolio',
  'operating-model',
  'data-ai-governance',
  'cloud-data-platforms',
  'lakehouse-warehouse',
  'legacy-migration',
  'data-engineering-quality',
  'dataops-observability',
  'semantic-layer',
  'advanced-analytics',
  'predictive-models',
  'decision-intelligence',
  'self-service-analytics',
  'ai-agents',
  'knowledge-assistants',
  'process-automation',
  'mlops-llmops',
  'ai-evaluation-governance',
] as const

const seo = z.object({ title: z.string(), description: z.string() })
const header = z.object({ eyebrow: z.string(), title: z.string(), intro: z.string() })
const faq = z.array(z.object({ q: z.string(), a: z.string() })).default([])
const cta = z.object({ title: z.string(), text: z.string(), button: z.string() })
const named = z.object({ name: z.string(), text: z.string() })
const titled = <T extends z.ZodTypeAny>(items: T) => z.object({ title: z.string(), items })

const schemas = {
  home: z.object({
    seo,
    hero: z.object({
      eyebrow: z.string(),
      // Titular apilado: una línea por elemento; la marcada con emphasis va en cian.
      // **palabra** dentro del texto va en negrita.
      titleLines: z.array(z.object({ text: z.string(), emphasis: z.boolean().default(false) })),
      subtitle: z.string(),
      proof: z.string(),
      primaryCta: z.string(),
      secondaryCta: z.string(),
    }),
    // Muro de logos de clientes (los logos y nombres están en app/assets/data/clients.json).
    clients: z.object({ label: z.string(), title: z.string() }),
    // Pila de contexto: ilustración de la tesis, capas de arriba (IA) a la base (sector).
    // Teselas sin enlace: los servicios se navegan desde los pilares (sección siguiente).
    context: z.object({
      quote: z.string(),
      titleLines: z.array(z.string()),
      layers: z.array(
        z.object({
          number: z.string(),
          name: z.string(),
          tagline: z.string(),
          text: z.string(),
          tiles: z.array(
            z.object({
              label: z.string(),
              sub: z.string(),
              icon: z.string(),
            }),
          ),
        }),
      ),
    }),
    pillars: z.object({ title: z.string(), intro: z.string() }),
    method: z.object({ title: z.string(), intro: z.string(), linkLabel: z.string() }),
    sectors: z.object({ title: z.string(), intro: z.string() }),
    ecosystem: z.object({ title: z.string(), text: z.string(), linkLabel: z.string() }),
    statement: z.object({ label: z.string(), text: z.string() }),
    cta,
  }),

  pillars: z.object({
    key: z.enum(pillarKeys),
    order: z.number(),
    number: z.string(),
    slug: z.string(),
    name: z.string(),
    // Obligatorio: la lista de pilares muestra los cuatro con la misma estructura
    subtitle: z.string(),
    benefit: z.string(),
    summary: z.string(),
    seo,
    problem: z.object({ title: z.string(), text: z.string() }),
    // Los elementos son los subservicios del pilar (colección subservices), con su landing.
    includes: z.object({ title: z.string() }),
    outcome: z.object({ title: z.string(), text: z.string() }),
    technologies: z.array(z.string()).default([]),
    faq,
    cta,
  }),

  // Landing de cada subservicio de un pilar (/servicios/<pilar>/<subservicio>).
  subservices: z.object({
    key: z.enum(subserviceKeys),
    pillar: z.enum(pillarKeys),
    // Posición dentro del pilar (1–5): numeración «04.1»
    order: z.number(),
    slug: z.string(),
    name: z.string(),
    // Icono de trazo fino (lucide): lista de subservicios en las tarjetas de pilar
    icon: z.string(),
    // Una frase: tarjeta en la página del pilar y en listados
    summary: z.string(),
    seo,
    // Entradilla bajo el h1 (el h1 es el nombre)
    intro: z.string(),
    problem: z.object({ title: z.string(), text: z.string() }),
    capabilities: titled(z.array(named)),
    // Cuatro pasos, cada uno con su icono de trazo fino (lucide)
    approach: z.object({
      title: z.string(),
      steps: z.array(z.object({ name: z.string(), icon: z.string(), text: z.string() })),
    }),
    deliverables: titled(z.array(z.string())),
    outcome: z.object({ title: z.string(), text: z.string() }),
    useCases: z.object({
      title: z.string(),
      items: z.array(z.object({ sector: z.enum(sectorKeys), name: z.string(), text: z.string() })),
    }),
    technologies: z.array(z.string()).default([]),
    // Subservicios relacionados (de este u otros pilares)
    related: z.array(z.enum(subserviceKeys)).default([]),
    faq,
    cta,
  }),

  sectors: z.object({
    key: z.enum(sectorKeys),
    order: z.number(),
    slug: z.string(),
    name: z.string(),
    // Icono plano (lucide), el mismo que en la pila de contexto
    icon: z.string(),
    benefit: z.string(),
    seo,
    header,
    challenges: titled(z.array(named)),
    domains: z.object({
      title: z.string(),
      intro: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          useCases: z.array(
            z.object({ name: z.string(), text: z.string(), pillars: z.array(z.enum(pillarKeys)) }),
          ),
        }),
      ),
    }),
    regulation: z.object({ title: z.string(), intro: z.string(), items: z.array(named) }),
    // Persona responsable del sector: solo se muestra si existe (pendiente de decidir).
    expert: z
      .object({ name: z.string(), role: z.string(), linkedin: z.string().optional() })
      .optional(),
    faq,
    cta,
  }),

  services: z.object({
    seo,
    header,
    pillarsTitle: z.string(),
    method: z.object({
      title: z.string(),
      intro: z.string(),
      deliverablesLabel: z.string(),
      phases: z.array(
        z.object({
          key: z.string(),
          name: z.string(),
          tag: z.string().optional(),
          highlight: z.boolean().default(false),
          description: z.string(),
          deliverables: z.array(z.string()).default([]),
        }),
      ),
    }),
    engagement: z.object({ title: z.string(), intro: z.string(), models: z.array(named) }),
    faq,
    cta,
  }),

  diagnostic: z.object({
    seo,
    header,
    forWho: titled(z.array(z.string())),
    analysis: titled(z.array(named)),
    deliverables: titled(z.array(z.string())),
    format: titled(z.array(z.object({ label: z.string(), value: z.string() }))),
    next: z.object({ title: z.string(), text: z.string() }),
    faq,
    form: z.object({ title: z.string(), text: z.string() }),
  }),

  sectorsPage: z.object({
    seo,
    header,
    // «También trabajamos en»: sectores fuera del foco con clientes reales (claves de clients.json)
    others: z.object({
      title: z.string(),
      intro: z.string(),
      items: z.array(
        z.object({ name: z.string(), text: z.string(), clients: z.array(z.string()) }),
      ),
      link: z.string(),
    }),
  }),

  ecosystem: z.object({
    seo,
    header,
    partners: z.object({
      title: z.string(),
      intro: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          // Logo plano monocromo (colección simple-icons de Iconify)
          icon: z.string().optional(),
          role: z.string(),
          text: z.string(),
          technologies: z.array(z.string()).default([]),
        }),
      ),
    }),
    licensing: z.object({
      title: z.string(),
      text: z.string(),
      points: z.array(named),
      button: z.string(),
    }),
    technologies: z.object({
      title: z.string(),
      intro: z.string(),
      groups: z.array(z.object({ name: z.string(), items: z.array(z.string()) })),
    }),
  }),

  about: z.object({
    seo,
    header,
    story: z.object({ title: z.string(), paragraphs: z.array(z.string()) }),
    principles: titled(z.array(named)),
    // Sin uso en la web (se quitó «Equipo directivo» el 18/11/2026); se conserva opcional.
    team: z
      .object({
        title: z.string(),
        people: z.array(z.object({ name: z.string(), role: z.string() })),
      })
      .optional(),
    offices: titled(
      z.array(z.object({ city: z.string(), label: z.string(), address: z.string().optional() })),
    ),
    cta,
  }),

  talent: z.object({
    seo,
    header,
    culture: titled(z.array(named)),
    process: z.object({ title: z.string(), steps: z.array(named) }),
    openings: z.object({ title: z.string(), text: z.string(), button: z.string() }),
  }),

  contact: z.object({
    seo,
    header,
    channels: titled(z.array(z.object({ label: z.string(), email: z.string() }))),
  }),
} as const

type Name = keyof typeof schemas

/** Ruta del archivo (o glob) de cada colección dentro de content/<locale>/. */
const sources: Record<Name, string> = {
  home: 'home.yml',
  pillars: 'pillars/*.yml',
  subservices: 'subservices/*.yml',
  sectors: 'sectors/*.yml',
  services: 'services.yml',
  diagnostic: 'diagnostic.yml',
  sectorsPage: 'sectors.yml',
  ecosystem: 'ecosystem.yml',
  about: 'about.yml',
  talent: 'talent.yml',
  contact: 'contact.yml',
}

function dataCollections() {
  const out: Record<string, ReturnType<typeof defineCollection>> = {}
  for (const name of Object.keys(schemas) as Name[]) {
    for (const locale of locales) {
      out[`${name}_${locale}`] = defineCollection({
        type: 'data',
        source: `${locale}/${sources[name]}`,
        schema: schemas[name],
      })
    }
  }
  return out
}

const pageCollections = (locale: Locale) => ({
  [`legal_${locale}`]: defineCollection({
    type: 'page',
    source: { include: `${locale}/legal/*.md`, prefix: '/legal' },
    schema: z.object({ key: z.enum(['notice', 'privacy', 'cookies']), updated: z.string() }),
  }),
  [`insights_${locale}`]: defineCollection({
    type: 'page',
    source: { include: `${locale}/insights/**/*.md`, prefix: '/insights' },
    schema: z.object({
      date: z.string(),
      author: z.string(),
      image: z.string().optional(),
      tags: z.array(z.string()).default([]),
    }),
  }),
})

export default defineContentConfig({
  collections: {
    ...dataCollections(),
    ...pageCollections('es'),
    ...pageCollections('en'),
  },
})
