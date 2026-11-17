/** Título y descripción de la página (y Open Graph) desde el bloque `seo` del contenido. */
export function usePageSeo(
  seo: MaybeRefOrGetter<{ title: string; description: string } | undefined>,
) {
  useSeoMeta({
    title: () => toValue(seo)?.title,
    description: () => toValue(seo)?.description,
    ogTitle: () => toValue(seo)?.title,
    ogDescription: () => toValue(seo)?.description,
    ogType: 'website',
  })
}
