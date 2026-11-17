/**
 * Pilares y sectores ordenados, en el idioma actual. Los usan la home, los listados,
 * las páginas de detalle (enlaces cruzados) y el pie.
 */
export function useSiteData() {
  const l = useContentLocale()
  return useAsyncData(
    () => `site-${l.value}`,
    async () => {
      const [pillars, sectors] = await Promise.all([
        queryCollection(`pillars_${l.value}`).order('order', 'ASC').all(),
        queryCollection(`sectors_${l.value}`).order('order', 'ASC').all(),
      ])
      return { pillars, sectors }
    },
  )
}
