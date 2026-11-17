import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const routes = {
  es: [
    '/',
    '/servicios',
    '/servicios/estrategia',
    '/servicios/datos',
    '/servicios/inteligencia',
    '/servicios/ia',
    '/servicios/diagnostico',
    '/sectores',
    '/sectores/telco',
    '/sectores/banca',
    '/sectores/seguros',
    '/ecosistema',
    '/nosotros',
    '/talento',
    '/contacto',
    '/legal/aviso-legal',
    '/legal/privacidad',
    '/legal/cookies',
  ],
  en: [
    '/en',
    '/en/services',
    '/en/services/strategy',
    '/en/services/data',
    '/en/services/intelligence',
    '/en/services/ai',
    '/en/services/assessment',
    '/en/industries',
    '/en/industries/telco',
    '/en/industries/banking',
    '/en/industries/insurance',
    '/en/ecosystem',
    '/en/about',
    '/en/careers',
    '/en/contact',
    '/en/legal/legal-notice',
    '/en/legal/privacy',
    '/en/legal/cookies',
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
  const res = await page.goto('/servicios/no-existe')
  expect(res?.status()).toBe(404)
})
