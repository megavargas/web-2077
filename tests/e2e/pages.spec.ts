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
    '/es/servicios/estrategia/estrategia-datos-ia',
    '/es/servicios/estrategia/evaluacion-madurez',
    '/es/servicios/estrategia/casos-de-uso',
    '/es/servicios/estrategia/modelo-operativo',
    '/es/servicios/estrategia/gobierno-datos-ia',
    '/es/servicios/datos/plataformas-datos-cloud',
    '/es/servicios/datos/lakehouse-data-warehouse',
    '/es/servicios/datos/migracion-bi-etl',
    '/es/servicios/datos/ingenieria-calidad-datos',
    '/es/servicios/datos/dataops-observabilidad',
    '/es/servicios/inteligencia/bi-capa-semantica',
    '/es/servicios/inteligencia/analitica-avanzada',
    '/es/servicios/inteligencia/modelos-predictivos',
    '/es/servicios/inteligencia/decision-intelligence',
    '/es/servicios/inteligencia/analitica-autoservicio',
    '/es/servicios/ia/agentes-ia',
    '/es/servicios/ia/asistentes-conocimiento',
    '/es/servicios/ia/automatizacion-procesos',
    '/es/servicios/ia/mlops-llmops',
    '/es/servicios/ia/evaluacion-gobierno-ia',
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
    '/services/strategy/data-ai-strategy',
    '/services/strategy/maturity-assessment',
    '/services/strategy/use-case-portfolio',
    '/services/strategy/operating-model',
    '/services/strategy/data-ai-governance',
    '/services/data/cloud-data-platforms',
    '/services/data/lakehouse-data-warehouse',
    '/services/data/legacy-bi-etl-migration',
    '/services/data/data-engineering-quality',
    '/services/data/dataops-observability',
    '/services/intelligence/bi-semantic-layer',
    '/services/intelligence/advanced-analytics',
    '/services/intelligence/predictive-models',
    '/services/intelligence/decision-intelligence',
    '/services/intelligence/self-service-analytics',
    '/services/ai/ai-agents',
    '/services/ai/knowledge-assistants',
    '/services/ai/process-automation',
    '/services/ai/mlops-llmops',
    '/services/ai/ai-evaluation-governance',
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
