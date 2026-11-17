# Contextual Intelligence Partners: inventario de la web actual (contextual.team), noviembre de 2026

> **Método.** La web es una SPA en Vue 3, Vite y vue-i18n. El HTML servido es un esqueleto vacío (`<div id="app"></div>`). Todo el contenido se ha extraído, sin ejecutarlo, del bundle JavaScript publicado ([bundle `/assets/index-BSezHWQK.js`](https://www.contextual.team/assets/index-BSezHWQK.js), copia local de 4 MB). El proceso fue este: se localizaron los objetos de mensajes `en` y `es` (`messages={en,es}`), se pasaron a un formato plano (unas 870 claves en EN y 810 en ES) y se revisaron las tablas del router y los datos fijados en los componentes. Las claves i18n se citan como `clave.ruta`. Como fuente se cita el bundle, el [HTML de la portada](https://www.contextual.team/), el [sitemap](https://www.contextual.team/sitemap.xml), el [robots.txt](https://www.contextual.team/robots.txt) o fuentes externas.
> Abreviaturas: **[B]** = [bundle JS de contextual.team](https://www.contextual.team/assets/index-BSezHWQK.js) · **[H]** = [HTML de la portada](https://www.contextual.team/)

---

## Ficha (URL, sede, oficinas, partners, idiomas)

### Takeaway
La web presenta a Contextual como una consultora española de datos, BI y cloud fundada en 2016, «partner de Google Platform y Google Cloud en EMEA», con 6 oficinas y partners Google, Azure y Datadog. La dirección de Madrid que publica la web ya no coincide con el domicilio social inscrito en 2026. El selector anuncia 4 idiomas, pero solo existen EN y ES.

### Hallazgos citados
- **URL:** https://www.contextual.team (también responde https://contextual.team). Título de página: `<title>Contextual</title>`. Meta description: «Datawarehouse, Business Analytics & Cloud Technology». `<html lang="en">` fijo — [H]
- **Razón social:** Contextual Intelligence Partners SL, CIF B87568440. Inicio de operaciones el 17/05/2016 y constitución publicada en el BORME el 15/07/2016. El objeto social es la consultoría en «business intelligence, big data y marketing contextual», el desarrollo de software y la comercialización de equipos informáticos — [infonif/economia3](https://infonif.economia3.com/ficha-empresa/contextual-intelligence-partners-sl)
- **Administración (registro):** en 2016, administrador único Samuel Vargas Fernández. Desde el 28/11/2019, administradores solidarios Samuel Vargas Fernández e Iván Marbán Argüello — [infonif](https://infonif.economia3.com/ficha-empresa/contextual-intelligence-partners-sl)
- **Fundadores según la web:** «Ivan Marbán — Co-Founder / CEO» y «Samuel Vargas — Co-Founder / CEO». Los dos aparecen con el mismo cargo de CEO, en la sección «Management» de /company — [B]
- **Sede publicada en la web:** «Contextual Intelligence Partners · C. Las Norias, 92, 28221 · Madrid · 912 59 83 18», en el footer y en la pestaña de oficinas — [B]
- **Domicilio social inscrito:** pasó a C/ Norias 92 (Majadahonda) el 05/05/2023 y a **C/ Espoz y Mina 2, Madrid**, según el BORME del 13/05/2026 — [infonif](https://infonif.economia3.com/ficha-empresa/contextual-intelligence-partners-sl)
- **Oficinas (componente `offices`):** Madrid (C. Las Norias 92), Milan (Via Gaetano de Castillia 23, tel. «02 1234567»), Lisbon (Praça Marquês de Pombal 14, «Lissabon», tel. «21 9876543»), Mexico (sin dirección ni teléfono), Tallinn (Rotermanni 6, tel. «55 1234 5678») y Zurich (sin dirección ni teléfono) — [B]
- **Mapa de empleo:** coordenadas solo de Madrid, Lisboa y Milán — [B]
- **Presencia declarada:** «Founded in 2016 in Spain, we've grown rapidly, spreading our expertise across Portugal, Italy, Mexico, Switzerland, and the Middle East» (`company.about.about_text_1`, EN). La versión ES dice «Fundada en **2017** en España…» — [B]
- **Regiones comerciales (página /contact):** «Spain, Italy», «Portugal», «Central Europe and the Middle East» y «Scandinavia & Baltics or Northern Europe». Solo la última tiene una persona de contacto publicada, un comercial con email y LinkedIn. Esa región no existe en la versión ES — [B]
- **Partners que se declaran:** «trusted Google Partner and Reseller», «accredited partner and reseller of Google Marketing Platform and Google Cloud», «accredited partner and reseller of Azure Cloud» y «accredited partner of Datadog» — [B] (`home.why.description`, `why_contextual.main.*`)
- **Cifras de la empresa:** «Founded 2016 · Employees +50 · Projects completed 120 / +120 · Different nationalities 10 / +10». Hay dos componentes con valores ligeramente distintos — [B]
- **Otras cifras:** «25 ~ Clients around the globe», «15 ~ Mean years of experience» y «50 ~ Outstanding persons work in Contextual» (página de startups). En /career: «15 ~ / 10 ~ Client nationalities / 50 ~» — [B]
- **Tamaño según terceros:** 21–50 empleados. Ingresos estimados de 2,7 M$ (estimación del agregador, no es un dato reportado). Lo describe como «boutique consulting firm focused on data warehousing, business analytics, agentic AI, and cloud», con presencia en «Iberia, the Nordics, and the Middle East» — [prospeo](https://prospeo.io/c/contextual-intelligence-partners-revenue). La ficha registral muestra el número de empleados oculto («2***») — [infonif](https://infonif.economia3.com/ficha-empresa/contextual-intelligence-partners-sl)
- **Idiomas:** el selector ofrece «English, Español, Português, Deutsch» (banderas fi-um, fi-ea, fi-pt, fi-de), pero `messages={en,es}`. Locale por defecto `en` y fallback `en` — [B]
- **Contacto genérico:** hello@contextual.team y business@contextual.team. LinkedIn: linkedin.com/company/contextual- — [B]
- **Política de seguridad:** el footer enlaza a `/PO-ENS-00.pdf`, un PDF de 247 KB creado el 22/11/2024 — [PDF](https://www.contextual.team/PO-ENS-00.pdf)
- **Stack de la web:** Vue 3, Vite, Tailwind, PrimeVue y Firebase (auth y Firestore). Medición con Google Analytics 4 (G-X75P8X64TJ) y Datadog RUM (`service: 'contextual-landing'`, `sessionReplaySampleRate: 100`). Versión de la app «0.0.22» — [H], [B]

### Inferencias
- Por el nombre (`PO-ENS-00`), el PDF es probablemente la Política de Seguridad del Esquema Nacional de Seguridad (ENS). No se pudo extraer el texto (faltan herramientas PDF), así que la certificación ENS no está verificada.
- Los teléfonos de Milán, Lisboa y Tallinn tienen forma de marcador de posición («1234567», «9876543», «1234 5678»). Varias oficinas no tienen dirección. Parecen oficinas más deseadas que operativas.
- La dirección publicada (Las Norias 92, Majadahonda, rotulada como «Madrid») quedó desfasada tras el cambio de domicilio de mayo de 2026.

### Lagunas
- No se ha podido verificar en los directorios oficiales de Google Cloud, Microsoft o Datadog el nivel de partnership (Partner/Premier, reseller) ni las especializaciones. La búsqueda no devolvió resultados.
- La página de LinkedIn no es accesible sin sesión, así que no hay cifra oficial de seguidores ni de empleados.
- No se ha podido leer el contenido del PDF de política de seguridad.

---

## Posicionamiento y mensajes

### Takeaway
El mensaje dominante es de 2023–2024: «partner de datos/DATA strategy» y «reseller Google» con un sesgo fuerte hacia el marketing digital (Ad Tech, Conversion Optimization, GMP). Choca con el contenido real de los casos (DWH en telco, IA en Vodafone y Unicaja) y con el reposicionamiento deseado («consultoría + datos + inteligencia + IA» para Telco, Banca y Seguros). No hay propuesta de valor sectorial.

### Hallazgos citados (literales EN / ES)
- **Hero (H1):** «Unlock the potential of your data with Contextual» / «Desbloquea el potencial de tus datos con Contextual». CTAs del hero: «Use Cases» / «Casos de Uso» (→ /why-contextual/stories) y «Request a meeting» / «Solicitar una reunión» (→ /contact). Debajo, un carrusel de logos — [B] (`home.title`, `home.use_cases`, `home.meeting`, componente `carrousel`)
- **Descriptor:** «Datawarehouse, Business Analytics & Cloud Technology» / «Datawarehouse, Business Analytics y Tecnología Cloud» — [B]
- **Quiénes somos:** título «DATA strategy Partner» / «Socio estratégico de datos». Texto: «Contextual is a leader in analytics, cloud, and marketing technology solutions, serving as a partner for Google Platform and Google Cloud across EMEA. With a varied group of certified experts focusing on Datawarehousing development, Data Strategy, Artificial Intelligence, Digital Analytics and Cloud Engineering, Contextual delivers consultancy and holistic assistance to clients confronting diverse data-driven marketing obstacles within the Google Cloud Stack.» — [B] (`home.partners`)
- **Why Contextual:** «As a trusted Google Partner and Reseller, Contextual empowers clients with expertise and best practices in Digital Analytics, Conversion Optimization, Ad Tech, Advanced Analytics & AI, Cloud Engineering, and Tech & Data Strategy. Collaborating closely with our clients, we co-create cutting-edge solutions for data-driven marketing within the evolving privacy-centric landscape.» — [B] (`home.why.description`)
- **4 pilares de «Why»** (`home.why.features`) — [B]:
  - «Tech Partnership: As a tech-focused entity, we serve as an impartial technology partner for both advertisers and media agencies.» / «Socio Tecnológico…»
  - «Across All Industries: Contextual, we tailor solutions for diverse industries such as Media & Entertainment, Automotive, Finance & Insurance, Telecommunications, and beyond.»
  - «Excellence in Focus: We excel by focusing solely on Google technology, providing unparalleled expertise to our clients.» / «Sobresalimos al centrarnos únicamente en la tecnología de Google…»
  - «Global and Multidisciplinary: Backed by a team of numerous skilled specialists across various locations, Contextual delivers bespoke technical solutions on a global scale.»
- **Bloque de servicios en la home:** «Services & Solutions — Establishing a unified data identity throughout the entire organization.» / «Estableciendo una identidad de datos unificada en toda la organización.» — [B]
- **Cierre comercial:** «We're here to boost your data efficiency and effectiveness.» y «Please feel free to contact us regarding our service and solutions offering» — [B] (`common.*`)
- **Mensaje de partnership:** «Let's work together — Partnering with Contextual — We enable our clients to leverage the full potential of Google Marketing Platform and Google Cloud for an integrated Analytics, Marketing and Cloud stack.» — [B]
- **Menú:** «End-to-end solutions for digital maturity» / «Soluciones integrales para la madurez digital». Company: «More on Contextual as cloud & marketing technology partner» — [B]
- **About:** «Analytics & Cloud Technology Partner». Misión: «to arm our clients with cutting-edge analytics, marketing, and cloud solutions that not only meet their needs but also propel their growth and success.» — [B] (`company.about`)
- **Clientes citados en About:** «Orange, Proan, MasMovil, LaLiga or EQT Venture Capital Company Adamo» — [B]
- **Bio de un fundador:** «…20 years… In the last 15 years, I have spearheaded data-focused work teams, contributing significantly to the telecom, insurance, and banking sectors across Europe.» Es la única mención explícita a la tríada Telco–Seguros–Banca — [B] (`company.about.ivan_text`)

### Inferencias
- La mayor parte de las secciones genéricas parece texto generado con plantillas de IA (fórmulas como «Unlock…», «Elevate…», «Empower…», «unparalleled», «revolutionize»). No transmite experiencia propia.
- El posicionamiento «solely on Google technology» contradice el resto del sitio (Azure, Datadog, Snowflake, Informatica, IBM Cognos, MicroStrategy).
- El foco en el marketing digital (Ad Tech, anunciantes, agencias de medios, GMP) no se corresponde con ningún caso de éxito publicado. Es un residuo de un posicionamiento anterior.

### Lagunas
- No hay claim corto de marca ni una propuesta de valor diferencial más allá del H1 genérico.

---

## Navegación y mapa del sitio

### Takeaway
Hay 4 menús desplegables (mega-menu), un CTA «Contact our sales team» y unas 35 rutas públicas. Además hay rutas internas de presentaciones comerciales protegidas por login, pero su código y su contenido viajan en el bundle público. El sitemap solo declara la home.

### Hallazgos citados
- **Navbar (EN / ES), según [B] (`navbar.*`):**
  1. **Why Contextual / ¿Por qué Contextual?** («End-to-end solutions for digital maturity»)
     - *Discover*: For Big Companies · For Mid-Sized Companies · For Venture Capital & Startups
     - *Customers*: Featured Stories · See All Customers
     - *Technological Partners*: Azure («Future proof data collection») · Google («Enhanced UX and onsite efficiency») · Datadog («Streamlined monitoring, analytics, and collaboration for operational excellence»). Datadog no aparece en ES.
  2. **Services & Solutions / Servicios y Soluciones**
     - *Services*: Advance Analytics & ML/AI («Future proof data collection») · Datawarehouse («Enhanced UX and onsite efficiency») · Datalakehouse («Technology for data-driven marketing») · Cloud Architectures («Dashboards, AI/ML and advanced analytics») · Generative AI («Future proof data collection») · Tech & Data Strategy («Strategic tech stack consulting»)
     - *Solutions*: BI As A Service (BIASS) («Future proof data collection»)
  3. **Products & Tools / Productos y Herramientas** («Contextual as a Google partner and reseller»)
     - *Our Technologies*: Azure · Google
     - *Tools*: Bigquery · Airflow · Power BI · Looker Studio · Snowflake · PowerCenter · Cognos · Microstrategy · Datafactory · Matillion · Synapse Analytics · Datadog (cada una con un subtítulo de 2 a 4 palabras)
  4. **Company / Empresa**: About Contextual («More information on how we work») · Career («Become part of the contextual team») · Contact («Get in touch on any questions around our tools and services»)
  - Botón «Contact» / «Contact our sales team» y selector de idioma — [B]
- **Footer (columnas), según [B] (`footer.*`):**
  - *Services & Solutions*: Advanced Analytics & ML/AI · Datalakehouse · «Generative IA» · Datawarehouse · Cloud Architectures · Tech & Data Strategy. BIaaS no aparece.
  - *Products & Tools*: Our Technologies (Azure, Google) · Tools (Bigquery … Synapse Analytics). Datadog no aparece.
  - *Company*: About Contextual · Career · Contact · Security Policy (PDF)
  - *Why Contextual*: Discover (3 segmentos) · Customers (Featured Stories, See All Customers) · Technological Partners (Azure, Google). Datadog no aparece.
  - Social: solo LinkedIn. Bloque con dirección y teléfono de Madrid.
- **Rutas del router (tabla completa en [B]):**
  - `/` (home) · `/company` · `/contact` · `/career` · `/jobs` · `/jobs/:id`
  - `/products` (Products & Tools) · `/partners/cloud-partners`
  - `/service-solutions` · `/service-solutions/advanced-analytics-ai` · `/datawarehouse` · `/datalakehouse` · `/cloud-architectures` · `/generative-ai` · `/tech-data-strategy` · `/biass` · `/digital-analytics` (ruta huérfana sin enlace en el menú; reutiliza el componente de Advanced Analytics)
  - Herramientas bajo `/service-solutions/`: `big-query`, `airflow`, `power-bi`, `looker-studio`, `snowflake`, `powercenter`, `cognos`, `microstrategy`, `datafactory`, `matillion`, `synapse`, `datadog`
  - `/why-contextual` · `/why-contextual/big-companies` · `/mid-companies` · `/startups` · `/all-customers` · `/stories` · `/stories/:id` (con `/stories/12` redirigido al listado) · `/azure` · `/google` · `/datadog`
  - **Internas** (`requiresAuth`): `/slides`, `/slides-config`, `/slides-dev`, `/slidesTimer`, más un login. Son un deck comercial con secciones como useCases, quantrue1–5, testimonials, digitalTransformation, ESG/eco, timelineMap, comercials y closingSlide.
- **Sitemap:** una sola URL, `https://contextual.team/` (sin www), lastmod 2024-11-26 — [sitemap](https://www.contextual.team/sitemap.xml)
- **robots.txt:** bloquea `/admin/`, `/private/` y `/api/` (rutas que no existen en el router) y apunta al sitemap — [robots](https://www.contextual.team/robots.txt)
- Cualquier ruta (p. ej. `/why-contextual/stories`) devuelve el mismo HTML vacío con el mismo `<title>` y la misma description — verificado con curl sobre [contextual.team/why-contextual/stories](https://www.contextual.team/why-contextual/stories)

### Inferencias
- La arquitectura mezcla capacidades (servicios), productos de terceros (herramientas) y segmentos por tamaño de empresa. No hay ningún eje sectorial (Telco, Banca, Seguros), ni blog, ni insights.
- Las 12 páginas de herramientas cuelgan de `/service-solutions/` aunque en el menú están en «Products & Tools». La estructura de URL no es coherente.

### Lagunas
- No se ha podido comprobar el renderizado visual (mobile o desktop). El inventario se basa en código y textos.

---

## Oferta de servicios (literal)

### Takeaway
Hay 6 servicios y 1 solución empaquetada (BIaaS). Cada servicio tiene una página con un subtítulo y 4 o 5 bloques de beneficios genéricos. Ninguno menciona sectores, metodología, entregables ni casos concretos.

### Hallazgos citados
**Página general /service-solutions** — [B] (`ser_sol`)
- Subtítulo: «Holistic approach of Digital Analytics, Conversion Optimization, Ad Tech, Advanced Analytics & AI, Cloud Engineering and Tech & Data Strategy.» / «Enfoque holístico de Analítica Digital, Optimización de Conversiones, Tecnología Publicitaria, Analítica Avanzada e IA, Ingeniería Cloud y Estrategia Tecnológica y de Datos.»
- Descripción: «With our full-service offering around Google Marketing Platform and Google Cloud we support clients in tool implementations and help them to uncover the full potential of their tech stack and data.»
- Intro: «Unlock Your Data Potential with Comprehensive Cloud Solutions… With our full-service offering around Google Cloud and Azure Cloud…»
- Texto de la home sobre servicios: «Our diverse teams of expert consultants collaborate seamlessly to craft tailor-made solutions that not only add tangible value to your business but also nurture a culture centered around data-driven decision-making.»

**Servicios (nombre, frase de tarjeta en la home y bloques de la página)** — [B] (`home.services_solutions.*`, `ser_sol.services.*`)
1. **Tech & Data Strategy / Estrategia Tecnológica y de Datos**: «Bring people closer to data and technology, creating a harmonious blend of human ingenuity and digital capabilities…». Bloques: Informed Decision-Making · Enhanced Customer Engagement · Enhanced Data Security and Compliance (texto copiado de Cloud: «Migrating to a cloud architecture…») · Risk Mitigation and Compliance · Innovation and Competitive Advantage.
2. **Cloud Architectures / Arquitecturas Cloud**: «Embark on a seamless transition to the cloud with our expert cloud infrastructure and migration services…». Bloques: Scalability and Flexibility · Cost Efficiency and Resource Optimization · Enhanced Data Security and Compliance · Improved Collaboration and Business Continuity · Global Reach and Accessibility.
3. **Datalakehouse / Data lakehouse**: «Empower every member of your organization with our innovative datalakehouse solution, revolutionizing data access and democratizing insights…». Bloques: Efficient Data Utilization · Scalability and Flexibility · Cost-Efficient Storage · Real-Time Analytics (menciona Apache Kafka y Flink) · Enhanced Data Governance and Security.
4. **Datawarehouse**: «Elevate your data management with our comprehensive data warehouse solution, designed to meticulously organize and streamline your company`s valuable data assets…». Bloques: Streamlined Decision-Making · Improved Data Quality and Consistency · Scalability and Performance (MPP) · Regulatory Compliance and Data Governance.
5. **Advanced Analytics & ML/AI / Analíticas Avanzadas e IA/ML**: «Unlock the power of data with our cutting-edge suite of tools: dashboards for real-time insights, AI/ML algorithms for predictive analytics, and advanced analytics for deeper understanding…». Bloques: Predictive Insights for Strategic Planning · Enhanced Customer Experience and Personalization · Optimized Operational Efficiency and Cost Reduction · Data-Driven Innovation and Competitive Advantage.
6. **Generative AI / IA Generativa**: «Embrace the future with generative AI as an essential step forward… Unlock endless possibilities and drive unprecedented growth with generative AI as your guiding force.» Bloques: Unprecedented Creativity and Innovation · Accelerated Design and Development Cycles · Personalized Customer Experiences · Enhanced Problem-Solving Capabilities · Empowered Creativity Across Teams.

**Solución: BI as a Service (BIaaS)** — [B] (`ser_sol.solutions.biaas`)
- «Unlocking Business Intelligence Potential with Seamless as-a-Service Solutions» / «Desbloqueo del potencial de la inteligencia empresarial con soluciones como servicio perfectas».
- 6 bloques: Scalable Expertise («access to a diverse pool of BI professionals, from data analysts to BI consultants, exactly when you need them») · Cost Efficiency («avoiding the fixed costs of an in-house BI team») · Advanced Analytical Tools · Customized Solutions · Rapid Deployment and Flexibility · Data Security and Compliance.

**Licencias y reventa** — [B] (`products_tools.description`)
- «As a certified Google partner and reseller, we provide licenses for analytics, marketing and cloud technology on the Google Marketing Platform and the Google Cloud.»

### Inferencias
- BIaaS es, en la práctica, un modelo de capacidad o *staff augmentation* de perfiles BI. Es la única oferta con modelo comercial explícito.
- En la oferta pública no hay «consultoría» como pilar (estrategia de negocio, operating model, gobierno del dato o IA) ni ningún servicio sectorial. La IA se presenta como un servicio genérico, mientras que los casos más recientes (Vodafone LevelUp y Device Advisor, Unicaja AI Ops) muestran capacidades mucho más concretas: RAG, Gemini con grounding, observabilidad de IA y FinOps.
- «Digital Analytics», «Conversion Optimization» y «Ad Tech» se anuncian en los textos, pero no tienen página propia (salvo la ruta huérfana `/digital-analytics`).

### Lagunas
- No hay precios, formatos de engagement, duración ni metodología publicados.

---

## Tecnologías y partners

### Takeaway
Se listan 12 herramientas con página propia y 3 partners con página (Google Cloud, Azure, Datadog). Los textos son descripciones genéricas del fabricante, no la experiencia de Contextual con ellas. El deck interno incluye además Python, Teradata, Oracle DB, Gemini, Microsoft Fabric, GPT‑4, SQL Server y Whisper.

### Hallazgos citados
- **Herramientas (Products & Tools):** BigQuery, Snowflake, Azure Data Factory, Apache Airflow, Informatica PowerCenter, Matillion ETL, Power BI, IBM Cognos Analytics, Azure Synapse Analytics, Looker Studio, MicroStrategy y Datadog — [B] (`products_tools.tools.*`)
- Intro de herramientas: «Empowering Your Data Journey: Introducing Our Comprehensive Technology Stack… From powerful data warehouses like Bigquery and Snowflake to intuitive visualization platforms like Power BI and Looker Studio…» — [B]
- Ejemplos del tono: «With over 90 built-in connectors…» (Data Factory), «up to 88% cost savings through Azure Hybrid Benefit» (Data Factory), «over 800 data sources» (Looker Studio) y «With Airflow™, scalability isn´t a concern - it´s a guarantee» — [B]
- **Página de partners (home, bloque `google_azure`):** tres tarjetas, Google Cloud, Azure Cloud y Datadog, con descripción genérica de cada plataforma — [B]
- **/why-contextual/google:** «As an accredited partner and reseller of Google Marketing Platform and Google Cloud…». Bloques sobre Compute, Storage, Networking, Databases, Analytics («machine learning with AI Platform») e IoT («Cloud IoT Core for device connectivity, Cloud IoT Edge…») — [B]
- **/why-contextual/azure:** «As an accredited partner and reseller of Azure Cloud…». Bloques sobre Compute, Storage, Networking, Database e IoT — [B]
- **/why-contextual/datadog:** «As an accredited partner of Datadog…». Los 6 bloques tratan exclusivamente de Datadog Cloud SIEM (MITRE ATT&CK, Signals Explorer, «over 650 vendor-backed integrations», retención de 15 meses) — [B]
- **Deck interno (`slides.tools`):** Python, Teradata, Oracledb, Gemini, Microsoft Fabric, GPT 4, SQL Server y Whisper. Solo existe en EN — [B]
- **Tecnologías citadas en los casos:** Google Cloud, BigQuery, Airflow, Gemini, RAG, Azure AI Foundry, Kubernetes y Teradata (migración a BigQuery en evaluación) — [B] (`customers.stories.*`)

### Inferencias
- Google discontinuó Cloud IoT Core en agosto de 2023 y «AI Platform» se integró en Vertex AI, así que la página de Google contiene afirmaciones de producto desfasadas. Esto viene de conocimiento general, no de una fuente consultada en esta investigación.
- El enfoque Datadog = SIEM no encaja con el uso real que aparece en los casos (observabilidad y AI Ops en Unicaja).
- Para el reposicionamiento, el bloque de herramientas podría quedarse en un único muro de logos o un «stack», en lugar de 12 páginas de texto de fabricante.

### Lagunas
- No hay prueba pública de certificaciones individuales ni del nivel de partner (Google Cloud Partner Advantage, Microsoft Solutions Partner, Datadog Partner Network).

---

## Segmentos y sectores

### Takeaway
La web segmenta por **tamaño** (grandes empresas, medianas, VC y startups), no por **sector**. Los sectores aparecen solo de forma dispersa: en la lista «Media & Entertainment, Automotive, Finance & Insurance, Telecommunications» y en las etiquetas de los casos. Telco es, con diferencia, el sector con más evidencia; Banca tiene un caso (Unicaja); Seguros ninguno explícito.

### Hallazgos citados
- **For Big Companies:** «Contextual for Big Companies». Texto: «…in the fast-paced world of big business, having the right information at the right time makes all the difference…». Categorías: Maximize Business Agility · Empower Your Team with Data · Elevate Customer Engagement · Boost Operational Efficiency. Spinner: «Empower Your Company with Data-Driven Solutions from Contextual». Why: «Join a thriving community of global leaders. Align your company with industry giants…» — [B] (`discover.big_companies`)
- **For Mid-Sized Companies:** «Contextual for Mid-Sized Companies». «…helping mid-sized companies like yours harness the power of data…». Categorías: Propel Growth with Data Insights · Optimize Operations for Success · Deepen Customer Connections · Stay Ahead with Predictive Analytics. Spinner: «Drive Success with Contextual Insights!» — [B]
- **For Venture Capital & Startups:** «Build your startup on Contextual». «…dedicated to helping venture capital firms and their portfolio companies thrive through the strategic use of data…». Categorías: Amplify Investment Intelligence · Drive Startup Success with Data · Accelerate Growth Through Data-Driven Strategies · Partner for Prosperity. Bloque de confianza: «Trusted by companies from over 10 nationalities — Join the biggest & fast growing companies over the globe» (25 ~ clientes, 15 ~ años, 50 ~ personas) — [B]
- Las tres páginas de segmento repiten el mismo subtítulo: «Contextual is a leader in analytics, cloud, and marketing technology solutions, serving as a partner for Google Platform and Google Cloud across EMEA.» — [B]
- **Sectores declarados:** «Media & Entertainment, Automotive, Finance & Insurance, Telecommunications, and beyond» — [B] (`home.why.features.industry`)
- **Sectores en las etiquetas de los casos:** Telecomunications/Telecommunications (Virgin Telco, MásMóvil, Adamo, Vodafone ×2, Network CEX Yoigo/MásMóvil), Financial services (Unicaja), Sport (LaLiga), Consumer (Segurma, Securitas Direct, Legalitas), Cloud (Gigas), Data (CQI Sense), Pharmaceutic, Fashion, Transport, Cybersecurity y «Generative AI» (Legal) — [B]

### Inferencias
- La segmentación por tamaño produce textos intercambiables y no aporta nada. Para el rediseño, el eje sectorial Telco/Banca/Seguros tiene evidencia real en Telco (7 casos), parcial en Banca (Unicaja) y nula en Seguros. Seguros solo aparece en la bio del fundador y en «Finance & Insurance». Legalitas y Securitas están etiquetados como «Consumer».

### Lagunas
- No se ha encontrado ningún caso público de aseguradoras.

---

## Tipos de contenido

### Takeaway
El activo más valioso de la web actual son las **17 historias de cliente**, con estructura reto/solución/resultados y, en varios casos, cifras de impacto. El resto es contenido institucional genérico. No hay blog, insights, recursos descargables, eventos ni noticias.

### Hallazgos citados
- **Casos («Featured Stories», «Discover how innovative companies across every industry partner Contextual for success»):** plantilla con «The Company / The Challenge / The Solution / The Results / Technologies involved in the solution» — [B]. Detalle:
  - **Virgin Telco (Euskaltel):** consolidación de KPIs de un grupo multimarca (Euskaltel, Telecable, R, RACC). Beneficios: «+€1MM a year» de ahorro en arquitectura, «+€0.8MM a year» en mantenimiento y «~€1.5MM a year» por «reducing ore than 180 hours of staff per day».
  - **MásMóvil:** DWH unificado para «4 systems and more than 14 brands». Beneficios: «+€0.6MM a year» en procesamiento, «+€0.4MM a year» en almacenamiento y «15%» de mejora en calidad de datos.
  - **Adamo:** «Contextual was hired in 2017… state-of-the-art and scalable DWH». Beneficios: +€0.7MM, +€0.3MM y ~€0.3MM al año («more than 45 hours of staff per day»).
  - **Network CEX en Yoigo/MásMóvil:** monitorización multimarca de la calidad de red. Resultados: «-15%» de llamadas, «-10%» de churn y «+€2MM» en reemplazo de SIM y terminales.
  - **Vodafone, LevelUp:** «Artificial intelligence to practise conversations, develop skills and improve the customer experience.» Plataforma de entrenamiento con clientes virtuales, feedback y RAG.
  - **Vodafone, Device Advisor:** «Device recommendations and Gemini-generated sales guidance, grounded in verified data…», con validación de respuestas y protección de datos comerciales.
  - **Unicaja:** «Building an operational foundation for AI at scale…». Evaluación de GCP y Azure (Azure AI Foundry, Kubernetes), marco de AI operations y observabilidad, y especialista Teradata. Se dice con honestidad: «the migration has not been completed».
  - **LaLiga:** detección de amaño de partidos, con «32.475 matches monitored… in 2020», «15.000.000 events» y «190.000.000 bets».
  - **Segurma, Securitas Direct y Legalitas (Consumer):** Legalitas muestra beneficios de +€0.3MM, +€0.3MM y «~96% call triage rate».
  - **Gigas (Cloud):** Data Lake/DWH financiero, con los beneficios **vacíos**.
  - **CQI Sense (Data):** BigQuery, Airflow y Google Cloud.
  - **Casos anonimizados:** «PHARMA SECTOR» (clave interna `servier`), «FASHION SECTOR» (`salsa`), «TRANSPORT SECTOR» (empresa de transporte urbano portuguesa, `scott`), «CYBERSECURITY SECTOR» (proveedor SSPM) y «LEGAL SECTOR / Generative AI» (transcripción y categorización de llamadas con LLM; **solo en EN**).
- **See All Customers / Clientes de Contextual:** «Discover which customers trust us» — [B]
- **Logos:** el carrusel de la home muestra Adamo, Ecoembes, LaLiga, HP, MásMóvil, Orange, Securitas y Segurma. El grid de clientes añade Euskaltel, Jazztel, Gigas, CQI, Detexian, Proan, Quantrue, Keepcoding, Unicaja, Vodafone, Legalitas, Yoigo-MásMóvil y otros logos genéricos (hydrogen, refinery, iot, aero…) — [B] (rutas `companiesLogos/*`)
- **Testimonios:** no hay testimonios de clientes con nombre. El deck interno tiene un bloque «Testimonials — Some facts our customers report» con frases-problema anónimas como «We have serious difficulties to develop the BI strategy due to the continous speed of the business.» — [B]
- **Equipo:** solo «Management», con los 2 cofundadores, foto, bio en primera persona y LinkedIn — [B]
- **Oficinas:** pestañas con 6 ciudades y fotos, bajo «A glimpse of our offices» — [B]
- **Careers (/career, /jobs, /jobs/:id):** «Become part of the Contextual family… We love data, innovation, fast and scalable solutions, and confetti.» Proceso en 5 pasos: Your application → First interview (virtual) → Coding challenge (only for dev positions) → Second interview → Your start at Contextual. Las ofertas se cargan desde un `jobs.json` en un bucket de Google Cloud Storage (`landing-contextual-employee-offers`) — [B]
- **Formulario de contacto:** First name, Last name, Email, Phone Number, Company y Message («Send message»). La etiqueta LinkedIn existe en i18n. No hay campos de interés, sector ni consentimiento RGPD visibles en el código — [B] (`contact.*`)
- **Página de ventas (/contact):** «Meet our sales department — Step into the world of our thriving business and get to know the heartbeat of our success…» — [B]
- **Contenido ESG (solo en el deck interno):** «Reduced energy consumption», «Shared resources», «Efficient Cooling» y «Consolidated Infrastructure» — [B]

### Inferencias
- Las cifras en euros de los casos telco (Virgin, MásMóvil, Adamo, Network CEX) y las de LaLiga son prueba cuantificada difícil de encontrar en competidores. Conviene conservarlas, verificarlas y actualizarlas.
- Los casos de Vodafone y Unicaja están escritos en otro registro, sobrio y preciso, y encajan con el nuevo posicionamiento «inteligencia + IA».

### Lagunas
- No se ha podido confirmar qué ofertas de empleo están activas (el JSON se sirve dinámicamente).
- No se sabe si los casos anonimizados tienen autorización para usar el logo; las claves internas sugieren nombres reales.

---

## Llamadas a la acción

### Takeaway
Todas las CTAs llevan al mismo destino: el formulario de /contact. No hay CTAs intermedias (descarga, diagnóstico, newsletter, webinar) ni una CTA sectorial.

### Hallazgos citados
- Hero: «Request a meeting» / «Solicitar una reunión» (→ /contact) y «Use Cases» / «Casos de Uso» (→ /why-contextual/stories) — [B]
- Navbar: «Contact» y «Contact our sales team» — [B]
- Bloque de servicios: «Contact Us» / «Contáctenos» y «More» / «Más» — [B]
- Partnering: «Let's work together» → «Contact Us» — [B]
- Casos: «Continue reading», «Read the story» (EN) / «Explora el caso de estudio» (ES) — [B]
- Careers: «Job oppenings» y «All jobs» — [B]
- Contacto: «Let's stay in contact», «Follow us» (LinkedIn) y «Send message». Mensajes de envío: «Your message has been sent successfully.» / «There was an error sending your message. Please try again later.» — [B]

### Inferencias
- Para un público de Telco, Banca y Seguros con ciclos de venta largos, falta una CTA de valor (por ejemplo, un assessment de datos o IA, o un caso descargable).

### Lagunas
- No se ha determinado a qué backend envía el formulario.

---

## Problemas detectados

### Takeaway
Hay problemas graves de SEO (SPA sin SSR ni metadatos por página, sitemap con una sola URL), de **seguridad** (credencial de servicio de GCP embebida en el JS público), de coherencia (fechas, cifras, partners, idiomas) y abundante texto de relleno o copiado.

### Hallazgos citados
**Seguridad y legal**
- **Clave privada de una cuenta de servicio de Google Cloud embebida en el bundle público.** Se trata de `manage-land-ctx-employee-offer@contextual-cloudverse.iam.gserviceaccount.com`, con la clave privada completa en claro. Se usa en el navegador para subir `jobs.json` al bucket `landing-contextual-employee-offers` (`storage.googleapis.com/upload/...`) — [B]. **No se reproduce la clave en estas notas.**
- Datadog RUM con `sessionReplaySampleRate: 100` y GA4 cargados en el `<head>` sin que se haya encontrado en el bundle ningún banner o gestor de consentimiento de cookies («cookie», «consent», «OneTrust» o «Cookiebot» no aparecen). Tampoco hay enlaces a aviso legal ni a política de privacidad; solo «Security Policy» — [H], [B]
- Las rutas internas del deck comercial (`/slides*`) están protegidas por login, pero todo su contenido va en el bundle público — [B]

**SEO y técnica**
- SPA sin SSR ni prerender. Todas las URLs devuelven el mismo HTML vacío con `<title>Contextual</title>` y `meta description` «Datawarehouse, Business Analytics & Cloud Technology» — [H]
- `lang="en"` fijo y el idioma sin reflejo en la URL (sin `/es/`): no hay hreflang ni URLs indexables por idioma — [H], [B]
- El sitemap solo contiene la home sin www, con lastmod 2024-11-26. El robots.txt bloquea rutas inexistentes — [sitemap](https://www.contextual.team/sitemap.xml), [robots](https://www.contextual.team/robots.txt)
- El bundle principal pesa unos 4 MB e incluye Firebase, PrimeVue y el deck interno — [B]
- Hay `console.log` en producción (p. ej. `console.log("TAB",…)`) — [B]
- Iconos de la sección de career cargados desde `tailwindui.com/img/ecommerce/icons/…` (shipping, warranty, exchange): imágenes de plantilla de ecommerce — [B]

**Coherencia y datos desfasados**
- Año de fundación: 2016 en EN (y en las stats) y 2017 en ES — [B]. El registro confirma 2016 — [infonif](https://infonif.economia3.com/ficha-empresa/contextual-intelligence-partners-sl)
- Los dos cofundadores aparecen como «Co-Founder / CEO» — [B]
- Dirección: la web muestra C. Las Norias 92, 28221 «Madrid» (en realidad Majadahonda), pero el domicilio social pasó a C/ Espoz y Mina 2, Madrid, en mayo de 2026 — [B], [infonif](https://infonif.economia3.com/ficha-empresa/contextual-intelligence-partners-sl)
- Cifras que no cuadran: «Projects completed 120» frente a «+120»; «Different nationalities 10» del equipo frente a «10 ~ Client nationalities» y «over 10 nationalities» de clientes; «25 ~ Clients» frente a 17 casos y unos 30 logos — [B]
- «We excel by focusing solely on Google technology» frente a las páginas de Azure, Datadog, Snowflake, Informatica, IBM y MicroStrategy — [B]
- Datadog aparece en la navbar EN, pero no en la ES ni en el footer. BIaaS no está en el footer — [B]
- El selector ofrece Português y Deutsch sin traducciones (cae a inglés) — [B]
- El caso «LEGAL SECTOR / Generative AI» no existe en ES. La región comercial «Northern Europe» tampoco — [B]
- Descripciones desfasadas de productos de Google: «Cloud IoT Core», «Cloud IoT Edge» y «AI Platform» — [B]

**Texto de relleno, copiado o erróneo**
- Subtítulos de menú de relleno repetidos y sin relación con el ítem: «Future proof data collection» (Azure, Advanced Analytics, Generative AI, BIaaS), «Enhanced UX and onsite efficiency» (Google, Datawarehouse), «Technology for data-driven marketing» (Datalakehouse) y «Dashboards, AI/ML and advanced analytics» (Cloud Architectures) — [B]
- La descripción de Legalitas es una copia literal de la de Securitas Direct («After many years of experience in the market, Securitas Direct Spain…»), en EN y ES — [B]
- Gigas tiene los 3 beneficios con título, valor y descripción vacíos — [B]
- En Tech & Data Strategy, el bloque «Enhanced Data Security and Compliance» es copia del de Cloud («Migrating to a cloud architecture…») — [B]
- Varios textos de producto son clones con el nombre cambiado: Matillion, Synapse, PowerCenter y MicroStrategy comparten frases («…streamlines the entire data integration lifecycle… collaboration between business and IT teams»). MicroStrategy se presenta como herramienta de «data integration» — [B]
- Erratas EN: «Telecomunications», «reducing ore than 180 hours», «LaLigas objective», «Job oppenings», «Generative IA» (footer EN), «Advance Analytics», «BI As A Service (BIASS)», «largevolumes», «continous», «company`s» y «today`s» (acento grave), «Snowflake´s» y «isn´t» (acento agudo), «Contextual, we tailor solutions…» y «Lissabon» en la dirección de Lisboa. Rutas internas «Mycrostrategy», «advanceAnalitycs» y «biass» — [B]
- ES con traducción automática y mezcla de tú/usted: «Contáctenos», «Cómo podemos ayudarle», «Descubra», frente a «Desbloquea» y «Construye tu Startup». También «pila tecnológica», «Desbloqueo del potencial… con soluciones como servicio perfectas», «Aplicacion» sin tilde y el sector «Consumer» sin traducir en Securitas — [B]
- Teléfonos de marcador de posición en Milán («02 1234567»), Lisboa («21 9876543») y Tallinn («55 1234 5678»). Mexico y Zurich sin dirección — [B]
- No se encontró «lorem ipsum» literal en el bundle — [B]

### Inferencias
- La credencial expuesta es el problema más urgente y no depende del rediseño: conviene revocar y rotar la clave y mover la subida de ofertas a un backend.
- Gran parte del texto institucional parece generado y poco revisado. El rediseño debería reescribirlo desde cero, no traducirlo ni pulirlo.

### Lagunas
- No se ha medido el rendimiento (Core Web Vitals) ni la indexación real en Google (consulta `site:`).

---

## Qué conservar / qué descartar

### Takeaway
Se conservan la prueba real (casos con cifras, logos, casos de IA recientes, trayectoria desde 2016 y foco del fundador en Telco, Seguros y Banca) y la infraestructura de idiomas EN/ES. Se descartan el discurso «Google/marketing reseller», la segmentación por tamaño, las 12 páginas de herramientas y todo el texto genérico.

### Conservar (con base en los hallazgos)
- **Casos telco con impacto económico:** Virgin Telco/Euskaltel (+€1MM, +€0.8MM, ~€1.5MM al año), MásMóvil (+€0.6MM, +€0.4MM, 15%), Adamo (desde 2017) y Network CEX en Yoigo (-15% llamadas, -10% churn, +€2MM). Son la columna vertebral para Telco — [B]
- **Casos de IA 2025–2026:** Vodafone LevelUp (IA conversacional con RAG para formación), Vodafone Device Advisor (Gemini con grounding) y Unicaja (AI Ops, observabilidad y FinOps en GCP y Azure). Su tono sobrio, sin exageraciones, sirve de modelo para la nueva voz y aporta prueba para «inteligencia + IA» y Banca — [B]
- **LaLiga** (integridad y fraude: 32.475 partidos, 190 M de apuestas) como caso de analítica avanzada en tiempo real — [B]
- **Legalitas** (~96% de triaje de llamadas) y el caso legal de transcripción con LLM, como prueba de IA aplicada a contact center. Encaja con Seguros y Banca en atención al cliente — [B]
- **Muro de logos:** Vodafone, Orange, MásMóvil, Yoigo, Euskaltel, Jazztel, Unicaja, LaLiga, Securitas, Legalitas, HP y Ecoembes, tras verificar los permisos — [B]
- **Datos corporativos:** fundada en 2016, más de 50 personas (por verificar; terceros indican 21–50), alrededor de 120 proyectos, cofundadores con más de 20 años en BI y la frase sobre «telecom, insurance, and banking sectors across Europe» — [B], [prospeo](https://prospeo.io/c/contextual-intelligence-partners-revenue)
- **BIaaS** como modelo de engagement (capacidad flexible), reformulado — [B]
- **Partnerships Google Cloud, Microsoft Azure y Datadog** como sello de confianza, no como eje del mensaje (pendiente de verificar el nivel) — [B]
- **Proceso de selección en 5 pasos** de Careers: es claro y reutilizable — [B]
- **Política de seguridad (ENS)** como señal de confianza para Banca y Seguros (pendiente de confirmar la certificación) — [PDF](https://www.contextual.team/PO-ENS-00.pdf)

### Descartar
- Discurso de **marketing digital y Ad Tech**: «impartial technology partner for both advertisers and media agencies», «Conversion Optimization», «Google Marketing Platform», «data-driven marketing within the evolving privacy-centric landscape» — [B]
- «**Focusing solely on Google technology**» y «reseller» como mensaje principal — [B]
- **Segmentación por tamaño** (Big, Mid, VC & Startups) y sus textos intercambiables, sustituida por un eje sectorial Telco, Banca y Seguros — [B]
- **12 páginas de herramientas** con texto de fabricante y páginas de partner con contenido de producto (Datadog SIEM, IoT Core) — [B]
- Subtítulos de menú de relleno, textos generados («Unlock / Elevate / Empower…»), bloques duplicados, el caso Gigas vacío y la descripción de Legalitas copiada — [B]
- Oficinas con teléfonos ficticios u oficinas sin dirección. Hay que publicar solo las sedes reales y la dirección actualizada (Espoz y Mina 2, Madrid, si se confirma) — [B], [infonif](https://infonif.economia3.com/ficha-empresa/contextual-intelligence-partners-sl)
- Idiomas PT y DE sin contenido — [B]
- Arquitectura SPA sin SSR, metadatos únicos y sitemap de una URL — [H], [sitemap](https://www.contextual.team/sitemap.xml)
- Credenciales y lógica de administración en el front-end, y el deck interno incluido en el bundle público — [B]

### Inferencias
- El nuevo relato «consultoría + datos + inteligencia + IA» ya tiene prueba en la web actual, pero escondida bajo «Why Contextual > Customers > Featured Stories». El rediseño debería subir los casos a primer nivel y organizarlos por sector.
- El pilar «consultoría» casi no tiene contenido propio hoy («Tech & Data Strategy» es genérico). Es el hueco de contenido más grande que hay que crear.

### Lagunas
- Hay que validar con Contextual qué cifras y logos de clientes siguen autorizados y vigentes (los casos de DWH telco parecen de 2017–2021).
