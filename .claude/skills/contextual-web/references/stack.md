# Stack, estructura y herramientas

## Índice
1. Stack y por qué
2. Entorno y proyecto (ya montado)
3. Estructura de carpetas
4. Convenciones Vue / TypeScript
5. Fuentes
6. Imágenes, SEO y rendimiento
7. Calidad: lint, formato, tipos, tests
8. Scripts de package.json

---

## 1. Stack y por qué

| Pieza | Elección | Motivo |
|---|---|---|
| Framework | **Nuxt 4** (Vue 3) en modo estático (`nuxt generate`) o SSR | Una web corporativa necesita HTML prerenderizado para SEO y carga rápida; Nuxt lo da sin configurar a mano router, meta tags ni SSG. Sigue siendo Vue 3 con `<script setup>`. |
| Lenguaje | TypeScript estricto | |
| Estilos | Tailwind CSS v4 vía `@tailwindcss/vite` | Configuración CSS-first con `@theme`; sin `tailwind.config.js`. |
| Contenido | `@nuxt/content` (noticias/blog, textos legales) | Marketing edita Markdown sin tocar componentes. |
| Imágenes | `@nuxt/image` | Formatos modernos, `srcset` y tamaños automáticos. |
| Fuentes | `@nuxt/fonts` | Autohospeda Archivo y Chivo Mono (Google Fonts, OFL) sin peticiones a terceros (RGPD). |
| Iconos | `@nuxt/icon` con un set de trazo fino (p. ej. `lucide`) | Solo iconos funcionales, monocromos. |
| Lint | `@nuxt/eslint` (flat config) | |
| Formato | Prettier + `prettier-plugin-tailwindcss` | Ordena las clases de forma consistente. |
| Tests | Vitest + `@nuxt/test-utils` + `@vue/test-utils`; Playwright para e2e y accesibilidad (`@axe-core/playwright`) | |
| Paquetes | pnpm | |
| Estado global | Ninguno por defecto. `useState` de Nuxt si hace falta; Pinia solo si aparece estado complejo compartido. | Una web de marketing casi no tiene estado. |
| i18n | `@nuxtjs/i18n`, español (por defecto) + inglés | La web actual ya es bilingüe y hay clientes/oficinas fuera de España. |

Si el usuario prefiere Vue "puro" (SPA con Vite + Vue Router), todo lo de diseño y componentes aplica igual; cambian el scaffolding, el SEO (usar `@unhead/vue` + prerender) y la estructura (`src/` en vez de `app/`). Avisa de que una SPA sin prerender perjudica el SEO.

No fijes versiones de memoria: al añadir paquetes usa la última estable (`pnpm add x@latest`) y, si algo de esta guía no cuadra con la versión instalada, consulta la documentación oficial de esa versión antes de improvisar.

## 2. Entorno y proyecto (ya montado)

El proyecto **ya está creado** en el raíz de `web/` (junto a `base/`). No hay Node en el Mac: **todo corre en Docker**. No vuelvas a hacer scaffolding; lee `nuxt.config.ts`, `package.json` y `compose.yaml` si necesitas detalles.

| Tarea | Comando (desde `web/`) |
|---|---|
| Servidor de desarrollo | `make up` → http://localhost:3100 (el 3000 del host lo usa otra app; cambia con `WEB_PORT`) |
| Cualquier comando pnpm | `docker compose run --rm -T web pnpm <cmd>` (o `make sh` para una shell) |
| Lint / tipos / unit | `make lint`, `make typecheck`, `make test` |
| Todo + reglas de marca | `make check` |
| E2E + axe (móvil y desktop) | `make up` y luego `make e2e` |
| Web estática | `make generate` → `.output/public/` (para servirla en cualquier hosting estático) |
| Capturas para revisión visual | `docker compose --profile e2e run --rm -T e2e node node_modules/@playwright/test/cli.js screenshot --full-page --lang=es-ES --viewport-size=375,812 http://web:3000/ test-results/m.png` |
| VS Code | "Reopen in Container" (`.devcontainer/`) para tener Node, Volar, ESLint y Tailwind IntelliSense dentro |

Lo que ya se resolvió (no lo "arregles" de nuevo):
- **Node 26** (LTS) no trae `corepack`: pnpm se instala con `npm i -g` en `docker/Dockerfile.dev`.
- **pnpm 12** bloquea scripts de instalación: los permitidos están en `allowBuilds` de `pnpm-workspace.yaml` (`pnpm approve-builds <pkg>` para añadir).
- **TypeScript fijado a ~6.0**: TS 7 (nativo) no es compatible aún con `vue-tsc`/Volar ni con `typescript-eslint`. No lo subas hasta que ambos lo soporten (`pnpm peers check`).
- Los avisos de peers de `unctx` (oxc-parser, unplugin) vienen de Nuxt; ignóralos.
- `vite.server.allowedHosts: ['web']` permite al contenedor e2e acceder al dev server.
- La imagen de Playwright (`compose.yaml` → `e2e`) debe tener **la misma versión** que `@playwright/test` en `package.json`; si actualizas uno, actualiza el otro.
- Nuxt Content usa `node:sqlite` nativo (`experimental.sqliteConnector: 'native'`).
- Si en el contenedor de dev aparecen errores `EAI_AGAIN` (DNS) al cargar fuentes, recréalo: `docker compose up -d --force-recreate web`.
- Prettier formatea también `compose.yaml` (comillas simples): ten en cuenta eso al editarlo con `sed`.
- Componentes registrados **sin prefijo de carpeta** (`components: [{ path: '~/components', pathPrefix: false }]`): se usan como `<UiButton>`, `<SectionHero>`, `<TheHeader>`.
- Contenido de la home en `content/{es,en}/home.yml` (colecciones `home_es`/`home_en`, esquema en `content.config.ts`, tipo `HomeContent` en `app/types/home.ts`). Nuevas páginas: mismo patrón, una colección por idioma.
- Navegación en `app/composables/useMainNav.ts`: hoy apunta a anclas de la home; al crear páginas, cambia ahí las rutas.
- Email comercial en `app/app.config.ts` (`useContactHref()` construye el `mailto:`).
- Nunca pases clases de `display` (`hidden`, `sm:inline-flex`…) a una primitiva: chocan con las suyas. Envuélvela en un `<div>` con la clase responsive.
- **Selector de idioma con `<SwitchLocalePathLink>`**, nunca `switchLocalePath` + `NuxtLink`: en SSR la cabecera se pinta antes de que la página fije los slugs (`useSetI18nParams`) y el HTML estático enlazaría a rutas mezcladas (`/en/services/datos`), lo que rompe `nuxt generate`.
- Páginas dinámicas traducidas (`[pillar]`, `[sector]`, `legal/[slug]`): buscan por `slug` en su idioma y llaman a `useSetI18nParams` con el slug del otro idioma (por `key`).
- `UiContainer`: las clases que recibe se aplican al bloque interior (dentro del gutter), así los bordes quedan alineados con el contenido.
- Formulario: esquema compartido en `shared/contact.ts` (cliente y servidor), endpoint `server/api/contact.post.ts` → `NUXT_CONTACT_WEBHOOK_URL`. Sin webhook (o en hosting estático) muestra el email como alternativa.
- E2E: antes de hacer clic, espera a la hidratación (`waitForHydration` en `tests/e2e/helpers.ts`); `pages.spec.ts` recorre todas las rutas en ES/EN con axe; el proyecto `mobile` de Playwright va a 375px para detectar desbordes.

## 3. Estructura de carpetas

```
web/
├── base/                         # sistema de diseño original (no tocar)
├── app/
│   ├── assets/css/main.css       # tema Tailwind (copiado del skill)
│   ├── components/
│   │   ├── ui/                   # primitivas: UiButton, UiInput, UiContainer, UiSectionHeader, UiBadge, UiLogo
│   │   ├── sections/             # bloques de página: SectionHero, SectionStatement, SectionNewsGrid…
│   │   └── layout/               # TheHeader, TheFooter, TheAnnouncementBar
│   ├── composables/              # useXxx.ts
│   ├── layouts/default.vue       # header + <slot/> + footer
│   ├── pages/                    # rutas
│   └── app.vue
├── i18n/locales/                 # es.json, en.json — textos de interfaz (@nuxtjs/i18n los busca aquí, fuera de app/)
├── content/{es,en}/              # Markdown/YAML: servicios, sectores, insights, equipo (colecciones en content.config.ts)
├── public/                       # favicon, robots.txt, fonts/ con licencia, imágenes que no procesa @nuxt/image
├── tests/{unit,e2e}/             # unit: Vitest entorno nuxt · e2e: Playwright + axe
├── docker/Dockerfile.dev, compose.yaml, Makefile, .devcontainer/
└── nuxt.config.ts
```

Las páginas solo componen secciones; las secciones componen primitivas `ui/`; las primitivas son las únicas que contienen las recetas de clases de `design-system.md`.

## 4. Convenciones Vue / TypeScript

- SFC con `<script setup lang="ts">`, en este orden: `script`, `template` (sin `<style>` salvo casos justificados, y nunca con colores/tamaños literales).
- Nombres de componentes en PascalCase y multi-palabra (`UiButton`, no `Button`). Prefijos: `Ui*` primitivas, `Section*` bloques, `The*` singletons de layout.
- Props con `defineProps<{...}>()` y valores por defecto con desestructuración reactiva (`const { variant = 'filled' } = defineProps<…>()`); eventos con `defineEmits<{...}>()`; `defineModel()` para `v-model` en inputs.
- Variantes por prop tipada (`variant: 'filled' | 'ghost'`), resueltas con un objeto de clases. No aceptes clases de color/tamaño desde el padre para "personalizar" una primitiva: si hace falta una variante nueva, añádela a la primitiva.
- Lógica reutilizable en composables; nada de mixins ni Options API.
- Enlaces internos con `<NuxtLink>`; imágenes con `<NuxtImg>`/`<NuxtPicture>`; iconos con `<Icon>`.
- Datos asíncronos con `useAsyncData`/`queryCollection` (Nuxt Content), nunca `fetch` en `onMounted` para contenido indexable.
- Ningún texto visible escrito a pelo en un componente: `$t('…')` para interfaz o contenido de `content/` por idioma.
- Accesibilidad en la propia primitiva (labels, `aria-*`, foco), para que nadie tenga que acordarse después.

Ejemplo de primitiva:
```vue
<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const { variant = 'filled', to, href } = defineProps<{
  variant?: 'filled' | 'ghost'
  to?: RouteLocationRaw
  href?: string
}>()

const variants = {
  filled: 'border-accent bg-accent text-void-black hover:border-bone-white hover:bg-bone-white',
  ghost: 'border-bone-white bg-transparent text-bone-white hover:bg-bone-white hover:text-void-black',
} as const

const tag = computed(() => (to ? resolveComponent('NuxtLink') : href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="!to && !href ? 'button' : undefined"
    class="inline-flex items-center justify-center gap-2 border px-4 py-2 font-mono text-caption uppercase transition-colors duration-150"
    :class="variants[variant]"
  >
    <slot />
  </component>
</template>
```

## 5. Fuentes

- **Archivo** (titulares y texto; variable, pesos 100–900 y eje de anchura) y **Chivo Mono** (etiquetas): ambas de Omnibus-Type, Google Fonts, licencia OFL. Las sirve `@nuxt/fonts` autohospedadas.
- Pesos que se cargan: Archivo 300/400/700, Chivo Mono 400. Cada peso extra es peso de página.
- Archivo ya es la tipografía de la web actual: mantenerla conserva continuidad de marca.

## 6. Imágenes, SEO y rendimiento

- `<NuxtImg>` con `sizes` adecuados, `format="avif,webp"` cuando proceda, `loading="lazy"` salvo la imagen del hero (`preload` + `fetchpriority="high"`). Siempre `alt` descriptivo (o `alt=""` si es decorativa).
- Cada página: `useSeoMeta({ title, description, ogTitle, ogDescription, ogImage })`; plantilla de título en `app.vue` (`titleTemplate: '%s · <Compañía>'`).
- `robots.txt` y sitemap (módulo `@nuxtjs/sitemap` si hay muchas páginas), URL canónica, datos estructurados `Organization` en la home.
- Objetivo Lighthouse ≥ 95 en rendimiento, accesibilidad, buenas prácticas y SEO en móvil. Lo que más pesa aquí: imagen del hero y fuentes.
- Sin librerías de animación pesadas; transiciones CSS cortas y con `motion-safe:`.

## 7. Calidad

- `eslint.config.mjs` generado por `@nuxt/eslint` (`withNuxt()`); desactiva reglas de estilo que choquen con Prettier (`@nuxt/eslint` con `features.stylistic: false`).
- Tests unitarios de primitivas `ui/` (variantes, accesibilidad: rol, label, `type` del botón).
- E2E con Playwright: la home carga, navegación funciona, formulario de contacto valida, y pasada de axe sin violaciones en cada página.
- `scripts/check-design.sh` del skill para las reglas de marca (se puede añadir como paso de CI).

## 8. Scripts de package.json

```json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "lint": "eslint . && prettier --check .",
    "format": "prettier --write .",
    "typecheck": "nuxt typecheck",
    "test": "vitest run",
    "test:e2e": "playwright test",
    "check:design": "bash .claude/skills/contextual-web/scripts/check-design.sh"
  }
}
```
