/**
 * Pilares (con sus subservicios), sectores y subservicios ordenados, en el idioma actual.
 * Los usan la home, los listados, las páginas de detalle (enlaces cruzados) y el pie.
 */
export function useSiteData() {
  const l = useContentLocale()
  return useAsyncData(
    () => `site-${l.value}`,
    async () => {
      const [pillars, sectors, subservices] = await Promise.all([
        queryCollection(`pillars_${l.value}`).order('order', 'ASC').all(),
        queryCollection(`sectors_${l.value}`).order('order', 'ASC').all(),
        // Solo los campos de los listados: el contenido completo lo carga cada landing
        queryCollection(`subservices_${l.value}`)
          .select('key', 'pillar', 'order', 'slug', 'name', 'summary', 'icon')
          .order('order', 'ASC')
          .all(),
      ])
      // Orden global: pilar 01→04 y, dentro, 1→5
      const rank = (key: string) => pillars.findIndex((p) => p.key === key)
      subservices.sort((a, b) => rank(a.pillar) - rank(b.pillar) || a.order - b.order)
      return {
        pillars: pillars.map((p) => ({
          ...p,
          subservices: subservices.filter((s) => s.pillar === p.key),
        })),
        sectors,
        subservices,
      }
    },
  )
}
