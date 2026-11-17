import type { Page } from '@playwright/test'

/**
 * Espera a que la hidratación haya terminado por completo (ver app/plugins/hydrated.client.ts).
 * Antes de eso, los clics pueden caer en HTML sin manejadores.
 */
export async function waitForHydration(page: Page) {
  await page.locator('html[data-hydrated]').waitFor({ state: 'attached' })
}
