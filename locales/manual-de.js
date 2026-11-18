window.GRADALY_MANUAL_I18N = window.GRADALY_MANUAL_I18N || {};
window.GRADALY_MANUAL_I18N.de = {
    badge_manual: "Benutzerhandbuch (2-in-1)",
    back_home: "Zurück zur Website",
    download_btn: "Gradaly herunterladen",
    hero_pill: "2-in-1-Desktop-Anwendung • Vollständiges Benutzerhandbuch v4.5.0",
    hero_title: "Gradaly-Benutzerhandbuch",
    hero_subtitle: "Besser bewerten, gezielter fördern. Gradaly ist eine 2-in-1-Anwendung mit zwei eigenständigen Workflows: (1) Klausur- & Probeklausur-Bewertung durch Lehrende (für formative Probeklausuren unter realistischen Prüfungsbedingungen oder offizielle Abschlussprüfungen) und (2) QR-gestützte Selbsteinschätzung durch Studierende per Smartphone. Wählen Sie unten das passende Handbuch für Ihren Einsatzzweck:",
    search_placeholder: "In allen Handbüchern suchen (z. B. Klausur, Probeklausur, QR-Übung, Bewertungsraster, OCR, API-Schlüssel, FAQ)...",
    card_exam_badge: "Produkt 1 • Bewertung durch Lehrende",
    card_exam_chapters: "Kapitel E1–E9",
    card_exam_title: "Handbuch 1: Prüfungs- & Probeklausur-Modus (Durch Lehrende)",
    card_exam_desc: "Für offizielle Abschlussklausuren, Zwischenprüfungen oder formative Probeklausuren während des Semesters unter realistischen Prüfungsbedingungen: Prüfungsbögen scannen, Identitäten zu 100 % offline per OCR zuordnen, manuell, KI-gestützt oder im Team korrigieren und kommentierte Bögen zurückgeben.",
    card_practice_badge: "Produkt 2 • Selbsteinschätzung durch Studierende",
    card_practice_chapters: "Kapitel P1–P5",
    card_practice_title: "Handbuch 2: QR-Modus für Übung & Selbsteinschätzung (Durch Studierende)",
    card_practice_desc: "Für Übungsblätter, Tutorien und Selbstlernaufgaben: Versehen Sie Ihr Übungs-PDF mit QR-Codes, sodass Studierende auf Papier lösen, den QR-Code mit dem Smartphone scannen und sofortiges formatives KI-Feedback erhalten.",
    filter_label: "Anzeige:",
    filter_exam: "1. Prüfungshandbuch (E1–E9)",
    filter_practice: "2. QR-Übungshandbuch (P1–P5)",
    filter_all: "Alle Kapitel anzeigen",
    filter_hint: "Jedes Handbuch ist zu 100 % eigenständig — Sie müssen nicht beide lesen!",
    switch_guide_kicker: "Den zweiten Gradaly-Workflow entdecken",
    btn_go_practice: "Handbuch 2 öffnen: QR-Übungsmodus",
    btn_go_exam: "Handbuch 1 öffnen: Prüfungsmodus",
    toc_title: "Inhaltsverzeichnis",
    sidebar_exam_mode: "Prüfungsmodus",
    sidebar_practice_mode: "QR-Übungsmodus",
    screenshot_badge: "EN-Oberfläche",
    privacy_box_title: "100 % Lokaler Studierendendatenschutz",
    privacy_box_text: "Teilnehmerlisten, Identifikationsbereiche, OCR-Zuordnungen und Projektdateien werden lokal unter Documents/Gradaly auf Ihrem Rechner gespeichert. Cloud-Portale und Team-Links nutzen clientseitige AES-256-GCM-Zero-Knowledge-Verschlüsselung.",
    sections: [
        // =========================================================================
        // GUIDE 1: EXAM GRADING MODE (E1 to E9) — 100% SELF-CONTAINED
        // =========================================================================
        {
            id: "exam-getting-started",
            guide: "exam",
            stepNumber: "E1",
            partHeader: "Handbuch 1 — Prüfungs- & Probeklausur-Modus (Lehrende)",
            partColor: "indigo",
            partBanner: {
                kicker: "Handbuch 1 • Produkt 1: Klausur- & Probeklausur-Bewertung",
                title: "Vollständiger Leitfaden zur Klausur- & Probeklausur-Bewertung durch Lehrende (100 % Manuell, KI-gestützt & im Team)",
                desc: "Eigenständiges Handbuch zur Bewertung gescannter Prüfungsbögen — sowohl für offizielle Klausuren als auch für formative Probeklausuren während des Semesters unter realistischen Prüfungsbedingungen."
            },
            tag: "Prüfungsmodus • Schritt 1 — Prüfungsprojekt erstellen",
            badge: "100 % Manuell oder KI-gestützt",
            shortTitle: "Prüfungsprojekt erstellen",
            title: "Prüfungsprojekt anlegen & 100 % manuelle vs. KI-gestützte Workflows",
            subtitle: "Starten Sie ein neues Prüfungsprojekt (oder laden Sie die Klausur-Demo mit 20 Prüfungsbögen), um gescannte Klausuren auf Ihrem Rechner auszuwerten.",
            paragraphs: [
                "<strong>Was ist ein Prüfungsprojekt (Badge <code>Prüfung</code> / <code>Exam</code>)?</strong> Ein Prüfungsprojekt ist für jede Leistungsüberprüfung konzipiert, bei der Lehrende schriftliche Ausarbeitungen einsammeln, als PDF scannen und die Kohorte bewerten — einschließlich <strong>offizieller Zwischen- und Abschlussklausuren</strong> sowie <strong>formativer Probeklausuren während des Semesters</strong> unter realistischen Prüfungsbedingungen. Selbst wenn Sie Ihre Abschlussklausur lieber von Hand auf Papier korrigieren, bietet sich der Prüfungsmodus ideal an, um zur Semestermitte eine Probeklausur durchzuführen und allen Studierenden detailliertes, individuelles Feedback zu geben. Die obere Navigationsleiste umfasst <strong>6 spezialisierte Registerkarten</strong>: <code>1. Vorlage &amp; Fragen</code>, <code>2. Studierende</code>, <code>3. Prüfungsbögen</code>, <code>4. Zuordnung</code>, <code>5. Bewertung</code> und <code>6. Auswertung</code>.",
                "<strong>100 % manueller Modus oder KI-gestützter Modus:</strong> Sie benötigen <strong>keinen</strong> KI-API-Schlüssel, um eine Klausur in Gradaly zu korrigieren. Direkt nach der Installation arbeitet Gradaly im <strong>100-%-Manuell-Modus</strong> mit schnellen Tastenkürzeln (<code>1–9</code> zum An-/Abwählen von Kriterien, <code>J</code>/<code>K</code> zum Wechseln zwischen Studierenden), dynamischer Neuberechnung der Gesamtpunkte über die gesamte Kohorte bei Gewichtsänderungen sowie reichhaltigem Markdown- &amp; KaTeX-Feedback. Bei Bedarf können Sie jederzeit einen KI-API-Schlüssel hinterlegen, um den <strong>KI-Bewertungsraster-Assistenten</strong> und die <strong>multimodale KI-Vorbewertung</strong> zuzuschalten — wobei die fachliche Letztentscheidung stets bei Ihnen liegt.",
                "Klicken Sie auf dem <strong>Startbildschirm</strong> auf <strong>Neues Projekt</strong> und wählen Sie <strong>Prüfungsprojekt (Klausurkorrektur)</strong>, oder klicken Sie auf <strong>Demo-Projekt erstellen → Demo-Prüfung</strong>, um eine vollständige Physik-Beispielklausur mit 20 handschriftlichen Prüfungsbögen und einer Musterlösung zu erkunden."
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "Startbildschirm: Prüfungsprojekte sind am indigoblauen Badge ‚Exam‘ erkennbar und werden lokal unter Documents/Gradaly gespeichert"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "Demo-Auswahldialog: Wählen Sie ‚Exam Project (Teacher Grading)‘, um eine Offline-Demo mit 20 bewerteten Prüfungsbögen zu erzeugen"
                }
            ],
            callouts: [
                {
                    title: "Dedizierter 6-Tab-Prüfungsarbeitsbereich",
                    desc: "Vorlage & Fragen → Studierende → Prüfungsbögen → Offline-OCR-Zuordnung → 3-Spalten-Bewertungskonsole → Kohortenstatistik & Exporte."
                },
                {
                    title: "Zu 100 % offline & manuell nutzbar",
                    desc: "Korrigieren Sie zügig manuell per Tastatursteuerung oder kombinieren Sie KI-Vorbewertung mit menschlicher Validierung."
                },
                {
                    title: "Integrierte Klausur-Demo mit 20 Bögen",
                    desc: "Testen Sie den gesamten Prüfungsworkflow sofort ohne eigene Scans anhand der mitgelieferten englischen oder französischen Beispielklausur."
                },
                {
                    title: "100 % lokale Dateien unter Documents/Gradaly",
                    desc: "Sämtliche PDFs, Teilnehmerlisten und Bewertungen verbleiben in transparenten lokalen Ordnern auf Ihrem Rechner — ohne Cloud-Zwang."
                }
            ]
        },
        {
            id: "exam-canvas-and-rubric",
            guide: "exam",
            stepNumber: "E2",
            partColor: "indigo",
            tag: "Prüfungsmodus • Schritt 2 — Vorlage, ID-Bereich & Bewertungsraster",
            badge: "Entscheidend für präzise Bewertung",
            shortTitle: "Vorlage, ID-Bereich & Kriterien",
            title: "Identifikationsbereich, Aufgabenfelder, Bewertungslogik & Musterlösung definieren",
            subtitle: "Importieren Sie Ihre leere Klausurvorlage als PDF, rahmen Sie das Kopffeld für die Offline-OCR ein und legen Sie Aufgaben sowie Bewertungskriterien fest.",
            paragraphs: [
                "Importieren Sie in der Registerkarte <strong>1. Vorlage &amp; Fragen</strong> zunächst das leere Klausur-PDF (<code>Vorlage</code> / <code>Canvas</code>). Anschließend zeichnen Sie zwei Arten rechteckiger Bereiche auf den PDF-Seiten ein:",
                "<strong>1. Identifikationsbereich der Studierenden einzeichnen (<code>ID</code>):</strong> Klicken Sie links auf <strong>Identifikationsbereich Studierende (Name / Matrikelnummer)</strong> und ziehen Sie auf Seite 1 ein Rechteck um das Kopffeld, in das Studierende ihren Namen und ihre Matrikelnummer eintragen. Gradaly schneidet genau diesen Bereich später auf jedem Prüfungsbogen aus, um einen <strong>100-%-Offline-OCR-Abgleich</strong> mit Ihrer Teilnehmerliste durchzuführen.",
                "<strong>2. Aufgabenbereiche einzeichnen &amp; Quelle der Aufgabenstellung für die KI wählen (<code>Prüfungsbogen</code> vs. <code>Vorlage</code>):</strong> Wenn Sie die KI-Bewertung für einen Prüfungsbogen starten, schneidet Gradaly das markierte Rechteck der jeweiligen Frage aus und übermittelt es zusammen mit Ihren Bewertungskriterien an das gewählte Vision-KI-Modell.<br>• <strong>Einzelner kombinierter Bereich (Standard):</strong> Rahmen Sie nach Möglichkeit sowohl die gedruckte Aufgabenstellung als auch das studentische Antwortfeld gemeinsam in einem einzigen Rechteck ein. Standardmäßig (<code>KI-Aufgabenstellung: Prüfungsbogen</code>) schneidet Gradaly dieses Rechteck <strong>direkt aus dem jeweiligen Studierendenbogen (<code>copies/copie_XXX.pdf</code>)</strong> aus — haben Studierende individualisierte Zahlenwerte auf ihrem Bogen, sieht die KI exakt die individuellen Parameter und die zugehörige Antwort.<br>• <strong>Aufgabenstellung &amp; Antwort trennen (<code>Aufgabenstellung / Antwort trennen</code>) &amp; Auswahl <code>KI-Aufgabenstellung</code>:</strong> Liegen Fragestellung und Antwortfeld auf unterschiedlichen Seiten oder sind durch andere Inhalte getrennt, klicken Sie auf <strong>Aufgabenstellung / Antwort trennen</strong>, um zwei separate Bereiche (<code>Aufgabenstellung</code> und <code>Antwort auf Bogen</code>) festzulegen, und wählen Sie die Quelle der Aufgabenstellung:<br>&nbsp;&nbsp;– <strong><code>Prüfungsbogen</code> (<code>Student Copy</code>):</strong> Sowohl Aufgabenstellungs- als auch Antwortbereich werden aus dem <strong>individuellen Bogen der jeweiligen Person</strong> ausgeschnitten und vertikal zusammengefügt (unerlässlich bei individualisierten Zahlenwerten oder Aufgabenvarianten).<br>&nbsp;&nbsp;– <strong><code>Vorlage</code> (<code>Canvas</code>):</strong> Die Aufgabenstellung wird aus der leeren Klausurvorlage (<code>canvas.pdf</code>) ausgeschnitten und oberhalb des studentischen Antwortfelds angefügt (ideal, wenn Studierende auf separaten Reinschriftbögen ohne abgedruckten Aufgabentext antworten).",
                "<strong>3. Basispunktzahl (<code>Base Score</code>), Maximalpunktzahl (<code>Max Score</code>), Begrenzung &amp; <code>Max. erreichbar</code> verstehen:</strong><br>• <strong>Berechnungsformel:</strong> Gradaly beginnt bei der <strong>Basispunktzahl</strong> der Frage, addiert die Punkte aller erfüllten Kriterien (<code>Rohwert = Basispunktzahl + Σ ausgewählte Kriterien</code>) und <strong>begrenzt die endgültige Aufgabenpunktzahl strikt auf das Intervall zwischen <code>0</code> und <code>Maximalpunktzahl</code></strong>.<br>• <strong>Rein additives ODER rein abziehendes Bewertungsschema:</strong> Für ein <strong>additives Schema</strong> setzen Sie <code>Basispunktzahl = 0</code> und vergeben ausschließlich positive Teilpunkte (<code>+1</code>, <code>+1,5</code>). Für ein <strong>abziehendes (subtraktives) Schema</strong> setzen Sie <code>Basispunktzahl = Maximalpunktzahl</code> und verwenden ausschließlich Abzugskriterien (<code>-0,5</code>, <code>-1</code>). <strong>Vermeiden Sie es, positive und negative Punkte innerhalb derselben Frage zu mischen</strong> — ein konsistentes Schema ist sowohl für die KI als auch für Studierende deutlich transparenter.<br>• <strong>Kontrollanzeige <code>Max. erreichbar</code>:</strong> Zeigt <code>Basispunktzahl + Σ (positive Kriterien)</code> an, sodass Sie sofort erkennen, ob die Summe Ihrer Kriterien exakt der <code>Maximalpunktzahl</code> entspricht.",
                "<strong>4. Unteres Feld für allgemeine Bewertungshinweise (<code>Bewertungshinweise &amp; Korrekturlogik / KI-Prompt</code>):</strong> Nutzen Sie das Textfeld am unteren Rand jeder Frage, um Sonderfälle zu regeln (z. B. Folgefehlerregelung, äquivalente Schreibweisen) — und fügen Sie dort den Aufgabentext im Klartext ein, falls dieser außerhalb des Bildausschnitts liegt.",
                "<strong>5. Musterlösung importieren &amp; prüfen (<code>Solutionnaire</code> / <code>⭐ Musterlösung</code>):</strong> Über den Umschalter <strong>Aufgabenstellung (Vorlage) / Musterlösung</strong> oberhalb der PDF-Ansicht importieren Sie das PDF Ihrer Musterlösung. Es erscheint ganz oben in der Registerkarte Bewertung als <strong><code>⭐ Musterlösung</code></strong>: Überprüfen Sie stets, ob Ihre eigene Musterlösung bei jeder Aufgabe die <strong>volle Punktzahl (<code>Max/Max</code>)</strong> erzielt!"
            ],
            screenshots: [
                {
                    filePrefix: "02_questions",
                    caption: "Prüfungsmodus — Registerkarte Vorlage & Fragen: Schaltfläche Identifikationsbereich, Basis-/Maximalpunktzahlen, ankreuzbare Kriterien, KI-Bewertungshinweise und Umschalter Vorlage / Musterlösung"
                }
            ],
            callouts: [
                {
                    title: "Identifikationsbereich für Offline-OCR",
                    desc: "Rahmen Sie das Kopffeld auf Seite 1 einmal ein; Gradaly extrahiert es auf allen Scans für die lokale Namens- und Matrikelnummernerkennung."
                },
                {
                    title: "Rein additives oder abziehendes Raster",
                    desc: "Starten Sie bei 0 mit +Punkten oder bei der Maximalpunktzahl mit −Punkten. Aufgabenwerte werden stets auf [0, Maximalpunktzahl] begrenzt."
                },
                {
                    title: "Aufgabenstellung mit einrahmen",
                    desc: "Erfassen Sie nach Möglichkeit sowohl die gedruckte Fragestellung als auch das Antwortfeld (oder fügen Sie den Aufgabentext unten im Hinweisfeld ein)."
                },
                {
                    title: "Plausibilitätsprüfung per Musterlösung (⭐)",
                    desc: "Importieren Sie Ihre Musterlösung als PDF und prüfen Sie mit einem Klick, ob sie bei jeder Frage die volle Punktzahl (Max/Max) erreicht."
                }
            ]
        },
        {
            id: "exam-ai-rubric-assistant",
            guide: "exam",
            stepNumber: "E3",
            partColor: "indigo",
            tag: "Prüfungsmodus • Schritt 3 — KI-Bewertungsraster-Assistent",
            badge: "Interaktiver Chat & Kalibrierung",
            shortTitle: "KI-Bewertungsraster-Assistent",
            title: "Bewertungskriterien mit dem KI-Assistenten entwerfen & kalibrieren",
            subtitle: "Generieren oder verfeinern Sie Ihr Bewertungsraster anhand von Aufgabenstellung und Musterlösungs-PDF, iterieren Sie per Chat und fügen Sie Screenshots echter Prüfungsbögen ein.",
            paragraphs: [
                "Klicken Sie bei einer beliebigen Frage in <strong>Vorlage &amp; Fragen</strong> auf <strong>Mit KI entwerfen / bearbeiten</strong> (<code>Design / Edit with AI</code>), um den interaktiven <strong>KI-Bewertungsraster-Assistenten</strong> zu öffnen.",
                "<strong>1. Vorgaben für das Bewertungsraster einstellen:</strong> Legen Sie die angestrebte <code>Maximalpunktzahl</code> fest, wählen Sie eine <strong>additive</strong> oder <strong>abziehende</strong> Bewertungsphilosophie und bestimmen Sie die gewünschte <strong>Anzahl an Kriterien</strong> (3, 4, 5 oder frei durch die KI). Wenn Sie ein Musterlösungs-PDF geladen haben, aktivieren Sie <em>„Antwort der Musterlösung als Referenz verwenden“</em>, damit die KI sowohl die Aufgabenstellung als auch Ihren vollständigen Lösungsweg berücksichtigt.",
                "<strong>2. Im Chat verfeinern &amp; Studierenden-Screenshots einfügen (<code>Cmd+V</code> / <code>Strg+V</code>):</strong> Passen Sie die vorgeschlagenen Kriterien rechts im Dialog in natürlicher Sprache an. Besonders hilfreich: Erstellen Sie einen Screenshot einer echten handschriftlichen Studierendenantwort, <strong>fügen Sie ihn direkt in den Chat ein</strong> und schreiben Sie z. B.: <em>„Dieser Lösungsweg verdient die volle Punktzahl; bitte passen Sie die Kriterien und Bewertungshinweise entsprechend an.“</em>",
                "<strong>3. Übernehmen &amp; an einzelnen Bögen kalibrieren:</strong> Klicken Sie auf <strong>Bestätigen und auf Frage anwenden</strong> und testen Sie das Raster anschließend zunächst an Ihrer <code>⭐ Musterlösung</code> sowie an 2–3 echten Prüfungsbögen in der Bewertungskonsole, bevor Sie den Stapellauf für die gesamte Kohorte starten."
            ],
            screenshots: [
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "Dialog des KI-Bewertungsraster-Assistenten: Vorgeschlagene Kriterien & PROMPT_TEXT links, interaktiver Verfeinerungs-Chat (mit Screenshot-Unterstützung) rechts"
                }
            ],
            callouts: [
                {
                    title: "Analysiert Vorlage & Musterlösung",
                    desc: "Erstellt strukturierte Bewertungskriterien und Punktegewichtungen passend zu Ihrer mathematischen oder fachlichen Herleitung."
                },
                {
                    title: "Echte Antworten einfügen (Cmd/Strg+V)",
                    desc: "Fügen Sie Screenshots von Grenzfällen direkt in den Chat ein, um Kriterienbeschreibungen präzise zu kalibrieren."
                }
            ]
        },
        {
            id: "exam-roster-and-matching",
            guide: "exam",
            stepNumber: "E4",
            partColor: "indigo",
            tag: "Prüfungsmodus • Schritt 4 — Teilnehmerliste, Bögen & Offline-OCR",
            badge: "100 % Lokal & Offline",
            shortTitle: "Teilnehmerliste, Scans & OCR",
            title: "Teilnehmerliste (CSV), PDF-Aufteilung & 100-%-Offline-OCR-Zuordnung",
            subtitle: "Importieren Sie Ihre Studierendenliste, teilen Sie Sammelscans in einzelne Klausurbögen auf und ordnen Sie Identitäten lokal ohne Cloud-Upload zu.",
            paragraphs: [
                "Importieren Sie in der Registerkarte <strong>2. Studierende</strong> Ihre offizielle Teilnehmerliste aus einer CSV- oder Excel-Datei (Moodle, Stud.IP, ILIAS, Campus-Management usw.). Gradaly ordnet die Spalten <strong>Matrikelnummer (Kennung)</strong>, <strong>Nachname</strong>, <strong>Vorname</strong>, <strong>E-Mail</strong> und <strong>Gruppe</strong> übersichtlich zu.",
                "In der Registerkarte <strong>3. Prüfungsbögen</strong> importieren Sie entweder bereits getrennte Einzel-PDFs oder ein <strong>einziges mehrseitiges Sammel-PDF</strong> direkt aus dem Kopierer/Scanner. Geben Sie die Seitenanzahl pro Klausurbogen an (z. B. 4 Seiten pro Person), um den Stapel automatisch in <code>copie_01.pdf</code>, <code>copie_02.pdf</code> usw. zu zerlegen. Falls Ihr Scanner sehr große, hochauflösende Dateien erzeugt hat (<strong>&gt; 220 DPI</strong>), erkennt Gradaly dies beim Import automatisch und bietet eine <strong>native 1-Klick-Optimierung auf 200 DPI</strong> an (reduziert die Projektgröße um bis zu Faktor 4 für schnelleres Teilen und Synchronisieren). Zudem können Sie jederzeit die <strong>Seitenintegritätsprüfung</strong> starten, um auf dem Kopf stehende (180°), vertauschte oder fehlende Seiten aufzuspüren und per 1-Klick-PDF-Reparatur zu korrigieren.",
                "Klicken Sie in der Registerkarte <strong>4. Zuordnung</strong> auf <strong>Automatische Zuordnung</strong>. Gradaly schneidet das Identifikationsfeld auf Seite 1 jedes Bogens aus, führt eine <strong>eingebettete lokale OCR-Erkennung zu 100 % offline auf Ihrem Computer</strong> aus und gleicht handschriftliche Namen sowie Matrikelnummern fehlertolerant mit Ihrer Teilnehmerliste ab. Sie prüfen und bestätigen die Vorschläge bequem nebeneinander in wenigen Sekunden."
            ],
            screenshots: [
                {
                    filePrefix: "04_students",
                    caption: "Registerkarte Studierende: Lokale Teilnehmerliste mit Matrikelnummer, Name, E-Mail-Adresse und Gruppe"
                },
                {
                    filePrefix: "05_copies",
                    caption: "Registerkarte Prüfungsbögen: Sammelscans automatisch aufteilen und einzelne Klausurbögen in der Vorschau prüfen"
                },
                {
                    filePrefix: "06_matching",
                    caption: "Registerkarte Zuordnung: Visueller Direktvergleich des ausgeschnittenen handschriftlichen Kopffelds mit der Teilnehmerliste"
                }
            ],
            callouts: [
                {
                    title: "Strikter Datenschutz (Keine Cloud-OCR)",
                    desc: "Studierendennamen, Matrikelnummern, E-Mails und Kopffeld-Bildausschnitte verlassen niemals Ihren Rechner — die OCR läuft vollständig lokal."
                },
                {
                    title: "Filter für offene Bögen & Schnellsuche",
                    desc: "Filtern Sie gezielt nach noch nicht zugeordneten oder mehrdeutigen Prüfungsbögen, um unleserliche Handschriften rasch zu klären."
                }
            ]
        },
        {
            id: "exam-grading-console",
            guide: "exam",
            stepNumber: "E5",
            partColor: "indigo",
            tag: "Prüfungsmodus • Schritt 5 — Die Bewertungskonsole",
            badge: "100 % Manuell, Standard-KI oder Batch-Flex (-50 %)",
            shortTitle: "Manuelle & KI-gestützte Bewertung",
            title: "Die 3-Spalten-Bewertungskonsole: Tastaturtempo, KI-Kalibrierung & Batch-Modus",
            subtitle: "Navigieren Sie aufgabenweise durch die Kohorte, nutzen Sie den 3-Farben-Statuscode, kalibrieren Sie an Einzelbögen und starten Sie die KI-Vorbewertung im Stapel.",
            paragraphs: [
                "Die Registerkarte <strong>5. Bewertung</strong> vereint drei synchronisierte Arbeitsbereiche: links die <strong>Studierendenliste</strong> (mit der oben angehefteten <code>⭐ Musterlösung</code>), in der Mitte die <strong>interaktive PDF-Ansicht</strong> und rechts den <strong>Aufgaben- &amp; Kriterien-Arbeitsplatz</strong>.",
                "<strong>1. Aufgaben-Kreise &amp; 2D-Tastaturnavigation:</strong> Klicken Sie oben rechts auf einen nummerierten Aufgabenkreis (<code>1</code>, <code>2</code>, <code>3</code> ...) oder drücken Sie <code>←</code> / <code>→</code> (bzw. <code>H</code> / <code>L</code>), um zwischen Aufgaben zu wechseln. Mit <code>↑</code> / <code>↓</code> (bzw. <code>K</code> / <code>J</code>) blättern Sie innerhalb derselben Aufgabe von Person zu Person, schalten mit den Zifferntasten <code>1–9</code> die Kriterien Nr. 1–9 um, validieren manuell mit <code>V</code> und rufen jederzeit mit <code>?</code> (oder über das Symbol <code>⌨️</code> in der Kopfleiste) die integrierte Übersicht aller Tastenkürzel auf.",
                "<strong>2. Der 3-Farben-Statuscode:</strong><br>• 🟢 <strong>Grün (<code>KI</code> / <code>AI</code>):</strong> Von der KI vorbewertet (wartet auf Ihre fachliche Durchsicht).<br>• 🔵 <strong>Blau (<code>Manuell</code> / <code>Human</code>):</strong> Von einer Lehrperson bewertet, angepasst oder ausdrücklich validiert.<br>• ⚪ <strong>Grau (<code>Offen</code> / <code>To grade</code>):</strong> Noch nicht bewertet.",
                "<strong>3. Kalibrierung am Einzelbogen, Inspektion der KI-Anfrage &amp; Kohorten-Batch-Start:</strong><br>• <strong>Einzelfragen-Kalibrierung &amp; Sofort-Abbruch (<code>✕ Stopp</code>):</strong> Klicken Sie unten rechts auf <strong>KI für diese Frage erneut ausführen</strong>, um Ihr Bewertungsraster gezielt am aktuellen Prüfungsbogen zu testen. Dauert die Berechnung eines Reasoning-Modells zu lange, brechen Sie den Vorgang über die rote Schaltfläche <strong><code>✕ Stopp</code> (<code>Interrompre</code>)</strong> direkt neben der Ladeanzeige sofort ab.<br>• <strong>Live-Inspektor für KI-Anfrage &amp; Bildausschnitt (<code>👁️ KI-Anfrage</code> / <code>AI Query</code>):</strong> Klicken Sie neben der Einzelbewertung auf <strong><code>👁️ KI-Anfrage</code></strong>, um den interaktiven <strong>KI-Anfrage-Inspektor</strong> zu öffnen. Er zeigt in Echtzeit: (1) das <strong>exakte zugeschnittene bzw. zusammengefügte JPEG-Bild</strong>, das an das Vision-Modell gesendet wird, einschließlich der Angabe, ob die Aufgabenstellung vom <strong>Prüfungsbogen der Studierenden</strong> oder aus der <strong>leeren Vorlage (<code>canvas.pdf</code>)</strong> stammt (inklusive 1-Klick-Umschalter), (2) den vollständigen <strong>System-Prompt &amp; User-Prompt</strong> sowie (3) die <strong>exakte HTTP-JSON-Payload-Struktur</strong> (einschließlich aktiver Werkzeuge wie <code>code_execution</code> und des strikten JSON-Antwortschemas).<br>• <strong>Stapelstart für mehrere Prüfungsbögen (<code>▶ KI-Bewertung</code>):</strong> Klicken Sie oben links auf <strong>▶ KI-Bewertung starten</strong>, um ausgewählte Bögen und Aufgaben vorzubewerten. Wählen Sie zwischen dem <strong>⚡ Standardmodus</strong> (parallele Worker auf Ebene <code>(Bogen, Frage)</code> mit gemeinsamem PDF-Cache) und dem <strong>🌿 Flex- / Asynchronen Batch-Modus (-50 % Kostenrabatt)</strong>, empfohlen für große Kohorten mit direkten API-Schlüsseln von Gemini, OpenAI oder Anthropic.<br>• <strong>Optionale Anomalieerkennung während der Korrektur (<code>⚠️ Anomalien</code>):</strong> Standardmäßig in den KI-Einstellungen aktiviert, meldet die KI automatisch formale oder visuelle Auffälligkeiten (Antwort außerhalb des Rahmens / Verweis auf andere Seite, stark durchgestrichene oder mehrdeutige Passagen, unleserlicher Scan oder falsche/vertauschte Seite), sodass Sie nach <code>⚠️ Anomalien</code> filtern und jeden Hinweis gezielt prüfen und abhaken können."
            ],
            screenshots: [
                {
                    filePrefix: "07_grading",
                    caption: "Übersicht der Bewertungskonsole: Links die Studierendenliste (mit ⭐ Musterlösung, Statuspunkten, Aufgaben- & Gesamtpunktzahl), mittig das automatisch auf den Antwortbereich zentrierte PDF, rechts das Bewertungsraster"
                },
                {
                    filePrefix: "07b_grading_single_ai",
                    caption: "Unterer Bereich der rechten Spalte: KI-Begründung, Studierenden-Feedback (Markdown + KaTeX), Überschreibschutz-Optionen und erneuter Einzelstart der KI"
                },
                {
                    filePrefix: "07c_grading_launch_modal",
                    caption: "Dialog KI-Bewertung starten: Auswahl von Prüfungsbögen, Aufgaben, Überschreibregeln sowie Standard- vs. asynchronem Flex-Batch-Modus (-50 %)"
                }
            ],
            callouts: [
                {
                    title: "Maximale Geschwindigkeit per 2D-Tastatur",
                    desc: "Bögen wechseln mit ↑/↓ (K/J), Aufgaben mit ←/→ (H/L), Kriterien umschalten mit 1–9, validieren mit V, Textfelder verlassen mit Esc und Kurzübersicht öffnen mit ?."
                },
                {
                    title: "Empfohlener Flex-Batch-Modus (-50 %)",
                    desc: "Verfügbar mit direkten API-Schlüsseln von Gemini, OpenAI und Anthropic für eine um 50 % vergünstigte asynchrone Kohorten-Vorbewertung."
                }
            ]
        },
        {
            id: "exam-collaborative-sharing",
            guide: "exam",
            stepNumber: "E6",
            partColor: "indigo",
            tag: "Prüfungsmodus • Schritt 6 — Team-Korrektur (Gradaly Pro)",
            badge: "Kollaboratives Teilen & Zusammenführen • PRO",
            shortTitle: "Team-Freigabe & Merge (PRO)",
            title: "Kollaboratives Teilen von Projekten & selektives Zusammenführen pro Frage",
            subtitle: "Teilen Sie die Klausurkorrektur unter Kolleginnen, Kollegen oder Tutorinnen und Tutoren über .gradaly-Archive oder Ende-zu-Ende-verschlüsselte Cloud-Links auf (Gradaly Pro).",
            paragraphs: [
                "Wenn Sie eine Prüfung gemeinsam im Lehrteam oder mit wissenschaftlichen Hilfskräften bzw. Tutorinnen und Tutoren korrigieren, ermöglicht <strong>Gradaly Pro</strong> die Weitergabe eines gesamten Projekts oder eines schlanken Teilpakets als lokales <code>.gradaly</code>-Archiv oder über einen <strong>AES-256-GCM-verschlüsselten Cloud-Link</strong> (gültig für 7, 14 oder 30 Tage).",
                "Klicken Ihre Mitkorrigierenden auf <strong>Importieren / Zusammenführen</strong>, überprüft Gradaly anhand des SHA-256-Fingerabdrucks die Übereinstimmung der Klausurvorlage und erlaubt entweder den Import als <strong>eigenständiges neues Projekt</strong> oder das <strong>selektive Zusammenführen von Bewertungsrastern und/oder Korrekturen Frage für Frage</strong> (z. B. Aufgaben 1–2 von Tutor/in A mit Aufgaben 3–4 von Tutor/in B) — inklusive automatischer Sicherheitskopie vor jedem Zusammenführen."
            ],
            screenshots: [
                {
                    filePrefix: "09_share_modal",
                    caption: "Dialog Projekt teilen / exportieren (Gradaly Pro): Freigabeprofile, Fragenfilter und clientseitig AES-256-verschlüsselter Cloud-Link"
                },
                {
                    filePrefix: "10_import_merge_modal",
                    caption: "Dialog Importieren / Selektiv zusammenführen (Gradaly Pro): SHA-256-Vorlagenprüfung und aufgabenweise Zusammenführung von Bewertungsrastern und Korrekturen"
                }
            ],
            callouts: [
                {
                    title: "Ende-zu-Ende-verschlüsselte Cloud-Links",
                    desc: "Teilen Sie Projekte im Lehrteam mit clientseitiger AES-256-GCM-Verschlüsselung (der Schlüssel #k=... erreicht niemals den Server)."
                },
                {
                    title: "Selektives Zusammenführen pro Aufgabe",
                    desc: "Führen Sie Bewertungen mehrerer Korrigierender sauber zusammen, schützen Sie lokale manuelle Korrekturen und profitieren Sie von automatischen Backups."
                }
            ]
        },
        {
            id: "exam-analytics-and-exports",
            guide: "exam",
            stepNumber: "E7",
            partColor: "indigo",
            tag: "Prüfungsmodus • Schritt 7 — Statistik & Klausurrückgabe",
            badge: "Excel • Moodle-CSV • Kommentierte PDFs • Webportal",
            shortTitle: "Statistik, Moodle, PDF & Webportal",
            title: "Kohortenauswertung, Moodle-Export, kommentierte PDFs & Einsichtsportal",
            subtitle: "Analysieren Sie Punkteverteilungen, übertragen Sie Noten samt persönlichem Einsichtslink nach Moodle und geben Sie Ihren Studierenden fundiertes individuelles Feedback zurück.",
            paragraphs: [
                "Die Registerkarte <strong>6. Auswertung</strong> berechnet sämtliche Kohortenstatistiken in Echtzeit: Mittelwert, Median, Standardabweichung, Minimum/Maximum, eindeutige Histogramme mit Intervallen <code>[a, b[</code> sowie die Erfüllungsquote jedes einzelnen Bewertungskriteriums.",
                "Für die Rückgabe der Ergebnisse an Ihre Studierenden (1-Klausur-Testvorschau in der kostenlosen Version; gesamte Kohorte in Gradaly Pro) stehen vier Wege bereit:<br>1) <strong>Mehrblättrige Excel-Notenliste</strong> (Gesamtübersicht + 1 Tabellenblatt pro Aufgabe, wahlweise für alle Bögen oder eine Teilauswahl).<br>2) <strong>Moodle-Export (Bewertungsübersicht-CSV &amp; Aufgaben-Bewertungstabelle)</strong>: Erzeugen Sie eine standardkonforme UTF-8-CSV-Datei für <em>Moodle-Bewertungen → Import → CSV-Datei</em> oder füllen Sie automatisch eine aus einer <em>Moodle-Aufgabe</em> heruntergeladene Offline-Bewertungstabelle aus (Abgleich über Matrikelnummer/ID-Nummer oder E-Mail-Adresse) — inklusive umgerechneter Note (Rohpunkte, <code>/20</code> oder <code>/100</code>) sowie des anklickbaren <strong>persönlichen verschlüsselten Klausureinsichtslinks</strong> direkt in der Moodle-Spalte <em>Feedback</em>!<br>3) <strong>Individuelle kommentierte PDFs (ZIP-Archiv oder Einzelbogen) mit frei wählbarem Dateinamenformat</strong>: Kombiniert ein übersichtliches Deckblatt mit den handschriftlichen Seiten der Studierenden und erlaubt anpassbare Dateinamenmuster über Platzhalter (<code>{nom}</code>, <code>{prenom}</code>, <code>{id}</code>, <code>{projet}</code>, <code>{copie}</code>, <code>{groupe}</code> — z. B. <code>{nom}_{prenom}_{projet}.pdf</code>) samt Live-Vorschau.<br>4) <strong>Zero-Knowledge-Webportal zur Klausureinsicht</strong>: Veröffentlichen und synchronisieren Sie verschlüsselte Prüfungsbögen mit hoher Geschwindigkeit online (Mehrkern-CPU-Pipeline + 10 parallele HTTP/2-Binärstreams), benachrichtigen Sie Studierende wahlweise per <strong>Direktversand (<code>@gradaly.io</code>)</strong> oder per <strong>Serienbrief-Export (<code>Publipostage</code> — über Ihre eigene Hochschul-E-Mail-Adresse in Outlook Web / Microsoft 365, Word + Outlook Desktop oder Thunderbird)</strong> mittels vorbereiteter <code>.docx</code>-, <code>.xlsx</code>- oder <code>.csv</code>-Dateien, exportieren Sie direkt für <strong>Moodle</strong> oder drucken Sie <strong>individuelle QR-Zugangsbelege zum Ausschneiden</strong> für die Ausgabe im Hörsaal."
            ],
            screenshots: [
                {
                    filePrefix: "08_stats",
                    caption: "Registerkarte Auswertung (Prüfungsmodus): Statistische Kennzahlen der Kohorte, Punktehistogramme, Erfolgsquoten pro Kriterium und Export-Zentrale"
                }
            ],
            callouts: [
                {
                    title: "Excel-Notenliste & kommentierte PDFs",
                    desc: "Exportieren Sie offizielle Prüfungslisten sowie individuelle PDF-Klausuren mit detaillierter Kriterienaufschlüsselung und KaTeX-Formelsatz."
                },
                {
                    title: "Moodle-CSV-Export & Online-Einsichtslinks",
                    desc: "Importieren Sie Noten und anklickbare persönliche Einsichtslinks direkt in Moodle (Bewertungsübersicht oder Offline-Bewertungstabelle einer Aufgabe)."
                },
                {
                    title: "Verschlüsseltes Klausureinsichtsportal",
                    desc: "Studierende sehen ihren bewerteten Prüfungsbogen, erfüllte Kriterien und persönliches Feedback über Moodle, E-Mail-Magic-Link oder QR-Beleg ein."
                }
            ]
        },
        {
            id: "exam-ai-settings",
            guide: "exam",
            stepNumber: "E8",
            partColor: "indigo",
            tag: "Prüfungsmodus • Schritt 8 — KI-Konfiguration (Optional)",
            badge: "OpenRouter • Gemini • GPT • Claude • Lokal",
            shortTitle: "API-Schlüssel & Wahl des KI-Modells",
            title: "API-Schlüssel einrichten & das passende KI-Modell auswählen",
            subtitle: "Überspringen Sie dieses Kapitel, wenn Sie Gradaly im 100-%-Manuell-Modus nutzen. Um den KI-Assistenten und die KI-Vorbewertung zu aktivieren, hinterlegen Sie Ihren API-Schlüssel in den Einstellungen (⚙️).",
            paragraphs: [
                "<strong>Die Qualität der Vorbewertung hängt maßgeblich vom gewählten KI-Modell ab:</strong> In unseren Benchmarks mit handschriftlichen Hochschulklausuren (Mathematik, Physik, Ingenieurwissenschaften, Wirtschaftswissenschaften, Geisteswissenschaften) erzielen wir <strong>hervorragende Ergebnisse</strong> mit <strong><code>Gemini 3.8 Flash</code></strong>, <strong><code>GPT 5-4 mini</code></strong>, <strong><code>Claude-Sonnet-5.5</code></strong> und <strong><code>Mistral-Large 4.0</code></strong> — erproben Sie gerne verschiedene Modelle für Ihr Fachgebiet!",
                "<strong>Direkte Anbieterschlüssel vs. OpenRouter:</strong> Sie können einen API-Schlüssel direkt bei <strong>Google Gemini</strong>, <strong>OpenAI</strong> oder <strong>Anthropic</strong> erstellen (wodurch auch der um 50 % vergünstigte asynchrone <strong>Batch- / Flex-Modus</strong> nutzbar wird) oder <strong>OpenRouter</strong> verwenden, dessen Vorteil darin liegt, dass <strong>ein einziger API-Schlüssel Zugriff auf Modelle nahezu aller Anbieter bietet</strong> (Gemini, GPT, Claude, Mistral, DeepSeek, Qwen, Llama) über ein einziges Guthabenkonto.",
                "<strong>0 % Aufschlag &amp; keine proprietären ‚KI-Kreditpakete‘:</strong> Im Gegensatz zu kommerziellen Cloud-Plattformen, die Sie an ein einziges Modell binden und ‚KI-Credits‘ mit hohen Preisaufschlägen weiterverkaufen, erhebt Gradaly <strong>keinerlei Marge</strong> auf die KI-Nutzung. Sie zahlen exakt den offiziellen Tokenpreis Ihres Anbieters — oder <strong>0 €, wenn Ihre Hochschule einen eigenen institutionellen LLM-Server bereitstellt oder Sie lokal ein Modell über Ollama betreiben</strong>.",
                "<strong>Erweiterte Einstellungen — Native Python-Codeausführung (<code>code_execution</code> / <code>code_interpreter</code>):</strong> Unter <em>Einstellungen (⚙️) → Erweiterte Einstellungen</em> können Sie optional das Werkzeug <strong>Python-Codeausführung</strong> aktivieren (standardmäßig deaktiviert). Ist es aktiv, kann das KI-Modell sowohl beim Entwurf des Bewertungsrasters als auch bei der Klausurbewertung Python-Code in einer sicheren serverseitigen Sandbox schreiben und ausführen (<code>code_execution</code> bei Google Gemini, <code>code_interpreter</code> bei OpenAI <code>/v1/responses</code> sowie <code>code_execution_20250825</code> bei Anthropic <code>/v1/messages</code>) — ideal für MINT-Klausuren mit numerischen Berechnungen, Exponentialfunktionen, Trigonometrie oder Algorithmenverfolgung. Über die integrierte Schaltfläche <strong>Testen, ob das Modell Codeausführung unterstützt</strong> prüfen Sie mit einem Klick, ob Ihr gewähltes Modell die Python-Sandbox tatsächlich nutzt.",
                "<strong>Erweiterte Einstellungen — Erweiterter KI-Debug-Modus (<code>.debug/grading/inspect.html</code>):</strong> Wenn Sie den <strong>KI-Debug-Modus</strong> aktivieren, speichert Gradaly für jede KI-Bewertung ein vollständiges Diagnosepaket im Ordner <code>.debug/grading/</code>, darunter einen eigenständigen visuellen HTML-Bericht (<strong><code>inspect.html</code></strong> sowie <code>latest_inspect.html</code>), der das exakt an die KI übermittelte Bild, die Herkunft der Aufgabenstellung aus Prüfungsbogen vs. leerer Vorlage (<code>image_source.json</code>), die System- &amp; User-Prompts (<code>prompt.txt</code>), die komplette HTTP-JSON-Anfragestruktur (<code>request_payload.json</code>), etwaigen vom Modell ausgeführten Python-Code samt Konsolenausgabe sowie die Rohantwort der API (<code>raw_api_response.json</code>) dokumentiert."
            ],
            screenshots: [
                {
                    filePrefix: "11_settings_ai",
                    caption: "Dialog KI-Einstellungen (⚙️): Anbieter auswählen (Google Gemini, OpenRouter, OpenAI, Anthropic oder Lokaler / Hochschulserver), Modell festlegen und Verbindung testen"
                }
            ],
            providerGuides: [
                {
                    name: "OpenRouter (Multi-Provider-Gateway)",
                    tag: "Alle Modelle mit 1 Schlüssel",
                    icon: "fas fa-network-wired",
                    desc: "<strong>Besonderer Vorteil:</strong> Mit einem einzigen Konto und API-Schlüssel testen Sie <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code>, <code>Mistral-Large 4.0</code> und Hunderte weitere Modelle ohne getrennte Abrechnungskonten (Hinweis: der asynchrone Batch-Modus steht über OpenRouter nicht zur Verfügung).",
                    steps: [
                        "Öffnen Sie <strong>openrouter.ai</strong> und melden Sie sich an (oder erstellen Sie ein kostenloses Konto).",
                        "Laden Sie unter <strong>Credits</strong> ein kleines Prepaid-Guthaben auf (z. B. 5 $ oder 10 $ — ausreichend für Tausende Klausurseiten).",
                        "Öffnen Sie <strong>Keys</strong> → klicken Sie auf <strong>Create Key</strong>, vergeben Sie den Namen <code>Gradaly</code> und kopieren Sie den Schlüssel (beginnend mit <code>sk-or-v1-...</code>).",
                        "Öffnen Sie in Gradaly die <strong>Einstellungen (⚙️)</strong>, wählen Sie <strong>OpenRouter</strong>, fügen Sie den Schlüssel ein und wählen Sie Ihr gewünschtes Modell."
                    ],
                    url: "https://openrouter.ai/keys",
                    linkLabel: "OpenRouter-API-Schlüsselkonsole öffnen"
                },
                {
                    name: "Google Gemini (Google AI Studio)",
                    tag: "Schnell & besonders wirtschaftlich",
                    icon: "fas fa-bolt",
                    desc: "Direkter Zugriff auf Googles multimodale Modelle <code>Gemini 3.8 Flash</code> und Pro, inklusive nativer Unterstützung des um 50 % reduzierten asynchronen Batch-Modus.",
                    steps: [
                        "Melden Sie sich mit Ihrem Google-Konto im <strong>Google AI Studio</strong> (<code>aistudio.google.com</code>) an.",
                        "Klicken Sie links auf <strong>Get API key</strong> und anschließend auf <strong>Create API key</strong>.",
                        "Kopieren Sie den erzeugten Schlüssel (beginnend mit <code>AIzaSy...</code>). Aktivieren Sie bei Bedarf Pay-as-you-go-Abrechnung für höhere Anfragelimits.",
                        "Öffnen Sie in Gradaly die <strong>Einstellungen (⚙️)</strong>, wählen Sie <strong>Google Gemini</strong> und fügen Sie Ihren Schlüssel ein."
                    ],
                    url: "https://aistudio.google.com/app/apikey",
                    linkLabel: "Google AI Studio API-Schlüssel öffnen"
                },
                {
                    name: "OpenAI (GPT-Modelle)",
                    tag: "Hohe logische Präzision",
                    icon: "fas fa-brain",
                    desc: "Direkter Zugriff auf die multimodalen Modelle von OpenAI wie <code>GPT 5-4 mini</code>, hervorragend für schrittweise Rechenkontrollen, inklusive 50 % Rabatt im Batch-Modus.",
                    steps: [
                        "Melden Sie sich unter <strong>platform.openai.com</strong> an (unabhängig von einem privaten ChatGPT-Plus-Abonnement).",
                        "Laden Sie unter <strong>Settings → Billing</strong> ein kleines Prepaid-Guthaben auf (z. B. 5 $).",
                        "Öffnen Sie <strong>Dashboard → API keys</strong>, klicken Sie auf <strong>+ Create new secret key</strong> und kopieren Sie den Schlüssel (<code>sk-proj-...</code>).",
                        "Öffnen Sie in Gradaly die <strong>Einstellungen (⚙️)</strong>, wählen Sie <strong>OpenAI</strong>, fügen Sie den Schlüssel ein und wählen Sie Ihr Modell."
                    ],
                    url: "https://platform.openai.com/api-keys",
                    linkLabel: "OpenAI-Plattform API-Schlüssel öffnen"
                },
                {
                    name: "Anthropic (Claude-Modelle)",
                    tag: "Beweise & differenziertes Feedback",
                    icon: "fas fa-feather-alt",
                    desc: "Direkter Zugriff auf Anthropics Modelle <code>Claude-Sonnet-5.5</code> und Opus, besonders geschätzt für die Analyse handschriftlicher mathematischer Beweise und sprachlich präzise Rückmeldungen.",
                    steps: [
                        "Melden Sie sich in der <strong>Anthropic Console</strong> (<code>console.anthropic.com</code>) an.",
                        "Aktivieren Sie unter <strong>Settings → Billing</strong> ein Prepaid-Guthaben.",
                        "Klicken Sie unter <strong>API Keys</strong> auf <strong>Create Key</strong> und kopieren Sie den geheimen Schlüssel (<code>sk-ant-...</code>).",
                        "Öffnen Sie in Gradaly die <strong>Einstellungen (⚙️)</strong>, wählen Sie <strong>Anthropic</strong> und fügen Sie Ihren Schlüssel ein."
                    ],
                    url: "https://console.anthropic.com/settings/keys",
                    linkLabel: "Anthropic-Konsole API-Schlüssel öffnen"
                }
            ],
            callouts: [
                {
                    title: "Hochschulserver oder 100 % lokales Ollama",
                    desc: "Stellt Ihre Universität einen OpenAI-kompatiblen KI-Server bereit oder nutzen Sie lokal Ollama (<code>http://localhost:11434/v1</code>), wählen Sie ‚Universität / Custom‘ bzw. ‚Lokal‘ für 0 € Tokenkosten."
                },
                {
                    title: "1-Klick-Verbindungsdiagnose",
                    desc: "Klicken Sie jederzeit oben in der Kopfleiste auf die KI-Statusanzeige, um Gültigkeit des API-Schlüssels und Modellverfügbarkeit zu überprüfen."
                },
                {
                    title: "Python-Codeausführungs-Sandbox (Optional)",
                    desc: "Aktivieren Sie in den erweiterten Einstellungen die native Python-Ausführung für exakte numerische Nachrechnungen auf Gemini, OpenAI und Anthropic inklusive Kompatibilitätstest."
                },
                {
                    title: "Visueller KI-Anfrage- & Debug-Inspektor",
                    desc: "Klicken Sie in der Bewertungskonsole auf ‚👁️ KI-Anfrage‘ oder öffnen Sie .debug/grading/inspect.html, um Bildausschnitt, Herkunft, Prompts und JSON-Payload einzusehen."
                }
            ]
        },
        {
            id: "exam-faq",
            guide: "exam",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "indigo",
            tag: "Häufig gestellte Fragen (FAQ)",
            badge: "Architektur, Datenschutz & Empfehlungen",
            shortTitle: "Häufig gestellte Fragen",
            title: "Häufig gestellte Fragen (FAQ)",
            subtitle: "Antworten auf häufige Fragen zur Funktionsweise der KI-Bewertung, zu formativen Probeklausuren vs. Abschlussprüfungen, zur lokalen Speicherung unter Documents/Gradaly, zur Sicherheit der API-Schlüssel, zur Zero-Knowledge-Verschlüsselung und zum Support.",
            paragraphs: [
                "Nachfolgend finden Sie ausführliche Antworten auf die häufigsten technischen, didaktischen und datenschutzrechtlichen Fragen zum Prüfungs- &amp; Probeklausur-Modus von Gradaly."
            ],
            faqs: [
                {
                    q: "Wie funktioniert die KI-Bewertung von Gradaly technisch, und stammt das Aufgabenbild aus dem Prüfungsbogen der Studierenden oder aus der leeren Vorlage?",
                    a: "<p>Wenn Sie die KI mit der Bewertung einer Aufgabe auf einem Prüfungsbogen beauftragen, extrahiert Gradaly den <strong>Bildausschnitt des markierten Rechtecks</strong> für diese Aufgabe und übermittelt ihn zusammen mit einem strukturierten Prompt, der Ihre Bewertungskriterien (<code>CRITERIA</code>) und allgemeinen Korrekturhinweise (<code>PROMPT_TEXT</code>) enthält, an das gewählte Vision-KI-Modell.</p><p><strong>Stammt die Aufgabenstellung vom Prüfungsbogen oder aus der leeren Vorlage?</strong><ul><li><strong>Einzelner kombinierter Bereich (Standard):</strong> Zeichnen Sie pro Aufgabe ein einzelnes Rechteck ein, schneidet Gradaly diesen Bereich <strong>vollständig aus dem jeweiligen Studierendenbogen (<code>copies/copie_XXX.pdf</code>)</strong> aus. Die leere Vorlage (<code>canvas.pdf</code>) wird hierbei nicht verwendet; haben Studierende unterschiedliche Zahlenwerte auf ihren Bögen, sieht die KI exakt die individuellen Werte und die zugehörige Lösung.</li><li><strong>Getrennte Bereiche (<code>Aufgabenstellung / Antwort trennen</code>) &amp; Option <code>KI-Aufgabenstellung</code>:</strong> In der Registerkarte <em>1. Vorlage &amp; Fragen</em> bestimmen Sie über den Schalter <strong><code>KI-Aufgabenstellung: [Prüfungsbogen] / [Vorlage]</code></strong>, ob der Aufgabentext aus dem jeweiligen <strong>Prüfungsbogen</strong> (unerlässlich bei individualisierten Klausuren) oder aus der <strong>leeren Vorlage (<code>canvas.pdf</code>)</strong> (hilfreich bei separaten Reinschriftbögen ohne abgedruckten Aufgabentext) entnommen wird.</li></ul></p><p><strong>Exaktes Bild &amp; JSON-Anfrage einsehen:</strong> Klicken Sie jederzeit in der Registerkarte <em>5. Bewertung</em> neben der Einzelbewertung auf <strong><code>👁️ KI-Anfrage</code> (<code>AI Query</code>)</strong> (oder aktivieren Sie unter <em>Einstellungen → Erweiterte Einstellungen</em> den <em>KI-Debug-Modus</em>, um <code>.debug/grading/inspect.html</code> zu öffnen). Dort sehen Sie das exakt gesendete JPEG-Bild, dessen Herkunft, System- &amp; User-Prompts, die vollständige HTTP-JSON-Payload sowie etwaigen ausgeführten Python-Code.</p>"
                },
                {
                    q: "Kann ich der KI-Bewertung vertrauen, oder eignet sie sich eher für formative Probeklausuren?",
                    a: "<p><strong>Ja und nein — zu Beginn niemals blind!</strong> Anfangs kann ein Bewertungsraster noch zu streng oder mehrdeutig formuliert sein, oder das gewählte KI-Modell tut sich mit einem bestimmten Aufgabentyp oder einer ungewöhnlichen Notation schwer.</p><p><strong>Formative Probeklausuren vs. offizielle Abschlussprüfungen:</strong> Viele Lehrende ziehen es vor, ihre offizielle Abschlussklausur klassisch von Hand auf Papier (oder im 100-%-Manuell-Modus von Gradaly) zu korrigieren, setzen die KI-Vorbewertung von Gradaly jedoch sehr gerne für <strong>formative Probeklausuren während des Semesters</strong> ein, um Studierenden unter realistischen Prüfungsbedingungen umfangreiches, individuelles Feedback zu ermöglichen.</p><p><strong>Menschliche Durchsicht und Validierung sind unverzichtbar:</strong> Wann immer Gradaly für <strong>summative bzw. bestehensrelevante Prüfungen</strong> eingesetzt wird, empfehlen wir nachdrücklich, <strong>alle KI-Vorschläge sorgfältig gegenzulesen und manuell zu validieren</strong>. Gradaly ist gezielt darauf ausgelegt, jede einzelne Antwort und Rückmeldung komfortabel zu prüfen, anzupassen und per Klick zu bestätigen — dies entspricht sowohl guter akademischer Praxis als auch den Anforderungen des EU AI Act.</p><p><strong>Transparenz &amp; Klausureinsicht:</strong> Da Gradaly den Studierenden (über kommentierte PDFs oder das Einsichtsportal) volle Transparenz über alle angewandten Kriterien bietet, empfehlen wir zudem, wie gewohnt eine geordnete Klausureinsicht mit Möglichkeit zur Rückfrage bei einzelnen Kriterien einzuräumen.</p>"
                },
                {
                    q: "Was kostet die KI-gestützte Vorbewertung einer Klausur?",
                    a: "<p>Es gibt keinen starren Pauschalpreis, da die Kosten von der Anzahl der Prüfungsbögen, der Aufgabenanzahl sowie der Größe und Preisstufe des gewählten KI-Modells abhängen (jeder API-Anbieter veröffentlicht seine exakten Preise pro Million Eingabe- und Ausgabe-Tokens).</p><p>Als konkreter Praxisrichtwert: Mit einem leistungsstarken Modell wie <strong><code>Gemini 3.8 Flash</code></strong> (das in unseren Hochschultests ausgezeichnete Ergebnisse erzielt) haben wir anspruchsvolle universitären Statistik-Klausuren mit <strong>6 bis 7 handgeschriebenen Seiten bei 400 Studierenden für insgesamt rund 5 $ bis 7 $ API-Kosten</strong> im asynchronen Flex-/Batch-Modus vorbewertet (wobei Gradaly 0 % Aufschlag auf den Anbieterpreis erhebt).</p>"
                },
                {
                    q: "Ich besitze bereits ein kostenpflichtiges Abonnement für ChatGPT Plus (OpenAI), Claude Pro oder Gemini Advanced — warum kann ich dieses nicht anstelle eines API-Schlüssels nutzen?",
                    a: "<p><strong>1. Zwei strikt getrennte Produkte bei den KI-Anbietern:</strong> Bei OpenAI, Anthropic und Google sind Endkunden-Chat-Abonnements (ChatGPT Plus, Claude Pro, Gemini Advanced für ca. 20 $/Monat) und der <strong>Entwickler-API-Zugang</strong> technisch wie abrechnungstechnisch vollständig getrennte Systeme. Chat-Abos berechtigen ausschließlich zur manuellen Nutzung im Webbrowser oder in der Smartphone-App und erlauben Drittsoftware wie Gradaly keinen automatisierten Zugriff (eine Umgehung ist laut Nutzungsbedingungen untersagt).</p><p><strong>2. Parallele Stapelverarbeitung &amp; strengerer Datenschutz:</strong> Um Dutzende oder Hunderte Klausuren parallel vorzubewerten und strukturierte Bewertungsdaten (erfüllte Kriterien, Begründungen und Studierenden-Feedback) zu erhalten, kommuniziert Gradaly über die offizielle API. Darüber hinaus genießt <strong>API-Datenverkehr strengere Datenschutzgarantien</strong>: Anders als in vielen privaten Web-Chats werden über die kommerzielle API übermittelte Prüfungsantworten von OpenAI, Google und Anthropic <strong>vertraglich nicht zum Training ihrer KI-Modelle verwendet</strong>.</p><p><strong>3. Sehr geringe nutzungsabhängige Kosten (kein weiteres Monatsabo):</strong> Ein API-Schlüssel erfordert kein Monatsabonnement — Sie zahlen ausschließlich für die tatsächlich verbrauchten Tokens (<em>Pay-as-you-go</em>, mit 0 % Aufschlag seitens Gradaly), was für eine gesamte Kohorte von mehreren Hundert Studierenden typischerweise <strong>nur wenige Euro bzw. Dollar</strong> beträgt (zudem bietet Google auf der Gemini-API ein kostenloses Testkontingent). Möchten Sie ein einziges Guthabenkonto für sämtliche Modelle (OpenAI, Claude, Gemini, Mistral) nutzen, empfiehlt sich <strong>OpenRouter</strong> oder der KI-Server Ihrer Hochschule.</p>"
                },
                {
                    q: "Wie lange dauert die KI-Vorbewertung meiner Klausur?",
                    a: "<p>Die Bearbeitungsdauer richtet sich nach der Anzahl der Aufgabenfelder, der Anzahl der Prüfungsbögen sowie der fachlichen Komplexität für das KI-Modell. In der Praxis lässt sich eine Klausur mit <strong>400 Prüfungsbögen, 5 Aufgaben und rund zehn handgeschriebenen Seiten</strong> im flexiblen Modus typischerweise <strong>in etwa 10 Minuten vollständig vorbewerten</strong>.</p><p><strong>Tipp zur Beschleunigung:</strong> Erhöhen Sie in den <strong>Einstellungen (⚙️)</strong> gerne die <strong>Anzahl paralleler Worker (Threads)</strong> — sofern das Ratenlimit Ihres API-Anbieters dies zulässt, verkürzen zusätzliche parallele Worker die Gesamtdauer erheblich.</p>"
                },
                {
                    q: "Welche Scan-Auflösung (DPI) sollte ich beim Scannen der Prüfungsbögen wählen?",
                    a: "<p>Streben Sie <strong>möglichst kompakte Dateien bei klarer Lesbarkeit</strong> an: <strong><code>150 DPI</code> bis <code>200 DPI</code></strong> bilden den idealen Kompromiss sowohl für das menschliche Auge als auch für Vision-KI-Modelle.</p><p><strong>Warum Sie NICHT mit 300 oder 600 DPI scannen sollten:</strong> Sehr hohe Auflösungen bringen keinerlei Genauigkeitsgewinn bei der KI-Bewertung (Vision-Modelle skalieren Bilder intern ohnehin herunter), vergrößern Ihre PDF-Dateien jedoch um das 4- bis 10-Fache und verlangsamen unnötig das Aufteilen, Umblättern und den verschlüsselten Cloud-Upload.</p><p><strong>Farbscan bevorzugen:</strong> Wir empfehlen das Scannen in <strong>Farbe (bei 150–200 DPI mit Standard-JPEG-/PDF-Komprimierung)</strong> statt im harten Schwarz-Weiß-Modus (1-Bit). Farbscans erhalten feine Bleistiftlinien, farbige Markierungen in Skizzen sowie tiefgestellte mathematische Indizes deutlich originalgetreuer.</p>"
                },
                {
                    q: "Wo werden die Dateien von Gradaly auf meinem Computer gespeichert?",
                    a: "<p>Alle Ihre Projekte werden lokal im Ordner <strong><code>Documents/Gradaly/</code></strong> Ihres Rechners gespeichert (z. B. <code>~/Documents/Gradaly/</code> unter macOS/Linux bzw. <code>C:\\Users\\IhrName\\Documents\\Gradaly\\</code> unter Windows), jeweils mit einem eigenen Unterordner pro Projekt.</p><p>Innerhalb jedes Projektordners liegen sämtliche Daten in offenen Standardformaten vor:<ul><li><strong>PDF-Dateien:</strong> die leere Klausurvorlage (<code>canvas.pdf</code>), die optionale Musterlösung (<code>solution.pdf</code>) sowie die einzelnen Studierendenbögen im Unterordner <code>copies/</code> (<code>copie_01.pdf</code>, <code>copie_02.pdf</code> usw.).</li><li><strong>Klartext-JSON-Dateien:</strong> Aufgabenbereiche und Bewertungsraster (<code>config.json</code>), Teilnehmerliste mit Namen, Matrikelnummern und E-Mail-Adressen (<code>students.json</code>), OCR-Zuordnungstabelle (<code>matching.json</code>) sowie die Bewertungen und Rückmeldungen jedes Bogens unter <code>gradings/</code> (<code>copie_01.json</code> usw.).</li></ul></p><p><strong>⚠️ Wichtiger Hinweis:</strong> Diese transparente Struktur erleichtert automatische Datensicherungen Ihres Ordners <code>Documents/Gradaly</code> (per Time Machine, Nextcloud, OneDrive usw.). <strong>Bearbeiten, verschieben oder benennen Sie Dateien innerhalb eines Projektordners jedoch bitte NICHT manuell um</strong>, da manuelle Eingriffe interne Verknüpfungen beschädigen können.</p>"
                },
                {
                    q: "Wo werden meine API-Schlüssel gespeichert und ist das sicher?",
                    a: "<p>Ihre KI-API-Schlüssel (Gemini, OpenRouter, OpenAI, Anthropic) werden <strong>ausschließlich lokal auf Ihrem eigenen Computer</strong> in der versteckten Konfigurationsdatei <code>.gradaly_settings.json</code> in Ihrem Benutzerverzeichnis gespeichert (<code>~/.gradaly_settings.json</code> unter macOS/Linux bzw. <code>C:\\Users\\IhrName\\.gradaly_settings.json</code> unter Windows).</p><p><strong>Sicherheitsgarantien:</strong><ul><li>Ihre API-Schlüssel werden <strong>niemals an einen Gradaly-Server übertragen</strong> und sind <strong>niemals enthalten, wenn Sie ein <code>.gradaly</code>-Projektarchiv exportieren oder mit Kolleginnen und Kollegen teilen</strong>.</li><li>Beim Entwerfen von Bewertungsrastern oder bei der KI-Vorbewertung kommuniziert Ihr Computer <strong>direkt über verschlüsseltes HTTPS (TLS 1.3)</strong> mit dem offiziellen API-Endpunkt des von Ihnen gewählten Anbieters (Google, OpenRouter, OpenAI, Anthropic oder Ihrem Hochschulserver).</li><li>Im Dashboard Ihres Anbieters können Sie Ihren API-Schlüssel jederzeit widerrufen, erneuern oder mit einem monatlichen Ausgabenlimit versehen.</li></ul></p>"
                },
                {
                    q: "Wo werden Daten gespeichert, wenn ich eine Prüfung in der Cloud veröffentliche oder einen Cloud-Freigabelink erzeuge? Wer hat Zugriff darauf?",
                    a: "<p>Wenn Sie eine Klausur auf dem <strong>Studierenden-Webportal</strong> veröffentlichen oder einen <strong>kollaborativen Cloud-Freigabelink</strong> erzeugen, wird <strong>jede Datei lokal auf Ihrem Computer mit <code>AES-256-GCM</code> verschlüsselt, noch bevor ein einziges Byte Ihren Rechner verlässt</strong>. Auf unseren europäischen Cloud-Speicher (gehostet in der EU mit automatischem Ablaufdatum) werden ausschließlich unlesbare verschlüsselte Binärpakete (<code>.enc</code>) hochgeladen.</p><p>Der geheime Entschlüsselungsschlüssel (<code>#k=...</code>) befindet sich ausschließlich im URL-Fragment hinter dem Zeichen <code>#</code>. Gemäß Webstandard (RFC 3986) übertragen Browser <strong>das URL-Fragment hinter <code>#</code> niemals an den Server</strong>. Folglich <strong>können selbst die Entwickler von Gradaly Ihre in der Cloud gespeicherten Dateien niemals einsehen, und selbst im Falle eines Angriffs auf die Cloud-Infrastruktur wären keinerlei Inhalte lesbar</strong> — nur Sie und die Personen, denen Sie den vollständigen Link übermitteln, besitzen den Schlüssel.</p>"
                },
                {
                    q: "Warum ist Gradaly eine Desktop-Anwendung und kein reines Web-Tool? Was ist die Vision von Gradaly?",
                    a: "<p>Wir haben uns aus zwei grundlegenden Gründen bewusst für eine native Desktop-Architektur (macOS, Windows, Linux) entschieden:</p><p>1) <strong>Unmittelbare Datensouveränität:</strong> Sie müssen niemals unverschlüsselte Teilnehmerlisten oder Klausurscans in eine fremde SaaS-Datenbank hochladen, nur um Ihre Prüfung vorzubereiten und zuzuordnen.</p><p>2) <strong>Unsere langfristige Vision (100 % autonome lokale KI):</strong> KI-Hardware und offene multimodale Modelle entwickeln sich rasant weiter. <strong>Die Vision von Gradaly ist es, dass leistungsstarke Vision-Sprachmodelle in wenigen Jahren direkt auf dem Laptop von Lehrenden</strong> (oder auf einem lokalen Institutsserver) laufen werden. Da Gradaly als native Desktop-App bereits lokale Schnittstellen (Ollama / vLLM / Hochschulserver) unterstützt, werden Lehrende damit <strong>zu 100 % unabhängig</strong> — Klausurkorrektur komplett offline, ohne Cloud-Abhängigkeit und ohne Tokenkosten.</p>"
                },
                {
                    q: "Worin liegen die Unterschiede zu klassischen webbasierten Korrekturplattformen oder reinen Cloud-KI-Gradern?",
                    a: "<p><strong>Im Vergleich zu klassischen webbasierten Korrekturplattformen:</strong> Browserbasierte Plattformen bieten für bestimmte Szenarien durchaus Vorteile — etwa gleichzeitiges Arbeiten mehrerer Personen in Echtzeit im Browser ohne Dateizusammenführung, spezialisierte Auswertung von Multiple-Choice-Ankreuzbögen oder automatisches Gruppieren kurzer Antworten. Sie verfügen jedoch weder über eine multimodale KI-Vorbewertung für offene handschriftliche Lösungswege noch über einen interaktiven KI-Assistenten zum Entwurf von Bewertungsrastern, und Studierendendaten liegen unverschlüsselt auf Drittservern. Gradaly lässt sich im <strong>100-%-Manuell-Modus</strong> mit demselben strukturierten Kriterien-Workflow nutzen, ergänzt diesen aber optional um KI-gestütztes Rasterdesign, KI-Vorbewertung und vollständige lokale Datenhoheit.</p><p><strong>Im Vergleich zu kommerziellen Cloud-KI-Gradern:</strong> Solche Dienste schreiben meist ein einziges intransparentes KI-Modell vor und verkaufen proprietäre ‚KI-Kreditpakete‘ mit erheblichen Preisaufschlägen. Gradaly lässt Ihnen <strong>volle Freiheit bei der Wahl des KI-Modells</strong> (Gemini, GPT, Claude, Mistral, OpenRouter oder ein kostenloser Hochschul-/Lokalserver) und <strong>berechnet 0 % Aufschlag auf die KI-Nutzung</strong>.</p>"
                },
                {
                    q: "Welche Tastenkürzel stehen für schnelles Navigieren und Korrigieren zur Verfügung?",
                    a: "<p>Gradaly ist so gestaltet, dass Sie eine gesamte Kohorte bewerten können, ohne zur Maus greifen zu müssen. Drücken Sie jederzeit <strong><code>?</code></strong> (oder klicken Sie oben auf das Symbol <strong><code>⌨️</code></strong>), um die Kurzübersicht der Tastenkürzel einzublenden:</p><ul><li><strong><code>↑</code> / <code>↓</code> (oder <code>K</code> / <code>J</code>):</strong> Vorheriger / nächster Prüfungsbogen (funktioniert in <em>Studierende</em>, <em>Prüfungsbögen</em>, <em>Zuordnung</em> und <em>Bewertung</em>).</li><li><strong><code>←</code> / <code>→</code> (oder <code>H</code> / <code>L</code>):</strong> Vorherige / nächste Frage (in <em>Vorlage &amp; Fragen</em> und <em>Bewertung</em>) bzw. vorherige / nächste PDF-Seite (in <em>Prüfungsbögen</em>).</li><li><strong><code>Umschalt + ←</code> / <code>Umschalt + →</code> (oder <code>BildAuf</code> / <code>BildAb</code>):</strong> PDF-Seiten innerhalb der Registerkarte <em>Bewertung</em> umblättern, ohne die aktive Frage zu wechseln.</li><li><strong><code>1</code> bis <code>9</code> (Zahlenreihe oder Ziffernblock):</strong> Kriterium Nr. 1 bis Nr. 9 der aktiven Frage an- oder abwählen.</li><li><strong><code>V</code>:</strong> Manuelle menschliche Validierung für die aktive Frage ein-/ausschalten.</li><li><strong><code>Esc</code>:</strong> Aktives Textfeld (Feedback, Begründung oder Suchfeld) verlassen, um Pfeil- und Ziffernkürzel sofort wieder zu aktivieren.</li><li><strong><code>Cmd/Strg + +</code> / <code>-</code> / <code>0</code>:</strong> Schriftgröße der Benutzeroberfläche vergrößern / verkleinern / zurücksetzen.</li></ul>"
                },
                {
                    q: "Wie importiere ich Noten und persönliche Einsichtslinks in Moodle?",
                    a: "<p>Gradaly verfügt über ein spezialisiertes Werkzeug <strong>🎓 Moodle-Export (CSV)</strong> (erreichbar sowohl aus dem Fenster <strong>Online-Webportal</strong> als auch über die zentrale <strong>Export</strong>-Schaltfläche), das beide offiziellen Moodle-Importwege unterstützt:</p><p><strong>1. Direkter CSV-Import in die Moodle-Bewertungsübersicht:</strong><ul><li>Wählen Sie in Gradaly <strong>1. Moodle-Bewertungsübersicht (Direkt-CSV)</strong>, legen Sie die Notenskala (Rohpunkte der Klausur, <code>/20</code> oder <code>/100</code>) sowie den Feedback-Inhalt fest (anklickbarer Link zur verschlüsselten Klausur auf <code>portal.gradaly.io</code> + Punkteübersicht pro Frage) und speichern Sie die UTF-8-CSV-Datei.</li><li>Öffnen Sie in Ihrem Moodle-Kurs den Bereich <strong>Bewertungen</strong>, wählen Sie oben links im Auswahlmenü (<strong>Bewerterübersicht</strong>) → <strong>Import</strong> → <strong>CSV-Datei</strong> und laden Sie die Datei hoch.</li><li>Ordnen Sie unter <em>Nutzer/innen identifizieren durch</em> das Feld <code>ID-Nummer</code> (Matrikelnummer) dem Feld <code>ID-Nummer</code> zu (oder <code>E-Mail-Adresse</code> zu <code>E-Mail-Adresse</code>). Wählen Sie unter <em>Zuordnung der Bewertungsaspekte</em> für die Spalte <code>Note</code> Ihren Bewertungsaspekt (oder <em>Neuer Bewertungsaspekt</em>) und für die Spalte <code>Feedback</code> das zugehörige Feld <strong>Feedbacks</strong>.</li></ul></p><p><strong>2. Offline-Bewertungstabelle einer Moodle-Aufgabe vervollständigen (Ohne Spaltenzuordnung):</strong><ul><li>Aktivieren Sie in den Einstellungen Ihrer Moodle-<em>Aufgabe</em> unter <em>Feedback-Typen</em> die Optionen <em>Offline-Bewertungstabelle</em> sowie <em>Feedback-Kommentare</em> und laden Sie anschließend unter <em>Alle Abgaben anzeigen → Bewertungsvorgang: Bewertungstabelle herunterladen</em> die CSV-Datei herunter.</li><li>Wählen Sie in Gradaly <strong>2. Moodle-Aufgaben-Bewertungstabelle ausfüllen</strong> und öffnen Sie diese CSV-Datei: Gradaly ordnet alle Studierenden automatisch über Matrikelnummer oder E-Mail zu und trägt <code>Bewertung</code> sowie <code>Feedback-Kommentare</code> direkt in die bestehende Struktur ein, sodass Sie die Datei unmittelbar wieder in Moodle hochladen können!</li></ul></p>"
                },
                {
                    q: "Kann ich Benachrichtigungs-E-Mails über meine eigene Hochschul-E-Mail-Adresse (Outlook Web, Word + Outlook, Thunderbird) per Serienbrief versenden?",
                    a: "<p><strong>Ja!</strong> Wechseln Sie im Fenster <strong>✉️ Per E-Mail benachrichtigen</strong> des Online-Webportals auf die zweite Registerkarte: <strong>📊 Serienbrief (Mein E-Mail-Programm)</strong>. Dort passen Sie Betreff und Nachricht frei an (mit optionalen Platzhaltern wie <code>{prenom}</code>, <code>{nom}</code>, <code>{matricule}</code>, <code>{note}</code>, <code>{max}</code>, <code>{lien}</code>) und exportieren die Daten in 3 maßgeschneiderten Formaten: als <strong>Word-Datenquelle <code>.docx</code></strong> (für Microsoft Word + Outlook Serien-E-Mail), als <strong>Excel-Arbeitsmappe <code>.xlsx</code></strong> (mit formatierter Excel-Tabelle namens <code>Publipostage</code> für Microsoft 365 / Power Automate) oder als <strong>UTF-8-<code>.csv</code>-Datei</strong> (für Thunderbird).</p><p><strong>Warum ist der Serienbrief-Export von Gradaly besonders komfortabel?</strong> Neben den Einzelspalten (<code>EMAIL</code>, <code>PRENOM</code>, <code>NOM</code>, <code>MATRICULE</code>, <code>NOTE</code>, <code>MAX</code>, <code>NOTE_SUR_MAX</code>, <code>LIEN_COPIE</code>) enthält die Datei bereits <strong>fertig zusammengesetzte Versandspalten für jede einzelne Person</strong>: <code>SUJET_PRET</code> (Betreff), <code>MESSAGE_TEXTE_PRET</code> (vollständige Klartext-E-Mail) und <code>MESSAGE_HTML_PRET</code> (vollständige HTML-E-Mail). Sie müssen lediglich dieses eine Feld in Ihr Serienbrief-Werkzeug einfügen:</p><ul><li><strong>💼 Microsoft Word + Klassisches Outlook Desktop (Windows &amp; Mac):</strong> Klicken Sie in Gradaly auf <strong>Für Word exportieren (<code>.docx</code>)</strong>. Öffnen Sie in Word <em>Sendungen → Empfänger auswählen → Vorhandene Liste verwenden…</em> und wählen Sie die exportierte <code>.docx</code>-Datei (anders als <code>.xlsx</code> unter macOS lässt sich eine native Word-<code>.docx</code>-Tabelle sofort ohne Excel-Konverter-Warnung oder Sandbox-Fehler einlesen). Fügen Sie das Seriendruckfeld <code>«MESSAGE_TEXTE_PRET»</code> ein und klicken Sie auf <em>Fertig stellen und zusammenführen → E-Mail-Nachrichten senden…</em> (An: <code>EMAIL</code>).</li><li><strong>🌐 Outlook Web (Microsoft 365 im Browser) über Power Automate:</strong> Klicken Sie auf <strong>Als Excel exportieren (<code>.xlsx</code>)</strong> und legen Sie die Datei in Ihrem Hochschul-OneDrive ab. Erstellen Sie in Microsoft Power Automate (<code>make.powerautomate.com</code>) einen manuellen Cloud-Flow mit 2 Schritten: <em>Excel Online (Business) → Vorhandene Zeilen in einer Tabelle auflisten</em> (Datei und Tabelle <code>Publipostage</code> auswählen), gefolgt von <em>Office 365 Outlook → E-Mail senden (V2)</em> mit <code>An = EMAIL</code>, <code>Betreff = SUJET_PRET</code> und <code>Text = MESSAGE_HTML_PRET</code>. Für kleine Gruppen oder Einzel-Nachsendungen können Sie in Gradaly (oder direkt in der Excel-Tabelle) auch in jeder Zeile auf <strong>Outlook Web</strong> klicken, um sofort ein vorausgefülltes Verfassen-Fenster unter <code>outlook.office.com</code> zu öffnen!</li><li><strong>🦅 Mozilla Thunderbird (Windows, macOS, Linux):</strong> Mit dem kostenlosen Add-on <em>Mail Merge</em> verfassen Sie eine neue Nachricht mit <code>{{EMAIL}}</code> im Feld <em>An</em>, <code>{{SUJET_PRET}}</code> im <em>Betreff</em> und <code>{{MESSAGE_TEXTE_PRET}}</code> im Nachrichtentext und starten anschließend <em>Mail Merge → CSV</em> mit der exportierten <code>.csv</code>-Datei.</li></ul>"
                },
                {
                    q: "Wo kann ich Verbesserungsvorschläge einreichen oder Fehler melden?",
                    a: "<p>Wir freuen uns über jedes Feedback, Funktionswünsche und Fehlermeldungen! Erstellen Sie gerne direkt ein Ticket in unserem GitHub-Issue-Tracker: <a href=\"https://github.com/gradaly/gradaly-website/issues\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-indigo-600 font-bold hover:underline\">https://github.com/gradaly/gradaly-website/issues</a>.</p>"
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
            partHeader: "Handbuch 2 — QR-Modus für Übung & Selbsteinschätzung (Studierende)",
            partColor: "teal",
            partBanner: {
                kicker: "Handbuch 2 • Produkt 2: Formativer QR-Übungsmodus",
                title: "Vollständiger Leitfaden zur eigenständigen Selbsteinschätzung über druckbare QR-Übungsblätter",
                desc: "Zu 100 % eigenständiges Handbuch: Gestalten Sie ein PDF-Übungsblatt mit eingebetteten QR-Codes, sodass Studierende auf Papier arbeiten, per Smartphone scannen und sofortiges formatives KI-Feedback erhalten (ohne API-Schlüssel auf portal.gradaly.io oder optional mit eigenem Gemini-Schlüssel)."
            },
            tag: "QR-Übungsmodus • Schritt 1 — Konzept & Projekterstellung",
            badge: "Formativ • Eigenständiges Studierendentraining",
            shortTitle: "Konzept & Übungsprojekt anlegen",
            title: "Funktionsweise des QR-Übungsmodus & Anlegen eines Übungsprojekts",
            subtitle: "Ermöglichen Sie Ihren Studierenden unbegrenztes Training auf Papier mit sofortigem KI-Feedback per Smartphone — ohne Bögen einzusammeln und ohne Ihren eigenen API-Schlüssel preiszugeben.",
            paragraphs: [
                "<strong>Das didaktische Ziel des QR-Übungsmodus (Badge <code>Übung</code> / <code>Practice</code>):</strong> Vor einer Zwischen- oder Abschlussklausur müssen Studierende Aufgaben eigenhändig auf Papier durchrechnen und formulieren (Tutorien, Übungsblätter, Hausaufgaben, Altklausuren). Lehrenden fehlt im Semesteralltag jedoch meist die Kapazität, wöchentlich Hunderte Übungsblätter einzusammeln und detailliert zu korrigieren. <strong>Der QR-Übungsmodus verwandelt jedes PDF-Übungsblatt in einen interaktiven Tutor zur Selbsteinschätzung:</strong><br>1. <strong>Die Lehrperson</strong> importiert das PDF-Übungsblatt, definiert die Bewertungskriterien (sowie optional eine <code>Musterlösung</code>), platziert QR-Codes auf dem PDF und veröffentlicht ein verschlüsseltes statisches Webportal.<br>2. <strong>Die Studierenden</strong> drucken das PDF-Übungsblatt aus (oder öffnen es auf Tablet/Bildschirm), verfassen ihre mathematischen Herleitungen oder Textantworten auf Papier, <strong>scannen den QR-Code der Aufgabe mit ihrem Smartphone</strong>, fotografieren ihre handschriftliche Ausarbeitung und erhalten <strong>unmittelbares, kriterienbezogenes formatives KI-Feedback</strong>!",
                "<strong>Kein API-Schlüssel der Lehrperson offengelegt — Integriertes Gradaly-KI-Relay oder optionaler Studierendenschlüssel:</strong> Anders als im Prüfungsmodus gibt es im Übungsmodus <strong>weder eine Teilnehmerliste noch eingesammelte Bögen noch hinterlegte Lehrpersonen-Schlüssel im veröffentlichten Portal</strong>. Bei Bereitstellung auf <code>portal.gradaly.io</code> können Studierende ihre handschriftlichen Lösungen dank des integrierten Gradaly-KI-Relays <strong>sofort und ohne jegliche API-Schlüssel-Einrichtung</strong> überprüfen lassen (ideal für alle Studierenden, auch unter 18 Jahren) oder optional ihren persönlichen Google-AI-Studio-(Gemini)-Schlüssel im mobilen Browser eintragen.",
                "<strong>Übersichtliche 3-Tab-Oberfläche:</strong> Klicken Sie auf dem Startbildschirm auf <strong>Neues Projekt → Übungsprojekt (Selbsteinschätzung per QR-Code)</strong> (oder wählen Sie <strong>Demo-Projekt erstellen → Demo-Übung</strong>, um ein vollständiges Trigonometrie-Übungsblatt auf Englisch oder Französisch auszuprobieren). Ein Übungsprojekt öffnet einen fokussierten <strong>3-Tab-Arbeitsbereich</strong>: <code>1. Vorlage &amp; Fragen</code>, <code>2. QR-Code-Platzierung</code> und <code>3. Web-Veröffentlichung</code>."
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "Startbildschirm: Übungsprojekte sind am türkisfarbenen Badge ‚Practice‘ neben Ihren Prüfungsprojekten erkennbar"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "Demo-Auswahldialog: Wählen Sie ‚Practice Project (QR Self-Assessment)‘, um ein sofort testbares QR-Übungsblatt zu öffnen"
                }
            ],
            callouts: [
                {
                    title: "Papier + Smartphone im Zusammenspiel",
                    desc: "Studierende trainieren weiterhin handschriftlich mit Formeln, Beweisen und Skizzen auf Papier und erhalten per Smartphone-Kamera sofortiges Coaching."
                },
                {
                    title: "Keine Bögen einzusammeln, keine Liste",
                    desc: "Ein Übungsprojekt benötigt weder Teilnehmerliste noch Scan-Import — es dient zu 100 % dem eigenständigen formativen Lernen."
                },
                {
                    title: "Ohne API-Schlüssel auf portal.gradaly.io",
                    desc: "Auf portal.gradaly.io funktioniert die KI-Auswertung sofort ohne Einrichtung (optional ist ein eigener Gemini-API-Schlüssel nutzbar)."
                },
                {
                    title: "Sofort startklare Übungs-Demo",
                    desc: "Öffnen Sie auf dem Startbildschirm die integrierte Übungs-Demo, um ein komplettes QR-Übungsblatt mit 10 Aufgaben und Musterlösung zu testen."
                }
            ]
        },
        {
            id: "practice-canvas-and-rubric",
            guide: "practice",
            stepNumber: "P2",
            partColor: "teal",
            tag: "QR-Übungsmodus • Schritt 2 — Übungsblatt, Musterlösung & Kriterien",
            badge: "Zu 100 % eigenständiger Leitfaden",
            shortTitle: "Übungs-PDF, Musterlösung & Kriterien",
            title: "Übungs-PDF & Musterlösung importieren sowie formative Kriterien entwickeln",
            subtitle: "Rahmen Sie jede Aufgabe auf Ihrem leeren PDF ein, laden Sie Ihre Musterlösung und erstellen Sie klare Kriterien zur Selbsteinschätzung manuell oder mit dem KI-Assistenten.",
            paragraphs: [
                "In der Registerkarte <strong>1. Vorlage &amp; Fragen</strong> Ihres Übungsprojekts (beachten Sie die schlanke 3-Tab-Kopfleiste ohne Identifikationsbereich) definieren Sie die Aufgaben und Bewertungskriterien, anhand derer die KI später das Smartphone-Foto der Studierenden auswertet:",
                "<strong>1. Leeres Übungs-PDF (<code>Vorlage</code> / <code>Canvas</code>) importieren &amp; Aufgaben einrahmen:</strong> Importieren Sie Ihr PDF-Übungsblatt und ziehen Sie um jede Aufgabe (<code>Q1</code>, <code>Q2</code> ...) ein Rechteck auf. <strong>Wichtig:</strong> Schließen Sie die gedruckte Aufgabenstellung vollständig in das Rechteck ein! Im Übungsmodus schneidet Gradaly genau diesen Bereich aus, um <strong>die Aufgabenstellung oben auf dem Smartphone-Bildschirm der Studierenden anzuzeigen</strong> und der KI den gesamten visuellen Kontext bereitzustellen.",
                "<strong>2. Optionales Musterlösungs-PDF (<code>Solutionnaire</code>) importieren:</strong> Nutzen Sie den Umschalter <strong>Aufgabenstellung (Vorlage) / Musterlösung</strong> oberhalb der PDF-Ansicht, um ein PDF mit Ihren ausgearbeiteten Musterlösungen zu laden. Besitzt das Lösungs-PDF dasselbe Seitenlayout wie das Aufgabenblatt, werden die Rahmen automatisch übernommen; weicht das Layout ab, wechseln Sie in die Ansicht <em>Musterlösung</em> und zeichnen für jede Aufgabe einen eigenen Lösungsbereich ein. Im Übungsmodus erfüllt die Musterlösung gleich drei Zwecke:<br>• <strong>Unterstützung des KI-Bewertungsraster-Assistenten</strong> beim präzisen Ableiten der Kriterien.<br>• <strong>Fachliche Referenzlösung für die KI</strong> bei der Bewertung des eingereichten Fotos.<br>• <strong>Visuelle Freischaltung der Musterlösung auf dem Smartphone der Studierenden</strong>, sobald mindestens ein eigener handschriftlicher Lösungsversuch eingereicht wurde!",
                "<strong>3. Bewertungslogik &amp; Kriterien festlegen (Rein additiv oder rein abziehend):</strong><br>• Gradaly berechnet <code>Punktzahl = Basispunktzahl + Σ (erfüllte Kriterien)</code>, begrenzt auf das Intervall zwischen <code>0</code> und <code>Maximalpunktzahl</code>.<br>• Wählen Sie entweder ein <strong>rein additives Bewertungsraster</strong> (<code>Basispunktzahl = 0</code>, positive Punkte <code>+1</code>, <code>+2</code> für jeden korrekten Lösungsschritt) oder ein <strong>rein abziehendes Raster</strong> (<code>Basispunktzahl = Maximalpunktzahl</code>, Abzüge <code>-0,5</code>, <code>-1</code>). Vermeiden Sie das Mischen positiver und negativer Werte innerhalb derselben Aufgabe.<br>• Nutzen Sie das untere Feld (<strong>Bewertungshinweise &amp; Korrekturlogik / KI-Prompt</strong>) für fachdidaktische Hinweise oder fügen Sie dort bei Bedarf den Aufgabentext ein.",
                "<strong>4. KI-Bewertungsraster-Assistenten nutzen (<code>Mit KI entwerfen / bearbeiten</code>):</strong> Klicken Sie oberhalb der Kriterienliste auf <strong>Mit KI entwerfen / bearbeiten</strong>, damit die KI anhand von Aufgabenstellung und Musterlösung automatisch ein formatives Bewertungsraster entwirft, das Sie anschließend im Chat verfeinern können."
            ],
            screenshots: [
                {
                    filePrefix: "13a_practice_questions",
                    caption: "Übungsmodus — Registerkarte 1. Vorlage & Fragen: Schlanke 3-Tab-Leiste (Vorlage & Fragen | QR-Code-Platzierung | Web-Veröffentlichung), Aufgabenrahmen, formative Kriterien und Umschalter Vorlage / Musterlösung"
                },
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "KI-Bewertungsraster-Assistent: Formative Kriterien und Hinweise gemeinsam anhand von Aufgabentext und Musterlösung ausarbeiten"
                }
            ],
            callouts: [
                {
                    title: "Aufgabenausschnitt auf dem Smartphone",
                    desc: "Der auf dem Vorlagen-PDF markierte Bereich wird automatisch ausgeschnitten und oben in der mobilen Studierendenansicht eingeblendet."
                },
                {
                    title: "Musterlösung als Referenz & Lernhilfe",
                    desc: "Dient der KI als verlässliche Bewertungsgrundlage und lässt sich nach dem ersten eigenen Versuch für Studierende freischalten."
                },
                {
                    title: "Klare additive oder abziehende Kriterien",
                    desc: "Nachvollziehbare Zwischenschritte zeigen Studierenden präzise, welcher Teil ihrer Herleitung gelungen ist und wo Nachbesserungsbedarf besteht."
                },
                {
                    title: "Integrierter KI-Raster-Assistent",
                    desc: "Erzeugen Sie in wenigen Sekunden ein vollständiges formatives Bewertungsraster aus Übungsblatt und Musterlösung."
                }
            ]
        },
        {
            id: "practice-qr-placement",
            guide: "practice",
            stepNumber: "P3",
            partColor: "teal",
            tag: "QR-Übungsmodus • Schritt 3 — QR-Code-Platzierung & druckbares PDF",
            badge: "In Kostenlos & Pro enthalten",
            shortTitle: "QR-Platzierung & druckbares PDF",
            title: "QR-Codes auf Ihrem PDF positionieren & das druckfertige Übungsblatt herunterladen",
            subtitle: "Platzieren Sie einen allgemeinen QR-Code (gesamtes Blatt) und/oder aufgabenbezogene QR-Codes direkt in jedem Aufgabenfeld Ihres PDFs.",
            paragraphs: [
                "Öffnen Sie die Registerkarte <strong>2. QR-Code-Platzierung</strong>, um festzulegen, wo die QR-Codes zur Selbsteinschätzung auf Ihrem Übungsblatt erscheinen sollen:",
                "<strong>1. Allgemeiner QR-Code vs. QR-Codes pro Aufgabe:</strong><br>• <strong>Allgemeiner QR-Code (Gesamtes Übungsblatt):</strong> Standardmäßig oben auf Seite 1 platziert. Beim Scannen öffnet sich das mobile Portal mit der Übersicht aller Aufgaben.<br>• <strong>QR-Codes pro Aufgabe (<code>QR Q1</code>, <code>QR Q2</code> ...):</strong> Direkt innerhalb des jeweiligen Aufgabenrahmens auf dem PDF eingebettet. Scannen Studierende <code>QR Q1</code> mit der Smartphone-Kamera, öffnet sich die mobile Anwendung <strong>unmittelbar bei Aufgabe 1</strong> (<code>?q=Q1</code>), bereit zum Fotografieren des Lösungswegs!",
                "<strong>2. Interaktives Verschieben per Drag-and-Drop &amp; 1-Klick-Eckausrichtung:</strong> Klicken Sie links in der Liste auf eine beliebige Aufgabe, um zu deren Seite zu springen. Ziehen Sie jedes QR-Symbol frei mit der Maus auf der PDF-Seite, sodass weder Formeln noch Abbildungen verdeckt werden, oder wählen Sie per Klick <code>Obere rechte Ecke</code>, <code>Obere linke Ecke</code> bzw. <code>Untere rechte Ecke</code>. Über das Augensymbol blenden Sie einzelne QR-Codes gezielt ein oder aus.",
                "<strong>3. Druckfertiges PDF mit eingebetteten QR-Codes herunterladen:</strong> Klicken Sie auf <strong>Druckbares PDF mit QR-Codes herunterladen</strong>. Gradaly erzeugt ein gestochen scharfes Vektor-PDF mit allen aktiven QR-Codes an den gewählten Positionen — bereit zum Ausdrucken für die Lehrveranstaltung oder zum Bereitstellen auf Moodle/ILIAS/Stud.IP."
            ],
            screenshots: [
                {
                    filePrefix: "13_practice_qr",
                    caption: "Übungsmodus — Registerkarte 2. QR-Code-Platzierung: Liste für allgemeinen & aufgabenbezogenen QR-Code links, Eck-Schnellausrichtung und freie Platzierung per Maus auf Seite 2 (QR Q1 & QR Q2)"
                }
            ],
            callouts: [
                {
                    title: "Direktlink zur jeweiligen Aufgabe (?q=Q1)",
                    desc: "Das Scannen eines Aufgaben-QR-Codes öffnet ohne Umwege exakt diese Übungsaufgabe auf dem Smartphone."
                },
                {
                    title: "Dauerhaft gültige QR-Codes bei Updates",
                    desc: "Selbst wenn Sie Ihr Bewertungsraster später verfeinern und die Online-Veröffentlichung aktualisieren, bleiben bereits gedruckte QR-Codes gültig!"
                }
            ]
        },
        {
            id: "practice-publish-and-student",
            guide: "practice",
            stepNumber: "P4",
            partColor: "teal",
            tag: "QR-Übungsmodus • Schritt 4 — Web-Veröffentlichung (Gradaly Pro) & Studierenden-App",
            badge: "Veröffentlichung erfordert Gradaly Pro",
            shortTitle: "Web-Veröffentlichung (Pro) & App",
            title: "Studierenden-Übungswebsite veröffentlichen (Gradaly Pro) & Ablauf für Studierende",
            subtitle: "Während Sie in der kostenlosen Version Ihr Projekt anlegen und das QR-PDF gestalten können, schaltet Gradaly Pro die Veröffentlichung der Übungswebsite (online oder als .zip) frei.",
            paragraphs: [
                "In der Registerkarte <strong>3. Web-Veröffentlichung</strong> legen Sie die didaktischen Anzeigeoptionen der mobilen App fest und veröffentlichen die Übungswebsite für Ihre Studierenden:",
                "<strong>1. Didaktische Sichtbarkeitsoptionen:</strong><br>• <strong>Bewertungskriterien vor dem 1. Versuch anzeigen:</strong> Entscheiden Sie, ob Studierende die erwarteten Teilschritte bereits vorab sehen oder ob das Raster erst nach dem ersten eingereichten Foto sichtbar wird.<br>• <strong>Detaillierte Begründung der KI-Bewertung anzeigen:</strong> Ergänzt das formative Feedback um eine nachvollziehbare Erläuterung für jedes einzelne Kriterium.<br>• <strong>Musterlösung (<code>Solutionnaire</code>) nach mindestens einem Versuch freischalten:</strong> Hält Ihre ausgearbeitete Musterlösung gesperrt, bis die Studierenden zunächst einen eigenen handschriftlichen Lösungsversuch fotografiert und eingereicht haben!",
                "<strong>2. Vorschau im integrierten Smartphone-Simulator:</strong> Klicken Sie oben rechts im Banner auf <strong>Studierenden-App testen (Simulator)</strong>, um die mobile Oberfläche direkt innerhalb von Gradaly auszuprobieren.",
                "<strong>3. Übungswebsite online veröffentlichen oder als statisches <code>.zip</code> exportieren (Gradaly Pro):</strong> Während die kostenlose Version das Erstellen des Übungsprojekts und das Design des PDFs mit QR-Codes umfasst, ermöglicht <strong>Gradaly Pro</strong> die Veröffentlichung der Studierenden-Übungswebsite: Klicken Sie auf <strong>Mit 1 Klick auf portal.gradaly.io veröffentlichen</strong> (clientseitig mit <strong>AES-256-GCM</strong> verschlüsselt, mit wählbarer Vorhaltedauer von <strong>60 Tagen</strong>, <strong>180 Tagen / 1 Semester</strong> oder <strong>365 Tagen / 1 Studienjahr</strong>) oder wählen Sie <strong>Als eigenständige statische Website exportieren (.zip)</strong> für das Hosting auf Ihrem eigenen Hochschulserver.",
                "<strong>4. Ablauf für Studierende auf dem Smartphone Schritt für Schritt:</strong><br>• Die Studierenden scannen den QR-Code auf ihrem ausgedruckten Übungsblatt.<br>• Bei Bereitstellung auf <code>portal.gradaly.io</code> funktioniert die KI-Auswertung <strong>sofort und ohne Eingabe eines API-Schlüssels</strong> (über das integrierte Gradaly-KI-Relay). Optional — oder beim Betrieb als eigenständiges <code>.zip</code> auf einem eigenen Server — können Studierende über die Schaltfläche <strong>Eigener Schlüssel</strong> ihren persönlichen <strong>Google-AI-Studio-(Gemini)-API-Schlüssel</strong> hinterlegen (wird ausschließlich lokal im Smartphone-Browser gespeichert).<br>• Die Studierenden tippen auf <strong>Foto meiner Arbeit aufnehmen</strong>, fotografieren ihren handschriftlichen Lösungsweg auf Papier und starten <strong>Meine Antwort mit KI auswerten</strong> — unmittelbar darauf erscheinen Punktzahl, erfüllte Kriterien, mathematisch gesetztes LaTeX-Feedback sowie die freigeschaltete Musterlösung!",
                "<strong>5. Interaktives Live-Beispiel (Druckbares PDF-Übungsblatt &amp; Studierendenportal):</strong><br>• 🇬🇧 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_EN.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Druckbares PDF-Übungsblatt mit QR-Codes ansehen (Demo EN)</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_7c576e0a7ff4729b&id=practice#k=fOTpaHBSuaFzzdN7AJYjSF_BKMgKaYcGQj6lyYljH10\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Live-Übungsportal für Studierende öffnen (Demo EN)</a>"
            ],
            screenshots: [
                {
                    filePrefix: "14_practice_publish",
                    caption: "Übungsmodus — Registerkarte 3. Web-Veröffentlichung: Didaktische Schalter, Freischaltung der Musterlösung nach dem 1. Versuch, Speicherdauer (60/180/365 Tage) und 1-Klick-Cloud-/ZIP-Veröffentlichung (Gradaly Pro)"
                },
                {
                    filePrefix: "15_practice_student_portal",
                    caption: "Integrierter Smartphone-Simulator: Vorschau der mobilen Web-App, in der Studierende ihre Papierlösung fotografieren und sofortiges formatives KI-Feedback erhalten"
                }
            ],
            callouts: [
                {
                    title: "Integrierter Smartphone-Simulator (Gratis)",
                    desc: "Testen Sie Ihr Übungsblatt, Ihre Kriterien und das mobile Nutzungserlebnis vor der Veröffentlichung kostenlos direkt in Gradaly."
                },
                {
                    title: "1-Klick-Cloud oder ZIP-Export (Gradaly Pro)",
                    desc: "Veröffentlichen Sie clientseitig AES-256-GCM-verschlüsselt auf portal.gradaly.io (60/180/365 Tage) oder als eigenständiges .zip."
                },
                {
                    title: "Integriertes KI-Relay oder eigener Schlüssel",
                    desc: "Auf portal.gradaly.io können Studierende sofort ohne API-Schlüssel starten oder optional ihren eigenen kostenlosen Gemini-Schlüssel nutzen."
                },
                {
                    title: "Musterlösung erst nach eigenem Versuch",
                    desc: "Studierende müssen zunächst einen eigenen handschriftlichen Ansatz fotografieren und einreichen, bevor die Musterlösung sichtbar wird."
                }
            ]
        },
        {
            id: "practice-faq",
            guide: "practice",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "teal",
            tag: "Häufig gestellte Fragen (FAQ)",
            badge: "Verschlüsselung, Zugriff, KI-Relay & Datenschutz",
            shortTitle: "Häufig gestellte Fragen",
            title: "Häufig gestellte Fragen (FAQ)",
            subtitle: "Antworten auf häufige Fragen zur Verschlüsselung der Übungswebsite, zu Zugriffsrechten, zum Umgang mit Studierendenfotos und API-Schlüsseln sowie zur vollständigen Anonymität.",
            paragraphs: [
                "Nachfolgend finden Sie Antworten auf die häufigsten Fragen zum QR-Modus für Übung &amp; Selbsteinschätzung von Gradaly."
            ],
            faqs: [
                {
                    q: "Warum ist die Übungswebsite verschlüsselt?",
                    a: "<p><strong>Zum Schutz des geistigen Eigentums der Lehrenden:</strong> Weder Gradaly noch Dritte haben Einblick in die veröffentlichten Lehrmaterialien — also weder in Ihr Aufgabenblatt noch in Ihre ausgearbeitete Musterlösung (<code>Solutionnaire</code>) noch in Ihre Bewertungskriterien und Korrekturhinweise. Sämtliche Inhalte verbleiben im <strong>geistigen Eigentum der Lehrperson</strong>.</p><p>Bevor ein einziges Byte auf <code>portal.gradaly.io</code> übertragen wird, verschlüsselt Gradaly das gesamte Übungspaket lokal auf dem Rechner der Lehrperson mit <strong><code>AES-256-GCM</code></strong>. Der Entschlüsselungsschlüssel (<code>#k=...</code>) ist ausschließlich im URL-Fragment (und damit im QR-Code) hinter dem Zeichen <code>#</code> eingebettet, das Webbrowser niemals an den Server senden. Der Server speichert lediglich unlesbare verschlüsselte Binärdateien.</p>"
                },
                {
                    q: "Wer hat Zugriff auf die Übungsanwendung?",
                    a: "<p><strong>Ausschließlich Personen im Besitz des Links bzw. der QR-Codes, mit denen die Lehrperson diese geteilt hat</strong>, erhalten Zugriff auf die Anwendung und können die Aufgaben lokal in ihrem Browser entschlüsseln.</p><p>Lehrende können das druckbare PDF-Übungsblatt (oder den Link) somit <strong>vertraulich an ihre Studierenden weitergeben</strong> (etwa im passwortgeschützten Moodle-/ILIAS-Kursraum oder ausgedruckt in der Übungsgruppe), ohne dass Aufgaben oder Musterlösungen öffentlich im Internet auffindbar sind. Da der Zugriff auf dem Besitz des Links bzw. QR-Codes beruht, erhält selbstverständlich auch jede Person außerhalb des Kurses Zugriff, falls dieser Link oder QR-Code extern weitergegeben wird.</p>"
                },
                {
                    q: "Benötigen Studierende einen eigenen API-Schlüssel, und was geschieht mit dem Foto ihrer handschriftlichen Lösung?",
                    a: "<p>Je nach Nutzungsweise gibt es zwei Betriebsmodi — beide garantieren <strong>100 % Anonymität und keinerlei dauerhafte Bildspeicherung</strong>:</p><p><strong>1. Standardmodus auf <code>portal.gradaly.io</code> (Kein API-Schlüssel der Studierenden erforderlich):</strong><ul><li>Wird das Übungsprojekt auf <code>portal.gradaly.io</code> bereitgestellt und geben Studierende keinen eigenen Schlüssel ein, erfolgt die Auswertung über das <strong>gesicherte Gradaly-KI-Relay</strong> (damit für alle Lernenden — auch Minderjährige unter 18 Jahren — sofort und ohne Registrierung nutzbar).</li><li>Hierbei wird das Foto der handschriftlichen Lösung (zusammen mit dem Bewertungs-Prompt der Aufgabe) <strong>ausschließlich zur unmittelbaren Auswertung durch Gemini Flash über den Gradaly-Relay-Server geleitet</strong>.</li><li><strong>Strikte Nicht-Speicher-Garantie:</strong> Das Foto wird <strong>niemals auf Festplatten oder in einer Datenbank gespeichert</strong>, bleibt <strong>zu 100 % anonym</strong> und wird <strong>unmittelbar nach Rückgabe des KI-Feedbacks aus dem Arbeitsspeicher verworfen</strong>.</li></ul></p><p><strong>2. Modus mit persönlichem API-Schlüssel (Optional auf <code>portal.gradaly.io</code> bzw. bei eigenständigem <code>.zip</code>-Hosting):</strong><ul><li>Hinterlegen Studierende über die Schaltfläche <em>Eigener Schlüssel</em> ihren persönlichen Google-Gemini-API-Schlüssel, wird dieser <strong>ausschließlich lokal im <code>localStorage</code> des Browsers auf ihrem eigenen Endgerät</strong> gespeichert (niemals an Gradaly-Server gesendet und für Lehrende unsichtbar).</li><li>Mit eigenem API-Schlüssel kommuniziert der Browser auf dem Smartphone <strong>direkt über verschlüsseltes HTTPS mit dem offiziellen Google-Gemini-Endpunkt</strong>, ohne den Gradaly-Server überhaupt zu durchlaufen.</li></ul></p>"
                },
                {
                    q: "Erfährt die Lehrperson, ob oder wie Studierende die Anwendung nutzen?",
                    a: "<p><strong>Nein — der QR-Übungsmodus arbeitet zu 100 % anonym und eigenständig.</strong> Es gibt weder ein Studierenden-Login noch eine Teilnehmerliste noch irgendeine Nutzungsaufzeichnung oder Rückmeldung an die Lehrperson.</p><p>Lehrende sehen weder, wer einen QR-Code gescannt hat, noch wie viele Versuche unternommen oder welche Punktzahlen erreicht wurden. Dieses bewusste Design schafft einen <strong>geschützten, bewertungsfreien Lernraum</strong>, in dem Studierende vor der Prüfung unbefangen auf Papier üben, Fehler machen und ihr Verständnis beliebig oft überprüfen können.</p>"
                },
                {
                    q: "Was bietet die kostenlose Version im Vergleich zu Gradaly Pro im QR-Übungsmodus?",
                    a: "<p><strong>Kostenlose Version (Community):</strong> Ermöglicht das Anlegen von Übungsprojekten, den Import von Übungs-PDF und Musterlösung, das Entwerfen und Kalibrieren formativer Bewertungskriterien (manuell oder mit dem KI-Bewertungsraster-Assistenten), die Positionierung der QR-Codes, das Herunterladen des <strong>druckfertigen PDFs mit eingebetteten QR-Codes</strong> sowie das vollständige Testen im integrierten <strong>Smartphone-Simulator</strong>.</p><p><strong>Gradaly Pro:</strong> Schaltet die <strong>Veröffentlichung der Studierenden-Übungswebsite</strong> frei — wahlweise mit 1 Klick in die verschlüsselte Cloud auf <code>portal.gradaly.io</code> (für 60, 180 oder 365 Tage) oder als eigenständige statische <code>.zip</code>-Website für den eigenen Hochschulserver.</p>"
                },
                {
                    q: "Was passiert, wenn ich meine Bewertungskriterien nachträglich anpasse, nachdem das PDF-Übungsblatt bereits gedruckt oder verteilt wurde?",
                    a: "<p><strong>Ihre bereits gedruckten QR-Codes bleiben zu 100 % gültig!</strong> Jedes Übungsprojekt behält eine feste Veröffentlichungs-ID und denselben Verschlüsselungsschlüssel. Wenn Sie nach dem Austeilen des Arbeitsblatts einen Tippfehler bemerken oder ein Kriterium präzisieren möchten, klicken Sie in der Registerkarte <em>3. Web-Veröffentlichung</em> einfach auf <strong>Veröffentlichung auf portal.gradaly.io aktualisieren</strong>: Studierende, die denselben Papier-QR-Code scannen, profitieren sofort vom aktualisierten Bewertungsraster.</p>"
                }
            ]
        }
    ]
};
