import { queryCollection } from '@nuxt/content/server'
import type { SitemapUrlInput } from '#sitemap/types'

/**
 * URLs de las páginas con slug traducido (pilares, subservicios y sectores) para el sitemap,
 * con sus alternativas hreflang. Las estáticas las detecta el módulo solo; las legales no se indexan.
 */
export default defineSitemapEventHandler(async (event) => {
  const [pillarsEn, pillarsEs, subsEn, subsEs, sectorsEn, sectorsEs] = await Promise.all([
    queryCollection(event, 'pillars_en').all(),
    queryCollection(event, 'pillars_es').all(),
    queryCollection(event, 'subservices_en').all(),
    queryCollection(event, 'subservices_es').all(),
    queryCollection(event, 'sectors_en').all(),
    queryCollection(event, 'sectors_es').all(),
  ])
  const pillarSlug = (list: typeof pillarsEn, key: string) => list.find((p) => p.key === key)?.slug

  /** Par EN/ES de la misma página, cada una con las dos alternativas. */
  const pair = (en?: string, es?: string): SitemapUrlInput[] => {
    if (!en || !es) return []
    const alternatives = [
      { hreflang: 'en-GB', href: en },
      { hreflang: 'es-ES', href: es },
      { hreflang: 'x-default', href: en },
    ]
    return [
      { loc: en, alternatives, _i18nTransform: false },
      { loc: es, alternatives, _i18nTransform: false },
    ]
  }

  return [
    ...pillarsEn.flatMap((p) => {
      const es = pillarSlug(pillarsEs, p.key)
      return pair(`/services/${p.slug}`, es && `/es/servicios/${es}`)
    }),
    ...subsEn.flatMap((s) => {
      const es = subsEs.find((x) => x.key === s.key)
      return pair(
        `/services/${pillarSlug(pillarsEn, s.pillar)}/${s.slug}`,
        es && `/es/servicios/${pillarSlug(pillarsEs, s.pillar)}/${es.slug}`,
      )
    }),
    ...sectorsEn.flatMap((s) => {
      const es = sectorsEs.find((x) => x.key === s.key)
      return pair(`/industries/${s.slug}`, es && `/es/sectores/${es.slug}`)
    }),
  ]
})
