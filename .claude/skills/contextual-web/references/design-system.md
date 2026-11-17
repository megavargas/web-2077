# Sistema de diseño → Tailwind v4

## Índice
1. Decisiones sobre contradicciones de `base/DESIGN.md`
2. Tokens y clases
3. Accesibilidad y contraste
4. Recetas de componentes
5. Layout y ritmo

---

## 1. Decisiones sobre contradicciones de `base/DESIGN.md`

| Conflicto en DESIGN.md | Decisión |
|---|---|
| "Agent Prompt Guide" #1 pide botón con radio 9999px (pill) | **Error del documento.** Radio 0 siempre. |
| Peso 700 "para palabras enfatizadas" vs "nunca titulares en 700" | El titular es 300/400. Se puede enfatizar **una** palabra o frase corta: en el hero, con color `accent`; en titulares de sección, con `font-bold`. Nunca ambos a la vez ni más de una por titular. |
| Tokens.json con letter-spacing 0 vs tabla con tracking negativo | Usa el tracking negativo (-0.011em en todo heading/display); ya va incluido en las clases `text-*`. |
| `--section-gap: 48-80px` (CSS inválido) | Eliminado. Secciones: `py-12 md:py-20` (48→80px). |
| Spacing con nombre (`--spacing-4: 4px`) en `base/theme.css` | Eliminado: rompía la escala de Tailwind. La base de 4px coincide con la de Tailwind (`--spacing: 0.25rem`), así que `p-4`=16px, `p-6`=24px, `p-10`=40px, `p-20`=80px, `p-45`=180px. |
| Metadatos de tarjeta a 12–14px | 14px (`text-caption`); 12px no está en la escala. |
| banda de acento "sin padding" vs "80px de padding vertical" | Sin margen exterior (toca las secciones vecinas, a sangre), con padding interior `py-20`. |
| "Sin anillo de foco visible" | Inputs: foco = borde cian (vale). Botones y enlaces: `focus-visible` con outline de 1px y offset 2px (ver §3). |
| Hover del CTA relleno no definido | Pasa a `bg-bone-white` (espejo de la inversión del botón ghost). |
| Color de acento naranja `#ff4f2b` y fuentes TWK Everett / Switzer | **Identidad Contextual**: acento cian `#00aff0` (8.4:1 sobre negro, mejor que el naranja), Archivo para display y body, Chivo Mono para etiquetas. |
| Heading de 60px (sección) no está en la tabla de escala | Añadido como `text-heading-xl` (60px, lh 1.0) a partir de tokens.json. |

## 2. Tokens y clases

El tema (`assets/theme.css`) **borra** la paleta, radios, sombras, familias y escala tipográfica por defecto de Tailwind, de modo que solo existen las clases de marca.

### Color
| Token | Hex | Clases | Uso |
|---|---|---|---|
| `void-black` | #0c1829 (azul marino; el nombre se mantiene) | `bg-void-black`, `text-void-black` | Canvas, hero, tarjetas, footer; texto sobre el acento |
| `carbon` | #13233a | `bg-carbon` | Superficie elevada: inputs, announcement bar, badges |
| `graphite-border` | #2b3d58 | `border-graphite-border` | Hairlines, divisores, borde de input |
| `steel-mid` | #7f8ca3 | `text-steel-mid` | Placeholder, texto ≥18px secundario, decorativo |
| `fog-light` | #c2cad8 | `text-fog-light`, `border-fog-light` | Texto secundario, extractos, metadatos pequeños, bordes de tarjeta |
| `bone-white` | #f5f5f5 | `text-bone-white`, `border-bone-white` | Texto principal, iconos, borde ghost |
| `accent` | #00aff0 | `bg-accent`, `text-accent` | Cian Contextual: acción/ignición (ver reglas de racionamiento) |

> **Fondo azul marino (decisión del cliente, 17/11/2026):** el canvas pasa de negro puro a `#0c1829` y los grises se tiñen de azul para casar con él. Sin degradados ni halos de fondo (se probó un halo tipo cqisense.com y se descartó). Contraste sobre el canvas: bone-white 16,4:1, fog-light 10,8:1, steel-mid 5,3:1, cian 7,1:1.

> **Ritmo de fondos de la home (decisión del cliente, 17/11/2026):** hero y contexto en marino → pilares en **banda azul** (`tone="accent"`, `bg-accent-strong` #0077a8 con texto blanco: el blanco sobre el cian de marca solo da 2,3:1) → «Cómo trabajamos» en **azul muy claro** (`tone="light"`, `bg-mist` #eaf6fd) → sectores en marino → ecosistema (Multicloud) en **azul muy claro** → CTA y pie en marino. La banda «AI without context…» se quitó de la home (sigue en /sectores). Una sola banda cian por página (la azul de pilares no cuenta como cian).
>
> **Secciones de color:** cortes rectos, sin degradado. Sobre `bg-mist`: titulares `text-void-black`, secundario `text-ink-mid` (#4b5a70, 6,4:1), líneas `border-mist-border` (#c9dfee), tarjetas/badges `bg-paper`, enlaces `text-accent-deep` (#006b99, 5,4:1). Sobre `bg-accent-strong`: títulos `text-paper` (5,0:1), resto `text-bone-white` (4,6:1; no bajes la opacidad), líneas `border-bone-white/30`, hover con subrayado, foco blanco por defecto. Sobre `bg-mist`, foco `outline-void-black`. Se implementan con la prop `tone` del componente (`SectionPillars`, `SectionMethod`, `SectionEcosystemTeaser`, `UiSectionHeader`, `UiBadge`, `UiLinkArrow`), nunca con clases del padre.

### Tipografía
| Clase | Tamaño / LH / tracking | Familia y peso típicos |
|---|---|---|
| `text-caption` | 14px / 1.2 / 0 | `font-mono uppercase` (labels, nav, botones) o `font-body` (extractos, announcement) |
| `text-body` | 16px / 1.4 | `font-body` |
| `text-subheading` | 18px / 1.4 | `font-body` (subtítulos del hero, párrafos destacados) |
| `text-heading-sm` | 24px / 1.3 / -0.011em | `font-display font-normal` (títulos de tarjeta) |
| `text-heading` | 36px / 1.2 | `font-display font-normal` |
| `text-heading-lg` | 48px / 1.1 | `font-display font-light` |
| `text-heading-xl` | 60px / 1.0 | `font-display font-light` (títulos de sección en desktop) |
| `text-display` | 72px / 1.0 | `font-display font-light` (hero) |
| `text-display-lg` | 96px / 0.95 | `font-display font-light` (hero en pantallas grandes) |

Familias: `font-display` y `font-body` (Archivo, variable 100–900), `font-mono` (Chivo Mono → JetBrains Mono / ui-monospace).

### Layout
- `max-w-page` = 1280px. Contenedor: `mx-auto w-full max-w-page px-4 md:px-10`.
- Padding de tarjeta 24px (`p-6`), gap entre elementos 16px (`gap-4`), entre bloques de una sección 40px (`gap-10`).

## 3. Accesibilidad y contraste

Contrastes sobre `void-black`: bone-white 19.3:1 · fog-light 11.4:1 · accent 8.4:1 · **steel-mid 4.4:1 (no pasa AA en texto < 18px)**. Negro sobre cian: 8.4:1. `graphite-border` (1.9:1) es demasiado tenue como único indicador de un control: los inputs llevan siempre `<label>` visible.

Foco (definido en la capa base del tema): `outline 1px bone-white, offset 2px` en `:focus-visible`. Dentro de la banda de acento, cámbialo a negro con `[&_:focus-visible]:outline-void-black` en la sección. Respeta `prefers-reduced-motion` en cualquier animación (`motion-safe:`).

Semántica: un `<h1>` por página (el del hero), secciones con `<section aria-labelledby>`, nav en `<nav aria-label>`, enlaces "READ MORE" con texto accesible que incluya el título (`<span class="sr-only">`).

## 4. Recetas de componentes

Clases de referencia; encapsúlalas en componentes Vue (ver `stack.md`) en lugar de copiarlas.

### Botón (`UiButton`, variantes `filled` | `ghost`)
```
base:   inline-flex items-center justify-center gap-2 border px-4 py-2
        font-mono text-caption uppercase transition-colors duration-150
filled: border-accent bg-accent text-void-black
        hover:border-bone-white hover:bg-bone-white
ghost:  border-bone-white bg-transparent text-bone-white
        hover:bg-bone-white hover:text-void-black
```
Ambos llevan borde de 1px para que tengan la misma altura cuando van juntos. Renderiza `<NuxtLink>` si recibe `to`, `<a>` si `href` externo, `<button type="button">` si no.

### Announcement bar
`bg-carbon py-1.5 text-center font-body text-caption text-bone-white`; enlaces en `text-accent underline-offset-4 hover:underline`.

### Navegación principal
`<header>` con `bg-void-black` (o transparente sobre el hero), contenedor `flex items-center justify-between py-4 px-4 md:px-10`. Logo de la compañía a la izquierda. Items: `font-mono text-caption uppercase text-bone-white hover:text-accent`, `gap-4 lg:gap-6`; activo con `text-accent` (`aria-current="page"`). A la derecha: CTA `filled` (Contacto) + `ghost` (Login, si aplica). En móvil, menú desplegable a pantalla completa `bg-void-black` con botón hamburguesa de trazo fino; sin mega-menú.

**Cabecera fija (sticky)** — decisión del cliente (17/11/2026), se aparta de DESIGN.md: `sticky top-0 z-40`, fondo `void-black` sólido (sin transparencia ni blur), `border-b` transparente arriba del todo y `border-graphite-border` al hacer scroll o con el menú móvil abierto. `html { scroll-padding-top: 5rem }` para que las anclas no queden tapadas; el panel móvil hace scroll propio (`max-h-[calc(100svh-4.5rem)] overflow-y-auto`).

### Hero
```
<section> min-h-[100svh] bg-void-black, imagen de fondo opcional a sangre
          (<NuxtImg> object-cover + overlay bg-linear-to-r from-void-black/90 to-void-black/20)
contenedor flex flex-col justify-end/center gap-8, texto alineado a la izquierda
h1:  font-display font-light text-heading-lg md:text-display xl:text-display-lg text-bone-white
     con una palabra en <span class="text-accent">
p:   font-body text-subheading text-bone-white max-w-[540px]
CTAs: flex flex-wrap gap-4 → UiButton filled + UiButton ghost
```
(`min-h-[100svh]` y `max-w-[540px]` son de los pocos valores arbitrarios aceptables: no son colores, tipos ni radios.)

### Ilustración del hero (`EmbeddingField`)
Espacio de embeddings generado por código (SVG con semilla fija, idéntico en SSR y cliente): nube de clústeres en perspectiva sobre una retícula fina, con un clúster en cian enmarcado como selección («a tu contexto»). Algunos puntos parpadean (`motion-safe:animate-blink`). Se funde a negro con overlays `bg-linear-to-b` y `bg-linear-to-r` (uso permitido de gradientes). Elegida el 17/11/2026 frente a racks (infraestructura, no es nuestro negocio), señales y ruido→orden. No usar servidores ni fotos de la web de referencia.

### Banda de acento full-bleed (máx. 1 por página)
`<section class="w-full bg-accent py-20 [&_:focus-visible]:outline-void-black">` → contenedor centrado → `<p>` `font-display font-normal text-heading-sm md:text-heading lg:text-heading-lg text-void-black text-center text-balance max-w-4xl mx-auto`. Una o dos frases, sin botones ni imágenes.

### Cabecera de sección
`flex items-end justify-between gap-6 mb-10 md:mb-12` → título `font-display font-light text-heading md:text-heading-lg lg:text-heading-xl text-bone-white` + contador opcional `font-mono text-body text-bone-white` ("01", "02"…, `aria-hidden` si es decorativo).

### Sección a dos columnas (texto / visual)
`grid gap-10 md:grid-cols-2 md:items-center`; el visual (captura de producto) flota sobre el negro, sin marco ni sombra; puede solaparse ligeramente con `md:-ml-10` o una leve rotación (`md:-rotate-2`), solo si no compromete la lectura.

### Tarjeta de noticia (`NewsCard`)
```
<article> bg-void-black flex flex-col
  imagen: aspect-video w-full object-cover (sin radio, a sangre)
  cuerpo: flex flex-col gap-3 pt-5 md:pt-6
    meta:   font-mono text-caption uppercase text-fog-light ("AUTOR: …" · fecha)
    título: font-display font-normal text-heading-sm text-bone-white
    extracto: font-body text-caption text-fog-light line-clamp-3
    enlace: font-mono text-caption uppercase text-accent hover:underline underline-offset-4
```
Grid: `grid gap-10 sm:grid-cols-2 lg:grid-cols-3`. Toda la tarjeta clicable con el patrón de enlace extendido (`after:absolute after:inset-0` sobre el enlace del título, `relative` en el article).

### Input (`UiInput`, `UiTextarea`)
```
label: font-mono text-caption uppercase text-fog-light mb-2 block
input: w-full border border-graphite-border bg-carbon px-4 py-3 font-body text-body
       text-bone-white placeholder:text-steel-mid outline-none
       focus:border-accent aria-[invalid=true]:border-accent
error: font-mono text-caption text-accent mt-2 (enlazado con aria-describedby)
```
El estado de error usa borde cian + mensaje de texto (nunca solo color).

### Footer
`bg-void-black py-12 md:py-20`, logo + columnas `grid gap-10 sm:grid-cols-2 lg:grid-cols-4`. Títulos de columna `font-mono text-caption uppercase text-steel-mid`… **ojo**: steel-mid a 14px no pasa AA → usa `text-fog-light` para títulos de columna y `text-bone-white hover:text-accent` para enlaces. Sin divisores ni cajas; como mucho un hairline `border-t border-graphite-border` sobre el copyright.

### Badge / tag
`inline-block border border-graphite-border bg-carbon px-2 py-1 font-mono text-caption uppercase text-fog-light`.

## 5. Layout y ritmo

- Secciones negras alternadas con **una** banda de acento: el contraste binario es el recurso dramático; no añadir fondos intermedios (salvo `carbon` para superficies puntuales).
- Espaciado generoso: `py-12 md:py-20` entre secciones, `gap-10` entre bloques. El texto "respira" sobre el negro; evita grids densos.
- Contenido de texto a `max-w-page`; imágenes y bandas pueden romper a sangre.
- Líneas de párrafo de 60–75 caracteres (`max-w-prose` o `max-w-[540px]` en el hero).
- Titulares largos: `text-balance`; párrafos: `text-pretty`.
