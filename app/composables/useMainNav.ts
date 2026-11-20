/** Navegación principal (cabecera, menú móvil y pie). */
export function useMainNav() {
  const { t } = useI18n()
  return computed(() => [
    { key: 'services', label: t('nav.services'), to: { name: 'servicios' } },
    { key: 'sectors', label: t('nav.sectors'), to: { name: 'sectores' } },
    { key: 'ecosystem', label: t('nav.ecosystem'), to: { name: 'ecosistema' } },
    { key: 'contact', label: t('nav.contact'), to: { name: 'contacto' } },
  ])
}

/** ¿La ruta actual está dentro de la sección? (/servicios/datos activa «Servicios»). */
export function useIsActiveSection() {
  const route = useRoute()
  const localePath = useLocalePath()
  return (to: Parameters<typeof localePath>[0]) => {
    const base = localePath(to)
    return route.path === base || route.path.startsWith(`${base}/`)
  }
}
