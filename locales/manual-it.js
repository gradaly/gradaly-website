window.GRADALY_MANUAL_I18N = window.GRADALY_MANUAL_I18N || {};
window.GRADALY_MANUAL_I18N.it = {
    badge_manual: "Manuale Utente (2-in-1)",
    back_home: "Torna al Sito",
    download_btn: "Scarica Gradaly",
    hero_pill: "Applicazione Desktop 2-in-1 • Manuale Utente Completo v5.0.0",
    hero_title: "Manuale Utente Gradaly",
    hero_subtitle: "Valutare meglio, per formare meglio. Gradaly è un'applicazione 2-in-1 che offre due flussi di lavoro indipendenti: (1) la Modalità Esame per la valutazione di elaborati scansionati da parte del docente, e (2) la Modalità Esercitazione e Autovalutazione QR per lo studente su smartphone. Seleziona qui sotto la guida corrispondente al tuo flusso di lavoro:",
    search_placeholder: "Cerca in entrambe le guide (es. esame, esercitazione QR, griglia, OCR, chiave API, FAQ)...",
    card_exam_badge: "Strumento 1 • Valutazione del Docente",
    card_exam_chapters: "Capitoli E1–E9",
    card_exam_title: "Manuale 1: Modalità Esame (Per il Docente)",
    card_exam_desc: "Per appelli d'esame ufficiali, prove intermedie e verifiche scritte: scansiona gli elaborati degli studenti, abbina le identità al 100% offline tramite OCR, valuta manualmente, con l'IA o in commissione, e restituisci gli elaborati annotati.",
    card_practice_badge: "Strumento 2 • Autovalutazione dello Studente",
    card_practice_chapters: "Capitoli P1–P5",
    card_practice_title: "Manuale 2: Modalità Esercitazione e Autovalutazione QR (Per lo Studente)",
    card_practice_desc: "Per esercitazioni, fogli di problemi e schede di studio autonomo: integra codici QR sul tuo PDF di esercizi affinché gli studenti lavorino su carta, scansionino con lo smartphone e ricevano un feedback formativo IA immediato.",
    filter_label: "Mostra:",
    filter_exam: "1. Guida Esame (E1–E9)",
    filter_practice: "2. Guida Esercitazione QR (P1–P5)",
    filter_all: "Mostra Tutti i Capitoli",
    filter_hint: "Ogni manuale è completo e autonomo al 100% — non è necessario leggerli entrambi!",
    switch_guide_kicker: "Esplora il Secondo Strumento di Gradaly",
    btn_go_practice: "Apri Manuale 2: Modalità Esercitazione QR",
    btn_go_exam: "Apri Manuale 1: Modalità Valutazione Esame",
    toc_title: "Indice dei Contenuti",
    sidebar_exam_mode: "Modalità Esame",
    sidebar_practice_mode: "Esercitazione QR",
    screenshot_badge: "Interfaccia EN",
    privacy_box_title: "Riservatezza Studenti 100% Locale",
    privacy_box_text: "Elenchi degli studenti, aree di identificazione, abbinamento OCR e file di progetto sono archiviati localmente in Documents/Gradaly sul tuo computer. I portali Cloud e i link di condivisione usano crittografia lato client AES-256-GCM Zero-Knowledge.",
    sections: [
        // =========================================================================
        // GUIDE 1: EXAM GRADING MODE (E1 to E9) — 100% SELF-CONTAINED
        // =========================================================================
        {
            id: "exam-getting-started",
            guide: "exam",
            stepNumber: "E1",
            partHeader: "Manuale 1 — Modalità Esame (Docente)",
            partColor: "indigo",
            partBanner: {
                kicker: "Manuale 1 • Strumento 1: Valutazione d'Esame",
                title: "Guida Completa alla Valutazione d'Esame per il Docente (100% Manuale, Assistita dall'IA e in Commissione)",
                desc: "Guida autonoma per valutare elaborati scansionati degli studenti — dalla progettazione della griglia all'abbinamento OCR offline, fino alla correzione manuale o con IA, fusione in team e restituzione."
            },
            tag: "Modalità Esame • Fase 1 — Creazione di un Progetto d'Esame",
            badge: "100% Manuale o Assistita dall'IA",
            shortTitle: "Creare un Progetto d'Esame",
            title: "Creazione di un Progetto d'Esame e Flussi di Lavoro 100% Manuale vs IA",
            subtitle: "Avvia un nuovo progetto Esame (oppure apri la Demo Esame da 20 elaborati) per valutare i compiti scansionati degli studenti sul tuo computer.",
            paragraphs: [
                "<strong>Che cos'è un Progetto d'Esame (badge <code>Esame</code>)?</strong> Un progetto Esame è pensato per ogni verifica scritta in cui il docente raccoglie i compiti cartacei degli studenti, li scansiona in PDF e valuta il corso — inclusi <strong>appelli ufficiali, prove intermedie ed esoneri scritti</strong>. Mette a disposizione <strong>6 schede dedicate</strong> nella barra superiore: <code>1. Modello e Domande</code>, <code>2. Studenti</code>, <code>3. Elaborati</code>, <code>4. Abbinamento</code>, <code>5. Valutazione</code> e <code>6. Sintesi e Statistiche</code>.",
                "<strong>Modalità 100% Manuale o Assistita dall'IA:</strong> <strong>Non</strong> è necessaria una chiave API IA per valutare un esame in Gradaly. Fin dal primo avvio, Gradaly funziona in <strong>Modalità 100% Manuale</strong> con scorciatoie rapide da tastiera (<code>1–9</code> per attivare/disattivare i criteri, <code>J</code>/<code>K</code> per scorrere gli studenti), ricalcolo dinamico dei punteggi sull'intero corso a ogni modifica dei pesi nella griglia di valutazione e feedback formattato in Markdown e KaTeX. In qualsiasi momento puoi collegare una chiave API IA per abilitare l'<strong>Assistente IA per la Griglia di Valutazione</strong> e la <strong>Pre-valutazione IA Multimodale</strong>, mantenendo sempre al 100% la decisione finale del docente.",
                "<strong>Lingua dedicata per progetto (indipendente dalla lingua dell'interfaccia):</strong> Alla creazione di un nuovo progetto, seleziona esplicitamente la <strong>Lingua del progetto</strong> (italiano, inglese, francese, tedesco, spagnolo, ecc.) — sempre visualizzabile o modificabile cliccando sul badge con la bandiera accanto al titolo nell'intestazione o in <strong>Impostazioni IA del Progetto</strong>. Tale lingua governa griglie generate, istruzioni IA, feedback agli studenti e tutte le esportazioni (PDF annotati, Excel, CSV Moodle, tagliandi QR, Portale Web e Modalità Esercitazione QR), anche se l'interfaccia desktop di Gradaly usa un'altra lingua.",
                "Dalla <strong>Schermata di Benvenuto</strong>, clicca su <strong>Nuovo progetto</strong> e seleziona <strong>Esame (Valutazione di elaborati scansionati)</strong>, oppure clicca su <strong>Crea progetto demo → Demo Esame</strong> per esplorare un esame completo di Fisica pronto all'uso con 20 elaborati manoscritti e una Soluzione di riferimento."
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "Schermata di Benvenuto: i progetti d'esame sono contraddistinti dal badge indaco 'Exam' e salvati localmente in Documents/Gradaly"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "Finestra Creazione Demo: seleziona 'Demo Esame' per generare una demo offline completa con 20 elaborati valutati"
                }
            ],
            callouts: [
                {
                    title: "Ambiente d'Esame Dedicato a 6 Schede",
                    desc: "Modello e Domande → Studenti → Elaborati → Abbinamento OCR Offline → Console di Valutazione a 3 Pannelli → Statistiche ed Esportazioni."
                },
                {
                    title: "Funziona al 100% Offline e Manualmente",
                    desc: "Valuta manualmente con rapidità tramite scorciatoie da tastiera, oppure combina pre-valutazione IA e convalida del docente."
                },
                {
                    title: "Demo Esame Integrata da 20 Elaborati",
                    desc: "Prova subito l'intero flusso d'esame senza dover scansionare nulla grazie alla Demo Esame integrata."
                },
                {
                    title: "File 100% Locali in Documents/Gradaly",
                    desc: "Tutti i PDF, gli elenchi studenti e le valutazioni restano sul tuo computer in normali cartelle — nessun cloud obbligatorio."
                }
            ]
        },
        {
            id: "exam-canvas-and-rubric",
            guide: "exam",
            stepNumber: "E2",
            partColor: "indigo",
            tag: "Modalità Esame • Fase 2 — Modello, Area ID e Griglia",
            badge: "Fondamentale per una Valutazione Rigorosa",
            shortTitle: "Modello, Area ID e Criteri",
            title: "Definizione dell'Area Identificativa Studente, dei Riquadri Domande, della Regola di Punteggio e della Soluzione di Riferimento",
            subtitle: "Importa il PDF vuoto della traccia d'esame, inquadra l'intestazione studente per l'OCR offline e definisci domande e griglia di valutazione.",
            paragraphs: [
                "Nella scheda <strong>1. Modello e Domande</strong> di un progetto Esame, inizia importando il PDF vuoto della traccia d'esame (<code>Modello</code>). Traccerai quindi due tipologie di aree rettangolari sulle pagine del PDF:",
                "<strong>1. Traccia l'Area di Identificazione dello Studente (<code>ID</code>):</strong> Clicca sul pulsante <strong>Area di identificazione dello studente (Nome / Matricola)</strong> nel pannello di sinistra e traccia un rettangolo sulla Pagina 1 nel punto in cui gli studenti scrivono cognome, nome e numero di matricola. Gradaly ritaglierà quest'area su ciascun elaborato per eseguire l'<strong>abbinamento OCR al 100% offline</strong> con l'elenco degli iscritti.",
                "<strong>2. Traccia il Riquadro di Ogni Domanda e Scegli l'Origine della Consegna IA (<code>Elaborato studente</code> vs <code>Modello</code>):</strong> Quando avvii la valutazione IA sull'elaborato di uno studente, Gradaly ritaglia l'area rettangolare tracciata per quella domanda e la invia al modello Vision scelto insieme ai criteri di valutazione.<br>• <strong>Area Unica Combinata (Predefinita):</strong> Ogni volta che l'impaginazione lo consente, includi in un unico rettangolo sia il testo stampato della domanda sia il riquadro di risposta dello studente. Per impostazione predefinita (<code>Consegna IA: Elaborato studente</code>), Gradaly ritaglia quel rettangolo <strong>direttamente dall'elaborato dello studente (<code>copies/copie_XXX.pdf</code>)</strong> — così, se ciascun compito presenta valori numerici personalizzati, l'IA legge esattamente i parametri e lo svolgimento di quello studente.<br>• <strong>Separazione tra Consegna e Risposta (<code>Separa consegna / risposta</code>) e Selettore <code>Consegna IA</code>:</strong> Se il testo della domanda e lo spazio di risposta si trovano su pagine diverse o sono separati da altri contenuti, clicca su <strong>Separa consegna / risposta</strong> per definire due aree distinte (<code>Consegna</code> e <code>Risposta elaborato</code>) e scegli da quale documento ritagliare la parte della consegna:<br>&nbsp;&nbsp;– <strong><code>Elaborato studente</code> (<code>Copie étudiant</code>):</strong> Sia l'area della consegna sia l'area della risposta vengono ritagliate dall'<strong>elaborato del singolo studente</strong> e composte verticalmente (indispensabile in presenza di dati numerici o tracce personalizzate per studente).<br>&nbsp;&nbsp;– <strong><code>Modello</code> (<code>Canevas</code>):</strong> L'area della consegna viene ritagliata dal modello vuoto (<code>canvas.pdf</code>) e posizionata sopra l'area di risposta dello studente (ideale quando gli studenti scrivono su fogli protocollo o moduli risposta che non riportano il testo stampato del quesito).",
                "<strong>3. Punteggio di Base (<code>Note de base</code>), Punteggio Max (<code>Score max</code>), Limitazione e <code>Max possibile</code>:</strong><br>• <strong>Formula di calcolo:</strong> Gradaly parte dal <strong>Punteggio di base</strong> della domanda, somma i punti di tutti i criteri soddisfatti (<code>Punteggio grezzo = Punteggio di base + Σ criteri selezionati</code>) e <strong>limita il voto finale della domanda nell'intervallo tra <code>0</code> e <code>Punteggio max</code></strong>.<br>• <strong>Schema Puramente Additivo OPPURE Puramente Sottrattivo:</strong> Per una <strong>griglia additiva</strong>, imposta <code>Punteggio di base = 0</code> e usa solo criteri positivi (<code>+1</code>, <code>+1.5</code>). Per una <strong>griglia sottrattiva</strong>, imposta <code>Punteggio di base = Punteggio max</code> e usa solo penalità negative (<code>-0.5</code>, <code>-1</code>). <strong>Evita di mescolare punti positivi e negativi nella stessa domanda</strong>: uno schema uniforme risulta molto più trasparente sia per l'IA sia per lo studente.<br>• <strong>Indicatore <code>Max possibile</code>:</strong> Mostra <code>Punteggio di base + Σ (criteri positivi)</code> per segnalare subito eventuali discrepanze rispetto al <code>Punteggio max</code>.",
                "<strong>4. Campo Inferiore delle Istruzioni Generali (<code>Istruzioni e logica di valutazione / Prompt IA</code>):</strong> Usa il riquadro di testo in fondo a ogni domanda per precisare la gestione dei casi particolari (es. propagazione dell'errore, forme algebriche equivalenti) — e, qualora il testo della domanda sia esterno al riquadro ritagliato, incolla qui la consegna testuale.",
                "<strong>5. Importa e Verifica la Tua Soluzione di Riferimento (<code>Soluzione di riferimento</code> / <code>⭐ Correttore</code>):</strong> Usa il selettore <strong>Consegna (Modello) / Soluzione di riferimento</strong> in cima al lettore PDF per caricare il PDF con il tuo svolgimento modello. Comparirà in cima alla scheda Valutazione come <strong><code>⭐ Soluzione di riferimento</code></strong>: verifica sempre che la tua Soluzione di riferimento ottenga il <strong>punteggio pieno (<code>Max/Max</code>)</strong> in ogni domanda!",
                "<strong>6. Criteri mutuamente esclusivi (gruppi <code>OR</code>), riordino a inserimento e pulsante <code>Render / Edit</code>:</strong><br>• <strong>Criteri esclusivi <code>OR</code>:</strong> Fai clic sul collegamento <strong><code>OR</code></strong> tra due criteri consecutivi positivi (es. credito parziale <em>OPPURE</em> punteggio pieno) o negativi di penalità per raggruppare alternative esclusive (supportato anche dall'Assistente IA). Selezionando un criterio del gruppo <code>OR</code> gli altri vengono deselezionati automaticamente, <code>Max possibile</code> / <code>Min possibile</code> considerano solo l'opzione più forte del gruppo e i gruppi <code>OR</code> risultano chiari in PDF annotati e Portali Web.<br>• <strong>Trascinamento a inserimento:</strong> Riordina domande, pagine, singoli criteri o interi blocchi <code>OR</code> insieme con un indicatore visivo di inserimento.<br>• <strong>Pulsante unificato <code>Render / Edit</code>:</strong> Passa immediatamente dall'anteprima Markdown + KaTeX alla modifica sorgente per descrizioni di criteri, istruzioni e prompt IA del progetto."
            ],
            screenshots: [
                {
                    filePrefix: "02_questions",
                    caption: "Modalità Esame — Scheda Modello e Domande: pulsante Area ID Studente, punteggi Base/Max/Max possibile, criteri spuntabili, istruzioni IA e selettore Consegna / Soluzione di riferimento"
                }
            ],
            callouts: [
                {
                    title: "Area ID Studente per OCR Offline",
                    desc: "Delimita una sola volta l'intestazione sulla Pagina 1; Gradaly la estrarrà da tutti gli elaborati scansionati per il riconoscimento locale di nome e matricola."
                },
                {
                    title: "Griglia Puramente Additiva o Sottrattiva",
                    desc: "Parti da 0 con +pt oppure dal Punteggio max con −pt. Il voto finale della domanda è sempre vincolato all'intervallo [0, Punteggio max]."
                },
                {
                    title: "Includi la Consegna nel Riquadro",
                    desc: "Inquadra sia il testo stampato della domanda sia lo spazio di risposta dello studente (o incolla la consegna nel campo istruzioni in basso)."
                },
                {
                    title: "Controllo sulla Soluzione di Riferimento (⭐)",
                    desc: "Importa il PDF della tua soluzione modello e verifica con 1 clic che raggiunga il punteggio massimo (Max/Max) su tutte le domande."
                }
            ]
        },
        {
            id: "exam-ai-rubric-assistant",
            guide: "exam",
            stepNumber: "E3",
            partColor: "indigo",
            tag: "Modalità Esame • Fase 3 — Assistente IA per la Griglia",
            badge: "Chat Interattiva e Calibrazione",
            shortTitle: "Assistente Griglia IA",
            title: "Co-Progettare e Calibrare i Criteri d'Esame con l'Assistente Griglia IA",
            subtitle: "Genera o affina la griglia di valutazione a partire dalla traccia e dalla soluzione di riferimento PDF, dialoga via chat e incolla estratti di reali elaborati.",
            paragraphs: [
                "Su qualsiasi domanda in <strong>Modello e Domande</strong>, clicca su <strong>Progetta / Modifica con l'IA</strong> (<code>Concevoir / Modifier avec l'IA</code>) per aprire l'<strong>Assistente IA per la Griglia di Valutazione</strong> interattivo.",
                "<strong>1. Configura le Preferenze della Griglia:</strong> Indica il <code>Punteggio max</code> della domanda, scegli un'impostazione <strong>Additiva</strong> o <strong>Sottrattiva</strong> e seleziona il <strong>numero di criteri</strong> desiderato (3, 4, 5 o libero). Se hai caricato il PDF della <code>Soluzione di riferimento</code>, spunta <em>«Usa la risposta della soluzione di riferimento»</em> affinché l'IA esamini sia la consegna sia il tuo svolgimento modello.",
                "<strong>2. Affina via Chat e Incolla Screenshot degli Studenti (<code>Cmd+V</code> / <code>Ctrl+V</code>):</strong> Perfeziona in linguaggio naturale i criteri proposti nel pannello di destra. Ancora meglio: cattura uno screenshot di una risposta manoscritta reale di uno studente, <strong>incollalo direttamente nella chat</strong> e scrivi: <em>«Ritengo che questo svolgimento meriti il punteggio pieno; adatta di conseguenza la formulazione dei criteri e le istruzioni di valutazione.»</em>",
                "<strong>3. Applica e Calibra su Alcuni Elaborati:</strong> Clicca su <strong>Conferma e applica alla domanda</strong>, quindi verifica la griglia sulla <code>⭐ Soluzione di riferimento</code> e su 2–3 elaborati nella scheda Valutazione prima di avviare la pre-valutazione sull'intero corso."
            ],
            screenshots: [
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "Finestra Assistente Griglia IA: criteri proposti e PROMPT_TEXT a sinistra, chat interattiva di perfezionamento (con supporto per l'incollaggio di immagini) a destra"
                }
            ],
            callouts: [
                {
                    title: "Analizza Modello e Soluzione di Riferimento",
                    desc: "Genera criteri strutturati e pesi coerenti con l'esatto sviluppo matematico o argomentativo della tua soluzione."
                },
                {
                    title: "Incolla Risposte Reali degli Studenti (Cmd+V)",
                    desc: "Incolla nella chat screenshot di casi particolari tratti dagli elaborati per affinare automaticamente le descrizioni dei criteri."
                }
            ]
        },
        {
            id: "exam-roster-and-matching",
            guide: "exam",
            stepNumber: "E4",
            partColor: "indigo",
            tag: "Modalità Esame • Fase 4 — Elenco Studenti, Elaborati e OCR Offline",
            badge: "100% Locale e Offline",
            shortTitle: "Elenco Studenti, Elaborati e OCR",
            title: "Elenco degli Studenti (CSV), Divisione PDF e Abbinamento OCR 100% Offline",
            subtitle: "Importa la lista degli iscritti, dividi scansioni multiple in singoli elaborati e abbina le identità localmente senza alcun caricamento sul cloud.",
            paragraphs: [
                "Nella scheda <strong>2. Studenti</strong>, importa l'elenco degli iscritti all'appello da un file CSV o Excel (esportato da Esse3, Moodle, segreteria didattica, ecc.). Gradaly mappa le colonne <strong>Matricola / Identificativo</strong>, <strong>Cognome</strong>, <strong>Nome</strong>, <strong>E-mail</strong> e <strong>Gruppo / Canale</strong>.",
                "Nella scheda <strong>3. Elaborati</strong>, importa file PDF singoli oppure un <strong>unico PDF multipagina</strong> prodotto dallo scanner dipartimentale. Specifica il numero di pagine per compito (es. 4 pagine per studente) per suddividere automaticamente il lotto in <code>copie_01.pdf</code>, <code>copie_02.pdf</code>, ecc. Se lo scanner ha generato file ad altissima risoluzione (<strong>&gt; 220 DPI</strong>), Gradaly lo rileva automaticamente all'importazione proponendo la <strong>riduzione nativa in 1 clic a 200 DPI</strong> (riducendo fino a 4 volte il peso su disco senza perdita di leggibilità). Puoi inoltre eseguire la <strong>Verifica di Integrità delle Pagine</strong> per individuare pagine capovolte (180°), invertite o mancanti e correggerle con un clic.",
                "Nella scheda <strong>4. Abbinamento</strong>, clicca su <strong>Abbinamento automatico</strong>. Gradaly ritaglia l'Area di Identificazione dalla Pagina 1 di ciascun elaborato, esegue un <strong>motore OCR integrato al 100% offline sul tuo computer</strong> e associa in modo ottimale nomi e matricole manoscritti all'elenco degli studenti. Controlla e conferma visivamente gli abbinamenti fianco a fianco in pochi istanti."
            ],
            screenshots: [
                {
                    filePrefix: "04_students",
                    caption: "Scheda Studenti: elenco locale degli iscritti con Matricola, Cognome, Nome, E-mail e Gruppo"
                },
                {
                    filePrefix: "05_copies",
                    caption: "Scheda Elaborati: suddivisione delle scansioni PDF multiple e anteprima dei singoli fascicoli d'esame"
                },
                {
                    filePrefix: "06_matching",
                    caption: "Scheda Abbinamento: verifica visiva affiancata tra il ritaglio dell'intestazione manoscritta e l'elenco ufficiale degli studenti"
                }
            ],
            callouts: [
                {
                    title: "Riservatezza Locale Assoluta (Zero Cloud OCR)",
                    desc: "Nomi, matricole, e-mail e ritagli delle intestazioni non lasciano mai il tuo computer — l'OCR gira interamente offline nell'app desktop."
                },
                {
                    title: "Filtro Non Abbinati e Ricerca Istantanea",
                    desc: "Filtra gli elaborati 'Da abbinare' o 'Ambigui' per risolvere rapidamente le grafie più incerte."
                }
            ]
        },
        {
            id: "exam-grading-console",
            guide: "exam",
            stepNumber: "E5",
            partColor: "indigo",
            tag: "Modalità Esame • Fase 5 — La Console di Valutazione",
            badge: "100% Manuale, IA Standard o Batch Flex (-50%)",
            shortTitle: "Valutazione Manuale e Assistita IA",
            title: "La Console di Valutazione a 3 Pannelli: Rapidità da Tastiera, Calibrazione IA e Modalità Batch",
            subtitle: "Scorri domanda per domanda l'intero corso, interpreta il codice colore a 3 stati, calibra su singoli elaborati e avvia la pre-valutazione Batch.",
            paragraphs: [
                "La scheda <strong>5. Valutazione</strong> è strutturata in tre pannelli sincronizzati: l'<strong>Elenco degli Elaborati</strong> a sinistra (con la <code>⭐ Soluzione di riferimento</code> fissata in alto), il <strong>Lettore PDF Interattivo</strong> al centro e la <strong>Postazione Domanda e Criteri</strong> a destra.",
                "<strong>1. Indicatori Circolari delle Domande e Navigazione 2D da Tastiera:</strong> Clicca sui cerchi numerati delle domande (<code>1</code>, <code>2</code>, <code>3</code>...) in alto a destra oppure premi <code>←</code> / <code>→</code> (o <code>H</code> / <code>L</code>) per passare da una domanda all'altra. Usa <code>↑</code> / <code>↓</code> (o <code>K</code> / <code>J</code>) per scorrere gli studenti mantenendo attiva la stessa domanda, spunta o rimuovi i criteri da 1 a 9 con i tasti <code>1–9</code>, convalida manualmente con <code>V</code> e premi <code>?</code> (o clicca sull'icona <code>⌨️</code> nella barra superiore) in qualsiasi momento per aprire il promemoria delle scorciatoie da tastiera.",
                "<strong>2. Il Codice Colore a 3 Stati:</strong><br>• 🟢 <strong>Verde (<code>IA</code>):</strong> Pre-valutata dall'IA (in attesa di revisione e convalida del docente).<br>• 🔵 <strong>Blu (<code>Docente</code>):</strong> Valutata, modificata o esplicitamente convalidata dal docente.<br>• ⚪ <strong>Grigio (<code>Da valutare</code>):</strong> Non ancora valutata.",
                "<strong>3. Calibrazione su Singolo Elaborato, Ispezione della Richiesta IA e Avvio Batch sull'Intero Corso:</strong><br>• <strong>Calibrazione su Singola Domanda e Arresto Immediato (<code>✕ Interrompi</code>):</strong> In basso a destra, clicca su <strong>Riesegui l'IA per questa domanda</strong> per testare la griglia solo sullo studente corrente. Se un modello di ragionamento impiega troppo tempo, clicca sul pulsante rosso <strong><code>✕ Interrompi</code></strong> accanto all'indicatore per annullare istantaneamente la richiesta.<br>• <strong>Ispettore Interattivo di Richiesta e Immagine IA (<code>👁️ Richiesta IA</code> / <code>Requête IA</code>):</strong> Clicca sul pulsante <strong><code>👁️ Richiesta IA</code></strong> accanto al pulsante di valutazione singola per aprire la finestra di ispezione. Mostra in tempo reale: (1) l'<strong>esatta immagine JPEG ritagliata/composta</strong> inviata al modello Vision e se la parte della consegna proviene dall'<strong>Elaborato studente</strong> o dal <strong>Modello vuoto (<code>canvas.pdf</code>)</strong> (con selettore rapido in 1 clic), (2) il <strong>System Prompt e User Prompt</strong> completi, e (3) la <strong>struttura integrale del Payload HTTP JSON</strong> (inclusi gli strumenti attivi come <code>code_execution</code> e lo schema JSON).<br>• <strong>Avvio Multi-Elaborato (<code>▶ Valutazione IA</code>):</strong> Clicca su <strong>▶ Valutazione IA</strong> in alto a sinistra per valutare gli elaborati e le domande selezionati. Scegli tra <strong>⚡ Modalità Standard</strong> (worker paralleli per coppia <code>(elaborato, domanda)</code> con cache PDF condivisa) e <strong>🌿 Modalità Flex / Batch Asincrona (sconto del 50%)</strong>, consigliata per interi corsi con chiavi dirette Gemini, OpenAI o Anthropic.<br>• <strong>Rilevamento Automatico delle Anomalie (<code>⚠️ Anomalie</code>):</strong> Attivo per impostazione predefinita nelle Impostazioni IA, segnala durante la valutazione eventuali anomalie visive o materiali (risposta fuori riquadro, cancellature ambigue, scansione illeggibile o pagina invertita), consentendoti di filtrare per <code>⚠️ Anomalie</code> e verificarle con un clic.",
                "<strong>4. Anteprima <code>Render / Edit</code> e Suite di Benchmark &amp; Regressione multi-modello:</strong><br>• <strong>Pulsante unificato <code>Render / Edit</code>:</strong> Passa da anteprima Markdown + KaTeX a modifica diretta dentro <em>Giustificazione IA</em> e <em>Feedback Studente</em>.<br>• <strong>Suite di Benchmark &amp; Regressione (<code>⭐</code>):</strong> Salva risposte validate da un docente in suite riutilizzabili ed esegui campagne comparative multi-modello (Gemini, GPT, Claude, OpenRouter, server d'ateneo, Ollama locale) dall'area <strong>Benchmark</strong> nella schermata iniziale. Seleziona i modelli da menu guidati, supera le verifiche preliminari obbligatorie di Visione e sandbox Python, esegui fino a <code>1–16</code> thread paralleli (con protezione VRAM per Ollama) sotto barra di avanzamento multi-fase, confronta MAE, corrispondenza esatta, F1 per criterio, latenza e token, oppure apri ogni suite come progetto completo."
            ],
            screenshots: [
                {
                    filePrefix: "07_grading",
                    caption: "Panoramica della Console di Valutazione: elenco studenti a sinistra (con ⭐ Soluzione di riferimento, indicatori di stato, voto domanda e totale), PDF centrale centrato sull'area della domanda e griglia dei criteri a destra"
                },
                {
                    filePrefix: "07b_grading_single_ai",
                    caption: "Parte inferiore del pannello destro: Motivazione IA, Feedback per lo studente (Markdown + KaTeX), opzioni di non sovrascrittura e pulsante 'Riesegui l'IA per questa domanda'"
                },
                {
                    filePrefix: "07c_grading_launch_modal",
                    caption: "Finestra Avvia Valutazione IA: selezione di elaborati, domande, regole di protezione e scelta tra Modalità Standard e Modalità Batch Flex Asincrona (-50%)"
                }
            ],
            callouts: [
                {
                    title: "Navigazione Rapida 2D da Tastiera",
                    desc: "Scorri gli elaborati con ↑/↓ (K/J), cambia domanda con ←/→ (H/L), spunta i criteri con 1–9, convalida con V, esci dai campi di testo con Esc e premi ? per la guida rapida."
                },
                {
                    title: "Modalità Batch Flex Consigliata (-50%)",
                    desc: "Disponibile con chiavi API dirette Gemini, OpenAI e Anthropic per pre-valutare interi corsi in modalità asincrona con il 50% di riduzione sui costi."
                }
            ]
        },
        {
            id: "exam-collaborative-sharing",
            guide: "exam",
            stepNumber: "E6",
            partColor: "indigo",
            tag: "Modalità Esame • Fase 6 — Valutazione in Commissione (Gradaly Pro)",
            badge: "Condivisione e Unione • PRO",
            shortTitle: "Condivisione e Unione (PRO)",
            title: "Condivisione Collaborativa del Progetto e Unione Selettiva per Domanda",
            subtitle: "Suddividi la correzione dell'esame tra co-docenti, ricercatori o esercitatori tramite archivi .gradaly o link Cloud con crittografia end-to-end (Gradaly Pro).",
            paragraphs: [
                "Quando un appello viene valutato da più membri della commissione o esercitatori, <strong>Gradaly Pro</strong> consente di condividere l'intero progetto o un pacchetto leggero tramite un file locale <code>.gradaly</code> oppure un <strong>Link Cloud cifrato in AES-256-GCM</strong> (con validità di 7, 14 o 30 giorni).",
                "Quando i colleghi cliccano su <strong>Importa / Unisci</strong>, Gradaly verifica l'impronta SHA-256 del modello PDF dell'esame e permette sia di importare l'archivio come <strong>nuovo progetto indipendente</strong>, sia di <strong>unire selettivamente griglie e/o valutazioni domanda per domanda</strong> (ad es. unendo le domande Q1–Q2 corrette dal primo co-valutatore con le Q3–Q4 del secondo) creando automaticamente un backup di sicurezza preliminare."
            ],
            screenshots: [
                {
                    filePrefix: "09_share_modal",
                    caption: "Finestra Condividi / Esporta Progetto (Gradaly Pro): profili di condivisione, filtro per domanda e Link Cloud cifrato AES-256"
                },
                {
                    filePrefix: "10_import_merge_modal",
                    caption: "Finestra Importa / Unione Selettiva (Gradaly Pro): verifica SHA-256 del modello e unione granulare di Griglie e Valutazioni per domanda"
                }
            ],
            callouts: [
                {
                    title: "Link Cloud con Crittografia End-to-End",
                    desc: "Condividi i progetti con la commissione d'esame tramite crittografia lato client AES-256-GCM (la chiave #k=... non viene mai inviata al server)."
                },
                {
                    title: "Unione Selettiva Domanda per Domanda",
                    desc: "Integra in modo ordinato le correzioni di più co-valutatori proteggendo le modifiche manuali e salvando un backup automatico."
                }
            ]
        },
        {
            id: "exam-analytics-and-exports",
            guide: "exam",
            stepNumber: "E7",
            partColor: "indigo",
            tag: "Modalità Esame • Fase 7 — Statistiche e Restituzione",
            badge: "Excel • CSV Moodle • PDF Annotati • Portale Web",
            shortTitle: "Statistiche, Moodle, PDF e Portale Web",
            title: "Statistiche del Corso, Esportazione Moodle, PDF Annotati e Portale di Consultazione Studenti",
            subtitle: "Analizza la distribuzione dei punteggi, importa voti e link personali di visione compiti in Moodle e restituisci un feedback formativo completo agli studenti.",
            paragraphs: [
                "La scheda <strong>6. Sintesi e Statistiche</strong> calcola in tempo reale gli indicatori statistici del corso: media, mediana, deviazione standard, minimo/massimo, istogrammi non ambigui <code>[a, b[</code> e percentuale di superamento di ciascun criterio.",
                "Per restituire gli esiti e gli elaborati agli studenti (anteprima su 1 elaborato nella versione Gratuita; intero corso in Gradaly Pro), sono disponibili quattro canali:<br>1) <strong>Cartella di Lavoro Excel Multi-Foglio</strong> (riepilogo generale + 1 foglio dedicato per ciascuna domanda, per tutti gli elaborati o per una selezione).<br>2) <strong>Esportazione Moodle (CSV Registro Valutatore e Foglio di Valutazione Compito)</strong>: genera un file CSV UTF-8 standard per <em>Valutazioni Moodle → Importa → File CSV</em> oppure compila automaticamente un foglio di valutazione offline scaricato da un'attività <em>Compito Moodle</em> (abbinamento tramite Matricola o E-mail), inserendo sia il voto riproporzionato (grezzo, <code>/20</code> o <code>/100</code>) sia l'<strong>URL personale cliccabile di consultazione cifrata</strong> nella colonna <em>Feedback</em> di Moodle!<br>3) <strong>Elaborati PDF Annotati Individuali (ZIP o Singolo Elaborato) con Formato Nome File Personalizzabile</strong>: unisce un frontespizio riepilogativo alle pagine manoscritte dello studente e permette di configurare il formato del nome file tramite segnaposto flessibili (<code>{nom}</code>, <code>{prenom}</code>, <code>{id}</code>, <code>{projet}</code>, <code>{copie}</code>, <code>{groupe}</code> — es. <code>{nom}_{prenom}_{projet}.pdf</code>) con anteprima in tempo reale.<br>4) <strong>Portale Web Zero-Knowledge di Consultazione degli Elaborati</strong>: pubblica e sincronizza online gli elaborati valutati cifrati ad alta velocità (pipeline CPU multi-core + 10 flussi binari HTTP/2 paralleli), notifica gli studenti tramite <strong>Invio E-mail Diretto (<code>@gradaly.io</code>)</strong> o tramite <strong>Esportazione per Stampa Unione (<code>Publipostage</code> — dal tuo indirizzo istituzionale in Outlook Web / Microsoft 365, Word + Outlook Desktop o Thunderbird)</strong> usando tabelle Word <code>.docx</code>, Excel <code>.xlsx</code> o <code>.csv</code>, esporta direttamente per <strong>Moodle</strong> oppure stampa <strong>tagliandi individuali con codice QR</strong> da consegnare in aula."
            ],
            screenshots: [
                {
                    filePrefix: "08_stats",
                    caption: "Scheda Sintesi e Statistiche (Modalità Esame): indicatori del corso, istogrammi di distribuzione dei voti, tassi di successo per criterio e centro di esportazione"
                }
            ],
            callouts: [
                {
                    title: "Cartella Excel ed Elaborati PDF Annotati",
                    desc: "Esporta prospetti voti universitari completi e PDF individuali con il dettaglio dei criteri e formule matematiche in KaTeX."
                },
                {
                    title: "Esportazione CSV Moodle con Link all'Elaborato",
                    desc: "Importa voti e link personali cliccabili direttamente in Moodle (importazione CSV nel Registro valutatore o foglio offline Compito)."
                },
                {
                    title: "Portale Cifrato di Consultazione Studenti",
                    desc: "Gli studenti consultano il proprio compito annotato, i criteri soddisfatti e il feedback personalizzato tramite Moodle, link e-mail o tagliando QR."
                }
            ]
        },
        {
            id: "exam-ai-settings",
            guide: "exam",
            stepNumber: "E8",
            partColor: "indigo",
            tag: "Modalità Esame • Fase 8 — Configurazione IA (Facoltativa)",
            badge: "OpenRouter • Gemini • GPT • Claude • Locale",
            shortTitle: "Chiavi API e Scelta del Modello IA",
            title: "Configurazione della Chiave API e Scelta del Modello IA Adeguato",
            subtitle: "Salta questo capitolo se utilizzi Gradaly in Modalità 100% Manuale. Per abilitare l'Assistente Griglia IA e la Pre-valutazione IA, configura la tua chiave API in Impostazioni (⚙️).",
            paragraphs: [
                "<strong>La qualità della valutazione dipende direttamente dal modello IA selezionato:</strong> Nei nostri test su esami universitari manoscritti (analisi matematica, fisica, ingegneria, economia, scienze umane), otteniamo <strong>risultati eccellenti</strong> con <strong><code>Gemini 3.8 Flash</code></strong>, <strong><code>GPT 5-4 mini</code></strong>, <strong><code>Claude-Sonnet-5.5</code></strong> e <strong><code>Mistral-Large 4.0</code></strong> — ti invitiamo a confrontare più modelli in funzione della tua disciplina!",
                "<strong>Chiavi Dirette dei Fornitori vs OpenRouter:</strong> Puoi generare una chiave API direttamente presso <strong>Google Gemini</strong>, <strong>OpenAI</strong> o <strong>Anthropic</strong> (abilitando così anche la <strong>modalità Batch / Flex asincrona</strong> scontata del 50%), oppure utilizzare <strong>OpenRouter</strong>, il cui vantaggio specifico è che <strong>un'unica chiave API consente l'accesso ai modelli di tutti i fornitori</strong> (Gemini, GPT, Claude, Mistral, DeepSeek, Qwen, Llama) con un solo credito unificato.",
                "<strong>0% di Ricarico e Nessun 'Pacchetto Crediti IA' Proprietario:</strong> A differenza delle piattaforme cloud commerciali che impongono un singolo modello e rivendono 'pacchetti di crediti IA' con forti margini, Gradaly applica <strong>zero commissioni</strong> sull'uso dell'IA. Paghi esclusivamente il costo vivo dei token al fornitore — oppure <strong>0 € se il tuo ateneo mette a disposizione un server LLM istituzionale o se esegui un modello locale tramite Ollama</strong>.",
                "<strong>Impostazioni Avanzate — Esecuzione Nativa di Codice Python (<code>code_execution</code> / <code>code_interpreter</code>):</strong> In <em>Impostazioni (⚙️) → Impostazioni avanzate</em> puoi attivare lo strumento facoltativo <strong>Esecuzione di codice Python</strong> (disattivato per impostazione predefinita). Quando è attivo, il modello IA può scrivere ed eseguire codice Python in un ambiente sandbox sicuro lato server (<code>code_execution</code> su Google Gemini, <code>code_interpreter</code> su OpenAI <code>/v1/responses</code> e <code>code_execution_20250825</code> su Anthropic <code>/v1/messages</code>) sia durante la progettazione della griglia sia durante la valutazione degli elaborati — ideale per esami STEM con calcoli numerici, esponenziali, trigonometria o verifica di algoritmi. Un pulsante dedicato permette di verificare in 1 clic se il modello prescelto supporta effettivamente il sandbox Python.",
                "<strong>Impostazioni Avanzate — Modalità di Debug IA Avanzata (<code>.debug/grading/inspect.html</code>):</strong> Attivando la <strong>Modalità di debug IA</strong>, Gradaly salva per ogni valutazione un fascicolo diagnostico completo in <code>.debug/grading/</code>, comprendente un rapporto visivo HTML autonomo (<strong><code>inspect.html</code></strong> e <code>latest_inspect.html</code>) che mostra l'esatta immagine inviata all'IA, l'origine della consegna (elaborato dello studente o modello vuoto in <code>image_source.json</code>), i prompt System e User (<code>prompt.txt</code>), la struttura HTTP JSON completa (<code>request_payload.json</code>), l'eventuale codice Python eseguito con il relativo output e la risposta grezza dell'API (<code>raw_api_response.json</code>).",
                "<strong>Registro locale dei token IA, grafici temporali e tariffe personalizzate (<code>Utilizzo IA e Costi</code>):</strong> Ogni chiamata IA (valutazione singola o batch, Assistente Griglia, controllo prompt, diagnostica Vision/Python e benchmark) registra localmente token in ingresso e uscita/ragionamento, data, fornitore e modello in <code>~/.gradaly_ai_usage.jsonl</code> (zero dati personali degli studenti). Clicca sull'<strong>icona Monete</strong> nell'intestazione o in <em>Impostazioni (⚙️)</em> per esplorare grafici giornalieri/mensili e curve cumulative, esportare in CSV, azzerare il registro e impostare tariffe <code>$ / 1M</code> personalizzate solo per fornitori e modelli già utilizzati."
            ],
            screenshots: [
                {
                    filePrefix: "11_settings_ai",
                    caption: "Finestra Impostazioni IA (⚙️): scelta del fornitore (Google Gemini, OpenRouter, OpenAI, Anthropic o Server Locale / Ateneo), selezione del modello e test di connessione"
                }
            ],
            providerGuides: [
                {
                    name: "OpenRouter (Gateway Multi-Fornitore)",
                    tag: "Tutti i Modelli con 1 Chiave",
                    icon: "fas fa-network-wired",
                    desc: "<strong>Vantaggio specifico:</strong> un unico account e una sola chiave API permettono di utilizzare <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code>, <code>Mistral-Large 4.0</code> e centinaia di altri modelli senza gestire più fatturazioni (nota: la modalità Batch asincrona non è disponibile su OpenRouter).",
                    steps: [
                        "Accedi a <strong>openrouter.ai</strong> (o crea un account gratuito).",
                        "Apri la sezione <strong>Credits</strong> e carica un piccolo credito prepagato (es. 5 $ o 10 $ — sufficiente per migliaia di pagine d'esame).",
                        "Vai in <strong>Keys</strong> → clicca su <strong>Create Key</strong>, assegnale il nome <code>Gradaly</code> e copia la chiave che inizia con <code>sk-or-v1-...</code>.",
                        "In Gradaly, apri <strong>Impostazioni (⚙️)</strong>, scegli <strong>OpenRouter</strong>, incolla la chiave e seleziona il modello desiderato."
                    ],
                    url: "https://openrouter.ai/keys",
                    linkLabel: "Apri Console Chiavi API OpenRouter"
                },
                {
                    name: "Google Gemini (Google AI Studio)",
                    tag: "Rapido ed Economico",
                    icon: "fas fa-bolt",
                    desc: "Accesso diretto ai modelli multimodali <code>Gemini 3.8 Flash</code> e Pro di Google, con supporto nativo per la modalità Batch asincrona scontata del 50%.",
                    steps: [
                        "Accedi a <strong>Google AI Studio</strong> (<code>aistudio.google.com</code>) con il tuo account Google.",
                        "Clicca su <strong>Get API key</strong> nel menu di sinistra, quindi su <strong>Create API key</strong>.",
                        "Copia la chiave generata (che inizia con <code>AIzaSy...</code>). Attiva la fatturazione Pay-as-you-go se desideri sbloccare limiti di frequenza superiori.",
                        "In Gradaly, apri <strong>Impostazioni (⚙️)</strong>, seleziona <strong>Google Gemini</strong> e incolla la tua chiave."
                    ],
                    url: "https://aistudio.google.com/app/apikey",
                    linkLabel: "Apri Chiavi API Google AI Studio"
                },
                {
                    name: "OpenAI (Modelli GPT)",
                    tag: "Elevata Precisione Logica",
                    icon: "fas fa-brain",
                    desc: "Accesso diretto ai modelli multimodali di OpenAI come <code>GPT 5-4 mini</code>, eccellenti nella verifica dei passaggi algebrici e logici, con modalità Batch al -50%.",
                    steps: [
                        "Accedi a <strong>platform.openai.com</strong> (distinto dall'abbonamento consumer ChatGPT Plus).",
                        "Vai in <strong>Settings → Billing</strong> e carica un piccolo credito prepagato (es. 5 $).",
                        "Apri <strong>Dashboard → API keys</strong>, clicca su <strong>+ Create new secret key</strong> e copia la chiave (<code>sk-proj-...</code>).",
                        "In Gradaly, apri <strong>Impostazioni (⚙️)</strong>, seleziona <strong>OpenAI</strong>, incolla la chiave e scegli il modello."
                    ],
                    url: "https://platform.openai.com/api-keys",
                    linkLabel: "Apri Chiavi API OpenAI Platform"
                },
                {
                    name: "Anthropic (Modelli Claude)",
                    tag: "Dimostrazioni e Argomentazione",
                    icon: "fas fa-feather-alt",
                    desc: "Accesso diretto ai modelli <code>Claude-Sonnet-5.5</code> e Opus di Anthropic, apprezzati per l'analisi di dimostrazioni matematiche manoscritte e la redazione di feedback articolati.",
                    steps: [
                        "Accedi alla <strong>Anthropic Console</strong> (<code>console.anthropic.com</code>).",
                        "In <strong>Settings → Billing</strong>, attiva un credito prepagato.",
                        "In <strong>API Keys</strong>, clicca su <strong>Create Key</strong> e copia la chiave segreta (<code>sk-ant-...</code>).",
                        "In Gradaly, apri <strong>Impostazioni (⚙️)</strong>, seleziona <strong>Anthropic</strong> e incolla la chiave."
                    ],
                    url: "https://console.anthropic.com/settings/keys",
                    linkLabel: "Apri Chiavi API Anthropic Console"
                }
            ],
            callouts: [
                {
                    title: "Server di Ateneo o Ollama 100% Locale",
                    desc: "Se il tuo ateneo fornisce un server IA compatibile OpenAI o se esegui un modello locale tramite Ollama (<code>http://localhost:11434/v1</code>), seleziona 'Ateneo / Locale' nelle Impostazioni per un costo di 0 €."
                },
                {
                    title: "Diagnostica di Connessione in 1 Clic",
                    desc: "Clicca in qualsiasi momento sull'indicatore di stato IA nella barra superiore per verificare validità della chiave e supporto Vision."
                },
                {
                    title: "Sandbox di Esecuzione Codice Python (Facoltativo)",
                    desc: "Abilita l'esecuzione nativa di codice Python nelle Impostazioni avanzate per verifiche numeriche ad alta precisione su Gemini, OpenAI e Anthropic."
                },
                {
                    title: "Ispettore Visivo Richiesta IA e Debug",
                    desc: "Clicca su '👁️ Richiesta IA' nella scheda Valutazione o apri .debug/grading/inspect.html per esaminare immagine ritagliata, origine Modello vs Elaborato, prompt e JSON."
                }
            ]
        },
        {
            id: "exam-faq",
            guide: "exam",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "indigo",
            tag: "Domande Frequenti (FAQ)",
            badge: "Architettura, Privacy e Buone Pratiche",
            shortTitle: "Domande Frequenti (FAQ)",
            title: "Domande Frequenti (FAQ)",
            subtitle: "Risposte alle domande più comuni sul funzionamento della valutazione IA, sul controllo umano dei voti, archiviazione locale in Documents/Gradaly, sicurezza delle chiavi API, crittografia Cloud Zero-Knowledge e supporto.",
            paragraphs: [
                "Di seguito trovi risposte dettagliate alle principali domande tecniche, didattiche e sulla protezione dei dati relative alla Modalità Esame di Gradaly."
            ],
            faqs: [
                {
                    q: "Come funziona internamente la valutazione IA di Gradaly, e l'immagine della domanda proviene dall'elaborato dello studente o dal modello vuoto?",
                    a: "<p>Quando chiedi all'IA di valutare una domanda sul compito di uno studente, Gradaly estrae l'<strong>immagine ritagliata del riquadro rettangolare</strong> tracciato per quella domanda e la invia al modello Vision selezionato insieme a un prompt strutturato contenente i criteri della griglia (<code>CRITERIA</code>) e le istruzioni generali di valutazione (<code>PROMPT_TEXT</code>).</p><p><strong>Il testo della domanda proviene dall'elaborato dello studente o dal modello vuoto?</strong><ul><li><strong>Area unica combinata (predefinita):</strong> Quando tracci un'unica area per domanda, Gradaly ritaglia tale riquadro <strong>interamente dall'elaborato dello studente (<code>copies/copie_XXX.pdf</code>)</strong>. Il modello vuoto (<code>canvas.pdf</code>) non viene utilizzato: se ciascuno studente ha valori numerici diversi stampati sul proprio foglio, l'IA legge esattamente i numeri e lo svolgimento di quello studente.</li><li><strong>Aree separate (<code>Separa consegna / risposta</code>) e opzione <code>Consegna IA</code>:</strong> Nella scheda <em>1. Modello e Domande</em>, il selettore <strong><code>Consegna IA: [Elaborato studente] / [Modello]</code></strong> consente di scegliere se ritagliare la consegna dall'<strong>Elaborato studente</strong> (essenziale quando le tracce sono individualizzate) oppure dal <strong>Modello vuoto (<code>canvas.pdf</code>)</strong> (utile quando gli studenti rispondono su fogli separati privi del testo stampato della domanda).</li></ul></p><p><strong>Ispezione dell'immagine esatta e del payload JSON:</strong> In qualsiasi momento nella scheda <em>5. Valutazione</em>, clicca sul pulsante <strong><code>👁️ Richiesta IA</code> (<code>Requête IA</code>)</strong> accanto a <em>Riesegui l'IA per questa domanda</em> (oppure attiva la <em>Modalità di debug IA</em> in <em>Impostazioni → Impostazioni avanzate</em> per aprire <code>.debug/grading/inspect.html</code>) per visualizzare l'immagine JPEG esatta inviata all'IA, l'origine delle aree, i prompt System e User, il payload HTTP JSON completo e l'eventuale codice Python eseguito dal modello.</p>"
                },
                {
                    q: "Posso fidarmi della pre-valutazione IA e come devo supervisionarla?",
                    a: "<p><strong>All’inizio, mai a scatola chiusa!</strong> Una prima stesura della griglia potrebbe risultare troppo rigida o ambigua, oppure il modello IA scelto potrebbe incontrare difficoltà su un passaggio specifico o interpretare in modo impreciso una notazione insolita.</p><p><strong>La revisione e la convalida del docente sono essenziali:</strong> Gradaly è progettato perché il docente mantenga il pieno controllo su ogni voto. Rileggi sempre le proposte dell’IA, calibra la griglia sul tuo svolgimento modello e convalida manualmente voti e feedback, soprattutto negli esami ufficiali.</p><p><strong>Trasparenza verso gli studenti e visione compiti:</strong> Poiché Gradaly offre agli studenti piena trasparenza sui criteri applicati al proprio elaborato (tramite PDF annotati o Portale Web Studenti), consigliamo sempre di garantire la possibilità di visionare il compito e chiedere chiarimenti sui singoli criteri.</p>"
                },
                {
                    q: "Quanto costa valutare un esame con l'IA?",
                    a: "<p>Non esiste una tariffa fissa unica poiché il costo dipende dal numero di elaborati, dal numero di domande e dal modello IA scelto (ciascun fornitore API pubblica il costo per milione di token in ingresso e in uscita).</p><p>Per fornire un riferimento concreto: utilizzando un modello eccellente come <strong><code>Gemini 3.8 Flash</code></strong>, abbiamo valutato esami universitari complessi di statistica composti da <strong>6–7 pagine di risposte manoscritte per 400 studenti con una spesa API complessiva di circa 5–7 $</strong> in modalità Batch/Flex (ricordando che Gradaly applica lo 0% di ricarico sulle tariffe del fornitore). Poiché le tariffe dei fornitori cambiano nel tempo, Gradaly registra localmente i token esatti in ingresso e uscita/ragionamento nel pannello <strong>Utilizzo IA e Costi</strong> (icona monete in alto o in Impostazioni), dove puoi consultare grafici temporali, esportare CSV e configurare i tuoi prezzi <code>$ / 1M</code>.</p>"
                },
                {
                    q: "Ho già un abbonamento a pagamento a ChatGPT Plus (OpenAI), Claude Pro o Gemini Advanced: perché non posso usarlo al posto di una chiave API?",
                    a: "<p><strong>1. Due prodotti distinti presso i fornitori IA:</strong> Per OpenAI, Anthropic e Google, gli abbonamenti chat consumer (ChatGPT Plus, Claude Pro, Gemini Advanced a ~20 $/mese) e l'<strong>accesso API</strong> sono sistemi di fatturazione completamente separati. Gli abbonamenti consumer danno accesso esclusivamente all'interfaccia chat web/mobile e non consentono tecnicamente a software esterni come Gradaly di inviare richieste strutturate (e le loro condizioni di servizio vietano espressamente di aggirare tale separazione).</p><p><strong>2. Elaborazione parallela e maggiori garanzie di riservatezza:</strong> Per pre-valutare decine o centinaia di elaborati in parallelo ricevendo dati strutturati (criteri soddisfatti, motivazione per il docente e feedback per lo studente), Gradaly comunica tramite le API ufficiali per sviluppatori. Inoltre, <strong>il traffico API gode di tutele contrattuali più rigorose sulla privacy</strong>: a differenza delle chat consumer predefinite, i dati trasmessi tramite API commerciale <strong>non vengono utilizzati da OpenAI, Google o Anthropic per addestrare i propri modelli</strong>.</p><p><strong>3. Costo a consumo molto contenuto (nessun canone mensile aggiuntivo):</strong> Una chiave API non prevede alcun abbonamento mensile — si paga solo l'effettivo consumo di token (<em>pay-as-you-go</em>, con 0% di margine da parte di Gradaly), pari in genere a <strong>pochi euro per un intero appello di diverse centinaia di studenti</strong> (e Google offre anche una fascia gratuita sull'API Gemini per effettuare test). Se preferisci gestire un unico credito per tutti i modelli (OpenAI, Claude, Gemini, Mistral), puoi usare <strong>OpenRouter</strong> oppure il server IA del tuo ateneo.</p>"
                },
                {
                    q: "Quanto tempo richiede la pre-valutazione IA di un esame?",
                    a: "<p>La durata dipende dal numero di domande, dal numero di elaborati e dalla complessità del ragionamento richiesto al modello. Nella pratica, per un appello con <strong>400 elaborati, 5 domande e una decina di pagine manoscritte</strong> in modalità flessibile, la pre-valutazione dell'intero esame richiede tipicamente <strong>circa 10 minuti</strong>.</p><p><strong>Suggerimento:</strong> Puoi regolare il <strong>numero di worker paralleli</strong> in <strong>Impostazioni (⚙️)</strong> compatibilmente con i limiti di frequenza (rate limits) del tuo fornitore API.</p>"
                },
                {
                    q: "Quale risoluzione (DPI) è consigliabile impostare sullo scanner per gli elaborati?",
                    a: "<p>Punta a file <strong>leggeri ma nitidi</strong>: una risoluzione compresa tra <strong><code>150 DPI</code> e <code>200 DPI</code></strong> rappresenta il compromesso ideale sia per la lettura a schermo sia per i modelli Vision dell'IA.</p><p><strong>Perché evitare scansioni a 300 o 600 DPI:</strong> Risoluzioni molto elevate non migliorano l'accuratezza dell'IA (i modelli Vision ridimensionano comunque internamente le immagini), ma rendono i file PDF da 4 a 10 volte più pesanti, rallentando inutilmente suddivisione, scorrimento delle pagine e sincronizzazione Cloud.</p><p><strong>Mantieni la scansione a Colori:</strong> Consigliamo di scansionare a <strong>Colori (150–200 DPI con compressione JPEG/PDF standard)</strong> anziché in bianco e nero puro (1 bit), così da preservare tratti leggeri a matita, penne colorate nei grafici e pedici matematici.</p>"
                },
                {
                    q: "Dove vengono salvati sul mio computer i file di Gradaly?",
                    a: "<p>Tutti i progetti sono archiviati localmente nella cartella <strong><code>Documents/Gradaly/</code></strong> del tuo computer (ad es. <code>~/Documents/Gradaly/</code> su macOS/Linux o <code>C:\\Users\\TuoNome\\Documents\\Gradaly\\</code> su Windows), con una sottocartella dedicata per ciascun progetto.</p><p>All'interno di ogni cartella di progetto i dati sono memorizzati in formati standard e trasparenti:<ul><li><strong>File PDF:</strong> il modello vuoto dell'esame (<code>canvas.pdf</code>), l'eventuale soluzione di riferimento (<code>solution.pdf</code>) e i singoli elaborati in <code>copies/</code> (<code>copie_01.pdf</code>, <code>copie_02.pdf</code>, ecc.).</li><li><strong>File JSON testuali:</strong> i riquadri delle domande e la griglia di valutazione (<code>config.json</code>), l'elenco studenti (<code>students.json</code>), la tabella degli abbinamenti OCR (<code>matching.json</code>) e le valutazioni di ciascun elaborato in <code>gradings/</code> (<code>copie_01.json</code>, ecc.).</li></ul></p><p><strong>⚠️ Avvertenza importante:</strong> Sebbene questa struttura aperta renda agevole il backup di <code>Documents/Gradaly</code> (tramite Time Machine, Nextcloud, OneDrive, ecc.), <strong>sconsigliamo vivamente di modificare, rinominare o spostare manualmente i file all'interno della cartella di un progetto</strong>, per non alterare i riferimenti interni.</p>"
                },
                {
                    q: "Dove vengono memorizzate le mie chiavi API ed è una soluzione sicura?",
                    a: "<p>Le tue chiavi API (Gemini, OpenRouter, OpenAI, Anthropic) sono salvate <strong>esclusivamente in locale sul tuo computer</strong> nel file di configurazione nascosto <code>.gradaly_settings.json</code> situato nella tua cartella utente (<code>~/.gradaly_settings.json</code> su macOS/Linux o <code>C:\\Users\\TuoNome\\.gradaly_settings.json</code> su Windows).</p><p><strong>Garanzie di sicurezza:</strong><ul><li>Le chiavi API <strong>non vengono mai inviate ad alcun server Gradaly</strong> e <strong>non vengono mai incluse quando esporti o condividi un archivio di progetto <code>.gradaly</code></strong> con i colleghi.</li><li>Quando avvii l'Assistente Griglia IA o la pre-valutazione, il tuo computer comunica <strong>direttamente tramite connessione cifrata HTTPS (TLS 1.3)</strong> con l'endpoint API ufficiale del fornitore selezionato.</li><li>Puoi revocare, rigenerare o impostare un tetto mensile di spesa sulla tua chiave API in qualsiasi momento dalla console del fornitore.</li></ul></p>"
                },
                {
                    q: "Dove sono ospitati i dati quando pubblico un esame sul Cloud o genero un link di condivisione? Chi può accedervi?",
                    a: "<p>Quando pubblichi un esame sul <strong>Portale Web Studenti</strong> o generi un <strong>Link Cloud Collaborativo</strong>, <strong>ogni singolo file viene cifrato localmente sul tuo computer mediante <code>AES-256-GCM</code> prima che un solo byte lasci la tua postazione</strong>. Sullo spazio cloud europeo (ospitato nell'UE con scadenza automatica) vengono caricati unicamente blocchi binari cifrati illeggibili (<code>.enc</code>).</p><p>La chiave segreta di decifratura (<code>#k=...</code>) è inserita nel frammento dell'URL dopo il simbolo <code>#</code>. Per standard web (RFC 3986), i browser <strong>non trasmettono mai al server la porzione di URL successiva a <code>#</code></strong>. Di conseguenza, <strong>nemmeno gli sviluppatori di Gradaly possono leggere i file archiviati sul cloud, e neppure in caso di compromissione dell'infrastruttura cloud i contenuti sarebbero leggibili</strong>: solo tu e i destinatari a cui invii il link possedete la chiave.</p>"
                },
                {
                    q: "Perché Gradaly è un'applicazione desktop anziché una piattaforma web? Qual è la visione a lungo termine?",
                    a: "<p>Abbiamo scelto un'architettura desktop nativa (macOS, Windows, Linux) per due ragioni fondamentali:</p><p>1) <strong>Sovranità immediata sui dati:</strong> Non è mai necessario caricare elenchi nominativi degli iscritti o scansioni non cifrate degli esami su database SaaS esterni solo per organizzare e abbinare gli elaborati.</p><p>2) <strong>La nostra visione a lungo termine (IA locale 100% autonoma):</strong> L'hardware e i modelli multimodali open-weights evolvono rapidamente. <strong>La visione di Gradaly è che nei prossimi anni modelli vision-language avanzati gireranno direttamente sul portatile del docente</strong> (o su un server dipartimentale). Grazie all'architettura desktop con supporto nativo per endpoint locali (Ollama / vLLM / server di ateneo), i docenti potranno valutare gli esami in <strong>completa autonomia offline</strong> e a costo zero.</p>"
                },
                {
                    q: "Quali sono le differenze rispetto alle piattaforme web tradizionali di correzione o ai valutatori IA in cloud?",
                    a: "<p><strong>Rispetto alle piattaforme web tradizionali di correzione:</strong> Le soluzioni basate su browser presentano indubbi punti di forza in specifici contesti — collaborazione simultanea in tempo reale via browser senza unione di file, gestione avanzata di moduli ottici a risposta multipla e raggruppamento automatico delle risposte brevi. Tuttavia non integrano pre-valutazione IA multimodale per dimostrazioni e svolgimenti aperti manoscritti, non offrono un assistente IA per co-progettare le griglie e lasciano minore controllo sui dati degli studenti (archiviati in chiaro su server terzi). Gradaly può essere usato in <strong>Modalità 100% Manuale</strong> con lo stesso rigore basato su griglie di criteri, aggiungendo facoltativamente progettazione assistita della griglia, pre-valutazione IA e controllo dei dati 100% locale.</p><p><strong>Rispetto ai valutatori IA commerciali in cloud:</strong> Tali piattaforme impongono spesso un unico modello IA a scatola chiusa e applicano forti ricarichi vendendo 'pacchetti di crediti IA' proprietari. Gradaly ti lascia la <strong>piena scelta del modello IA</strong> (Gemini, GPT, Claude, Mistral, OpenRouter o server gratuito universitario/locale) con <strong>0% di ricarico</strong>.</p>"
                },
                {
                    q: "Quali scorciatoie da tastiera sono disponibili per navigare e valutare rapidamente?",
                    a: "<p>Gradaly è progettato per consentirti di navigare e valutare un intero corso senza usare il mouse. Premi <strong><code>?</code></strong> in qualsiasi momento (o clicca sull'icona <strong><code>⌨️</code></strong> nella barra superiore) per aprire il riepilogo delle scorciatoie:</p><ul><li><strong><code>↑</code> / <code>↓</code> (o <code>K</code> / <code>J</code>):</strong> Elaborato dello studente precedente / successivo (attivo nelle schede <em>Studenti</em>, <em>Elaborati</em>, <em>Abbinamento</em> e <em>Valutazione</em>).</li><li><strong><code>←</code> / <code>→</code> (o <code>H</code> / <code>L</code>):</strong> Domanda precedente / successiva (in <em>Modello e Domande</em> e <em>Valutazione</em>), oppure pagina PDF precedente / successiva (in <em>Elaborati</em>).</li><li><strong><code>Maiusc + ←</code> / <code>Maiusc + →</code> (o <code>PagSu</code> / <code>PagGiù</code>):</strong> Sfoglia le pagine del PDF nella scheda <em>Valutazione</em> senza cambiare la domanda attiva.</li><li><strong><code>1</code> – <code>9</code> (riga superiore o tastierino numerico):</strong> Seleziona / deseleziona il criterio da #1 a #9 della domanda attiva.</li><li><strong><code>V</code>:</strong> Attiva / disattiva la convalida manuale del docente sulla domanda attiva.</li><li><strong><code>Esc</code>:</strong> Esce da qualsiasi campo di testo (Feedback, Motivazione o barra di ricerca) riattivando subito frecce e tasti numerici.</li><li><strong><code>Cmd/Ctrl + +</code> / <code>-</code> / <code>0</code>:</strong> Aumenta / riduce / ripristina la dimensione del testo dell'interfaccia.</li></ul>"
                },
                {
                    q: "Come posso importare i voti e i link personali di consultazione in Moodle?",
                    a: "<p>Gradaly include uno strumento dedicato <strong>🎓 Esportazione Moodle (CSV)</strong> (accessibile sia dalla finestra del <strong>Portale Web online</strong> sia dal menu principale <strong>Esporta</strong>) compatibile con entrambi i flussi ufficiali di Moodle:</p><p><strong>1. Importazione CSV Diretta nel Registro Valutatore di Moodle:</strong><ul><li>In Gradaly, scegli <strong>1. Registro valutatore Moodle (CSV diretto)</strong>, imposta la scala dei voti (punteggio grezzo dell'esame, <code>/20</code> o <code>/100</code>) e il contenuto del feedback (link cliccabile all'elaborato cifrato dello studente su <code>portal.gradaly.io</code> + riepilogo punti per domanda), quindi esporta il file CSV UTF-8.</li><li>Nel tuo corso Moodle, apri la scheda <strong>Valutazioni</strong>, clicca sul menu a discesa in alto a sinistra (<strong>Registro valutatore</strong>) → <strong>Importa</strong> → <strong>File CSV</strong> e carica il file.</li><li>In <em>Identifica gli utenti tramite</em>, associa <code>Codice identificativo</code> (Matricola) a <code>Codice identificativo</code> (o <code>Indirizzo email</code> a <code>Indirizzo email</code>). In <em>Mappatura elementi di valutazione</em>, associa la colonna <code>Valutazione</code> all'elemento desiderato (o <em>Nuovo elemento di valutazione</em>) e la colonna <code>Feedback</code> al corrispondente campo <strong>Feedback</strong>.</li></ul></p><p><strong>2. Foglio di Valutazione Offline di un Compito Moodle (Zero Mappatura Manuale):</strong><ul><li>Nelle impostazioni dell'attività <em>Compito</em> su Moodle, abilita <em>Foglio di valutazione offline</em> e <em>Commenti</em> sotto <em>Tipi di feedback</em>, quindi scarica il CSV da <em>Visualizza tutte le consegne → Azione di valutazione: Scarica foglio di valutazione</em>.</li><li>In Gradaly, seleziona <strong>2. Completa un foglio di valutazione Compito Moodle</strong> e scegli quel file CSV: Gradaly abbina automaticamente tutti gli studenti per Matricola o E-mail e compila sul posto le colonne <code>Valutazione</code> e <code>Commenti</code>, pronto per essere ricaricato direttamente su Moodle!</li></ul></p>"
                },
                {
                    q: "Posso inviare le notifiche e-mail agli studenti dal mio indirizzo istituzionale di ateneo (Outlook Web, Word + Outlook, Thunderbird) tramite Stampa Unione?",
                    a: "<p><strong>Certamente!</strong> Nella finestra <strong>✉️ Notifica via e-mail</strong> del Portale Web online, apri la seconda scheda: <strong>📊 Stampa unione (Il mio client e-mail)</strong>. Puoi personalizzare oggetto e testo del messaggio (usando variabili come <code>{prenom}</code>, <code>{nom}</code>, <code>{matricule}</code>, <code>{note}</code>, <code>{max}</code>, <code>{lien}</code>) ed esportare in 3 formati dedicati: <strong>Origine dati Word <code>.docx</code></strong> (per Stampa unione con Microsoft Word + Outlook), <strong>Cartella Excel <code>.xlsx</code></strong> (con tabella formattata <code>Publipostage</code> per Microsoft 365 / Power Automate) oppure <strong>File <code>.csv</code> UTF-8</strong> (per Thunderbird).</p><p><strong>Perché l'esportazione Stampa Unione di Gradaly è così immediata?</strong> Perché oltre alle singole colonne anagrafiche (<code>EMAIL</code>, <code>PRENOM</code>, <code>NOM</code>, <code>MATRICULE</code>, <code>NOTE</code>, <code>MAX</code>, <code>NOTE_SUR_MAX</code>, <code>LIEN_COPIE</code>), il file esportato contiene già <strong>colonne pre-assemblate pronte all'invio per ciascuno studente</strong>: <code>SUJET_PRET</code> (oggetto), <code>MESSAGE_TEXTE_PRET</code> (testo completo) e <code>MESSAGE_HTML_PRET</code> (e-mail HTML completa). Ti basta inserire quell'unico campo nel tuo programma:</p><ul><li><strong>💼 Microsoft Word + Outlook Desktop Classico (Windows e Mac):</strong> Clicca su <strong>Esporta per Word (<code>.docx</code>)</strong> in Gradaly. In Word, apri <em>Lettere → Seleziona destinatari → Usa un elenco esistente…</em> e seleziona il file <code>.docx</code> esportato (a differenza di <code>.xlsx</code> su macOS, una tabella nativa Word <code>.docx</code> si apre subito senza avvisi del convertitore Excel). Inserisci il campo unione <code>«MESSAGE_TEXTE_PRET»</code> e clicca su <em>Finalizza e unisci → Invia messaggi e-mail…</em> (A: <code>EMAIL</code>).</li><li><strong>🌐 Outlook Web (Microsoft 365 nel browser) tramite Power Automate:</strong> Clicca su <strong>Esporta in Excel (<code>.xlsx</code>)</strong> e carica il file sul tuo OneDrive universitario. Su Microsoft Power Automate (<code>make.powerautomate.com</code>), crea un flusso istantaneo in 2 passaggi: <em>Excel Online (Business) → Elenca righe presenti in una tabella</em> (selezionando il file e la tabella <code>Publipostage</code>) seguito da <em>Office 365 Outlook → Invia un messaggio e-mail (V2)</em> con <code>A = EMAIL</code>, <code>Oggetto = SUJET_PRET</code> e <code>Corpo = MESSAGE_HTML_PRET</code>. Per piccoli corsi o singoli rinvii puoi anche cliccare direttamente su <strong>Outlook Web</strong> accanto a ogni studente in Gradaly per aprire il messaggio precompilato su <code>outlook.office.com</code>!</li><li><strong>🦅 Mozilla Thunderbird (Windows, macOS, Linux):</strong> Con il componente aggiuntivo gratuito <em>Mail Merge</em>, componi una nuova e-mail inserendo <code>{{EMAIL}}</code> in <em>A</em>, <code>{{SUJET_PRET}}</code> in <em>Oggetto</em> e <code>{{MESSAGE_TEXTE_PRET}}</code> nel corpo, quindi avvia <em>Mail Merge → CSV</em> selezionando il file <code>.csv</code> esportato.</li></ul>"
                },
                {
                    q: "Dove posso inviare suggerimenti o segnalazioni di bug?",
                    a: "<p>Accogliamo con piacere ogni riscontro, proposta di miglioramento o segnalazione tecnica! Puoi aprire direttamente una segnalazione sul nostro repository GitHub all'indirizzo: <a href=\"https://github.com/gradaly/gradaly-website/issues\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-indigo-600 font-bold hover:underline\">https://github.com/gradaly/gradaly-website/issues</a>.</p>"
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
            partHeader: "Manuale 2 — Modalità Esercitazione e Autovalutazione QR (Studente)",
            partColor: "teal",
            partBanner: {
                kicker: "Manuale 2 • Strumento 2: Modalità Formativa di Esercitazione QR",
                title: "Guida Completa all'Autovalutazione Autonoma degli Studenti tramite Schede Stampabili con Codici QR",
                desc: "Guida autonoma al 100%: progetta una scheda di esercizi PDF con codici QR integrati affinché gli studenti lavorino su carta, scansionino con lo smartphone e ricevano un feedback formativo IA immediato (nessuna chiave API richiesta su portal.gradaly.io, oppure chiave Gemini personale facoltativa)."
            },
            tag: "Modalità Esercitazione QR • Fase 1 — Concetto e Creazione del Progetto",
            badge: "Formativa • Studio Autonomo dello Studente",
            shortTitle: "Concetto e Creazione Progetto Esercitazione",
            title: "Come Funziona la Modalità Esercitazione QR e Creazione di un Progetto",
            subtitle: "Offri ai tuoi studenti un allenamento illimitato su carta con feedback IA istantaneo su smartphone — senza raccogliere alcun foglio né esporre la tua chiave API di docente.",
            paragraphs: [
                "<strong>L'Obiettivo Didattico della Modalità Esercitazione QR (badge <code>Esercitazione</code>):</strong> In preparazione a una prova intermedia o a un appello d'esame, gli studenti hanno bisogno di esercitarsi risolvendo problemi a mano su carta (esercitazioni, fogli settimanali di problemi, temi d'esame degli anni precedenti). Tuttavia raramente è possibile raccogliere e correggere individualmente centinaia di esercitazioni settimanali. <strong>La Modalità Esercitazione QR trasforma qualsiasi scheda PDF di esercizi in un tutor interattivo di autovalutazione:</strong><br>1. <strong>Il Docente</strong> prepara il PDF degli esercizi, definisce i criteri di valutazione (e l'eventuale <code>Soluzione di riferimento</code>), posiziona i codici QR sul PDF e pubblica un portale web statico cifrato.<br>2. <strong>Lo Studente</strong> stampa la scheda PDF (o la visualizza su tablet/schermo), svolge su carta i passaggi matematici o la traccia argomentativa, <strong>scansiona con lo smartphone il codice QR della domanda</strong>, fotografa il proprio svolgimento manoscritto e riceve un <strong>feedback formativo IA immediato criterio per criterio</strong>!",
                "<strong>Zero Chiavi API del Docente Esposte — Relay IA Integrato o Chiave Personale Facoltativa:</strong> A differenza della Modalità Esame in cui il docente esegue la valutazione sugli elaborati raccolti, in Modalità Esercitazione <strong>non vi sono elenchi di studenti, né scansioni da gestire, né chiavi API del docente nel portale pubblicato</strong>. Quando la scheda è pubblicata su <code>portal.gradaly.io</code>, gli studenti possono valutare i propri svolgimenti manoscritti <strong>immediatamente senza configurare alcuna chiave API</strong> grazie al relay IA integrato di Gradaly (ideale per tutti gli studenti, inclusi i minorenni), oppure inserire facoltativamente la propria chiave API personale di Google AI Studio (Gemini) nel browser dello smartphone.",
                "<strong>Interfaccia Essenziale a 3 Schede:</strong> Nella Schermata di Benvenuto, clicca su <strong>Nuovo progetto → Esercitazione (Autovalutazione dello studente tramite Codice QR)</strong> (oppure su <strong>Crea progetto demo → Demo Esercitazione</strong> per esplorare una scheda completa di Trigonometria). Un progetto di Esercitazione apre un ambiente snello a <strong>3 schede</strong>: <code>1. Modello e Domande</code>, <code>2. Posizionamento Codici QR</code> e <code>3. Pubblicazione Web</code>."
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "Schermata di Benvenuto: i progetti di Esercitazione sono identificati dal badge verde acqua 'Practice' accanto ai progetti d'Esame"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "Finestra Creazione Demo: seleziona 'Demo Esercitazione' per aprire una scheda di esercizi QR pronta da provare"
                }
            ],
            callouts: [
                {
                    title: "Flusso Carta + Smartphone",
                    desc: "Gli studenti continuano a scrivere a mano formule, dimostrazioni e grafici su carta ricevendo al contempo supporto formativo immediato via smartphone."
                },
                {
                    title: "Zero Elaborati da Raccogliere, Zero Elenchi",
                    desc: "Un progetto di Esercitazione non prevede elenchi studenti né raccolta di compiti: è dedicato al 100% allo studio autonomo formativo."
                },
                {
                    title: "Zero Chiavi da Configurare su portal.gradaly.io",
                    desc: "Gli studenti accedono subito all'autovalutazione IA su portal.gradaly.io (oppure possono inserire facoltativamente una chiave API Gemini personale)."
                },
                {
                    title: "Demo Esercitazione Integrata Pronta all'Uso",
                    desc: "Avvia la Demo Esercitazione dalla Schermata di Benvenuto per esaminare una scheda QR completa in 10 domande con Soluzione di riferimento."
                }
            ]
        },
        {
            id: "practice-canvas-and-rubric",
            guide: "practice",
            stepNumber: "P2",
            partColor: "teal",
            tag: "Modalità Esercitazione QR • Fase 2 — Scheda, Soluzione e Criteri",
            badge: "Guida Autonoma al 100%",
            shortTitle: "PDF Esercizi, Soluzione e Criteri",
            title: "Importazione del PDF degli Esercizi, della Soluzione di Riferimento e Progettazione dei Criteri Formativi",
            subtitle: "Inquadra ciascun esercizio sul PDF vuoto, carica la Soluzione di riferimento e costruisci criteri chiari di autovalutazione manualmente o con l'Assistente IA.",
            paragraphs: [
                "Nella scheda <strong>1. Modello e Domande</strong> del tuo progetto di Esercitazione (nota l'intestazione snella a 3 schede e l'assenza dell'area di identificazione studente), definisci gli esercizi e i criteri di valutazione che guideranno l'IA nell'analisi della foto scattata dallo studente:",
                "<strong>1. Importa il PDF Vuoto degli Esercizi (<code>Modello</code>) e Delimita Ogni Domanda:</strong> Importa la tua scheda PDF e traccia un rettangolo attorno a ciascun esercizio (<code>Q1</code>, <code>Q2</code>, ...). <strong>Importante:</strong> includi nel rettangolo il testo stampato dell'esercizio! In Modalità Esercitazione, Gradaly ritaglia esattamente quest'area sia per <strong>mostrare la consegna sullo schermo dello smartphone dello studente</strong> sia per fornire il pieno contesto visivo all'IA.",
                "<strong>2. Importa il PDF Facoltativo della Soluzione di Riferimento (<code>Soluzione di riferimento</code>):</strong> Usa il selettore <strong>Consegna (Modello) / Soluzione di riferimento</strong> in cima al lettore PDF per caricare il documento contenente lo svolgimento completo degli esercizi. Se il PDF della soluzione ha la stessa impaginazione della scheda vuota, i riquadri si applicano automaticamente; se l'impaginazione differisce, passa alla vista <em>Soluzione di riferimento</em> e traccia il riquadro corrispondente per ciascun quesito. In Modalità Esercitazione, la Soluzione di riferimento svolge tre funzioni:<br>• <strong>Aiutare l'Assistente Griglia IA</strong> a formulare criteri accurati.<br>• <strong>Fornire lo svolgimento matematico esatto all'IA</strong> durante la valutazione della foto dello studente.<br>• <strong>Sbloccare la soluzione visiva sullo smartphone dello studente</strong> dopo che questi ha inviato almeno un primo tentativo svolto su carta!",
                "<strong>3. Definisci la Regola di Punteggio e i Criteri (Puramente Additivi o Puramente Sottrattivi):</strong><br>• Gradaly calcola <code>Punteggio = Punteggio di base + Σ (criteri soddisfatti)</code>, vincolato tra <code>0</code> e <code>Punteggio max</code>.<br>• Scegli una <strong>griglia puramente additiva</strong> (<code>Punteggio di base = 0</code>, criteri positivi <code>+1</code>, <code>+2</code> per ciascun passaggio corretto) oppure una <strong>griglia puramente sottrattiva</strong> (<code>Punteggio di base = Punteggio max</code>, penalità negative <code>-0.5</code>, <code>-1</code>). Evita di mescolare pesi positivi e negativi nella stessa domanda. Puoi inoltre collegare alternative consecutive in gruppi mutuamente esclusivi <strong><code>OR</code></strong> e passare tra anteprima KaTeX e modifica tramite il pulsante unificato <strong>Render / Edit</strong>.<br>• Usa il campo inferiore (<strong>Istruzioni e logica di valutazione / Prompt IA</strong>) per specificare indicazioni didattiche o incollare il testo del quesito se necessario.",
                "<strong>4. Usa l'Assistente IA per la Griglia (<code>Progetta / Modifica con l'IA</code>):</strong> Clicca su <strong>Progetta / Modifica con l'IA</strong> sopra l'elenco dei criteri per generare automaticamente una bozza di griglia formativa dalla consegna e dalla Soluzione di riferimento, perfezionandola poi via chat."
            ],
            screenshots: [
                {
                    filePrefix: "13a_practice_questions",
                    caption: "Modalità Esercitazione — Scheda 1. Modello e Domande: barra essenziale a 3 schede (Modello e Domande | Posizionamento Codici QR | Pubblicazione Web), riquadri domande, criteri formativi e selettore Consegna / Soluzione di riferimento"
                },
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "Assistente Griglia IA: co-progetta criteri formativi e istruzioni sfruttando sia il testo dell'esercizio sia la Soluzione di riferimento"
                }
            ],
            callouts: [
                {
                    title: "Ritaglio della Consegna sullo Smartphone",
                    desc: "L'area tracciata sul Modello PDF viene automaticamente ritagliata e mostrata in cima allo schermo dello smartphone dello studente."
                },
                {
                    title: "Soluzione di Riferimento (Correttore)",
                    desc: "Guida l'IA durante la valutazione e può essere sbloccata automaticamente per lo studente dopo il suo primo tentativo scritto."
                },
                {
                    title: "Criteri Puramente Additivi o Sottrattivi",
                    desc: "Criteri analitici passo dopo passo aiutano lo studente a capire con chiarezza quali passaggi sono corretti e quali richiedono revisione."
                },
                {
                    title: "Assistente Griglia IA Integrato",
                    desc: "Genera in pochi secondi una griglia formativa completa a partire dal PDF degli esercizi e dalla soluzione di riferimento."
                }
            ]
        },
        {
            id: "practice-qr-placement",
            guide: "practice",
            stepNumber: "P3",
            partColor: "teal",
            tag: "Modalità Esercitazione QR • Fase 3 — Posizionamento Codici QR e PDF Stampabile",
            badge: "Incluso in Free e Pro",
            shortTitle: "Posizionamento QR e PDF Stampabile",
            title: "Posizionamento dei Codici QR sul PDF e Download della Scheda Stampabile",
            subtitle: "Inserisci un codice QR Generale (intera scheda) e/o codici QR per singola domanda direttamente all'interno di ciascun riquadro sul PDF.",
            paragraphs: [
                "Apri la scheda <strong>2. Posizionamento Codici QR</strong> per scegliere dove far comparire i codici QR di autovalutazione sulla tua scheda di esercizi:",
                "<strong>1. Codice QR Generale vs Codici QR per Domanda:</strong><br>• <strong>Codice QR Generale (Intera Scheda):</strong> Posizionato per impostazione predefinita in alto sulla Pagina 1. Scansionandolo si apre il portale mobile sull'elenco completo degli esercizi.<br>• <strong>Codici QR per Domanda (<code>QR Q1</code>, <code>QR Q2</code>, ...):</strong> Integrati direttamente all'interno del riquadro di ciascuna domanda sul PDF. Quando uno studente inquadra <code>QR Q1</code> con la fotocamera del telefono, lo smartphone apre <strong>direttamente la Domanda 1</strong> (<code>?q=Q1</code>), pronta per fotografare lo svolgimento!",
                "<strong>2. Trascinamento Interattivo e Allineamento agli Angoli in 1 Clic:</strong> Clicca su qualsiasi domanda nell'elenco a sinistra per saltare alla pagina corrispondente. Trascina liberamente ciascun badge QR col mouse sulla pagina PDF affinché non copra formule o figure, oppure clicca su <code>Alto-Destra</code>, <code>Alto-Sinistra</code> o <code>Basso-Destra</code>. Puoi attivare o nascondere i singoli codici QR tramite l'icona dell'occhio.",
                "<strong>3. Scarica la Scheda PDF con Codici QR Integrati:</strong> Clicca su <strong>Scarica la scheda PDF con Codici QR</strong>. Gradaly genera un nitido PDF vettoriale con tutti i codici QR attivi posizionati esattamente nei punti scelti, pronto da stampare per l'aula o da caricare su Moodle."
            ],
            screenshots: [
                {
                    filePrefix: "13_practice_qr",
                    caption: "Modalità Esercitazione — Scheda 2. Posizionamento Codici QR: elenco QR Generale e per Domanda a sinistra, pulsanti di posizionamento rapido agli angoli e trascinamento interattivo sulla Pagina 2 (QR Q1 e QR Q2)"
                }
            ],
            callouts: [
                {
                    title: "Accesso Diretto per Domanda (?q=Q1)",
                    desc: "La scansione del codice QR di una domanda apre direttamente quell'esercizio sullo smartphone dello studente senza passaggi intermedi."
                },
                {
                    title: "Codici QR Permanenti anche se Aggiorni la Griglia",
                    desc: "Anche qualora tu affini i criteri in seguito e aggiorni la pubblicazione online, i codici QR già stampati restano validi al 100%!"
                }
            ]
        },
        {
            id: "practice-publish-and-student",
            guide: "practice",
            stepNumber: "P4",
            partColor: "teal",
            tag: "Modalità Esercitazione QR • Fase 4 — Pubblicazione Web (Gradaly Pro) e App Studente",
            badge: "La Pubblicazione Richiede Gradaly Pro",
            shortTitle: "Pubblicazione Web (Pro) e App Studente",
            title: "Pubblicazione del Portale Web di Esercitazione (Gradaly Pro) ed Esperienza dello Studente",
            subtitle: "Mentre la versione Gratuita consente di creare il progetto e progettare il PDF con codici QR, Gradaly Pro sblocca la pubblicazione del Portale Web per gli studenti (online o .zip).",
            paragraphs: [
                "Nella scheda <strong>3. Pubblicazione Web</strong> configuri il comportamento didattico dell'interfaccia mobile e pubblichi il Portale Web di Esercitazione per gli studenti:",
                "<strong>1. Opzioni Didattiche di Visibilità:</strong><br>• <strong>Mostra i criteri della griglia prima del 1° tentativo:</strong> Consenti agli studenti di conoscere fin da subito i passaggi richiesti, oppure mantieni nascosti i criteri finché non inviano una prima foto.<br>• <strong>Mostra la motivazione dettagliata della valutazione IA:</strong> Affianca al feedback formativo la spiegazione puntuale criterio per criterio.<br>• <strong>Sblocca la Soluzione di riferimento dopo almeno un tentativo:</strong> Mantieni protetto il tuo svolgimento modello finché lo studente non invia un primo tentativo scritto a mano!",
                "<strong>2. Anteprima nel Simulatore Smartphone Integrato:</strong> Clicca su <strong>Prova l'applicazione studente (Simulatore)</strong> in alto a destra nel banner per verificare dal vivo l'interfaccia mobile direttamente dentro Gradaly.",
                "<strong>3. Pubblica Online il Portale Web di Esercitazione o Esporta un Archivio Statico <code>.zip</code> (Gradaly Pro):</strong> Mentre la versione Gratuita consente di creare il progetto di Esercitazione e generare la scheda PDF con codici QR, <strong>Gradaly Pro</strong> sblocca la pubblicazione del Portale Web per gli studenti: clicca su <strong>Pubblica con 1 clic su portal.gradaly.io</strong> (con crittografia lato client <strong>AES-256-GCM</strong> e durata selezionabile di <strong>60 giorni</strong>, <strong>180 giorni / 1 semestre</strong> o <strong>365 giorni / 1 anno accademico</strong>) oppure su <strong>Esporta come sito web statico autonomo (.zip)</strong> per ospitarlo sul server del tuo ateneo.",
                "<strong>4. L'Esperienza Passo dopo Passo dello Studente su Smartphone:</strong><br>• Lo studente scansiona il codice QR sulla propria scheda cartacea.<br>• Se la sessione è ospitata su <code>portal.gradaly.io</code>, la valutazione IA funziona <strong>immediatamente senza inserire alcuna chiave API</strong> (tramite il relay IA integrato di Gradaly). Facoltativamente — oppure su un sito statico <code>.zip</code> autonomo — lo studente può toccare il pulsante <strong>Chiave Personale</strong> per incollare la propria <strong>chiave API Google AI Studio (Gemini)</strong> (memorizzata solo localmente nel browser del telefono).<br>• Lo studente tocca <strong>Scatta una foto del mio svolgimento</strong>, fotografa la risposta scritta su carta e avvia la valutazione IA per ricevere punteggio, criteri soddisfatti, feedback matematico in LaTeX e la Soluzione di riferimento sbloccata!",
                "<strong>5. Esempio Interattivo dal Vivo (Scheda PDF Stampabile e Portale Studente):</strong><br>• 🇬🇧 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_EN.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Apri Scheda PDF Stampabile con Codici QR (Demo EN)</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_7c576e0a7ff4729b&id=practice#k=fOTpaHBSuaFzzdN7AJYjSF_BKMgKaYcGQj6lyYljH10\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Apri Portale di Esercitazione Studente dal Vivo (Demo EN)</a>"
            ],
            screenshots: [
                {
                    filePrefix: "14_practice_publish",
                    caption: "Modalità Esercitazione — Scheda 3. Pubblicazione Web: opzioni didattiche, sblocco della Soluzione di riferimento dopo il 1° tentativo, durata (60/180/365 giorni) e pubblicazione Cloud / ZIP in 1 clic con Gradaly Pro"
                },
                {
                    filePrefix: "15_practice_student_portal",
                    caption: "Simulatore Smartphone Studente Integrato: anteprima della web app mobile in cui lo studente fotografa il proprio foglio e riceve subito un feedback formativo IA"
                }
            ],
            callouts: [
                {
                    title: "Simulatore Smartphone Integrato (Gratuito)",
                    desc: "Testa gratuitamente all'interno di Gradaly la tua scheda di esercizi, i criteri e l'esperienza mobile prima della pubblicazione."
                },
                {
                    title: "Cloud in 1 Clic o ZIP Statico (Gradaly Pro)",
                    desc: "Pubblica con crittografia lato client AES-256-GCM su portal.gradaly.io (60/180/365 giorni) oppure esporta un archivio .zip autonomo."
                },
                {
                    title: "Relay IA Integrato o Chiave Personale",
                    desc: "Su portal.gradaly.io gli studenti si autovalutano subito senza configurare chiavi API, oppure possono usare facoltativamente una chiave Gemini personale."
                },
                {
                    title: "Soluzione Sbloccata dopo l'Impegno",
                    desc: "Gli studenti devono fotografare e sottoporre un primo svolgimento su carta prima che venga mostrata la Soluzione di riferimento del docente."
                }
            ]
        },
        {
            id: "practice-faq",
            guide: "practice",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "teal",
            tag: "Domande Frequenti (FAQ)",
            badge: "Crittografia, Accesso, Relay IA e Privacy",
            shortTitle: "Domande Frequenti (FAQ)",
            title: "Domande Frequenti (FAQ)",
            subtitle: "Risposte alle domande più comuni sul perché il portale di Esercitazione è cifrato, chi può accedervi, come vengono gestite le foto e le chiavi API degli studenti e sull'anonimato dell'utilizzo.",
            paragraphs: [
                "Di seguito trovi le risposte alle domande più frequenti sulla Modalità Esercitazione e Autovalutazione QR di Gradaly."
            ],
            faqs: [
                {
                    q: "Perché il sito web di Esercitazione è cifrato?",
                    a: "<p><strong>Per tutelare la proprietà intellettuale del docente:</strong> Né Gradaly né terzi hanno accesso ai contenuti pubblicati — ovvero alla traccia degli esercizi, alla Soluzione di riferimento svolta (<code>Soluzione di riferimento</code>) o ai criteri e alle istruzioni di valutazione del docente. Tutto questo materiale didattico costituisce <strong>proprietà intellettuale del docente</strong>.</p><p>Prima che un singolo byte venga caricato su <code>portal.gradaly.io</code>, Gradaly cifra l'intero pacchetto localmente sul computer del docente mediante <strong><code>AES-256-GCM</code></strong>. La chiave di decifratura (<code>#k=...</code>) è inclusa esclusivamente nel frammento dell'URL (e nei codici QR) dopo il simbolo <code>#</code>, che i browser web non trasmettono mai al server. Il server ospita unicamente blocchi binari cifrati illeggibili.</p>"
                },
                {
                    q: "Chi ha accesso all'applicazione di Esercitazione?",
                    a: "<p><strong>Esclusivamente le persone in possesso del link o dei codici QR con cui il docente ha scelto di condividerli</strong> hanno accesso all'applicazione e possono decifrare gli esercizi nel proprio browser.</p><p>Il docente può quindi distribuire la scheda PDF stampabile (o il link) <strong>in piena riservatezza ai propri studenti</strong> (ad esempio sulla pagina interna del corso su Moodle o su carta a lezione) senza che tracce o soluzioni siano mai indicizzate o pubbliche su Internet. Naturalmente, poiché l'accesso si basa sul possesso del link o del codice QR, l'applicazione diventa accessibile anche all'esterno qualora tale link o codice QR venga condiviso con terzi.</p>"
                },
                {
                    q: "Lo studente ha bisogno di una chiave API, e cosa accade alla foto del suo svolgimento manoscritto?",
                    a: "<p>A seconda della modalità di utilizzo del portale di Esercitazione, esistono due modalità operative — entrambe con garanzia di <strong>anonimato al 100% e zero archiviazione delle immagini</strong>:</p><p><strong>1. Modalità Predefinita su <code>portal.gradaly.io</code> (Nessuna chiave API richiesta allo studente):</strong><ul><li>Quando il progetto di Esercitazione è pubblicato su <code>portal.gradaly.io</code> e lo studente non inserisce una chiave personale, la valutazione utilizza il <strong>relay IA sicuro di Gradaly</strong> (rendendo il servizio immediatamente accessibile a tutti gli studenti, inclusi i minorenni, senza creazione di account).</li><li>In questa modalità, la foto dello svolgimento manoscritto (insieme al prompt di valutazione del quesito) <strong>transita attraverso il server relay di Gradaly</strong> al solo scopo di essere valutata da Gemini Flash.</li><li><strong>Garanzia rigorosa di non conservazione:</strong> L'immagine <strong>non viene mai salvata su disco né sul cloud</strong>, resta <strong>anonima al 100%</strong> e viene <strong>immediatamente eliminata dalla memoria volatile del server</strong> non appena il feedback IA viene restituito allo smartphone dello studente.</li></ul></p><p><strong>2. Modalità con Chiave API Personale (Facoltativa su <code>portal.gradaly.io</code>, oppure su sito statico <code>.zip</code> autonomo):</strong><ul><li>Se lo studente inserisce una propria chiave API Google Gemini tramite il pulsante <em>Chiave Personale</em>, tale chiave viene salvata <strong>esclusivamente in locale nel <code>localStorage</code> del browser sul dispositivo dello studente</strong> (mai trasmessa ad alcun server Gradaly né visibile al docente).</li><li>Con una chiave API personale, il browser dello studente comunica <strong>direttamente tramite HTTPS cifrato con l'endpoint ufficiale Gemini di Google</strong> senza transitare dal server Gradaly.</li></ul></p>"
                },
                {
                    q: "Il docente sa se uno studente utilizza l'applicazione o quali punteggi ottiene?",
                    a: "<p><strong>No — la Modalità Esercitazione QR è al 100% anonima e autonoma.</strong> Non vi è alcuna autenticazione dello studente, nessun elenco iscritti e alcun tracciamento o invio di statistiche al docente.</p><p>Il docente non sa quale studente abbia scansionato un codice QR, quanti tentativi abbia effettuato o quale punteggio abbia ottenuto. Questa scelta progettuale crea intenzionalmente un <strong>ambiente formativo sereno e privo di giudizio</strong> in cui gli studenti possono esercitarsi liberamente su carta, sbagliare e verificare la propria comprensione tutte le volte che desiderano prima dell'esame.</p>"
                },
                {
                    q: "Cosa consente la versione Gratuita rispetto a Gradaly Pro nella Modalità Esercitazione QR?",
                    a: "<p><strong>Versione Gratuita (non-Pro):</strong> Consente di creare il progetto di Esercitazione, importare il PDF degli esercizi e la Soluzione di riferimento, progettare e calibrare i criteri formativi (manualmente o con l'Assistente Griglia IA), posizionare i codici QR, scaricare la <strong>scheda PDF stampabile con codici QR integrati</strong> e testare l'intero flusso nel <strong>Simulatore Smartphone</strong> integrato.</p><p><strong>Gradaly Pro:</strong> Sblocca la <strong>pubblicazione del Portale Web di Esercitazione per gli Studenti</strong> — sia con 1 clic sul cloud cifrato <code>portal.gradaly.io</code> (per 60, 180 o 365 giorni) sia come sito web statico autonomo <code>.zip</code> da ospitare sul proprio server universitario.</p>"
                },
                {
                    q: "Cosa succede se modifico i criteri di valutazione dopo aver già stampato o distribuito la scheda PDF?",
                    a: "<p><strong>I codici QR già stampati rimangono validi al 100%!</strong> Ciascun progetto di Esercitazione mantiene un identificativo di pubblicazione e una chiave di crittografia permanenti. Se individui un refuso o perfezioni un criterio in Gradaly dopo aver distribuito i fogli in aula, ti basta cliccare su <strong>Aggiorna la pubblicazione su portal.gradaly.io</strong> nella scheda <em>3. Pubblicazione Web</em>: gli studenti che scansionano gli stessi codici QR cartacei beneficeranno immediatamente della griglia aggiornata.</p>"
                }
            ]
        }
    ]
};
