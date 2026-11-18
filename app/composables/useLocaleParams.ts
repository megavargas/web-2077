export type LocaleParams = Record<string, Record<string, string>>

/**
 * Parámetros de ruta traducidos de la página actual (slug de pilar, sector o legal),
 * para el selector de idioma. Los fija el middleware `locale-params` antes del render:
 * useSetI18nParams llega tarde (el selector se pinta antes que la página) y en el
 * cliente provoca un aviso de hidratación. Con useState viajan en el payload SSR.
 */
export function useLocaleParamsState() {
  return useState<{ path: string; params: LocaleParams } | null>('locale-params', () => null)
}
