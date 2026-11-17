---
name: contextual-web
description: Guía de diseño, contenido e implementación de la web de Contextual Intelligence Partners (contextual.team) con Vue 3 (Nuxt) + Tailwind CSS v4 — sistema visual oscuro de base/DESIGN.md con acento cian Contextual, Archivo + Chivo Mono, cero radios; servicios en 4 pilares (consultoría, datos, inteligencia, IA) y sectores Telco, Banca y Seguros. Úsala SIEMPRE que vayas a crear, modificar o revisar cualquier página, sección, componente, estilo, layout, formulario, texto o contenido de la web de la compañía — hero, navegación, botones, tarjetas, servicios, sectores, insights/blog, footer, landing pages, textos ES/EN — y también al montar o configurar el proyecto (Nuxt, Tailwind, tokens, fuentes, lint, tests) o al comprobar si algo "está en marca", aunque el usuario no mencione el sistema de diseño. Also use for any company-website UI work in Vue/Nuxt/Tailwind.
---

# Web de Contextual Intelligence Partners — Vue + Tailwind

Este skill concentra todo lo necesario para que cualquier trabajo en la web salga coherente: el lenguaje visual, cómo se traduce a Tailwind v4, qué se cuenta y cómo, y cómo se estructura el código Vue/Nuxt.

## Fuentes de verdad

| Qué | Dónde | Nota |
|---|---|---|
| Lenguaje visual, componentes, do's & don'ts | `base/DESIGN.md` | Referencia original. Tiene contradicciones internas — ver resoluciones abajo. |
| Valores de tokens | `base/tokens.json` | |
| Tema Tailwind listo para usar (corregido) | `assets/theme.css` de este skill | Sustituye a `base/theme.css`, que rompe la escala de spacing de Tailwind. |
| Decisiones, mapeo token→clase, recetas de componentes | `references/design-system.md` | **Léelo antes de escribir UI.** |
| Stack, estructura, herramientas, i18n, SEO, tests | `references/stack.md` | Léelo al montar el proyecto o tocar configuración/tooling. |
| Posicionamiento, 4 pilares, sectores, mapa del sitio, tono | `references/content.md` | **Léelo antes de escribir o maquetar cualquier texto o página.** |

Si `base/DESIGN.md` y este skill discrepan, manda este skill (ya resuelve los conflictos del original). Si el usuario pide algo que contradice ambos, hazlo pero avísale de la desviación.

## Identidad: Contextual sobre una base visual ajena

`base/DESIGN.md` se extrajo de la web de otra empresa (Ori / "Radiant") como referencia de estilo. Adoptamos su gramática visual (fondo oscuro —azul marino `#0c1829` en lugar de negro puro—, geometría recta, tipografía ligera a gran tamaño, etiquetas mono, ritmo), con la identidad de **Contextual Intelligence Partners**:

- **Acento cian `#00aff0`** (token `accent`), el color de marca de Contextual, en lugar del naranja del original.
- **Archivo** (titulares y texto) + **Chivo Mono** (etiquetas), ambas libres (Google Fonts). Archivo ya es la tipografía de la marca.
- Nunca uses el wordmark "RADIANT"/"Ori", sus titulares ("We Are Powered Intelligence"), sus textos ni sus fotos.
- Logo y textos son de Contextual. Si falta algo, placeholder evidente (`TODO:`) y avisa; no inventes copy que parezca definitivo, ni clientes, cifras o testimonios (ver `references/content.md` §6).

## Reglas no negociables (y por qué)

1. **Radio 0 en todo** — botones, tarjetas, inputs, badges, imágenes. La geometría rectangular *es* la marca (estética de infraestructura); un `rounded` de 2px ya la rompe. El tema elimina los radios de Tailwind para que no se cuelen.
2. **Sin sombras, glows ni gradientes decorativos.** La profundidad se consigue con cambio de superficie (`void-black` → `carbon`) y hairlines de 1px (`graphite-border` o `fog-light`). Única excepción: un degradado oscuro sobre una foto para legibilidad del texto.
3. **El cian (`accent`) se raciona**: CTAs rellenos, estado activo de navegación, foco de inputs, una palabra de énfasis en el hero, y **como máximo una banda full-bleed cian por página** (excepción: la home tiene dos, ver design-system.md). Si aparece en todas partes deja de significar "acción".
4. **Paleta binaria**: solo los 7 colores de marca. El tema borra la paleta por defecto de Tailwind, así que `text-gray-500` o `bg-white` no existen — usa `text-fog-light`, `bg-bone-white`, etc. Nada de colores arbitrarios (`bg-[#123456]`).
5. **Tipografía en tres papeles fijos**: `font-display` (titulares, peso 300 en grande / 400 en secciones y tarjetas), `font-body` (párrafos), `font-mono` (etiquetas, nav, botones, metadatos — en mayúsculas, 14px). Nunca titulares completos en negrita.
6. **Solo escala tipográfica del sistema** (`text-caption` … `text-display-lg`), no tamaños arbitrarios.
7. **Accesibilidad no se negocia aunque DESIGN.md diga "sin anillo de foco"**: todo elemento interactivo tiene `:focus-visible` visible (rectangular). `steel-mid` (#7f8ca3, 5,3:1 sobre el fondo marino) para texto secundario; en superficie `carbon` baja a 4,6:1; para metadatos pequeños usa `fog-light`.
8. **Imágenes**: fotografía oscura de infraestructura/arquitectura, a sangre, sin radio. Sin personas, ilustraciones, 3D ni iconografía decorativa. Iconos solo de trazo fino monocromo.

## Flujo de trabajo

### 1. Sitúate
- La app ya existe y **todo se ejecuta en Docker** (no hay Node en el host): mira `references/stack.md` §2 para los comandos (`make up`, `make check`, `make e2e`…).
- Si existe, revisa qué hay en `app/components/ui/` y `app/components/sections/` antes de crear nada: **reutiliza y extiende** los componentes base en vez de reescribir clases sueltas. La consistencia de la web depende de que un botón sea siempre `<UiButton>`.

### 2. Decide qué se cuenta
Antes de maquetar, ubica la página en el mapa del sitio y en el relato de `references/content.md`: qué pilar(es) o sector, qué mensaje, qué CTA (normalmente "Solicita un diagnóstico" o "Contacto"). Escribe los textos en ES y EN siguiendo las reglas de tono.

### 3. Diseña con las recetas
Para cada pieza, parte de la receta correspondiente en `references/design-system.md` (Hero, Statement band, Section header, News card, Input, Nav, Footer…). Ritmo de página habitual:

```
Announcement bar (opcional) → Nav → Hero (negro) → Secciones negras (2 col texto/visual, grid 3 col de tarjetas)
→ UNA banda cian full-bleed → más secciones negras → Footer
```

### 4. Implementa
- Componentes `<script setup lang="ts">`, props tipadas, variantes por prop (no por clases que pase el padre).
- Utilidades Tailwind en el template; nada de `<style>` con colores/tamaños sueltos ni `@apply` para replicar componentes (para eso están los componentes Vue).
- Mobile-first: escala los titulares por breakpoint (las recetas indican cómo); gutter lateral de 16px en móvil, 40px en desktop, contenido a `max-w-page` (1280px), bandas e imágenes a sangre.
- Contenido fuera de los componentes: textos largos en `content/{es,en}/` (Nuxt Content), textos de interfaz en `i18n/locales/` — así se edita sin tocar código y ningún texto queda sin traducir.
- Cada página define título y meta con `useSeoMeta`.

### 5. Verifica antes de dar por terminado
```bash
make check   # reglas de marca (check-design.sh) + lint + typecheck + tests unitarios
make up && make e2e   # e2e + accesibilidad (axe) en móvil y desktop
```
Y **mira el resultado**: con `make up`, revisa http://localhost:3100 (o capturas a 375px y 1440px, ver `references/stack.md` §2). Comprueba en concreto: que no hay scroll horizontal, que el cian aparece solo donde toca, que el foco por teclado se ve, y que los titulares grandes no se parten mal en móvil.

`check-design.sh` da ERRORES (rompen la marca, corrígelos) y AVISOS (revísalos a criterio: p. ej. un degradado sobre foto es válido).

## Cierre: checklist

- [ ] Reutiliza componentes `ui/` existentes; los nuevos siguen las recetas.
- [ ] Sin radios, sombras, colores fuera de paleta ni tamaños arbitrarios (`check-design.sh` limpio de errores).
- [ ] Cian racionado; máximo una banda de acento en la página.
- [ ] Jerarquía tipográfica correcta (display ligero, body, mono en mayúsculas).
- [ ] Responsive revisado a 375px y 1440px; foco visible; imágenes con `alt`; un solo `<h1>` por página.
- [ ] Textos en ES y EN, sin relleno, sin datos inventados, sin erratas; los 4 pilares en orden 01→04.
- [ ] Lint, typecheck y tests en verde.
- [ ] Nada de la marca de referencia (Radiant/Ori) en logo, textos o imágenes.
