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
    '@nuxtjs/sitemap',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
  ],

  // Los nombres ya llevan prefijo (Ui*, Section*, The*): sin prefijo de carpeta.
  components: [{ path: '~/components', pathPrefix: false }],

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    // Permite que el contenedor e2e acceda al servidor de desarrollo como http://web:3000
    server: { allowedHosts: ['web'] },
  },
  typescript: { strict: true, typeCheck: false },

  site: {
    url: 'https://contextual.team',
    name: 'Contextual Intelligence Partners',
  },

  runtimeConfig: {
    // URL a la que el formulario de contacto reenvía las solicitudes (NUXT_CONTACT_WEBHOOK_URL).
    // Sin ella, /api/contact responde 503 y la web ofrece el email como alternativa.
    contactWebhookUrl: '',
  },

  i18n: {
    baseUrl: 'https://contextual.team',
    // Rutas traducidas con definePageMeta({ i18n: { paths: { en: '/services' } } })
    customRoutes: 'meta',
    defaultLocale: 'en',
    strategy: 'prefix_except_default', // /services  y  /es/servicios
    locales: [
      { code: 'en', language: 'en-GB', name: 'English', file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
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
  // mode svg: los iconos respetan las clases size-* de Tailwind
  icon: {
    mode: 'svg',
    serverBundle: { collections: ['lucide'] },
    // Iconos en el bundle del cliente (también los del contenido YAML): funcionan en
    // navegación cliente y en hosting estático, sin endpoint /api/_nuxt_icon.
    clientBundle: {
      scan: { globInclude: ['app/**/*.vue', 'content/**/*.yml'] },
    },
  },

  eslint: { config: { stylistic: false } },
})
