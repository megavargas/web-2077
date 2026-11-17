export type ContentLocale = 'es' | 'en'

/** Idioma del contenido (sufijo de las colecciones: home_es, home_en…). */
export function useContentLocale() {
  const { locale } = useI18n()
  return computed<ContentLocale>(() => (locale.value === 'en' ? 'en' : 'es'))
}

/** Slugs de las páginas legales por idioma (la clave es común). */
export const legalSlugs = {
  es: { notice: 'aviso-legal', privacy: 'privacidad', cookies: 'cookies' },
  en: { notice: 'legal-notice', privacy: 'privacy', cookies: 'cookies' },
} as const satisfies Record<ContentLocale, Record<'notice' | 'privacy' | 'cookies', string>>
