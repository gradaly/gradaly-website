window.GRADALY_MANUAL_I18N = window.GRADALY_MANUAL_I18N || {};
window.GRADALY_MANUAL_I18N.es = {
    badge_manual: "Manual de usuario (2 en 1)",
    back_home: "Volver al sitio web",
    download_btn: "Descargar Gradaly",
    hero_pill: "Aplicación de escritorio 2 en 1 • Manual completo de usuario v5.0.1",
    hero_title: "Manual de usuario de Gradaly",
    hero_subtitle: "Evaluar mejor, para formar mejor. Gradaly es una aplicación 2 en 1 que ofrece dos flujos de trabajo independientes: (1) Evaluación de exámenes escritos escaneados por parte del docente, y (2) Autoevaluación con Práctica QR por el estudiante desde su smartphone. Seleccione a continuación la guía correspondiente a su flujo de trabajo:",
    search_placeholder: "Buscar en todas las guías (p. ej., examen, práctica QR, rúbrica, OCR, clave API, FAQ)...",
    card_exam_badge: "Producto 1 • Evaluación por el docente",
    card_exam_chapters: "Capítulos E1–E9",
    card_exam_title: "Manual 1: Modo Examen (Por el docente)",
    card_exam_desc: "Para exámenes finales, parciales y pruebas escritas: escanee los cuadernillos de los estudiantes, asocie identidades 100 % sin conexión mediante OCR, califique manualmente o con IA / colaboración en equipo y devuelva copias anotadas.",
    card_practice_badge: "Producto 2 • Autoevaluación estudiantil",
    card_practice_chapters: "Capítulos P1–P5",
    card_practice_title: "Manual 2: Modo Práctica y Autoevaluación QR (Por el estudiante)",
    card_practice_desc: "Para guías de problemas, seminarios prácticos y hojas de trabajo autónomo: incruste códigos QR en su PDF de ejercicios para que los estudiantes resuelvan en papel, escaneen con su smartphone y reciban retroalimentación formativa inmediata por IA.",
    filter_label: "Mostrar:",
    filter_exam: "1. Guía de Examen (E1–E9)",
    filter_practice: "2. Guía de Práctica QR (P1–P5)",
    filter_all: "Mostrar todos los capítulos",
    filter_hint: "Cada guía es 100 % autónoma — ¡no necesita leer ambas!",
    switch_guide_kicker: "Explorar el segundo flujo de trabajo de Gradaly",
    btn_go_practice: "Abrir Manual 2: Modo Práctica QR",
    btn_go_exam: "Abrir Manual 1: Modo Examen",
    toc_title: "Índice de contenidos",
    sidebar_exam_mode: "Modo Examen",
    sidebar_practice_mode: "Práctica QR",
    screenshot_badge: "Interfaz EN",
    privacy_box_title: "Privacidad estudiantil 100 % local",
    privacy_box_text: "Las listas de estudiantes, zonas de identificación, emparejamientos OCR y archivos de proyecto se almacenan localmente en Documents/Gradaly en su ordenador. Los portales en la nube y enlaces de equipo utilizan cifrado Zero-Knowledge AES-256-GCM en el cliente.",
    sections: [
        // =========================================================================
        // GUIDE 1: EXAM GRADING MODE (E1 to E9) — 100% SELF-CONTAINED
        // =========================================================================
        {
            id: "exam-getting-started",
            guide: "exam",
            stepNumber: "E1",
            partHeader: "Manual 1 — Modo Examen (Docente)",
            partColor: "indigo",
            partBanner: {
                kicker: "Manual 1 • Producto 1: Evaluación de exámenes",
                title: "Guía completa para la evaluación de exámenes por el docente (100 % humano, asistido por IA y en equipo)",
                desc: "Guía autónoma para evaluar cuadernillos manuscritos escaneados — desde el diseño de la rúbrica y el emparejamiento OCR sin conexión hasta la corrección manual o con IA, fusión en equipo y restitución."
            },
            tag: "Modo Examen • Paso 1 — Creación de un proyecto de examen",
            badge: "100 % humano o asistido por IA",
            shortTitle: "Crear un proyecto de examen",
            title: "Creación de un proyecto de examen y flujos de trabajo 100 % humano frente a IA",
            subtitle: "Inicie un nuevo proyecto de Examen (o lance la Demo de Examen con 20 copias) para evaluar cuadernillos escaneados en su ordenador.",
            paragraphs: [
                "<strong>¿Qué es un Proyecto de Examen (insignia <code>Exam</code>)?</strong> Un proyecto de Examen está concebido para cualquier prueba escrita en la que el docente recoge los cuadernillos en papel, los escanea en PDF y califica a la promoción — incluidos <strong>exámenes finales, parciales y controles escritos</strong>. Ofrece <strong>6 pestañas específicas de trabajo</strong> en la barra superior: <code>1. Plantilla y preguntas</code>, <code>2. Estudiantes</code>, <code>3. Copias</code>, <code>4. Emparejamiento</code>, <code>5. Evaluación</code> y <code>6. Resumen y estadísticas</code>.",
                "<strong>Modo 100 % Humano o Modo Asistido por IA:</strong> <strong>No</strong> necesita una clave API de IA para calificar un examen en Gradaly. De forma nativa, Gradaly funciona en <strong>Modo 100 % Humano</strong> con ágiles atajos de teclado (<code>1–9</code> para marcar o desmarcar criterios, <code>J</code>/<code>K</code> para desplazarse entre estudiantes), recálculo dinámico de calificaciones en toda la promoción al ajustar la ponderación de los criterios y retroalimentación enriquecida en Markdown y KaTeX. Cuando lo desee, puede conectar una clave API de IA para activar el <strong>Asistente IA de Rúbrica</strong> y la <strong>Precorrección por IA Multimodal</strong>, conservando siempre la decisión humana final.",
                "<strong>Idioma propio de cada proyecto (independiente del idioma de la interfaz):</strong> Al crear un proyecto nuevo, elija explícitamente su <strong>Idioma del proyecto</strong> (español, inglés, francés, alemán, neerlandés, etc.) — también consultable o editable en cualquier momento desde la insignia de bandera junto al título en la cabecera o en <strong>Ajustes IA del proyecto</strong>. Este idioma rige las rúbricas generadas, las instrucciones de corrección IA, el feedback estudiantil y todas las exportaciones (PDF anotados, Excel, CSV de Moodle, cupones QR, Portal Web y Modo Práctica QR), incluso si la interfaz de Gradaly está en otro idioma.",
                "Desde la <strong>Pantalla de bienvenida</strong>, haga clic en <strong>Nuevo proyecto</strong> y seleccione <strong>Proyecto de Examen (Corrección docente)</strong>, o pulse <strong>Crear proyecto de demo → Demo Examen</strong> para explorar un examen completo de Física ya preparado con 20 copias manuscritas y un solucionario de referencia."
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "Pantalla de bienvenida: los proyectos de examen se identifican con la insignia índigo «Exam» y se guardan localmente en Documents/Gradaly"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "Ventana de creación de demo: seleccione «Exam Project (Teacher Grading)» para generar una demostración sin conexión con 20 copias evaluadas"
                }
            ],
            callouts: [
                {
                    title: "Espacio de trabajo de 6 pestañas",
                    desc: "Plantilla y preguntas → Estudiantes → Copias → Emparejamiento OCR sin conexión → Consola de evaluación de 3 paneles → Estadísticas y exportaciones."
                },
                {
                    title: "Funciona 100 % sin conexión y de forma manual",
                    desc: "Evalúe manualmente a gran velocidad con atajos de teclado, o combine la precorrección por IA con la validación humana."
                },
                {
                    title: "Demo integrada de 20 copias",
                    desc: "Pruebe de inmediato todo el flujo de evaluación sin necesidad de escanear documentos gracias a la Demo de Examen integrada."
                },
                {
                    title: "Archivos 100 % locales en Documents/Gradaly",
                    desc: "Todos los PDF, listas de estudiantes y calificaciones permanecen en su equipo en carpetas estándar — sin almacenamiento forzoso en la nube."
                }
            ]
        },
        {
            id: "exam-canvas-and-rubric",
            guide: "exam",
            stepNumber: "E2",
            partColor: "indigo",
            tag: "Modo Examen • Paso 2 — Plantilla, zona de ID y rúbrica",
            badge: "Esencial para una evaluación precisa",
            shortTitle: "Plantilla, zona de ID y criterios",
            title: "Definición de la zona de identificación, zonas de preguntas, baremo y solucionario",
            subtitle: "Importe el PDF en blanco del examen, delimite el encabezado de identificación para OCR local y configure sus preguntas y rúbrica de evaluación.",
            paragraphs: [
                "En la pestaña <strong>1. Plantilla y preguntas</strong> de un proyecto de Examen, comience importando el PDF en blanco del examen (<code>Plantilla</code>). A continuación, trazará dos tipos de zonas rectangulares sobre las páginas del PDF:",
                "<strong>1. Trazar la Zona de Identificación del Estudiante (<code>ID</code>):</strong> Haga clic en el botón <strong>Zona de identificación del estudiante (Nombre / Matrícula)</strong> en el panel izquierdo y dibuje un rectángulo en la página 1 donde los estudiantes escriben su nombre y número de matrícula/ID. Posteriormente, Gradaly recortará esta área exacta en cada copia para ejecutar el <strong>emparejamiento OCR 100 % sin conexión</strong> frente a su lista de clase.",
                "<strong>2. Trazar cada Zona de Pregunta y elegir el origen del enunciado para la IA (<code>Copia del estudiante</code> frente a <code>Plantilla</code>):</strong> Cuando solicita a la IA evaluar una copia, Gradaly recorta la zona rectangular definida para esa pregunta y la envía al modelo de IA de Visión elegido junto con los criterios de su rúbrica.<br>• <strong>Zona única combinada (por defecto):</strong> Siempre que la maquetación lo permita, abarque tanto el enunciado impreso como el recuadro de respuesta del estudiante en un único rectángulo. Por defecto (<code>Enunciado IA: Copia del estudiante</code>), Gradaly recorta dicho rectángulo <strong>directamente desde la copia del estudiante (<code>copies/copie_XXX.pdf</code>)</strong>, de modo que si cada copia contiene valores numéricos individualizados, la IA lee los parámetros y la respuesta propios de ese estudiante.<br>• <strong>Disociar enunciado y respuesta (<code>Separar enunciado / respuesta</code>) y selector <code>Enunciado IA</code>:</strong> Si el enunciado y el recuadro de respuesta se encuentran en páginas distintas o separados por otro contenido, haga clic en <strong>Separar enunciado / respuesta</strong> para definir dos zonas (<code>Enunciado</code> y <code>Respuesta en copia</code>), y elija de dónde debe recortarse el enunciado:<br>&nbsp;&nbsp;– <strong><code>Copia del estudiante</code>:</strong> Tanto la zona de enunciado como la de respuesta se recortan desde <strong>la propia copia de cada estudiante</strong> y se ensamblan verticalmente (imprescindible cuando los enunciados tienen datos numéricos personalizados por alumno).<br>&nbsp;&nbsp;– <strong><code>Plantilla</code> (<code>canvas.pdf</code>):</strong> La zona de enunciado se recorta de la plantilla en blanco (<code>canvas.pdf</code>) y se coloca encima de la respuesta del estudiante (ideal cuando los alumnos responden en hojas anexas que no repiten el enunciado impreso).",
                "<strong>3. Comprender la Nota base (<code>Base Score</code>), Puntuación máxima (<code>Max Score</code>), acotación y <code>Máx. posible</code>:</strong><br>• <strong>Fórmula de calificación:</strong> Gradaly parte de la <strong>Nota base</strong> de la pregunta, suma los puntos de todos los criterios validados (<code>Puntuación bruta = Nota base + Σ criterios marcados</code>) y <strong>acota la calificación final de la pregunta entre <code>0</code> y <code>Puntuación máxima</code></strong>.<br>• <strong>Esquema puramente aditivo O puramente sustractivo:</strong> Para un <strong>baremo aditivo</strong>, fije <code>Nota base = 0</code> y utilice únicamente criterios positivos (<code>+1</code>, <code>+1.5</code>). Para un <strong>baremo sustractivo / deductivo</strong>, fije <code>Nota base = Puntuación máxima</code> y emplee únicamente penalizaciones negativas (<code>-0.5</code>, <code>-1</code>). <strong>Evite mezclar puntos positivos y negativos en una misma pregunta</strong>: un esquema puro resulta mucho más transparente tanto para la IA como para el estudiante.<br>• <strong>Indicador <code>Máx. posible</code>:</strong> Muestra <code>Nota base + Σ (criterios positivos)</code> para detectar de inmediato si la suma de ponderaciones no coincide con la <code>Puntuación máxima</code>.",
                "<strong>4. Campo inferior de Instrucciones generales (<code>Instrucciones y lógica de corrección / Prompt IA</code>):</strong> Utilice el cuadro de texto inferior de cada pregunta para precisar cómo tratar casos particulares (p. ej., arrastre de error de cálculo, expresiones equivalentes) — y si el enunciado impreso queda fuera del recorte, pegue aquí el texto del enunciado.",
                "<strong>5. Importar y probar su Solucionario de referencia (<code>Solucionario</code> / <code>⭐ Solucionario</code>):</strong> Utilice el selector <strong>Enunciado (Plantilla) / Solucionario</strong> en la parte superior del visor PDF para importar el PDF con su resolución modelo. Aparecerá fijo al principio de la pestaña Evaluación como <strong><code>⭐ Solucionario de referencia</code></strong>: ¡compruebe siempre que su propio solucionario obtenga la <strong>puntuación máxima (<code>Máx/Máx</code>)</strong> en todas las preguntas!",
                "<strong>6. Criterios mutuamente excluyentes (grupos <code>OR</code>), reordenación con línea de inserción y botón <code>Render / Edit</code>:</strong><br>• <strong>Criterios excluyentes <code>OR</code>:</strong> Haga clic en el enlace <strong><code>OR</code></strong> entre dos criterios consecutivos positivos (p. ej., crédito parcial <em>O</em> crédito completo) o negativos de penalización para agrupar alternativas excluyentes (también compatible con el Asistente IA de rúbricas). Al marcar un criterio de un grupo <code>OR</code> se desmarcan automáticamente los demás, los límites <code>Máx. posible</code> / <code>Mín. posible</code> consideran solo la opción más fuerte de cada grupo y los grupos <code>OR</code> se muestran claramente en PDF anotados y Portales Web.<br>• <strong>Arrastrar y soltar por inserción:</strong> Reordene preguntas, páginas, criterios individuales o bloques <code>OR</code> completos juntos mediante una línea visual de inserción.<br>• <strong>Botón unificado <code>Render / Edit</code>:</strong> Alterne al instante entre la vista renderizada Markdown + KaTeX y la edición fuente en descripciones de criterios, instrucciones y prompts del proyecto."
            ],
            screenshots: [
                {
                    filePrefix: "02_questions",
                    caption: "Modo Examen — Pestaña Plantilla y preguntas: botón de zona de ID estudiantil, notas base/máxima/máx. posible, criterios verificables, instrucciones para la IA y selector Enunciado / Solucionario"
                }
            ],
            callouts: [
                {
                    title: "Zona de ID para OCR sin conexión",
                    desc: "Delimite una sola vez el encabezado en la página 1; Gradaly lo extraerá en todas las copias escaneadas para el reconocimiento local de nombre y matrícula."
                },
                {
                    title: "Rúbrica puramente aditiva o sustractiva",
                    desc: "Parta de 0 sumando +pts o parta de la nota máxima restando −pts. La calificación final siempre queda acotada en [0, Puntuación máx.]."
                },
                {
                    title: "Incluir el enunciado en la zona",
                    desc: "Enmarque tanto el enunciado impreso como el recuadro de respuesta (o pegue el texto del enunciado en el campo inferior de instrucciones)."
                },
                {
                    title: "Verificación con el Solucionario (⭐)",
                    desc: "Importe su resolución modelo en PDF y compruebe en 1 clic que alcanza la puntuación máxima (Máx/Máx) en cada pregunta."
                }
            ]
        },
        {
            id: "exam-ai-rubric-assistant",
            guide: "exam",
            stepNumber: "E3",
            partColor: "indigo",
            tag: "Modo Examen • Paso 3 — Asistente IA de Rúbrica",
            badge: "Chat interactivo y calibración",
            shortTitle: "Asistente IA de Rúbrica",
            title: "Codiseño y calibración de criterios de evaluación con el Asistente IA de Rúbrica",
            subtitle: "Genere o refine su rúbrica de calificación a partir del enunciado y el solucionario en PDF, dialogue por chat y pegue capturas de respuestas reales.",
            paragraphs: [
                "En cualquier pregunta dentro de <strong>Plantilla y preguntas</strong>, haga clic en <strong>Diseñar / Modificar con IA</strong> para abrir el <strong>Asistente IA de Rúbrica</strong> interactivo.",
                "<strong>1. Configurar las preferencias del baremo:</strong> Indique la <code>Puntuación máxima</code> de la pregunta, elija una filosofía <strong>Aditiva</strong> o <strong>Deductiva</strong>, y seleccione el <strong>número deseado de criterios</strong> (3, 4, 5 o libre). Si ha cargado un PDF de <code>Solucionario</code>, marque <em>«Utilizar la respuesta del solucionario como referencia»</em> para que la IA examine tanto el enunciado como su solución modelo.",
                "<strong>2. Iterar por chat y pegar capturas de copias reales (<code>Cmd+V</code> / <code>Ctrl+V</code>):</strong> Ajuste los criterios propuestos en lenguaje natural en el panel derecho. Mejor aún: tome una captura de pantalla de la respuesta manuscrita de un estudiante, <strong>péguela directamente en el chat</strong> y escriba: <em>«Considero que esta respuesta merece la puntuación completa; adapta por favor los criterios y las instrucciones de evaluación en consecuencia.»</em>",
                "<strong>3. Aplicar y calibrar en varias copias:</strong> Pulse <strong>Validar y aplicar a la pregunta</strong> y, a continuación, pruebe la rúbrica sobre su <code>⭐ Solucionario de referencia</code> y sobre 2 o 3 copias reales en la pestaña Evaluación antes de lanzar la evaluación por lotes de toda la clase."
            ],
            screenshots: [
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "Ventana del Asistente IA de Rúbrica: criterios propuestos y PROMPT_TEXT a la izquierda; chat interactivo de refinamiento (con soporte para pegar capturas) a la derecha"
                }
            ],
            callouts: [
                {
                    title: "Analiza plantilla y solucionario",
                    desc: "Genera criterios estructurados y ponderaciones alineadas con su desarrollo matemático o conceptual exacto."
                },
                {
                    title: "Pegue respuestas reales (Cmd+V)",
                    desc: "Pegue capturas de respuestas límite en el chat para adaptar automáticamente las descripciones de los criterios."
                }
            ]
        },
        {
            id: "exam-roster-and-matching",
            guide: "exam",
            stepNumber: "E4",
            partColor: "indigo",
            tag: "Modo Examen • Paso 4 — Lista, copias y OCR sin conexión",
            badge: "100 % local y sin conexión",
            shortTitle: "Lista, copias y emparejamiento OCR",
            title: "Lista de estudiantes (CSV), división de PDF y emparejamiento OCR 100 % sin conexión",
            subtitle: "Importe la nómina de su curso, divida escaneos PDF masivos en cuadernillos individuales y asocie identidades localmente sin subidas a la nube.",
            paragraphs: [
                "En la pestaña <strong>2. Estudiantes</strong>, importe la lista oficial de su clase desde un archivo CSV o Excel (Moodle, Canvas, gestión académica, etc.). Gradaly asocia las columnas de <strong>Matrícula / ID</strong>, <strong>Apellidos</strong>, <strong>Nombre</strong>, <strong>Correo electrónico</strong> y <strong>Grupo</strong>.",
                "En la pestaña <strong>3. Copias</strong>, importe archivos PDF individuales por estudiante o bien un <strong>único archivo PDF masivo multipágina</strong> procedente del escáner reprográfico. Indique el número de páginas por cuadernillo (p. ej., 4 páginas por estudiante) para dividir automáticamente el lote en <code>copie_01.pdf</code>, <code>copie_02.pdf</code>, etc. Si el escáner generó archivos pesados de alta resolución (<strong>&gt; 220 DPI</strong>), Gradaly lo detecta al importar y ofrece una <strong>optimización nativa en 1 clic a 200 DPI</strong> (reduciendo hasta 4 veces el tamaño en disco para agilizar el uso compartido y la sincronización). También puede ejecutar la <strong>Auditoría de integridad de páginas</strong> bajo demanda para detectar páginas invertidas (180°), intercambiadas o faltantes con reparación automática en 1 clic.",
                "En la pestaña <strong>4. Emparejamiento</strong>, haga clic en <strong>Emparejamiento automático</strong>. Gradaly recorta la zona de identificación de la página 1 de cada copia, ejecuta un <strong>motor OCR WebAssembly integrado 100 % sin conexión en su propio equipo</strong> y vincula los nombres y matrículas manuscritos con su lista de clase mediante coincidencia aproximada y asignación óptima global. Revise y confirme visualmente cada emparejamiento en cuestión de segundos."
            ],
            screenshots: [
                {
                    filePrefix: "04_students",
                    caption: "Pestaña Estudiantes: lista local del curso con matrícula/ID, apellidos, nombre, correo electrónico y grupo"
                },
                {
                    filePrefix: "05_copies",
                    caption: "Pestaña Copias: división de escaneos PDF masivos y vista previa de cuadernillos individuales"
                },
                {
                    filePrefix: "06_matching",
                    caption: "Pestaña Emparejamiento: verificación visual lado a lado del recorte manuscrito de identificación frente a la lista de estudiantes"
                }
            ],
            callouts: [
                {
                    title: "Privacidad local estricta (Cero OCR en la nube)",
                    desc: "Los nombres, matrículas, correos y recortes de encabezado nunca salen de su ordenador: el OCR se ejecuta 100 % sin conexión dentro de la aplicación."
                },
                {
                    title: "Filtro de pendientes y búsqueda instantánea",
                    desc: "Filtre las copias sin asignar o ambiguas para resolver caligrafías dudosas en pocos segundos."
                }
            ]
        },
        {
            id: "exam-grading-console",
            guide: "exam",
            stepNumber: "E5",
            partColor: "indigo",
            tag: "Modo Examen • Paso 5 — La consola de evaluación",
            badge: "100 % humano, IA estándar o Lote Flex (-50 %)",
            shortTitle: "Evaluación manual y asistida por IA",
            title: "Consola de evaluación de 3 paneles: agilidad manual, calibración IA y modo por lotes",
            subtitle: "Navegue pregunta por pregunta en toda la promoción, comprenda el código de 3 colores, calibre en copias individuales y ejecute la precorrección por lotes.",
            paragraphs: [
                "La pestaña <strong>5. Evaluación</strong> reúne tres paneles sincronizados: la <strong>Lista de estudiantes</strong> a la izquierda (con el <code>⭐ Solucionario de referencia</code> fijado arriba), el <strong>Visor PDF interactivo</strong> en el centro y el <strong>Puesto de trabajo de criterios y retroalimentación</strong> a la derecha.",
                "<strong>1. Círculos de preguntas y navegación 2D por teclado:</strong> Haga clic en cualquier círculo numerado de pregunta (<code>1</code>, <code>2</code>, <code>3</code>...) arriba a la derecha o pulse <code>←</code> / <code>→</code> (o <code>H</code> / <code>L</code>) para cambiar de pregunta. Utilice <code>↑</code> / <code>↓</code> (o <code>K</code> / <code>J</code>) para desplazarse entre estudiantes en la misma pregunta, marque o desmarque los criterios 1–9 con las teclas numéricas <code>1–9</code>, valide manualmente con <code>V</code> y pulse <code>?</code> (o el icono <code>⌨️</code> de la barra superior) en cualquier momento para consultar la guía integrada de atajos de teclado.",
                "<strong>2. Código de estado de 3 colores:</strong><br>• 🟢 <strong>Verde (<code>IA</code>):</strong> Precorregida por la IA (pendiente de revisión humana).<br>• 🔵 <strong>Azul (<code>Humano</code>):</strong> Calificada, modificada o validada explícitamente por el docente.<br>• ⚪ <strong>Gris (<code>Por corregir</code>):</strong> Aún sin calificar.",
                "<strong>3. Calibración individual, inspección de consulta IA y lanzamiento por lotes para toda la promoción:</strong><br>• <strong>Calibración de una pregunta e interrupción inmediata (<code>✕ Interrumpir</code>):</strong> Abajo a la derecha, pulse <strong>Reevaluar esta pregunta con IA</strong> para probar su rúbrica únicamente en el estudiante actual. Si un modelo de razonamiento tarda demasiado, pulse el botón rojo <strong><code>✕ Interrumpir</code></strong> junto al indicador de carga para cancelar la petición al instante.<br>• <strong>Inspector en vivo de consulta e imagen enviada a la IA (<code>👁️ Consulta IA</code>):</strong> Haga clic en el botón <strong><code>👁️ Consulta IA</code></strong> junto al botón de evaluación individual para abrir el inspector interactivo. Muestra en tiempo real: (1) la <strong>imagen JPEG exacta recortada o ensamblada</strong> que recibe el modelo de Visión y si el enunciado procede de la <strong>Copia del estudiante</strong> o de la <strong>Plantilla en blanco (<code>canvas.pdf</code>)</strong> (con selector directo en 1 clic), (2) el <strong>System Prompt y User Prompt</strong> completos, y (3) la <strong>estructura íntegra del payload HTTP JSON</strong> (incluidas herramientas activas como <code>code_execution</code> y el esquema JSON estricto).<br>• <strong>Lanzamiento multipágina por lotes (<code>▶ Corrección IA</code>):</strong> Pulse <strong>▶ Corrección IA</strong> arriba a la izquierda para evaluar las copias y preguntas seleccionadas. Elija entre el <strong>⚡ Modo Estándar</strong> (hilos paralelos por par <code>(copia, pregunta)</code> con caché compartida de PDF) y el <strong>🌿 Modo Flex / Lote Asíncrono (-50 % de descuento)</strong>, recomendado para promociones completas con claves directas de Gemini, OpenAI o Anthropic.<br>• <strong>Detección opcional de anomalías de evaluación (<code>⚠️ Anomalías</code>):</strong> Activada por defecto en los ajustes de IA, señala automáticamente anomalías visuales o materiales durante la evaluación (respuesta fuera del recuadro, tachaduras ambiguas, escaneo ilegible o página intercambiada) para que pueda filtrar por <code>⚠️ Anomalías</code> y verificar o descartar cada alerta con un clic.",
                "<strong>4. Vista previa <code>Render / Edit</code> y Suites de Benchmark y Regresión multimodelo:</strong><br>• <strong>Botón unificado <code>Render / Edit</code>:</strong> Alterne entre vista KaTeX/Markdown y edición directa en la <em>Justificación IA</em> y el <em>Feedback al estudiante</em>.<br>• <strong>Suites de Benchmark y Regresión multimodelo (<code>⭐</code>):</strong> Guarde respuestas validadas manualmente en suites reutilizables y ejecute campañas comparativas entre modelos (Gemini, GPT, Claude, OpenRouter, servidor universitario u Ollama local) desde el espacio <strong>Benchmark</strong> de la pantalla inicial. Elija modelos mediante listas guiadas, ejecute comprobaciones previas obligatorias de Visión y sandbox Python, paralelice con <code>1–16</code> hilos (con protección VRAM en Ollama) bajo barra de progreso en vivo, compare MAE, coincidencia exacta, F1 por criterio, latencia y tokens, o abra cualquier suite como proyecto completo para revisar la verdad de referencia."
            ],
            screenshots: [
                {
                    filePrefix: "07_grading",
                    caption: "Vista general de la consola de evaluación: lista izquierda de estudiantes (con ⭐ Solucionario, indicadores de estado y puntuaciones), PDF central enfocado en la zona activa y panel derecho de rúbrica"
                },
                {
                    filePrefix: "07b_grading_single_ai",
                    caption: "Parte inferior del panel derecho: justificación de la IA, retroalimentación para el estudiante (Markdown + KaTeX), casillas de protección contra sobrescritura y botón para reevaluar con IA"
                },
                {
                    filePrefix: "07c_grading_launch_modal",
                    caption: "Ventana de inicio de corrección IA: selección de copias, preguntas, reglas de sobrescritura y Modo Estándar frente a Lote Asíncrono Flex (-50 %)"
                }
            ],
            callouts: [
                {
                    title: "Velocidad 100 % humana con teclado 2D",
                    desc: "Cambie de copia con ↑/↓ (K/J), de pregunta con ←/→ (H/L), alterne criterios con 1–9, valide con V, salga de campos de texto con Esc y pulse ? para ver los atajos."
                },
                {
                    title: "Modo Lote Flex recomendado (-50 %)",
                    desc: "Disponible con claves directas de Gemini, OpenAI y Anthropic para preevaluar promociones completas de forma asíncrona a mitad de coste."
                }
            ]
        },
        {
            id: "exam-collaborative-sharing",
            guide: "exam",
            stepNumber: "E6",
            partColor: "indigo",
            tag: "Modo Examen • Paso 6 — Corrección en equipo (Gradaly Pro)",
            badge: "Compartir y fusionar en equipo • PRO",
            shortTitle: "Compartir y fusionar (PRO)",
            title: "Uso compartido colaborativo de proyectos y fusión selectiva por pregunta",
            subtitle: "Reparta la evaluación de un examen entre colegas o ayudantes mediante archivos .gradaly o enlaces en la nube cifrados de extremo a extremo (Gradaly Pro).",
            paragraphs: [
                "Al corregir un examen entre varios docentes o ayudantes de cátedra, <strong>Gradaly Pro</strong> permite compartir un proyecto completo o un subconjunto ligero mediante un archivo local <code>.gradaly</code> o un <strong>Enlace Cloud cifrado con AES-256-GCM</strong> (válido durante 7, 14 o 30 días).",
                "Cuando sus colegas pulsan <strong>Importar / Fusionar</strong>, Gradaly verifica la huella criptográfica SHA-256 del PDF de la plantilla del examen y les permite importar el paquete como un <strong>proyecto nuevo</strong> o bien <strong>fusionar selectivamente rúbricas y/o calificaciones pregunta por pregunta</strong> (p. ej., combinando P1–P2 del ayudante 1 con P3–P4 del ayudante 2) creando automáticamente copias de seguridad previas a la fusión."
            ],
            screenshots: [
                {
                    filePrefix: "09_share_modal",
                    caption: "Ventana Compartir / Exportar proyecto (Gradaly Pro): perfiles de exportación, filtro por preguntas y Enlace Cloud cifrado con AES-256"
                },
                {
                    filePrefix: "10_import_merge_modal",
                    caption: "Ventana Importar / Fusión selectiva (Gradaly Pro): verificación SHA-256 de la plantilla y fusión por pregunta de rúbricas y calificaciones"
                }
            ],
            callouts: [
                {
                    title: "Enlaces Cloud cifrados de extremo a extremo",
                    desc: "Comparta proyectos con su equipo docente mediante cifrado AES-256-GCM en el cliente (la clave #k=... jamás llega al servidor)."
                },
                {
                    title: "Fusión selectiva pregunta por pregunta",
                    desc: "Integre limpiamente las calificaciones de varios correctores protegiendo las ediciones manuales y generando un respaldo automático."
                }
            ]
        },
        {
            id: "exam-analytics-and-exports",
            guide: "exam",
            stepNumber: "E7",
            partColor: "indigo",
            tag: "Modo Examen • Paso 7 — Estadísticas y devolución",
            badge: "Excel • CSV Moodle • PDF anotados • Portal Web",
            shortTitle: "Estadísticas, Moodle, PDF y Portal Web",
            title: "Estadísticas de la promoción, exportación a Moodle, PDF anotados y Portal de Consulta",
            subtitle: "Analice la distribución de calificaciones, importe notas y enlaces personales de consulta en Moodle y devuelva retroalimentación individualizada a sus estudiantes.",
            paragraphs: [
                "La pestaña <strong>6. Resumen y estadísticas</strong> calcula indicadores del curso en tiempo real: media, mediana, desviación típica, mínimo/máximo, histogramas inequívocos <code>[a, b[</code> y tasas de logro por criterio.",
                "Para entregar los exámenes evaluados a los estudiantes (vista previa de 1 copia en la versión gratuita; promoción completa en Gradaly Pro), elija entre cuatro canales:<br>1) <strong>Libro de calificaciones Excel multihoja</strong> (resumen general + 1 pestaña dedicada por pregunta, para todas las copias o una selección).<br>2) <strong>Exportación a Moodle (CSV del Libro de calificaciones y Planilla de evaluación de Tarea)</strong>: genere un CSV UTF-8 estándar para <em>Calificaciones de Moodle → Importar → Archivo CSV</em> o complete automáticamente una hoja de calificaciones sin conexión descargada de una actividad <em>Tarea de Moodle</em> (asociando por número de matrícula/ID o correo electrónico), integrando tanto la nota escalada (bruta, <code>/20</code> o <code>/100</code>) como el <strong>enlace personal clicable a la copia cifrada en línea</strong> dentro de la columna de <em>Comentarios de retroalimentación</em> de Moodle.<br>3) <strong>Copias PDF individuales anotadas (ZIP o copia individual) con formato de nombre personalizable</strong>: combina una portada de síntesis con las páginas manuscritas del estudiante y permite personalizar el patrón de nombre de archivo mediante variables dinámicas (<code>{nom}</code>, <code>{prenom}</code>, <code>{id}</code>, <code>{projet}</code>, <code>{copie}</code>, <code>{groupe}</code> — p. ej., <code>{nom}_{prenom}_{projet}.pdf</code>) con vista previa en directo.<br>4) <strong>Portal Web Estudiantil de Consulta Zero-Knowledge</strong>: publique y sincronice en línea las copias cifradas a alta velocidad (procesamiento multinúcleo + 10 flujos binarios HTTP/2 paralelos), notifique a los estudiantes mediante <strong>Envío directo por correo (<code>@gradaly.io</code>)</strong> o mediante <strong>Combinación de correspondencia (su propio correo universitario en Outlook Web / Microsoft 365, Word + Outlook de escritorio o Thunderbird)</strong> exportando una tabla lista en <code>.xlsx</code>, <code>.docx</code> o <code>.csv</code>, exporte directamente para <strong>Moodle</strong> o imprima <strong>talones QR individuales recortables</strong> para entregar en clase."
            ],
            screenshots: [
                {
                    filePrefix: "08_stats",
                    caption: "Pestaña Resumen y estadísticas (Modo Examen): indicadores de la promoción, histogramas de distribución, tasas de éxito por criterio y centro de exportación"
                }
            ],
            callouts: [
                {
                    title: "Libro Excel y copias PDF anotadas",
                    desc: "Exporte actas universitarias en Excel y copias PDF individuales con desglose detallado de criterios y fórmulas matemáticas en KaTeX."
                },
                {
                    title: "Exportación CSV a Moodle con enlace en línea",
                    desc: "Importe notas y enlaces personales de consulta directamente en Moodle (importación CSV al Libro de calificaciones o planilla de Tarea sin conexión)."
                },
                {
                    title: "Portal estudiantil de consulta cifrado",
                    desc: "Cada estudiante consulta su copia corregida, los criterios validados y su retroalimentación personalizada vía Moodle, enlace mágico por correo o talón QR."
                }
            ]
        },
        {
            id: "exam-ai-settings",
            guide: "exam",
            stepNumber: "E8",
            partColor: "indigo",
            tag: "Modo Examen • Paso 8 — Configuración de IA (Opcional)",
            badge: "OpenRouter • Gemini • GPT • Claude • Local",
            shortTitle: "Claves API y elección del modelo de IA",
            title: "Configuración de su clave API y elección del modelo de IA adecuado",
            subtitle: "Omita este capítulo si utiliza Gradaly en Modo 100 % Humano. Para habilitar el Asistente IA de Rúbrica y la Precorrección por IA, configure su clave API en Ajustes (⚙️).",
            paragraphs: [
                "<strong>La calidad de la evaluación depende directamente del modelo de IA seleccionado:</strong> En nuestras pruebas comparativas con exámenes universitarios manuscritos (matemáticas, física, ingeniería, economía y humanidades), obtenemos <strong>resultados excelentes</strong> con <strong><code>Gemini 3.8 Flash</code></strong>, <strong><code>GPT 5-4 mini</code></strong>, <strong><code>Claude-Sonnet-5.5</code></strong> y <strong><code>Mistral-Large 4.0</code></strong> — ¡no dude en probar varios modelos según su asignatura!",
                "<strong>Claves directas de proveedor frente a OpenRouter:</strong> Puede crear una clave API directamente en <strong>Google Gemini</strong>, <strong>OpenAI</strong> o <strong>Anthropic</strong> (lo que habilita el <strong>modo Lote / Flex asíncrono con 50 % de descuento</strong>), o bien utilizar <strong>OpenRouter</strong>, cuya ventaja es que <strong>una única clave API proporciona acceso a modelos de todos los proveedores</strong> (Gemini, GPT, Claude, Mistral, DeepSeek, Qwen, Llama) desde una sola cuenta unificada.",
                "<strong>0 % de margen comercial y sin «créditos de IA» propietarios:</strong> A diferencia de las plataformas comerciales en la nube que imponen un único modelo y revenden paquetes de créditos con fuertes recargos, Gradaly aplica <strong>cero margen comercial</strong> sobre el uso de IA. Usted abona exactamente el coste por token del proveedor — o <strong>0 € si su universidad ofrece un servidor institucional de IA gratuito o si ejecuta un modelo local con Ollama</strong>.",
                "<strong>Ajustes avanzados — Ejecución nativa de código Python (<code>code_execution</code> / <code>code_interpreter</code>):</strong> En <em>Ajustes (⚙️) → Ajustes avanzados</em>, puede activar la herramienta opcional de <strong>Ejecución de código Python</strong> (desactivada por defecto). Al activarla, el modelo de IA puede escribir y ejecutar código Python en un entorno aislado seguro del servidor (<code>code_execution</code> en Google Gemini, <code>code_interpreter</code> en OpenAI <code>/v1/responses</code> y <code>code_execution_20250825</code> en Anthropic <code>/v1/messages</code>) tanto durante el diseño de rúbricas como durante la evaluación de copias — ideal para exámenes científicos y técnicos con cálculos numéricos, exponenciales, trigonometría o trazado de algoritmos. Un botón integrado permite comprobar en 1 clic si el modelo elegido soporta la ejecución de código.",
                "<strong>Ajustes avanzados — Modo de depuración IA ampliado (<code>.debug/grading/inspect.html</code>):</strong> Activar el <strong>Modo de depuración IA</strong> guarda un paquete completo de diagnóstico para cada evaluación dentro de <code>.debug/grading/</code>, incluido un informe visual HTML autónomo (<strong><code>inspect.html</code></strong> y <code>latest_inspect.html</code>) que muestra la imagen exacta enviada a la IA, si el enunciado provino de la copia del estudiante o de la plantilla en blanco (<code>image_source.json</code>), los prompts System y User (<code>prompt.txt</code>), la estructura completa de la petición HTTP JSON (<code>request_payload.json</code>), el código Python eventualmente ejecutado con su salida de consola y la respuesta bruta de la API (<code>raw_api_response.json</code>).",
                "<strong>Registro local de consumo de tokens IA, gráficos temporales y tarifas personalizadas (<code>Uso de IA y Costes</code>):</strong> Cada llamada IA (corrección individual o por lotes, Asistente de rúbricas, auditoría de prompts, diagnósticos y campañas Benchmark) registra localmente tokens de entrada y salida/razonamiento, fecha, proveedor y modelo en <code>~/.gradaly_ai_usage.jsonl</code> (sin datos personales de estudiantes). Haga clic en el <strong>icono de Monedas</strong> en la cabecera o en <em>Ajustes (⚙️)</em> para consultar gráficos diarios/mensuales y curvas acumuladas, exportar a CSV, reiniciar el registro y configurar sus tarifas <code>$ / 1M</code> — estrictamente para proveedores y modelos ya utilizados, con enlaces a las tarifas oficiales."
            ],
            screenshots: [
                {
                    filePrefix: "11_settings_ai",
                    caption: "Ventana de Ajustes de IA (⚙️): elija su proveedor (Google Gemini, OpenRouter, OpenAI, Anthropic o Servidor Local / Universitario), seleccione su modelo y pruebe la conexión"
                }
            ],
            providerGuides: [
                {
                    name: "OpenRouter (Pasarela multiproveedor)",
                    tag: "Todos los modelos en 1 clave",
                    icon: "fas fa-network-wired",
                    desc: "<strong>Ventaja específica:</strong> Una sola cuenta y clave API le permite probar <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code>, <code>Mistral-Large 4.0</code> y cientos de otros modelos sin gestionar múltiples cuentas de facturación (nota: el modo Lote asíncrono no está disponible en OpenRouter).",
                    steps: [
                        "Acceda a <strong>openrouter.ai</strong> e inicie sesión (o cree una cuenta gratuita).",
                        "Abra <strong>Credits</strong> y añada un pequeño saldo prepago (p. ej., 5 $ o 10 $, suficiente para miles de páginas de examen).",
                        "Abra <strong>Keys</strong> → pulse <strong>Create Key</strong>, asígnele el nombre <code>Gradaly</code> y copie la clave que comienza por <code>sk-or-v1-...</code>.",
                        "En Gradaly, abra <strong>Ajustes (⚙️)</strong>, elija <strong>OpenRouter</strong>, pegue la clave y seleccione el modelo deseado."
                    ],
                    url: "https://openrouter.ai/keys",
                    linkLabel: "Abrir consola de claves API de OpenRouter"
                },
                {
                    name: "Google Gemini (Google AI Studio)",
                    tag: "Rápido y económico",
                    icon: "fas fa-bolt",
                    desc: "Acceso directo a los modelos multimodales <code>Gemini 3.8 Flash</code> y Pro de Google, con soporte nativo para el modo Lote asíncrono con 50 % de descuento.",
                    steps: [
                        "Inicie sesión en <strong>Google AI Studio</strong> (<code>aistudio.google.com</code>) con su cuenta de Google.",
                        "Haga clic en <strong>Get API key</strong> en el menú izquierdo y luego en <strong>Create API key</strong>.",
                        "Copie la clave generada (comienza por <code>AIzaSy...</code>). Active la facturación de pago por uso si desea desbloquear cuotas superiores.",
                        "En Gradaly, abra <strong>Ajustes (⚙️)</strong>, seleccione <strong>Google Gemini</strong> y pegue su clave."
                    ],
                    url: "https://aistudio.google.com/app/apikey",
                    linkLabel: "Abrir claves API de Google AI Studio"
                },
                {
                    name: "OpenAI (Modelos GPT)",
                    tag: "Alta precisión lógica",
                    icon: "fas fa-brain",
                    desc: "Acceso directo a los modelos multimodales de OpenAI como <code>GPT 5-4 mini</code>, excelentes para verificar desarrollos paso a paso, con modo Lote al -50 %.",
                    steps: [
                        "Inicie sesión en <strong>platform.openai.com</strong> (independiente de la suscripción personal ChatGPT Plus).",
                        "Vaya a <strong>Settings → Billing</strong> y cargue un pequeño saldo prepago (p. ej., 5 $).",
                        "Abra <strong>Dashboard → API keys</strong>, pulse <strong>+ Create new secret key</strong> y copie la clave (<code>sk-proj-...</code>).",
                        "En Gradaly, abra <strong>Ajustes (⚙️)</strong>, seleccione <strong>OpenAI</strong>, pegue la clave y elija su modelo."
                    ],
                    url: "https://platform.openai.com/api-keys",
                    linkLabel: "Abrir claves API de OpenAI Platform"
                },
                {
                    name: "Anthropic (Modelos Claude)",
                    tag: "Demostraciones y redacción matizada",
                    icon: "fas fa-feather-alt",
                    desc: "Acceso directo a los modelos <code>Claude-Sonnet-5.5</code> y Opus de Anthropic, reconocidos por su rigor al analizar demostraciones matemáticas manuscritas y redactar comentarios detallados.",
                    steps: [
                        "Inicie sesión en <strong>Anthropic Console</strong> (<code>console.anthropic.com</code>).",
                        "En <strong>Settings → Billing</strong>, active un saldo de crédito prepago.",
                        "En <strong>API Keys</strong>, pulse <strong>Create Key</strong> y copie la clave secreta (<code>sk-ant-...</code>).",
                        "En Gradaly, abra <strong>Ajustes (⚙️)</strong>, seleccione <strong>Anthropic</strong> y pegue su clave."
                    ],
                    url: "https://console.anthropic.com/settings/keys",
                    linkLabel: "Abrir claves API de Anthropic Console"
                }
            ],
            callouts: [
                {
                    title: "Servidor universitario u Ollama 100 % local",
                    desc: "Si su universidad proporciona un servidor de IA compatible con OpenAI o si ejecuta un modelo local con Ollama (<code>http://localhost:11434/v1</code>), seleccione «Universidad / Custom» o «Local» en Ajustes para un coste de 0 € en tokens."
                },
                {
                    title: "Diagnóstico de conexión en 1 clic",
                    desc: "Pulse la insignia de estado de IA en la barra superior en cualquier momento para verificar la validez de su clave API y la respuesta del modelo."
                },
                {
                    title: "Entorno Python de verificación (Opcional)",
                    desc: "Active la ejecución nativa de código Python en Ajustes avanzados para verificaciones numéricas de alta precisión en Gemini, OpenAI y Anthropic, con prueba de compatibilidad en 1 clic."
                },
                {
                    title: "Inspector visual de consultas y depuración",
                    desc: "Pulse «👁️ Consulta IA» en la pestaña Evaluación o abra .debug/grading/inspect.html para inspeccionar la imagen recortada exacta, el origen Plantilla vs. Copia, los prompts y el payload JSON."
                }
            ]
        },
        {
            id: "exam-faq",
            guide: "exam",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "indigo",
            tag: "Preguntas frecuentes (FAQ)",
            badge: "Arquitectura, privacidad y buenas prácticas",
            shortTitle: "Preguntas frecuentes",
            title: "Preguntas frecuentes (FAQ)",
            subtitle: "Respuestas a las dudas habituales sobre el funcionamiento interno de la IA, la supervisión humana de la calificación, almacenamiento local en Documents/Gradaly, seguridad de claves API, cifrado Zero-Knowledge y soporte.",
            paragraphs: [
                "A continuación encontrará respuestas detalladas a las consultas técnicas, pedagógicas y de privacidad más habituales sobre el Modo Examen de Gradaly."
            ],
            faqs: [
                {
                    q: "¿Cómo funciona internamente la evaluación por IA de Gradaly y de dónde procede la imagen de la pregunta (de la copia del estudiante o de la plantilla en blanco)?",
                    a: "<p>Cuando solicita a la IA evaluar una pregunta en la prueba de un estudiante, Gradaly extrae la <strong>imagen recortada de la zona rectangular</strong> que usted trazó para dicha pregunta y la envía al modelo de Visión elegido junto con un prompt estructurado que contiene los criterios de su rúbrica (<code>CRITERIA</code>) y sus instrucciones generales de calificación (<code>PROMPT_TEXT</code>).</p><p><strong>¿El enunciado procede de la copia del estudiante o de la plantilla en blanco?</strong><ul><li><strong>Zona única combinada (por defecto):</strong> Al dibujar un único rectángulo por pregunta, Gradaly lo recorta <strong>íntegramente de la copia del estudiante (<code>copies/copie_XXX.pdf</code>)</strong>. La plantilla en blanco (<code>canvas.pdf</code>) no interviene, por lo que si cada estudiante tiene valores numéricos distintos impresos en su hoja, la IA lee exactamente los datos y la respuesta de ese estudiante.</li><li><strong>Zonas disociadas (<code>Separar enunciado / respuesta</code>) y opción <code>Enunciado IA</code>:</strong> En la pestaña <em>1. Plantilla y preguntas</em>, el selector <strong><code>Enunciado IA: [Copia del estudiante] / [Plantilla]</code></strong> permite elegir si la parte del enunciado se toma de cada <strong>Copia del estudiante</strong> (esencial cuando los exámenes están parametrizados por alumno) o de la <strong>Plantilla en blanco (<code>canvas.pdf</code>)</strong> (útil cuando los estudiantes responden en hojas separadas que no reproducen el enunciado).</li></ul></p><p><strong>Inspección de la imagen exacta y la consulta JSON:</strong> En cualquier momento desde la pestaña <em>5. Evaluación</em>, pulse el botón <strong><code>👁️ Consulta IA</code></strong> junto a <em>Reevaluar esta pregunta con IA</em> (o active el <em>Modo de depuración IA</em> en <em>Ajustes → Ajustes avanzados</em> para abrir <code>.debug/grading/inspect.html</code>) y visualice la imagen JPEG exacta enviada al modelo, su procedencia detallada, los prompts System y User, el payload HTTP JSON completo y el código Python eventualmente ejecutado.</p>"
                },
                {
                    q: "¿Conviene confiar en la precorrección por IA y cómo supervisarla?",
                    a: "<p><strong>¡Al principio, nunca a ciegas!</strong> En una primera iteración, su rúbrica inicial puede resultar demasiado estricta o ambigua, o bien el modelo de IA seleccionado puede tropezar con un paso específico o interpretar erróneamente una notación inusual.</p><p><strong>La revisión y validación humanas son esenciales:</strong> Gradaly está diseñado para que el docente conserve el control soberano sobre cada nota. Revise siempre las propuestas de la IA, calibre la rúbrica con su solucionario y valide manualmente cada calificación y comentario, especialmente en exámenes oficiales.</p><p><strong>Transparencia estudiantil y revisión de calificaciones:</strong> Dado que Gradaly brinda total transparencia sobre los criterios exactos aplicados a cada copia (mediante PDF anotados o el Portal Web Estudiantil), recomendamos ofrecer a los estudiantes una instancia de revisión para consultar su copia y solicitar aclaraciones si fuera necesario.</p>"
                },
                {
                    q: "¿Cuánto cuesta evaluar un examen con IA?",
                    a: "<p>No existe una tarifa única fija, ya que el coste depende de varios factores: el número de copias, la cantidad de preguntas y el tamaño y nivel tarifario del modelo de IA elegido (cada proveedor publica su precio exacto por millón de tokens de entrada y salida).</p><p>Como referencia real concreta: utilizando un modelo excelente como <strong><code>Gemini 3.8 Flash</code></strong> (de sobresaliente desempeño en nuestras pruebas), hemos evaluado exámenes universitarios complejos de estadística con <strong>6 a 7 páginas de respuestas manuscritas para 400 estudiantes por un coste total de API de entre 5 $ y 7 $</strong> en modo flexible/por lotes (recordando que Gradaly aplica un 0 % de recargo sobre la tarifa del proveedor). Dado que las tarifas varían con el tiempo, Gradaly registra localmente los tokens exactos de entrada y salida/razonamiento en <strong>Uso de IA y Costes</strong> (icono de monedas arriba o en Ajustes), donde podrá ver gráficos temporales, exportar CSV y fijar sus precios actuales por <code>1M</code> tokens.</p>"
                },
                {
                    q: "Ya tengo una suscripción de pago a ChatGPT Plus (OpenAI), Claude Pro o Gemini Advanced — ¿por qué no puedo usarla en lugar de una clave API?",
                    a: "<p><strong>1. Dos productos estrictamente independientes en los proveedores de IA:</strong> En OpenAI, Anthropic y Google, las suscripciones de chat para consumidores (ChatGPT Plus, Claude Pro, Gemini Advanced por ~20 $/mes) y el <strong>acceso por API</strong> constituyen sistemas de facturación totalmente separados. Las suscripciones personales solo dan acceso manual a su interfaz web o móvil y no permiten técnicamente que aplicaciones externas como Gradaly ejecuten peticiones automatizadas (además de que sus condiciones de servicio prohíben expresamente eludir esta separación).</p><p><strong>2. Evaluación masiva en paralelo y mayores garantías de confidencialidad:</strong> Para preevaluar decenas o cientos de copias en paralelo y recibir datos estructurados (criterios marcados, justificación para el docente y retroalimentación para el alumno), Gradaly debe comunicarse a través de la API oficial para desarrolladores. Además, <strong>el tráfico por API goza de garantías contractuales de privacidad mucho más estrictas</strong>: a diferencia de los chats web de consumo por defecto, los recortes enviados mediante la API comercial <strong>no son utilizados por OpenAI, Google ni Anthropic para entrenar sus modelos</strong>.</p><p><strong>3. Coste muy reducido de pago por uso (sin cuota mensual adicional):</strong> Una clave API no requiere suscripción mensual: solo paga por los tokens efectivamente consumidos (<em>pay-as-you-go</em>, con 0 % de comisión de Gradaly), lo que suele representar <strong>apenas unos pocos dólares para toda una promoción de varios cientos de estudiantes</strong> (e incluso Google ofrece un nivel gratuito de prueba en la API de Gemini). Si prefiere gestionar un único saldo para todos los modelos (OpenAI, Claude, Gemini, Mistral), puede usar <strong>OpenRouter</strong> o el servidor institucional de IA de su universidad.</p>"
                },
                {
                    q: "¿Cuánto tarda la evaluación de mi examen con IA?",
                    a: "<p>El tiempo de procesamiento depende del número de zonas de preguntas, de la cantidad de copias y de la complejidad de razonamiento requerida al modelo. En la práctica, para un examen de <strong>400 copias, 5 preguntas y unas diez páginas de respuestas manuscritas</strong> en modo flexible, la precorrección completa suele completarse <strong>en unos 10 minutos</strong>.</p><p><strong>Consejo para agilizar la ejecución:</strong> No dude en aumentar el <strong>número de hilos simultáneos (workers)</strong> en <strong>Ajustes (⚙️)</strong>: siempre que los límites de tasa de su proveedor API lo permitan, incrementar el paralelismo reduce notablemente la duración total.</p>"
                },
                {
                    q: "¿Qué resolución (DPI) debo utilizar al escanear las copias de los estudiantes?",
                    a: "<p>Busque generar <strong>archivos lo más ligeros posible manteniendo una legibilidad nítida</strong>: entre <strong><code>150 DPI</code> y <code>200 DPI</code></strong> se encuentra el equilibrio ideal tanto para la lectura humana como para los modelos de visión artificial.</p><p><strong>Por qué NO conviene escanear a 300 o 600 DPI:</strong> Escanear a resoluciones muy altas no aporta ninguna mejora en la precisión de la IA (los modelos de visión redimensionan internamente las imágenes) y encarece entre 4 y 10 veces el peso de los archivos PDF, ralentizando innecesariamente la división de documentos, la navegación entre páginas y las subidas cifradas a la nube.</p><p><strong>Mantenga el escaneo en color:</strong> Recomendamos escanear en <strong>Color (a 150–200 DPI con compresión estándar JPEG/PDF)</strong> en lugar de blanco y negro binario (1 bit). El color conserva con mucha mayor fidelidad trazos tenues a lápiz, bolígrafos de colores empleados en diagramas y subíndices matemáticos sutiles.</p>"
                },
                {
                    q: "¿Dónde se guardan los archivos de Gradaly en mi ordenador?",
                    a: "<p>Todos sus proyectos se almacenan localmente en la carpeta <strong><code>Documents/Gradaly/</code></strong> de su equipo (p. ej., <code>~/Documents/Gradaly/</code> en macOS/Linux o <code>C:\\Users\\SuNombre\\Documents\\Gradaly\\</code> en Windows), con una subcarpeta independiente por proyecto.</p><p>Dentro de cada carpeta de proyecto, toda la información se guarda en formatos abiertos y transparentes:<ul><li><strong>Archivos PDF:</strong> la plantilla en blanco del examen (<code>canvas.pdf</code>), el solucionario opcional (<code>solution.pdf</code>) y las copias individuales de los estudiantes dentro de <code>copies/</code> (<code>copie_01.pdf</code>, <code>copie_02.pdf</code>, etc.).</li><li><strong>Archivos JSON en texto plano:</strong> las zonas de preguntas y la rúbrica (<code>config.json</code>), la lista de estudiantes con nombres, matrículas y correos (<code>students.json</code>), la tabla de emparejamiento OCR (<code>matching.json</code>) y la evaluación y retroalimentación de cada copia dentro de <code>gradings/</code> (<code>copie_01.json</code>, etc.).</li></ul></p><p><strong>⚠️ Recomendación importante:</strong> Aunque esta estructura abierta facilita realizar copias de seguridad de su carpeta <code>Documents/Gradaly</code> (con Time Machine, Nextcloud, OneDrive, etc.), <strong>desaconsejamos modificar, renombrar o mover archivos manualmente dentro de la carpeta de un proyecto</strong>, ya que los cambios manuales pueden romper referencias internas y dañar el proyecto.</p>"
                },
                {
                    q: "¿Dónde se almacenan mis claves API y es seguro?",
                    a: "<p>Sus claves API de IA (Gemini, OpenRouter, OpenAI, Anthropic) se guardan <strong>exclusivamente de forma local en su propio ordenador</strong> dentro del archivo oculto de configuración <code>.gradaly_settings.json</code> ubicado en su directorio personal (<code>~/.gradaly_settings.json</code> en macOS/Linux o <code>C:\\Users\\SuNombre\\.gradaly_settings.json</code> en Windows).</p><p><strong>Garantías de seguridad:</strong><ul><li>Sus claves API <strong>jamás se envían a ningún servidor de Gradaly</strong> y <strong>nunca se incluyen al exportar o compartir un archivo de proyecto <code>.gradaly</code></strong> con colegas.</li><li>Al utilizar el asistente de rúbrica o la precorrección por IA, su ordenador se comunica <strong>directamente mediante HTTPS cifrado (TLS 1.3)</strong> con el servidor API oficial del proveedor elegido (Google, OpenRouter, OpenAI, Anthropic o el servidor de su universidad).</li><li>Puede revocar, rotar o fijar un límite mensual de gasto en su clave API en cualquier momento desde el panel de su proveedor.</li></ul></p>"
                },
                {
                    q: "¿Dónde se almacenan los datos al publicar un examen en la nube o generar un enlace compartido, y quién tiene acceso a ellos?",
                    a: "<p>Al publicar un examen en el <strong>Portal Web Estudiantil</strong> o generar un <strong>Enlace Cloud colaborativo</strong>, <strong>cada archivo se cifra localmente en su ordenador mediante <code>AES-256-GCM</code> antes de que un solo byte salga de su equipo</strong>. Únicamente se suben bloques binarios cifrados e ilegibles (<code>.enc</code>) a nuestro almacenamiento europeo en la nube (alojado en la UE con caducidad automática).</p><p>La clave secreta de descifrado (<code>#k=...</code>) se inserta exclusivamente en el fragmento de la URL posterior al símbolo <code>#</code>. Por estándar web (RFC 3986), los navegadores <strong>nunca transmiten al servidor la parte posterior a <code>#</code></strong>. En consecuencia, <strong>ni siquiera los creadores de Gradaly pueden leer sus archivos en la nube, ni un atacante que comprometiera la infraestructura podría ver nada</strong>, pues todo permanece cifrado y solo usted (y los destinatarios a quienes entregue el enlace generado) poseen la clave.</p>"
                },
                {
                    q: "¿Por qué Gradaly es una aplicación de escritorio y no una herramienta web? ¿Cuál es la visión de Gradaly?",
                    a: "<p>Optamos por una arquitectura nativa de escritorio (macOS, Windows, Linux) por dos razones fundamentales:</p><p>1) <strong>Soberanía inmediata de los datos:</strong> Nunca tiene que subir listas nominativas de estudiantes ni escaneos sin cifrar a bases de datos SaaS de terceros simplemente para organizar y emparejar su examen.</p><p>2) <strong>Nuestra visión a largo plazo (IA local 100 % autónoma):</strong> El hardware especializado y los modelos multimodales de pesos abiertos avanzan con enorme rapidez. <strong>La visión de Gradaly es que, en pocos años, modelos de visión y lenguaje altamente capaces se ejecutarán directamente en el portátil del docente</strong> (o en un servidor departamental local). Al ser una aplicación nativa con compatibilidad integrada para servidores locales (Ollama / vLLM / servidores institucionales), el profesorado será <strong>100 % autónomo</strong>, evaluando exámenes sin conexión, sin dependencia de la nube y con coste cero en tokens.</p>"
                },
                {
                    q: "¿Cuáles son las diferencias frente a las plataformas web tradicionales de corrección o los evaluadores comerciales de IA en la nube?",
                    a: "<p><strong>Frente a las plataformas web tradicionales de corrección:</strong> Las herramientas basadas en navegador ofrecen ventajas reales en determinados contextos — colaboración simultánea en tiempo real sin fusionar archivos, lectura avanzada de hojas ópticas de opción múltiple y agrupación automática de respuestas cortas. Sin embargo, no incorporan precorrección multimodal por IA para desarrollos manuscritos abiertos, no ofrecen un asistente de IA para codiseñar rúbricas y otorgan menor control sobre los datos estudiantiles (almacenados en claro en servidores externos). Gradaly puede utilizarse en <strong>Modo 100 % Humano</strong> con el mismo rigor de evaluación por rúbrica, añadiendo codiseño opcional con IA, precorrección multimodal y control local absoluto de los datos.</p><p><strong>Frente a los evaluadores comerciales de IA en la nube:</strong> Dichas plataformas suelen imponer un único modelo cerrado de IA y aplicar elevados márgenes mediante la venta de «paquetes de créditos de IA» propietarios. Gradaly le otorga <strong>plena libertad de elección del modelo</strong> (Gemini, GPT, Claude, Mistral, OpenRouter o un servidor universitario/local gratuito) y <strong>cobra un 0 % de comisión sobre el consumo de IA</strong>.</p>"
                },
                {
                    q: "¿Qué atajos de teclado están disponibles para navegar y calificar con fluidez?",
                    a: "<p>Gradaly está diseñado para que pueda recorrer y evaluar toda una promoción sin tocar el ratón. Pulse <strong><code>?</code></strong> en cualquier momento (o haga clic en el icono <strong><code>⌨️</code></strong> de la barra superior) para abrir el recordatorio integrado de atajos de teclado:</p><ul><li><strong><code>↑</code> / <code>↓</code> (o <code>K</code> / <code>J</code>):</strong> Copia o estudiante anterior / siguiente (funciona en las pestañas <em>Estudiantes</em>, <em>Copias</em>, <em>Emparejamiento</em> y <em>Evaluación</em>).</li><li><strong><code>←</code> / <code>→</code> (o <code>H</code> / <code>L</code>):</strong> Pregunta anterior / siguiente (en <em>Plantilla y preguntas</em> y <em>Evaluación</em>), o página PDF anterior / siguiente (en <em>Copias</em>).</li><li><strong><code>Mayús + ←</code> / <code>Mayús + →</code> (o <code>RePág</code> / <code>AvPág</code>):</strong> Pasar páginas del PDF dentro de la pestaña <em>Evaluación</em> sin cambiar la pregunta activa.</li><li><strong><code>1</code> a <code>9</code> (fila superior o teclado numérico):</strong> Marcar / desmarcar el criterio n.º 1 a n.º 9 de la pregunta activa.</li><li><strong><code>V</code>:</strong> Alternar la validación manual humana en la pregunta activa.</li><li><strong><code>Esc</code>:</strong> Salir de cualquier campo de texto (Retroalimentación, Justificación o Búsqueda) para reactivar al instante las flechas y atajos numéricos.</li><li><strong><code>Cmd/Ctrl + +</code> / <code>-</code> / <code>0</code>:</strong> Aumentar / reducir / restablecer el tamaño del texto de la interfaz.</li></ul>"
                },
                {
                    q: "¿Cómo importo las calificaciones y los enlaces de consulta estudiantil en Moodle?",
                    a: "<p>Gradaly incorpora una herramienta específica de <strong>🎓 Exportación a Moodle (CSV)</strong> (accesible tanto desde la ventana del <strong>Portal Web en línea</strong> como desde el botón principal <strong>Exportar</strong>) compatible con los dos flujos oficiales de Moodle:</p><p><strong>1. Importación directa por CSV al Libro de calificaciones de Moodle:</strong><ul><li>En Gradaly, elija <strong>1. Libro de calificaciones de Moodle (CSV directo)</strong>, seleccione la escala de calificación (total bruto del examen, <code>/20</code> o <code>/100</code>) y el contenido de retroalimentación (enlace clicable a la copia cifrada del estudiante en <code>portal.gradaly.io</code> + desglose de puntos por pregunta), y exporte el archivo CSV UTF-8.</li><li>En su curso de Moodle, abra la pestaña <strong>Calificaciones</strong>, despliegue el menú superior izquierdo (<strong>Informe del calificador</strong>) → <strong>Importar</strong> → <strong>Archivo CSV</strong> y suba el archivo generado.</li><li>En <em>Identificar usuario por</em>, asocie <code>Número de ID</code> (Matrícula) con <code>Número de ID</code> (o <code>Dirección de correo</code> con <code>Dirección de correo</code>). En <em>Asignación de elementos de calificación</em>, asocie la columna <code>Nota</code> a su actividad (o a un <em>Nuevo elemento de calificación</em>) y la columna <code>Feedback</code> al campo correspondiente de <strong>Comentarios</strong>.</li></ul></p><p><strong>2. Hoja de calificaciones sin conexión de una Tarea de Moodle (sin mapeo manual de columnas):</strong><ul><li>En los ajustes de su actividad <em>Tarea</em> en Moodle, active <em>Hoja de calificaciones sin conexión</em> y <em>Comentarios de retroalimentación</em> dentro de <em>Tipos de retroalimentación</em>, y descargue el CSV desde <em>Ver todas las entregas → Acción de calificación: Descargar hoja de calificaciones</em>.</li><li>En Gradaly, seleccione <strong>2. Completar una hoja de Tarea de Moodle</strong> y elija ese archivo CSV: ¡Gradaly empareja automáticamente a todos los estudiantes por número de ID o correo electrónico y rellena las columnas de calificación y comentarios para que pueda volver a subir el archivo directamente a Moodle!</li></ul></p>"
                },
                {
                    q: "¿Puedo enviar los correos de notificación desde mi propia cuenta universitaria (Outlook Web, Word + Outlook, Thunderbird) mediante combinación de correspondencia?",
                    a: "<p><strong>¡Sí!</strong> En la ventana <strong>✉️ Notificar por correo electrónico</strong> del Portal Web en línea, cambie a la segunda pestaña: <strong>📊 Combinación de correspondencia (Mi cliente de correo)</strong>. Puede personalizar el asunto y el mensaje (usando variables opcionales como <code>{prenom}</code>, <code>{nom}</code>, <code>{matricule}</code>, <code>{note}</code>, <code>{max}</code>, <code>{lien}</code>) y exportar en 3 formatos específicos: un <strong>Origen de datos Word <code>.docx</code></strong> (para Word + Outlook de escritorio), un <strong>libro Excel <code>.xlsx</code></strong> (con una tabla formal llamada <code>Publipostage</code> para Microsoft 365 / Power Automate) o un <strong>archivo <code>.csv</code> UTF-8</strong> (para Thunderbird).</p><p><strong>¿Por qué resulta tan cómoda la exportación de combinación de correspondencia de Gradaly?</strong> Porque además de las columnas individuales (<code>EMAIL</code>, <code>PRENOM</code>, <code>NOM</code>, <code>MATRICULE</code>, <code>NOTE</code>, <code>MAX</code>, <code>NOTE_SUR_MAX</code>, <code>LIEN_COPIE</code>), el archivo exportado incluye también <strong>columnas ya ensambladas y listas para enviar a cada estudiante</strong>: <code>SUJET_PRET</code> (asunto), <code>MESSAGE_TEXTE_PRET</code> (correo completo en texto plano) y <code>MESSAGE_HTML_PRET</code> (correo completo en HTML). Solo necesita insertar ese único campo:</p><ul><li><strong>💼 Microsoft Word + Outlook clásico de escritorio (Windows y Mac):</strong> Pulse <strong>Exportar para Word (<code>.docx</code>)</strong> en Gradaly. En Word, abra <em>Correspondencia → Seleccionar destinatarios → Usar una lista existente…</em> y elija el archivo <code>.docx</code> exportado (a diferencia de <code>.xlsx</code> en macOS, una tabla nativa <code>.docx</code> se abre al instante sin alertas del convertidor de Excel ni bloqueos de permisos). Inserte el campo <code>«MESSAGE_TEXTE_PRET»</code> y pulse <em>Finalizar y combinar → Enviar mensajes de correo electrónico…</em> (Para: <code>EMAIL</code>).</li><li><strong>🌐 Outlook Web (Microsoft 365 en navegador) mediante Power Automate:</strong> Pulse <strong>Exportar en Excel (<code>.xlsx</code>)</strong> y suba el archivo a su OneDrive universitario. En Microsoft Power Automate (<code>make.powerautomate.com</code>), cree un flujo en la nube instantáneo con 2 pasos: <em>Excel Online (Business) → Enumerar las filas presentes en una tabla</em> (apuntando al archivo y a la tabla <code>Publipostage</code>) seguido de <em>Office 365 Outlook → Enviar un correo electrónico (V2)</em> seleccionando <code>Para = EMAIL</code>, <code>Asunto = SUJET_PRET</code> y <code>Cuerpo = MESSAGE_HTML_PRET</code>. Para grupos reducidos o reenvíos puntuales, también puede pulsar <strong>Outlook Web</strong> directamente en cualquier fila de estudiante dentro de Gradaly para abrir el correo prerrellenado en <code>outlook.office.com</code>.</li><li><strong>🦅 Mozilla Thunderbird (Windows, macOS, Linux):</strong> Con el complemento gratuito <em>Mail Merge</em>, redacte un mensaje nuevo poniendo <code>{{EMAIL}}</code> en <em>Para</em>, <code>{{SUJET_PRET}}</code> en <em>Asunto</em> y <code>{{MESSAGE_TEXTE_PRET}}</code> en el cuerpo, y ejecute <em>Mail Merge → CSV</em> con el archivo <code>.csv</code> exportado.</li></ul>"
                },
                {
                    q: "¿Dónde puedo enviar sugerencias o informar de errores?",
                    a: "<p>¡Agradecemos enormemente sus comentarios, propuestas de mejora y reportes de fallos! Puede abrir una incidencia directamente en nuestro repositorio de GitHub aquí: <a href=\"https://github.com/gradaly/gradaly-website/issues\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-indigo-600 font-bold hover:underline\">https://github.com/gradaly/gradaly-website/issues</a>.</p>"
                }
            ]
        },

        // =========================================================================
        // GUIDE 2: PRACTICE & SELF-ASSESSMENT QR MODE (P1 to P5) — 100% SELF-CONTAINED
        // =========================================================================
        {
            id: "practice-getting-started",
            guide: "practice",
            stepNumber: "P1",
            partHeader: "Manual 2 — Modo Práctica y Autoevaluación QR (Estudiante)",
            partColor: "teal",
            partBanner: {
                kicker: "Manual 2 • Producto 2: Modo Práctica QR formativo",
                title: "Guía completa para la autoevaluación autónoma estudiantil mediante guías PDF con códigos QR",
                desc: "Guía 100 % autónoma: diseñe una guía de ejercicios en PDF con códigos QR incrustados para que los estudiantes resuelvan en papel, escaneen con su smartphone y reciban retroalimentación formativa inmediata por IA (sin requerir clave API en portal.gradaly.io, o con clave personal de Gemini opcional)."
            },
            tag: "Modo Práctica QR • Paso 1 — Concepto y creación del proyecto",
            badge: "Formativo • Práctica autónoma del estudiante",
            shortTitle: "Concepto y creación de un proyecto de práctica",
            title: "Cómo funciona el Modo Práctica QR y cómo crear un proyecto de práctica",
            subtitle: "Ofrezca a sus estudiantes práctica ilimitada en papel con retroalimentación inmediata por IA en su smartphone — sin recoger ni una copia ni exponer su clave API docente.",
            paragraphs: [
                "<strong>Objetivo pedagógico del Modo Práctica QR (insignia <code>Practice</code>):</strong> Antes de un examen parcial o final, los estudiantes necesitan ejercitarse resolviendo problemas a mano sobre papel (seminarios prácticos, guías de ejercicios, tareas, exámenes de convocatorias anteriores). Sin embargo, rara vez resulta viable recoger y corregir cientos de hojas de ejercicios semanales. <strong>El Modo Práctica QR transforma cualquier hoja de problemas en PDF en un tutor interactivo de autoevaluación:</strong><br>1. <strong>El docente</strong> prepara la guía de ejercicios en PDF, define los criterios de calificación (y el solucionario de referencia opcional), ubica los códigos QR sobre el PDF y publica un portal web estático cifrado.<br>2. <strong>El estudiante</strong> imprime la guía en PDF (o la consulta en tableta o pantalla), redacta sus desarrollos matemáticos o respuestas argumentadas en papel, <strong>escanea el código QR del ejercicio con su smartphone</strong>, fotografía su trabajo manuscrito y recibe <strong>retroalimentación formativa inmediata criterio por criterio</strong>.",
                "<strong>Cero exposición de la clave API del docente — Relé de IA integrado o clave personal del estudiante:</strong> A diferencia del Modo Examen, donde el docente ejecuta la evaluación sobre copias recogidas, en el Modo Práctica <strong>no existen listas de estudiantes, ni copias escaneadas, ni claves API del profesor en el portal publicado</strong>. Al publicar en <code>portal.gradaly.io</code>, los estudiantes pueden evaluar sus respuestas manuscritas <strong>de inmediato y sin configurar ninguna clave API</strong> gracias al relé de IA integrado de Gradaly (idóneo para todo el alumnado, incluidos menores de edad), o bien introducir opcionalmente su propia clave personal de Google AI Studio (Gemini) en el navegador de su móvil.",
                "<strong>Interfaz simplificada de 3 pestañas:</strong> En la Pantalla de bienvenida, pulse <strong>Nuevo proyecto → Práctica (Autoevaluación estudiantil por código QR)</strong> (o haga clic en <strong>Crear proyecto de demo → Demo Práctica</strong> para explorar una guía completa de Trigonometría). Un proyecto de Práctica abre un <strong>espacio de trabajo claro de 3 pestañas</strong>: <code>1. Plantilla y preguntas</code>, <code>2. Ubicación de códigos QR</code> y <code>3. Publicación Web</code>."
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "Pantalla de bienvenida: los proyectos de práctica se distinguen por la insignia verde azulada «Practice» junto a sus proyectos de Examen"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "Ventana de creación de demo: seleccione «Practice Project (QR Self-Assessment)» para abrir una hoja de ejercicios con QR lista para probar"
                }
            ],
            callouts: [
                {
                    title: "Flujo en papel + smartphone",
                    desc: "El alumnado sigue escribiendo desarrollos matemáticos, demostraciones y diagramas reales a mano en papel mientras recibe tutoría inmediata mediante la cámara de su móvil."
                },
                {
                    title: "Cero copias que recoger, cero listas",
                    desc: "Un proyecto de Práctica carece de pestaña de estudiantes o copias: está 100 % dedicado al entrenamiento formativo autónomo."
                },
                {
                    title: "Sin configurar claves en portal.gradaly.io",
                    desc: "Los estudiantes disponen de evaluación por IA inmediata en portal.gradaly.io (o pueden introducir opcionalmente su propia clave personal de Gemini)."
                },
                {
                    title: "Demo de Práctica integrada al instante",
                    desc: "Inicie la Demo de Práctica desde la Pantalla de bienvenida para inspeccionar una guía completa de 10 ejercicios con QR y solucionario de referencia."
                }
            ]
        },
        {
            id: "practice-canvas-and-rubric",
            guide: "practice",
            stepNumber: "P2",
            partColor: "teal",
            tag: "Modo Práctica QR • Paso 2 — Guía, solucionario y rúbrica",
            badge: "Guía 100 % autónoma",
            shortTitle: "PDF de ejercicios, solucionario y criterios",
            title: "Importación de su PDF de ejercicios, solucionario de referencia y diseño de criterios formativos",
            subtitle: "Enmarque cada ejercicio en su PDF en blanco, cargue su solucionario de referencia y construya criterios claros de autoevaluación manualmente o con el Asistente IA.",
            paragraphs: [
                "En la pestaña <strong>1. Plantilla y preguntas</strong> de su proyecto de Práctica (observe la barra superior simplificada de 3 pestañas y la ausencia de zona de identificación estudiantil), usted define los ejercicios y criterios de calificación que orientarán a la IA al analizar la fotografía tomada con el smartphone:",
                "<strong>1. Importar el PDF de ejercicios en blanco (<code>Plantilla</code>) y delimitar cada pregunta:</strong> Importe su hoja de trabajo en PDF y dibuje un rectángulo alrededor de cada ejercicio (<code>Q1</code>, <code>Q2</code>, ...). <strong>Importante:</strong> ¡incluya el enunciado impreso del ejercicio dentro del rectángulo! En el Modo Práctica, Gradaly recorta exactamente ese rectángulo para <strong>mostrar el enunciado en la pantalla del smartphone del estudiante</strong> y proporcionar contexto visual completo a la IA.",
                "<strong>2. Importar el PDF opcional del Solucionario de referencia (<code>Solucionario</code>):</strong> Use el conmutador <strong>Enunciado (Plantilla) / Solucionario</strong> situado sobre el visor PDF para cargar un documento con sus soluciones desarrolladas. Si el PDF del solucionario conserva la misma maquetación que la guía en blanco, las zonas se aplican automáticamente; si las páginas o posiciones difieren, cambie a la vista <em>Solucionario</em> y trace el rectángulo correspondiente a la solución de cada pregunta. En el Modo Práctica, el solucionario cumple tres funciones esenciales:<br>• <strong>Ayudar al Asistente IA de Rúbrica</strong> a proponer criterios precisos.<br>• <strong>Aportar la solución matemática de referencia a la IA</strong> al evaluar la fotografía del estudiante.<br>• <strong>Desbloquear visualmente la solución modelo en el smartphone del estudiante</strong> una vez que haya enviado al menos un primer intento manuscrito.",
                "<strong>3. Definir las reglas de puntuación y criterios (puramente aditivos o puramente sustractivos):</strong><br>• Gradaly calcula <code>Puntuación = Nota base + Σ (criterios validados)</code>, acotada entre <code>0</code> y <code>Puntuación máxima</code>.<br>• Elija una <strong>rúbrica puramente aditiva</strong> (<code>Nota base = 0</code>, criterios positivos <code>+1</code>, <code>+2</code> por cada paso correcto) o una <strong>rúbrica puramente sustractiva</strong> (<code>Nota base = Puntuación máxima</code>, penalizaciones negativas <code>-0.5</code>, <code>-1</code>). Evite combinar pesos positivos y negativos en una misma pregunta. También puede vincular alternativas consecutivas en grupos mutuamente excluyentes <strong><code>OR</code></strong> y alternar entre vista previa KaTeX y edición con el botón unificado <strong>Render / Edit</strong>.<br>• Utilice el cuadro inferior (<strong>Instrucciones y lógica de corrección / Prompt IA</strong>) para detallar orientaciones pedagógicas o pegar el enunciado en texto si fuera necesario.",
                "<strong>4. Utilizar el Asistente IA de Rúbrica (<code>Diseñar / Modificar con IA</code>):</strong> Haga clic en <strong>Diseñar / Modificar con IA</strong> sobre la lista de criterios para que la IA redacte automáticamente un borrador de rúbrica formativa a partir del enunciado y del solucionario, y ajústelo mediante chat."
            ],
            screenshots: [
                {
                    filePrefix: "13a_practice_questions",
                    caption: "Modo Práctica — 1. Pestaña Plantilla y preguntas: cabecera de 3 pestañas, zonas de ejercicios, criterios formativos y conmutador Enunciado / Solucionario"
                },
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "Asistente IA de Rúbrica: codiseñe criterios formativos e instrucciones a partir tanto del enunciado del ejercicio como de su solucionario de referencia"
                }
            ],
            callouts: [
                {
                    title: "Recorte del enunciado visible en el móvil",
                    desc: "La zona trazada sobre el PDF de la plantilla se recorta automáticamente y se muestra en la parte superior del smartphone del estudiante."
                },
                {
                    title: "Solucionario de referencia",
                    desc: "Guía a la IA durante el análisis y puede revelarse automáticamente al estudiante tras su primer intento manuscrito."
                },
                {
                    title: "Criterios puramente aditivos o sustractivos",
                    desc: "Un desglose claro paso a paso ayuda al estudiante a identificar con exactitud qué parte de su razonamiento es correcta o requiere revisión."
                },
                {
                    title: "Asistente IA de Rúbrica integrado",
                    desc: "Genere una rúbrica formativa completa a partir de su PDF de ejercicios y su solucionario en pocos segundos."
                }
            ]
        },
        {
            id: "practice-qr-placement",
            guide: "practice",
            stepNumber: "P3",
            partColor: "teal",
            tag: "Modo Práctica QR • Paso 3 — Ubicación de códigos QR y PDF imprimible",
            badge: "Incluido en versión Gratuita y Pro",
            shortTitle: "Ubicación QR y PDF imprimible",
            title: "Posicionamiento de códigos QR en su PDF y descarga de la guía imprimible",
            subtitle: "Coloque un código QR general (para toda la hoja) y/o códigos QR individuales directamente dentro del recuadro de cada ejercicio.",
            paragraphs: [
                "Abra la pestaña <strong>2. Ubicación de códigos QR</strong> para definir dónde se insertarán los códigos QR de autoevaluación en su hoja de ejercicios:",
                "<strong>1. Código QR general frente a códigos QR por pregunta:</strong><br>• <strong>Código QR general (toda la sesión):</strong> Situado por defecto en la parte superior de la página 1. Al escanearlo se abre el portal móvil con el listado completo de ejercicios.<br>• <strong>Códigos QR por pregunta (<code>QR Q1</code>, <code>QR Q2</code>, ...):</strong> Incrustados directamente dentro del recuadro de cada ejercicio en el PDF. Cuando un estudiante escanea <code>QR Q1</code> con la cámara de su teléfono, su smartphone se abre <strong>directamente en la Pregunta 1</strong> (<code>?q=Q1</code>), listo para fotografiar su respuesta.",
                "<strong>2. Arrastrar y soltar interactivo y alineación rápida en esquinas:</strong> Haga clic en cualquier pregunta de la lista izquierda para ir a su página. Arrastre cualquier etiqueta QR con el ratón sobre el PDF para evitar cubrir fórmulas o gráficos, o utilice los botones rápidos <code>Superior derecha</code>, <code>Superior izquierda</code> o <code>Inferior derecha</code>. Active o desactive códigos individuales mediante el icono del ojo.",
                "<strong>3. Descargar el PDF imprimible con códigos QR integrados:</strong> Pulse <strong>Descargar la guía PDF con códigos QR</strong>. Gradaly genera un documento PDF vectorial nítido con todos los códigos QR activos estampados en sus posiciones exactas, listo para imprimir o subir a Moodle/Canvas."
            ],
            screenshots: [
                {
                    filePrefix: "13_practice_qr",
                    caption: "Modo Práctica — 2. Pestaña Ubicación de códigos QR: lista izquierda de QR general y por pregunta, botones de ajuste a esquinas y posicionamiento interactivo en la página 2 (QR Q1 y QR Q2)"
                }
            ],
            callouts: [
                {
                    title: "Enlace directo por ejercicio (?q=Q1)",
                    desc: "Escanear el código QR de una pregunta abre exactamente ese ejercicio en el smartphone del estudiante sin pasos intermedios."
                },
                {
                    title: "Códigos QR permanentes ante cambios de rúbrica",
                    desc: "Incluso si más adelante ajusta los criterios y actualiza la publicación en línea, ¡los códigos QR ya impresos siguen siendo 100 % válidos!"
                }
            ]
        },
        {
            id: "practice-publish-and-student",
            guide: "practice",
            stepNumber: "P4",
            partColor: "teal",
            tag: "Modo Práctica QR • Paso 4 — Publicación del sitio web (Gradaly Pro) y app estudiantil",
            badge: "La publicación requiere Gradaly Pro",
            shortTitle: "Publicación web (Pro) y app estudiantil",
            title: "Publicación del sitio web de práctica estudiantil (Gradaly Pro) y experiencia del alumno",
            subtitle: "Mientras que la versión gratuita permite crear el proyecto y diseñar el PDF con códigos QR, Gradaly Pro desbloquea la publicación del sitio web estudiantil (en línea o .zip).",
            paragraphs: [
                "En la pestaña <strong>3. Publicación Web</strong>, configure el comportamiento pedagógico de la aplicación móvil y publique el sitio web de práctica estudiantil:",
                "<strong>1. Opciones pedagógicas de visibilidad:</strong><br>• <strong>Mostrar los criterios de la rúbrica antes del primer intento:</strong> Permita a los estudiantes conocer los pasos esperados de antemano, o mantenga ocultos los criterios hasta que envíen su primera fotografía.<br>• <strong>Mostrar la justificación detallada de la evaluación IA:</strong> Presenta explicaciones criterio por criterio junto con la retroalimentación formativa.<br>• <strong>Revelar el solucionario de referencia tras al menos un intento:</strong> Mantiene bloqueada su solución modelo hasta que el estudiante envíe un primer intento manuscrito.",
                "<strong>2. Vista previa en el simulador de smartphone integrado:</strong> Haga clic en <strong>Probar la aplicación estudiantil (Simulador)</strong> en la esquina superior derecha para previsualizar la interfaz móvil directamente dentro de Gradaly.",
                "<strong>3. Publicar el sitio web de práctica estudiantil en línea o exportar un <code>.zip</code> estático (Gradaly Pro):</strong> Mientras que la versión gratuita le permite crear su proyecto de Práctica y generar el PDF con códigos QR, <strong>Gradaly Pro</strong> habilita la publicación del sitio web estudiantil: pulse <strong>Publicar en 1 clic en portal.gradaly.io</strong> (cifrado en el cliente con <strong>AES-256-GCM</strong>, con disponibilidad elegible de <strong>60 días</strong>, <strong>180 días / 1 semestre</strong> o <strong>365 días / 1 año académico</strong>) o pulse <strong>Exportar como sitio web estático autónomo (.zip)</strong> para alojarlo en el servidor de su propia universidad.",
                "<strong>4. Experiencia paso a paso del estudiante en su smartphone:</strong><br>• El estudiante escanea el código QR impreso en su hoja de ejercicios.<br>• Si la sesión está alojada en <code>portal.gradaly.io</code>, la evaluación por IA funciona <strong>de inmediato sin introducir ninguna clave API</strong> (mediante el relé de IA integrado de Gradaly). Opcionalmente — o cuando se aloja como archivo <code>.zip</code> autónomo — el estudiante puede tocar el botón de <strong>Clave personal</strong> para pegar su propia <strong>clave API de Google AI Studio (Gemini)</strong> (guardada localmente en el navegador de su teléfono).<br>• El estudiante pulsa <strong>Tomar una foto de mi trabajo</strong>, fotografía su resolución manuscrita en papel y toca <strong>Evaluar mi respuesta con IA</strong> para recibir su puntuación, los criterios validados, la retroalimentación matemática en LaTeX y el solucionario desbloqueado.",
                "<strong>5. Ejemplo interactivo en directo (Guía PDF imprimible y Portal estudiantil):</strong><br>• 🇬🇧 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_EN.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Ver guía PDF imprimible con códigos QR (Demo EN)</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_7c576e0a7ff4729b&id=practice#k=fOTpaHBSuaFzzdN7AJYjSF_BKMgKaYcGQj6lyYljH10\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Abrir portal de práctica estudiantil en vivo (Demo EN)</a>"
            ],
            screenshots: [
                {
                    filePrefix: "14_practice_publish",
                    caption: "Modo Práctica — 3. Pestaña Publicación Web: opciones pedagógicas, desbloqueo del solucionario tras el primer intento, duración en línea (60/180/365 días) y publicación Cloud / ZIP en 1 clic (Gradaly Pro)"
                },
                {
                    filePrefix: "15_practice_student_portal",
                    caption: "Simulador integrado del smartphone del estudiante: previsualice la aplicación móvil donde el alumnado fotografía su resolución en papel y obtiene retroalimentación formativa inmediata"
                }
            ],
            callouts: [
                {
                    title: "Simulador de smartphone integrado (Gratis)",
                    desc: "Pruebe de forma gratuita su hoja de ejercicios, criterios y experiencia móvil dentro de Gradaly antes de publicar."
                },
                {
                    title: "Nube en 1 clic o ZIP estático (Gradaly Pro)",
                    desc: "Publique con cifrado AES-256-GCM en el cliente en portal.gradaly.io (60/180/365 días) o exporte un paquete .zip autónomo."
                },
                {
                    title: "Relé de IA integrado o clave personal",
                    desc: "En portal.gradaly.io, los estudiantes pueden autoevaluarse al instante sin configurar claves API, u opcionalmente introducir su clave gratuita de Gemini."
                },
                {
                    title: "Solucionario desbloqueado tras el esfuerzo",
                    desc: "Los estudiantes deben fotografiar y enviar un primer intento en papel antes de que se revele el solucionario del profesor."
                }
            ]
        },
        {
            id: "practice-faq",
            guide: "practice",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "teal",
            tag: "Preguntas frecuentes (FAQ)",
            badge: "Cifrado, acceso, relé de IA y privacidad",
            shortTitle: "Preguntas frecuentes",
            title: "Preguntas frecuentes (FAQ)",
            subtitle: "Respuestas a las preguntas frecuentes sobre el cifrado del sitio de Práctica, quién puede acceder, cómo se tratan las fotografías y claves API, y si el docente registra la actividad del alumnado.",
            paragraphs: [
                "A continuación encontrará respuestas a las consultas más habituales acerca del Modo Práctica y Autoevaluación QR de Gradaly."
            ],
            faqs: [
                {
                    q: "¿Por qué está cifrado el sitio web de Práctica?",
                    a: "<p><strong>Para proteger la propiedad intelectual del docente:</strong> Ni Gradaly ni ningún tercero tienen acceso al contenido publicado — es decir, a la hoja de ejercicios del profesor, al solucionario desarrollado (<code>Solucionario</code>) ni a los criterios e instrucciones de evaluación. Todo ese material constituye <strong>propiedad intelectual exclusiva del docente</strong>.</p><p>Antes de subir un solo byte a <code>portal.gradaly.io</code>, Gradaly cifra localmente todo el paquete de ejercicios en el ordenador del profesor mediante <strong><code>AES-256-GCM</code></strong>. La clave de descifrado (<code>#k=...</code>) se incorpora únicamente en el fragmento de la URL (y en los códigos QR) después del símbolo <code>#</code>, el cual los navegadores web jamás envían al servidor. El servidor solo aloja bloques binarios cifrados indescifrables.</p>"
                },
                {
                    q: "¿Quién tiene acceso a la aplicación de Práctica?",
                    a: "<p><strong>Únicamente las personas que dispongan del enlace o de los códigos QR con quienes el docente haya decidido compartirlos</strong> pueden acceder a la aplicación y descifrar los ejercicios en su navegador.</p><p>De este modo, el profesor puede distribuir la guía PDF imprimible (o el enlace) <strong>con total confidencialidad entre sus estudiantes</strong> (por ejemplo, en el aula virtual de la asignatura en Moodle/Canvas o impresa en clase) sin que los enunciados ni las soluciones queden expuestos públicamente en Internet. Por supuesto, dado que el acceso se basa en poseer el enlace o el código QR, cualquier persona externa podría acceder si dicho enlace o código QR se compartiera fuera del grupo.</p>"
                },
                {
                    q: "¿Necesita el estudiante una clave API y qué ocurre con la fotografía de su trabajo manuscrito?",
                    a: "<p>Según cómo utilice el estudiante el portal de Práctica, existen dos modos de funcionamiento — ambos con garantía de <strong>anonimato al 100 % y cero almacenamiento de imágenes</strong>:</p><p><strong>1. Modo predeterminado en <code>portal.gradaly.io</code> (Sin requerir clave API del estudiante):</strong><ul><li>Cuando el proyecto de Práctica está publicado en <code>portal.gradaly.io</code> y el estudiante no introduce una clave personal, la evaluación emplea el <strong>relé seguro de IA de Gradaly</strong> (haciéndolo accesible al instante para todos los estudiantes, incluidos menores de 18 años, sin crear cuentas).</li><li>En este modo, la fotografía de la respuesta manuscrita (junto con el prompt de evaluación del ejercicio) <strong>transita por el servidor relé de Gradaly</strong> únicamente para ser analizada por Gemini Flash.</li><li><strong>Garantía estricta de no almacenamiento:</strong> La imagen <strong>jamás se guarda en disco ni en la nube</strong>, permanece <strong>100 % anónima</strong> y se <strong>elimina inmediatamente de la memoria del servidor</strong> en cuanto la retroalimentación regresa al teléfono del estudiante.</li></ul></p><p><strong>2. Modo con clave API personal (Opcional en <code>portal.gradaly.io</code> o en un sitio <code>.zip</code> autónomo):</strong><ul><li>Si el estudiante introduce su propia clave API de Google Gemini mediante el botón de <em>Clave personal</em>, dicha clave se guarda <strong>exclusivamente en el almacenamiento local (<code>localStorage</code>) del navegador de su propio teléfono</strong> (nunca se envía a servidores de Gradaly ni resulta visible para el docente).</li><li>Al usar una clave personal, el navegador del estudiante se comunica <strong>directamente por HTTPS cifrado con el punto de enlace oficial de la API de Google Gemini</strong> sin pasar en ningún momento por el servidor de Gradaly.</li></ul></p>"
                },
                {
                    q: "¿Sabe el docente si un estudiante utiliza la aplicación?",
                    a: "<p><strong>No — el Modo Práctica QR es 100 % anónimo y autónomo.</strong> No existe inicio de sesión de estudiantes, ni lista de clase, ni seguimiento o registro enviado al profesor.</p><p>El docente no sabe qué estudiante escaneó un código QR, cuántos intentos realizó ni qué puntuación obtuvo. Este diseño deliberado crea un <strong>entorno formativo seguro y libre de presión evaluativa</strong> donde el alumnado puede practicar libremente en papel, equivocarse y comprobar su comprensión tantas veces como desee antes del examen.</p>"
                },
                {
                    q: "¿Qué permite la versión gratuita frente a Gradaly Pro en el Modo Práctica QR?",
                    a: "<p><strong>Versión gratuita (no Pro):</strong> Permite crear su proyecto de Práctica, importar el PDF de ejercicios y el solucionario de referencia, diseñar y calibrar sus criterios formativos (manualmente o con el Asistente IA de Rúbrica), posicionar los códigos QR, descargar el <strong>PDF imprimible con códigos QR incrustados</strong> y probar todo el flujo en el <strong>Simulador de smartphone</strong> integrado.</p><p><strong>Gradaly Pro:</strong> Desbloquea la <strong>publicación del sitio web de práctica estudiantil</strong> — ya sea en 1 clic en la nube cifrada <code>portal.gradaly.io</code> (durante 60, 180 o 365 días) o como sitio web estático autónomo en archivo <code>.zip</code> para alojarlo en el servidor de su universidad.</p>"
                },
                {
                    q: "¿Qué sucede si ajusto mis criterios de evaluación después de haber impreso o repartido la guía en PDF?",
                    a: "<p><strong>¡Los códigos QR impresos siguen siendo 100 % válidos!</strong> Cada proyecto de Práctica conserva un identificador permanente de publicación y su misma clave de cifrado. Si detecta una errata o refina la puntuación de un criterio en Gradaly después de entregar la guía en papel, basta con pulsar <strong>Actualizar la publicación en portal.gradaly.io</strong> en la pestaña <em>3. Publicación Web</em>: los estudiantes que escaneen exactamente los mismos códigos QR en papel recibirán de inmediato la rúbrica actualizada.</p>"
                }
            ]
        }
    ]
};
