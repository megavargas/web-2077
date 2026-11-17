import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

for (const path of ['/', '/en']) {
  test.describe(`home ${path}`, () => {
    test('carga con un único h1 y el idioma correcto', async ({ page }) => {
      await page.goto(path)
      await expect(page.locator('h1')).toHaveCount(1)
      await expect(page.locator('html')).toHaveAttribute('lang', path === '/' ? 'es-ES' : 'en-GB')
    })

    test('sin scroll horizontal', async ({ page }) => {
      await page.goto(path)
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      )
      expect(overflow).toBeLessThanOrEqual(0)
    })

    test('sin violaciones de accesibilidad (axe, WCAG AA)', async ({ page }) => {
      await page.goto(path)
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze()
      expect(results.violations).toEqual([])
    })
  })
}

test.describe('detección de idioma', () => {
  test.use({ locale: 'en-GB' })

  test('un navegador en inglés que entra por / va a /en', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL(/\/en$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en-GB')
  })
})
