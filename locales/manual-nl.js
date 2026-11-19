window.GRADALY_MANUAL_I18N = window.GRADALY_MANUAL_I18N || {};
window.GRADALY_MANUAL_I18N.nl = {
    badge_manual: "Gebruikershandleiding (2-in-1)",
    back_home: "Terug naar de website",
    download_btn: "Download Gradaly",
    hero_pill: "2-in-1 Desktopapplicatie • Volledige Gebruikershandleiding v5.0.0",
    hero_title: "Gradaly Gebruikershandleiding",
    hero_subtitle: "Beter beoordelen, om beter op te leiden. Gradaly is een 2-in-1 applicatie met twee onafhankelijke werkwijzen: (1) Examen- & Proefexamenbeoordeling door de docent (voor formatieve proefexamens onder realistische examenomstandigheden of officiële examens), en (2) QR-Zelfevaluatie door de student op de smartphone. Kies hieronder de handleiding die bij uw werkwijze past:",
    search_placeholder: "Zoek in alle handleidingen (bijv. examen, proefexamen, QR-oefening, beoordelingsrubriek, OCR, API-sleutel, FAQ)...",
    card_exam_badge: "Product 1 • Beoordeling door Docent",
    card_exam_chapters: "Hoofdstukken E1–E9",
    card_exam_title: "Handleiding 1: Examen- & Proefexamenmodus (Door de Docent)",
    card_exam_desc: "Voor officiële examens, deeltentamens of formatieve proefexamens tijdens het jaar onder realistische examenomstandigheden: scan examenkopieën, koppel identiteiten 100% offline via OCR, beoordeel handmatig of met AI/teambeoordeling, en geef geannoteerde kopieën terug.",
    card_practice_badge: "Product 2 • Zelfevaluatie door Student",
    card_practice_chapters: "Hoofdstukken P1–P5",
    card_practice_title: "Handleiding 2: QR-Oefen- & Zelfevaluatiemodus (Door de Student)",
    card_practice_desc: "Voor werkcolleges, oefeningenreeksen en zelfstudiebladen: plaats QR-codes op uw oefeningen-pdf zodat studenten op papier werken, scannen met hun smartphone en onmiddellijk formatieve AI-feedback ontvangen.",
    filter_label: "Weergave:",
    filter_exam: "1. Examenhandleiding (E1–E9)",
    filter_practice: "2. QR-Oefenhandleiding (P1–P5)",
    filter_all: "Toon alle hoofdstukken",
    filter_hint: "Elke handleiding is 100% zelfstandig leesbaar — u hoeft ze niet beide te lezen!",
    switch_guide_kicker: "Ontdek de Tweede Werkwijze van Gradaly",
    btn_go_practice: "Open Handleiding 2: QR-Oefenmodus",
    btn_go_exam: "Open Handleiding 1: Examenmodus",
    toc_title: "Inhoudsopgave",
    sidebar_exam_mode: "Examenmodus",
    sidebar_practice_mode: "QR-Oefenmodus",
    screenshot_badge: "Interface EN",
    privacy_box_title: "100% Lokale Studentenprivacy",
    privacy_box_text: "Studentenlijsten, identificatiezones, OCR-koppelingen en projectbestanden worden lokaal bewaard in Documents/Gradaly op uw eigen computer. Cloudportalen en teamlinks gebruiken client-side AES-256-GCM Zero-Knowledge versleuteling.",
    sections: [
        // =========================================================================
        // GUIDE 1: EXAM GRADING MODE (E1 to E9) — 100% SELF-CONTAINED
        // =========================================================================
        {
            id: "exam-getting-started",
            guide: "exam",
            stepNumber: "E1",
            partHeader: "Handleiding 1 — Examen- & Proefexamenmodus (Docent)",
            partColor: "indigo",
            partBanner: {
                kicker: "Handleiding 1 • Product 1: Examen- & Proefexamenbeoordeling",
                title: "Volledige Gids voor Examen- & Proefexamenbeoordeling door de Docent (100% Menselijk, AI-Ondersteund & Teammodus)",
                desc: "Zelfstandige gids voor het evalueren van gescande examenkopieën — zowel voor een officieel examen als voor een formatief proefexamen tijdens het academiejaar onder realistische examenomstandigheden."
            },
            tag: "Examenmodus • Stap 1 — Een Examenproject Aanmaken",
            badge: "100% Menselijk of AI-Ondersteund",
            shortTitle: "Een Examenproject Aanmaken",
            title: "Een Examenproject Aanmaken & 100% Menselijke vs. AI-Werkwijze",
            subtitle: "Start een nieuw Examenproject (of open de Examendemo met 20 kopieën) om gescande examenbundels op uw computer te beoordelen.",
            paragraphs: [
                "<strong>Wat is een Examenproject (badge <code>Examen</code>)?</strong> Een Examenproject is ontworpen voor elke evaluatie waarbij de docent schriftelijke uitwerkingen van studenten verzamelt, ze scant naar pdf-bestanden en het volledige cohort beoordeelt — zowel voor <strong>officiële deeltentamens en eindexamens</strong> als voor <strong>formatieve proefexamens tijdens het jaar</strong> onder realistische examenomstandigheden. Zelfs wanneer u uw eindexamen bij voorkeur handmatig op papier nakijkt, biedt de Examenmodus een ideale manier om halverwege het semester een proefexamen te organiseren en elke student diepgaande, geïndividualiseerde feedback te bezorgen in echte examencondities. Bovenaan beschikt u over <strong>6 specifieke tabbladen</strong>: <code>1. Canvas &amp; Vragen</code>, <code>2. Studenten</code>, <code>3. Kopieën</code>, <code>4. Koppeling</code>, <code>5. Beoordeling</code> en <code>6. Samenvatting &amp; Statistieken</code>.",
                "<strong>100% Menselijke Modus of AI-Ondersteunde Modus:</strong> U hebt <strong>geen</strong> AI API-sleutel nodig om een examen in Gradaly te beoordelen. Standaard werkt Gradaly in <strong>100% Menselijke Modus</strong> met snelle toetsenbordsneltoetsen (<code>1–9</code> om criteria aan/uit te vinken, <code>J</code>/<code>K</code> om tussen studenten te navigeren), dynamische herberekening van alle scores zodra u de weging van een criterium wijzigt, en rijke feedback in Markdown &amp; KaTeX. Wanneer u dat wenst, kunt u een AI API-sleutel koppelen om de <strong>AI-Rubriekassistent</strong> en <strong>Multimodale AI-Voorbeoordeling</strong> in te schakelen, waarbij de menselijke docent altijd de eindbeslissing behoudt.",
                "<strong>Projecttaal onafhankelijk van de interfacetaal:</strong> Kies bij het aanmaken van een nieuw project expliciet de <strong>Projecttaal</strong> (Nederlands, Engels, Frans, Duits, Spaans, enz.) — u kunt deze op elk moment bekijken of wijzigen via het vlaglabel naast de projectnaam in de kopbalk of via <strong>Project AI-instellingen</strong>. Deze projecttaal bepaalt de gegenereerde rubrieken, AI-beoordelingsinstructies, studentenfeedback en alle exports (geannoteerde pdf's, Excel, Moodle-CSV, QR-strookjes, webportaal en QR-Oefenmodus), zelfs wanneer de desktopinterface van Gradaly in een andere taal staat.",
                "Klik op het <strong>Welkomstscherm</strong> op <strong>Nieuw project</strong> en kies <strong>Examenproject (Beoordeling door docent)</strong>, of klik op <strong>Demoproject maken → Examenproject</strong> om een kant-en-klaar natuurkunde-examen met 20 handgeschreven studentenkopieën en een modeloplossing te verkennen."
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "Welkomstscherm: Examenprojecten zijn herkenbaar aan de indigoblauwe badge 'Exam' en worden lokaal opgeslagen in Documents/Gradaly"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "Venster Demoproject: Kies 'Examenproject' om offline een volledig uitgewerkt voorbeeld met 20 beoordeelde kopieën te genereren"
                }
            ],
            callouts: [
                {
                    title: "Specifieke Examenwerkruimte met 6 Tabbladen",
                    desc: "Canvas & Vragen → Studenten → Kopieën → Offline OCR-koppeling → Beoordelingsconsole met 3 panelen → Cohortstatistieken & Exports."
                },
                {
                    title: "Werkt 100% Offline & Handmatig",
                    desc: "Beoordeel vlot handmatig met sneltoetsen, of combineer AI-voorbeoordeling met menselijke eindvalidatie."
                },
                {
                    title: "Ingebouwde Examendemo met 20 Kopieën",
                    desc: "Test de volledige examenworkflow meteen zonder iets te scannen dankzij de ingebouwde Engelse of Franse Examendemo."
                },
                {
                    title: "100% Lokale Bestanden in Documents/Gradaly",
                    desc: "Alle pdf's, studentenlijsten en beoordelingen blijven op uw eigen computer in gewone mappen — zonder verplichte cloudopslag."
                }
            ]
        },
        {
            id: "exam-canvas-and-rubric",
            guide: "exam",
            stepNumber: "E2",
            partColor: "indigo",
            tag: "Examenmodus • Stap 2 — Canvas, Identificatiezone & Beoordelingsrubriek",
            badge: "Essentieel voor Nauwkeurige Beoordeling",
            shortTitle: "Canvas, ID-zone & Criteria",
            title: "De Identificatiezone, Vraagzones, Puntentoekenning & Modeloplossing Definiëren",
            subtitle: "Importeer uw blanco examen-pdf, baken de hoofding voor offline OCR af en stel uw vragen en beoordelingsrubriek op.",
            paragraphs: [
                "In het tabblad <strong>1. Canvas &amp; Vragen</strong> van een Examenproject begint u met het importeren van de blanco examen-pdf (<code>Canvas</code>). Vervolgens tekent u twee soorten rechthoekige zones op de pdf-pagina's:",
                "<strong>1. Teken de Identificatiezone voor de Student (<code>ID</code>):</strong> Klik in het linkerpaneel op de knop <strong>Identificatiezone student (Naam / Studentennummer)</strong> en teken op pagina 1 een rechthoek rond het vak waar studenten hun naam en studentennummer invullen. Gradaly snijdt precies deze zone uit op elke kopie voor <strong>100% offline OCR-koppeling</strong> met uw studentenlijst.",
                "<strong>2. Teken Elke Vraagzone &amp; Kies de Bron van de AI-Opgave (<code>Studentenkopie</code> vs. <code>Canvas</code>):</strong> Wanneer u AI-beoordeling start op de kopie van een student, snijdt Gradaly de rechthoekige zone uit die u voor die vraag hebt getekend en stuurt deze samen met uw beoordelingscriteria naar het gekozen Vision AI-model.<br>• <strong>Eén Gecombineerde Zone (Standaard):</strong> Baken waar mogelijk zowel de gedrukte vraagstelling als het antwoordvak van de student af binnen één enkele rechthoek. Standaard (<code>AI-opgave: Studentenkopie</code>) snijdt Gradaly deze rechthoek <strong>rechtstreeks uit de kopie van de student (<code>copies/copie_XXX.pdf</code>)</strong> — zodat wanneer elke student geïndividualiseerde getallenwaarden op zijn of haar examenblad heeft, de AI zowel de specifieke parameters als het antwoord van die student ziet.<br>• <strong>Opgave &amp; Antwoord Scheiden (<code>Opgave / antwoord splitsen</code>) &amp; Keuzemenu <code>AI-opgave</code>:</strong> Staan de vraagstelling en het antwoordvak op verschillende pagina's of worden ze gescheiden door andere inhoud, klik dan op <strong>Opgave / antwoord splitsen</strong> om twee afzonderlijke zones te definiëren (<code>Opgave</code> en <code>Antwoord op kopie</code>), en kies waaruit de opgave moet worden uitgesneden:<br>&nbsp;&nbsp;– <strong><code>Studentenkopie</code>:</strong> Zowel de opgavezone als de antwoordzone worden uit <strong>de eigen kopie van elke student</strong> gesneden en verticaal samengevoegd (onmisbaar bij gepersonaliseerde cijfergegevens of individuele vraagvarianten).<br>&nbsp;&nbsp;– <strong><code>Canvas</code>:</strong> De opgavezone wordt uit het blanco examensjabloon (<code>canvas.pdf</code>) gesneden en boven het antwoordkader van de student geplaatst (ideaal wanneer studenten antwoorden op losse antwoordbladen waarop de gedrukte vraag niet wordt herhaald).",
                "<strong>3. Begrijp Basisscore (<code>Note de base</code>), Maximumscore (<code>Score max</code>), Plafonnering &amp; <code>Max. mogelijk</code>:</strong><br>• <strong>Scoreformule:</strong> Gradaly vertrekt vanaf de <strong>Basisscore</strong> van de vraag, telt daar de punten van alle aangevinkte criteria bij op (<code>Ruwe score = Basisscore + Σ aangevinkte criteria</code>), en <strong>begrenst de uiteindelijke vraagscore tussen <code>0</code> en <code>Maximumscore</code></strong>.<br>• <strong>Zuiver Additief OF Zuiver Aftrekkend Systeem:</strong> Kies voor een <strong>additief beoordelingsschema</strong> <code>Basisscore = 0</code> en gebruik uitsluitend positieve criteria (<code>+1</code>, <code>+1.5</code>). Kies voor een <strong>aftrekkend (deductief) schema</strong> <code>Basisscore = Maximumscore</code> en gebruik uitsluitend negatieve criteria (<code>-0.5</code>, <code>-1</code>). <strong>Vermijd het mengen van plus- en minpunten binnen dezelfde vraag</strong> — een zuiver systeem is veel transparanter voor zowel de AI als de student.<br>• <strong>Hulpindicator <code>Max. mogelijk</code>:</strong> Toont <code>Basisscore + Σ (positieve criteria)</code> zodat u meteen ziet of de som van uw criteria overeenstemt met de <code>Maximumscore</code>.",
                "<strong>4. Onderaan Veld Algemene Instructies (<code>Beoordelingsinstructies &amp; logica / AI-prompt</code>):</strong> Gebruik het tekstveld onderaan elke vraag om aan te geven hoe randgevallen moeten worden behandeld (bijv. doorrekenfouten / vervolgfouten, equivalente wiskundige vormen) — en plak hier de platte tekst van de opgave als de gedrukte vraag buiten het uitgesneden kader valt.",
                "<strong>5. Importeer &amp; Test Uw Modeloplossing (<code>Solutionnaire</code> / <code>⭐ Modeloplossing</code>):</strong> Gebruik de schakelaar <strong>Opgave (Canvas) / Modeloplossing</strong> bovenaan de pdf-viewer om de pdf met uw uitgewerkte modeloplossing te importeren. Deze verschijnt helemaal bovenaan in het tabblad Beoordeling als <strong><code>⭐ Modeloplossing</code></strong>: controleer altijd of uw eigen modeloplossing voor elke vraag de <strong>maximale score (<code>Max/Max</code>)</strong> behaalt!",
                "<strong>6. Wederzijds uitsluitende criteria (<code>OR</code>-groepen), invoeg-slepen &amp; schakelaar <code>Render / Edit</code>:</strong><br>• <strong>Wederzijds uitsluitende <code>OR</code>-criteria:</strong> Klik op de koppeling <strong><code>OR</code></strong> tussen twee opeenvolgende positieve criteria (bijv. deelkrediet <em>OF</em> volledig krediet) of negatieve maluscriteria om ze als alternatieven te groeperen (ook ondersteund door de AI-Rubriekassistent). Wanneer u één criterium binnen een <code>OR</code>-groep aanvinkt, worden de andere automatisch uitgevinkt; de tellers <code>Max possible</code> / <code>Min possible</code> rekenen enkel de hoogste optie per groep mee en <code>OR</code>-groepen blijven duidelijk zichtbaar op geannoteerde pdf's en webportalen.<br>• <strong>Volgorde wijzigen met duidelijke invoegindicator:</strong> Sleep vragen, pagina's, afzonderlijke criteria of een volledig <code>OR</code>-blok naar een andere positie met een expliciete invoeglijn.<br>• <strong>Uniforme knop <code>Render / Edit</code>:</strong> Schakel vlot tussen live Markdown + KaTeX-wiskundeweergave en bronbewerking voor criteriumbeschrijvingen, vraaginstructies en projectbrede AI-prompts."
            ],
            screenshots: [
                {
                    filePrefix: "02_questions",
                    caption: "Examenmodus — Tabblad Canvas & Vragen: Knop Identificatiezone student, Basis-/Max-/Max. mogelijke scores, aanvinkbare criteria, AI-instructies onderaan en schakelaar Opgave / Modeloplossing"
                }
            ],
            callouts: [
                {
                    title: "Identificatiezone voor Offline OCR",
                    desc: "Baken het hoofdingkader op pagina 1 eenmalig af; Gradaly extraheert deze zone op alle gescande kopieën voor lokale naam- en nummerherkenning."
                },
                {
                    title: "Zuiver Additieve of Aftrekkende Rubriek",
                    desc: "Start vanaf 0 met +pt of start vanaf de Maximumscore met −pt. Eindscores per vraag worden steeds begrensd op [0, Maximumscore]."
                },
                {
                    title: "Neem de Opgave Mee in de Zone",
                    desc: "Kader zowel de gedrukte vraagstelling als het antwoordvak van de student in (of plak de vraagtekst in het onderste instructieveld)."
                },
                {
                    title: "Controle met Modeloplossing (⭐)",
                    desc: "Importeer de pdf van uw modeloplossing en verifieer met 1 klik of deze op elke vraag het volledige puntenaantal (Max/Max) behaalt."
                }
            ]
        },
        {
            id: "exam-ai-rubric-assistant",
            guide: "exam",
            stepNumber: "E3",
            partColor: "indigo",
            tag: "Examenmodus • Stap 3 — AI-Rubriekassistent",
            badge: "Interactieve Chat & Kalibratie",
            shortTitle: "AI-Rubriekassistent",
            title: "Beoordelingscriteria Samen Ontwerpen & Kalibreren met de AI-Rubriekassistent",
            subtitle: "Genereer of verfijn uw beoordelingsrubriek op basis van de opgave en de modeloplossing, stuur bij via chat en plak schermafbeeldingen van echte studentenkopieën.",
            paragraphs: [
                "Klik bij eender welke vraag in <strong>Canvas &amp; Vragen</strong> op <strong>Ontwerpen / Bewerken met AI</strong> om de interactieve <strong>AI-Rubriekassistent</strong> te openen.",
                "<strong>1. Stel Uw Rubriekvoorkeuren In:</strong> Geef de beoogde <code>Maximumscore</code> van de vraag op, kies een <strong>Additieve</strong> of <strong>Deductieve (aftrekkende)</strong> beoordelingsfilosofie en selecteer het gewenste <strong>aantal criteria</strong> (3, 4, 5 of automatisch). Hebt u een <code>Modeloplossing</code>-pdf geladen, vink dan <em>\"Gebruik het antwoord uit de modeloplossing als referentie\"</em> aan zodat de AI zowel de vraagstelling als uw modeluitwerking analyseert.",
                "<strong>2. Verfijn via Chat &amp; Plak Schermafbeeldingen van Studentenwerk (<code>Cmd+V</code> / <code>Ctrl+V</code>):</strong> Stuur de voorgestelde criteria rechts bij in natuurlijke taal. Nog krachtiger: maak een schermafbeelding van een echt handgeschreven antwoord van een student, <strong>plak deze rechtstreeks in de chat</strong> en schrijf bijvoorbeeld: <em>\"Ik vind dat dit antwoord van de student het volledige puntenaantal verdient; pas de criteria en beoordelingsinstructies hierop aan.\"</em>",
                "<strong>3. Pas Toe &amp; Kalibreer op Enkele Kopieën:</strong> Klik op <strong>Valideren en toepassen op de vraag</strong>, en test de beoordelingsrubriek vervolgens op uw <code>⭐ Modeloplossing</code> en op 2 à 3 studentenkopieën in het tabblad Beoordeling alvorens een batch voor het volledige cohort te starten."
            ],
            screenshots: [
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "Venster AI-Rubriekassistent: Voorgestelde criteria & PROMPT_TEXT links, interactieve verfijningschat (met ondersteuning voor geplakte afbeeldingen) rechts"
                }
            ],
            callouts: [
                {
                    title: "Leest Zowel Canvas als Modeloplossing",
                    desc: "Stelt gestructureerde beoordelingscriteria en puntenwegingen voor die nauw aansluiten bij uw wiskundige of conceptuele uitwerking."
                },
                {
                    title: "Plak Echte Studentenantwoorden (Cmd+V)",
                    desc: "Plak schermafbeeldingen van grensgevallen in de chat om criteriumbeschrijvingen gericht bij te sturen."
                }
            ]
        },
        {
            id: "exam-roster-and-matching",
            guide: "exam",
            stepNumber: "E4",
            partColor: "indigo",
            tag: "Examenmodus • Stap 4 — Studentenlijst, Kopieën & Offline OCR",
            badge: "100% Lokaal & Offline",
            shortTitle: "Studentenlijst, Kopieën & OCR-koppeling",
            title: "Studentenlijst (CSV), PDF-splitsing & 100% Offline OCR-koppeling",
            subtitle: "Importeer uw officiële klaslijst, splits gebundelde scanner-pdf's op in individuele kopieën en koppel studenten lokaal zonder enige cloudupload.",
            paragraphs: [
                "Importeer in het tabblad <strong>2. Studenten</strong> uw studentenlijst vanuit een CSV- of Excel-bestand (Moodle, Canvas, Toledo, Osiris, enz.). Gradaly koppelt de kolommen <strong>Studentennummer (Stamnummer / ID)</strong>, <strong>Achternaam</strong>, <strong>Voornaam</strong>, <strong>E-mail</strong> en <strong>Groep</strong>.",
                "Importeer in het tabblad <strong>3. Kopieën</strong> ofwel afzonderlijke pdf-bestanden per student, ofwel één <strong>gebundelde groepsscan (multi-student PDF)</strong> rechtstreeks van het kopieerapparaat. Geef het aantal pagina's per kopie op (bijv. 4 pagina's per student) om de bundel automatisch op te splitsen in <code>copie_01.pdf</code>, <code>copie_02.pdf</code>, enz. Leverde uw scanner zware bestanden met hoge resolutie op (<strong>&gt; 220 DPI</strong>), dan detecteert Gradaly dit automatisch bij het importeren en biedt het met <strong>1 klik een optimalisatie naar 200 DPI</strong> aan (waardoor de projectgrootte tot 4× kleiner wordt voor sneller delen en cloudsynchronisatie). Daarnaast kunt u op aanvraag de <strong>Integriteitscontrole van kopieën</strong> uitvoeren om ondersteboven gescande (180°), verwisselde of ontbrekende pagina's op te sporen en met 1 klik te herstellen.",
                "Klik in het tabblad <strong>4. Koppeling</strong> op <strong>Automatisch koppelen (OCR)</strong>. Gradaly snijdt op pagina 1 van elke kopie de identificatiezone uit, voert <strong>100% offline op uw eigen computer een ingebouwde OCR-engine</strong> uit en koppelt handgeschreven namen en studentennummers aan uw studentenlijst via optimale fuzzy matching. Controleer en bevestig elke koppeling zij-aan-zij in enkele seconden."
            ],
            screenshots: [
                {
                    filePrefix: "04_students",
                    caption: "Tabblad Studenten: Lokale studentenlijst met Studentennummer, Naam, E-mailadres en Groep"
                },
                {
                    filePrefix: "05_copies",
                    caption: "Tabblad Kopieën: Gebundelde pdf-scans opsplitsen en individuele examenkopieën bekijken"
                },
                {
                    filePrefix: "06_matching",
                    caption: "Tabblad Koppeling: Visuele zij-aan-zij verificatie van de uitgesneden handgeschreven identificatiezone tegenover de studentenlijst"
                }
            ],
            callouts: [
                {
                    title: "Strikte Lokale Privacy (Geen Cloud-OCR)",
                    desc: "Namen, studentennummers, e-mailadressen en hoofdingafbeeldingen verlaten uw computer nooit — OCR draait 100% offline in de desktopapp."
                },
                {
                    title: "Filter Niet-gekoppeld & Direct Zoeken",
                    desc: "Filter op 'Te koppelen' of 'Dubbelzinnig' om onduidelijk handschrift in enkele seconden handmatig toe te wijzen."
                }
            ]
        },
        {
            id: "exam-grading-console",
            guide: "exam",
            stepNumber: "E5",
            partColor: "indigo",
            tag: "Examenmodus • Stap 5 — De Beoordelingsconsole",
            badge: "100% Menselijk, Standaard AI of Batch Flex (-50%)",
            shortTitle: "Handmatige & AI-Ondersteunde Beoordeling",
            title: "De Beoordelingsconsole met 3 Panelen: Sneltoetsen, AI-kalibratie & Batchmodus",
            subtitle: "Navigeer vraag per vraag door het cohort, begrijp de 3 statuskleuren, kalibreer op losse kopieën en voer AI-voorbeoordeling in batch uit.",
            paragraphs: [
                "Het tabblad <strong>5. Beoordeling</strong> bestaat uit drie gesynchroniseerde panelen: links de <strong>Studentenlijst</strong> (met bovenaan vastgepind de <code>⭐ Modeloplossing</code>), centraal de <strong>Interactieve PDF-viewer</strong> en rechts het <strong>Werkpaneel voor Vraag &amp; Beoordelingscriteria</strong>.",
                "<strong>1. Vraagcirkels &amp; 2D-Toetsenbordnavigatie:</strong> Klik rechtsboven op een genummerde vraagcirkel (<code>1</code>, <code>2</code>, <code>3</code>...) of druk op <code>←</code> / <code>→</code> (of <code>H</code> / <code>L</code>) om van de ene vraag naar de andere te springen. Gebruik <code>↑</code> / <code>↓</code> (of <code>K</code> / <code>J</code>) om bij dezelfde vraag door de studenten te bladeren, schakel beoordelingscriteria #1–#9 in of uit met de toetsen <code>1–9</code>, valideer handmatig met <code>V</code>, en druk op elk moment op <code>?</code> (of klik op het <code>⌨️</code>-icoon in de bovenbalk) om het ingebouwde overzicht van sneltoetsen te openen.",
                "<strong>2. De Kleurcode met 3 Statussen:</strong><br>• 🟢 <strong>Groen (<code>AI</code>):</strong> Voorbeoordeeld door de AI (in afwachting van uw menselijke controle).<br>• 🔵 <strong>Blauw (<code>Mens</code>):</strong> Beoordeeld, aangepast of expliciet gevalideerd door de docent.<br>• ⚪ <strong>Grijs (<code>Te beoordelen</code>):</strong> Nog niet beoordeeld.",
                "<strong>3. Kalibreren op Één Kopie, de AI-aanvraag Inspecteren &amp; Volledige Cohort-Batch Starten:</strong><br>• <strong>Kalibratie per Vraag &amp; Direct Onderbreken (<code>✕ Stop</code>):</strong> Klik rechtsonder op <strong>AI opnieuw uitvoeren voor deze vraag</strong> om uw beoordelingsrubriek enkel op de huidige student te testen. Duurt een redeneermodel te lang, klik dan op de rode knop <strong><code>✕ Stop</code> (<code>Onderbreken</code>)</strong> naast het laadicoon om de evaluatie onmiddellijk af te breken.<br>• <strong>Live AI-aanvraag- &amp; Afbeeldingsinspecteur (<code>👁️ AI-aanvraag</code>):</strong> Klik op de knop <strong><code>👁️ AI-aanvraag</code></strong> naast de evaluatieknop per vraag om het interactieve venster <strong>AI-aanvraaginspecteur</strong> te openen. Dit toont u in realtime: (1) de <strong>exacte uitgesneden/samengevoegde JPEG-afbeelding</strong> die naar het Vision-model wordt gestuurd en of de vraagstelling afkomstig is uit de <strong>Studentenkopie</strong> of uit het <strong>Blanco Canvas (<code>canvas.pdf</code>)</strong> (met een schakelaar om in 1 klik tussen beide te wisselen), (2) de volledige <strong>System Prompt &amp; User Prompt</strong>, en (3) de <strong>exacte HTTP JSON-payloadstructuur</strong> (inclusief actieve tools zoals <code>code_execution</code> en het strikte JSON-antwoordschema).<br>• <strong>Batchstart voor Meerdere Kopieën (<code>▶ AI-beoordeling</code>):</strong> Klik linksboven op <strong>▶ AI-beoordeling starten</strong> om geselecteerde kopieën en vragen te evalueren. Kies tussen de <strong>⚡ Standaardmodus</strong> (parallelle workers op vraagniveau <code>(kopie, vraag)</code> met gedeelde pdf-cache) en de <strong>🌿 Flex- / Asynchrone Batchmodus (-50% korting)</strong>, aanbevolen voor volledige cohorten met rechtstreekse sleutels van Gemini, OpenAI of Anthropic.<br>• <strong>Optionele Detectie van Kopie-anomalieën (<code>⚠️ Anomalieën</code>):</strong> Standaard ingeschakeld in de AI-instellingen; de AI signaleert tijdens het nakijken automatisch fysieke of visuele afwijkingen (antwoord buiten het kader geschreven, doorgestreept/dubbelzinnig werk, onleesbaar handschrift of verkeerde pagina), zodat u op <code>⚠️ Anomalieën</code> kunt filteren en elke melding met 1 klik kunt nakijken of afvinken.",
                "<strong>4. <code>Render / Edit</code>-voorbeeld &amp; Multi-Model Benchmark- en Regressiesuites:</strong><br>• <strong>Uniforme knop <code>Render / Edit</code>:</strong> Wissel rechtstreeks binnen <em>AI-motivering</em> en <em>Studentenfeedback</em> tussen live Markdown + KaTeX-weergave en directe tekstbewerking.<br>• <strong>Multi-Model Benchmark- &amp; Regressiesuites (<code>⭐</code>):</strong> Leg door mensen gevalideerde antwoorden vast in herbruikbare benchmarksuites en start vanuit de werkruimte <strong>Benchmark</strong> op het welkomstscherm vergelijkende campagnes tussen modellen (Gemini, GPT, Claude, OpenRouter, universiteitsserver, lokaal Ollama). Kies modellen via begeleide keuzelijsten, doorloop vooraf verplichte Vision- en Python-sandboxcontroles, draai met <code>1–16</code> parallelle threads (met VRAM-bescherming voor lokaal Ollama) onder een live voortgangsbalk, analyseer MAE, exacte overeenkomst, F1 per criterium, latentie en tokens, of open elke suite als een volwaardig Gradaly-project."
            ],
            screenshots: [
                {
                    filePrefix: "07_grading",
                    caption: "Overzicht Beoordelingsconsole: Links de studentenlijst (met ⭐ Modeloplossing, statusbolletjes, vraagscore & totaalscore), Centraal de automatisch gecentreerde pdf-zone, en Rechts het rubriekpaneel"
                },
                {
                    filePrefix: "07b_grading_single_ai",
                    caption: "Onderaan het Rechterpaneel: AI-motivering, Feedback voor de student (Markdown + KaTeX), Overschrijfbeveiliging en 'AI opnieuw uitvoeren voor deze vraag'"
                },
                {
                    filePrefix: "07c_grading_launch_modal",
                    caption: "Venster AI-beoordeling starten: Selecteer doelkopieën, vragen, overschrijfregels en Standaard- vs. Flex Asynchrone Batchmodus (-50%)"
                }
            ],
            callouts: [
                {
                    title: "100% Menselijke Snelheid via 2D-Sneltoetsen",
                    desc: "Blader door kopieën met ↑/↓ (K/J), wissel van vraag met ←/→ (H/L), schakel criteria 1–9 om, valideer met V, verlaat tekstvelden met Esc en druk op ? voor de sneltoetsgids."
                },
                {
                    title: "Aanbevolen Flex-Batchmodus (-50%)",
                    desc: "Beschikbaar met directe API-sleutels van Gemini, OpenAI en Anthropic voor asynchrone cohort-voorbeoordeling tegen 50% lager tarief."
                }
            ]
        },
        {
            id: "exam-collaborative-sharing",
            guide: "exam",
            stepNumber: "E6",
            partColor: "indigo",
            tag: "Examenmodus • Stap 6 — Teambeoordeling (Gradaly Pro)",
            badge: "Collaboratief Delen & Samenvoegen • PRO",
            shortTitle: "Team Delen & Samenvoegen (PRO)",
            title: "Collaboratief Projecten Delen & Selectief Samenvoegen per Vraag",
            subtitle: "Verdeel het nakijkwerk over collega's of onderwijsassistenten via .gradaly-archieven of end-to-end versleutelde Cloudlinks (Gradaly Pro).",
            paragraphs: [
                "Wanneer u een examen samen met collega's of assistenten beoordeelt, laat <strong>Gradaly Pro</strong> u toe om een volledig project of een lichtgewicht deelpakket te delen via een lokaal <code>.gradaly</code>-archief of via een <strong>met AES-256-GCM versleutelde Cloudlink</strong> (geldig gedurende 7, 14 of 30 dagen).",
                "Wanneer collega's op <strong>Importeren / Samenvoegen</strong> klikken, controleert Gradaly de SHA-256-vingerafdruk van het examen-canvas en kunnen zij het archief ofwel importeren als een <strong>nieuw project</strong>, ofwel <strong>beoordelingsrubrieken en/of beoordelingen selectief vraag per vraag samenvoegen</strong> (bijv. V1–V2 van assistent 1 combineren met V3–V4 van assistent 2) met automatische back-ups vóór elke samenvoeging."
            ],
            screenshots: [
                {
                    filePrefix: "09_share_modal",
                    caption: "Venster Project Delen / Exporteren (Gradaly Pro): Deelprofielen, selectie per vraag en met AES-256 versleutelde Cloudlink"
                },
                {
                    filePrefix: "10_import_merge_modal",
                    caption: "Venster Importeren / Selectief Samenvoegen (Gradaly Pro): SHA-256-verificatie van het canvas en samenvoeging van Rubriek/Beoordelingen per vraag"
                }
            ],
            callouts: [
                {
                    title: "End-to-End Versleutelde Cloudlinks",
                    desc: "Deel projecten veilig binnen uw docententeam met client-side AES-256-GCM-versleuteling (#k=... bereikt de server nooit)."
                },
                {
                    title: "Selectief Samenvoegen Vraag per Vraag",
                    desc: "Combineer beoordelingen van meerdere correctoren overzichtelijk, met bescherming van lokale handmatige aanpassingen en automatische back-up."
                }
            ]
        },
        {
            id: "exam-analytics-and-exports",
            guide: "exam",
            stepNumber: "E7",
            partColor: "indigo",
            tag: "Examenmodus • Stap 7 — Statistieken & Terugkoppeling",
            badge: "Excel • Moodle-CSV • Geannoteerde PDF's • Webportaal",
            shortTitle: "Statistieken, Moodle, PDF & Webportaal",
            title: "Cohortstatistieken, Moodle-export, Geannoteerde PDF's & Inzageportaal voor Studenten",
            subtitle: "Analyseer scoreverdelingen, importeer cijfers en persoonlijke inzagelinks in Moodle, en bezorg uw studenten rijke individuele feedback.",
            paragraphs: [
                "Het tabblad <strong>6. Samenvatting &amp; Statistieken</strong> berekent in realtime de statistieken van het hele cohort: gemiddelde, mediaan, standaardafwijking, min/max, ondubbelzinnige histogrammen <code>[a, b[</code> en het behaalde percentage per beoordelingscriterium.",
                "Om beoordeelde examens terug te koppelen naar studenten (voorbeeld met 1 kopie in de gratis versie; volledig cohort in Gradaly Pro), kiest u uit vier kanalen:<br>1) <strong>Excel-cijferlijst met Meerdere Tabbladen</strong> (algemeen overzicht + 1 tabblad per vraag, voor alle kopieën of een geselecteerde deelgroep).<br>2) <strong>Moodle-export (Cijferlijst-CSV &amp; Opdracht-beoordelingsblad)</strong>: genereer een standaard UTF-8 CSV-bestand voor <em>Moodle Cijfers → Importeren → CSV-bestand</em> of vul automatisch een offline beoordelingsblad in dat is gedownload uit een <em>Moodle-Opdracht</em> (koppeling op Studentennummer of E-mailadres), waarbij zowel het geschaalde cijfer (ruw totaal, <code>/20</code> of <code>/100</code>) als de klikbare <strong>persoonlijke versleutelde inzagelink</strong> van elke student rechtstreeks in de Moodle-kolom <em>Feedback</em> wordt opgenomen!<br>3) <strong>Individuele Geannoteerde PDF's (ZIP of Enkele Kopie) met Aanpasbaar Bestandsnaamformaat</strong>: combineert een samenvattend voorblad met de handgeschreven pagina's van de student en laat u het patroon van de bestandsnaam aanpassen met flexibele variabelen (<code>{nom}</code>, <code>{prenom}</code>, <code>{id}</code>, <code>{projet}</code>, <code>{copie}</code>, <code>{groupe}</code> — bijv. <code>{nom}_{prenom}_{projet}.pdf</code>) inclusief live voorbeeld.<br>4) <strong>Zero-Knowledge Online Inzageportaal voor Studenten</strong>: publiceer en synchroniseer versleutelde beoordeelde kopieën razendsnel online (multi-core CPU-pijplijn + 10 parallelle HTTP/2-stromen), verwittig studenten via <strong>Directe Cloud-e-mail (<code>@gradaly.io</code>)</strong> of via <strong>Mailmerge-export (<code>Publipostage</code> — vanuit uw eigen universitaire e-mailadres in Outlook Web / Microsoft 365, Word + Outlook Desktop of Thunderbird)</strong> met een gebruiksklare Excel-tabel (<code>.xlsx</code>), Word-databron (<code>.docx</code>) of <code>.csv</code>-bestand, exporteer rechtstreeks voor <strong>Moodle</strong>, of druk <strong>uitknipbare individuele QR-toegangsstrookjes</strong> af om tijdens het college uit te delen."
            ],
            screenshots: [
                {
                    filePrefix: "08_stats",
                    caption: "Tabblad Samenvatting & Statistieken (Examenmodus): Cohort-kerncijfers, histogrammen van de puntenverdeling, slagingspercentages per criterium en Exporthub"
                }
            ],
            callouts: [
                {
                    title: "Excel-cijferlijst & Geannoteerde PDF's",
                    desc: "Exporteer officiële universitaire cijferlijsten en individuele pdf-kopieën met gedetailleerde criteriumoverzichten en KaTeX-wiskunde."
                },
                {
                    title: "Moodle-CSV-export & Online Kopielinks",
                    desc: "Importeer cijfers en klikbare persoonlijke inzagelinks rechtstreeks in Moodle (CSV-import in Cijferlijst of offline beoordelingsblad van een Opdracht)."
                },
                {
                    title: "Versleuteld Inzageportaal voor Studenten",
                    desc: "Studenten bekijken hun beoordeelde kopie, afgevinkte criteria en persoonlijke feedback via Moodle, een magische e-maillink of een individueel QR-strookje."
                }
            ]
        },
        {
            id: "exam-ai-settings",
            guide: "exam",
            stepNumber: "E8",
            partColor: "indigo",
            tag: "Examenmodus • Stap 8 — AI-configuratie (Optioneel)",
            badge: "OpenRouter • Gemini • GPT • Claude • Lokaal",
            shortTitle: "API-sleutels & Keuze van AI-model",
            title: "Uw API-sleutel Instellen & Het Juiste AI-model Kiezen",
            subtitle: "Sla dit hoofdstuk over als u Gradaly in 100% Menselijke Modus gebruikt. Configureer uw API-sleutel in Instellingen (⚙️) om de AI-Rubriekassistent en AI-Voorbeoordeling te activeren.",
            paragraphs: [
                "<strong>De kwaliteit van de AI-voorbeoordeling hangt rechtstreeks af van het gekozen AI-model:</strong> In onze benchmarks op handgeschreven universitaire examens (wiskunde, natuurkunde, ingenieurswetenschappen, economie, geesteswetenschappen) behalen wij <strong>uitstekende resultaten</strong> met <strong><code>Gemini 3.8 Flash</code></strong>, <strong><code>GPT 5-4 mini</code></strong>, <strong><code>Claude-Sonnet-5.5</code></strong> en <strong><code>Mistral-Large 4.0</code></strong> — test gerust verschillende modellen afhankelijk van uw vakgebied!",
                "<strong>Rechtstreekse Providersleutels vs. OpenRouter:</strong> U kunt rechtstreeks een API-sleutel aanmaken bij <strong>Google Gemini</strong>, <strong>OpenAI</strong> of <strong>Anthropic</strong> (waarmee u toegang krijgt tot de asynchrone <strong>Batch- / Flex-modus met 50% korting</strong>), of kiezen voor <strong>OpenRouter</strong>, met als voordeel dat <strong>één enkele API-sleutel toegang geeft tot modellen van alle aanbieders</strong> (Gemini, GPT, Claude, Mistral, DeepSeek, Qwen, Llama) via één gecentraliseerd tegoed.",
                "<strong>0% Marge &amp; Geen Propriëtaire 'AI-credits':</strong> In tegenstelling tot commerciële cloudplatformen die één enkel afgeschermd model opleggen en dure 'AI-creditbundels' doorverkopen, rekent Gradaly <strong>0% marge</strong> op AI-gebruik. U betaalt uitsluitend de exacte tokenprijs van de provider — of <strong>0 € wanneer uw universiteit een eigen LLM-server aanbiedt of wanneer u lokaal een model draait via Ollama</strong>.",
                "<strong>Geavanceerde Instellingen — Native Uitvoering van Python-code (<code>code_execution</code> / <code>code_interpreter</code>):</strong> Onder <em>Instellingen (⚙️) → Geavanceerde instellingen</em> kunt u de optionele tool <strong>Uitvoering van Python-code</strong> activeren (standaard uitgeschakeld). Wanneer deze optie actief is, kan het AI-model tijdens zowel het ontwerpen van de rubriek als het beoordelen van kopieën Python-code schrijven en uitvoeren in een beveiligde server-sandbox (<code>code_execution</code> bij Google Gemini, <code>code_interpreter</code> op OpenAI <code>/v1/responses</code>, en <code>code_execution_20250825</code> op Anthropic <code>/v1/messages</code>) — bijzonder waardevol voor exacte en technische vakken met numerieke berekeningen, exponentiële functies, goniometrie of algoritme-analyse. Met de ingebouwde knop <strong>Test of het model code-uitvoering ondersteunt</strong> controleert u met 1 klik of het geselecteerde model daadwerkelijk de Python-sandbox aanspreekt.",
                "<strong>Geavanceerde Instellingen — Uitgebreide AI-debugmodus (<code>.debug/grading/inspect.html</code>):</strong> Wanneer u de <strong>AI-debugmodus</strong> inschakelt, bewaart Gradaly voor elke AI-evaluatie een volledig diagnostisch pakket in <code>.debug/grading/</code>, inclusief een zelfstandig visueel HTML-rapport (<strong><code>inspect.html</code></strong> en <code>latest_inspect.html</code>) met de exacte afbeelding die naar de AI is gestuurd, de herkomst van de opgave uit studentenkopie of blanco canvas (<code>image_source.json</code>), de System- &amp; User-prompts (<code>prompt.txt</code>), de volledige HTTP JSON-verzoekstructuur (<code>request_payload.json</code>), eventueel door het model uitgevoerde Python-code met console-uitvoer, en het onbewerkte API-antwoord (<code>raw_api_response.json</code>).",
                "<strong>Lokaal AI-tokenlogboek, tijdgrafieken &amp; eigen tarieven (<code>AI-verbruik &amp; Kosten</code>):</strong> Elke AI-aanroep (enkele en batchbeoordeling, Rubriekassistent, promptcontroles, Vision/Python-diagnostiek en benchmarkcampagnes) legt automatisch invoer- en uitvoer-/redeneertokens, datum, provider en model lokaal vast in <code>~/.gradaly_ai_usage.jsonl</code> (zonder persoonsgegevens van studenten). Klik op het <strong>Muntjespictogram (Coins)</strong> in de bovenbalk of in <em>Instellingen (⚙️)</em> om dag-/maandgrafieken en cumulatieve curven te bekijken, naar CSV te exporteren, het logboek te resetten en uw eigen <code>$ / 1M</code>-tarieven in te stellen — strikt voor eerder gebruikte providers en modellen, met directe links naar officiële prijslijsten aangezien tarieven kunnen wijzigen."
            ],
            screenshots: [
                {
                    filePrefix: "11_settings_ai",
                    caption: "Venster AI-instellingen (⚙️): Kies uw provider (Google Gemini, OpenRouter, OpenAI, Anthropic of Lokale / Universitaire Server), selecteer uw model en test de verbinding"
                }
            ],
            providerGuides: [
                {
                    name: "OpenRouter (Multi-Provider Gateway)",
                    tag: "Alle Modellen met 1 Sleutel",
                    icon: "fas fa-network-wired",
                    desc: "<strong>Specifiek voordeel:</strong> Met één enkel account en één API-sleutel test u <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code>, <code>Mistral-Large 4.0</code> en honderden andere modellen zonder meerdere facturatieaccounts te beheren (let op: asynchrone Batchmodus is niet beschikbaar via OpenRouter).",
                    steps: [
                        "Ga naar <strong>openrouter.ai</strong> en meld u aan (of maak een gratis account aan).",
                        "Open <strong>Credits</strong> en laad een klein voorafbetaald saldo op (bijv. $5 of $10 — ruim voldoende voor duizenden examenpagina's).",
                        "Open <strong>Keys</strong> → klik op <strong>Create Key</strong>, geef deze de naam <code>Gradaly</code> en kopieer de sleutel die begint met <code>sk-or-v1-...</code>.",
                        "Open in Gradaly <strong>Instellingen (⚙️)</strong>, kies <strong>OpenRouter</strong>, plak de sleutel en selecteer het gewenste model."
                    ],
                    url: "https://openrouter.ai/keys",
                    linkLabel: "Open OpenRouter API-sleutelconsole"
                },
                {
                    name: "Google Gemini (Google AI Studio)",
                    tag: "Snel & Voordelig",
                    icon: "fas fa-bolt",
                    desc: "Rechtstreekse toegang tot Google's multimodale <code>Gemini 3.8 Flash</code>- en Pro-modellen, met native ondersteuning voor asynchrone Batchmodus met 50% korting.",
                    steps: [
                        "Meld u aan bij <strong>Google AI Studio</strong> (<code>aistudio.google.com</code>) met uw Google-account.",
                        "Klik links op <strong>Get API key</strong> en vervolgens op <strong>Create API key</strong>.",
                        "Kopieer de gegenereerde sleutel (beginnend met <code>AIzaSy...</code>). Activeer Pay-as-you-go-facturatie als u hogere snelheidslimieten wenst.",
                        "Open in Gradaly <strong>Instellingen (⚙️)</strong>, selecteer <strong>Google Gemini</strong> en plak uw sleutel."
                    ],
                    url: "https://aistudio.google.com/app/apikey",
                    linkLabel: "Open Google AI Studio API-sleutels"
                },
                {
                    name: "OpenAI (GPT-modellen)",
                    tag: "Hoge Logische Precisie",
                    icon: "fas fa-brain",
                    desc: "Rechtstreekse toegang tot de multimodale modellen van OpenAI zoals <code>GPT 5-4 mini</code>, uitstekend voor het stapsgewijs narekenen van uitwerkingen, met 50% korting in Batchmodus.",
                    steps: [
                        "Meld u aan op <strong>platform.openai.com</strong> (staat los van een consumentenabonnement op ChatGPT Plus).",
                        "Ga naar <strong>Settings → Billing</strong> en voeg een klein prepaidtegoed toe (bijv. $5).",
                        "Open <strong>Dashboard → API keys</strong>, klik op <strong>+ Create new secret key</strong> en kopieer de sleutel (<code>sk-proj-...</code>).",
                        "Open in Gradaly <strong>Instellingen (⚙️)</strong>, selecteer <strong>OpenAI</strong>, plak de sleutel en kies uw model."
                    ],
                    url: "https://platform.openai.com/api-keys",
                    linkLabel: "Open OpenAI Platform API-sleutels"
                },
                {
                    name: "Anthropic (Claude-modellen)",
                    tag: "Bewijzen & Genuanceerde Teksten",
                    icon: "fas fa-feather-alt",
                    desc: "Rechtstreekse toegang tot Anthropics <code>Claude-Sonnet-5.5</code>- en Opus-modellen, geroemd om het analyseren van handgeschreven wiskundige bewijzen en het formuleren van genuanceerde feedback.",
                    steps: [
                        "Meld u aan bij de <strong>Anthropic Console</strong> (<code>console.anthropic.com</code>).",
                        "Activeer onder <strong>Settings → Billing</strong> een voorafbetaald tegoed.",
                        "Klik in <strong>API Keys</strong> op <strong>Create Key</strong> en kopieer de geheime sleutel (<code>sk-ant-...</code>).",
                        "Open in Gradaly <strong>Instellingen (⚙️)</strong>, selecteer <strong>Anthropic</strong> en plak uw sleutel."
                    ],
                    url: "https://console.anthropic.com/settings/keys",
                    linkLabel: "Open Anthropic Console API-sleutels"
                }
            ],
            callouts: [
                {
                    title: "Universitaire Server of 100% Lokale Ollama",
                    desc: "Biedt uw universiteit een OpenAI-compatibele AI-server aan of draait u lokaal een model via Ollama (<code>http://localhost:11434/v1</code>), kies dan 'Universiteit / Custom' of 'Lokaal' in Instellingen voor 0 € aan tokenkosten."
                },
                {
                    title: "Verbindingsdiagnose in 1 Klik",
                    desc: "Klik op elk moment op de AI-statusbadge in de bovenbalk om de geldigheid van uw API-sleutel en de bereikbaarheid van het model te verifiëren."
                },
                {
                    title: "Python-sandbox voor Code-uitvoering (Optioneel)",
                    desc: "Schakel in Geavanceerde instellingen native Python-uitvoering in voor uiterst nauwkeurige numerieke controle op Gemini, OpenAI en Anthropic, met compatibiliteitstest in 1 klik."
                },
                {
                    title: "Visuele AI-aanvraag- & Debug-inspecteur",
                    desc: "Klik op '👁️ AI-aanvraag' in het tabblad Beoordeling of open .debug/grading/inspect.html om het exacte beelduitsnijdsel, de herkomst (Canvas vs. Kopie), de prompts en de JSON-payload te bekijken."
                }
            ]
        },
        {
            id: "exam-faq",
            guide: "exam",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "indigo",
            tag: "Veelgestelde Vragen (FAQ)",
            badge: "Architectuur, Privacy & Beste Praktijken",
            shortTitle: "Veelgestelde Vragen",
            title: "Veelgestelde Vragen (FAQ)",
            subtitle: "Antwoorden op veelgestelde vragen over de werking van AI-beoordeling, formatieve proefexamens vs. officiële examens, lokale opslag in Documents/Gradaly, API-sleutelbeveiliging, Zero-Knowledge Cloudversleuteling en ondersteuning.",
            paragraphs: [
                "Hieronder vindt u uitgebreide antwoorden op de meest voorkomende technische, didactische en privacygerelateerde vragen over de Examen- &amp; Proefexamenmodus van Gradaly."
            ],
            faqs: [
                {
                    q: "Hoe werkt de AI-beoordeling van Gradaly onder de motorkap, en komt de afbeelding van de vraag uit de kopie van de student of uit het blanco canvas?",
                    a: "<p>Wanneer u de AI vraagt om een vraag op een studentenkopie te beoordelen, extraheert Gradaly het <strong>uitgesneden beeld van de rechthoekige zone</strong> die u voor die vraag hebt getekend en stuurt dit naar het gekozen Vision AI-model, samen met een gestructureerde prompt met uw beoordelingscriteria (<code>CRITERIA</code>) en algemene beoordelingsinstructies (<code>PROMPT_TEXT</code>).</p><p><strong>Komt de opgave uit de kopie van de student of uit het blanco canvas?</strong><ul><li><strong>Eén gecombineerde zone (standaard):</strong> Wanneer u één enkele zone per vraag tekent, snijdt Gradaly deze zone <strong>volledig uit de kopie van de student (<code>copies/copie_XXX.pdf</code>)</strong>. Het blanco canvas (<code>canvas.pdf</code>) wordt daarbij niet gebruikt; als elke student andere getallenwaarden op zijn of haar examenblad heeft staan, ziet de AI dus de exacte cijfers en het antwoord van die specifieke student.</li><li><strong>Gescheiden zones (<code>Opgave / antwoord splitsen</code>) &amp; optie <code>AI-opgave</code>:</strong> In het tabblad <em>1. Canvas &amp; Vragen</em> kiest u met de schakelaar <strong><code>AI-opgave: [Studentenkopie] / [Canvas]</code></strong> of het opgavedeel afkomstig is uit elke afzonderlijke <strong>Studentenkopie</strong> (onmisbaar bij gepersonaliseerde opgaven) of uit het <strong>Blanco Canvas (<code>canvas.pdf</code>)</strong> (handig wanneer studenten antwoorden op losse bladen zonder gedrukte vraagstelling).</li></ul></p><p><strong>Het exacte beeld &amp; de JSON-aanvraag inspecteren:</strong> Klik op elk moment in het tabblad <em>5. Beoordeling</em> op de knop <strong><code>👁️ AI-aanvraag</code></strong> naast <em>AI opnieuw uitvoeren voor deze vraag</em> (of schakel <em>AI-debugmodus</em> in via <em>Instellingen → Geavanceerde instellingen</em> om <code>.debug/grading/inspect.html</code> te openen) om de exacte verzonden JPEG-afbeelding, de herkomst ervan, de System- &amp; User-prompts, de volledige HTTP JSON-payload en eventueel uitgevoerde Python-code te bekijken.</p>"
                },
                {
                    q: "Kan ik op AI-beoordeling vertrouwen, of zet ik die beter in voor formatieve proefexamens?",
                    a: "<p><strong>Ja en nee — in het begin nooit blindelings!</strong> Aanvankelijk kan uw eerste beoordelingsrubriek nog te streng of dubbelzinnig geformuleerd zijn, of kan het gekozen AI-model moeite hebben met een specifiek vraagstuk of een ongebruikelijke notatie verkeerd lezen.</p><p><strong>Formatieve proefexamens vs. officiële examens:</strong> Veel docenten kijken hun officiële eindexamen het liefst met de hand op papier na (of gebruiken Gradaly in 100% Menselijke Modus), terwijl zij heel graag de AI-voorbeoordeling van Gradaly inzetten voor <strong>formatieve proefexamens halverwege het jaar</strong> om studenten diepgaande, geïndividualiseerde feedback te bieden onder realistische examenomstandigheden.</p><p><strong>Menselijke controle en validatie zijn essentieel:</strong> Telkens wanneer Gradaly wordt gebruikt voor <strong>summatieve of certificerende examens</strong>, raden wij ten zeerste aan om <strong>de AI-beoordelingen na te lezen en handmatig te valideren</strong>. Gradaly is specifiek ontworpen om elk antwoord en elke feedbacktekst vlot te controleren, bij te sturen en handmatig te valideren — en dat blijft altijd de beste academische praktijk.</p><p><strong>Transparantie voor studenten &amp; inzage/bezwaar:</strong> Omdat Gradaly studenten volledige transparantie biedt over de exacte criteria die op hun kopie zijn toegepast (via geannoteerde pdf's of het Studentenwebportaal), bevelen wij ook sterk aan om studenten na inzage de mogelijkheid te geven om gemotiveerd bezwaar aan te tekenen tegen de toepassing van specifieke criteria.</p>"
                },
                {
                    q: "Hoeveel kost het om een examen met AI te beoordelen?",
                    a: "<p>Er is geen vast eenheidstarief, omdat de kosten afhangen van verschillende factoren: het aantal studentenkopieën, het aantal vragen en het gekozen AI-model (elke API-provider publiceert zijn exacte prijs per miljoen input-/outputtokens).</p><p>Om een concrete richtwaarde uit de praktijk te geven: met een uitstekend model als <strong><code>Gemini 3.8 Flash</code></strong> (dat in onze tests opmerkelijk sterk presteert) beoordeelden wij complexe universitaire statistiekexamens van <strong>6 tot 7 pagina's handgeschreven uitwerkingen voor 400 studenten tegen een totale API-kost van ongeveer $5 tot $7</strong> in de flexibele batchmodus (waarbij Gradaly 0% marge rekent boven op de tokenprijs van uw provider). Omdat tarieven van providers wijzigen, logt Gradaly bij elke aanroep het exacte aantal invoer- en uitvoer-/redeneertokens lokaal in <strong>AI-verbruik &amp; Kosten</strong> (muntjespictogram in kopbalk of Instellingen), waar u grafieken bekijkt, CSV's exporteert en uw actuele <code>$ / 1M</code>-tarieven instelt.</p>"
                },
                {
                    q: "Ik heb al een betaald abonnement op ChatGPT Plus (OpenAI), Claude Pro of Gemini Advanced — waarom kan ik dat niet gebruiken in plaats van een API-sleutel?",
                    a: "<p><strong>1. Twee strikt gescheiden producten bij AI-aanbieders:</strong> Bij OpenAI, Anthropic en Google zijn consumentenabonnementen (ChatGPT Plus, Claude Pro, Gemini Advanced van ~$20/maand) en <strong>API-toegang</strong> volledig gescheiden facturatiesystemen. Consumentenabonnementen geven enkel handmatige toegang tot hun web-/mobiele chatinterface en staan technisch niet toe dat externe software zoals Gradaly geautomatiseerde verzoeken uitvoert (bovendien verbieden hun gebruiksvoorwaarden het omzeilen hiervan strikt).</p><p><strong>2. Parallelle batchbeoordeling &amp; sterkere gegevensbescherming:</strong> Om tientallen of honderden examenkopieën parallel voor te beoordelen en gestructureerde beoordelingsdata terug te krijgen (aangevinkte rubriekcriteria, motivering voor de docent en feedback voor de student), moet Gradaly communiceren via de officiële ontwikkelaars-API. Bovendien geniet <strong>API-verkeer strengere privacywaarborgen</strong>: in tegenstelling tot standaard consumentenchats worden antwoorden die via de zakelijke API worden verzonden <strong>contractueel niet door OpenAI, Google of Anthropic gebruikt om hun AI-modellen te trainen</strong>.</p><p><strong>3. Zeer lage kosten naar verbruik (geen extra maandabonnement):</strong> Een API-sleutel vereist geen maandelijks abonnement — u betaalt uitsluitend voor de exacte tokens die u verbruikt (<em>pay-as-you-go</em>, met 0% marge van Gradaly), wat doorgaans neerkomt op <strong>slechts enkele euro's of dollars voor een volledig cohort van honderden studenten</strong> (en Google biedt zelfs een gratis quotum aan op de Gemini API om te testen). Geeft u de voorkeur aan één centraal tegoed voor alle modellen (OpenAI, Claude, Gemini, Mistral), dan gebruikt u eenvoudigweg <strong>OpenRouter</strong> of de institutionele AI-server van uw universiteit.</p>"
                },
                {
                    q: "Hoe lang duurt het om een examen met AI te beoordelen?",
                    a: "<p>De verwerkingstijd hangt af van het aantal vraagzones, het aantal kopieën en de complexiteit van de redeneertaak voor het AI-model. In de praktijk duurt de voorbeoordeling van een examen met <strong>400 studentenkopieën, 5 vragen en een tiental pagina's handgeschreven antwoorden</strong> in flexibele modus doorgaans <strong>ongeveer 10 minuten voor het volledige cohort</strong>.</p><p><strong>Tip om sneller te verwerken:</strong> Verhoog gerust het <strong>aantal parallelle workers (threads)</strong> in <strong>Instellingen (⚙️)</strong> — zolang de snelheidslimieten (rate limits) van uw API-provider dit toelaten, verkort een hoger aantal parallelle workers de totale verwerkingstijd aanzienlijk.</p>"
                },
                {
                    q: "Welke scanresolutie (DPI) gebruik ik het best bij het scannen van studentenkopieën?",
                    a: "<p>Streef naar <strong>zo licht mogelijke bestanden die toch scherp leesbaar blijven</strong>: <strong><code>150 DPI</code> tot <code>200 DPI</code></strong> is de ideale balans voor zowel menselijke lectuur als AI-visionmodellen.</p><p><strong>Waarom u beter NIET scant op 300 of 600 DPI:</strong> Scannen op zeer hoge resolutie levert geen enkele kwaliteitswinst op voor AI-herkenning (visionmodellen schalen afbeeldingen intern sowieso terug), maar maakt uw pdf-bestanden 4× tot 10× zwaarder, wat het splitsen van pdf's, bladeren en versleutelde clouduploads onnodig vertraagt.</p><p><strong>Scan bij voorkeur in kleur:</strong> Wij raden aan te scannen in <strong>Kleur (op 150–200 DPI met standaard JPEG/PDF-compressie)</strong> in plaats van hard zwart-wit (1-bit). Kleur behoudt lichte potloodlijnen, gekleurde pennen in schema's en fijne wiskundige indices veel getrouwer.</p>"
                },
                {
                    q: "Waar worden de bestanden van Gradaly op mijn computer bewaard?",
                    a: "<p>Al uw examenprojecten worden lokaal opgeslagen in de map <strong><code>Documents/Gradaly/</code></strong> op uw computer (bijv. <code>~/Documents/Gradaly/</code> op macOS/Linux of <code>C:\\Users\\UwNaam\\Documents\\Gradaly\\</code> op Windows), met één submap per project.</p><p>Binnen elke projectmap wordt alles bewaard in open, transparante bestandsformaten:<ul><li><strong>PDF-bestanden:</strong> het blanco examencanvas (<code>canvas.pdf</code>), de optionele modeloplossing (<code>solution.pdf</code>), en de individuele studentenkopieën in <code>copies/</code> (<code>copie_01.pdf</code>, <code>copie_02.pdf</code>, enz.).</li><li><strong>JSON-tekstbestanden:</strong> de vraagzones en beoordelingsrubriek (<code>config.json</code>), de studentenlijst met namen, studentennummers en e-mailadressen (<code>students.json</code>), de OCR-koppelingstabel (<code>matching.json</code>), en de beoordeling en feedback per kopie in <code>gradings/</code> (<code>copie_01.json</code>, enz.).</li></ul></p><p><strong>⚠️ Belangrijk advies:</strong> Hoewel deze open mappenstructuur het zeer eenvoudig maakt om een back-up van uw map <code>Documents/Gradaly</code> te maken (via Time Machine, Nextcloud, OneDrive, enz.), <strong>raden wij sterk af om bestanden binnen een projectmap handmatig te bewerken, te hernoemen of te verplaatsen</strong>, omdat dit interne verwijzingen kan verbreken.</p>"
                },
                {
                    q: "Waar worden mijn API-sleutels opgeslagen en is dit veilig?",
                    a: "<p>Uw AI API-sleutels (Gemini, OpenRouter, OpenAI, Anthropic) worden <strong>uitsluitend lokaal op uw eigen computer</strong> bewaard in het verborgen configuratiebestand <code>.gradaly_settings.json</code> in uw persoonlijke gebruikersmap (<code>~/.gradaly_settings.json</code> op macOS/Linux of <code>C:\\Users\\UwNaam\\.gradaly_settings.json</code> op Windows).</p><p><strong>Beveiligingswaarborgen:</strong><ul><li>Uw API-sleutels worden <strong>nooit naar een server van Gradaly verzonden</strong> en worden <strong>nooit opgenomen wanneer u een <code>.gradaly</code>-projectarchief exporteert of deelt</strong> met collega's.</li><li>Wanneer u de AI-Rubriekassistent of AI-voorbeoordeling gebruikt, communiceert uw computer <strong>rechtstreeks via versleutelde HTTPS (TLS 1.3)</strong> met het officiële API-eindpunt van de gekozen provider (Google, OpenRouter, OpenAI, Anthropic of uw universitaire server).</li><li>U kunt uw API-sleutel op elk moment intrekken, vernieuwen of van een maandelijks uitgavenplafond voorzien via het dashboard van uw provider.</li></ul></p>"
                },
                {
                    q: "Waar worden gegevens bewaard wanneer ik een examen in de Cloud publiceer of een deellink aanmaak? Wie heeft toegang?",
                    a: "<p>Wanneer u een examen publiceert op het <strong>Studentenwebportaal</strong> of een <strong>Collaboratieve Cloud-deellink</strong> genereert, wordt <strong>elk bestand eerst lokaal op uw computer versleuteld met <code>AES-256-GCM</code> voordat er ook maar één byte uw toestel verlaat</strong>. Uitsluitend onleesbare, versleutelde binaire bestanden (<code>.enc</code>) worden geüpload naar onze Europese cloudopslag (gehost in de EU met automatische vervaldatum).</p><p>De geheime ontsleutelingssleutel (<code>#k=...</code>) bevindt zich uitsluitend in het URL-fragment achter het <code>#</code>-teken. Volgens de webstandaard (RFC 3986) sturen webbrowsers <strong>het gedeelte na <code>#</code> nooit door naar de server</strong>. Daardoor kunnen <strong>zelfs de makers van Gradaly uw bestanden in de cloud nooit lezen, en zou zelfs een aanvaller bij een inbraak op het cloudplatform niets kunnen inzien</strong> — omdat alles versleuteld is opgeslagen en alleen u (en de ontvangers met wie u de gegenereerde weblink deelt) over de sleutel beschikken.</p>"
                },
                {
                    q: "Waarom is Gradaly een desktopapplicatie in plaats van een webtool? Wat is de langetermijnvisie van Gradaly?",
                    a: "<p>Wij kozen om twee fundamentele redenen voor een native desktoparchitectuur (macOS, Windows, Linux):</p><p>1) <strong>Onmiddellijke Datasoevereiniteit:</strong> U hoeft nooit onversleutelde studentenlijsten of examenscans te uploaden naar een externe SaaS-database enkel en alleen om uw examen te organiseren en te koppelen.</p><p>2) <strong>Onze Langetermijnvisie (100% Autonome Lokale AI):</strong> AI-hardware en open-weights multimodale modellen evolueren razendsnel. <strong>De visie van Gradaly is dat krachtige vision-taalmodellen binnen enkele jaren rechtstreeks op de laptop van de docent zullen draaien</strong> (of op een lokale vakgroepserver). Omdat Gradaly een native desktopapplicatie is met ingebouwde ondersteuning voor lokale servers (Ollama / vLLM / universitaire servers), worden docenten daarmee <strong>100% autonoom</strong> — examens offline nakijken zonder cloudafhankelijkheid en zonder tokenkosten.</p>"
                },
                {
                    q: "Wat zijn de verschillen met traditionele webgebaseerde nakijkplatformen of cloud-AI-graders?",
                    a: "<p><strong>Vergeleken met traditionele webgebaseerde nakijkplatformen:</strong> Browserplatformen bieden reële voordelen voor bepaalde werkwijzen — gelijktijdige samenwerking in realtime in de browser zonder bestanden samen te voegen, uitgebreide ondersteuning voor meerkeuze-invulformulieren en automatische antwoordgroepering. Ze bevatten echter geen multimodale AI-voorbeoordeling voor open handgeschreven redeneringen, bieden geen AI-assistent om beoordelingsrubrieken samen te ontwerpen, en geven u minder controle over studentgegevens (die onversleuteld op externe servers staan). Gradaly kan in <strong>100% Menselijke Modus</strong> worden gebruikt met dezelfde gestructureerde rubriekworkflow, aangevuld met optioneel AI-rubriekontwerp, AI-voorbeoordeling en 100% lokale gegevenscontrole.</p><p><strong>Vergeleken met opkomende Cloud-AI-graders:</strong> Die platformen leggen doorgaans één enkel black-box AI-model op en rekenen hoge marges aan via eigen 'AI-creditpakketten'. Gradaly geeft u <strong>volledige vrijheid in de keuze van het AI-model</strong> (Gemini, GPT, Claude, Mistral, OpenRouter of een gratis universitaire/lokale server) en rekent <strong>0% marge op het AI-verbruik</strong>.</p>"
                },
                {
                    q: "Welke toetsenbordsneltoetsen zijn beschikbaar voor vlot nakijken en navigeren?",
                    a: "<p>Gradaly is zo ontworpen dat u door een volledig cohort kunt navigeren en beoordelen zonder de muis aan te raken. Druk op elk moment op <strong><code>?</code></strong> (of klik op het <strong><code>⌨️</code></strong>-icoon in de bovenbalk) om het sneltoetsoverzicht te openen:</p><ul><li><strong><code>↑</code> / <code>↓</code> (of <code>K</code> / <code>J</code>):</strong> Vorige / volgende studentenkopie (werkt in de tabbladen <em>Studenten</em>, <em>Kopieën</em>, <em>Koppeling</em> en <em>Beoordeling</em>).</li><li><strong><code>←</code> / <code>→</code> (of <code>H</code> / <code>L</code>):</strong> Vorige / volgende vraag (in <em>Canvas &amp; Vragen</em> en <em>Beoordeling</em>), of vorige / volgende pdf-pagina (in <em>Kopieën</em>).</li><li><strong><code>Shift + ←</code> / <code>Shift + →</code> (of <code>PageUp</code> / <code>PageDown</code>):</strong> Blader door de pdf-pagina's in het tabblad <em>Beoordeling</em> zonder van actieve vraag te wisselen.</li><li><strong><code>1</code> t/m <code>9</code> (bovenste cijferrij of numeriek toetsenblok):</strong> Vink criterium #1 t/m #9 van de actieve vraag aan of uit.</li><li><strong><code>V</code>:</strong> Schakel handmatige menselijke validatie op de actieve vraag in of uit.</li><li><strong><code>Esc</code>:</strong> Verlaat elk tekstveld (Feedback, Motivering of Zoekbalk) om pijl- en cijfersneltoetsen meteen weer te activeren.</li><li><strong><code>Cmd/Ctrl + +</code> / <code>-</code> / <code>0</code>:</strong> Tekstgrootte van de interface vergroten / verkleinen / herstellen.</li></ul>"
                },
                {
                    q: "Hoe importeer ik cijfers en persoonlijke inzagelinks voor studenten in Moodle?",
                    a: "<p>Gradaly bevat een speciale tool <strong>🎓 Moodle-export (CSV)</strong> (bereikbaar vanuit zowel het venster <strong>Online Webportaal</strong> als het algemene menu <strong>Exporteren</strong>) die de twee officiële importmethoden van Moodle ondersteunt:</p><p><strong>1. Rechtstreekse CSV-import in de Moodle-Cijferlijst:</strong><ul><li>Kies in Gradaly <strong>1. Moodle-Cijferlijst (Directe CSV)</strong>, selecteer de gewenste puntenschaal (ruw examentotaal, <code>/20</code> of <code>/100</code>) en de gewenste feedbackinhoud (klikbare link naar de versleutelde kopie van de student op <code>portal.gradaly.io</code> + puntenoverzicht per vraag), en exporteer het UTF-8 CSV-bestand.</li><li>Open in uw Moodle-cursus het tabblad <strong>Cijfers (Grades)</strong>, klik linksboven in het uitklapmenu (<strong>Beoordelaarsrapport / Grader report</strong>) op <strong>Importeren</strong> → <strong>CSV-bestand</strong> en upload het bestand.</li><li>Koppel onder <em>Gebruiker identificeren aan de hand van</em> het veld <code>ID-nummer</code> (Studentennummer) aan <code>ID-nummer</code> (of <code>E-mailadres</code> aan <code>E-mailadres</code>). Koppel onder <em>Koppeling beoordelingsitems</em> de kolom <code>Note</code>/<code>Grade</code> aan het gewenste beoordelingsitem (of <em>Nieuw beoordelingsitem</em>) en koppel de kolom <code>Feedback</code> aan het bijbehorende veld <strong>Feedback</strong>.</li></ul></p><p><strong>2. Offline Beoordelingsblad van een Moodle-Opdracht (Zonder Kolomkoppeling):</strong><ul><li>Activeer in de instellingen van uw Moodle-<em>Opdracht (Assignment)</em> de opties <em>Offline beoordelingsblad</em> en <em>Feedbackopmerkingen</em> onder <em>Feedbacktypes</em>, en download vervolgens het CSV-beoordelingsblad via <em>Bekijk alle inzendingen → Beoordelingsactie: Download beoordelingsblad</em>.</li><li>Kies in Gradaly <strong>2. Een Moodle-opdrachtblad aanvullen</strong> en selecteer dat CSV-bestand: Gradaly koppelt alle studenten automatisch op basis van hun ID-nummer of e-mailadres en vult de kolommen <code>Cijfer</code> en <code>Feedbackopmerkingen</code> ter plaatse in, zodat u het bestand direct opnieuw in Moodle kunt uploaden!</li></ul></p>"
                },
                {
                    q: "Kan ik notificatie-e-mails versturen vanuit mijn eigen universitaire e-mailadres (Outlook Web, Word + Outlook, Thunderbird) via Mailmerge?",
                    a: "<p><strong>Ja!</strong> Schakel in het venster <strong>✉️ Verwittigen per e-mail</strong> van het Online Webportaal naar het tweede tabblad: <strong>📊 Mailmerge (Mijn e-mailclient)</strong>. U kunt het onderwerp en bericht vrij aanpassen (met variabelen zoals <code>{prenom}</code>, <code>{nom}</code>, <code>{matricule}</code>, <code>{note}</code>, <code>{max}</code>, <code>{lien}</code>) en exporteren in 3 specifieke formaten: een <strong>Word-gegevensbron <code>.docx</code></strong> (voor Microsoft Word + Outlook Mailmerge), een <strong>Excel-werkmap <code>.xlsx</code></strong> (met een opgemaakte Exceltabel genaamd <code>Publipostage</code> voor Microsoft 365 / Power Automate), of een <strong>UTF-8 <code>.csv</code>-bestand</strong> (voor Thunderbird).</p><p><strong>Waarom werkt de Mailmerge-export van Gradaly zo vlot?</strong> Omdat het geëxporteerde bestand naast de afzonderlijke kolommen (<code>EMAIL</code>, <code>PRENOM</code>, <code>NOM</code>, <code>MATRICULE</code>, <code>NOTE</code>, <code>MAX</code>, <code>NOTE_SUR_MAX</code>, <code>LIEN_COPIE</code>) voor elke student ook <strong>kant-en-klaar samengestelde verzendkolommen</strong> bevat: <code>SUJET_PRET</code> (onderwerp), <code>MESSAGE_TEXTE_PRET</code> (volledige e-mail in platte tekst) en <code>MESSAGE_HTML_PRET</code> (volledige HTML-e-mail). U hoeft dus slechts één enkel samenvoegveld in te voegen:</p><ul><li><strong>💼 Microsoft Word + Klassieke Outlook Desktop (Windows &amp; Mac):</strong> Klik in Gradaly op <strong>Exporteren voor Word (<code>.docx</code>)</strong>. Open in Word <em>Verzendlijsten → Adressen selecteren → Bestaande lijst gebruiken…</em> en kies het geëxporteerde <code>.docx</code>-bestand (in tegenstelling tot <code>.xlsx</code> op macOS opent een native Word-tabel onmiddellijk zonder verouderde Excel-conversiewaarschuwingen). Voeg het samenvoegveld <code>«MESSAGE_TEXTE_PRET»</code> in en klik op <em>Voltooien en samenvoegen → E-mailberichten verzenden…</em> (Aan: <code>EMAIL</code>).</li><li><strong>🌐 Outlook Web (Microsoft 365 in de browser) via Power Automate:</strong> Klik op <strong>Exporteren als Excel (<code>.xlsx</code>)</strong> en plaats het bestand op uw universitaire OneDrive. Maak in Microsoft Power Automate (<code>make.powerautomate.com</code>) een directe cloudstroom met 2 stappen: <em>Excel Online (Business) → Rijen weergeven die aanwezig zijn in een tabel</em> (selecteer uw bestand en de tabel <code>Publipostage</code>) gevolgd door <em>Office 365 Outlook → Een e-mail verzenden (V2)</em> met <code>Aan = EMAIL</code>, <code>Onderwerp = SUJET_PRET</code> en <code>Hoofdtekst = MESSAGE_HTML_PRET</code>. Voor kleine groepen of individuele herverzendingen kunt u ook rechtstreeks op <strong>Outlook Web</strong> klikken bij een student in Gradaly om een vooraf ingevuld bericht te openen op <code>outlook.office.com</code>!</li><li><strong>🦅 Mozilla Thunderbird (Windows, macOS, Linux):</strong> Stel met de gratis add-on <em>Mail Merge</em> een nieuw bericht op met <code>{{EMAIL}}</code> bij <em>Aan</em>, <code>{{SUJET_PRET}}</code> bij <em>Onderwerp</em> en <code>{{MESSAGE_TEXTE_PRET}}</code> in de berichttekst, en start <em>Mail Merge → CSV</em> met het geëxporteerde <code>.csv</code>-bestand.</li></ul>"
                },
                {
                    q: "Waar kan ik suggesties doorgeven of bugs melden?",
                    a: "<p>Wij stellen al uw feedback, ideeën voor nieuwe functies en bugmeldingen zeer op prijs! U kunt rechtstreeks een melding aanmaken op onze GitHub-issuetracker: <a href=\"https://github.com/gradaly/gradaly-website/issues\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-indigo-600 font-bold hover:underline\">https://github.com/gradaly/gradaly-website/issues</a>.</p>"
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
            partHeader: "Handleiding 2 — QR-Oefen- & Zelfevaluatiemodus (Student)",
            partColor: "teal",
            partBanner: {
                kicker: "Handleiding 2 • Product 2: Formatieve QR-Oefenmodus",
                title: "Volledige Gids voor Zelfstandige Zelfevaluatie door Studenten via Afdrukbare QR-Oefenbladen",
                desc: "100% zelfstandige gids: ontwerp een pdf-oefenblad met ingesloten QR-codes zodat studenten op papier werken, scannen met hun smartphone en direct formatieve AI-feedback ontvangen (geen API-sleutel vereist op portal.gradaly.io, of optionele persoonlijke Gemini-sleutel)."
            },
            tag: "QR-Oefenmodus • Stap 1 — Concept & Projectaanmaak",
            badge: "Formatief • Zelfstandige Studententraining",
            shortTitle: "Concept & Oefenproject Aanmaken",
            title: "Hoe de QR-Oefenmodus Werkt & Een Oefenproject Aanmaken",
            subtitle: "Bied uw studenten onbeperkte oefenkansen op papier met onmiddellijke AI-feedback op hun smartphone — zonder één kopie op te halen of uw docenten-API-sleutel prijs te geven.",
            paragraphs: [
                "<strong>Het Didactische Doel van de QR-Oefenmodus (badge <code>Oefening</code>):</strong> Vóór een deeltentamen of eindexamen moeten studenten veelvuldig oefenen in het met de hand uitwerken van vraagstukken op papier (werkcolleges, oefeningenreeksen, huiswerk, oude examenvragen). Docenten kunnen echter zelden wekelijks honderden losse oefenbladen ophalen en individueel nakijken. <strong>De QR-Oefenmodus vormt elk pdf-oefenblad om tot een interactieve zelfevaluatietutor:</strong><br>1. <strong>De Docent</strong> bereidt het pdf-oefenblad voor, stelt de beoordelingscriteria op (en optioneel de <code>Modeloplossing</code>), plaatst QR-codes op de pdf en publiceert een versleuteld statisch webportaal.<br>2. <strong>De Student</strong> drukt het pdf-oefenblad af (of bekijkt het op tablet/scherm), schrijft zijn of haar wiskundige afleiding of betoog op papier, <strong>scant de QR-code van de vraag met de smartphone</strong>, fotografeert het handgeschreven werk en ontvangt <strong>onmiddellijke, criteriumgewijze formatieve AI-feedback</strong>!",
                "<strong>Geen Docenten-API-sleutel Blootgesteld — Ingebouwde Gradaly AI-Relay of Optionele Studentensleutel:</strong> In tegenstelling tot de Examenmodus waarin de docent ingeleverde kopieën beoordeelt, bevat de Oefenmodus <strong>geen studentenlijsten, geen gescande kopieën en geen API-sleutels van de docent in het gepubliceerde portaal</strong>. Bij publicatie op <code>portal.gradaly.io</code> kunnen studenten hun handgeschreven uitwerkingen <strong>meteen evalueren zonder een API-sleutel in te stellen</strong> dankzij de ingebouwde Gradaly AI-relay (geschikt voor alle studenten, ook minderjarigen onder 18 jaar), of desgewenst hun eigen persoonlijke Google AI Studio (Gemini) API-sleutel invoeren in hun mobiele browser.",
                "<strong>Gestroomlijnde Interface met 3 Tabbladen:</strong> Klik op het Welkomstscherm op <strong>Nieuw project → Oefenproject (Zelfevaluatie student via QR)</strong> (of klik op <strong>Demoproject maken → Demo Oefening</strong> om een volledig goniometrie-oefenblad in het Frans of Engels te verkennen). Een Oefenproject opent een overzichtelijke <strong>werkruimte met 3 tabbladen</strong>: <code>1. Canvas &amp; Vragen</code>, <code>2. QR-codeplaatsing</code> en <code>3. Webpublicatie</code>."
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "Welkomstscherm: Oefenprojecten zijn herkenbaar aan de groenblauwe badge 'Practice' naast uw Examenprojecten"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "Venster Demoproject: Kies 'Oefenproject (QR-Zelfevaluatie)' om een direct testbaar QR-oefenblad te openen"
                }
            ],
            callouts: [
                {
                    title: "Werkwijze met Papier + Smartphone",
                    desc: "Studenten blijven echte handgeschreven wiskunde, bewijzen en schema's op papier uitschrijven, terwijl ze directe AI-begeleiding krijgen via hun smartphonecamera."
                },
                {
                    title: "Geen Kopieën te Verzamelen, Geen Studentenlijst",
                    desc: "Een Oefenproject bevat geen studentenlijst of kopieëntabblad — het is 100% gericht op zelfstandige formatieve training."
                },
                {
                    title: "Geen Sleutel Vereist op portal.gradaly.io",
                    desc: "Studenten krijgen direct AI-feedback op portal.gradaly.io zonder configuratie (of kunnen optioneel hun eigen persoonlijke Gemini-sleutel gebruiken)."
                },
                {
                    title: "Direct Beschikbare Oefendemo",
                    desc: "Open de ingebouwde Oefendemo vanaf het Welkomstscherm om een volledig QR-oefenblad met 10 vragen en modeloplossing te bekijken."
                }
            ]
        },
        {
            id: "practice-canvas-and-rubric",
            guide: "practice",
            stepNumber: "P2",
            partColor: "teal",
            tag: "QR-Oefenmodus • Stap 2 — Oefenblad, Modeloplossing & Criteria",
            badge: "100% Zelfstandige Handleiding",
            shortTitle: "Oefenblad-PDF, Modeloplossing & Criteria",
            title: "Uw Oefeningen-PDF en Modeloplossing Importeren & Formatieve Criteria Ontwerpen",
            subtitle: "Baken elke oefening op uw blanco pdf af, laad uw modeloplossing en stel heldere zelfevaluatiecriteria op — handmatig of met de AI-Assistent.",
            paragraphs: [
                "In het tabblad <strong>1. Canvas &amp; Vragen</strong> van uw Oefenproject (let op de gestroomlijnde balk met 3 tabbladen bovenaan en het ontbreken van een identificatiezone voor studenten) definieert u de oefeningen en beoordelingscriteria waarmee de AI de smartphonefoto van een student evalueert:",
                "<strong>1. Importeer de Blanco Oefeningen-PDF (<code>Canvas</code>) &amp; Baken Elke Vraag Af:</strong> Importeer uw pdf-oefenblad en teken een rechthoek rond elke oefening (<code>Q1</code>, <code>Q2</code>, ...). <strong>Belangrijk:</strong> neem de gedrukte vraagstelling mee binnen de rechthoek! In de Oefenmodus snijdt Gradaly precies deze rechthoek uit om <strong>de opgave bovenaan op het smartphonescherm van de student te tonen</strong> en de AI volledige visuele context te geven.",
                "<strong>2. Importeer de Optionele Modeloplossing-PDF (<code>Solutionnaire</code>):</strong> Gebruik de schakelaar <strong>Opgave (Canvas) / Modeloplossing</strong> bovenaan de pdf-viewer om een pdf met uw uitgewerkte modeloplossingen te laden. Heeft de pdf van uw modeloplossing dezelfde pagina-indeling als het blanco oefenblad, dan gelden de vraagzones automatisch; wijkt de lay-out af, schakel dan naar de weergave <em>Modeloplossing</em> en teken per vraag het overeenkomstige oplossingskader. In de Oefenmodus vervult de modeloplossing drie functies:<br>• <strong>De AI-Rubriekassistent ondersteunen</strong> bij het genereren van nauwkeurige criteria.<br>• <strong>De wiskundige of inhoudelijke referentieoplossing aanreiken aan de AI</strong> tijdens de evaluatie van de foto van de student.<br>• <strong>De visuele modeloplossing ontgrendelen op de smartphone van de student</strong> nadat deze minstens één handgeschreven poging heeft ingediend!",
                "<strong>3. Stel de Scoreregels &amp; Criteria In (Zuiver Additief of Zuiver Aftrekkend):</strong><br>• Gradaly berekent <code>Score = Basisscore + Σ (behaalde criteria)</code>, begrensd tussen <code>0</code> en <code>Maximumscore</code>.<br>• Kies ofwel een <strong>zuiver additieve rubriek</strong> (<code>Basisscore = 0</code>, positieve criteria <code>+1</code>, <code>+2</code> per geldige tussenstap) ofwel een <strong>zuiver aftrekkende rubriek</strong> (<code>Basisscore = Maximumscore</code>, negatieve aftrekposten <code>-0.5</code>, <code>-1</code>). Vermijd het mengen van positieve en negatieve punten binnen dezelfde vraag. U kunt bovendien opeenvolgende alternatieven koppelen tot wederzijds uitsluitende <strong><code>OR</code>-groepen</strong> en met de uniforme knop <strong>Render / Edit</strong> schakelen tussen KaTeX-weergave en tekstbewerking.<br>• Gebruik het onderste veld (<strong>Algemene AI-instructies / Prompt</strong>) voor didactische richtlijnen of om zo nodig de vraagtekst te plakken.",
                "<strong>4. Gebruik de AI-Rubriekassistent (<code>Ontwerpen / Bewerken met AI</code>):</strong> Klik boven de criterialijst op <strong>Ontwerpen / Bewerken met AI</strong> om automatisch een formatieve beoordelingsrubriek te laten opstellen op basis van de opgave en de modeloplossing, en stuur deze bij via de chat."
            ],
            screenshots: [
                {
                    filePrefix: "13a_practice_questions",
                    caption: "Oefenmodus — Tabblad 1. Canvas & Vragen: Gestroomlijnde kopbalk met 3 tabbladen (Canvas & Vragen | QR-codeplaatsing | Webpublicatie), vraagzones, formatieve criteria en schakelaar Opgave / Modeloplossing"
                },
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "AI-Rubriekassistent: Ontwerp formatieve criteria en instructies op basis van zowel de opgave als uw modeloplossing"
                }
            ],
            callouts: [
                {
                    title: "Uitsnede van Opgave Zichtbaar op Smartphone",
                    desc: "De zone die u op het Canvas-pdf tekent, wordt automatisch uitgesneden en bovenaan op het telefoonscherm van de student weergegeven."
                },
                {
                    title: "Modeloplossing (Solutionnaire)",
                    desc: "Begeleidt de AI bij de beoordeling en kan automatisch aan de student worden getoond na een eerste eigen uitwerking op papier."
                },
                {
                    title: "Zuiver Additieve of Aftrekkende Criteria",
                    desc: "Heldere stapsgewijze criteria laten studenten precies zien welk deel van hun redenering klopt en waar bijsturing nodig is."
                },
                {
                    title: "Inclusief AI-Rubriekassistent",
                    desc: "Genereer in enkele seconden een volledige formatieve rubriek vanuit uw oefeningen-pdf en modeloplossing."
                }
            ]
        },
        {
            id: "practice-qr-placement",
            guide: "practice",
            stepNumber: "P3",
            partColor: "teal",
            tag: "QR-Oefenmodus • Stap 3 — QR-codeplaatsing & Afdrukbare PDF",
            badge: "Inbegrepen in Gratis & Pro",
            shortTitle: "QR-plaatsing & Afdrukbare PDF",
            title: "QR-codes Positioneren op Uw PDF & Het Afdrukbare Oefenblad Downloaden",
            subtitle: "Plaats een Algemene QR-code (volledige reeks) en/of QR-codes per vraag rechtstreeks in elk oefenkader op uw pdf.",
            paragraphs: [
                "Open het tabblad <strong>2. QR-codeplaatsing</strong> om te bepalen waar de zelfevaluatie-QR-codes op uw oefenblad verschijnen:",
                "<strong>1. Algemene QR-code vs. QR-codes per Vraag:</strong><br>• <strong>Algemene QR-code (Volledig Oefenblad):</strong> Wordt standaard bovenaan op pagina 1 geplaatst. Wie deze scant, opent het mobiele portaal op het volledige overzicht van alle oefeningen.<br>• <strong>QR-codes per Vraag (<code>QR Q1</code>, <code>QR Q2</code>, ...):</strong> Worden rechtstreeks binnen het kader van elke vraag op de pdf geplaatst. Wanneer een student <code>QR Q1</code> scant met de camera van de telefoon, opent de smartphone <strong>meteen Vraag 1</strong> (<code>?q=Q1</code>), klaar om een foto van de uitwerking te maken!",
                "<strong>2. Interactief Slepen &amp; Hoekuitlijning in 1 Klik:</strong> Klik links op een vraag om naar de bijbehorende pagina te springen. Versleep elke QR-badge vrij met de muis op de pdf-pagina zodat deze nooit formules of figuren bedekt, of klik op <code>Rechtsboven</code>, <code>Linksboven</code> of <code>Rechtsonder</code>. Schakel individuele QR-codes in of uit met het oogicoon.",
                "<strong>3. Download de Afdrukbare PDF met Ingesloten QR-codes:</strong> Klik op <strong>Afdrukbare PDF met QR-codes downloaden</strong>. Gradaly genereert een haarscherp vectorieel pdf-bestand met alle actieve QR-codes op hun exacte positie, klaar om af te drukken voor het werkcollege of te uploaden naar Moodle/Canvas."
            ],
            screenshots: [
                {
                    filePrefix: "13_practice_qr",
                    caption: "Oefenmodus — Tabblad 2. QR-codeplaatsing: Lijst met algemene & vraagspecifieke QR-codes links, knoppen voor hoekuitlijning en interactieve plaatsing op pagina 2 (QR Q1 & QR Q2)"
                }
            ],
            callouts: [
                {
                    title: "Directe Koppeling per Vraag (?q=Q1)",
                    desc: "Het scannen van een vraagspecifieke QR-code opent onmiddellijk die exacte oefening op de smartphone zonder extra navigatie."
                },
                {
                    title: "Blijvend Geldige QR-codes bij Rubriekwijzigingen",
                    desc: "Zelfs wanneer u uw beoordelingscriteria achteraf verfijnt en de online publicatie bijwerkt, blijven reeds afgedrukte QR-codes 100% geldig!"
                }
            ]
        },
        {
            id: "practice-publish-and-student",
            guide: "practice",
            stepNumber: "P4",
            partColor: "teal",
            tag: "QR-Oefenmodus • Stap 4 — Websitepublicatie (Gradaly Pro) & Studenten-app",
            badge: "Publicatie Vereist Gradaly Pro",
            shortTitle: "Websitepublicatie (Pro) & Studenten-app",
            title: "De Oefenwebsite voor Studenten Publiceren (Gradaly Pro) & De Studentenervaring",
            subtitle: "Terwijl u met de gratis versie uw project aanmaakt en uw pdf met QR-codes ontwerpt, ontgrendelt Gradaly Pro de publicatie van de oefenwebsite voor studenten (online of .zip).",
            paragraphs: [
                "In het tabblad <strong>3. Webpublicatie</strong> stelt u het didactische gedrag van de mobiele applicatie in en publiceert u de Oefenwebsite voor studenten:",
                "<strong>1. Didactische Zichtbaarheidsopties:</strong><br>• <strong>Beoordelingscriteria tonen vóór de 1e poging:</strong> Laat studenten vooraf zien welke stappen worden verwacht, of houd de criteria verborgen totdat zij een eerste foto van hun uitwerking indienen.<br>• <strong>Gedetailleerde AI-motivering tonen:</strong> Toon naast de formatieve feedback ook de gedetailleerde toelichting per criterium.<br>• <strong>Modeloplossing (<code>Solutionnaire</code>) vrijgeven na minstens één poging:</strong> Houd uw uitgewerkte modeloplossing vergrendeld totdat de student eerst een eigen handgeschreven poging heeft ingediend!",
                "<strong>2. Vooraf Testen in de Ingebouwde Smartphonesimulator:</strong> Klik rechtsboven op <strong>Studenten-webapp testen (Simulator)</strong> om de mobiele interface rechtstreeks binnen Gradaly uit te proberen.",
                "<strong>3. Publiceer de Oefenwebsite Online of Exporteer als Statische <code>.zip</code> (Gradaly Pro):</strong> Terwijl de gratis versie u in staat stelt uw Oefenproject op te bouwen en de pdf met QR-codes te ontwerpen, geeft <strong>Gradaly Pro</strong> toegang tot het publiceren van de Oefenwebsite voor studenten: klik op <strong>Publiceer in 1 klik op portal.gradaly.io</strong> (client-side versleuteld met <strong>AES-256-GCM</strong>, met een instelbare bewaartermijn van <strong>60 dagen</strong>, <strong>180 dagen / 1 semester</strong> of <strong>365 dagen / 1 academiejaar</strong>) of klik op <strong>Exporteren als zelfstandige statische website (.zip)</strong> om op uw eigen universitaire server te hosten.",
                "<strong>4. Stapsgewijze Ervaring van de Student op Smartphone:</strong><br>• De student scant de QR-code op het papieren oefenblad.<br>• Bij hosting op <code>portal.gradaly.io</code> werkt de AI-evaluatie <strong>onmiddellijk zonder enige API-sleutel in te voeren</strong> (via de ingebouwde Gradaly AI-relay). Optioneel — of bij hosting van een zelfstandig <code>.zip</code>-pakket op een eigen server — kan de student op de knop <strong>Persoonlijke sleutel</strong> tikken om een eigen <strong>Google AI Studio (Gemini) API-sleutel</strong> in te voeren (lokaal bewaard in de telefoonbrowser).<br>• De student tikt op <strong>Maak een foto van mijn werk</strong>, fotografeert de handgeschreven oplossing op papier en tikt op <strong>Evalueer mijn antwoord met AI</strong> om de score, behaalde criteria, wiskundige LaTeX-feedback en de ontgrendelde modeloplossing te ontvangen!",
                "<strong>5. Interactief Live Voorbeeld (Afdrukbaar PDF-oefenblad &amp; Studentenportaal):</strong><br>• 🇬🇧 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_EN.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Bekijk Afdrukbaar PDF-oefenblad met QR-codes (Demo EN)</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_7c576e0a7ff4729b&id=practice#k=fOTpaHBSuaFzzdN7AJYjSF_BKMgKaYcGQj6lyYljH10\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Open Live Oefenportaal voor Studenten (Demo EN)</a>"
            ],
            screenshots: [
                {
                    filePrefix: "14_practice_publish",
                    caption: "Oefenmodus — Tabblad 3. Webpublicatie: Didactische opties, ontgrendeling van modeloplossing na 1e poging, geldigheidsduur (60/180/365 dagen) en Gradaly Pro Cloud-/ZIP-publicatie in 1 klik"
                },
                {
                    filePrefix: "15_practice_student_portal",
                    caption: "Ingebouwde Smartphonesimulator voor Studenten: Bekijk vooraf de mobiele webapp waarin studenten hun papieren uitwerking fotograferen en direct formatieve AI-feedback krijgen"
                }
            ],
            callouts: [
                {
                    title: "Ingebouwde Smartphonesimulator (Gratis)",
                    desc: "Test uw oefenblad, criteria en de mobiele studentenervaring gratis binnen Gradaly vóór publicatie."
                },
                {
                    title: "Cloud in 1 Klik of Statische ZIP (Gradaly Pro)",
                    desc: "Publiceer met client-side AES-256-GCM-versleuteling op portal.gradaly.io (60/180/365 dagen) of exporteer een zelfstandig .zip-bestand."
                },
                {
                    title: "Ingebouwde AI-Relay of Persoonlijke Sleutel",
                    desc: "Op portal.gradaly.io kunnen studenten meteen aan zelfevaluatie doen zonder API-sleutel, of optioneel hun eigen gratis Gemini-sleutel invoeren."
                },
                {
                    title: "Modeloplossing Vrijgegeven Na Inspanning",
                    desc: "Studenten moeten eerst een eigen uitwerking op papier fotograferen en indienen voordat de modeloplossing van de docent zichtbaar wordt."
                }
            ]
        },
        {
            id: "practice-faq",
            guide: "practice",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "teal",
            tag: "Veelgestelde Vragen (FAQ)",
            badge: "Versleuteling, Toegang, AI-Relay & Privacy",
            shortTitle: "Veelgestelde Vragen",
            title: "Veelgestelde Vragen (FAQ)",
            subtitle: "Antwoorden op veelgestelde vragen over waarom de oefenwebsite versleuteld is, wie er toegang toe heeft, hoe foto's en API-sleutels van studenten worden verwerkt, en of het gebruik door de docent wordt gevolgd.",
            paragraphs: [
                "Hieronder vindt u antwoorden op de meest voorkomende vragen over de QR-Oefen- &amp; Zelfevaluatiemodus van Gradaly."
            ],
            faqs: [
                {
                    q: "Waarom is de oefenwebsite versleuteld?",
                    a: "<p><strong>Om het intellectuele eigendom van de docent te beschermen:</strong> Noch Gradaly, noch enige derde partij heeft toegang tot de gepubliceerde inhoud — dat wil zeggen het oefenblad van de docent (de opgaven), de uitgewerkte modeloplossing (<code>Solutionnaire</code>) of de beoordelingscriteria en instructies van de docent. Al dit materiaal vormt het <strong>intellectuele eigendom van de docent</strong>.</p><p>Voordat er ook maar één byte naar <code>portal.gradaly.io</code> wordt verzonden, versleutelt Gradaly het volledige oefenpakket lokaal op de computer van de docent met <strong><code>AES-256-GCM</code></strong>. De ontsleutelingssleutel (<code>#k=...</code>) wordt uitsluitend opgenomen in het URL-fragment (en in de QR-codes) achter het <code>#</code>-teken, dat door webbrowsers nooit naar de server wordt doorgestuurd. De server bewaart enkel onleesbare, versleutelde binaire bestanden.</p>"
                },
                {
                    q: "Wie heeft toegang tot de Oefenapplicatie?",
                    a: "<p><strong>Uitsluitend personen die beschikken over de link of de QR-codes waarmee de docent deze heeft gedeeld</strong> hebben toegang tot de applicatie en kunnen de oefeningen in hun browser ontsleutelen.</p><p>De docent kan het afdrukbare pdf-oefenblad (of de link) dus <strong>in alle vertrouwelijkheid delen met zijn of haar studenten</strong> (bijvoorbeeld via een afgeschermde cursuspagina zoals Moodle/Canvas/Toledo of op papier tijdens het werkcollege), zonder dat de opgaven of modeloplossingen ooit openbaar op het internet verschijnen. Uiteraard geldt dat, omdat toegang berust op het bezit van de link of QR-code, de applicatie ook toegankelijk wordt voor derden indien die link of QR-code extern wordt doorgestuurd.</p>"
                },
                {
                    q: "Heeft de student een API-sleutel nodig, en wat gebeurt er met de foto van het handgeschreven werk van de student?",
                    a: "<p>Afhankelijk van hoe de student het oefenportaal gebruikt, zijn er twee werkingsmodi — die beide <strong>100% anonimiteit en nul beeldopslag</strong> garanderen:</p><p><strong>1. Standaardmodus op <code>portal.gradaly.io</code> (Geen API-sleutel van de student vereist):</strong><ul><li>Wanneer het Oefenproject op <code>portal.gradaly.io</code> is gepubliceerd en de student geen persoonlijke API-sleutel invoert, verloopt de evaluatie via de <strong>beveiligde Gradaly AI-relay</strong> (waardoor de tool direct toegankelijk is voor alle studenten, ook minderjarigen onder 18 jaar, zonder enig account aan te maken).</li><li>In deze modus wordt de foto van het handgeschreven antwoord (samen met de evaluatieprompt van de vraag) <strong>kortstondig doorgegeven via de relayserver van Gradaly</strong> uitsluitend om door Gemini Flash te worden beoordeeld.</li><li><strong>Strikte garantie van niet-opslag:</strong> De afbeelding wordt <strong>nooit op schijf of in de cloud opgeslagen</strong>, blijft <strong>100% anoniem</strong> en wordt <strong>onmiddellijk uit het werkgeheugen van de server gewist</strong> zodra de AI-feedback naar de smartphone van de student is teruggestuurd.</li></ul></p><p><strong>2. Modus met Persoonlijke API-sleutel (Optioneel op <code>portal.gradaly.io</code>, of op een zelfstandige <code>.zip</code>-website):</strong><ul><li>Voert de student via de knop <em>Persoonlijke sleutel</em> een eigen Google Gemini API-sleutel in, dan wordt die sleutel <strong>uitsluitend lokaal bewaard in de <code>localStorage</code> van de browser op het eigen toestel van de student</strong> (nooit verzonden naar een Gradaly-server en nooit zichtbaar voor de docent).</li><li>Met een persoonlijke API-sleutel communiceert de browser van de student <strong>rechtstreeks via versleutelde HTTPS met het officiële Gemini API-eindpunt van Google</strong>, zonder langs een server van Gradaly te passeren.</li></ul></p>"
                },
                {
                    q: "Weet de docent of een student de applicatie gebruikt?",
                    a: "<p><strong>Nee — de QR-Oefenmodus is 100% anoniem en autonoom.</strong> Er is geen login voor studenten, geen studentenlijst en geen enkele registratie of rapportage richting de docent.</p><p>De docent ziet niet welke student een QR-code heeft gescand, hoeveel pogingen iemand heeft ondernomen of welke score werd behaald. Deze bewuste keuze creëert een <strong>veilige, oordeelvrije formatieve leeromgeving</strong> waarin studenten vrijuit op papier kunnen oefenen, fouten mogen maken en hun inzicht zo vaak kunnen toetsen als zij willen vóór het examen.</p>"
                },
                {
                    q: "Wat biedt de Gratis (niet-Pro) versie ten opzichte van Gradaly Pro in de QR-Oefenmodus?",
                    a: "<p><strong>Gratis versie (niet-Pro):</strong> Hiermee kunt u een Oefenproject aanmaken, uw oefeningen-pdf en modeloplossing importeren, uw formatieve beoordelingscriteria opstellen en kalibreren (handmatig of met de AI-Rubriekassistent), de QR-codes positioneren, de <strong>afdrukbare pdf met ingesloten QR-codes</strong> downloaden en de volledige ervaring testen in de ingebouwde <strong>Smartphonesimulator</strong>.</p><p><strong>Gradaly Pro:</strong> Ontgrendelt de <strong>publicatie van de Oefenwebsite voor studenten</strong> — hetzij met 1 klik naar de versleutelde cloud op <code>portal.gradaly.io</code> (voor 60, 180 of 365 dagen), hetzij als een zelfstandige statische <code>.zip</code>-website om op uw eigen universitaire server te plaatsen.</p>"
                },
                {
                    q: "Wat gebeurt er als ik mijn beoordelingscriteria aanpas nadat ik het pdf-oefenblad al heb afgedrukt of uitgedeeld?",
                    a: "<p><strong>Uw reeds afgedrukte QR-codes blijven 100% geldig!</strong> Elk Oefenproject behoudt een vaste publicatie-identificatie en versleutelingssleutel. Merkt u na het uitdelen van het papieren oefenblad nog een typfout op of wilt u een criterium verfijnen in Gradaly, klik dan eenvoudigweg op <strong>Publicatie bijwerken op portal.gradaly.io</strong> in het tabblad <em>3. Webpublicatie</em>: studenten die exact dezelfde papieren QR-codes scannen, profiteren meteen van de bijgewerkte beoordelingsrubriek.</p>"
                }
            ]
        }
    ]
};
