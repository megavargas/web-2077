# Landings de subservicios — Pilar 03 Inteligencia

Investigación para las landings de los cinco subservicios del pilar `intelligence`: BI y capa semántica, analítica avanzada, modelos predictivos, decision intelligence y analítica de autoservicio. Accesos web del 20-11-2026. Parto del benchmark competitivo (`docs/reports/Benchmark competitivo web Contextual.md`) y de sus notas por competidor; las citas de páginas de terceros están resumidas con mis palabras salvo frases muy cortas entre comillas.

Límites: algunas páginas no se pudieron leer (Devoteam devuelve 403, BI4ALL tiene un certificado roto, Management Solutions ha cambiado sus URL). Varias webs muestran contadores a «0» por depender de JavaScript (Datatonic, Infinite Lambda), así que sus cifras no se pueden verificar. Las cifras de vendors citadas aquí son autodeclaradas y **no** deben trasladarse a la web de Contextual.

---

## 1. BI y capa semántica (`semantic-layer`)

### Cómo lo presentan los competidores
- **Infinite Lambda** es el que mejor lo cuenta. Su plano «agentic blueprint» tiene tres capas (plataforma de datos moderna → contexto de negocio → agentes) y pone la capa semántica en el centro: ontología, métricas canónicas y capa semántica como el «contexto» que necesitan los agentes. Dentro de su producto Flowline ofrece dos servicios separados: *Business ontology & semantic layer* (extrae la lógica de negocio del código existente, propone definiciones canónicas y las deja «listas para agentes») y *BI modernisation* (inventaría y racionaliza los informes y los migra a definiciones compartidas con dbt y Omni). Promesa fuerte; las cifras de la home salen a cero y los casos no están ligados a este servicio.
- **Stratio** (fabricante, no consultora) usa la mejor analogía del mercado: el lago guarda, el warehouse organiza y ninguno de los dos *explica*; la capa semántica añade significado, gobierno y auditoría. Estructura: problema del «coste de las decisiones no gobernadas» → casos con cifra → integración en cuatro pasos (conectar, modelar, gobernar, activar) → soberanía y regulación (GDPR, NIS2, AI Act, DORA) → demo.
- **Keepler** vende *BI Modernization* atado a Amazon QuickSight: tabla «BI legacy vs. Keepler + QuickSight», ocho tarjetas de casos de uso, su marco Navigator (evaluación de valor → diseño → ejecución con un «You will get» por fase) y CTA de demo de 20 minutos. No habla de capa semántica; solo de «fuente única».
- **Artefact** (*Data, New BI & Self BI*) mezcla BI con medición de marketing; no menciona capa semántica ni gobierno del autoservicio.
- **66degrees** (*Analytics & BI Modernization*) se queda en «sustituir informes antiguos por BI moderna» con cifras sin fuente y sectores con texto de relleno.
- **Google Cloud Consulting** (*BI Modernization*) es el formato más «entregable»: lista documento de diseño técnico, plan de implantación, informes de avance y plataforma, con duración de 8 a 32 semanas. Útil como referencia de formato, no de mensaje.

### Qué hacen las webs más innovadoras (2025–2026)
- **La capa semántica se vende ahora como contexto para la IA**, no como higiene de BI. Google explica que con LookML el modelo de lenguaje elige objetos de negocio con nombre y descripción en vez de adivinar columnas, y declara (prueba interna, sin metodología publicada) que reduce los errores de las consultas en lenguaje natural hasta en dos tercios. dbt expone su Semantic Layer a agentes por MCP (servidor MCP de dbt). Microsoft presentó Fabric IQ, que genera ontologías a partir de modelos semánticos de Power BI para dar contexto a Copilot y agentes (en preview a octubre de 2026).
- **Estándares abiertos de métricas**: Open Semantic Interchange (dbt, Snowflake, Databricks y otros) busca que una definición de métrica sea portable entre herramientas; dbt liberó MetricFlow.
- **Formatos**: inventario y racionalización de informes como primer paso (Infinite Lambda), arquitectura por capas en un diagrama, «we don't replace your stack» (Stratio), y la ingeniería inversa de la lógica existente como acelerador.
- **Huecos**: casi nadie explica el trabajo de *acordar* las definiciones con negocio (dueños, glosario, proceso de cambio); nadie liga la capa semántica a la trazabilidad regulatoria (BCBS 239 en banca, IFRS 17/Solvencia II en seguros); y los partners de una sola herramienta no ayudan cuando conviven Power BI y Looker.

### Conclusión para Contextual
- Abrir con el dolor del comité («cada área tiene su cifra») y cerrar con la IA: la capa semántica es lo que permite que un asistente responda con la cifra oficial. Encaja con «La IA solo funciona con contexto».
- Contar el trabajo de negocio (diccionario de métricas con dueño, fórmula y linaje) además del técnico (modelo semántico versionado, pruebas, seguridad por fila).
- Ser agnóstico de herramienta: Power BI, LookML o dbt según lo que tenga el cliente; «no hace falta cambiar de herramienta» ya está en la FAQ del pilar.
- Ligar a sector: linaje de métricas de riesgo (BCBS 239), indicadores técnicos de seguros, KPIs comerciales y de red en telco.
- **No copiar**: la promesa de cifras («dos tercios menos errores», «40 % más eficiencia»), el marco atado a un único producto (QuickSight), ni el lenguaje de «ontología» como titular (es jerga para un directivo).

Fuentes: [Infinite Lambda](https://infinitelambda.com/) · [perfil Infinite Lambda (YesPress)](https://yespress.io/infinite-lambda.md) · [Stratio](https://stratio.ai/) · [Keepler BI Modernization](https://keepler.io/bi-modernization/) · [Artefact Data, New BI & Self BI](https://www.artefact.com/offers/data-foundations-bi/data-new-bi-self-bi/) · [66degrees Data & Analytics](https://www.66degrees.com/services/data-analytics) · [Google Cloud Consulting BI Modernization](https://cloud.google.com/consulting/portfolio/bi-modernization) · [Google Cloud blog: Looker semantic layer y GenAI](https://cloud.google.com/blog/products/business-intelligence/how-lookers-semantic-layer-enhances-gen-ai-trustworthiness) · [dbt MCP server](https://docs.getdbt.com/blog/introducing-dbt-mcp-server) · [dbt: semantic layer, MCP y agentes](https://www.getdbt.com/blog/ai-ready-data-in-practice-what-dbt-semantic-layer-and-dbt-s-mcp-server-and-agent-skills-do-for) · [MetricFlow open source (The New Stack)](https://thenewstack.io/dbt-labs-open-sources-metricflow-an-independent-schema-for-data-interoperability/) · [Microsoft Learn: Fabric IQ](https://learn.microsoft.com/en-us/fabric/iq/overview) · [Gartner First Take: Fabric IQ](https://www.gartner.com/en/insights/gartner-first-takes/microsoft-fabric-iq) · [Forrester: FabCon 2026](https://www.forrester.com/blogs/microsoft-fabcon-2026-enterprise-ai-needs-a-governed-context-layer-not-just-data/) · [Atlan: semantic layer for analytics](https://atlan.com/know/ai-agent/semantic-layer/semantic-layer-for-analytics/)

---

## 2. Analítica avanzada (`advanced-analytics`)

### Cómo lo presentan los competidores
- **Tredence** (*Customer Analytics*) es el ejemplo más completo: promesa de experiencia de cliente, cuatro áreas de servicio, cuatro «soluciones» con marca (plataforma de experimentación *Test and Learn*, segmentación y next-best-experience, análisis de causas por recorrido de cliente, segmentación por perfiles), aceleradores, dos casos con cifras (uno de telco) y reconocimiento de Forrester. Mucho producto con nombre propio; poco «cómo».
- **Artefact** concentra la analítica en marketing: medición de ROI, atribución multitoque, marketing mix modelling, segmentación (RFM, CLV, look-alikes). No tiene página de analítica fuera de marketing.
- **Quantiphi** y **Mutt Data** la presentan por modelos de marketing (propensión, CLV, churn, atribución) sin separar la analítica explicativa de los modelos predictivos.
- **Plain Concepts** (en proceso de compra por Avanade, según el banner de su web) y **Closer** listan «Advanced Analytics» como etiqueta sin página propia o con descripción genérica.
- **Iconsulting** tiene prácticas de *Business analytics*, *Machine learning* y *Location analytics*, pero sin descripción en la página.

### Qué hacen las webs más innovadoras (2025–2026)
- **Medición causal en vez de correlación**: Google liberó Meridian (marketing mix bayesiano, calibrado con experimentos) y GeoX para experimentos geográficos; Forrester recomienda una medición por capas en la que los experimentos de incrementalidad alimentan el MMM.
- **Explicación automática de variaciones**: BigQuery ML incorpora *contribution analysis* para explicar por qué cambia una métrica; Tredence usa LLM para análisis de causas sobre comentarios de clientes.
- **Experimentación como plataforma** (Tredence) y análisis reproducibles en notebooks versionados.
- **Huecos**: casi todos lo limitan a marketing y retail; nadie lo presenta para la operación de una telco (red, atención, facturación), para riesgo y cliente en banca, ni para siniestralidad en seguros. Pocos explican la incertidumbre ni la diferencia entre «coincidió» y «causó».

### Conclusión para Contextual
- Posicionarlo como la respuesta a «¿por qué?»: análisis de causas, segmentación, atribución y experimentos. Separarlo con claridad de los modelos predictivos (que se integran en un proceso) y de decision intelligence (que recomienda la acción).
- Mensaje diferencial: medir causas, no correlaciones, y entregar los resultados con su nivel de confianza; convertir en proceso repetible lo que funciona.
- Casos por sector fuera de marketing: bajas y reclamaciones ligadas a red y facturación (telco), segmentación por momento financiero (banca), desviaciones de siniestralidad (seguros). GDPR como contexto (minimización, seudonimización).
- **No copiar**: el catálogo de soluciones con marca propia (no existen en Contextual), las cifras de casos, ni reducir la analítica a marketing.

Fuentes: [Tredence Customer Analytics](https://www.tredence.com/services/customer-analytics) · [Tredence, Forrester Wave Customer Analytics Q2 2025](https://www.tribuneindia.com/news/business/tredence-named-a-leader-in-customer-analytics-services-q2-2025-analyst-report) · [Artefact Data, New BI & Self BI](https://www.artefact.com/offers/data-foundations-bi/data-new-bi-self-bi/) · [Artefact Marketing ROI](https://www.artefact.com/offers/marketing-data-driven/measurements-mroi-insights/) · [Quantiphi marketing analytics (folleto)](https://quantiphi.com/wp-content/uploads/2024/01/4c734eb3-redefine-customer-and-marketing-analytics_-brochure.pdf) · [Plain Concepts](https://plainconcepts.com/) · [Iconsulting](https://www.iconsulting.com/en/) · [Google: Meridian](https://blog.google/products/ads-commerce/meridian-marketing-mix-model-open-to-everyone/) · [Search Engine Journal: Meridian GeoX](https://www.searchenginejournal.com/google-launches-meridian-geox-globally/) · [Forrester sobre Meridian](https://www.forrester.com/blogs/is-googles-meridian-the-right-open-source-mmm-solution-for-you) · [BigQuery: nuevas capacidades de IA (contribution analysis)](https://cloud.google.com/blog/products/data-analytics/bigquery-adds-new-ai-capabilities)

---

## 3. Modelos predictivos (`predictive-models`)

### Cómo lo presentan los competidores
- **Mutt Data** (*Predictive Models*) tiene la página mejor estructurada: hero con promesa de anticipación, proceso en cinco pasos (datos → variables → entrenar y validar con datos reservados → desplegar por API o lotes → medir, vigilar deriva, A/B y reentrenar), cinco tipos de modelo (LTV, demanda, personalización, churn, venta cruzada), dos casos y CTA «construyamos un modelo». Sin FAQ, sin regulación; todo orientado a marketing y e-commerce.
- **Xebia** prueba con casos de pricing con ML (fonQ) y MLOps para tarificación en AXA Direct Assurance; el modelo se presenta junto con su operación (reentrenamiento automático).
- **Datatonic** pone el peso en la operación de ML en producción (caso Vodafone de plataforma de IA), no en el modelo en sí.
- **Quantiphi** y **Tredence** los empaquetan como «soluciones» y aceleradores (propensión, CLV, churn, «140+ soluciones de IA/ML» en BFSI).
- **Management Solutions** y **Nfq** (referencias en banca y seguros) hablan de modelización, gobierno de modelos y riesgo de modelo desde el lado regulatorio, sin página de «modelos predictivos» como servicio de construcción.

### Qué hacen las webs más innovadoras (2025–2026)
- **Modelos fundacionales de series temporales**: BigQuery ofrece TimesFM con `AI.FORECAST` sin entrenamiento; la documentación de Google recomienda ARIMA_PLUS cuando hace falta explicabilidad. Es un argumento para empezar rápido y comparar con una línea base.
- **Explicabilidad y documentación como parte del entregable**: en banca, la EBA pide un enfoque basado en principios para ML en modelos IRB, con explicabilidad y validación más exigente; el AI Act clasifica como alto riesgo la evaluación de solvencia de personas físicas y la tarificación de seguros de vida y salud (con la detección de fraude financiero fuera de ese supuesto). La fecha de aplicación del Anexo III se ha movido con el «Digital Omnibus»: no publicar fecha en la web.
- **El ciclo completo en la landing**: despliegue, monitorización de deriva y reentrenamiento (Mutt Data, Xebia).
- **Huecos**: nadie en el benchmark de boutiques cuenta modelos predictivos *para sectores regulados* con ficha del modelo, explicabilidad y preparación para validación interna; la mayoría vende modelos de marketing.

### Conclusión para Contextual
- Promesa: modelos que llegan al proceso donde se decide y que resisten la validación. «Del notebook al proceso» es el problema real.
- Entregables concretos: modelo desplegado, ficha del modelo, informe de explicabilidad, panel de deriva y procedimiento de reentrenamiento y retirada.
- Enfoque: definir la decisión primero, comparar siempre con una línea base sencilla, documentar para validación, medir el efecto con prueba controlada.
- Regulación como contexto: AI Act (solvencia, vida y salud), validación interna en banca. Sin prometer cumplimiento.
- Encadenar con `mlops-llmops` (operación) y `decision-intelligence` (uso de la predicción).
- **No copiar**: catálogos de «N soluciones preconstruidas», cifras de ROAS o eficiencia, ni la idea de que un modelo más complejo es siempre mejor.

Fuentes: [Mutt Data Predictive Models](https://muttdata.ai/ai-consulting/predictive-models) · [Xebia Data & Analytics](https://xebia.com/cloud-data-modernization/data-analytics-services/) · [Datatonic](https://datatonic.com/) · [Tredence (nota del benchmark)](https://www.tredence.com/) · [BigQuery: TimesFM](https://docs.cloud.google.com/bigquery/docs/timesfm-model?hl=en) · [BigQuery: forecasting overview](https://docs.cloud.google.com/bigquery/docs/forecasting-overview) · [EBA: follow-up report on ML for IRB models](https://www.eba.europa.eu/eba-publishes-follow-report-use-machine-learning-internal-ratings-based-models) · [AI Act, Anexo III (Service Desk de la Comisión)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3) · [William Fry: high-risk AI in financial services](https://www.williamfry.com/knowledge/high-risk-ai-in-financial-services/) · [AI Act e insurance pricing (análisis)](https://burning-cost.github.io/2026/03/28/eu-ai-act-insurance-pricing-what-you-need-to-know)

---

## 4. Decision intelligence (`decision-intelligence`)

### Cómo lo presentan los competidores
- **Datatonic** (*Operational Decisioning*): «actúa ahora, no después del informe». Problema (decisiones que llegan tarde) → qué construimos (señales en tiempo real, modelos adaptativos, ejecución automática, monitorización) → enfoque (base semántica gobernada, kits de reglas probados, control del cliente) → bucle *sentir, decidir, actuar, vigilar* → casos (telco, procesador de pagos). Menciona revisión humana durante el evento. Es el más parecido a lo que quiere contar Contextual.
- **Keyrus** (*Decision Intelligence*): sistemas de decisión que viven dentro de los procesos (logística, planificación, pricing, operaciones); las personas diseñan y supervisan. Sin pasos, entregables ni prueba.
- **Stratio** se define entero como «Decision Intelligence Software for Regulated Industries», con el argumento de decisiones que se pueden defender ante el supervisor.
- **Tredence** lo trata como *next best experience* dentro de analítica de cliente.

### Qué hacen las webs más innovadoras (2025–2026)
- **Gartner publicó en enero de 2026 su primer Magic Quadrant de plataformas de decision intelligence** (Aera, Quantexa, SAS, IBM, FICO, Pega, o9…) y define la disciplina como *ingeniería de cómo se toman las decisiones*, con modelado explícito, automatización y gobierno. Lo presenta como extensión natural de BI y ciencia de datos.
- **Aera Technology** explica el bucle completo: datos en vivo → recomendación → escritura en los sistemas «dentro de la autonomía que fijes» → medición frente al impacto esperado en un registro de decisiones (*Decision Ledger*); el usuario acepta, modifica o rechaza y la autonomía crece cuando la decisión se gana la confianza; políticas antes de ejecutar.
- **Quantexa** lo ancla en contexto de entidades para crimen financiero y cumplimiento, y lanza agentes por dominio.
- **Mensajes repetidos**: decisiones en el momento, autonomía graduada, registro auditable, medición del resultado. **Huecos**: las consultoras no enseñan el modelado de la decisión (opciones, restricciones, responsables) ni cómo se mide con grupo de control; los vendors venden plataforma y demo.

### Conclusión para Contextual
- Explicar el término sin jerga (la FAQ del pilar ya lo hace): llevar el análisis al punto de decisión, recomendar la acción y medir el resultado.
- Diferenciarse con el método: modelar la decisión → recomendar en la herramienta de trabajo → **matriz de autonomía** (automatizar / recomendar / aprobar) → **registro de decisiones** y medición frente a grupo de control. En sectores regulados, supervisión humana en lo que afecta a derechos de personas.
- Casos: next-best-offer y retención (telco), priorización de alertas de fraude y AML (banca), triaje de siniestros (seguros).
- Agnóstico de plataforma: muchas decisiones se resuelven con la plataforma de datos y BI existente más reglas y modelos.
- **No copiar**: «autónomo» como titular, «agentes que ejecutan» sin control, ni la promesa de resultados desde el primer día.

Fuentes: [Datatonic Operational Decisioning](https://datatonic.com/agentic-solutions/operational-decisioning/) · [Keyrus Decision Intelligence](https://keyrus.com/worldwide/services/decision-intelligence) · [Stratio](https://stratio.ai/) · [Aera Decision Cloud](https://aeratechnology.com/platform) · [Aera, Leader en el MQ 2026](https://www.aeratechnology.com/blogs/aera-technology-named-leader-2026-gartner-magic-quadrant-decision-intelligence-platforms/) · [Gartner: Magic Quadrant for Decision Intelligence Platforms (resumen)](https://www.gartner.com/en/documents/7363830) · [Gartner: market overview DI](https://www.gartner.com/en/documents/8240993) · [SAS en el MQ DIP](https://www.sas.com/en_us/news/analyst-viewpoints/gartner-magic-quadrant-decision-intelligence-platforms.html) · [Quantexa, Leader en el MQ 2026](https://www.aap.com.au/aapreleases/globenewswire1001161979/) · [TechTarget: qué es decision intelligence](https://www.techtarget.com/data-technologies/definition/What-is-decision-intelligence)

---

## 5. Analítica de autoservicio (`self-service-analytics`)

### Cómo lo presentan los competidores
- **Xebia** lo llama *Data Democratization*: datos accesibles y fiables para toda la organización, con un whitepaper descargable y un autodiagnóstico de madurez de gestión de datos en el menú. Sin entregables concretos.
- **Keepler** reduce el autoservicio a una ventaja de la herramienta (interfaz sencilla frente a BI legacy dependiente de TI).
- **Artefact** promete generar *insights* sin depender de TI, sin hablar de gobierno ni formación (la AI Academy solo aparece en el menú).
- **Bluetab** lista «preparación de entornos de autoservicio de datos» como línea técnica; **Eraneos** cita «analítica self-service» dentro de Data, Analytics & Insights.
- **Keyrus** tiene casos de cuadros de KPI en autoservicio para mandos intermedios.
- Las ofertas de partners de Microsoft en el marketplace (centros de excelencia de Power BI de 4, 6 o 10 semanas) son las más concretas: gobierno, formación y comunidad.

### Qué hacen las webs más innovadoras (2025–2026)
- **Microsoft Fabric adoption roadmap** es la referencia de método: 12 áreas (cultura de datos, patrocinio, alineamiento, propiedad del contenido — autoservicio de negocio, autoservicio gestionado, BI corporativo —, ámbito de entrega, CoE, gobierno, mentoría, comunidad de práctica, soporte, supervisión del sistema, gestión del cambio) con niveles de madurez. Insiste en que adopción no es número de usuarios sino uso eficaz.
- **Autoservicio conversacional**: Copilot en Power BI sobre el modelo semántico, Looker con Gemini y la Conversational Analytics API (GA con facturación por tokens desde el 1-10-2026), Databricks AI/BI Genie, Snowflake Cortex Analyst. Gartner advierte que la experiencia de los primeros usuarios de Genie es muy desigual; el criterio de compra que se repite es gobierno, SQL inspeccionable y capa semántica.
- **Guardarraíles en vez de porteros** (RSM «Power BI Governance 2.0»): propiedad, linaje y contenido certificado para evitar la deriva de KPIs.
- **Huecos**: las consultoras no cuentan la parte humana (perfiles, itinerarios, comunidad, soporte) ni cómo se mide la adopción; nadie conecta el autoservicio conversacional con la necesidad de datos certificados y permisos.

### Conclusión para Contextual
- Frontera con `semantic-layer`: aquí se habla de **adopción, formación y gobierno del autoservicio**; la capa semántica es la base que se da por hecha (y se enlaza).
- Mensaje: autoservicio con reglas — contenido personal, de equipo y certificado, cada uno con dueño — y formación por perfiles con casos reales del área; comunidad y soporte continuados.
- Novedad 2026: preguntas en lenguaje natural solo sobre datos certificados y con permisos, activadas por áreas y con revisión de calidad de respuestas.
- Entregables: diagnóstico de uso, modelo de gobierno del autoservicio, catálogo certificado, itinerarios, panel de adopción.
- Casos: equipos comerciales (telco), red de oficinas (banca), suscripción y siniestros (seguros).
- **No copiar**: «democratizar el dato» como titular vacío, duraciones cerradas de CoE en semanas, ni presentar la herramienta como la solución.

Fuentes: [Xebia Data & Analytics](https://xebia.com/cloud-data-modernization/data-analytics-services/) · [Keepler BI Modernization](https://keepler.io/bi-modernization/) · [Artefact Data, New BI & Self BI](https://www.artefact.com/offers/data-foundations-bi/data-new-bi-self-bi/) · [Keyrus: self-service visualizations](https://keyrus.com/uk/en/playbook/improve-access-to-daily-business-operations-data-with-self-service-visualizations) · [Microsoft Learn: Fabric adoption roadmap](https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap) · [Microsoft Learn: CoE](https://learn.microsoft.com/power-bi/guidance/fabric-adoption-roadmap-center-of-excellence) · [RSM: Power BI Governance 2.0](https://www.rsmus.com/insights/services/digital-transformation/power-bi-governance) · [MAQ Software: Power BI CoE (marketplace)](https://marketplace.microsoft.com/en-ca/product/maqsoftware.power_bi_coe) · [Databricks: AI/BI febrero 2026](https://www.databricks.com/blog/whats-new-aibi-february-2026-roundup) · [Holistics: AI BI tools 2026](https://www.holistics.io/bi-tools/ai-analytics/) · [Gartner: AI/BI Genie](https://www.gartner.com/en/documents/7383730) · [Orange Business: IA y autoservicio](https://digital.orange-business.com/en-en/insights/digital-newsroom/how-ai-transforming-self-service-analytics-and-bi-and-what-you-need-get)

---

## Patrones comunes del pilar

1. **El mercado ha movido la inteligencia hacia «contexto para la IA».** Capa semántica, ontología y métricas canónicas se venden como lo que hace fiables a los asistentes y agentes (Infinite Lambda, Stratio, Google, dbt, Microsoft Fabric IQ). Es exactamente la tesis de Contextual: el pilar 03 es el «conocimiento del negocio» que da contexto al pilar 04. Las landings lo dicen sin convertir «agéntico» en titular.
2. **Las consultoras comparables cuentan poco «cómo» y pocos entregables.** Keepler (Navigator) y Google Cloud Consulting son la excepción. Cada landing de Contextual lleva 4 pasos propios del subservicio y 5 entregables tangibles.
3. **Casi todo el contenido de analítica y modelos está orientado a marketing y retail.** El hueco es la analítica para Telco, Banca y Seguros con su regulación (BCBS 239, AI Act, Solvencia II/IFRS 17, GDPR) como contexto, no como certificación.
4. **Decisión medida y gobernada.** Los mejores (Aera, Datatonic, Gartner) hablan de bucle completo: recomendar, actuar con autonomía graduada, registrar y medir. Ninguna consultora del benchmark explica el grupo de control; Contextual sí.
5. **Agnosticismo de herramienta** como argumento: los competidores atados a un producto (Keepler/QuickSight) o a un único cloud dejan fuera a quien combina Power BI y Looker. Las landings citan Power BI, Looker, dbt, BigQuery, Fabric, Vertex AI, Azure Machine Learning y Databricks según el caso, sin inventar partnerships.
6. **Prueba**: los competidores usan cifras de casos y reconocimientos de analistas. Contextual no puede (casos no reutilizables por decisión del cliente), así que la prueba es la concreción: entregables, método, FAQ de riesgo y regulación y casos de uso presentados como capacidades.
7. **Lo que no copiar en todo el pilar**: cifras autodeclaradas de vendors, soluciones con marca que Contextual no tiene, «democratizar», «revolucionar», «autónomo» como promesa, y fechas regulatorias que siguen moviéndose (Anexo III del AI Act).
