import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-11-17',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
  ],

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    // Permite que el contenedor e2e acceda al servidor de desarrollo como http://web:3000
    server: { allowedHosts: ['web'] },
  },
  typescript: { strict: true, typeCheck: false },

  i18n: {
    baseUrl: 'https://contextual.team',
    defaultLocale: 'es',
    strategy: 'prefix_except_default', // /servicios  y  /en/services
    locales: [
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'en', language: 'en-GB', name: 'English', file: 'en.json' },
    ],
  },

  content: {
    // node:sqlite nativo (Node ≥ 22.5): evita compilar better-sqlite3
    experimental: { sqliteConnector: 'native' },
  },

  fonts: {
    families: [
      { name: 'Archivo', provider: 'google', weights: [300, 400, 700] },
      { name: 'Chivo Mono', provider: 'google', weights: [400] },
    ],
  },

  image: { quality: 80, format: ['avif', 'webp'] },

  // Iconos empaquetados en el build: sin llamadas a la API de Iconify
  icon: { serverBundle: { collections: ['lucide'] } },

  eslint: { config: { stylistic: false } },
})
