/**
 * Marca <html data-hydrated> cuando la hidratación termina por completo (incluidas las
 * páginas asíncronas con Suspense). Los tests e2e esperan a esta marca antes de interactuar.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:suspense:resolve', () => {
    document.documentElement.dataset.hydrated = ''
  })
})
