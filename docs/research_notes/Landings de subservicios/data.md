# Pilar 02 Datos: investigación para las landings de subservicios

> Acceso: 20-11-2026. Fuentes: webs de competidores del benchmark (`docs/reports/Benchmark competitivo web Contextual.md`) y webs de fabricantes de referencia (Google Cloud, Microsoft, Databricks, Snowflake, Monte Carlo, Sifflet). Lo que sigue son resúmenes con palabras propias; las cifras que aparecen son **afirmaciones de los propios proveedores** y se citan solo para entender cómo venden, nunca para reutilizarlas.
>
> Limitaciones: varias páginas no se pudieron leer completas (Google Cloud «Data migration» llegó truncada; Datatonic «Data Warehouse Modernisation» dio 404; Arkon Data «Soluciones» llegó vacía). Lo dicho sobre ellas sale de resultados de búsqueda y se marca así.

Subservicios del pilar: `cloud-data-platforms` · `lakehouse-warehouse` · `legacy-migration` · `data-engineering-quality` · `dataops-observability`.

---

## 1. Plataformas de datos cloud (`cloud-data-platforms`)

Frontera: arquitectura, landing zone, seguridad y costes (FinOps) de la plataforma. El modelado y las capas de datos van en `lakehouse-warehouse`.

### Cómo lo presentan los competidores

- **Xebia** tiene dos piezas. La página de servicio «Data Platforms» sigue una plantilla completa: promesa (plataforma segura, escalable, eficiente en coste y lista para IA) → seis tarjetas de servicio → enfoque en 4 pasos (descubrir y planificar, implantar, modernizar y optimizar, preparar para lo siguiente) → beneficios → dos casos → paquetes propios → contenidos → servicios relacionados (FinOps entre ellos) → **FAQ de 7 preguntas** (seguridad, multicloud, plazos, coste, control del coste, resultados) → contacto. La otra pieza es un **producto empaquetado**, «Base Cloud Data Platform»: infraestructura como código modular que el cliente puede desplegar, disponible en GCP, Azure y AWS, con Snowflake y Databricks. Promete aprovisionamiento en «días o semanas, no meses» y cierra con FAQ sobre TCO y traspaso. No da cifras ni casos en esa página.
- **Keepler** («Intelligent Data Platforms», ya dentro de Accenture): hero → cuatro fundamentos → cinco capacidades (integración, lake/warehouse, procesamiento, ML, visualización) → resultados de negocio genéricos → logos de partners → **dos puntos de entrada** (migrar lo que ya hay o construir una plataforma nativa) → nueve casos con cifras → testimonios → «Let's Talk». El enfoque empieza por el **gobierno cloud** y prioriza capacidades según los productos de datos que se necesitan. La prueba es fuerte, con casos etiquetados por sector y cifras, pero la promesa es intercambiable («turn your data into insights»).
- **Plain Concepts** («Data & Analytics») ordena la oferta por **matriz de madurez** (Foundational → Developing → Scaling → Advanced), con un selector de etapa que muestra para quién es, qué hacen y el resultado. «Modern Data Platform Foundations» es la primera etapa. Abre con cifras de resultado agregadas y logos (Telefónica, Iberdrola…). No menciona Fabric ni migración en esa página.
- **Artefact** («Data Platform», dentro de «IT & Data Platforms»): evalúa el panorama actual, recomienda tecnología y construye una hoja de ruta de plataforma adaptada al legacy del cliente. Es un mensaje de consultoría más que de ingeniería.
- **Bluetab (IBM)**: según IBM, diseña, construye y evoluciona plataformas de datos con IA y cloud, y lleva el dato on-premise a plataformas híbridas multicloud. No hay una landing de subservicio pública; la oferta se infiere de perfiles y marketplaces.
- **66degrees y Devoteam** no tienen una landing dedicada a la plataforma de datos. 66degrees presenta el dato como «AI-Native Foundations», el requisito previo de los agentes («los agentes solo llegan hasta donde llegan tus datos»), y lo prueba con casos. Devoteam lo reparte entre la modernización del warehouse con BigQuery y Looker y un **servicio gestionado** de plataforma con casos (Rémy Cointreau, Agora).

### Qué hacen las webs más innovadoras

- **Arquitectura de referencia por capas y por regulación.** El Cloud Adoption Framework de Microsoft separa una *data management landing zone* (gobierno común) de *data landing zones* por dominio, con un ejemplo de banco. Es el formato «arquitectura de referencia» que ningún competidor del benchmark publica en su landing.
- **FinOps específico de plataformas de datos.** La FinOps Foundation tiene un grupo de trabajo para plataformas de datos en la nube porque facturan por consulta, por dato escaneado o en créditos/DBU, no por máquina. Snowflake ha añadido vistas de coste de IA a nivel de organización y vende el control de coste como argumento. El mensaje que se repite en 2026 es «FinOps para IA».
- **Salida y concentración (DORA).** Bufetes y supervisores insisten en que un banco necesita un plan de salida por servicio, probado, y una evaluación de riesgo de concentración. La guía de cloud del BCE pone el *lock-in* y la portabilidad en el centro, y KPMG propone clasificar datos y aplicaciones por criticidad, sustituibilidad y viabilidad de salida. Ninguna consultora del benchmark lo traduce a decisiones de arquitectura de plataforma.
- **Producto empaquetado + IaC** (Xebia Base): acorta el «cuánto tardo» y facilita el traspaso al cliente.

### Conclusión para Contextual

- Contar la plataforma como **decisión de negocio y de riesgo**, no como catálogo de servicios cloud: qué nube y por qué (multicloud real: Google Cloud, Azure y AWS), seguridad e identidades desde el diseño, **coste previsible por dominio o caso de uso** y, en banca y seguros, **plan de salida y riesgo de proveedor (DORA)** como requisito de diseño.
- Entregables concretos que casi nadie lista: arquitectura de referencia con decisiones documentadas, landing zone como código, modelo de seguridad y accesos, modelo FinOps (etiquetado, presupuestos, alertas, coste por dominio), plan de salida y portabilidad, y traspaso o runbook de operación.
- FAQ sobre la elección de nube, los costes y DORA, las preguntas que hace un directivo de banca.
- **No copiar:** cifras de resultado sin caso detrás, el «días, no meses» sin producto que lo respalde, ni la lista de cinco capacidades genéricas (integración, ML, visualización…) que vale para cualquier consultora y se solapa con los demás subservicios.

Fuentes:
- Xebia, Data Platforms: https://xebia.com/cloud-data-modernization/data-platforms/
- Xebia, Base Cloud Data Platform: https://xebia.com/solutions/cloud-data-platform/
- Keepler, Intelligent Data Platforms: https://keepler.io/intelligent-data-platforms/
- Plain Concepts, Data & Analytics: https://www.plainconcepts.com/data-analytics/
- Artefact, Data Platform: https://www.artefact.com/offers/it-data-platforms/data-platform/
- IBM, Bluetab: https://www.ibm.com/consulting/bluetab
- 66degrees (home, «AI-Native Foundations»): https://www.66degrees.com/
- Devoteam G Cloud, managed data services: https://gcloud.devoteam.com/blog/relieving-data-engineers-of-their-maintenance-tasks-with-managed-data-services
- Microsoft, escenario de data mesh en una entidad financiera: https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/cloud-scale-analytics/architectures/data-mesh-scenario
- FinOps Foundation, FinOps para plataformas de datos cloud: https://www.finops.org/wg/finops-for-data-cloud-platforms/
- Snowflake, AI y FinOps: https://www.snowflake.com/en/blog/ai-finops-cost-management-governance-snowflake/
- DLA Piper, salida de la nube y Data Act: https://www.dlapiper.com/en/insights/publications/law-in-tech/2026/cloud-exit-under-the-eu-data-act
- CMS, guía del BCE sobre externalización cloud: https://cms.law/en/aut/legal-updates/ecb-issues-new-guidance-on-outsourcing-cloud-services
- KPMG, soberanía digital: https://kpmg.com/nl/en/insights/technology-and-ai/digital-sovereignty.html

---

## 2. Lakehouse y data warehouse (`lakehouse-warehouse`)

Frontera: modelado, capas y productos de datos. La infraestructura, la seguridad y los costes van en `cloud-data-platforms`.

### Cómo lo presentan los competidores

- **Xebia, «Open Data Lakehouse»** es la landing más completa del grupo. Promete una sola plataforma para reporting, analítica, ML e IA y combina la flexibilidad del lake con el SQL del warehouse. Enfoque en 5 fases: descubrir y alinear → prueba de concepto → **MVP con los primeros casos de uso en producción** → escalar y habilitar (gobierno, seguridad, automatización, formación) → servicio gestionado opcional. La prueba no son casos sino una **serie de webinars por capa** (almacenamiento, catálogo, cómputo, ingeniería asistida por IA), fichas de tres arquitectos y un **FAQ de 8–9 preguntas** («¿en qué se diferencia de un lake o un warehouse?», «¿cuándo veo valor?», «¿por qué importa Apache Iceberg?», «¿seguridad y cumplimiento?», «¿modelos de coste?»).
- **Keepler** lo integra en «Intelligent Data Platforms»: arquitecturas centralizadas (lake o lakehouse) o descentralizadas (data mesh), según los productos de datos.
- **Datatonic** (según buscador; la página de servicio dio 404) abre la modernización del warehouse con un **taller de un día** (casos de uso y situación actual) y usa Dataform como capa de modelado en BigQuery.
- **Stratio** (producto español, banca y seguros) vende una **capa de negocio semántica** sobre el dato, con productos de datos y marketplace interno. Su argumento es que el modelo de negocio, y no la tabla, es lo que hace útil el dato para la IA. Sus cifras de precisión son benchmarks propios.
- **Arkon Data** (MX) lista «Lakehouse», «Calidad upstream» y «MDM» como soluciones separadas (según el benchmark; la página no se pudo leer).

### Qué hacen las webs más innovadoras

- **Formatos abiertos como argumento anti-lock-in.** En 2026 Google (lakehouse para Apache Iceberg, antes BigLake), Snowflake (Iceberg y Polaris), Databricks (tablas Iceberg gestionadas) y Microsoft (OneLake con Snowflake) venden «una copia del dato, varios motores». Parte de la federación de catálogos sigue en preview, y el gobierno se duplica entre catálogos.
- **La arquitectura medallion** (bronce/plata/oro) es el lenguaje común de Databricks, Microsoft y Google. Microsoft recomienda modelar la capa oro en estrella para reporting, y esa capa se conecta con la capa semántica.
- **Productos de datos con dueño** como unidad de entrega (Databricks, Stratio, Plain Concepts con su «Data Product Framework»).
- Mensaje repetido: «lakehouse listo para IA o para agentes». Hueco: casi nadie explica **cuándo NO hace falta un lakehouse** ni parte de las decisiones de negocio que el modelo debe soportar.

### Conclusión para Contextual

- Partir de **las decisiones y los informes que el negocio necesita** (incluido el reporting regulatorio) y modelar dominios desde ahí: cliente, contrato, riesgo, póliza, siniestro. Es la forma de traer «contexto» al modelo de datos.
- Ser honestos con la elección **lakehouse o warehouse**: depende de los tipos de dato, los casos de uso y el equipo, no de la moda. Formatos abiertos (Iceberg, Delta) cuando la portabilidad importa (DORA).
- Entregables: modelo de datos por dominio, diseño de capas (bruto, depurado, consumo), catálogo de productos de datos con responsable, estándares de modelado y nombres, primer dominio en producción y documentación con linaje.
- Uso por sector: visión de cliente en telco; modelo de datos de riesgo conciliado hasta el origen en banca (BCBS 239); modelo de pólizas y siniestros compartido por actuarial, finanzas y negocio en seguros (IFRS 17, Solvencia II).
- **No copiar:** el discurso «lake + warehouse = lo mejor de los dos mundos» sin más, ni la promesa de precisión de IA por tener capa semántica (cifras de fabricante).

Fuentes:
- Xebia, Open Data Lakehouse: https://xebia.com/cloud-data-modernization/open-data-lakehouse/
- Keepler, Intelligent Data Platforms: https://keepler.io/intelligent-data-platforms/
- Datatonic, migración de warehouse a Google Cloud (insight): https://datatonic.com/insights/data-warehouse-migration-google-cloud/
- Datatonic, caso Usay Compare con Dataform: https://datatonic.com/case-studies/usay-compare-data-management-dataform
- Stratio, whitepaper de capa semántica: https://www.stratio.com/blog/whitepaper_data_fabric_en
- Google Cloud, lakehouse para Apache Iceberg: https://cloud.google.com/biglake
- Google Cloud blog, el lakehouse en la era agéntica: https://cloud.google.com/blog/products/data-analytics/the-future-of-data-lakehouse-for-the-agentic-era
- Snowflake, guía de interoperabilidad: https://www.snowflake.com/en/developers/guides/interoperable/
- Microsoft Fabric y Snowflake, interoperabilidad: https://www.microsoft.com/en-us/microsoft-fabric/blog/?p=2676
- Databricks, arquitectura medallion: https://docs.databricks.com/aws/en/lakehouse/medallion.html
- Microsoft Learn, medallion en Fabric: https://learn.microsoft.com/en-us/training/modules/describe-medallion-architecture/3-implement-medallion-archecture-fabric

---

## 3. Migración de BI y ETL legacy (`legacy-migration`)

### Cómo lo presentan los competidores

- **Datatonic** (búsqueda + caso localsearch): empieza con un **taller de un día**, sigue con diseño, migración y mantenimiento posterior. En el caso usa el BigQuery Migration Service para traducir SQL y un **acelerador propio con Gemini** que convierte el SQL traducido en código Dataform. El mensaje: «no es solo mover datos».
- **Quantiphi** vende **aceleradores con scripts reutilizables** desde Teradata, Netezza, Oracle, Hadoop o SQL Server hacia BigQuery, con promesas de «más rápido, más barato, más preciso» en porcentaje. La prueba son casos con TB migrados y nº de mappings ETL. Es el formato «fábrica de migración».
- **Keyrus** no tiene landing de método, pero sus casos repiten un patrón útil: **primero racionalizar** informes redundantes del legacy (BusinessObjects, QlikView, Cognos), después migrar por fases y **dar de baja el legacy** como segunda fase explícita.
- **Infinite Lambda** presenta «Flowline» como acelerador para migrar pipelines existentes (webinar con Fivetran) y vende el autodiagnóstico de modernización de 5 minutos en la home (ver benchmark).
- **Bluetab (IBM)** pone la migración de datos como línea estratégica 2026 y habla de reducir mucho los tiempos de análisis (cifra no verificable). No hay landing pública de método.
- **Keepler** ofrece «migración cloud de datos» como uno de sus dos puntos de entrada, gradual y con mínima interrupción.
- Fuera del benchmark, **Senturus** (especialista en BI) tiene la landing más clara de BI: asistente de migración que **cataloga y prioriza** informes de Cognos, evaluación automatizada del contenido, despliegue por fases según valor y formación. Microsoft Marketplace está lleno de ofertas Cognos/MicroStrategy → Power BI con fases (evaluación de 4–8 semanas, piloto, escalado) y porcentajes de automatización que nadie verifica.

### Qué hacen las webs más innovadoras

- **La conversión de código ya es un producto gratuito de los fabricantes, y cada vez más «agéntico».** Databricks Lakebridge (analizador, conversor, validador) y ahora Genie Migrate, con diffs revisables y validación sintáctica y semántica. Snowflake SnowConvert AI (Teradata, Oracle, SQL Server, Redshift…; PowerCenter y SSIS como origen ETL; conversión directa a tablas Iceberg). Google BigQuery Migration Service (evaluación automatizada con TCO y traducción SQL con Gemini). Microsoft, asistente de migración de Fabric Data Warehouse desde Synapse (metadatos, corrección, copia, redirección de conexiones).
- **Consecuencia:** el valor diferencial del consultor ya no es «traducir SQL», sino **inventario y racionalización, lógica de negocio oculta, conciliación origen-destino, convivencia en paralelo y apagado del legacy** (licencias y servidores). Los foros de práctica lo dicen claro: los informes no se «convierten», se recrean, y primero se ordenan por uso.
- **Detonante de mercado:** el soporte estándar de Informatica PowerCenter 10.5 terminó el 31-03-2026 según varias fuentes (con soporte extendido de pago después). Muchos clientes con PowerCenter están decidiendo ahora entre IDMC y otro stack. *Confirmar la fecha exacta en la Product Lifecycle Guide de Informatica antes de citarla en la web.*

### Conclusión para Contextual

- Es el subservicio con **experiencia real declarada** (Cognos, MicroStrategy, PowerCenter, Teradata; benchmark §Propuesta). La landing debe sonar a quien lo ha hecho: inventario con uso real, racionalización («no todo se migra»), conversión asistida con herramientas de los fabricantes y revisión experta, **conciliación** y periodo en paralelo, y **apagado del legacy** con ahorro de licencias como hito final.
- Entregables: inventario de informes y procesos con uso y responsables, plan de migración por dominios con secuencia y coste, pipelines y modelos migrados, informes de conciliación origen-destino, plan de desmantelamiento (licencias, servidores, contratos) y formación de usuarios.
- Contexto de sector: en banca y seguros, los informes regulatorios no pueden cambiar de cifra al migrar, y por eso la conciliación es la clave.
- **No copiar:** los porcentajes de automatización o ahorro de fabricantes y marketplaces, ni la idea de «conversión automática al 100 %».

Fuentes:
- Datatonic, migración de warehouse a Google Cloud: https://datatonic.com/insights/data-warehouse-migration-google-cloud/
- Datatonic, caso localsearch (Gemini): https://datatonic.com/case-studies/localsearch-gemini-migration/
- Quantiphi, Data Cloud: https://quantiphi.com/applications/data-cloud/
- Quantiphi, caso Teradata a BigQuery: https://quantiphi.com/case-studies/teradata-to-bigquery-migration
- Keyrus, migración de BI cloud (fondo de inversión): https://keyrus.com/us/en/playbook/cloud-bi-migration-and-30-snowflake-processing-reduction-for-a-wealth
- Keyrus, plataforma de datos en organización de comercio: https://keyrus.com/uk/en/insights/innovating-a-data-platform-at-a-global-trade-organization
- Fivetran, webinar con Infinite Lambda: https://www.fivetran.com/resources/on-demand-webinars/emea-modernising-legacy-data-systems-with-infinite-lambda
- La Nota Económica, Bluetab 2026: https://lanotaeconomica.com.co/movidas-empresarial/bluetab-proyecta-un-crecimiento-del-30-en-2026-impulsado-por-la-aceleracion-de-la-ia-y-el-gobierno-de-datos-en-latinoamerica/
- Senturus, BI modernization & migration: https://senturus.com/services/bi-modernization-migration/
- Microsoft Fabric Community, Cognos a Power BI (práctica): https://community.fabric.microsoft.com/t5/Service/Cognos-to-Power-Bi-Migration/m-p/2305517
- Databricks, migración: https://www.databricks.com/migration
- Databricks, Lakebridge: https://www.databricks.com/blog/introducing-lakebridge-free-open-data-migration-databricks-sql
- Snowflake, SnowConvert AI: https://docs.snowflake.com/migrations/snowconvert-docs/general/about
- Snowflake, novedades de SnowConvert AI (feb. 2026): https://www.snowflake.com/en/blog/snowconvert-ai-new-features-feb-2026
- Google Cloud, BigQuery Migration Services: https://cloud.google.com/solutions/data-migration
- Microsoft Learn, asistente de migración de Fabric Data Warehouse: https://learn.microsoft.com/fabric/data-warehouse/migration-assistant
- CData, fin de soporte de PowerCenter: https://www.cdata.com/blog/sun-sets-on-powercenter-whats-next
- Informatica, descargas (fecha de fin de soporte 10.5.x): https://www.informatica.com/download.html

---

## 4. Ingeniería y calidad del dato (`data-engineering-quality`)

Frontera interna del pilar: aquí se **construyen** pipelines, pruebas y reglas de calidad. Despliegue continuo, monitorización en producción, incidentes y niveles de servicio van en `dataops-observability`.

### Cómo lo presentan los competidores

- **Management Solutions** («Data y Analytics») es el referente en banca: calidad **end-to-end** con seguimiento continuo (informes, KPI, cuadros), **remediación en origen** y, en gobierno, marco BCBS, políticas y roles por dominio. Lo vende desde la regulación, no desde la ingeniería.
- **Plain Concepts** pone «Data Governance & Quality» en la segunda etapa de su matriz de madurez y abre la página con métricas de calidad y disponibilidad (cifras propias sin caso).
- **Arkon Data** separa «calidad upstream» como solución propia (según el benchmark): corregir en origen y no en el informe.
- **Xebia** tiene la ingeniería del dato como «related expertise» y lleva la calidad a gobierno («Data Management & Governance»). **Keepler** incluye «calidad, seguridad y gobierno» en su lista de entregables de plataforma. En ninguno de los dos es un servicio con promesa propia.
- **66degrees** prueba la calidad con un caso de servicio gestionado: automatización de alertas de calidad.

### Qué hacen las webs más innovadoras

- **«Shift left» y contratos de datos.** El mensaje de 2025–2026 (Ataccama, Capital One, Atlan, Gartner citado por terceros) es acordar con el sistema origen un **contrato** (esquema, semántica, frescura, responsable) y probarlo en el pipeline, en lugar de limpiar al final. El stack típico combina tests de dbt (datos, unitarios, contratos de modelo), validación en la entrada (Soda, Great Expectations) y observabilidad en producción.
- **Calidad nativa de la plataforma.** Google Knowledge Catalog (antes Dataplex) ofrece escaneos de calidad y perfiles automáticos en BigQuery, reglas reutilizables como plantilla, linaje a nivel de columna y un modo de perfilado pensado para dar contexto a agentes.
- **Banca: BCBS 239 vuelve («2.0»).** El BCE ha hecho de la agregación de datos de riesgo una prioridad supervisora 2025–2027 con su guía RDARR. Los puntos débiles que se repiten son el **linaje completo**, la taxonomía común, la propiedad del dato y los controles sobre hojas de cálculo (EUC). EY propone superponer las métricas de calidad sobre el mapa de linaje.

### Conclusión para Contextual

- Presentar la calidad como **ingeniería medible**, no como declaración: reglas con umbral y responsable, pruebas automáticas en cada pipeline, contratos con los sistemas origen, linaje hasta el informe y corrección en origen.
- Empezar por los **datos críticos** (los que alimentan decisiones, modelos o reporting regulatorio), no por «todo el dato».
- Contexto de sector, sin prometer cumplimiento: datos de riesgo en banca (BCBS 239), pólizas y siniestros antes del reporting en seguros (Solvencia II, IFRS 17), datos de cliente y uso que alimentan modelos de churn en telco.
- Entregables: pipelines en producción documentados, catálogo de reglas de calidad con umbrales y responsables, contratos de datos con los sistemas origen, batería de pruebas automáticas, cuadro de calidad por dominio y linaje del origen al informe.
- **No copiar:** las métricas tipo «98 % de calidad» sin definición, ni separar la calidad en un proyecto de gobierno en papel sin ingeniería detrás.

Fuentes:
- Management Solutions, Data y Analytics: https://www.managementsolutions.com/index.php/es/servicios/transformacion-organizacion-procesos-y-sistemas/data-y-analytics
- Management Solutions, consulta del BCE sobre RDARR (2024): https://managementsolutions.com/sites/default/files/publicaciones/esp/2024-ecb-consults-on-guide-on-effective-risk-data-aggregation-and-risk-reporting.pdf
- Plain Concepts, Data & Analytics: https://www.plainconcepts.com/data-analytics/
- Arkon Data (soluciones, según benchmark): https://www.arkondata.com/solutions
- Xebia, Data Management & Governance: https://xebia.com/cloud-data-modernization/data-management-governance/
- 66degrees, caso de alertas de calidad: https://www.66degrees.com/success-stories/managed-services-data-quality-alert-automation
- Ataccama, shift left y contratos de datos: https://www.ataccama.com/blog/the-shift-left-playbook-data-contracts-data-quality-gates-and-feedback-loops
- Capital One, contratos de datos: https://www.capitalone.com/software/blog/data-contracts-become-default-data-quality/
- Atlan, calidad con dbt: https://atlan.com/dbt-data-quality/
- Google Cloud, escaneo de calidad en BigQuery: https://cloud.google.com/bigquery/docs/data-quality-scan
- Google Cloud, notas de versión de Knowledge Catalog: https://docs.cloud.google.com/dataplex/docs/release-notes
- McKinsey, BCBS 239 2.0: https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights/bcbs-239-2-0-resurgence-strengthening-risk-management-and-decision-making
- EY, valor sostenido del linaje (2026): https://www.ey.com/content/dam/ey-unified-site/ey-com/en-uk/industries/banking-capital-markets/documents/ey-uk-sustaining-the-value-of-data-lineage-03-2026.pdf
- Deloitte, BCBS 239 benchmark survey 2026: https://www.deloitte.com/nl/en/services/audit/research/bcbs-239-benchmark-survey-2026.html

---

## 5. DataOps y observabilidad (`dataops-observability`)

### Cómo lo presentan los competidores

- **Devoteam** es el más explícito: práctica de «Data Operations» (monitorización y observabilidad, FinOps, MLOps, DataOps), oferta de **observabilidad de datos extremo a extremo con Monte Carlo** y **servicios gestionados de datos** que quitan el mantenimiento al equipo del cliente (monitorización continua, mantenimiento predictivo, optimización de recursos). En marketplaces vende DataOps como aceleradores sobre Azure DevOps y AWS.
- **Xebia** pone DataOps y servicio gestionado como fase opcional final del lakehouse (monitorización, incidentes, optimización de coste). **Plain Concepts** cierra su matriz con «MLOps Managed Service» y «Continuous Data Advisory».
- **Keepler, 66degrees y los demás** no tienen landing de DataOps. Aparece como capacidad dentro de la plataforma o en casos de servicio gestionado.
- Conclusión del benchmark (ajuste 4): nadie explica bien la **operación recurrente**. Devoteam es el único que la convierte en servicio con SLA y precio por consumo.

### Qué hacen las webs más innovadoras

- **Monte Carlo** (ahora montecarlo.ai) ha girado de «observabilidad de datos» a **«confianza en agentes en producción»**: vigila a la vez a los agentes de IA y los datos de los que dependen. Usa un agente propio que agrupa alertas, propone la causa y la corrección, y cuenta un ciclo aprender → detectar → corregir → medir. Formato: maquetas del producto (alertas agrupadas «con y sin»), muro de logos, cifras e informe TEI de Forrester. Su marco original de los **cinco pilares** (frescura, volumen, esquema, distribución o calidad, linaje) y el concepto de **«data downtime»** siguen siendo el vocabulario del sector.
- **Sifflet** (francés) va en la misma dirección: tres agentes (detección, diagnóstico de causa raíz, propuesta de corrección), chat sobre incidentes y linaje desde el origen hasta el KPI, como contexto para personas y agentes.
- Las plataformas cloud integran parte de esto (escaneos de calidad, linaje y alertas en Google Knowledge Catalog; monitorización en Azure). Microsoft lista en su marco de observabilidad: servicio de plataforma, rendimiento de pipelines, calidad, linaje y descubrimiento.
- Mensajes repetidos: «detectar antes que el usuario», «menos ruido de alertas», «datos fiables para IA y agentes». Hueco: casi nadie conecta la observabilidad con **niveles de servicio acordados con el negocio** (qué informe o modelo depende de qué dato y para cuándo) ni con un proceso de incidentes y mejora continua.

### Conclusión para Contextual

- Vender DataOps como **operación fiable del dato**: despliegue continuo con entornos y pruebas, vigilancia de frescura, volumen, esquema y calidad de los datos críticos, alertas con responsable y runbook, **niveles de servicio por producto de datos** pactados con negocio, y coste visible. Es el puente natural hacia la fase «Operación» (servicio gestionado), que el benchmark pide hacer visible.
- Enlazar con IA: los modelos y agentes del pilar 04 dependen de que el dato llegue a tiempo y bien. La observabilidad del dato es la mitad de la observabilidad de la IA (enlace a `mlops-llmops`).
- Contexto de sector: cierres y reporting periódicos en seguros, resiliencia operativa y gestión de incidentes TIC en banca (DORA, como contexto), feeds de red y uso en telco.
- Herramientas: sin partner de observabilidad publicable (**Datadog no se menciona**, decisión del cliente), así que conviene hablar de capacidades y usar herramientas genéricas del stack (Airflow, Cloud Composer, dbt, Grafana, Azure DevOps).
- **No copiar:** cifras de «incidentes detectados» o de reducción de downtime, ni la promesa de agentes que arreglan solos los datos.

Fuentes:
- Devoteam, qué significa la observabilidad de datos: https://devoteam.com/?p=28707
- Devoteam G Cloud, servicios gestionados de datos: https://gcloud.devoteam.com/blog/relieving-data-engineers-of-their-maintenance-tasks-with-managed-data-services
- Devoteam, Cloud Enabler for Data Platforms (Azure Marketplace): https://azuremarketplace.microsoft.com/en/marketplace/consulting-services/devoteamsas1710521113858.cloud_enabler_data_platforms
- Xebia, Open Data Lakehouse (fase de servicio gestionado): https://xebia.com/cloud-data-modernization/open-data-lakehouse/
- Plain Concepts, Data & Analytics: https://www.plainconcepts.com/data-analytics/
- Monte Carlo, home: https://montecarlo.ai/
- Monte Carlo, los cinco pilares: https://montecarlodata.com/blog-introducing-the-5-pillars-of-data-observability
- Sifflet, agentes de IA: https://www.siffletdata.com/blog/sifflet-ai-agents
- Sifflet, observabilidad para la empresa agéntica: https://www.siffletdata.com/blog/snowflake-data-observability-why-the-agentic-enterprise-cant-run-on-monitoring-alone
- Microsoft, observabilidad de datos (Cloud Adoption Framework): https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/cloud-scale-analytics/manage-observability
- Google Cloud, escaneo de calidad en BigQuery: https://cloud.google.com/bigquery/docs/data-quality-scan

---

## Patrones comunes del pilar

1. **Estructura dominante de las mejores landings** (Xebia es el modelo más completo): promesa → qué incluye → enfoque en 4–5 pasos → beneficios → prueba → servicios relacionados → FAQ de 7–9 preguntas → contacto. Encaja con el esquema de Contextual (problema → qué hacemos → cómo → qué te llevas → resultado → sectores → tecnologías → relacionados → FAQ → CTA). Lo que nos falta frente a ellos es la prueba con caso, que hoy no se puede usar.
2. **Casi nadie lista entregables tangibles.** Los competidores describen capacidades y beneficios y dejan los entregables implícitos. Lista concreta de documentos, plataformas y cuadros = diferencial barato y creíble.
3. **El sector casi nunca aparece en la landing de subservicio.** Los casos llevan etiqueta de sector, pero la página no explica qué cambia en un banco o en una aseguradora. Contextual puede hacerlo en el bloque «Dónde lo aplicamos» con regulación como contexto (BCBS 239, DORA, Solvencia II, IFRS 17, GDPR).
4. **«Listo para IA o agentes» es el mensaje del año** en plataforma, lakehouse, calidad y observabilidad. Contextual ya lo tiene en su hilo («la IA solo funciona con contexto»). Hay que usarlo con contenido (datos fiables, modelados y vigilados), no como etiqueta.
5. **La automatización de la migración la regalan los fabricantes.** El consultor gana en inventario, racionalización, conciliación y apagado del legacy.
6. **FinOps, salida (DORA) y operación** son huecos claros: aparecen en blogs y fabricantes, casi nunca en las landings de consultoras del tamaño de Contextual.
7. **Formatos innovadores que se podrían añadir más adelante** (fuera del esquema actual): arquitectura de referencia descargable, autodiagnóstico de modernización (Infinite Lambda, Xebia) y calculadora de coste o de inventario de migración. Quedan como ideas para la fase 2 (`/autodiagnostico`).
8. **Qué no copiar en todo el pilar:** cifras de resultado sin caso, porcentajes de automatización de fabricante, «días, no meses» sin producto detrás, listas de capacidades genéricas que valen para cualquiera y logos de partners de herramientas con las que no hay acuerdo.
