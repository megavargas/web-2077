import type {
  HomeEsCollectionItem,
  PillarsEsCollectionItem,
  SectorsEsCollectionItem,
  SectorsPageEsCollectionItem,
  ServicesEsCollectionItem,
  SubservicesEsCollectionItem,
} from '@nuxt/content'

/* Mismo esquema en ES y EN (ver content.config.ts): se tipa con la variante ES. */
export type HomeContent = HomeEsCollectionItem
export type Pillar = PillarsEsCollectionItem
export type Sector = SectorsEsCollectionItem
export type SectorsPageContent = SectorsPageEsCollectionItem
export type Subservice = SubservicesEsCollectionItem
/** Pilar con sus subservicios ordenados (useSiteData). */
export type PillarWithSubservices = Pillar & { subservices: Subservice[] }
export type ServicesContent = ServicesEsCollectionItem
export type PillarKey = Pillar['key']
export type FaqItem = NonNullable<Pillar['faq']>[number]
export type CtaContent = Pillar['cta']
export type MethodContent = ServicesContent['method']
