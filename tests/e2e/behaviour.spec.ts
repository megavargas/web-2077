import { expect, test } from '@playwright/test'
import { waitForHydration } from './helpers'

test('la home muestra los 4 pilares en orden y los 3 sectores, enlazados', async ({ page }) => {
  await page.goto('/es')
  const pillars = page.locator('#services ol > li')
  await expect(pillars).toHaveCount(4)
  await expect(pillars.locator('> span[aria-hidden]')).toHaveText(['01', '02', '03', '04'])
  await expect(page.locator('#sectors ul > li h3 a')).toHaveText(['Telco', 'Banca', 'Seguros'])
})

test('el cambio de idioma conserva la página y traduce el slug', async ({ page }) => {
  await page.goto('/es/servicios/datos')
  await waitForHydration(page)
  await page
    .getByRole('navigation', { name: 'Idioma' })
    .getByRole('link', { name: 'English' })
    .click()
  await expect(page).toHaveURL(/\/services\/data$/)
  await page.goto('/industries/banking')
  await waitForHydration(page)
  await page
    .getByRole('navigation', { name: 'Language' })
    .getByRole('link', { name: 'Español' })
    .click()
  await expect(page).toHaveURL(/\/es\/sectores\/banca$/)
})

test('la navegación marca la sección activa', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/es/servicios/ia')
  await expect(
    page.getByRole('navigation', { name: 'Principal' }).getByRole('link', { name: 'Servicios' }),
  ).toHaveAttribute('aria-current', 'page')
})

test.describe('formulario de contacto', () => {
  test('valida los campos y lleva el foco al primer error', async ({ page }) => {
    await page.goto('/es/contacto')
    await waitForHydration(page)
    await page.getByRole('button', { name: 'Enviar' }).click()
    await expect(page.getByRole('alert')).toHaveText('Revisa los campos marcados.')
    await expect(page.locator('#contact-name')).toBeFocused()
    await expect(page.locator('#contact-name')).toHaveAttribute('aria-invalid', 'true')
    await expect(page.locator('#contact-name')).toHaveAttribute(
      'aria-describedby',
      'contact-name-error',
    )
  })

  test('rellena sector y motivo desde la URL', async ({ page }) => {
    await page.goto('/es/contacto?sector=banking&reason=rfp')
    await waitForHydration(page)
    await expect(page.locator('#contact-sector')).toHaveValue('banking')
    await expect(page.locator('#contact-reason')).toHaveValue('rfp')
  })

  test('sin envío configurado ofrece el email como alternativa', async ({ page }) => {
    await page.goto('/es/contacto')
    await waitForHydration(page)
    await page.locator('#contact-name').fill('Ana Pérez')
    await page.locator('#contact-email').fill('ana@example.com')
    await page.locator('#contact-sector').selectOption('telco')
    await page.locator('#contact-reason').selectOption('project')
    await page.locator('#contact-message').fill('Queremos priorizar casos de uso de IA.')
    await page.locator('#contact-consent').check()
    await page.getByRole('button', { name: 'Enviar' }).click()
    await expect(page.getByText('Ahora mismo no podemos recibir el formulario')).toBeVisible()
    await expect(
      page.locator('form').getByRole('link', { name: 'hola@contextual.team' }),
    ).toHaveAttribute('href', 'mailto:hola@contextual.team')
  })

  test('el diagnóstico fija el motivo y no muestra su selector', async ({ page }) => {
    await page.goto('/es/servicios/diagnostico')
    await expect(page.locator('#assessment-name')).toBeVisible()
    await expect(page.locator('#assessment-reason')).toHaveCount(0)
  })
})

test.describe('menú móvil', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('se abre, navega y se cierra', async ({ page }) => {
    await page.goto('/es')
    await waitForHydration(page)
    const toggle = page.getByRole('button', { name: 'Abrir menú' })
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await toggle.click()
    const menu = page.locator('#mobile-menu')
    await expect(menu).toBeVisible()
    await menu.getByRole('link', { name: 'Sectores' }).click()
    await expect(page).toHaveURL(/\/es\/sectores$/)
    await expect(menu).toBeHidden()
  })
})

test.describe('idioma por defecto y detección', () => {
  test.describe('navegador en inglés', () => {
    test.use({ locale: 'en-GB' })
    test('/ es la web en inglés', async ({ page }) => {
      await page.goto('/')
      await expect(page).toHaveURL(/\/$/)
      await expect(page.locator('html')).toHaveAttribute('lang', 'en-GB')
    })
  })

  test.describe('navegador en español', () => {
    test.use({ locale: 'es-ES' })
    test('un navegador en español que entra por / va a /es', async ({ page }) => {
      await page.goto('/')
      await expect(page).toHaveURL(/\/es$/)
      await expect(page.locator('html')).toHaveAttribute('lang', 'es-ES')
    })
  })
})

test('el HTML del servidor enlaza el selector de idioma a la ruta traducida', async ({
  request,
}) => {
  const html = await (await request.get('/es/servicios/datos')).text()
  expect(html).toContain('href="/services/data"')
  expect(html).not.toContain('/services/datos')
})
