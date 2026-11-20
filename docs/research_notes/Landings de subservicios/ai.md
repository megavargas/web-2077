# Pilar 04 · IA aplicada: landings de subservicios

Investigación de noviembre de 2026 para las cinco landings del pilar `ai`: `ai-agents`, `knowledge-assistants`, `process-automation`, `mlops-llmops` y `ai-evaluation-governance`. Para cada subservicio se resume cómo lo presentan entre cuatro y seis competidores del benchmark, qué hacen las webs más innovadoras del espacio (consultoras punteras y fabricantes de referencia) y qué debe contar Contextual. Los textos de terceros están resumidos con palabras propias; las cifras que se citan son de los propios fabricantes o consultoras y no están verificadas.

Una advertencia que afecta a todo el pilar: en varias páginas de Datatonic las cifras de los casos se pintan con contadores animados y, leídas como texto, aparecen como «0%» o «$0M». Es la misma lección del ajuste 7 del benchmark: las cifras y los entregables deben estar en el HTML.

---

## 1. Agentes de IA (`ai-agents`)

### Cómo lo presentan los competidores

- **Keepler** ([/aiagents](https://keepler.io/aiagents/)). Página de producto con hero genérico sobre «el poder de los agentes», beneficios abstractos (operación continua, personalización, flujos complejos), cinco aplicaciones y ocho áreas funcionales. Incluye un ejemplo de siniestros de automóvil en seguros, contado sin datos. Prueba: ninguna en la página; un whitepaper descargable. CTA «Let's Talk». Lo interesante está en su blog: un artículo de agosto de 2025 defiende que los agentes no siempre son la respuesta y que antes hacen falta datos y procesos claros ([blog](https://keepler.io/2025/08/07/maybe-ai-agents-arent-the-solution-right-now/)). Ese tono honesto es más creíble que la landing.
- **66degrees** ([Agent Development Framework](https://www.66degrees.com/offerings/agent-development-framework)). La landing más completa del grupo: promesa de pasar de experimentos a sistemas multiagente en producción, programa de 12 semanas en tres bloques de cuatro (alinear y formar, piloto con AgentOps, escalado con «AI Factory»), entregables por fase, FAQ de cuatro preguntas (plazo, stack, seguridad, formación), equipo directivo con nombre y casos. CTA «Request an assessment». Las métricas de cabecera (5x, 100 %, 55 %) no explican cómo se miden. También ofrece un «Agentic Baseline» como diagnóstico de entrada y un producto, ParadigmOS, que genera un blueprint y un business case con precio ([nota de prensa](https://techintelpro.com/news/ai/agentic-ai/66degrees-releases-paradigmos-to-accelerate-enterprise-ai-workflows)).
- **Datatonic** ([Agentic Workflows](https://datatonic.com/build-enable/agentic-workflows/)). Mensaje central: rehacer el proceso para agentes en vez de poner un agente encima del proceso heredado. Tres fases (valor objetivo con business case, construir e integrar, transferir capacidad al equipo), cuatro familias de flujo (entrada documental, apoyo a la decisión, aprobaciones y cumplimiento, inteligencia operativa) y una «Velocity Library» de componentes reutilizables. Prueba con dos casos y un testimonio. Tiene además soluciones verticales con páginas propias, como [Insurance Workflows](https://datatonic.com/agentic-solutions/insurance-workflows/) (suscripción, tarificación y siniestros dentro del perímetro del cliente, con trazas de auditoría).
- **Xebia** ([Agentic AI Services](https://xebia.com/artificial-intelligence/agentic-ai-services/)). Agentes que planifican y actúan en flujos reales, aceleradores (GenAI OS, Agentic OS), plataforma de datos para agentes (Xebia Axis) y servicio gestionado. Un caso publicado sobre gobierno de un «super agente» reconoce trabajo pendiente en guardarraíles y monitorización ([caso](https://xebia.com/customer-stories/governing-agentic-ai-at-enterprise-scale/)).
- **Artefact**. Sin landing de agentes; lo cuenta con programas de transformación agéntica (marzo de 2026) y el lema de «rediseñar el proceso y después agentificar» ([nota](https://techintelpro.com/news/ai/enterprise-ai/artefact-showcases-agentic-ai-blueprints-at-databricks-summit)), más casos con nombre como Bpifrance.
- **Stratio** ([Agentic AI](https://stratio.ai/product/agentic-ai/)). Producto, no servicio: «agentes bajo tus reglas», apoyados en su capa semántica y de gobierno. Sin casos en la página.

### Qué hacen las webs más innovadoras

- **McKinsey QuantumBlack** ([seis lecciones de un año de IA agéntica](https://www.mckinsey.com/capabilities/quantumblack/our-insights/one-year-of-agentic-ai-six-lessons-from-the-people-doing-the-work)). La tesis que hoy repite todo el mercado: lo que importa es el flujo de trabajo, no el agente; hay que invertir en evaluaciones para que los usuarios confíen; no todo necesita un agente.
- **Gartner** ([previsión de junio de 2025](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027)). Más del 40 % de los proyectos agénticos se cancelarán antes de finales de 2027 por costes, valor poco claro o controles de riesgo insuficientes, y advierte del «agent washing». Es contexto útil para el discurso, no una cifra para la web.
- **Sierra** ([home](https://sierra.ai/)). Agentes de atención con precio por resultado, un mismo agente en todos los canales, módulo de análisis de conversaciones y experimentos, y una rejilla de certificaciones como bloque de confianza.
- **Google Cloud** ([Gemini Enterprise](https://cloud.google.com/gemini-enterprise), [Agent Platform, abril de 2026](https://www.techtarget.com/it-infrastructure/news/366642175/Gemini-Enterprise-Agent-Platform-adds-connective-tissue-to-Vertex-AI)) y **Microsoft** ([Foundry Control Plane](https://azure.microsoft.com/en-us/products/ai-foundry/control-plane)). Los fabricantes ya venden identidad propia por agente, registro de agentes, pasarela, trazas y permisos. El vocabulario de «identidad del agente» y «registro de agentes» ya es estándar.

Formatos que se repiten: programa con semanas y entregables por fase (66degrees), soluciones verticales por sector (Datatonic), FAQ de riesgo, demo en vídeo (Sierra). Hueco: casi nadie explica **dónde decide la persona**, qué puede hacer el agente por sí solo y cómo se sube de autonomía por fases.

### Conclusión para Contextual

Contar el agente como **rediseño de un proceso concreto** con un indicador de negocio, con la frontera entre lo que hace el agente y lo que decide la persona muy explícita, y con despliegue por fases (en sombra, supervisado, autonomía acotada). Ejemplos de capacidad por sector: incidencias de cliente en telco, preparación de alertas de AML (prevención del blanqueo) en banca y siniestros sencillos en seguros. Enlazar con evaluación y control (`ai-evaluation-governance`) y con la priorización de casos (`use-case-portfolio`).

No copiar: el hero de «el poder de los agentes», las listas de beneficios abstractos, las métricas sin método, «agéntico» en el titular, ni un programa de 12 semanas cerrado que Contextual no tiene definido.

Fuentes: https://keepler.io/aiagents/ · https://keepler.io/2025/08/07/maybe-ai-agents-arent-the-solution-right-now/ · https://www.66degrees.com/offerings/agent-development-framework · https://techintelpro.com/news/ai/agentic-ai/66degrees-releases-paradigmos-to-accelerate-enterprise-ai-workflows · https://datatonic.com/build-enable/agentic-workflows/ · https://datatonic.com/agentic-solutions/insurance-workflows/ · https://xebia.com/artificial-intelligence/agentic-ai-services/ · https://xebia.com/customer-stories/governing-agentic-ai-at-enterprise-scale/ · https://techintelpro.com/news/ai/enterprise-ai/artefact-showcases-agentic-ai-blueprints-at-databricks-summit · https://stratio.ai/product/agentic-ai/ · https://www.mckinsey.com/capabilities/quantumblack/our-insights/one-year-of-agentic-ai-six-lessons-from-the-people-doing-the-work · https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027 · https://sierra.ai/ · https://cloud.google.com/gemini-enterprise · https://www.techtarget.com/it-infrastructure/news/366642175/Gemini-Enterprise-Agent-Platform-adds-connective-tissue-to-Vertex-AI · https://azure.microsoft.com/en-us/products/ai-foundry/control-plane

---

## 2. Asistentes sobre conocimiento interno (`knowledge-assistants`)

### Cómo lo presentan los competidores

- **Datatonic** ([Workforce Transformation](https://datatonic.com/build-enable/workforce-transformation/)). La mejor formulación del problema: la mayoría de despliegues se queda en dar acceso a una herramienta y casi nadie la usa para algo más que tareas simples. Propone anclar la IA en lo que sabe la organización, con cuatro tipos de conocimiento (operativo, de producto, de cliente y regulatorio) y un enfoque en cuatro puntos (ingesta y recuperación, acceso por rol, integración en herramientas existentes, trabajo con el equipo interno). Prueba con un caso (Alpian) y cifras que se pintan como contadores.
- **Quantiphi** ([baioniq](https://ai.quantiphi.com/baioniq)). Producto propio de búsqueda y generación desplegado en la nube privada del cliente. Casos sectoriales de seguros (asistente sobre manuales de suscripción) con cifras del propio fabricante ([PDF de seguros](https://ai.quantiphi.com/hubfs/Generative%20AI%20in%20Insurance.pdf?hsLang=en)). En telco, casos anónimos con precisión del pipeline de preguntas y respuestas y latencia (ver nota del benchmark `gc-quantiphi.md`).
- **Bluetab**. Lista RAG (generación aumentada por recuperación) dentro de «Applied AI», junto a procesamiento documental y acceso a datos en lenguaje natural; sin página propia con estructura (nota `es-bluetab.md`).
- **Keepler**. Caso de seguros «Transforming Information Access with Generative AI» y solución «Generative AI» con promesa genérica de productividad (nota `es-keepler.md`).
- **Plain Concepts** ([home](https://plainconcepts.com/es)). Lo engloba en «AI Transformation & Adoption» y en aceleradores sobre Azure OpenAI; sin landing específica. Prueba fuerte de marca (logos, casos), débil en el tema.

### Qué hacen las webs más innovadoras

- **Glean** ([home](https://www.glean.com/)). Tres mensajes que marcan el estándar: el usuario solo ve lo que ya tiene permiso para ver, cada respuesta cita su fuente y el asistente vive dentro de las herramientas de trabajo (más de 275 conectores). Añade un argumento nuevo: mejor contexto significa menos tokens y menos coste. Bloque de seguridad con certificaciones (ISO 42001, ISO 27001, SOC 2).
- **Contextual AI** ([home](https://contextual.ai/)). Fabricante de RAG empresarial que se presenta como «capa de contexto», con atribución frase a frase, recuadros que señalan el origen en el documento, permisos heredados y evaluación automática. **Ojo: comparte casi el nombre y la idea de «contexto» con Contextual Intelligence Partners**; conviene vigilar la colisión en buscadores (p. ej. «contextual ai assistant»).
- **Google Cloud Gemini Enterprise** ([FAQ](https://cloud.google.com/gemini-enterprise/faq)). Conectores con Workspace, SharePoint, ServiceNow, Jira o Confluence, respuestas ancladas y acceso según los permisos de cada persona; desde abril de 2026 admite conectores propios vía MCP (Model Context Protocol).

Mensajes que se repiten: fuentes citadas, permisos heredados, integración en la herramienta de trabajo, adopción. Hueco: casi nadie habla del **estado de la documentación** (versiones contradictorias, documentos caducados, sin dueño), que es por donde falla de verdad un asistente en banca o seguros, ni de cómo se mide la calidad con preguntas reales validadas por expertos.

### Conclusión para Contextual

Diferenciarse por el **contexto documental**: inventario de fuentes, dueños, vigencia y permisos antes de construir; conjunto de preguntas reales validado por quienes saben la respuesta; asistentes desplegados donde ya se trabaja. En sector: argumentarios y procedimientos en atención telco, normativa interna y fichas de producto en banca, condicionados y manuales de suscripción en seguros. Enlaza con calidad del dato (`data-engineering-quality`), con evaluación y control y con agentes (cuando el asistente pasa de responder a actuar).

No copiar: cifras de horas ahorradas o adopción sin método, certificaciones que Contextual no tiene, ni el discurso de «un buscador para toda la empresa» (es producto, no servicio).

Fuentes: https://datatonic.com/build-enable/workforce-transformation/ · https://ai.quantiphi.com/baioniq · https://ai.quantiphi.com/hubfs/Generative%20AI%20in%20Insurance.pdf?hsLang=en · https://plainconcepts.com/es · https://www.glean.com/ · https://contextual.ai/ · https://cloud.google.com/gemini-enterprise/faq · https://cloud.google.com/blog/products/ai-machine-learning/the-new-gemini-enterprise-one-platform-for-agent-development · notas del benchmark `gc-quantiphi.md`, `es-bluetab.md`, `es-keepler.md`

---

## 3. Automatización de procesos (`process-automation`)

### Cómo lo presentan los competidores

- **Datatonic** ([Insurance Workflows](https://datatonic.com/agentic-solutions/insurance-workflows/), [Agentic Workflows](https://datatonic.com/build-enable/agentic-workflows/)). La automatización se cuenta por flujo de negocio («de la solicitud a la liquidación») y con capacidades concretas: lectura de solicitudes, puntuación de riesgo homogénea, enrutado de siniestros con señales de fraude y resúmenes, integración auditada con los sistemas. Despliegue dentro del perímetro del cliente. Caso con nombre (Hiscox) y testimonio. Su caso de facturas combina BigQuery, Document AI y GenAI ([caso](https://datatonic.com/case-studies/slashing-invoice-processing-costs-with-bigquery-docai-and-genai/)).
- **Quantiphi** ([Dociphi](https://quantiphi.com/dociphi)). Producto de procesamiento documental para banca y seguros: entrada de solicitudes de suscripción, hipotecas, aperturas de cuenta, siniestros. Prueba con premios sectoriales (InsurTech100, ACORD) y cifras de precisión del fabricante.
- **Bluetab**. «Intelligent Document Processing» dentro de Applied AI y un acelerador propio (Fastcapture) que genera metadatos con IA generativa; casos anónimos con alguna métrica (nota `es-bluetab.md`).
- **Xebia**. Plataformas de inteligencia documental entre sus aceleradores de agentes (ver [Agentic AI Services](https://xebia.com/artificial-intelligence/agentic-ai-services/)).
- **NFQ**. En seguros, «Operaciones y procesos» (eficiencia, automatización, core, outsourcing) como práctica de negocio, no como página técnica (nota `es-nfq.md`).

### Qué hacen las webs más innovadoras

- **UiPath** ([seguros](https://uipath.com/solutions/industry/insurance-automation)). El mensaje ya no es RPA: es automatización agéntica con puntos de control humano, trazabilidad lista para auditoría y una capa documental (IXP) para flujos con agentes. Las excepciones van a una bandeja de revisión sin parar el resto del proceso.
- **LlamaIndex** ([comparativa de OCR para siniestros](https://www.llamaindex.ai/insights/best-insurance-claims-processing-ocr-software)). Argumenta que el procesamiento documental clásico por plantillas funciona en formularios estables y falla con documentos variados y de alto impacto; los modelos multimodales cambian eso.
- **Fabricantes cloud**: Google Cloud Document AI, Azure AI Document Intelligence y Amazon Textract, cada vez combinados con un modelo generativo para clasificar, resumir y validar.

Mensajes que se repiten: humano en el bucle, tasa de proceso directo sin intervención, auditoría. Hueco: pocas webs explican **cómo se decide qué pasa solo y qué va a revisión** (umbrales de confianza por campo y por tipo de documento) ni cómo se mide el proceso antes de empezar.

### Conclusión para Contextual

Presentarlo como automatización **del proceso completo**, no del documento: medir antes (volumen, tipos, tiempos, excepciones), umbrales de confianza que deciden qué pasa directo y qué revisa una persona, validación contra los sistemas (póliza, contrato, cliente) e integración en el core con una cola de excepciones. Sectores: altas, portabilidades y reclamaciones en telco; préstamos y alta de clientes en banca; apertura y liquidación de siniestros en seguros (coincide con la ficha de sector). Encadena con agentes (cuando hay pasos de decisión), con MLOps/LLMOps para operarlo y con la priorización de casos.

No copiar: el vocabulario RPA, porcentajes de proceso directo o de precisión sin base, ni presentar casos de clientes como hechos.

Fuentes: https://datatonic.com/agentic-solutions/insurance-workflows/ · https://datatonic.com/build-enable/agentic-workflows/ · https://datatonic.com/case-studies/slashing-invoice-processing-costs-with-bigquery-docai-and-genai/ · https://quantiphi.com/dociphi · https://xebia.com/artificial-intelligence/agentic-ai-services/ · https://uipath.com/solutions/industry/insurance-automation · https://www.llamaindex.ai/insights/best-insurance-claims-processing-ocr-software · notas del benchmark `es-bluetab.md`, `es-nfq.md`

---

## 4. MLOps y LLMOps (`mlops-llmops`)

### Cómo lo presentan los competidores

- **Datatonic** ([AI Operations](https://datatonic.com/build-enable/ai-operations/)). La mejor referencia del grupo. Problema: los agentes encadenan decisiones y escriben en sistemas vivos, así que un error se multiplica. Tres bloques (fiabilidad con trazas y evaluaciones automáticas antes de cada cambio de modelo; seguridad con mínimo privilegio y registro de llamadas a herramientas; coste por agente, caso de uso y unidad de negocio) y cuatro servicios (IA gestionada, transferencia al equipo interno, respuesta a incidentes, optimización de costes). Prueba con nombre en telco: BT y Vodafone (plazos de despliegue reducidos), además de un caso GenOps con Vodafone ([caso](https://datatonic.com/case-studies/pioneering-genops-vodafones-ai-platform-on-google-cloud/)).
- **Xebia** ([LLMOps](https://xebia.com/artificial-intelligence/large-language-models-operations-llmops/)). Estructura clásica y útil: seis pasos (evaluación de partida, plataforma, incorporación de casos, monitorización, gobierno y accesos, optimización continua), beneficios, partners, FAQ de siete preguntas (alcance, gobierno, coste, monitorización). Prueba solo de partnership, sin casos. Tiene además una plataforma MLOps empaquetada ([Base MLOps Platform](https://xebia.com/solutions/mlops-platform/)) y servicio gestionado ([AI Managed Services](https://xebia.com/artificial-intelligence/ai-managed-services/)).
- **Artefact** ([Data Science & MLOps](https://www.artefact.com/technologies/data-science-mlops/)). Promesa de cerrar la distancia entre prueba de concepto y producción aplicando la misma disciplina MLOps a todo proyecto, con más de 30 aceleradores propios (SKAFF).
- **Plain Concepts**. «MLOps managed service» como una de las siete piezas de su matriz de madurez del dato (nota `es-plain-concepts.md`).
- **NFQ**. «ML/LLMOps» y FinOps dentro de su práctica de tecnología (nota `es-nfq.md`).

### Qué hacen las webs más innovadoras

- **MLflow 3 / Databricks** ([lanzamiento](https://mlflow.org/blog/mlflow-3-launch), [docs GenAI](https://docs.databricks.com/mlflow3/genai)). Trazas como base de todo; jueces automáticos de calidad, seguridad y recuperación; monitorización de una muestra del tráfico real; las trazas problemáticas se convierten en casos de prueba; linaje entre modelo, prompt, trazas y métricas.
- **Langfuse** ([home](https://langfuse.com/)). Código abierto y autoalojable: trazas, evaluaciones, gestión de prompts con versiones y marcha atrás, conjuntos de datos y experimentos, coste y latencia por usuario. Demo pública y documentación legible por máquinas.
- **Microsoft Foundry** ([Control Plane](https://azure.microsoft.com/en-us/products/ai-foundry/control-plane), [anuncios de Ignite 2025](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/-/4467885)). Trazas con OpenTelemetry, evaluaciones continuas con umbrales que avisan de regresiones, identidad por agente.

Mensajes que se repiten: del piloto a producción, coste por caso de uso, evaluación continua, trazabilidad. Hueco: casi nadie conecta MLOps con lo que piden **validación interna, auditoría y supervisión** en banca y seguros (inventario de modelos, versiones aprobadas, marcha atrás documentada), ni trata juntos los modelos clásicos (scoring, churn, pricing) y los generativos.

### Conclusión para Contextual

Una sola disciplina para modelos predictivos y generativos: inventario, registro y versiones, despliegue automatizado con pruebas, monitorización de deriva y de calidad, y coste por caso de uso. Para el directivo: saber qué modelo decide qué, con qué versión y cuánto cuesta. Fase «Operación» del método como servicio gestionado (refuerza el ajuste 4 del benchmark). Sectores: churn y red en telco, inventario y evidencias para validación en banca, pricing y procesos documentales en seguros.

No copiar: cifras de «de meses a días» ajenas, la lista de partnerships como única prueba, ni nombres de plataforma propia que Contextual no tenga.

Fuentes: https://datatonic.com/build-enable/ai-operations/ · https://datatonic.com/case-studies/pioneering-genops-vodafones-ai-platform-on-google-cloud/ · https://xebia.com/artificial-intelligence/large-language-models-operations-llmops/ · https://xebia.com/solutions/mlops-platform/ · https://xebia.com/artificial-intelligence/ai-managed-services/ · https://www.artefact.com/technologies/data-science-mlops/ · https://mlflow.org/blog/mlflow-3-launch · https://docs.databricks.com/mlflow3/genai · https://langfuse.com/ · https://azure.microsoft.com/en-us/products/ai-foundry/control-plane · https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/-/4467885 · notas del benchmark `es-plain-concepts.md`, `es-nfq.md`

---

## 5. Evaluación y control de agentes (`ai-evaluation-governance`)

Nombre actual: «Evaluación, seguridad y gobierno de agentes». Se propone acortar el h1 a **«Evaluación y control de agentes» / «Agent evaluation and control»** (cinco y cuatro palabras) por dos razones: el h1 debe tener de dos a cinco palabras, y quitar «gobierno» marca la frontera con `data-ai-governance` (políticas, roles y AI Act a nivel de empresa). La seguridad se mantiene en el SEO y en el contenido.

### Cómo lo presentan los competidores

- **Datatonic** ([Quality Assurance & Testing](https://datatonic.com/agentic-solutions/quality-assurance/), [AI Operations](https://datatonic.com/build-enable/ai-operations/)). «Encontrar los fallos antes que los usuarios»: pruebas por escenarios antes de publicar, puertas de evaluación automáticas en el ciclo de despliegue, vigilancia del comportamiento tras el lanzamiento y registros listos para auditoría. Casos de videojuegos; para seguros y banca lo cuenta en AI Operations (mínimo privilegio, registro de llamadas a herramientas).
- **66degrees** ([Agent Development Framework](https://www.66degrees.com/offerings/agent-development-framework)). Gobierno «como código» y escaneo de secretos integrados en el desarrollo de agentes; AgentOps para trazabilidad.
- **Xebia** ([caso](https://xebia.com/customer-stories/governing-agentic-ai-at-enterprise-scale/)). Caso de gobierno de un agente a escala empresarial, con guardarraíles y monitorización como trabajo en curso; marcos de gobierno de IA entre sus aceleradores.
- **Artefact**. Rol de «Head of AI Risk & Data Trust», artículos de gobierno de IA en seguros y un informe sobre supervisión agéntica; sin página de servicio (nota `eu-artefact.md`).
- **Plain Concepts**. «Cybersecurity & AI Security» para proteger sistemas, agentes y datos (nota `es-plain-concepts.md`).
- **Stratio** ([Agentic AI](https://stratio.ai/product/agentic-ai/)). Decisiones de agentes explicables y trazables sobre su capa de gobierno.

### Qué hacen las webs más innovadoras

- **Credo AI** ([home](https://www.credo.ai/)). Gobierno continuo, no puntual; registro de sistemas de IA que detecta usos no declarados; riesgos específicos de agentes (mal uso de herramientas, deriva de alcance); políticas convertidas en código con evidencias; paquetes para AI Act, NIST AI RMF e ISO 42001.
- **OWASP** ([Top 10 de aplicaciones agénticas, diciembre de 2025](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)). La referencia de riesgos de seguridad de agentes, pensada para modelar amenazas antes de desplegar. Junto al Top 10 de LLM, es el lenguaje común con los equipos de seguridad.
- **Microsoft Foundry** ([Control Plane](https://azure.microsoft.com/en-us/products/ai-foundry/control-plane)), **Google Cloud** (Model Armor, registro y pasarela de agentes) y **AWS** (Bedrock Guardrails). Los fabricantes ya ofrecen guardarraíles de entrada, salida y llamadas a herramientas, identidad por agente y evaluación continua.
- **Firmas legales y Big Four** ([Mayer Brown](https://www.mayerbrown.com/en/insights/publications/2026/02/governance-of-agentic-artificial-intelligence-systems), [EY](https://www.ey.com/en_ca/insights/assurance/technology-risk/six-steps-to-enhance-agentic-ai-governance), [PwC](https://www.pwc.com/us/en/tech-effect/ai-analytics/responsible-ai-agents.html)). Coinciden en extender los marcos existentes (riesgo de modelo, riesgo operativo, tres líneas de defensa) en vez de crear uno nuevo, y en ajustar la intensidad del control al riesgo de cada agente.
- **AI Act**. En mayo de 2026 hubo acuerdo político del «Digital Omnibus» para aplazar las obligaciones de alto riesgo (sistemas del anexo III a diciembre de 2027, según los despachos que lo resumen) ([Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/), [Taylor Wessing](https://taylorwessing.com/en/insights-and-events/insights/2026/05/the-eu-digital-omnibus-on-ai-what-the-political-deal-means)). No he podido confirmar la publicación final en el Diario Oficial: **por eso los YAML no citan fechas**, solo que el calendario se ha revisado.

Mensajes que se repiten: gobierno continuo, evidencias para auditoría, límites de actuación. Hueco: la mayoría habla de plataforma o de política, y muy pocos bajan a **qué puede hacer un agente concreto, con qué permisos, hasta qué importe y quién aprueba**, ni a pruebas adversarias hechas con casos del sector.

### Conclusión para Contextual

Plantearlo como control técnico, verificable y por caso de uso: mapa de riesgos del caso, criterios de calidad y umbrales, límites de actuación y aprobaciones humanas, pruebas antes de salir (incluidas pruebas adversarias de inyección de instrucciones) y vigilancia en producción con registro completo. La regulación (AI Act, DORA, GDPR) como contexto que se entiende y para el que se generan evidencias, nunca como cumplimiento garantizado. Encadena con `data-ai-governance` (la política de empresa) y con `mlops-llmops` (la operación).

No copiar: badges de certificación, «IA responsable» como eslogan, cifras de reducción de incidencias ajenas, ni prometer cumplimiento del AI Act.

Fuentes: https://datatonic.com/agentic-solutions/quality-assurance/ · https://datatonic.com/build-enable/ai-operations/ · https://www.66degrees.com/offerings/agent-development-framework · https://xebia.com/customer-stories/governing-agentic-ai-at-enterprise-scale/ · https://stratio.ai/product/agentic-ai/ · https://www.credo.ai/ · https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/ · https://azure.microsoft.com/en-us/products/ai-foundry/control-plane · https://www.mayerbrown.com/en/insights/publications/2026/02/governance-of-agentic-artificial-intelligence-systems · https://www.ey.com/en_ca/insights/assurance/technology-risk/six-steps-to-enhance-agentic-ai-governance · https://www.pwc.com/us/en/tech-effect/ai-analytics/responsible-ai-agents.html · https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/ · https://taylorwessing.com/en/insights-and-events/insights/2026/05/the-eu-digital-omnibus-on-ai-what-the-political-deal-means · notas del benchmark `eu-artefact.md`, `es-plain-concepts.md`

---

## Patrones comunes del pilar

1. **«Del piloto a producción» es el tópico del sector.** Lo dicen Xebia, Artefact, 66degrees, Datatonic y los fabricantes. Contextual solo lo hace creíble si baja a lo concreto: indicador de negocio, frontera humano/IA, pasos de despliegue y entregables con nombre.
2. **El proceso antes que la tecnología.** McKinsey, Artefact y Datatonic coinciden en rediseñar el flujo antes de poner un agente. Encaja con la voz de Contextual (resultado de negocio primero) y con el pilar 01.
3. **La estructura ganadora de landing** es: problema → qué hacemos → cómo (fases) → entregables → prueba → FAQ de riesgo → CTA a un diagnóstico. 66degrees y Xebia son los únicos que la completan; casi todas omiten la FAQ o los entregables. Las landings de Contextual siguen ese esquema.
4. **Prueba.** Los competidores usan casos con nombre (Datatonic: BT, Vodafone, Hiscox) o cifras sin método. Contextual no puede usar ninguna de las dos por ahora; la sustituye con capacidades por sector y entregables tangibles. Cuando se desbloqueen los casos (Vodafone con RAG y grounding, Unicaja con AI Ops), estas cinco páginas son su sitio natural.
5. **Sector como diferencial.** Solo Datatonic (seguros) y Quantiphi (seguros, telco) bajan a sector en este pilar. Telco, Banca y Seguros en cada landing es un hueco real.
6. **Control y evidencias** (identidad del agente, registro, trazas, evaluación continua) se han vuelto vocabulario estándar en 2026 por parte de los fabricantes. Contextual debe hablar de ello en términos de negocio: quién aprueba, qué queda registrado, qué se puede enseñar a auditoría.
7. **Formatos innovadores pendientes**: programa por semanas con entregables (66degrees), demo de un asistente con fuentes citadas (Contextual AI, Glean), checklist de riesgos de agentes basada en OWASP. Son candidatos para la fase 2 (`/autodiagnostico`), no para estas landings.
8. **Cifras en HTML**, nunca en contadores animados (lección Datatonic).
9. **Colisión de nombre**: Contextual AI (contextual.ai) es un fabricante de RAG que usa «capa de contexto» como mensaje. Conviene tenerlo en cuenta en SEO y en la redacción del concepto «contexto».
