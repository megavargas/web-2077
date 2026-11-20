# Contenido: posicionamiento, servicios, sectores y tono

## Índice
1. Posicionamiento
2. Los 4 pilares de servicio
3. Cómo trabajamos
4. Sectores
5. Mapa del sitio
6. Tono y reglas de redacción
7. Datos de empresa (confirmar antes de publicar)

---

## 1. Posicionamiento

**Contextual Intelligence Partners** es una consultora de **consultoría + datos + inteligencia + IA**. Ya no es "un partner de BI/datawarehouse": el dato es el medio, la mejor decisión de negocio es el fin.

Idea central (úsala como hilo conductor de toda la web, juega con el nombre):
> **La IA solo funciona con contexto.** El contexto es una estrategia clara (01), datos fiables (02) y conocimiento del negocio (03). Sin eso, la IA (04) se queda en piloto.

Mensajes de referencia (ES / EN):
- **Claim del hero (aprobado 17/11/2026):** *Somos / inteligencia / aplicada / **a tu contexto.*** — *We Are / Applied / Intelligence, / **in your context.*** (apilado, última línea en cian). Línea de confianza: «Desde 2016. Google Cloud, Azure y AWS. Telco, Banca y Seguros.» **No usar «independiente(s)» en ninguna parte de la web** (decisión del cliente, 17/11/2026).
- Hero: *Inteligencia con **contexto**.* / *Intelligence, in **context**.* (la palabra enfatizada va en `text-accent`)
- Subtítulo: *Estrategia, datos e IA para que las decisiones importantes se tomen mejor y antes.* / *Strategy, data and AI so that the decisions that matter are made better, and sooner.*
- Banda de acento: *La IA sin contexto es solo estadística. Nosotros ponemos el contexto.* / *AI without context is just statistics. We bring the context.*

Son propuestas aprobadas como dirección; se pueden pulir, pero mantén la idea "contexto".

## 2. Los 4 pilares de servicio

Siempre en este orden y con esta numeración (encaja con el contador mono "01–04" de la cabecera de sección). Cada pilar tiene su página (`/servicios/<slug>`).

| # | Pilar (ES / EN) | slug | Qué incluye | Resultado para el cliente |
|---|---|---|---|---|
| 01 | Consultoría y estrategia / Consulting & Strategy | `estrategia` | Estrategia de datos e IA; diagnóstico de madurez; identificación y priorización de casos de uso con business case; modelo operativo y centro de excelencia; gobierno del dato y de la IA (incl. AI Act) | Saber qué hacer primero, por qué y con qué retorno |
| 02 | Datos / Data | `datos` | Plataformas cloud (Google Cloud, Azure); lakehouse y warehouse; migración de BI/ETL legacy (Cognos, MicroStrategy, PowerCenter…) a stack moderno; ingeniería y calidad del dato; DataOps y observabilidad | Un dato único, fiable y gobernado sobre el que construir |
| 03 | Inteligencia / Intelligence | `inteligencia` | BI y capa semántica; analítica avanzada; modelos predictivos; *decision intelligence* (cuadros de mando que recomiendan, no solo muestran); analítica de autoservicio | Decisiones basadas en evidencia, en el momento en que se toman |
| 04 | IA aplicada / Applied AI | `ia` | IA generativa y agentes sobre procesos reales; asistentes sobre conocimiento interno; automatización de procesos; MLOps/LLMOps; evaluación, seguridad y trazabilidad de modelos | IA en producción, medida y controlada, no pilotos eternos |

Reglas:
- Los pilares se presentan como un **recorrido** (01→04), no como un catálogo: cada página de pilar enlaza al anterior/siguiente.
- Las herramientas (BigQuery, Snowflake, Power BI, Looker, Cloud Composer, Grafana…) **no tienen página propia**; aparecen como "tecnologías con las que trabajamos" dentro del pilar 02/03 y en Ecosistema.

## 3. Cómo trabajamos

Cuatro fases (sección propia en la home y en Servicios):
1. **Diagnóstico** (2–4 semanas): situación, casos de uso priorizados, hoja de ruta. Es la puerta de entrada comercial — el CTA secundario de la web apunta aquí.
2. **Diseño**: arquitectura, modelo de gobierno, plan de entrega.
3. **Construcción**: entregas iterativas con valor en cada sprint.
4. **Operación**: servicio gestionado de plataforma, modelos y cuadros de mando.

No confundir esta numeración con la de pilares en la misma vista: si aparecen juntas, usa números para pilares y nombres de fase sin número (o al revés).

**Home: pila de contexto y pilares (decisión del cliente, 20/11/2026):** la pila de contexto es un **diagrama de la tesis sin enlaces** (sus teselas no llevan a ningún sitio, para no competir con el catálogo). La navegación a los servicios está en las tarjetas de pilar (`SectionPillars`, home y `/servicios`): cada subservicio es una fila con su icono (campo `icon` del YAML del subservicio, lucide) en una caja con hairline, nombre y flecha; al pasar el ratón la caja se rellena, el nombre se subraya y la flecha avanza. Se probaron y descartaron: sustituir los pilares de la home por la pila con los 20 subservicios, y enlazar cada tesela de la pila a su subservicio.

## 4. Sectores

Foco: **Telco, Banca y Seguros** (`/sectores/telco`, `/sectores/banca`, `/sectores/seguros`). Son sectores regulados y con muchísimo dato: el discurso pone por delante gobierno, seguridad y trazabilidad.

**Casos de cliente: no se reutilizan por ahora (ver §5b).** Mientras tanto, las páginas de sector sustituyen a los casos con: retos del sector → casos de uso que abordamos → qué pilares intervienen → CTA a diagnóstico. Los casos de uso son **capacidades**, nunca se presentan como proyectos realizados.

| Sector | Casos de uso que abordamos (base para redactar) | Contexto regulatorio a mencionar |
|---|---|---|
| Telco | Predicción de churn y retención; next-best-offer; analítica de red y mantenimiento predictivo; asistentes GenAI para atención al cliente; revenue assurance y detección de fraude | GDPR, AI Act |
| Banca | Riesgo de crédito y scoring; prevención de fraude y AML; reporting regulatorio y agregación de datos de riesgo; hiperpersonalización; copilotos para gestores y back-office | BCBS 239, DORA, GDPR, AI Act |
| Seguros | Pricing y tarificación; automatización de siniestros (lectura de documentos con IA); detección de fraude; retención de cartera; reporting regulatorio | Solvencia II, IFRS 17, DORA, AI Act |

Menciona la regulación como contexto que entendemos, **no** como certificaciones ni cumplimiento garantizado.

En el YAML de cada sector, cada caso de uso lleva `services: [...]` con 1–2 subservicios (claves de `subserviceKeys`): la página del sector muestra una etiqueta por subservicio (icono, código «03.3», nombre) que enlaza a su landing, y la página de cada pilar deduce de ahí en qué casos interviene. Los subservicios transversales (estrategia, madurez, cartera de casos, modelo operativo, migración, autoservicio, DataOps) no se asignan a casos de sector.

**Otros sectores (decisión del cliente, 20/11/2026):** solo Telco, Banca y Seguros tienen página (el benchmark muestra que tener los tres es ya diferencial). En `/sectores` hay un bloque «También trabajamos en» (`sectors.yml` → `others`, logos con `UiClientLogo`) con sectores fuera del foco **solo si hay un cliente real** de la lista de logos: Deporte y medios, Seguridad y servicios al hogar, Servicios profesionales, Tecnología y cloud, Medio ambiente y economía circular, Agroalimentación. Los textos describen el sector, no proyectos. Energía y utilities sería el cuarto sector natural (el más repetido entre competidores), pero no se añade sin clientes o experiencia real.

## 5. Mapa del sitio (implementado)

Base: `docs/reports/Benchmark competitivo web Contextual.md` (benchmark de 29 competidores, nov. 2026).

```
/                                Home: hero · clientes (muro de logos) · contexto en 3 capas · pilares 01→04 · método · sectores · banda · ecosistema · CTA
/servicios                       Recorrido 01→04 · método con entregables · formas de trabajar (proyecto, gestionado, capacidad flexible)
/servicios/{estrategia,datos,inteligencia,ia}    Problema · qué incluye (tarjetas a sus 5 subservicios) · resultado · dónde lo aplicamos (por sector) · tecnologías · anterior/siguiente
/servicios/<pilar>/<subservicio>   20 landings (5 por pilar, numeradas 01.1–04.5): migas · problema · qué hacemos · cómo (4 pasos) · resultado y entregables · un caso de uso por sector · tecnologías · resto del pilar y relacionados · anterior/siguiente (recorrido 01.1→04.5) · CTA
                                 En la landing: «El problema» muestra la primera frase de `problem.text` como titular y el resto como consecuencias (escríbelo en 2–3 frases); «Cómo lo hacemos» es la banda azul de la página (`bg-accent-strong`), con 4 pasos y un icono lucide por paso (`approach.steps[].icon`).
/servicios/diagnostico           Landing de la oferta de entrada + formulario (motivo fijo)
/sectores (con bloque «También trabajamos en», sin páginas propias) · /sectores/{telco,banca,seguros}      Retos · casos de uso por área de negocio con pilares · regulación · CTA con sector
/ecosistema                      Partners · licencias y facturación · tecnologías
/talento · /contacto (formulario con motivo y sector, ?sector=&reason=)
(Sin página «Nosotros»: se quitó el 20/11/2026 por decisión del cliente. La sede y el LinkedIn están en el pie, `app.config.ts`.)
/legal/{aviso-legal,privacidad,cookies}          Borradores pendientes de revisión legal (noindex)
Idioma por defecto: **inglés** en la raíz (`/services`, `/industries/banking`…); español bajo `/es` (`/es/servicios`, `/es/sectores/banca`…). Las rutas de arriba son las españolas, sin el prefijo `/es`.
```

Reservado y **sin enlazar** hasta que haya decisión o contenido: `/casos` (casos de cliente), `/insights` (sin artículos aún), `/autodiagnostico` (fase 2).

Subservicios: un YAML por idioma en `content/{es,en}/subservices/<key>.yml` (claves en `subserviceKeys` de `content.config.ts`); son la fuente de la lista «Qué incluye» del pilar y de la tarjeta de pilares. Investigación de competencia de cada landing en `docs/research_notes/Landings de subservicios/` (20/11/2026). Trato al lector: **tú** (no «vosotros»).

Contenido: cada página tiene su YAML en `content/{es,en}/` (esquemas en `content.config.ts`). Pilares, subservicios y sectores son la única fuente de verdad: la home, los listados, el pie y los enlaces cruzados los leen de ahí.

## 5b. Decisiones pendientes del cliente

- **Casos de cliente:** decidido el 17/11/2026 **no reutilizar** las 17 historias de la web antigua por ahora. No publicar cifras ni historias de esos casos; `/casos` sigue reservada y sin enlazar.
- **Logos de clientes (decisión del cliente, 20/11/2026):** sí se publican, en la home, en un muro de logos rotatorio (`SectionClients`) bajo el claim «Colaboramos con empresas que ya conoces». Son 18: 17 de los 19 que lista contextual.team (/companiesLogos) — KeepCoding y Detexian quedan fuera por decisión del cliente — más Hey!Broadband (de su SVG oficial). El 20/11/2026 sale Jazztel y entra Mapfre (logo oficial 2026 de Wikimedia Commons, ya vectorial en una tinta: trazados copiados tal cual). Rejilla de 3 filas sin líneas (6×3 en escritorio, 4×3 en tablet, 2×3 en móvil); si caben todos, no rota. Planos en una tinta (blanco en oscuro, marino en claro) en `app/assets/data/clients.json`. Solo logo y nombre: sin casos, cifras ni frases de cliente. Para añadir o quitar uno, edita la lista y regenera el JSON (trazado con potrace, como `logo.json`). Al pasar a una tinta, Securitas Direct pierde los tres círculos rojos (se funden con el recuadro negro): se añaden a mano como huecos circulares tras el trazado.
- **Nombre del método/diagnóstico** (el benchmark recomienda darle marca). No inventarlo.
- **Expertos por sector** (campo `expert` en el YAML del sector; solo se muestra si existe).
- **Google Marketing Platform:** si aparece o no en Ecosistema.
- **Niveles de partnership** y servicios del bloque de licencias (marcados `TODO` en `ecosystem.yml`).
- **Oficinas** fuera de Madrid y dirección (solo se publican las que tengan dirección real).
- **Envío del formulario:** definir destino (`NUXT_CONTACT_WEBHOOK_URL`) y hosting con servidor; en estático, el formulario ofrece el email.

## 6. Tono y reglas de redacción

Voz: **consultor senior hablando con un directivo**. Directa, concreta, segura sin presumir.

- Frases cortas, verbos concretos, un mensaje por párrafo. Primero el resultado de negocio, luego la tecnología.
- Prohibido el relleno de la web anterior: "desbloquear el potencial", "revolucionar", "sinergias", "de vanguardia", "viaje", "ecosistema armonioso", "llevar al siguiente nivel". Si una frase vale para cualquier consultora, reescríbela.
- **No inventes**: ni clientes, ni logos, ni cifras ("+200 proyectos", "30% de ahorro"), ni testimonios, ni certificaciones. Si una sección lo necesita, deja `TODO:` visible y avisa.
- Siglas explicadas la primera vez (AML, MLOps…). Mayúsculas solo donde toque (no "DATA strategy").
- Etiquetas en `font-mono` mayúsculas con formato de "lectura de sistema": `01 — ESTRATEGIA`, `SECTOR: BANCA`, `INSIGHTS / 2026`.
- Escribe ES y EN a la vez; el inglés es una adaptación natural (británico), no una traducción literal. El inglés es el idioma por defecto de la web.
- Revisa ortografía antes de cerrar: la web anterior publicó erratas y texto lorem ipsum.

## 7. Datos de empresa (confirmar antes de publicar)

Tomados de la web actual (contextual.team); pueden estar desactualizados:
- Partnerships publicados en la web nueva: Google Cloud, Microsoft Azure y AWS, los tres como partner y revendedor de licencias. **Datadog no se menciona** (decisión del cliente, 17/11/2026). Google Marketing Platform: pendiente.
- Oficinas declaradas en la web antigua: Madrid, Milán, Lisboa, México, Tallin, Zúrich (varias con teléfonos de relleno). Publicada solo Madrid en la lista. El mapa de «Dónde estamos» (México, Madrid, Zúrich, Londres, Riad, Tel Aviv) desapareció con la página «Nosotros» el 20/11/2026; la sede de Madrid se publica en el pie.
- Domicilio social (BORME, mayo 2026): C/ Espoz y Mina 2, Madrid. NIF B87568440. Fundada en 2016.
- Email de contacto: **hola@contextual.team** (único; formulario, legal y contacto).
- Logo (decisión del cliente, 20/11/2026): logotipo sin símbolo, ruta 33 «Llave abierta» — «{contextual» con la llave en Archivo Bold (700) y en el color de acento, separada de la «c» 0,12 em, y, debajo y alineado a la derecha, «intelligence partners» más pequeño y en un tono más apagado. Nombre y descriptor en Archivo Regular (400); ambos pesos los carga la web, con «contextual» ligeramente apretado (−0,03 em). La llave abierta es el único acento del logotipo: el contexto que se abre con cada cliente. Sustituye al hexágono de contextual.team. Trazados en `app/assets/data/logo.json` (`brace`, `name`, `descriptor`), pintados por `UiLogo` con los colores del tema (`accent`, `bone-white` y `fog-light`; en modo claro, azul de marca, marino y gris azulado). `public/favicon.svg` es «{c» (llave en acento, también según el tema del navegador) y `public/og-{es,en}.png` llevan el logotipo nuevo. No se recompone con texto en vivo: si cambia, se regeneran los trazados.


**Sin preguntas frecuentes (decisión del cliente, 20/11/2026):** la web no tiene secciones de FAQ en ninguna página (ni datos estructurados FAQPage). Si una duda importa, se responde en el propio contenido de la sección.
