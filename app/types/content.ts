import type {
  HomeEsCollectionItem,
  PillarsEsCollectionItem,
  SectorsEsCollectionItem,
  ServicesEsCollectionItem,
} from '@nuxt/content'

/* Mismo esquema en ES y EN (ver content.config.ts): se tipa con la variante ES. */
export type HomeContent = HomeEsCollectionItem
export type Pillar = PillarsEsCollectionItem
export type Sector = SectorsEsCollectionItem
export type ServicesContent = ServicesEsCollectionItem
export type PillarKey = Pillar['key']
export type FaqItem = NonNullable<Pillar['faq']>[number]
export type CtaContent = Pillar['cta']
export type MethodContent = ServicesContent['method']
