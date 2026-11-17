import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: 'tests/e2e',
  reporter: process.env.CI ? 'list' : 'html',
  use: { baseURL: process.env.BASE_URL ?? 'http://localhost:3100', locale: 'es-ES' },
  projects: [
    // 375px: el ancho móvil más estrecho que soportamos
    { name: 'mobile', use: { ...devices['Pixel 7'], viewport: { width: 375, height: 812 } } },
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
    },
  ],
})
