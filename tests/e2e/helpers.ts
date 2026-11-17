import type { Page } from '@playwright/test'

/** Espera a que Vue haya hidratado la página (antes, los clics no tienen manejadores). */
export async function waitForHydration(page: Page) {
  await page.waitForFunction(() => Boolean(document.querySelector('#__nuxt')?.__vue_app__))
}
