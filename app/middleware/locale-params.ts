import type { ContentLocale } from '~/composables/useContentLocale'

/** Calcula el slug equivalente en cada idioma de las páginas con slug traducido. */
export default defineNuxtRouteMiddleware(async (to) => {
  const [base, suffix] = String(to.name ?? '').split('___')
  const l: ContentLocale = suffix === 'es' ? 'es' : 'en'
  const state = useLocaleParamsState()
  const set = (param: string, slugs: Partial<Record<ContentLocale, string>>) => {
    if (!slugs.es || !slugs.en) return
    state.value = {
      path: to.path,
      params: { es: { [param]: slugs.es }, en: { [param]: slugs.en } },
    }
  }

  if (base === 'servicios-pillar' || base === 'sectores-sector') {
    const param = base === 'servicios-pillar' ? 'pillar' : 'sector'
    const kind = base === 'servicios-pillar' ? 'pillars' : 'sectors'
    const slug = String(to.params[param])
    const other: ContentLocale = l === 'es' ? 'en' : 'es'
    const current = await queryCollection(`${kind}_${l}`).where('slug', '=', slug).first()
    if (!current) return
    const alt = await queryCollection(`${kind}_${other}`).where('key', '=', current.key).first()
    set(param, { [l]: slug, [other]: alt?.slug })
  } else if (base === 'legal-slug') {
    const slug = String(to.params.slug)
    const key = (Object.keys(legalSlugs[l]) as (keyof (typeof legalSlugs)['es'])[]).find(
      (k) => legalSlugs[l][k] === slug,
    )
    if (key) set('slug', { es: legalSlugs.es[key], en: legalSlugs.en[key] })
  }
})
