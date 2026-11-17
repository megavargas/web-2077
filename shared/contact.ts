import { z } from 'zod'

/** Valores del formulario de contacto, independientes del idioma (las etiquetas van en i18n). */
export const contactSectors = ['telco', 'banking', 'insurance', 'other'] as const
export const contactReasons = [
  'assessment',
  'project',
  'rfp',
  'licences',
  'careers',
  'press',
  'other',
] as const

export type ContactSector = (typeof contactSectors)[number]
export type ContactReason = (typeof contactReasons)[number]

/** Esquema compartido: valida en el navegador (mensajes) y en el servidor (seguridad). */
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().max(200),
  company: z.string().trim().max(160).default(''),
  sector: z.enum(contactSectors),
  reason: z.enum(contactReasons),
  message: z.string().trim().min(10).max(5000),
  consent: z.literal(true),
  /** Honeypot antispam: invisible para personas, debe llegar vacío. */
  website: z.string().max(500).default(''),
  locale: z.enum(['es', 'en']),
})

export type ContactInput = z.input<typeof contactSchema>
export type ContactField = keyof ContactInput
