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
- **Claim del hero (aprobado 17/11/2026):** *Somos / inteligencia / aplicada / **a tu contexto.*** — *We Are / Applied / Intelligence, / **in your context.*** (apilado, última línea en cian). Línea de confianza: «Desde 2016. Google Cloud, Azure y AWS. Telco, Banca y Seguros.» No usar «independientes».
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
- Las herramientas (BigQuery, Snowflake, Power BI, Looker, Airflow, Matillion…) **no tienen página propia**; aparecen como "tecnologías con las que trabajamos" dentro del pilar 02/03 y en Ecosistema.

## 3. Cómo trabajamos

Cuatro fases (sección propia en la home y en Servicios):
1. **Diagnóstico** (2–4 semanas): situación, casos de uso priorizados, hoja de ruta. Es la puerta de entrada comercial — el CTA secundario de la web apunta aquí.
2. **Diseño**: arquitectura, modelo de gobierno, plan de entrega.
3. **Construcción**: entregas iterativas con valor en cada sprint.
4. **Operación**: servicio gestionado de plataforma, modelos y cuadros de mando.

No confundir esta numeración con la de pilares en la misma vista: si aparecen juntas, usa números para pilares y nombres de fase sin número (o al revés).

## 4. Sectores

Foco: **Telco, Banca y Seguros** (`/sectores/telco`, `/sectores/banca`, `/sectores/seguros`). Son sectores regulados y con muchísimo dato: el discurso pone por delante gobierno, seguridad y trazabilidad.

**Casos de cliente: no se reutilizan por ahora (ver §5b).** Mientras tanto, las páginas de sector sustituyen a los casos con: retos del sector → casos de uso que abordamos → qué pilares intervienen → CTA a diagnóstico. Los casos de uso son **capacidades**, nunca se presentan como proyectos realizados.

| Sector | Casos de uso que abordamos (base para redactar) | Contexto regulatorio a mencionar |
|---|---|---|
| Telco | Predicción de churn y retención; next-best-offer; analítica de red y mantenimiento predictivo; asistentes GenAI para atención al cliente; revenue assurance y detección de fraude | GDPR, AI Act |
| Banca | Riesgo de crédito y scoring; prevención de fraude y AML; reporting regulatorio y agregación de datos de riesgo; hiperpersonalización; copilotos para gestores y back-office | BCBS 239, DORA, GDPR, AI Act |
| Seguros | Pricing y tarificación; automatización de siniestros (lectura de documentos con IA); detección de fraude; retención de cartera; reporting regulatorio | Solvencia II, IFRS 17, DORA, AI Act |

Menciona la regulación como contexto que entendemos, **no** como certificaciones ni cumplimiento garantizado.

## 5. Mapa del sitio (implementado)

Base: `docs/reports/Benchmark competitivo web Contextual.md` (benchmark de 29 competidores, nov. 2026).

```
/                                Home: hero · contexto en 3 capas · pilares 01→04 · método · sectores · banda · ecosistema · CTA
/servicios                       Recorrido 01→04 · método con entregables · formas de trabajar (proyecto, gestionado, capacidad flexible) · FAQ
/servicios/{estrategia,datos,inteligencia,ia}    Problema · qué incluye · resultado · dónde lo aplicamos (por sector) · tecnologías · FAQ · anterior/siguiente
/servicios/diagnostico           Landing de la oferta de entrada + formulario (motivo fijo)
/sectores · /sectores/{telco,banca,seguros}      Retos · casos de uso por área de negocio con pilares · regulación · FAQ · CTA con sector
/ecosistema                      Partners · licencias y facturación · tecnologías
/nosotros · /talento · /contacto (formulario con motivo y sector, ?sector=&reason=)
/legal/{aviso-legal,privacidad,cookies}          Borradores pendientes de revisión legal (noindex)
/en/...                          services, industries, ecosystem, about, careers, contact, legal (slugs traducidos)
```

Reservado y **sin enlazar** hasta que haya decisión o contenido: `/casos` (casos de cliente), `/insights` (sin artículos aún), `/autodiagnostico` (fase 2).

Contenido: cada página tiene su YAML en `content/{es,en}/` (esquemas en `content.config.ts`). Pilares y sectores son la única fuente de verdad: la home, los listados, el pie y los enlaces cruzados los leen de ahí.

## 5b. Decisiones pendientes del cliente

- **Casos de cliente:** decidido el 17/11/2026 **no reutilizar** las 17 historias de la web antigua por ahora. No publicar nombres de clientes, logos ni cifras de esos casos; `/casos` sigue reservada y sin enlazar.
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
- Escribe ES y EN a la vez; el inglés es una adaptación natural (británico), no una traducción literal.
- Revisa ortografía antes de cerrar: la web anterior publicó erratas y texto lorem ipsum.

## 7. Datos de empresa (confirmar antes de publicar)

Tomados de la web actual (contextual.team); pueden estar desactualizados:
- Partnerships publicados en la web nueva: Google Cloud, Microsoft Azure y AWS, los tres como partner y revendedor de licencias. **Datadog no se menciona** (decisión del cliente, 17/11/2026). Google Marketing Platform: pendiente.
- Oficinas declaradas en la web antigua: Madrid, Milán, Lisboa, México, Tallin, Zúrich (varias con teléfonos de relleno). Publicada solo Madrid.
- Domicilio social (BORME, mayo 2026): C/ Espoz y Mina 2, Madrid. NIF B87568440. Fundada en 2016.
- Email de contacto: **hola@contextual.team** (único; formulario, legal y contacto).
- Logo: pendiente versión vectorial ligera y versión monocroma blanca para fondo negro (el `logo_small.svg` actual pesa 1,7 MB). Hasta tenerla, usa `UiLogo` con el texto "CONTEXTUAL" en `font-mono` como placeholder.
