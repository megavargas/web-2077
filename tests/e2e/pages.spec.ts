import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const routes = {
  es: [
    '/es',
    '/es/servicios',
    '/es/servicios/estrategia',
    '/es/servicios/datos',
    '/es/servicios/inteligencia',
    '/es/servicios/ia',
    '/es/servicios/diagnostico',
    '/es/sectores',
    '/es/sectores/telco',
    '/es/sectores/banca',
    '/es/sectores/seguros',
    '/es/ecosistema',
    '/es/nosotros',
    '/es/talento',
    '/es/contacto',
    '/es/legal/aviso-legal',
    '/es/legal/privacidad',
    '/es/legal/cookies',
  ],
  en: [
    '/',
    '/services',
    '/services/strategy',
    '/services/data',
    '/services/intelligence',
    '/services/ai',
    '/services/assessment',
    '/industries',
    '/industries/telco',
    '/industries/banking',
    '/industries/insurance',
    '/ecosystem',
    '/about',
    '/careers',
    '/contact',
    '/legal/legal-notice',
    '/legal/privacy',
    '/legal/cookies',
  ],
}

for (const [locale, paths] of Object.entries(routes)) {
  const lang = locale === 'es' ? 'es-ES' : 'en-GB'
  for (const path of paths) {
    test(`${path}: carga, un h1, idioma, sin desborde y sin errores de accesibilidad`, async ({
      page,
    }) => {
      const res = await page.goto(path)
      expect(res?.status()).toBe(200)
      await expect(page.locator('h1')).toHaveCount(1)
      await expect(page.locator('html')).toHaveAttribute('lang', lang)
      await expect(page).toHaveTitle(/Contextual Intelligence Partners/)

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      )
      expect(overflow).toBeLessThanOrEqual(0)

      const axe = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze()
      expect(axe.violations).toEqual([])
    })
  }
}

test('una ruta inexistente devuelve 404', async ({ page }) => {
  const res = await page.goto('/services/does-not-exist')
  expect(res?.status()).toBe(404)
})
