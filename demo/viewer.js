/**
 * Gradaly Student Web Viewer
 * Client-side in-memory decryption using Web Crypto API (AES-256-GCM)
 * Detailed Interactive Question-by-Question & Summary Consultation
 * 100% Offline & Online compatible (file:// and http(s)://)
 */

(function () {
  'use strict';

  // Base64URL decoding helper (RFC 4648 §5)
  function base64UrlToBytes(base64url) {
    let base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4 !== 0) {
      base64 += '=';
    }
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  // Base64 to Uint8Array helper
  function base64ToUint8Array(base64) {
    const cleanB64 = base64.replace(/\s+/g, '');
    const binary = atob(cleanB64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function getKeyFromHash() {
    const raw = (window.location.hash || '').replace(/^#/, '').trim();
    if (!raw) return null;
    const match = raw.match(/(?:k|key)=([A-Za-z0-9_-]+)/);
    if (match) return match[1];
    if (/^[A-Za-z0-9_-]{20,}$/.test(raw)) return raw;
    return null;
  }

  function showView(viewId) {
    const views = ['view-loading', 'view-unlock', 'view-dashboard'];
    views.forEach(function (id) {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = id === viewId ? '' : 'none';
      }
    });
  }

  function showError(msg) {
    const errEl = document.getElementById('unlock-error');
    if (errEl) {
      errEl.textContent = msg;
      errEl.style.display = 'block';
    }
  }

  function hideError() {
    const errEl = document.getElementById('unlock-error');
    if (errEl) {
      errEl.style.display = 'none';
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatMarkdown(str) {
    if (!str) return '';
    let out = escapeHtml(str);
    // Bold
    out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    out = out.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Inline code
    out = out.replace(
      /`([^`]+)`/g,
      '<code style="background:rgba(0,0,0,0.06);padding:2px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;">$1</code>'
    );
    return out;
  }

  // Active state variables
  let currentDocId = null;
  let currentData = null;
  let currentPdfBlobUrl = null;
  let activeQuestionIndex = 0;
  let currentMode = 'detailed'; // 'detailed' | 'summary'
  let mobilePane = 'copy'; // 'copy' | 'grading'
  let currentZoom = 1.0;
  let isShowingFullPdf = false; // toggle between interactive page image vs full PDF iframe
  let currentActiveCopyPage = null; // null defaults to question primary page
  let renderedStageDocId = null;
  let activePortalLang = 'fr';
  let userOverrodeLang = false;

  const PORTAL_I18N = {
    fr: {
      langNameEn: 'French (Français)',
      examConsultation: 'Consultation de copie',
      encryptedSub: 'Document chiffré de bout en bout',
      openPdf: 'Ouvrir le PDF',
      downloadPdf: 'Télécharger le PDF',
      encryptedBadge: 'Chiffré',
      decryptingTitle: 'Déchiffrement sécurisé en cours...',
      decryptingDesc: 'Le document est en cours de téléchargement et déchiffré localement dans la mémoire de votre appareil.',
      protectedTitle: 'Accès protégé à votre copie',
      protectedDesc: 'Le lien utilisé ne contient pas la clé secrète de déchiffrement. Veuillez saisir ou coller la clé qui vous a été communiquée par votre enseignant :',
      keyPlaceholder: 'Ex: u7X9_aBC12... (Clé secrète)',
      unlockBtn: 'Déverrouiller',
      wrongKeyErr: 'Clé de déchiffrement incorrecte pour cette copie. Veuillez vérifier la clé saisie.',
      missingIdErr: "Aucun identifiant de copie spécifié dans l'URL (paramètre ?id= manquant). Veuillez cliquer sur le lien complet fourni par votre enseignant.",
      studentLabel: 'Étudiant(e)',
      anonCopy: 'Copie anonyme',
      gradedBadge: 'Évalué',
      inProgressBadge: 'En cours',
      globalScoreLabel: 'Note globale',
      detailedViewBtn: 'Vue Détaillée (Question par question)',
      summaryViewBtn: 'Vue Synthèse (Bilan global)',
      prevBtn: 'Précédente',
      nextBtn: 'Suivante',
      mobileCopyTab: '📄 Votre copie',
      mobileGradingTab: '📝 Notation & Critères',
      targetedZone: 'Zone ciblée',
      viewFullPdf: '📄 Voir PDF complet',
      viewByQuestion: '🖼️ Vue par question',
      aiOriginBadge: 'Pré-correction IA',
      humanOriginBadge: "Validé par l'Enseignant",
      rubricCriteriaTitle: "Barème & Critères d'évaluation",
      feedbackBoxTitle: 'Commentaire de correction',
      justifBoxTitle: 'Justification & Démarche',
      noQuestionsMsg: 'Aucune question enregistrée pour cette copie.',
      clickToOpen: 'Cliquer pour ouvrir',
      footerSecurityHtml: "🔒 <strong>Chiffrement de bout en bout</strong> : Le document a été déchiffré exclusivement dans la mémoire de votre navigateur via l'API Web Crypto native (AES-256-GCM). Le serveur d'hébergement ne stocke que des fragments inintelligibles et ne possède aucune clé d'accès.",
      footerBrandHtml: 'Généré avec <a href="https://gradaly.io" target="_blank" rel="noopener noreferrer" class="footer-brand-link">Gradaly</a>',
      practiceTitle: "Séance d'Entraînement",
      selfAssessSub: 'Mode Auto-évaluation',
      noPracticeQ: 'Aucune question configurée dans cet entraînement.',
      qStatement: 'Énoncé de la question',
      hide: 'Masquer',
      show: 'Afficher',
      capturedAnswer: 'Zone de réponse capturée',
      adjustCrop: 'Ajuster le cadrage',
      deleteBtn: 'Supprimer',
      aiSelfScore: "Note d'auto-évaluation IA",
      formativeFb: 'Feedback formateur personnalisé',
      detailedJustif: "Justification détaillée de l'évaluation",
      rubricRevealedAfter: 'Le barème détaillé sera révélé après votre première tentative.',
      refSolution: 'Corrigé type de référence',
      optPersonalKey: 'Optionnel • Clé API Gemini personnelle',
      initSetupKey: 'Configuration initiale • Clé Google Gemini gratuite',
      connectKeyTitle: 'Connectez votre clé API Google Gemini personnelle',
      useGradalyServer: 'Utiliser le serveur Gradaly',
      closeBtn: 'Fermer',
      step1Html: 'Ouvrez <strong>Google AI Studio</strong> avec votre compte Google (100 % gratuit, sans carte bancaire).',
      step2Html: 'Cliquez sur <strong>« Create API key »</strong> et copiez la clé générée (commence par <code>AIzaSy...</code>).',
      step3Html: 'Collez votre clé ci-dessous et cliquez sur <strong>« Enregistrer la clé »</strong>.',
      getKeyLink: 'Obtenir ma clé gratuite sur Google AI Studio',
      pasteKeyPh: 'Collez votre clé Gemini (AIzaSy...)',
      saveKeyBtn: 'Enregistrer la clé',
      keyStoredLocal: 'Enregistrée uniquement dans le navigateur de votre appareil. Jamais partagée.',
      personalKeyReady: 'Clé API Gemini personnelle active (gemini-3.8-flash)',
      editKeyBtn: 'Modifier la clé',
      evalsLeft: ' éval. restantes',
      relayReady: 'Correction IA Gradaly prête (aucune clé requise)',
      optKeyTitle: 'Optionnel : utiliser votre propre clé API Google Gemini',
      customKeyBtn: 'Clé perso',
      frameTitle: 'Cadrer votre zone de réponse',
      frameSub: 'Déplacez les coins bleus pour entourer uniquement votre réponse.',
      fullBtn: 'Tout',
      cancelBtn: 'Annuler',
      confirmBtn: 'Valider',
      takePhotoTitle: 'Photographier votre réponse',
      chooseFileInstead: 'Choisir un fichier',
      captureBtn: 'Capturer',
      yourAnswerTitle: 'Votre réponse manuscrite',
      yourAnswerSub: 'Rédigez votre réponse sur papier, prenez-la en photo (ou importez une image) et cadrez la zone de réponse.',
      takePhotoBtn: 'Prendre une photo',
      importImgBtn: 'Importer une image',
      analyzingAi: 'Analyse de votre réponse par Gemini en cours...',
      gradeAiBtn: "Corriger ma réponse avec l'IA",
    },
    en: {
      langNameEn: 'English',
      examConsultation: 'Exam Copy Consultation',
      encryptedSub: 'End-to-end encrypted document',
      openPdf: 'Open PDF',
      downloadPdf: 'Download PDF',
      encryptedBadge: 'Encrypted',
      decryptingTitle: 'Secure decryption in progress...',
      decryptingDesc: 'The document is being downloaded and decrypted locally in your device memory.',
      protectedTitle: 'Protected Access to Your Copy',
      protectedDesc: 'This link does not include the secret decryption key. Please enter or paste the key provided by your instructor:',
      keyPlaceholder: 'E.g. u7X9_aBC12... (Secret key)',
      unlockBtn: 'Unlock',
      wrongKeyErr: 'Incorrect decryption key for this copy. Please check the key entered.',
      missingIdErr: 'No copy identifier specified in the URL (missing ?id= parameter). Please open the full link shared by your instructor.',
      studentLabel: 'Student',
      anonCopy: 'Anonymous Copy',
      gradedBadge: 'Graded',
      inProgressBadge: 'In progress',
      globalScoreLabel: 'Overall Grade',
      detailedViewBtn: 'Detailed View (Question by question)',
      summaryViewBtn: 'Summary View (Full overview)',
      prevBtn: 'Previous',
      nextBtn: 'Next',
      mobileCopyTab: '📄 Your Copy',
      mobileGradingTab: '📝 Rubric & Grading',
      targetedZone: 'Target Zone',
      viewFullPdf: '📄 View Full PDF',
      viewByQuestion: '🖼️ Question View',
      aiOriginBadge: 'AI Pre-Graded',
      humanOriginBadge: 'Instructor Validated',
      rubricCriteriaTitle: 'Grading Rubric & Criteria',
      feedbackBoxTitle: 'Grading Feedback',
      justifBoxTitle: 'Detailed Explanation',
      noQuestionsMsg: 'No questions recorded for this copy.',
      clickToOpen: 'Click to open',
      footerSecurityHtml: "🔒 <strong>End-to-End Encryption</strong>: The document was decrypted exclusively in your browser's memory using the native Web Crypto API (AES-256-GCM). The hosting server stores only encrypted fragments and has no access key.",
      footerBrandHtml: 'Generated with <a href="https://gradaly.io" target="_blank" rel="noopener noreferrer" class="footer-brand-link">Gradaly</a>',
      practiceTitle: 'Practice Session',
      selfAssessSub: 'Self-Assessment Mode',
      noPracticeQ: 'No questions configured in this practice session.',
      qStatement: 'Question Statement',
      hide: 'Hide',
      show: 'Show',
      capturedAnswer: 'Captured Answer',
      adjustCrop: 'Adjust Crop',
      deleteBtn: 'Delete',
      aiSelfScore: 'AI Self-Assessment Score',
      formativeFb: 'Personalized Formative Feedback',
      detailedJustif: 'Detailed Grading Explanation',
      rubricRevealedAfter: 'The detailed grading rubric will be revealed after your first attempt.',
      refSolution: 'Official Reference Solution',
      optPersonalKey: 'Optional • Personal Gemini API Key',
      initSetupKey: 'Initial Setup • Free Google Gemini Key',
      connectKeyTitle: 'Connect Your Personal Google Gemini API Key',
      useGradalyServer: 'Use Gradaly Server',
      closeBtn: 'Close',
      step1Html: 'Open <strong>Google AI Studio</strong> with your Google account (100% free, no credit card needed).',
      step2Html: 'Click <strong>"Create API key"</strong> and copy the generated key (starts with <code>AIzaSy...</code>).',
      step3Html: 'Paste your key below and click <strong>"Save Key"</strong>.',
      getKeyLink: 'Get a Free Gemini Key on Google AI Studio',
      pasteKeyPh: 'Paste your Gemini key (AIzaSy...)',
      saveKeyBtn: 'Save Key',
      keyStoredLocal: 'Stored strictly in your browser on this device. Never shared with any server.',
      personalKeyReady: 'Personal Gemini API Key Ready (gemini-3.8-flash)',
      editKeyBtn: 'Edit Key',
      evalsLeft: ' evals left',
      relayReady: 'Gradaly AI Grading Ready (no API key required)',
      optKeyTitle: 'Optional: use your own Google Gemini API key',
      customKeyBtn: 'Custom Key',
      frameTitle: 'Frame Your Answer Area',
      frameSub: 'Drag the blue corners to isolate your handwritten answer.',
      fullBtn: 'Full',
      cancelBtn: 'Cancel',
      confirmBtn: 'Confirm',
      takePhotoTitle: 'Take a Photo of Your Answer',
      chooseFileInstead: 'Choose File Instead',
      captureBtn: 'Capture',
      yourAnswerTitle: 'Your Handwritten Answer',
      yourAnswerSub: 'Write your answer on paper, take a photo (or import an image), and frame your answer area.',
      takePhotoBtn: 'Take a Photo',
      importImgBtn: 'Import Image',
      analyzingAi: 'Analyzing your answer with Gemini...',
      gradeAiBtn: 'Grade My Answer with AI',
    },
    nl: {
      langNameEn: 'Dutch (Nederlands)',
      examConsultation: 'Inzage examenkopie',
      encryptedSub: 'End-to-end versleuteld document',
      openPdf: 'PDF openen',
      downloadPdf: 'PDF downloaden',
      encryptedBadge: 'Versleuteld',
      decryptingTitle: 'Beveiligde ontsleuteling bezig...',
      decryptingDesc: 'Het document wordt gedownload en lokaal in het geheugen van uw apparaat ontsleuteld.',
      protectedTitle: 'Beveiligde toegang tot uw kopie',
      protectedDesc: 'Deze link bevat geen geheime ontsleutelsleutel. Voer de sleutel in die u van uw docent hebt ontvangen:',
      keyPlaceholder: 'Bijv. u7X9_aBC12... (Geheime sleutel)',
      unlockBtn: 'Ontgrendelen',
      wrongKeyErr: 'Onjuiste ontsleutelsleutel voor deze kopie. Controleer de ingevoerde sleutel.',
      missingIdErr: 'Geen kopie-ID opgegeven in de URL (?id= ontbreekt). Gebruik de volledige link van uw docent.',
      studentLabel: 'Student',
      anonCopy: 'Anonieme kopie',
      gradedBadge: 'Beoordeeld',
      inProgressBadge: 'In behandeling',
      globalScoreLabel: 'Eindcijfer',
      detailedViewBtn: 'Detailweergave (Vraag per vraag)',
      summaryViewBtn: 'Overzichtsweergave (Totaaloverzicht)',
      prevBtn: 'Vorige',
      nextBtn: 'Volgende',
      mobileCopyTab: '📄 Uw kopie',
      mobileGradingTab: '📝 Beoordeling & Criteria',
      targetedZone: 'Geselecteerde zone',
      viewFullPdf: '📄 Volledige PDF bekijken',
      viewByQuestion: '🖼️ Per vraag bekijken',
      aiOriginBadge: 'AI-voorbeoordeling',
      humanOriginBadge: 'Gevalideerd door docent',
      rubricCriteriaTitle: 'Beoordelingsrubriek & Criteria',
      feedbackBoxTitle: 'Beoordelingsfeedback',
      justifBoxTitle: 'Toelichting & Uitwerking',
      noQuestionsMsg: 'Geen vragen geregistreerd voor deze kopie.',
      clickToOpen: 'Klik om te openen',
      footerSecurityHtml: '🔒 <strong>End-to-end versleuteling</strong>: Dit document is uitsluitend in het geheugen van uw browser ontsleuteld via de Web Crypto API (AES-256-GCM). De server bewaart enkel versleutelde gegevens zonder toegangssleutel.',
      footerBrandHtml: 'Gegenereerd met <a href="https://gradaly.io" target="_blank" rel="noopener noreferrer" class="footer-brand-link">Gradaly</a>',
      practiceTitle: 'Oefensessie',
      selfAssessSub: 'Zelfevaluatiemodus',
      noPracticeQ: 'Geen vragen geconfigureerd in deze oefensessie.',
      qStatement: 'Vraagstelling',
      hide: 'Verbergen',
      show: 'Tonen',
      capturedAnswer: 'Vastgelegd antwoord',
      adjustCrop: 'Uitsnede aanpassen',
      deleteBtn: 'Verwijderen',
      aiSelfScore: 'AI-zelfevaluatiescore',
      formativeFb: 'Persoonlijke formatieve feedback',
      detailedJustif: 'Gedetailleerde beoordelingstoelichting',
      rubricRevealedAfter: 'De gedetailleerde beoordelingsrubriek wordt zichtbaar na uw eerste poging.',
      refSolution: 'Officiële modeloplossing',
      optPersonalKey: 'Optioneel • Persoonlijke Gemini API-sleutel',
      initSetupKey: 'Eerste instelling • Gratis Google Gemini-sleutel',
      connectKeyTitle: 'Koppel uw persoonlijke Google Gemini API-sleutel',
      useGradalyServer: 'Gradaly-server gebruiken',
      closeBtn: 'Sluiten',
      step1Html: 'Open <strong>Google AI Studio</strong> met uw Google-account (100% gratis, geen betaalkaart nodig).',
      step2Html: 'Klik op <strong>"Create API key"</strong> en kopieer de sleutel (begint met <code>AIzaSy...</code>).',
      step3Html: 'Plak uw sleutel hieronder en klik op <strong>"Sleutel opslaan"</strong>.',
      getKeyLink: 'Gratis Gemini-sleutel ophalen bij Google AI Studio',
      pasteKeyPh: 'Plak uw Gemini-sleutel (AIzaSy...)',
      saveKeyBtn: 'Sleutel opslaan',
      keyStoredLocal: 'Uitsluitend lokaal opgeslagen in uw browser. Nooit gedeeld met een server.',
      personalKeyReady: 'Persoonlijke Gemini API-sleutel actief (gemini-3.8-flash)',
      editKeyBtn: 'Sleutel wijzigen',
      evalsLeft: ' eval. resterend',
      relayReady: 'Gradaly AI-beoordeling klaar (geen sleutel vereist)',
      optKeyTitle: 'Optioneel: gebruik uw eigen Google Gemini API-sleutel',
      customKeyBtn: 'Eigen sleutel',
      frameTitle: 'Kader uw antwoordzone af',
      frameSub: 'Versleep de blauwe hoeken om enkel uw handgeschreven antwoord te selecteren.',
      fullBtn: 'Volledig',
      cancelBtn: 'Annuleren',
      confirmBtn: 'Bevestigen',
      takePhotoTitle: 'Maak een foto van uw antwoord',
      chooseFileInstead: 'Bestand kiezen',
      captureBtn: 'Vastleggen',
      yourAnswerTitle: 'Uw handgeschreven antwoord',
      yourAnswerSub: 'Schrijf uw antwoord op papier, maak een foto (of importeer een afbeelding) en kader het antwoord af.',
      takePhotoBtn: 'Foto maken',
      importImgBtn: 'Afbeelding importeren',
      analyzingAi: 'Uw antwoord wordt geanalyseerd door Gemini...',
      gradeAiBtn: 'Beoordeel mijn antwoord met AI',
    },
    de: {
      langNameEn: 'German (Deutsch)',
      examConsultation: 'Klausureinsicht',
      encryptedSub: 'Ende-zu-Ende-verschlüsseltes Dokument',
      openPdf: 'PDF öffnen',
      downloadPdf: 'PDF herunterladen',
      encryptedBadge: 'Verschlüsselt',
      decryptingTitle: 'Sichere Entschlüsselung läuft...',
      decryptingDesc: 'Das Dokument wird heruntergeladen und lokal im Arbeitsspeicher Ihres Geräts entschlüsselt.',
      protectedTitle: 'Geschützter Zugriff auf Ihre Klausur',
      protectedDesc: 'Dieser Link enthält keinen geheimen Entschlüsselungscode. Bitte geben Sie den von Ihrer Lehrperson mitgeteilten Schlüssel ein:',
      keyPlaceholder: 'Z. B. u7X9_aBC12... (Geheimer Schlüssel)',
      unlockBtn: 'Entsperren',
      wrongKeyErr: 'Ungültiger Entschlüsselungscode für diese Klausur. Bitte überprüfen Sie Ihre Eingabe.',
      missingIdErr: 'Keine Dokument-ID in der URL angegeben (Parameter ?id= fehlt). Bitte öffnen Sie den vollständigen Link Ihrer Lehrperson.',
      studentLabel: 'Studierende/r',
      anonCopy: 'Anonyme Klausur',
      gradedBadge: 'Bewertet',
      inProgressBadge: 'In Bearbeitung',
      globalScoreLabel: 'Gesamtergebnis',
      detailedViewBtn: 'Detailansicht (Aufgabe für Aufgabe)',
      summaryViewBtn: 'Gesamtübersicht (Alle Aufgaben)',
      prevBtn: 'Zurück',
      nextBtn: 'Weiter',
      mobileCopyTab: '📄 Ihre Klausur',
      mobileGradingTab: '📝 Bewertung & Kriterien',
      targetedZone: 'Markierter Bereich',
      viewFullPdf: '📄 Gesamtes PDF anzeigen',
      viewByQuestion: '🖼️ Aufgabenansicht',
      aiOriginBadge: 'KI-Vorbewertung',
      humanOriginBadge: 'Durch Lehrperson geprüft',
      rubricCriteriaTitle: 'Bewertungsraster & Kriterien',
      feedbackBoxTitle: 'Rückmeldung zur Bewertung',
      justifBoxTitle: 'Begründung & Lösungsweg',
      noQuestionsMsg: 'Für diese Klausur sind keine Aufgaben hinterlegt.',
      clickToOpen: 'Zum Öffnen klicken',
      footerSecurityHtml: '🔒 <strong>Ende-zu-Ende-Verschlüsselung</strong>: Dieses Dokument wurde ausschließlich lokal im Browser über die Web Crypto API (AES-256-GCM) entschlüsselt. Der Server speichert nur verschlüsselte Daten ohne Schlüssel.',
      footerBrandHtml: 'Erstellt mit <a href="https://gradaly.io" target="_blank" rel="noopener noreferrer" class="footer-brand-link">Gradaly</a>',
      practiceTitle: 'Übungseinheit',
      selfAssessSub: 'Selbsteinschätzungsmodus',
      noPracticeQ: 'In dieser Übungseinheit sind keine Aufgaben konfiguriert.',
      qStatement: 'Aufgabenstellung',
      hide: 'Ausblenden',
      show: 'Anzeigen',
      capturedAnswer: 'Erfasste Antwort',
      adjustCrop: 'Zuschnitt anpassen',
      deleteBtn: 'Löschen',
      aiSelfScore: 'KI-Selbsteinschätzung',
      formativeFb: 'Persönliches formatives Feedback',
      detailedJustif: 'Detaillierte Bewertungsbegründung',
      rubricRevealedAfter: 'Das detaillierte Bewertungsraster wird nach Ihrem ersten Versuch freigeschaltet.',
      refSolution: 'Offizielle Musterlösung',
      optPersonalKey: 'Optional • Eigener Gemini-API-Schlüssel',
      initSetupKey: 'Ersteinrichtung • Kostenloser Google-Gemini-Schlüssel',
      connectKeyTitle: 'Eigenen Google-Gemini-API-Schlüssel verbinden',
      useGradalyServer: 'Gradaly-Server nutzen',
      closeBtn: 'Schließen',
      step1Html: 'Öffnen Sie <strong>Google AI Studio</strong> mit Ihrem Google-Konto (100 % kostenlos, keine Kreditkarte nötig).',
      step2Html: 'Klicken Sie auf <strong>„Create API key“</strong> und kopieren Sie den Schlüssel (beginnt mit <code>AIzaSy...</code>).',
      step3Html: 'Fügen Sie den Schlüssel unten ein und klicken Sie auf <strong>„Schlüssel speichern“</strong>.',
      getKeyLink: 'Kostenlosen Gemini-Schlüssel in Google AI Studio erstellen',
      pasteKeyPh: 'Gemini-Schlüssel einfügen (AIzaSy...)',
      saveKeyBtn: 'Schlüssel speichern',
      keyStoredLocal: 'Wird ausschließlich lokal im Browser dieses Geräts gespeichert. Niemals geteilt.',
      personalKeyReady: 'Eigener Gemini-API-Schlüssel aktiv (gemini-3.8-flash)',
      editKeyBtn: 'Schlüssel ändern',
      evalsLeft: ' Auswert. übrig',
      relayReady: 'Gradaly-KI-Bewertung bereit (kein Schlüssel erforderlich)',
      optKeyTitle: 'Optional: eigenen Google-Gemini-API-Schlüssel verwenden',
      customKeyBtn: 'Eigener Key',
      frameTitle: 'Antwortbereich zuschneiden',
      frameSub: 'Ziehen Sie die blauen Ecken, um Ihre handschriftliche Antwort einzugrenzen.',
      fullBtn: 'Alles',
      cancelBtn: 'Abbrechen',
      confirmBtn: 'Bestätigen',
      takePhotoTitle: 'Antwort fotografieren',
      chooseFileInstead: 'Datei auswählen',
      captureBtn: 'Aufnehmen',
      yourAnswerTitle: 'Ihre handschriftliche Antwort',
      yourAnswerSub: 'Lösen Sie die Aufgabe auf Papier, machen Sie ein Foto (oder laden Sie ein Bild hoch) und schneiden Sie den Bereich zu.',
      takePhotoBtn: 'Foto aufnehmen',
      importImgBtn: 'Bild importieren',
      analyzingAi: 'Ihre Antwort wird mit Gemini analysiert...',
      gradeAiBtn: 'Meine Antwort mit KI auswerten',
    },
    es: {
      langNameEn: 'Spanish (Español)',
      examConsultation: 'Consulta de examen',
      encryptedSub: 'Documento cifrado de extremo a extremo',
      openPdf: 'Abrir PDF',
      downloadPdf: 'Descargar PDF',
      encryptedBadge: 'Cifrado',
      decryptingTitle: 'Descifrado seguro en curso...',
      decryptingDesc: 'El documento se está descargando y descifrando localmente en la memoria de su dispositivo.',
      protectedTitle: 'Acceso protegido a su examen',
      protectedDesc: 'Este enlace no incluye la clave secreta de descifrado. Introduzca o pegue la clave facilitada por su docente:',
      keyPlaceholder: 'Ej.: u7X9_aBC12... (Clave secreta)',
      unlockBtn: 'Desbloquear',
      wrongKeyErr: 'Clave de descifrado incorrecta para este examen. Verifique la clave introducida.',
      missingIdErr: 'No se especificó identificador en la URL (falta ?id=). Abra el enlace completo enviado por su docente.',
      studentLabel: 'Estudiante',
      anonCopy: 'Copia anónima',
      gradedBadge: 'Calificado',
      inProgressBadge: 'En curso',
      globalScoreLabel: 'Calificación global',
      detailedViewBtn: 'Vista Detallada (Pregunta por pregunta)',
      summaryViewBtn: 'Vista Resumen (Balance global)',
      prevBtn: 'Anterior',
      nextBtn: 'Siguiente',
      mobileCopyTab: '📄 Su examen',
      mobileGradingTab: '📝 Calificación y Criterios',
      targetedZone: 'Zona seleccionada',
      viewFullPdf: '📄 Ver PDF completo',
      viewByQuestion: '🖼️ Vista por pregunta',
      aiOriginBadge: 'Precorrección IA',
      humanOriginBadge: 'Validado por el docente',
      rubricCriteriaTitle: 'Rúbrica y Criterios de evaluación',
      feedbackBoxTitle: 'Comentario de corrección',
      justifBoxTitle: 'Justificación y Desarrollo',
      noQuestionsMsg: 'No hay preguntas registradas para este examen.',
      clickToOpen: 'Haga clic para abrir',
      footerSecurityHtml: '🔒 <strong>Cifrado de extremo a extremo</strong>: El documento se descifró exclusivamente en la memoria de su navegador mediante Web Crypto API (AES-256-GCM). El servidor solo almacena fragmentos cifrados sin clave de acceso.',
      footerBrandHtml: 'Generado con <a href="https://gradaly.io" target="_blank" rel="noopener noreferrer" class="footer-brand-link">Gradaly</a>',
      practiceTitle: 'Sesión de Práctica',
      selfAssessSub: 'Modo Autoevaluación',
      noPracticeQ: 'No hay preguntas configuradas en esta sesión de práctica.',
      qStatement: 'Enunciado de la pregunta',
      hide: 'Ocultar',
      show: 'Mostrar',
      capturedAnswer: 'Respuesta capturada',
      adjustCrop: 'Ajustar recorte',
      deleteBtn: 'Eliminar',
      aiSelfScore: 'Puntuación de autoevaluación IA',
      formativeFb: 'Retroalimentación formativa personalizada',
      detailedJustif: 'Explicación detallada de la evaluación',
      rubricRevealedAfter: 'La rúbrica detallada se mostrará tras su primer intento.',
      refSolution: 'Solucionario oficial de referencia',
      optPersonalKey: 'Opcional • Clave API personal de Gemini',
      initSetupKey: 'Configuración inicial • Clave gratuita de Google Gemini',
      connectKeyTitle: 'Conecte su clave API personal de Google Gemini',
      useGradalyServer: 'Usar servidor Gradaly',
      closeBtn: 'Cerrar',
      step1Html: 'Abra <strong>Google AI Studio</strong> con su cuenta de Google (100 % gratuito, sin tarjeta bancaria).',
      step2Html: 'Haga clic en <strong>«Create API key»</strong> y copie la clave generada (empieza por <code>AIzaSy...</code>).',
      step3Html: 'Pegue su clave abajo y pulse <strong>«Guardar clave»</strong>.',
      getKeyLink: 'Obtener clave gratuita en Google AI Studio',
      pasteKeyPh: 'Pegue su clave Gemini (AIzaSy...)',
      saveKeyBtn: 'Guardar clave',
      keyStoredLocal: 'Guardada únicamente en el navegador de este dispositivo. Nunca se comparte.',
      personalKeyReady: 'Clave API personal de Gemini activa (gemini-3.8-flash)',
      editKeyBtn: 'Editar clave',
      evalsLeft: ' eval. restantes',
      relayReady: 'Evaluación IA de Gradaly lista (sin clave requerida)',
      optKeyTitle: 'Opcional: usar su propia clave API de Google Gemini',
      customKeyBtn: 'Clave propia',
      frameTitle: 'Encuadre su zona de respuesta',
      frameSub: 'Arrastre las esquinas azules para aislar únicamente su respuesta manuscrita.',
      fullBtn: 'Todo',
      cancelBtn: 'Cancelar',
      confirmBtn: 'Confirmar',
      takePhotoTitle: 'Fotografiar su respuesta',
      chooseFileInstead: 'Elegir archivo',
      captureBtn: 'Capturar',
      yourAnswerTitle: 'Su respuesta manuscrita',
      yourAnswerSub: 'Escriba su respuesta en papel, tome una foto (o importe una imagen) y encuadre la zona de respuesta.',
      takePhotoBtn: 'Tomar foto',
      importImgBtn: 'Importar imagen',
      analyzingAi: 'Analizando su respuesta con Gemini...',
      gradeAiBtn: 'Evaluar mi respuesta con IA',
    },
    it: {
      langNameEn: 'Italian (Italiano)',
      examConsultation: 'Consultazione elaborato',
      encryptedSub: 'Documento crittografato end-to-end',
      openPdf: 'Apri PDF',
      downloadPdf: 'Scarica PDF',
      encryptedBadge: 'Crittografato',
      decryptingTitle: 'Decrittografia sicura in corso...',
      decryptingDesc: 'Il documento viene scaricato e decifrato localmente nella memoria del tuo dispositivo.',
      protectedTitle: 'Accesso protetto al tuo elaborato',
      protectedDesc: 'Questo link non contiene la chiave segreta di decrittografia. Inserisci o incolla la chiave fornita dal tuo docente:',
      keyPlaceholder: 'Es.: u7X9_aBC12... (Chiave segreta)',
      unlockBtn: 'Sblocca',
      wrongKeyErr: 'Chiave di decrittografia errata per questo elaborato. Verifica la chiave inserita.',
      missingIdErr: 'Nessun identificativo specificato nell’URL (?id= mancante). Apri il link completo inviato dal tuo docente.',
      studentLabel: 'Studente',
      anonCopy: 'Elaborato anonimo',
      gradedBadge: 'Valutato',
      inProgressBadge: 'In corso',
      globalScoreLabel: 'Punteggio globale',
      detailedViewBtn: 'Vista Dettagliata (Domanda per domanda)',
      summaryViewBtn: 'Vista Riepilogo (Bilancio globale)',
      prevBtn: 'Precedente',
      nextBtn: 'Successiva',
      mobileCopyTab: '📄 Il tuo elaborato',
      mobileGradingTab: '📝 Valutazione e Criteri',
      targetedZone: 'Area selezionata',
      viewFullPdf: '📄 Vedi PDF completo',
      viewByQuestion: '🖼️ Vista per domanda',
      aiOriginBadge: 'Pre-correzione IA',
      humanOriginBadge: 'Convalidato dal docente',
      rubricCriteriaTitle: 'Griglia e Criteri di valutazione',
      feedbackBoxTitle: 'Commento di valutazione',
      justifBoxTitle: 'Giustificazione e Svolgimento',
      noQuestionsMsg: 'Nessuna domanda registrata per questo esame.',
      clickToOpen: 'Clicca per aprire',
      footerSecurityHtml: '🔒 <strong>Crittografia end-to-end</strong>: Il documento è stato decifrato esclusivamente nella memoria del tuo browser tramite Web Crypto API (AES-256-GCM). Il server memorizza solo frammenti cifrati privi di chiave di accesso.',
      footerBrandHtml: 'Generato con <a href="https://gradaly.io" target="_blank" rel="noopener noreferrer" class="footer-brand-link">Gradaly</a>',
      practiceTitle: 'Sessione di Esercitazione',
      selfAssessSub: 'Modalità Autovalutazione',
      noPracticeQ: 'Nessuna domanda configurata in questa sessione di esercitazione.',
      qStatement: 'Testo della domanda',
      hide: 'Nascondi',
      show: 'Mostra',
      capturedAnswer: 'Risposta acquisita',
      adjustCrop: 'Regola ritaglio',
      deleteBtn: 'Elimina',
      aiSelfScore: 'Punteggio di autovalutazione IA',
      formativeFb: 'Feedback formativo personalizzato',
      detailedJustif: 'Spiegazione dettagliata della valutazione',
      rubricRevealedAfter: 'La griglia dettagliata verrà mostrata dopo il primo tentativo.',
      refSolution: 'Soluzione ufficiale di riferimento',
      optPersonalKey: 'Opzionale • Chiave API personale di Gemini',
      initSetupKey: 'Configurazione iniziale • Chiave gratuita Google Gemini',
      connectKeyTitle: 'Collega la tua chiave API personale di Google Gemini',
      useGradalyServer: 'Usa server Gradaly',
      closeBtn: 'Chiudi',
      step1Html: 'Apri <strong>Google AI Studio</strong> con il tuo account Google (100% gratuito, senza carta di credito).',
      step2Html: 'Clicca su <strong>«Create API key»</strong> e copia la chiave generata (inizia con <code>AIzaSy...</code>).',
      step3Html: 'Incolla la chiave qui sotto e clicca su <strong>«Salva chiave»</strong>.',
      getKeyLink: 'Ottieni una chiave gratuita su Google AI Studio',
      pasteKeyPh: 'Incolla la tua chiave Gemini (AIzaSy...)',
      saveKeyBtn: 'Salva chiave',
      keyStoredLocal: 'Salvata esclusivamente nel browser di questo dispositivo. Mai condivisa.',
      personalKeyReady: 'Chiave API personale di Gemini attiva (gemini-3.8-flash)',
      editKeyBtn: 'Modifica chiave',
      evalsLeft: ' valut. rimanenti',
      relayReady: 'Valutazione IA Gradaly pronta (nessuna chiave richiesta)',
      optKeyTitle: 'Opzionale: usa la tua chiave API di Google Gemini',
      customKeyBtn: 'Chiave personale',
      frameTitle: 'Inquadra l’area della risposta',
      frameSub: 'Trascina gli angoli blu per isolare unicamente la tua risposta manoscritta.',
      fullBtn: 'Tutto',
      cancelBtn: 'Annulla',
      confirmBtn: 'Conferma',
      takePhotoTitle: 'Fotografa la tua risposta',
      chooseFileInstead: 'Scegli file',
      captureBtn: 'Scatta',
      yourAnswerTitle: 'La tua risposta manoscritta',
      yourAnswerSub: 'Svolgi l’esercizio su carta, scatta una foto (o carica un’immagine) e ritaglia l’area della risposta.',
      takePhotoBtn: 'Scatta foto',
      importImgBtn: 'Importa immagine',
      analyzingAi: 'Analisi della risposta con Gemini in corso...',
      gradeAiBtn: 'Valuta la mia risposta con IA',
    },
    tr: {
      langNameEn: 'Turkish (Türkçe)',
      examConsultation: 'Sınav Kâğıdı İnceleme',
      encryptedSub: 'Uçtan uca şifrelenmiş belge',
      openPdf: "PDF'yi Aç",
      downloadPdf: "PDF'yi İndir",
      encryptedBadge: 'Şifreli',
      decryptingTitle: 'Güvenli şifre çözme sürüyor...',
      decryptingDesc: 'Belge indiriliyor ve yalnızca cihazınızın belleğinde yerel olarak çözülüyor.',
      protectedTitle: 'Sınav Kâğıdınıza Korumalı Erişim',
      protectedDesc: 'Bu bağlantıda gizli şifre çözme anahtarı bulunmuyor. Lütfen eğitmeninizin paylaştığı anahtarı girin veya yapıştırın:',
      keyPlaceholder: 'Örn: u7X9_aBC12... (Gizli anahtar)',
      unlockBtn: 'Kilidi Aç',
      wrongKeyErr: 'Bu kâğıt için şifre çözme anahtarı hatalı. Lütfen girdiğiniz anahtarı kontrol edin.',
      missingIdErr: "URL'de belge kimliği belirtilmemiş (?id= eksik). Lütfen eğitmeninizin paylaştığı tam bağlantıyı açın.",
      studentLabel: 'Öğrenci',
      anonCopy: 'İsimsiz Kâğıt',
      gradedBadge: 'Değerlendirildi',
      inProgressBadge: 'Devam ediyor',
      globalScoreLabel: 'Toplam Not',
      detailedViewBtn: 'Ayrıntılı Görünüm (Soru soru)',
      summaryViewBtn: 'Özet Görünüm (Tüm sorular)',
      prevBtn: 'Önceki',
      nextBtn: 'Sonraki',
      mobileCopyTab: '📄 Kâğıdınız',
      mobileGradingTab: '📝 Puanlama ve Ölçütler',
      targetedZone: 'Hedef Bölge',
      viewFullPdf: '📄 Tam PDF Görünümü',
      viewByQuestion: '🖼️ Soru Görünümü',
      aiOriginBadge: 'YZ Ön Değerlendirme',
      humanOriginBadge: 'Eğitmen Onaylı',
      rubricCriteriaTitle: 'Değerlendirme Ölçeği ve Ölçütler',
      feedbackBoxTitle: 'Değerlendirme Geri Bildirimi',
      justifBoxTitle: 'Ayrıntılı Gerekçe',
      noQuestionsMsg: 'Bu kâğıt için kayıtlı soru bulunmuyor.',
      clickToOpen: 'Açmak için tıklayın',
      footerSecurityHtml: '🔒 <strong>Uçtan Uca Şifreleme</strong>: Belge, Web Crypto API (AES-256-GCM) ile yalnızca tarayıcınızın belleğinde çözülmüştür. Sunucu yalnızca şifreli parçaları saklar ve erişim anahtarına sahip değildir.',
      footerBrandHtml: '<a href="https://gradaly.io" target="_blank" rel="noopener noreferrer" class="footer-brand-link">Gradaly</a> ile oluşturuldu',
      practiceTitle: 'Alıştırma Oturumu',
      selfAssessSub: 'Öz Değerlendirme Modu',
      noPracticeQ: 'Bu alıştırma oturumunda yapılandırılmış soru yok.',
      qStatement: 'Soru Metni',
      hide: 'Gizle',
      show: 'Göster',
      capturedAnswer: 'Çekilen Yanıt',
      adjustCrop: 'Kırpmayı Ayarla',
      deleteBtn: 'Sil',
      aiSelfScore: 'YZ Öz Değerlendirme Puanı',
      formativeFb: 'Kişiselleştirilmiş Eğitici Geri Bildirim',
      detailedJustif: 'Ayrıntılı Değerlendirme Açıklaması',
      rubricRevealedAfter: 'Ayrıntılı değerlendirme ölçeği ilk denemenizden sonra açılacaktır.',
      refSolution: 'Resmî Örnek Çözüm',
      optPersonalKey: 'İsteğe Bağlı • Kişisel Gemini API Anahtarı',
      initSetupKey: 'İlk Kurulum • Ücretsiz Google Gemini Anahtarı',
      connectKeyTitle: 'Kişisel Google Gemini API Anahtarınızı Bağlayın',
      useGradalyServer: 'Gradaly Sunucusunu Kullan',
      closeBtn: 'Kapat',
      step1Html: 'Google hesabınızla <strong>Google AI Studio</strong> sayfasını açın (%100 ücretsiz, kredi kartı gerekmez).',
      step2Html: '<strong>"Create API key"</strong> düğmesine tıklayın ve oluşturulan anahtarı kopyalayın (<code>AIzaSy...</code> ile başlar).',
      step3Html: 'Anahtarınızı aşağıya yapıştırıp <strong>"Anahtarı Kaydet"</strong> düğmesine tıklayın.',
      getKeyLink: "Google AI Studio'dan Ücretsiz Gemini Anahtarı Al",
      pasteKeyPh: 'Gemini anahtarınızı yapıştırın (AIzaSy...)',
      saveKeyBtn: 'Anahtarı Kaydet',
      keyStoredLocal: 'Yalnızca bu cihazdaki tarayıcınızda saklanır. Hiçbir sunucuyla paylaşılmaz.',
      personalKeyReady: 'Kişisel Gemini API Anahtarı Hazır (gemini-3.8-flash)',
      editKeyBtn: 'Anahtarı Düzenle',
      evalsLeft: ' değ. kaldı',
      relayReady: 'Gradaly YZ Değerlendirme Hazır (anahtar gerekmez)',
      optKeyTitle: 'İsteğe bağlı: kendi Google Gemini API anahtarınızı kullanın',
      customKeyBtn: 'Özel Anahtar',
      frameTitle: 'Yanıt Alanınızı Çerçeveleyin',
      frameSub: 'Yalnızca el yazısı yanıtınızı seçmek için mavi köşeleri sürükleyin.',
      fullBtn: 'Tümü',
      cancelBtn: 'İptal',
      confirmBtn: 'Onayla',
      takePhotoTitle: 'Yanıtınızın Fotoğrafını Çekin',
      chooseFileInstead: 'Dosya Seç',
      captureBtn: 'Çek',
      yourAnswerTitle: 'El Yazısı Yanıtınız',
      yourAnswerSub: 'Yanıtınızı kâğıda yazın, fotoğrafını çekin (veya görsel yükleyin) ve yanıt alanını çerçeveleyin.',
      takePhotoBtn: 'Fotoğraf Çek',
      importImgBtn: 'Görsel Yükle',
      analyzingAi: 'Yanıtınız Gemini ile analiz ediliyor...',
      gradeAiBtn: 'Yanıtımı Yapay Zekâ ile Değerlendir',
    },
    zh: {
      langNameEn: 'Simplified Chinese (简体中文)',
      examConsultation: '答卷批阅查询',
      encryptedSub: '端到端加密文档',
      openPdf: '打开 PDF',
      downloadPdf: '下载 PDF',
      encryptedBadge: '已加密',
      decryptingTitle: '正在安全解密…',
      decryptingDesc: '文档正在下载并仅在您的设备内存中本地解密。',
      protectedTitle: '受保护的答卷访问',
      protectedDesc: '当前链接不包含解密密钥。请输入或粘贴教师向您提供的访问密钥：',
      keyPlaceholder: '例如：u7X9_aBC12...（解密密钥）',
      unlockBtn: '解锁查看',
      wrongKeyErr: '该答卷的解密密钥不正确，请核对后重试。',
      missingIdErr: '网址中缺少答卷标识（?id= 参数缺失），请点击教师提供的完整链接。',
      studentLabel: '学生',
      anonCopy: '匿名答卷',
      gradedBadge: '已评阅',
      inProgressBadge: '评阅中',
      globalScoreLabel: '总成绩',
      detailedViewBtn: '逐题详情视图',
      summaryViewBtn: '全卷总览视图',
      prevBtn: '上一题',
      nextBtn: '下一题',
      mobileCopyTab: '📄 您的答卷',
      mobileGradingTab: '📝 评分与细则',
      targetedZone: '定位区域',
      viewFullPdf: '📄 查看完整 PDF',
      viewByQuestion: '🖼️ 按题查看',
      aiOriginBadge: 'AI 预评阅',
      humanOriginBadge: '教师已复核',
      rubricCriteriaTitle: '评分细则与标准',
      feedbackBoxTitle: '评语与反馈',
      justifBoxTitle: '评分依据与解析',
      noQuestionsMsg: '该答卷暂无题目记录。',
      clickToOpen: '点击查看该题',
      footerSecurityHtml: '🔒 <strong>端到端零知识加密</strong>：本文档通过浏览器原生 Web Crypto API（AES-256-GCM）仅在本地内存中解密。服务器仅存储密文分片，不持有任何解密密钥。',
      footerBrandHtml: '由 <a href="https://gradaly.io" target="_blank" rel="noopener noreferrer" class="footer-brand-link">Gradaly</a> 生成',
      practiceTitle: '自主练习',
      selfAssessSub: '自主评测模式',
      noPracticeQ: '本次练习暂未配置题目。',
      qStatement: '题目内容',
      hide: '收起',
      show: '展开',
      capturedAnswer: '已拍摄的作答区域',
      adjustCrop: '调整裁剪框',
      deleteBtn: '删除',
      aiSelfScore: 'AI 自测得分',
      formativeFb: '个性化诊断反馈',
      detailedJustif: '逐项评分解析',
      rubricRevealedAfter: '完成首次作答提交后将解锁详细评分细则。',
      refSolution: '标准参考解答',
      optPersonalKey: '可选 • 个人 Gemini API 密钥',
      initSetupKey: '初始设置 • 免费 Google Gemini 密钥',
      connectKeyTitle: '连接您的个人 Google Gemini API 密钥',
      useGradalyServer: '使用 Gradaly 服务器',
      closeBtn: '关闭',
      step1Html: '使用 Google 账号打开 <strong>Google AI Studio</strong>（100% 免费，无需信用卡）。',
      step2Html: '点击 <strong>“Create API key”</strong> 并复制生成的密钥（以 <code>AIzaSy...</code> 开头）。',
      step3Html: '在下方粘贴密钥并点击 <strong>“保存密钥”</strong>。',
      getKeyLink: '前往 Google AI Studio 获取免费 Gemini 密钥',
      pasteKeyPh: '粘贴您的 Gemini 密钥 (AIzaSy...)',
      saveKeyBtn: '保存密钥',
      keyStoredLocal: '仅保存在您当前设备的浏览器中，绝不上传至任何服务器。',
      personalKeyReady: '个人 Gemini API 密钥已启用 (gemini-3.8-flash)',
      editKeyBtn: '修改密钥',
      evalsLeft: ' 次剩余额度',
      relayReady: 'Gradaly AI 批改已就绪（无需配置密钥）',
      optKeyTitle: '可选：使用您自己的 Google Gemini API 密钥',
      customKeyBtn: '个人密钥',
      frameTitle: '框选您的作答区域',
      frameSub: '拖动蓝色边角，仅框选您的手写解答部分。',
      fullBtn: '全选',
      cancelBtn: '取消',
      confirmBtn: '确认裁剪',
      takePhotoTitle: '拍摄您的解答',
      chooseFileInstead: '从相册/文件选择',
      captureBtn: '拍照',
      yourAnswerTitle: '您的纸上手写解答',
      yourAnswerSub: '请在纸上完成作答，拍照（或导入图片）并框选作答区域。',
      takePhotoBtn: '拍照上传',
      importImgBtn: '导入图片',
      analyzingAi: 'Gemini 正在分析您的解答…',
      gradeAiBtn: '使用 AI 批改我的解答',
    },
    ja: {
      langNameEn: 'Japanese (日本語)',
      examConsultation: '答案返却・採点結果の確認',
      encryptedSub: 'エンドツーエンド暗号化ドキュメント',
      openPdf: 'PDFを開く',
      downloadPdf: 'PDFを保存',
      encryptedBadge: '暗号化済',
      decryptingTitle: '安全に復号しています…',
      decryptingDesc: 'データをダウンロードし、お使いの端末のメモリ内でのみ復号しています。',
      protectedTitle: '保護された答案へのアクセス',
      protectedDesc: 'このリンクには復号キーが含まれていません。担当教員から案内された秘密キーを入力または貼り付けてください：',
      keyPlaceholder: '例: u7X9_aBC12...（秘密キー）',
      unlockBtn: 'ロック解除',
      wrongKeyErr: '復号キーが正しくありません。入力したキーをご確認ください。',
      missingIdErr: 'URLに答案IDが指定されていません（?id= パラメータ不足）。教員から共有された完全なリンクを開いてください。',
      studentLabel: '学生',
      anonCopy: '匿名の答案',
      gradedBadge: '採点済',
      inProgressBadge: '採点中',
      globalScoreLabel: '総合得点',
      detailedViewBtn: '詳細表示（設問ごと）',
      summaryViewBtn: '一覧表示（全体サマリー）',
      prevBtn: '前へ',
      nextBtn: '次へ',
      mobileCopyTab: '📄 答案画像',
      mobileGradingTab: '📝 採点・ルーブリック',
      targetedZone: '対象範囲',
      viewFullPdf: '📄 PDF全体を表示',
      viewByQuestion: '🖼️ 設問別表示',
      aiOriginBadge: 'AI仮採点',
      humanOriginBadge: '教員確認済',
      rubricCriteriaTitle: '採点基準・ルーブリック',
      feedbackBoxTitle: '講評・フィードバック',
      justifBoxTitle: '採点根拠・解説',
      noQuestionsMsg: 'この答案には設問データがありません。',
      clickToOpen: 'クリックして開く',
      footerSecurityHtml: '🔒 <strong>エンドツーエンド暗号化</strong>：この文書はお使いのブラウザ内メモリでのみ Web Crypto API（AES-256-GCM）により復号されました。サーバーには暗号化データのみが保存され、復号キーは保持されません。',
      footerBrandHtml: '<a href="https://gradaly.io" target="_blank" rel="noopener noreferrer" class="footer-brand-link">Gradaly</a> で作成',
      practiceTitle: '演習セッション',
      selfAssessSub: '自己評価モード',
      noPracticeQ: 'この演習セッションには設問が設定されていません。',
      qStatement: '問題文',
      hide: '閉じる',
      show: '表示',
      capturedAnswer: '撮影した解答範囲',
      adjustCrop: '切り抜き調整',
      deleteBtn: '削除',
      aiSelfScore: 'AI 自己評価スコア',
      formativeFb: '個別フィードバック',
      detailedJustif: '採点の詳細解説',
      rubricRevealedAfter: '詳細な採点基準は最初の提出後に表示されます。',
      refSolution: '公式の模範解答',
      optPersonalKey: '任意 • 個人の Gemini API キー',
      initSetupKey: '初期設定 • 無料の Google Gemini キー',
      connectKeyTitle: '個人の Google Gemini API キーを設定',
      useGradalyServer: 'Gradaly サーバーを使用',
      closeBtn: '閉じる',
      step1Html: 'Googleアカウントで <strong>Google AI Studio</strong> を開きます（完全無料・クレジットカード不要）。',
      step2Html: '<strong>「Create API key」</strong> をクリックし、発行されたキー（<code>AIzaSy...</code>）をコピーします。',
      step3Html: '下にキーを貼り付けて <strong>「キーを保存」</strong> をクリックします。',
      getKeyLink: 'Google AI Studio で無料の Gemini キーを取得',
      pasteKeyPh: 'Gemini キーを貼り付け (AIzaSy...)',
      saveKeyBtn: 'キーを保存',
      keyStoredLocal: 'この端末のブラウザ内にのみ保存され、外部サーバーには一切送信されません。',
      personalKeyReady: '個人用 Gemini API キー有効 (gemini-3.8-flash)',
      editKeyBtn: 'キー変更',
      evalsLeft: ' 回残り',
      relayReady: 'Gradaly AI 採点準備完了（APIキー不要）',
      optKeyTitle: '任意：ご自身の Google Gemini API キーを使用する',
      customKeyBtn: '個人キー',
      frameTitle: '解答範囲を枠で囲む',
      frameSub: '青い角をドラッグして、手書きの解答部分だけを選択してください。',
      fullBtn: '全体',
      cancelBtn: 'キャンセル',
      confirmBtn: '確定',
      takePhotoTitle: '解答を撮影する',
      chooseFileInstead: 'ファイルを選択',
      captureBtn: '撮影',
      yourAnswerTitle: '手書きの解答',
      yourAnswerSub: '紙に解答を書き、写真を撮影（または画像を読み込み）して解答範囲を枠で囲んでください。',
      takePhotoBtn: '写真を撮る',
      importImgBtn: '画像を選択',
      analyzingAi: 'Gemini が解答を解析しています…',
      gradeAiBtn: 'AI で解答を採点する',
    },
    ko: {
      langNameEn: 'Korean (한국어)',
      examConsultation: '답안지 및 채점 결과 확인',
      encryptedSub: '종단간 암호화 문서',
      openPdf: 'PDF 열기',
      downloadPdf: 'PDF 다운로드',
      encryptedBadge: '암호화됨',
      decryptingTitle: '안전하게 복호화하는 중...',
      decryptingDesc: '문서를 다운로드하여 기기 메모리 내에서만 로컬로 복호화하고 있습니다.',
      protectedTitle: '보호된 답안지 접근',
      protectedDesc: '이 링크에는 비밀 복호화 키가 포함되어 있지 않습니다. 담당 교수님이 안내한 키를 입력하거나 붙여넣어 주세요:',
      keyPlaceholder: '예: u7X9_aBC12... (비밀 키)',
      unlockBtn: '잠금 해제',
      wrongKeyErr: '이 답안지의 복호화 키가 올바르지 않습니다. 입력한 키를 확인해 주세요.',
      missingIdErr: 'URL에 답안지 ID가 없습니다 (?id= 매개변수 누락). 교수님이 공유한 전체 링크를 열어 주세요.',
      studentLabel: '학생',
      anonCopy: '익명 답안지',
      gradedBadge: '채점 완료',
      inProgressBadge: '진행 중',
      globalScoreLabel: '총점',
      detailedViewBtn: '상세 보기 (문항별)',
      summaryViewBtn: '요약 보기 (전체 문항)',
      prevBtn: '이전',
      nextBtn: '다음',
      mobileCopyTab: '📄 내 답안지',
      mobileGradingTab: '📝 채점 및 기준',
      targetedZone: '선택 영역',
      viewFullPdf: '📄 전체 PDF 보기',
      viewByQuestion: '🖼️ 문항별 보기',
      aiOriginBadge: 'AI 사전 채점',
      humanOriginBadge: '교수자 검증 완료',
      rubricCriteriaTitle: '채점 기준표 (루브릭)',
      feedbackBoxTitle: '채점 피드백',
      justifBoxTitle: '채점 근거 및 해설',
      noQuestionsMsg: '이 답안지에 등록된 문항이 없습니다.',
      clickToOpen: '클릭하여 열기',
      footerSecurityHtml: '🔒 <strong>종단간 암호화</strong>: 이 문서는 브라우저 메모리 내에서 네이티브 Web Crypto API(AES-256-GCM)로만 복호화되었습니다. 서버는 암호화된 조각만 보관하며 접근 키를 보유하지 않습니다.',
      footerBrandHtml: '<a href="https://gradaly.io" target="_blank" rel="noopener noreferrer" class="footer-brand-link">Gradaly</a>로 생성됨',
      practiceTitle: '연습 세션',
      selfAssessSub: '자기평가 모드',
      noPracticeQ: '이 연습 세션에 설정된 문항이 없습니다.',
      qStatement: '문제 지문',
      hide: '숨기기',
      show: '보기',
      capturedAnswer: '촬영된 답안 영역',
      adjustCrop: '영역 다시 자르기',
      deleteBtn: '삭제',
      aiSelfScore: 'AI 자기평가 점수',
      formativeFb: '맞춤형 형성적 피드백',
      detailedJustif: '상세 채점 해설',
      rubricRevealedAfter: '상세 채점 기준표는 첫 번째 시도 후에 공개됩니다.',
      refSolution: '공식 모범 답안',
      optPersonalKey: '선택 사항 • 개인 Gemini API 키',
      initSetupKey: '초기 설정 • 무료 Google Gemini 키',
      connectKeyTitle: '개인 Google Gemini API 키 연결',
      useGradalyServer: 'Gradaly 서버 사용',
      closeBtn: '닫기',
      step1Html: 'Google 계정으로 <strong>Google AI Studio</strong>를 엽니다 (100% 무료, 신용카드 불필요).',
      step2Html: '<strong>"Create API key"</strong>를 클릭하고 생성된 키(<code>AIzaSy...</code>로 시작)를 복사합니다.',
      step3Html: '아래에 키를 붙여넣고 <strong>"키 저장"</strong>을 클릭합니다.',
      getKeyLink: 'Google AI Studio에서 무료 Gemini 키 발급받기',
      pasteKeyPh: 'Gemini 키 붙여넣기 (AIzaSy...)',
      saveKeyBtn: '키 저장',
      keyStoredLocal: '현재 기기의 브라우저에만 저장되며 외부 서버와 절대 공유되지 않습니다.',
      personalKeyReady: '개인 Gemini API 키 활성화됨 (gemini-3.8-flash)',
      editKeyBtn: '키 변경',
      evalsLeft: '회 남음',
      relayReady: 'Gradaly AI 채점 준비 완료 (API 키 불필요)',
      optKeyTitle: '선택 사항: 본인의 Google Gemini API 키 사용',
      customKeyBtn: '개인 키',
      frameTitle: '답안 영역 지정',
      frameSub: '파란색 모서리를 드래그하여 손글씨 답안 영역만 선택하세요.',
      fullBtn: '전체',
      cancelBtn: '취소',
      confirmBtn: '확인',
      takePhotoTitle: '답안 사진 촬영',
      chooseFileInstead: '파일 선택',
      captureBtn: '촬영',
      yourAnswerTitle: '손글씨 답안',
      yourAnswerSub: '종이에 답안을 작성한 뒤 사진을 촬영(또는 이미지 불러오기)하고 답안 영역을 지정하세요.',
      takePhotoBtn: '사진 촬영',
      importImgBtn: '이미지 불러오기',
      analyzingAi: 'Gemini가 답안을 분석하고 있습니다...',
      gradeAiBtn: 'AI로 내 답안 채점하기',
    },
  };

  function normalizePortalLang(raw) {
    const clean = String(raw || '').trim().toLowerCase().split(/[-_]/)[0];
    return PORTAL_I18N[clean] ? clean : null;
  }

  function resolveInitialPortalLang() {
    const qLang = normalizePortalLang(getQueryParam('lang'));
    if (qLang) {
      userOverrodeLang = true;
      return qLang;
    }
    try {
      const saved = normalizePortalLang(localStorage.getItem('gradaly_portal_lang'));
      if (saved) {
        userOverrodeLang = true;
        return saved;
      }
    } catch (_) {}
    const nav = normalizePortalLang((navigator && (navigator.language || navigator.userLanguage)) || '');
    return nav || 'fr';
  }

  function L() {
    return PORTAL_I18N[activePortalLang] || PORTAL_I18N.fr;
  }

  function applyStaticDomLocalization() {
    const tr = L();
    if (document.documentElement) document.documentElement.lang = activePortalLang;
    const sel = document.getElementById('header-lang-select');
    if (sel && sel.value !== activePortalLang) sel.value = activePortalLang;

    const setTxt = function (id, val) {
      const el = document.getElementById(id);
      if (el && typeof val === 'string') el.textContent = val;
    };
    if (!currentData) {
      setTxt('header-exam-title', tr.examConsultation);
      setTxt('header-doc-id', tr.encryptedSub);
      document.title = tr.examConsultation + ' — Gradaly';
    }
    setTxt('header-open-pdf-label', tr.openPdf);
    setTxt('header-download-pdf-label', tr.downloadPdf);
    setTxt('header-zk-label', tr.encryptedBadge);
    setTxt('loading-title', tr.decryptingTitle);
    setTxt('loading-desc', tr.decryptingDesc);
    setTxt('unlock-title', tr.protectedTitle);
    setTxt('unlock-instruction-text', tr.protectedDesc);
    setTxt('unlock-button', tr.unlockBtn);
    const keyInp = document.getElementById('manual-key-input');
    if (keyInp) keyInp.placeholder = tr.keyPlaceholder;

    setTxt('student-meta-label', tr.studentLabel);
    setTxt('score-label-text', tr.globalScoreLabel);
    setTxt('mode-detailed-label', tr.detailedViewBtn);
    setTxt('mode-summary-label', tr.summaryViewBtn);
    setTxt('btn-prev-q-label', tr.prevBtn);
    setTxt('btn-next-q-label', tr.nextBtn);
    setTxt('mobile-copy-tab-label', tr.mobileCopyTab);
    const btnToggleTxt = document.getElementById('btn-toggle-view-text');
    if (btnToggleTxt) {
      btnToggleTxt.textContent = isShowingFullPdf ? tr.viewByQuestion : tr.viewFullPdf;
    }

    const securityEl = document.getElementById('footer-security-text');
    if (securityEl) securityEl.innerHTML = tr.footerSecurityHtml;
    const brandTextEl = document.getElementById('footer-brand-text');
    if (brandTextEl) brandTextEl.innerHTML = tr.footerBrandHtml;
  }

  window.setPortalLang = function (code) {
    const norm = normalizePortalLang(code);
    if (!norm) return;
    activePortalLang = norm;
    userOverrodeLang = true;
    try {
      localStorage.setItem('gradaly_portal_lang', norm);
    } catch (_) {}
    applyStaticDomLocalization();
    if (currentData) {
      if (currentData.mode === 'practice' || currentData.MODE === 'practice') {
        renderPracticeView();
      } else {
        renderDashboard(currentData);
      }
    }
  };

  function normalizeZoneBbox(bbox, bbox_rel) {
    if (Array.isArray(bbox_rel) && bbox_rel.length === 4 && bbox_rel[2] > bbox_rel[0] && bbox_rel[3] > bbox_rel[1]) {
      return bbox_rel;
    }
    if (!Array.isArray(bbox) || bbox.length !== 4) return null;
    const x1 = bbox[0], y1 = bbox[1], x2 = bbox[2], y2 = bbox[3];
    if (x1 >= 0 && y1 >= 0 && x2 <= 1.05 && y2 <= 1.05 && x2 > x1 && y2 > y1) {
      return [x1, y1, Math.min(1, x2), Math.min(1, y2)];
    }
    const pw = 595.276, ph = 841.890;
    const nx1 = Math.max(0, Math.min(1, x1 / pw));
    const ny1 = Math.max(0, Math.min(1, y1 / ph));
    const nx2 = Math.max(0, Math.min(1, x2 / pw));
    const ny2 = Math.max(0, Math.min(1, y2 / ph));
    if (nx2 > nx1 && ny2 > ny1) {
      return [nx1, ny1, nx2, ny2];
    }
    return null;
  }

  function getQuestionZonesList(qObj) {
    if (!qObj) return [];
    const fallbackRel = normalizeZoneBbox(qObj.bbox, qObj.bbox_rel);
    if (Array.isArray(qObj.zones) && qObj.zones.length > 0) {
      const mapped = [];
      qObj.zones.forEach(function (z, idx) {
        const p = typeof z.page === 'number' ? z.page : (typeof qObj.page === 'number' ? qObj.page : 0);
        let rel = normalizeZoneBbox(z.bbox, z.bbox_rel);
        if (!rel && idx === 0 && fallbackRel) {
          rel = fallbackRel;
        }
        mapped.push({ page: p, bbox_rel: rel });
      });
      return mapped;
    }
    if (fallbackRel) {
      return [{ page: typeof qObj.page === 'number' ? qObj.page : 0, bbox_rel: fallbackRel }];
    }
    return [];
  }

  /**
   * Dual-mode loader:
   * 1. If on http(s)://, attempts fetch('data/<docId>.enc').
   * 2. If on file:// or if fetch fails, dynamically loads <script src="data/<docId>.js">
   *    which defines window.__GRADALY_PAYLOAD__ = "...base64...".
   * This completely bypasses CORS restrictions when opening via file://.
   */
  function loadEncryptedData(docId) {
    var examId = getQueryParam('e') || getQueryParam('exam');
    var fetchUrl = examId
      ? 'data/' + encodeURIComponent(examId) + '/' + encodeURIComponent(docId) + '.enc'
      : 'data/' + encodeURIComponent(docId) + '.enc';

    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      return fetch(fetchUrl)
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP code ' + res.status);
          return res.arrayBuffer();
        })
        .then(function (buf) {
          return new Uint8Array(buf);
        })
        .catch(function (e) {
          console.warn('HTTP fetch failed, falling back to script injection:', e);
          return loadViaScriptTag(docId);
        });
    }
    return loadViaScriptTag(docId);
  }

  function loadViaScriptTag(docId) {
    return new Promise(function (resolve, reject) {
      window.__GRADALY_PAYLOAD__ = null;
      const script = document.createElement('script');
      script.src = 'data/' + encodeURIComponent(docId) + '.js';
      script.async = true;

      script.onload = function () {
        if (
          typeof window.__GRADALY_PAYLOAD__ === 'string' &&
          window.__GRADALY_PAYLOAD__.length > 0
        ) {
          try {
            const bytes = base64ToUint8Array(window.__GRADALY_PAYLOAD__);
            window.__GRADALY_PAYLOAD__ = null; // free memory
            resolve(bytes);
          } catch (err) {
            reject(
              new Error('Erreur de décodage des données (fichier JS corrompu) : ' + (err.message || err))
            );
          }
        } else {
          reject(
            new Error(
              'Données de copie introuvables dans data/' + docId + '.js.'
            )
          );
        }
      };

      script.onerror = function () {
        // As a last-ditch fallback, try fetch in case browser allows local file requests
        fetch('data/' + encodeURIComponent(docId) + '.enc')
          .then(function (res) {
            if (!res.ok) throw new Error('HTTP code ' + res.status);
            return res.arrayBuffer();
          })
          .then(function (buf) {
            resolve(new Uint8Array(buf));
          })
          .catch(function () {
            reject(
              new Error(
                'Impossible de charger les données du document (' +
                  docId +
                  '). Vérifiez que le dossier "data/" est bien situé à côté du fichier index.html.'
              )
            );
          });
      };

      document.head.appendChild(script);
    });
  }

  async function decryptAndRender(docId, keyString) {
    showView('view-loading');
    hideError();

    try {
      const fileBytes = await loadEncryptedData(docId);
      if (fileBytes.byteLength < 28) {
        throw new Error('Le fichier de données est corrompu ou incomplet.');
      }

      const iv = fileBytes.subarray(0, 12);
      const ciphertextWithTag = fileBytes.subarray(12);

      const rawKey = base64UrlToBytes(keyString);
      const cryptoKey = await window.crypto.subtle.importKey(
        'raw',
        rawKey,
        { name: 'AES-GCM' },
        false,
        ['decrypt']
      );

      const decryptedBuffer = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        cryptoKey,
        ciphertextWithTag
      );

      const jsonText = new TextDecoder('utf-8').decode(decryptedBuffer);
      currentData = JSON.parse(jsonText);

      if (!userOverrodeLang && currentData && currentData.lang) {
        const docLang = normalizePortalLang(currentData.lang);
        if (docLang) activePortalLang = docLang;
      }
      applyStaticDomLocalization();

      if (currentData && (currentData.mode === 'practice' || currentData.MODE === 'practice')) {
        renderPracticeApp(currentData);
        showView('view-dashboard');
        return;
      }

      renderDashboard(currentData);
      showView('view-dashboard');
    } catch (err) {
      console.error('Decryption failed:', err);
      showView('view-unlock');
      const msg =
        err && err.name === 'OperationError'
          ? L().wrongKeyErr
          : err && err.message
          ? err.message
          : L().wrongKeyErr;
      showError(msg);
    }
  }

  function renderDashboard(data) {
    const tr = L();
    applyStaticDomLocalization();
    // 1. Header & Meta
    const examTitle = data.examTitle || tr.examConsultation;
    document.title = (data.student && data.student.name ? data.student.name + ' — ' : '') + examTitle;

    const titleEl = document.getElementById('header-exam-title');
    if (titleEl) titleEl.textContent = examTitle;

    const docIdEl = document.getElementById('header-doc-id');
    if (docIdEl && currentDocId) docIdEl.textContent = 'Doc: ' + currentDocId;

    // Student identity
    const studentNameEl = document.getElementById('student-name');
    if (studentNameEl) {
      studentNameEl.textContent = (data.student && data.student.name) || tr.anonCopy;
    }

    const matriculeEl = document.getElementById('student-matricule');
    if (matriculeEl) {
      if (data.student && data.student.matricule) {
        matriculeEl.textContent = 'N° ' + data.student.matricule;
        matriculeEl.style.display = 'inline-flex';
      } else {
        matriculeEl.style.display = 'none';
      }
    }

    // Score
    const totalScore = (data.summary && typeof data.summary.totalScore === 'number') ? data.summary.totalScore : 0;
    const maxTotalScore = (data.summary && typeof data.summary.maxTotalScore === 'number') ? data.summary.maxTotalScore : 20;
    const pct = maxTotalScore > 0 ? Math.round((totalScore / maxTotalScore) * 1000) / 10 : 0;

    const scoreValEl = document.getElementById('total-score-val');
    if (scoreValEl) scoreValEl.textContent = Number(totalScore.toFixed(2));

    const maxScoreEl = document.getElementById('max-score-val');
    if (maxScoreEl) maxScoreEl.textContent = '/ ' + Number(maxTotalScore.toFixed(2));

    const scorePctEl = document.getElementById('score-pct-badge');
    if (scorePctEl) scorePctEl.textContent = pct + ' %';

    // Status badge
    const statusBadge = document.getElementById('grading-status-badge');
    if (statusBadge && data.summary && data.summary.status) {
      statusBadge.textContent = data.summary.status === 'COMPLETED' ? tr.gradedBadge : tr.inProgressBadge;
    }

    // 2. Setup Full PDF actions if available
    const headerDownloadBtn = document.getElementById('header-download-pdf-btn');
    const headerOpenPdfBtn = document.getElementById('header-open-pdf-btn');
    const toggleViewBtn = document.getElementById('btn-toggle-view-type');

    if (currentPdfBlobUrl) {
      URL.revokeObjectURL(currentPdfBlobUrl);
      currentPdfBlobUrl = null;
    }

    if (data.pdfBase64) {
      try {
        const pdfBytes = base64ToUint8Array(data.pdfBase64);
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        currentPdfBlobUrl = URL.createObjectURL(blob);

        const cleanName = ((data.student && data.student.name) || 'copie')
          .replace(/[^\p{L}\p{N}_\-]/gu, '_')
          .replace(/_+/g, '_');
        const filename = 'Copie_' + (cleanName || 'copie') + '.pdf';

        if (headerDownloadBtn) {
          headerDownloadBtn.href = currentPdfBlobUrl;
          headerDownloadBtn.download = filename;
          headerDownloadBtn.style.display = 'inline-flex';
        }

        if (headerOpenPdfBtn) {
          headerOpenPdfBtn.style.display = 'inline-flex';
        }

        if (toggleViewBtn) {
          toggleViewBtn.style.display = 'inline-flex';
        }
      } catch (e) {
        console.warn('PDF blob generation error:', e);
      }
    } else {
      if (headerDownloadBtn) headerDownloadBtn.style.display = 'none';
      if (headerOpenPdfBtn) headerOpenPdfBtn.style.display = 'none';
      if (toggleViewBtn) toggleViewBtn.style.display = 'none';
    }

    // 3. Setup Question Navigation Pills
    setupQuestionPills(data.questions || []);

    // 4. Build vertical stack of copy pages & render initial question
    renderedStageDocId = null;
    buildCopyPagesStack(data.pages || []);
    if (activeQuestionIndex >= (data.questions || []).length) {
      activeQuestionIndex = 0;
    }
    renderActiveQuestion();

    // 5. Render Summary View
    renderSummaryView(data);

    // Apply current mode
    setMode(currentMode || 'detailed');
  }

  function setupQuestionPills(questions) {
    const pillsContainer = document.getElementById('question-pills-container');
    if (!pillsContainer) return;
    pillsContainer.innerHTML = '';

    questions.forEach(function (q, idx) {
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'q-pill' + (idx === activeQuestionIndex ? ' active' : '');
      pill.id = 'pill-q-' + idx;

      const score = typeof q.score === 'number' ? q.score : 0;
      const max = typeof q.maxScore === 'number' ? q.maxScore : 0;

      const pageInfo = q.pageRange ? ' (p. ' + q.pageRange + ')' : '';
      pill.title = (q.title || ('Question ' + (idx + 1))) + pageInfo;

      pill.innerHTML =
        '<span class="q-pill-label">Q' + (idx + 1) + '</span>' +
        '<span class="q-pill-score">' + Number(score.toFixed(1)) + '/' + Number(max.toFixed(1)) + '</span>';

      pill.addEventListener('click', function () {
        selectQuestion(idx);
      });

      pillsContainer.appendChild(pill);
    });

    updateNavArrows();
  }

  function updateNavArrows() {
    const questions = (currentData && currentData.questions) || [];
    const prevBtn = document.getElementById('btn-prev-q');
    const nextBtn = document.getElementById('btn-next-q');

    if (prevBtn) prevBtn.disabled = activeQuestionIndex <= 0;
    if (nextBtn) nextBtn.disabled = activeQuestionIndex >= questions.length - 1;
  }

  function prevQuestion() {
    if (activeQuestionIndex > 0) {
      selectQuestion(activeQuestionIndex - 1);
    }
  }

  function nextQuestion() {
    const questions = (currentData && currentData.questions) || [];
    if (activeQuestionIndex < questions.length - 1) {
      selectQuestion(activeQuestionIndex + 1);
    }
  }

  function selectQuestion(index) {
    const questions = (currentData && currentData.questions) || [];
    if (index < 0 || index >= questions.length) return;

    activeQuestionIndex = index;
    currentActiveCopyPage = null; // reset to primary page of question

    // Update active pill
    questions.forEach(function (_, idx) {
      const pill = document.getElementById('pill-q-' + idx);
      if (pill) {
        if (idx === activeQuestionIndex) {
          pill.classList.add('active');
          pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          pill.classList.remove('active');
        }
      }
    });

    updateNavArrows();
    renderActiveQuestion();
  }

  function setCopyPage(pageNum) {
    currentActiveCopyPage = pageNum;
    if (!currentData) return;
    const questions = currentData.questions || [];
    const q = questions[activeQuestionIndex];
    if (q) {
      renderCopyPageAndOverlay(q);
    }
  }

  function renderActiveQuestion() {
    if (!currentData) return;
    const questions = currentData.questions || [];
    const q = questions[activeQuestionIndex];
    if (!q) return;

    // A. Render Right Console Card
    renderGradingConsole(q);

    // B. Render Left Copy Page & Bounding Box
    renderCopyPageAndOverlay(q);
  }

  function renderGradingConsole(q) {
    const cardEl = document.getElementById('active-question-card');
    if (!cardEl) return;

    const score = typeof q.score === 'number' ? q.score : 0;
    const max = typeof q.maxScore === 'number' ? q.maxScore : 0;
    const isHigh = max > 0 && (score / max) >= 0.7;

    // Mobile tab label update
    const mobileTabLabel = document.getElementById('mobile-grading-tab-label');
    if (mobileTabLabel) {
      mobileTabLabel.textContent = '📝 Q' + (activeQuestionIndex + 1) + ' (' + Number(score.toFixed(1)) + '/' + Number(max.toFixed(1)) + ')';
    }

    const tr = L();
    let originBadge = '';
    if (currentData.options && currentData.options.includeGradingOrigin && q.status) {
      const isAi = q.status.toUpperCase().includes('AI');
      originBadge = isAi
        ? '<span class="q-origin-badge ai">' + escapeHtml(tr.aiOriginBadge) + '</span>'
        : '<span class="q-origin-badge human">' + escapeHtml(tr.humanOriginBadge) + '</span>';
    }

    let scoreBadge = '';
    if (!currentData.options || currentData.options.includeScoreBadge !== false) {
      scoreBadge = '<span class="q-score-badge ' + (isHigh ? 'high' : '') + '">' + Number(score.toFixed(2)) + ' / ' + Number(max.toFixed(2)) + ' pts</span>';
    }

    // Criteria list
    let criteriaHtml = '';
    if ((!currentData.options || currentData.options.includeCriteria !== false) && q.criteria && q.criteria.length > 0) {
      criteriaHtml += '<div class="criteria-section"><div class="section-subtitle">' + escapeHtml(tr.rubricCriteriaTitle) + '</div>';
      q.criteria.forEach(function (c) {
        const isChecked = !!c.checked;
        const iconSvg = isChecked
          ? '<svg class="criterion-icon checked" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
          : '<svg class="criterion-icon unchecked" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>';

        const ptsSign = c.points > 0 ? '+' : '';
        const descContent = c.description_html || (c.description ? formatMarkdown(c.description) : '');
        const descHtml = descContent ? ('<div class="criterion-desc">' + descContent + '</div>') : '';

        criteriaHtml += '<div class="criterion-item ' + (isChecked ? 'checked' : '') + '">' +
          '<div class="criterion-info">' +
            iconSvg +
            '<div class="criterion-body">' +
              '<span class="criterion-label">' + escapeHtml(c.label) + '</span>' +
              descHtml +
            '</div>' +
          '</div>' +
          '<span class="criterion-pts">' + ptsSign + c.points + ' pt' + (Math.abs(c.points) > 1 ? 's' : '') + '</span>' +
          '</div>';
      });
      criteriaHtml += '</div>';
    }

    // Feedback
    let feedbackHtml = '';
    if ((!currentData.options || currentData.options.includeFeedback !== false) && q.feedback && q.feedback.trim()) {
      const fbBody = q.feedback_html || formatMarkdown(q.feedback);
      feedbackHtml = '<div class="feedback-box">' +
        '<div class="feedback-header">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
        '<span>' + escapeHtml(tr.feedbackBoxTitle) + '</span>' +
        '</div>' +
        '<div class="feedback-text">' + fbBody + '</div>' +
        '</div>';
    }

    // Justification
    let justificationHtml = '';
    if (currentData.options && currentData.options.includeJustification && q.justification && q.justification.trim()) {
      const justifBody = q.justification_html || formatMarkdown(q.justification);
      justificationHtml = '<div class="justification-box">' +
        '<div class="justification-header">' + escapeHtml(tr.justifBoxTitle) + '</div>' +
        '<div class="justification-text">' + justifBody + '</div>' +
        '</div>';
    }

    const questionsCount = (currentData.questions || []).length;
    const isFirst = activeQuestionIndex <= 0;
    const isLast = activeQuestionIndex >= questionsCount - 1;

    const pageBadge = q.pageRange ? '<span class="q-page-range-badge" style="display:inline-block;margin-top:3px;font-size:11.5px;font-weight:600;color:var(--slate-500);">Page ' + escapeHtml(q.pageRange) + '</span>' : '';

    cardEl.innerHTML =
      '<div class="grading-card-header">' +
        '<div class="q-title-area">' +
          '<span class="q-index-badge">Q' + (activeQuestionIndex + 1) + '</span>' +
          '<div>' +
            '<h3 class="q-title">' + escapeHtml(q.title || ('Q' + (activeQuestionIndex + 1))) + '</h3>' +
            pageBadge +
          '</div>' +
        '</div>' +
        '<div class="q-badges">' +
          scoreBadge +
          originBadge +
        '</div>' +
      '</div>' +
      criteriaHtml +
      feedbackHtml +
      justificationHtml +
      '<div class="card-nav-footer">' +
        '<button type="button" class="btn-card-nav" ' + (isFirst ? 'disabled' : '') + ' onclick="window.prevQuestion()">◀ ' + escapeHtml(tr.prevBtn) + '</button>' +
        '<span class="nav-hint">Q' + (activeQuestionIndex + 1) + ' / ' + questionsCount + '</span>' +
        '<button type="button" class="btn-card-nav" ' + (isLast ? 'disabled' : '') + ' onclick="window.nextQuestion()">' + escapeHtml(tr.nextBtn) + ' ▶</button>' +
      '</div>';
  }

  function buildCopyPagesStack(pages) {
    const copyStage = document.getElementById('copy-stage');
    if (!copyStage) return;
    const stageKey = (currentDocId || 'doc') + ':' + pages.length;
    if (renderedStageDocId === stageKey && copyStage.querySelectorAll('.copy-page-card').length > 0) {
      return;
    }
    renderedStageDocId = stageKey;
    copyStage.innerHTML = '';

    const totalPages = pages.length || 1;
    pages.forEach(function (pageDataUrl, pIdx) {
      if (!pageDataUrl) return;
      const pageCard = document.createElement('div');
      pageCard.className = 'copy-page-card';
      pageCard.id = 'copy-page-card-' + pIdx;
      pageCard.setAttribute('data-page-index', String(pIdx));

      const pageBadge = document.createElement('div');
      pageBadge.className = 'copy-page-number-badge';
      pageBadge.textContent = 'Page ' + (pIdx + 1) + ' / ' + totalPages;
      pageCard.appendChild(pageBadge);

      const pageInner = document.createElement('div');
      pageInner.className = 'copy-page-inner';

      const img = document.createElement('img');
      img.className = 'copy-img';
      img.id = 'copy-image-' + pIdx;
      img.src = pageDataUrl;
      img.alt = 'Copie page ' + (pIdx + 1);
      img.draggable = false;
      pageInner.appendChild(img);

      const overlaysLayer = document.createElement('div');
      overlaysLayer.className = 'overlays-layer';
      overlaysLayer.id = 'overlays-layer-' + pIdx;
      pageInner.appendChild(overlaysLayer);

      pageCard.appendChild(pageInner);
      copyStage.appendChild(pageCard);
    });
  }

  function renderCopyPageAndOverlay(q) {
    const pages = currentData.pages || [];
    const copyStage = document.getElementById('copy-stage');
    const pageLabel = document.getElementById('current-page-label');
    const bboxIndicator = document.getElementById('bbox-indicator');
    const copyViewport = document.getElementById('copy-viewport');

    if (!copyStage) return;
    buildCopyPagesStack(pages);

    const activeZones = getQuestionZonesList(q);
    const primaryPage = activeZones.length > 0 && typeof activeZones[0].page === 'number'
      ? activeZones[0].page
      : (typeof q.page === 'number' ? q.page : 0);

    const targetPage = typeof currentActiveCopyPage === 'number' ? currentActiveCopyPage : primaryPage;

    // Deduplicate pages for active question pills
    const uniqueActivePages = [];
    activeZones.forEach(function (z) {
      if (typeof z.page === 'number' && uniqueActivePages.indexOf(z.page) === -1) {
        uniqueActivePages.push(z.page);
      }
    });
    if (uniqueActivePages.length === 0) {
      uniqueActivePages.push(primaryPage);
    }

    if (pageLabel) {
      if (uniqueActivePages.length > 1) {
        let pageBtnsHtml = '<span class="toolbar-label">Pages :</span> ';
        uniqueActivePages.forEach(function (pIdx) {
          const isCur = pIdx === targetPage;
          pageBtnsHtml += '<button type="button" class="btn-page-pill ' + (isCur ? 'active' : '') + '" onclick="window.setCopyPage(' + pIdx + ')" style="padding: 2px 7px; margin-left: 4px; border-radius: 4px; font-size: 11px; font-weight: 700; cursor: pointer; border: 1px solid ' + (isCur ? 'var(--primary)' : 'var(--slate-300)') + '; background: ' + (isCur ? 'var(--primary)' : '#ffffff') + '; color: ' + (isCur ? '#ffffff' : 'var(--slate-700)') + ';">p. ' + (pIdx + 1) + '</button>';
        });
        pageBtnsHtml += ' <span style="font-size: 11px; color: var(--slate-400); margin-left: 6px;">(' + (pages.length || 1) + ' pages)</span>';
        pageLabel.innerHTML = pageBtnsHtml;
      } else {
        pageLabel.textContent = 'Page ' + (targetPage + 1) + ' / ' + (pages.length || 1);
      }
    }

    // Clear previous overlays across all pages
    const allLayers = copyStage.querySelectorAll('.overlays-layer');
    allLayers.forEach(function (layer) {
      layer.innerHTML = '';
    });

    const questions = currentData.questions || [];
    let hasTargetBbox = false;
    let targetScrollEl = null;

    // Draw bounding boxes for all questions/zones across all pages
    questions.forEach(function (otherQ, otherIdx) {
      const otherZones = getQuestionZonesList(otherQ);
      const isActive = otherIdx === activeQuestionIndex;

      otherZones.forEach(function (z, zIdx) {
        const zPage = typeof z.page === 'number' ? z.page : 0;
        const pageLayer = document.getElementById('overlays-layer-' + zPage);
        if (!pageLayer || !z.bbox_rel || z.bbox_rel.length !== 4) return;
        const bbox = z.bbox_rel; // [x1, y1, x2, y2]

        const boxDiv = document.createElement('div');
        boxDiv.className = 'bbox-overlay ' + (isActive ? 'active' : 'inactive');
        boxDiv.style.left = (bbox[0] * 100) + '%';
        boxDiv.style.top = (bbox[1] * 100) + '%';
        boxDiv.style.width = ((bbox[2] - bbox[0]) * 100) + '%';
        boxDiv.style.height = ((bbox[3] - bbox[1]) * 100) + '%';

        if (isActive) {
          hasTargetBbox = true;
          if (!targetScrollEl || zPage === targetPage) {
            if (!targetScrollEl || (zPage === targetPage && targetScrollEl.getAttribute('data-zone-page') !== String(targetPage))) {
              targetScrollEl = boxDiv;
              boxDiv.setAttribute('data-zone-page', String(zPage));
            }
          }
          const scoreStr = typeof otherQ.score === 'number' && typeof otherQ.maxScore === 'number'
            ? ' — ' + Number(otherQ.score.toFixed(1)) + '/' + Number(otherQ.maxScore.toFixed(1)) + ' pts'
            : '';
          const multiTag = otherZones.length > 1
            ? ' (' + (zIdx + 1) + '/' + otherZones.length + ' • p. ' + (zPage + 1) + ')'
            : '';
          boxDiv.innerHTML = '<div class="bbox-badge">Q' + (otherIdx + 1) + multiTag + scoreStr + '</div>';
        } else {
          boxDiv.title = (otherQ.title || ('Q' + (otherIdx + 1))) + ' (' + L().clickToOpen + ')';
          boxDiv.addEventListener('click', function () {
            selectQuestion(otherIdx);
          });
        }

        pageLayer.appendChild(boxDiv);
      });
    });

    if (bboxIndicator) {
      bboxIndicator.style.display = hasTargetBbox ? 'inline-block' : 'none';
      if (hasTargetBbox) {
        const multiTag = uniqueActivePages.length > 1
          ? ' (pages ' + uniqueActivePages.map(function (p) { return p + 1; }).join(', ') + ')'
          : ' (p. ' + (targetPage + 1) + ')';
        bboxIndicator.textContent = L().targetedZone + ' Q' + (activeQuestionIndex + 1) + multiTag;
      }
    }

    if (!targetScrollEl) {
      targetScrollEl = document.getElementById('copy-page-card-' + targetPage);
    }

    // Auto-scroll to center the active bounding box (or page card) in the vertical copy viewport
    if (targetScrollEl && copyViewport) {
      const performScroll = function () {
        const viewportRect = copyViewport.getBoundingClientRect();
        const elRect = targetScrollEl.getBoundingClientRect();
        if (viewportRect.height <= 0 || elRect.height <= 0) return;
        const offsetInViewport = elRect.top - viewportRect.top;
        const desiredOffset = elRect.height < viewportRect.height * 0.75
          ? (viewportRect.height - elRect.height) / 2
          : 28;
        const targetScrollTop = copyViewport.scrollTop + offsetInViewport - desiredOffset;
        copyViewport.scrollTo({
          top: Math.max(0, targetScrollTop),
          behavior: 'smooth',
        });
      };

      setTimeout(performScroll, 60);
      const targetImg = document.getElementById('copy-image-' + targetPage);
      if (targetImg && !targetImg.complete) {
        targetImg.addEventListener('load', function () {
          setTimeout(performScroll, 30);
        }, { once: true });
      }
    }
  }

  // Toggle between interactive cropped page view and full PDF iframe
  function toggleCopyViewType() {
    isShowingFullPdf = !isShowingFullPdf;
    const viewport = document.getElementById('copy-viewport');
    const pdfContainer = document.getElementById('copy-pdf-container');
    const pdfIframe = document.getElementById('copy-pdf-iframe');
    const btnText = document.getElementById('btn-toggle-view-text');
    const zoomControls = document.getElementById('toolbar-zoom-controls');

    if (isShowingFullPdf) {
      if (viewport) viewport.style.display = 'none';
      if (pdfContainer) pdfContainer.style.display = 'flex';
      if (zoomControls) zoomControls.style.display = 'none';
      if (btnText) btnText.textContent = L().viewByQuestion;
      if (pdfIframe && currentPdfBlobUrl && pdfIframe.src !== currentPdfBlobUrl) {
        pdfIframe.src = currentPdfBlobUrl;
      }
    } else {
      if (viewport) viewport.style.display = 'flex';
      if (pdfContainer) pdfContainer.style.display = 'none';
      if (zoomControls) zoomControls.style.display = 'flex';
      if (btnText) btnText.textContent = L().viewFullPdf;
      renderActiveQuestion();
    }
  }

  function openPdfInNewTab() {
    if (currentPdfBlobUrl) {
      window.open(currentPdfBlobUrl, '_blank');
    }
  }

  // Zoom controls
  function zoomIn() {
    currentZoom = Math.min(2.5, Math.round((currentZoom + 0.25) * 100) / 100);
    applyZoom();
  }

  function zoomOut() {
    currentZoom = Math.max(0.6, Math.round((currentZoom - 0.25) * 100) / 100);
    applyZoom();
  }

  function zoomFitWidth() {
    currentZoom = 1.0;
    applyZoom();
  }

  function applyZoom() {
    const stage = document.getElementById('copy-stage');
    const zoomText = document.getElementById('zoom-level-text');
    if (stage) {
      stage.style.width = (currentZoom * 100) + '%';
      stage.style.maxWidth = currentZoom === 1.0 ? '800px' : 'none';
    }
    if (zoomText) {
      zoomText.textContent = Math.round(currentZoom * 100) + '%';
    }
  }

  // Mobile pane switcher
  function setMobilePane(pane) {
    mobilePane = pane;
    const copyPanel = document.getElementById('copy-panel');
    const gradingPanel = document.getElementById('grading-panel');
    const btnCopy = document.getElementById('btn-mobile-copy');
    const btnGrading = document.getElementById('btn-mobile-grading');

    if (pane === 'copy') {
      if (copyPanel) copyPanel.classList.remove('hidden-mobile');
      if (gradingPanel) gradingPanel.classList.add('hidden-mobile');
      if (btnCopy) btnCopy.classList.add('active');
      if (btnGrading) btnGrading.classList.remove('active');
    } else {
      if (gradingPanel) gradingPanel.classList.remove('hidden-mobile');
      if (copyPanel) copyPanel.classList.add('hidden-mobile');
      if (btnGrading) btnGrading.classList.add('active');
      if (btnCopy) btnCopy.classList.remove('active');
    }
  }

  // Mode switcher: 'detailed' (or alias 'corrector') vs 'summary'
  function setMode(mode) {
    // Support 'corrector' as alias for 'detailed'
    const targetMode = mode === 'summary' ? 'summary' : 'detailed';
    currentMode = targetMode;

    const btnDetailed = document.getElementById('btn-mode-detailed') || document.getElementById('btn-mode-corrector');
    const btnSummary = document.getElementById('btn-mode-summary');
    const detailedView = document.getElementById('mode-detailed-view') || document.getElementById('mode-corrector-view');
    const summaryView = document.getElementById('mode-summary-view');

    if (targetMode === 'detailed') {
      if (btnDetailed) btnDetailed.classList.add('active');
      if (btnSummary) btnSummary.classList.remove('active');
      if (detailedView) detailedView.style.display = 'flex';
      if (summaryView) summaryView.style.display = 'none';
      renderActiveQuestion();
    } else {
      if (btnSummary) btnSummary.classList.add('active');
      if (btnDetailed) btnDetailed.classList.remove('active');
      if (summaryView) summaryView.style.display = 'block';
      if (detailedView) detailedView.style.display = 'none';
    }
  }

  // Summary View rendering (full vertical list of all questions)
  function renderSummaryView(data) {
    const tr = L();
    const listEl = document.getElementById('questions-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    const questions = data.questions || [];
    if (questions.length === 0) {
      listEl.innerHTML = '<div class="state-card"><p>' + escapeHtml(tr.noQuestionsMsg) + '</p></div>';
      return;
    }

    questions.forEach(function (q, idx) {
      const card = document.createElement('div');
      card.className = 'question-summary-card';

      const score = typeof q.score === 'number' ? q.score : 0;
      const max = typeof q.maxScore === 'number' ? q.maxScore : 0;
      const isHigh = max > 0 && (score / max) >= 0.7;

      let originBadge = '';
      if (data.options && data.options.includeGradingOrigin && q.status) {
        const isAi = q.status.toUpperCase().includes('AI');
        originBadge = isAi
          ? '<span class="q-origin-badge ai">' + escapeHtml(tr.aiOriginBadge) + '</span>'
          : '<span class="q-origin-badge human">' + escapeHtml(tr.humanOriginBadge) + '</span>';
      }

      let scoreBadge = '';
      if (!data.options || data.options.includeScoreBadge !== false) {
        scoreBadge = '<span class="q-score-badge ' + (isHigh ? 'high' : '') + '">' + Number(score.toFixed(2)) + ' / ' + Number(max.toFixed(2)) + ' pts</span>';
      }

      let criteriaHtml = '';
      if ((!data.options || data.options.includeCriteria !== false) && q.criteria && q.criteria.length > 0) {
        criteriaHtml += '<div class="criteria-section"><div class="section-subtitle">' + escapeHtml(tr.rubricCriteriaTitle) + '</div>';
        q.criteria.forEach(function (c) {
          const isChecked = !!c.checked;
          const iconSvg = isChecked
            ? '<svg class="criterion-icon checked" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
            : '<svg class="criterion-icon unchecked" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>';

          const ptsSign = c.points > 0 ? '+' : '';
          const descContent = c.description_html || (c.description ? formatMarkdown(c.description) : '');
          const descHtml = descContent ? ('<div class="criterion-desc">' + descContent + '</div>') : '';

          criteriaHtml += '<div class="criterion-item ' + (isChecked ? 'checked' : '') + '">' +
            '<div class="criterion-info">' +
              iconSvg +
              '<div class="criterion-body">' +
                '<span class="criterion-label">' + escapeHtml(c.label) + '</span>' +
                descHtml +
              '</div>' +
            '</div>' +
            '<span class="criterion-pts">' + ptsSign + c.points + ' pt' + (Math.abs(c.points) > 1 ? 's' : '') + '</span>' +
            '</div>';
        });
        criteriaHtml += '</div>';
      }

      let feedbackHtml = '';
      if ((!data.options || data.options.includeFeedback !== false) && q.feedback && q.feedback.trim()) {
        const fbBody = q.feedback_html || formatMarkdown(q.feedback);
        feedbackHtml = '<div class="feedback-box">' +
          '<div class="feedback-header">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
          '<span>' + escapeHtml(tr.feedbackBoxTitle) + '</span>' +
          '</div>' +
          '<div class="feedback-text">' + fbBody + '</div>' +
          '</div>';
      }

      let justificationHtml = '';
      if (data.options && data.options.includeJustification && q.justification && q.justification.trim()) {
        const justifBody = q.justification_html || formatMarkdown(q.justification);
        justificationHtml = '<div class="justification-box">' +
          '<div class="justification-header">' + escapeHtml(tr.justifBoxTitle) + '</div>' +
          '<div class="justification-text">' + justifBody + '</div>' +
          '</div>';
      }

      const pageBadge = q.pageRange ? '<span class="q-page-range-badge" style="display:inline-block;margin-top:3px;font-size:11.5px;font-weight:600;color:var(--slate-500);">Page ' + escapeHtml(q.pageRange) + '</span>' : '';

      card.innerHTML =
        '<div class="summary-card-header">' +
          '<div class="q-title-area">' +
            '<span class="q-index-badge">Q' + (idx + 1) + '</span>' +
            '<div>' +
              '<h3 class="q-title">' + escapeHtml(q.title || ('Question ' + (idx + 1))) + '</h3>' +
              pageBadge +
            '</div>' +
          '</div>' +
          '<div class="q-badges">' +
            scoreBadge +
            originBadge +
          '</div>' +
        '</div>' +
        '<div class="summary-card-body">' +
          criteriaHtml +
          feedbackHtml +
          justificationHtml +
        '</div>';

      listEl.appendChild(card);
    });
  }

  // Keyboard navigation (Arrow keys)
  window.addEventListener('keydown', function (e) {
    if (currentMode !== 'detailed' && currentMode !== 'corrector') return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

    if (e.key === 'ArrowLeft') {
      prevQuestion();
    } else if (e.key === 'ArrowRight') {
      nextQuestion();
    }
  });

  // ==========================================================================
  // PRACTICE SELF-ASSESSMENT MODE (100% CLIENT-SIDE BYOK + SMARTPHONE CAMERA)
  // ==========================================================================
  let practiceState = {
    data: null,
    activeIdx: 0,
    photosByQuestion: {}, // qId -> array of cropped data:image/jpeg;base64,...
    originalPhotosByQuestion: {}, // qId -> array of uncropped source data:image/jpeg;base64,...
    attemptsByQuestion: {}, // qId -> { score, maxScore, criteria, feedback, justification, timestamp }
    isGrading: false,
    gradingError: null,
    showByokModal: false,
    cropModal: null, // { qId, editIdx, sourceDataUrl, box: { x1, y1, x2, y2 }, pendingQueue: [] }
    showStatementByQuestion: {},
    katexLoaded: false,
  };

  function ensureKatexLoaded(callback) {
    if (window.katex) {
      if (callback) callback();
      return;
    }
    if (practiceState.katexLoaded) return;
    practiceState.katexLoaded = true;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';
    script.async = true;
    script.onload = function () {
      if (callback) callback();
    };
    document.head.appendChild(script);
  }

  function renderMathAndMarkdown(text) {
    if (!text) return '';
    let str = String(text);
    const mathBlocks = [];
    // Extract display math $$...$$
    str = str.replace(/\$\$([\s\S]+?)\$\$/g, function (_, tex) {
      const idx = mathBlocks.length;
      mathBlocks.push({ tex: tex.trim(), display: true });
      return '@@MATH_BLOCK_' + idx + '@@';
    });
    // Extract inline math $...$
    str = str.replace(/\$([^\$\n]+?)\$/g, function (_, tex) {
      const idx = mathBlocks.length;
      mathBlocks.push({ tex: tex.trim(), display: false });
      return '@@MATH_BLOCK_' + idx + '@@';
    });

    let html = formatMarkdown(str).replace(/\n/g, '<br>');

    html = html.replace(/@@MATH_BLOCK_(\d+)@@/g, function (_, idxStr) {
      const item = mathBlocks[parseInt(idxStr, 10)];
      if (!item) return '';
      if (window.katex && typeof window.katex.renderToString === 'function') {
        try {
          return window.katex.renderToString(item.tex, {
            displayMode: item.display,
            output: 'mathml',
            throwOnError: false,
          });
        } catch {}
      }
      return '<code style="background:#eef2ff;color:#3730a3;padding:2px 6px;border-radius:4px;">' + escapeHtml(item.tex) + '</code>';
    });

    return html;
  }

  function readByokCookie() {
    try {
      const m = document.cookie.match(/(?:^|;\s*)gradaly_byok_key=([^;]*)/);
      if (m && m[1]) {
        return decodeURIComponent(m[1]);
      }
    } catch {}
    return '';
  }

  function writeByokCookie(apiKey) {
    try {
      const clean = (apiKey || '').trim();
      const secureFlag = window.location && window.location.protocol === 'https:' ? '; Secure' : '';
      if (clean) {
        document.cookie =
          'gradaly_byok_key=' +
          encodeURIComponent(clean) +
          '; path=/; max-age=31536000; SameSite=Lax' +
          secureFlag;
      } else {
        document.cookie =
          'gradaly_byok_key=; path=/; max-age=0; SameSite=Lax' + secureFlag;
      }
    } catch {}
  }

  function loadByokConfig() {
    let apiKey = '';
    try {
      const raw = localStorage.getItem('gradaly_practice_byok_v1');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object' && parsed.apiKey) {
          apiKey = String(parsed.apiKey).trim();
        }
      }
    } catch {}

    if (!apiKey) {
      const cookieKey = readByokCookie();
      if (cookieKey) {
        apiKey = cookieKey.trim();
        try {
          localStorage.setItem(
            'gradaly_practice_byok_v1',
            JSON.stringify({ provider: 'gemini', apiKey: apiKey, model: 'gemini-3.8-flash' })
          );
        } catch {}
      }
    }

    if (!apiKey && practiceState && practiceState.draftApiKey) {
      apiKey = String(practiceState.draftApiKey).trim();
    }

    return {
      provider: 'gemini',
      apiKey: apiKey,
      model: 'gemini-3.8-flash',
    };
  }

  function saveByokConfig(cfg) {
    const cleanKey = cfg && cfg.apiKey ? String(cfg.apiKey).trim() : '';
    if (practiceState) {
      practiceState.draftApiKey = cleanKey;
    }
    const normalized = {
      provider: 'gemini',
      apiKey: cleanKey,
      model: 'gemini-3.8-flash',
    };
    try {
      localStorage.setItem('gradaly_practice_byok_v1', JSON.stringify(normalized));
    } catch {}
    writeByokCookie(cleanKey);
  }

  function getPracticeStorageKey(data) {
    const exId = getQueryParam('e') || getQueryParam('exam') || (data && data.examTitle) || 'default';
    return 'gradaly_practice_attempts_' + exId;
  }

  function getOrCreatePracticeDeviceId() {
    const storageKey = 'gradaly_device_id_v1';
    try {
      const existing = localStorage.getItem(storageKey);
      if (existing && existing.length >= 12) return existing;
    } catch {}
    const rand =
      'gdv_' +
      Date.now().toString(36) +
      '_' +
      Math.random().toString(36).substring(2, 10) +
      Math.random().toString(36).substring(2, 10);
    try {
      localStorage.setItem(storageKey, rand);
    } catch {}
    return rand;
  }

  function getPracticeRelayExamId() {
    return getQueryParam('e') || getQueryParam('exam') || '';
  }

  function hasPracticeServerRelay() {
    const exId = getPracticeRelayExamId();
    const isHttp =
      window.location &&
      (window.location.protocol === 'http:' || window.location.protocol === 'https:');
    return Boolean(exId && isHttp && !window.__GRADALY_PRACTICE_PREVIEW__);
  }

  function isServerRelayAvailable() {
    if (!hasPracticeServerRelay()) return false;
    if (practiceState && practiceState.relayStatus && practiceState.relayStatus.available === false) {
      return false;
    }
    return true;
  }

  function fetchPracticeRelayStatus() {
    if (!hasPracticeServerRelay()) return;
    const exId = getPracticeRelayExamId();
    fetch('/api/exams/' + encodeURIComponent(exId) + '/practice-ai-status', {
      method: 'GET',
      headers: {
        'X-Gradaly-Device-Id': getOrCreatePracticeDeviceId(),
      },
    })
      .then(function (r) {
        return r.json();
      })
      .then(function (statusObj) {
        if (statusObj && typeof statusObj === 'object') {
          practiceState.relayStatus = statusObj;
          if (practiceState.data) renderPracticeView();
        }
      })
      .catch(function () {});
  }

  function loadSavedAttempts(data) {
    try {
      const raw = localStorage.getItem(getPracticeStorageKey(data));
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') return parsed;
      }
    } catch {}
    return {};
  }

  function saveAttemptForQuestion(data, qId, attemptObj) {
    practiceState.attemptsByQuestion[qId] = attemptObj;
    try {
      localStorage.setItem(getPracticeStorageKey(data), JSON.stringify(practiceState.attemptsByQuestion));
    } catch {}
  }

  function compressImageFileToDataUrl(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
          const maxDim = 1600;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w >= h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', 0.85));
        };
        img.onerror = function () {
          reject(new Error('Image invalide'));
        };
        img.src = e.target.result;
      };
      reader.onerror = function () {
        reject(new Error('Erreur de lecture du fichier image'));
      };
      reader.readAsDataURL(file);
    });
  }

  function rotateDataUrl90(dataUrl, direction) {
    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = img.height;
        canvas.height = img.width;
        const ctx = canvas.getContext('2d');
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((direction * Math.PI) / 2);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
        resolve(canvas.toDataURL('image/jpeg', 0.88));
      };
      img.onerror = function () {
        reject(new Error('Impossible de pivoter l\'image'));
      };
      img.src = dataUrl;
    });
  }

  function cropDataUrlWithBox(dataUrl, box) {
    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.onload = function () {
        const x1 = Math.max(0, Math.min(0.98, box.x1));
        const y1 = Math.max(0, Math.min(0.98, box.y1));
        const x2 = Math.max(x1 + 0.02, Math.min(1, box.x2));
        const y2 = Math.max(y1 + 0.02, Math.min(1, box.y2));

        const sx = Math.round(x1 * img.width);
        const sy = Math.round(y1 * img.height);
        const sw = Math.max(16, Math.round((x2 - x1) * img.width));
        const sh = Math.max(16, Math.round((y2 - y1) * img.height));

        const canvas = document.createElement('canvas');
        canvas.width = sw;
        canvas.height = sh;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
        resolve(canvas.toDataURL('image/jpeg', 0.88));
      };
      img.onerror = function () {
        reject(new Error('Impossible de recadrer l\'image'));
      };
      img.src = dataUrl;
    });
  }

  function roundHalf(val) {
    return Math.round(Number(val || 0) * 2) / 2;
  }

  function cleanLatexControlChars(str) {
    if (!str || typeof str !== 'string') return str;
    return str
      .replace(/\x0c/g, '\\f')
      .replace(/\x08/g, '\\b')
      .replace(/[\x00-\x07\x0b\x0e-\x1f\x7f]/g, '');
  }

  function cleanLatexControlCharsInObj(obj) {
    if (!obj) return obj;
    if (typeof obj === 'string') return cleanLatexControlChars(obj);
    if (Array.isArray(obj)) return obj.map(cleanLatexControlCharsInObj);
    if (typeof obj === 'object') {
      const out = {};
      Object.keys(obj).forEach(function (k) {
        out[k] = cleanLatexControlCharsInObj(obj[k]);
      });
      return out;
    }
    return obj;
  }

  function sanitizeLatexJsonEscapes(jsonStr) {
    if (!jsonStr) return '';
    let result = '';
    let inString = false;
    let i = 0;
    const len = jsonStr.length;
    const nLatexRegex = /^(nu|nabla|neq|neg|notin|norm|natural|nearrow|nwarrow|nsubseteq|nexists|not|null|ne)([^a-zA-Z]|$)/;

    while (i < len) {
      const ch = jsonStr[i];
      if (!inString) {
        if (ch === '"') inString = true;
        result += ch;
        i++;
        continue;
      }
      if (ch === '"') {
        inString = false;
        result += ch;
        i++;
        continue;
      }
      if (ch === '\n') {
        result += '\\n';
        i++;
        continue;
      }
      if (ch === '\r') {
        if (i + 1 < len && jsonStr[i + 1] === '\n') i++;
        result += '\\n';
        i++;
        continue;
      }
      if (ch === '\\') {
        if (i + 1 >= len) {
          result += '\\\\';
          i++;
          continue;
        }
        const next = jsonStr[i + 1];
        if (next === '"' || next === '\\' || next === '/') {
          result += ch + next;
          i += 2;
          continue;
        }
        if (next === 'u') {
          const hex = jsonStr.slice(i + 2, i + 6);
          if (/^[0-9a-fA-F]{4}$/.test(hex)) {
            result += ch + next + hex;
            i += 6;
            continue;
          } else {
            result += '\\\\u';
            i += 2;
            continue;
          }
        }
        if (next === 'f') {
          result += '\\\\f';
          i += 2;
          continue;
        }
        if (next === 'b') {
          result += '\\\\b';
          i += 2;
          continue;
        }
        if (next === 't') {
          const afterNext = i + 2 < len ? jsonStr[i + 2] : '';
          result += /^[a-zA-Z]$/.test(afterNext) ? '\\\\t' : '\\t';
          i += 2;
          continue;
        }
        if (next === 'r') {
          const afterNext = i + 2 < len ? jsonStr[i + 2] : '';
          result += /^[a-zA-Z]$/.test(afterNext) ? '\\\\r' : '\\r';
          i += 2;
          continue;
        }
        if (next === 'n') {
          const rest = jsonStr.slice(i + 1);
          result += nLatexRegex.test(rest) ? '\\\\n' : '\\n';
          i += 2;
          continue;
        }
        // Any other escape (\pi, \sqrt, \cos, \sin, \theta, \alpha, \pm, etc.) is LaTeX -> double the backslash
        result += '\\\\' + next;
        i += 2;
        continue;
      }
      result += ch;
      i++;
    }
    return result;
  }

  function repairTruncatedJsonStr(jsonStr) {
    let s = (jsonStr || '').trim().replace(/,\s*$/, '');
    if (!s) return '{}';
    let inString = false;
    let isEscaped = false;
    const openStack = [];
    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      if (inString) {
        if (isEscaped) isEscaped = false;
        else if (ch === '\\') isEscaped = true;
        else if (ch === '"') inString = false;
      } else {
        if (ch === '"') inString = true;
        else if (ch === '{') openStack.push('}');
        else if (ch === '[') openStack.push(']');
        else if ((ch === '}' || ch === ']') && openStack.length > 0 && openStack[openStack.length - 1] === ch) {
          openStack.pop();
        }
      }
    }
    let repaired = s;
    if (inString) repaired += '"';
    repaired = repaired.replace(/,\s*$/, '');
    while (openStack.length > 0) {
      const closing = openStack.pop();
      repaired = repaired.replace(/,\s*$/, '') + closing;
    }
    return repaired.replace(/,(\s*[}\]])/g, '$1');
  }

  function safeParsePracticeJson(rawText) {
    let text = String(rawText || '').trim();
    if (text.startsWith('```')) {
      text = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
    }
    const firstBrace = text.indexOf('{');
    if (firstBrace > 0) {
      text = text.slice(firstBrace);
    }
    const sanitized = sanitizeLatexJsonEscapes(text.trim());
    try {
      return cleanLatexControlCharsInObj(JSON.parse(sanitized));
    } catch (e1) {
      try {
        return cleanLatexControlCharsInObj(JSON.parse(repairTruncatedJsonStr(sanitized)));
      } catch {
        throw e1;
      }
    }
  }

  async function callClientSideLlmForPractice(question, photos, data, byok) {
    const effLang = activePortalLang || normalizePortalLang(data.lang) || 'fr';
    const isFr = effLang === 'fr';
    const targetLangName = (PORTAL_I18N[effLang] || PORTAL_I18N.en).langNameEn;
    const aiSettings = data.aiSettings || {};
    const tone = aiSettings.feedbackTone || 'second_person';
    let toneInstruction = !isFr
      ? 'Address the student directly in the second person in ' + targetLangName + '. Be encouraging, rigorous, and formative.'
      : "Adresse-toi directement à l'étudiant à la deuxième personne (« tu » ou « vous »). Sois bienveillant, rigoureux et formateur.";
    if (tone === 'third_person') {
      toneInstruction = !isFr
        ? 'Use a neutral third-person academic tone in ' + targetLangName + '.'
        : "Utilise un ton académique neutre à la troisième personne (« L'étudiant... »).";
    }

    const criteriaListText = (question.criteria || [])
      .map(function (c, i) {
        const sign = c.points >= 0 ? '+' : '';
        const desc = c.description ? ' — ' + c.description : '';
        return (i + 1) + '. "' + c.label + '" (' + sign + c.points + ' pts)' + desc;
      })
      .join('\n');

    const mathInstruction = aiSettings.enforceMathKatex !== false
      ? (!isFr
          ? 'Format all mathematical expressions and symbols using LaTeX enclosed in single dollar signs $...$ for inline math or double dollar signs $$...$$ for display equations. All LaTeX backslashes in JSON strings MUST be escaped with double backslashes (e.g. \\\\pi, \\\\frac{a}{b}, \\\\sqrt{x}, \\\\cos, \\\\sin) to remain valid JSON.'
          : 'Formate toutes les expressions et symboles mathématiques en LaTeX entouré de simples dollars $...$ (en ligne) ou doubles dollars $$...$$ (équation centrée). Tous les antislashs LaTeX dans les chaînes JSON DOIVENT être doublés (ex: \\\\pi, \\\\frac{a}{b}, \\\\sqrt{x}, \\\\cos, \\\\sin) pour que le JSON reste valide.')
      : '';

    const customFb = aiSettings.customFeedbackInstructions
      ? '\n' + (!isFr ? 'Additional feedback instructions: ' : 'Consignes supplémentaires pour le feedback : ') + aiSettings.customFeedbackInstructions
      : '';
    const customJustif = aiSettings.customJustificationInstructions
      ? '\n' + (!isFr ? 'Additional justification instructions: ' : 'Consignes supplémentaires pour la justification : ') + aiSettings.customJustificationInstructions
      : '';

    const promptText = !isFr
      ? 'You are an expert academic grading assistant for a student self-assessment exercise.\n' +
        'CRITICAL LANGUAGE REQUIREMENT: Both "feedback" and "justification" MUST be written strictly in ' + targetLangName + '.\n' +
        'Question: ' + (question.title || question.id) + ' (Base score: ' + (question.baseScore || 0) + ', Max score: ' + (question.maxScore || 0) + ' pts)\n' +
        (question.promptText ? 'Question instructions: ' + question.promptText + '\n' : '') +
        '\nIMPORTANT DISTINCTION BETWEEN PROVIDED IMAGES:\n' +
        '- The QUESTION STATEMENT image(s) come from the teacher\'s exam canvas and show the exact problem statement and question asked.\n' +
        '- The STUDENT HANDWRITTEN ANSWER image(s) were photographed and cropped by the student on their smartphone (often written on a separate blank sheet of paper without repeating the question statement).\n' +
        '- You MUST read the problem from the Question Statement image(s) and evaluate the student\'s handwritten answer image(s) against the rubric criteria below.\n\n' +
        'Rubric criteria (evaluate each criterion strictly as true or false based on the student\'s handwritten answer):\n' +
        criteriaListText + '\n\n' +
        toneInstruction + '\n' +
        mathInstruction + customFb + customJustif + '\n\n' +
        'Respond ONLY with a valid JSON object matching this exact structure (no markdown fences):\n' +
        '{\n' +
        '  "criteria": { "<exact criterion label>": true or false },\n' +
        '  "feedback": "<constructive formative feedback for the student written in ' + targetLangName + '>",\n' +
        '  "justification": "<detailed explanation of why each criterion was awarded or not, written in ' + targetLangName + '>"\n' +
        '}'
      : 'Tu es un assistant pédagogique expert évaluant la réponse manuscrite d\'un étudiant lors d\'un exercice d\'entraînement en auto-évaluation.\n' +
        'Question : ' + (question.title || question.id) + ' (Score de base : ' + (question.baseScore || 0) + ', Note maximale : ' + (question.maxScore || 0) + ' pts)\n' +
        (question.promptText ? 'Consignes de la question : ' + question.promptText + '\n' : '') +
        '\nDISTINCTION IMPORTANTE ENTRE LES IMAGES FOURNIES :\n' +
        '- Les images étiquetées « ÉNONCÉ OFFICIEL DE LA QUESTION » proviennent du canevas de l\'enseignant : elles contiennent l\'énoncé exact du problème posé.\n' +
        '- Les images étiquetées « RÉPONSE MANUSCRITE DE L\'ÉTUDIANT » ont été photographiées et recadrées par l\'étudiant avec son smartphone (souvent rédigées sur une feuille libre externe et ne contenant donc PAS l\'énoncé imprimé).\n' +
        '- Tu dois impérativement lire la question dans l\'image de l\'ÉNONCÉ OFFICIEL, puis évaluer l\'image de la RÉPONSE MANUSCRITE DE L\'ÉTUDIANT selon les critères du barème ci-dessous.\n\n' +
        'Critères du barème (évalue strictement chaque critère par true ou false en analysant la réponse manuscrite de l\'étudiant) :\n' +
        criteriaListText + '\n\n' +
        toneInstruction + '\n' +
        mathInstruction + customFb + customJustif + '\n\n' +
        'Réponds UNIQUEMENT par un objet JSON valide respectant exactement cette structure (sans balises markdown) :\n' +
        '{\n' +
        '  "criteria": { "<libellé exact du critère>": true ou false },\n' +
        '  "feedback": "<commentaire formateur et constructif destiné à l\'étudiant>",\n' +
        '  "justification": "<explication détaillée de l\'analyse de la copie et de chaque critère>"\n' +
        '}';

    // Collect images: 1. Blank canvas statement crops, 2. Reference solution crops (if any), 3. Student photos
    const imageParts = [];
    (question.canvasCrops || []).forEach(function (dataUrl, idx) {
      imageParts.push({
        label: !isFr
          ? '[OFFICIAL QUESTION STATEMENT - Image ' + (idx + 1) + ' (from teacher canvas — this is the question asked)]:'
          : '[ÉNONCÉ OFFICIEL DE LA QUESTION - Image ' + (idx + 1) + ' (issue du canevas de l\'enseignant — c\'est la question posée)] :',
        dataUrl: dataUrl,
      });
    });
    (question.solutionCrops || []).forEach(function (dataUrl, idx) {
      imageParts.push({
        label: !isFr
          ? '[OFFICIAL REFERENCE SOLUTION - Image ' + (idx + 1) + ' (teacher answer key for grading reference)]:'
          : '[CORRIGÉ TYPE DE RÉFÉRENCE - Image ' + (idx + 1) + ' (solutionnaire de l\'enseignant pour guider l\'évaluation)] :',
        dataUrl: dataUrl,
      });
    });
    photos.forEach(function (dataUrl, idx) {
      imageParts.push({
        label: !isFr
          ? '[STUDENT HANDWRITTEN ANSWER - Photo ' + (idx + 1) + ' (cropped by student from their sheet — evaluate this answer against the statement above)]:'
          : '[RÉPONSE MANUSCRITE DE L\'ÉTUDIANT - Photo ' + (idx + 1) + ' (recadrée par l\'étudiant sur sa feuille — évalue cette réponse par rapport à l\'énoncé ci-dessus)] :',
        dataUrl: dataUrl,
      });
    });

    const model = 'gemini-3.8-flash';
    const hasPersonalKey = Boolean(byok && byok.apiKey && byok.apiKey.trim().length > 5);
    const parts = [{ text: promptText }];
    imageParts.forEach(function (img) {
      parts.push({ text: img.label });
      const commaIdx = img.dataUrl.indexOf(',');
      const b64 = commaIdx !== -1 ? img.dataUrl.slice(commaIdx + 1) : img.dataUrl;
      parts.push({
        inline_data: {
          mime_type: 'image/jpeg',
          data: b64,
        },
      });
    });

    let resJson = null;
    if (!hasPersonalKey && hasPracticeServerRelay()) {
      const exId = getPracticeRelayExamId();
      const relayUrl = '/api/exams/' + encodeURIComponent(exId) + '/practice-evaluate';
      const relayRes = await fetch(relayUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Gradaly-Device-Id': getOrCreatePracticeDeviceId(),
        },
        body: JSON.stringify({
          lang: effLang,
          contents: [{ parts: parts }],
        }),
      });
      if (!relayRes.ok) {
        let errMsg = 'HTTP ' + relayRes.status;
        try {
          const errObj = await relayRes.json();
          if (errObj && errObj.message) {
            errMsg = errObj.message;
          }
          if (
            errObj &&
            (errObj.error === 'AI_BUDGET_EXCEEDED' ||
              errObj.error === 'AI_DISABLED_BY_ADMIN' ||
              errObj.error === 'AI_RELAY_NOT_CONFIGURED')
          ) {
            practiceState.relayStatus = { available: false, reason: errObj.error };
          }
        } catch {
          const rawTxt = await relayRes.text();
          if (rawTxt) errMsg = rawTxt.slice(0, 240);
        }
        throw new Error(errMsg);
      }
      resJson = await relayRes.json();
      if (resJson && resJson.gradaly_quota) {
        practiceState.relayStatus = Object.assign(
          {},
          practiceState.relayStatus || { available: true },
          resJson.gradaly_quota,
          { available: resJson.gradaly_quota.client_remaining > 0 }
        );
      }
    } else {
      const url =
        'https://generativelanguage.googleapis.com/v1beta/models/' +
        encodeURIComponent(model) +
        ':generateContent?key=' +
        encodeURIComponent((byok && byok.apiKey ? byok.apiKey : '').trim());
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: parts }],
          generationConfig: {
            response_mime_type: 'application/json',
            maxOutputTokens: 65536,
            thinking_config: {
              thinking_level: 'medium',
            },
          },
        }),
      });
      if (!res.ok) {
        const errTxt = await res.text();
        throw new Error('Gemini API (' + res.status + '): ' + errTxt.slice(0, 240));
      }
      resJson = await res.json();
    }
    let rawJsonText = '';
    if (
      resJson.candidates &&
      resJson.candidates[0] &&
      resJson.candidates[0].content &&
      Array.isArray(resJson.candidates[0].content.parts)
    ) {
      resJson.candidates[0].content.parts.forEach(function (p) {
        if (p && typeof p.text === 'string') {
          rawJsonText += p.text;
        }
      });
    }

    const parsed = safeParsePracticeJson(rawJsonText);
    const critMap = parsed.criteria || parsed.CRITERIA || {};

    let sum = roundHalf(question.baseScore || 0);
    const evaluatedCriteria = (question.criteria || []).map(function (c) {
      let checked = false;
      if (typeof critMap[c.label] === 'boolean') {
        checked = critMap[c.label];
      } else if (typeof parsed[c.label] === 'boolean') {
        checked = parsed[c.label];
      } else {
        Object.keys(critMap).forEach(function (k) {
          if (k.toLowerCase().trim() === c.label.toLowerCase().trim() && typeof critMap[k] === 'boolean') {
            checked = critMap[k];
          }
        });
      }
      if (checked) {
        sum += roundHalf(c.points);
      }
      return {
        label: c.label,
        points: c.points,
        description: c.description || '',
        checked: checked,
      };
    });

    const maxScore = typeof question.maxScore === 'number' ? question.maxScore : 0;
    const clampedScore = maxScore > 0 ? Math.min(maxScore, Math.max(0, sum)) : Math.max(0, sum);

    return {
      score: Math.round(clampedScore * 10) / 10,
      maxScore: Math.round(maxScore * 10) / 10,
      criteria: evaluatedCriteria,
      feedback: parsed.feedback || parsed.FEEDBACK || '',
      justification: parsed.justification || parsed.JUSTIFICATION || '',
      timestamp: new Date().toISOString(),
    };
  }

  function renderPracticeApp(data) {
    practiceState.data = data;
    practiceState.attemptsByQuestion = loadSavedAttempts(data);

    // Check if ?q= deep link is present in URL
    const requestedQ = getQueryParam('q');
    const questions = data.questions || [];
    if (requestedQ && questions.length > 0 && !practiceState._initialQResolved) {
      practiceState._initialQResolved = true;
      const foundIdx = questions.findIndex(function (q, i) {
        return (
          String(q.id).toLowerCase() === requestedQ.toLowerCase() ||
          String(i + 1) === requestedQ ||
          'q' + (i + 1) === requestedQ.toLowerCase()
        );
      });
      if (foundIdx !== -1) {
        practiceState.activeIdx = foundIdx;
      }
    }

    // Attempt silent restore from browser Credential Store if localStorage/cookie is empty
    const currentByok = loadByokConfig();
    if (
      (!currentByok.apiKey || currentByok.apiKey.length <= 5) &&
      window.navigator &&
      window.navigator.credentials &&
      typeof window.navigator.credentials.get === 'function' &&
      window.PasswordCredential
    ) {
      try {
        window.navigator.credentials
          .get({ password: true, mediation: 'optional' })
          .then(function (cred) {
            if (cred && cred.password && String(cred.password).trim().length > 5) {
              saveByokConfig({
                provider: 'gemini',
                model: 'gemini-3.8-flash',
                apiKey: String(cred.password).trim(),
              });
              if (practiceState.data) renderPracticeView();
            }
          })
          .catch(function () {});
      } catch {}
    }

    ensureKatexLoaded(function () {
      if (practiceState.data) renderPracticeView();
    });

    fetchPracticeRelayStatus();
    renderPracticeView();
  }

  function renderPracticeView() {
    const data = practiceState.data;
    if (!data) return;

    // Preserve any key typed/pasted in #byok-key-input before re-rendering DOM
    const existingInputEl = document.getElementById('byok-key-input');
    if (existingInputEl && typeof existingInputEl.value === 'string') {
      const typedVal = existingInputEl.value.trim();
      if (typedVal.length > 5) {
        saveByokConfig({
          provider: 'gemini',
          model: 'gemini-3.8-flash',
          apiKey: typedVal,
        });
      }
    }

    const tr = L();
    applyStaticDomLocalization();
    const questions = data.questions || [];
    const activeQ = questions[practiceState.activeIdx] || questions[0];
    const byok = loadByokConfig();
    const hasKey = Boolean(byok.apiKey && byok.apiKey.trim().length > 5);

    const titleEl = document.getElementById('header-exam-title');
    if (titleEl) titleEl.textContent = data.examTitle || tr.practiceTitle;
    const docIdEl = document.getElementById('header-doc-id');
    if (docIdEl) docIdEl.textContent = tr.selfAssessSub;
    document.title = (data.examTitle || tr.practiceTitle) + ' — Gradaly';

    const dashboardEl = document.getElementById('view-dashboard');
    if (!dashboardEl) return;

    if (!activeQ) {
      dashboardEl.innerHTML =
        '<div class="practice-shell"><div class="practice-card"><p>' +
        escapeHtml(tr.noPracticeQ) +
        '</p></div></div>';
      return;
    }

    const qId = activeQ.id || ('Q' + (practiceState.activeIdx + 1));
    const photos = practiceState.photosByQuestion[qId] || [];
    const attempt = practiceState.attemptsByQuestion[qId] || null;
    const opts = data.options || {};
    const showRubricNow = Boolean(opts.showRubricBeforeAttempt || attempt);
    const showSolutionNow = Boolean(opts.showSolutionAfterAttempt !== false && attempt && activeQ.solutionCrops && activeQ.solutionCrops.length > 0);
    const showStatement = practiceState.showStatementByQuestion[qId] !== false;

    const svgIcons = {
      key: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>',
      check: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
      external: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
      camera: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>',
      image: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
      crop: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/></svg>',
      trash: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
      sparkles: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>',
      fileText: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
      chevronUp: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',
      chevronDown: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
      lock: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
      rotateCcw: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
      rotateCw: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>',
      maximize: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'
    };

    // Pills HTML
    let pillsHtml = '<div class="practice-q-pills">';
    questions.forEach(function (q, idx) {
      const id = q.id || ('Q' + (idx + 1));
      const att = practiceState.attemptsByQuestion[id];
      const isAct = idx === practiceState.activeIdx;
      const cls = 'practice-q-pill' + (isAct ? ' active' : '') + (att ? ' done' : '');
      const scoreText = att ? ' • ' + att.score + '/' + att.maxScore : '';
      pillsHtml +=
        '<button type="button" class="' + cls + '" onclick="window.selectPracticeQuestion(' + idx + ')">' +
        '<span>' + escapeHtml(id) + '</span>' +
        (att ? '<span>' + escapeHtml(scoreText) + '</span>' : '') +
        '</button>';
    });
    pillsHtml += '</div>';

    // Statement crops HTML
    let statementHtml = '';
    if (activeQ.canvasCrops && activeQ.canvasCrops.length > 0) {
      statementHtml =
        '<div class="practice-statement-box">' +
          '<button type="button" class="practice-statement-toggle" onclick="window.togglePracticeStatement(\'' + escapeHtml(qId) + '\')">' +
            '<span style="display:inline-flex;align-items:center;gap:7px;">' + svgIcons.fileText + '<span>' + escapeHtml(tr.qStatement) + '</span></span>' +
            '<span style="display:inline-flex;align-items:center;gap:4px;font-size:11.5px;color:var(--slate-500);">' +
              (showStatement ? escapeHtml(tr.hide) + ' ' + svgIcons.chevronUp : escapeHtml(tr.show) + ' ' + svgIcons.chevronDown) +
            '</span>' +
          '</button>' +
          (showStatement
            ? '<div class="practice-statement-body">' +
              activeQ.canvasCrops
                .map(function (src) {
                  return '<img src="' + src + '" alt="Question" />';
                })
                .join('') +
              '</div>'
            : '') +
        '</div>';
    }

    // Photos preview HTML (clean document cards with action bar)
    let photosHtml = '';
    if (photos.length > 0) {
      photosHtml =
        '<div class="practice-photo-list">' +
        photos
          .map(function (src, pIdx) {
            return (
              '<div class="practice-photo-card">' +
                '<div class="practice-photo-preview">' +
                  '<img src="' + src + '" alt="Photo ' + (pIdx + 1) + '" />' +
                '</div>' +
                '<div class="practice-photo-actions">' +
                  '<span class="practice-photo-label">' + escapeHtml(tr.capturedAnswer) + (photos.length > 1 ? ' #' + (pIdx + 1) : '') + '</span>' +
                  '<div class="practice-photo-btns">' +
                    '<button type="button" class="practice-photo-action-btn" onclick="window.openPracticeCropModal(\'' + escapeHtml(qId) + '\', ' + pIdx + ')">' +
                      svgIcons.crop + '<span>' + escapeHtml(tr.adjustCrop) + '</span>' +
                    '</button>' +
                    '<button type="button" class="practice-photo-action-btn danger" onclick="window.removePracticePhoto(\'' + escapeHtml(qId) + '\', ' + pIdx + ')" title="' + escapeHtml(tr.deleteBtn) + '">' +
                      svgIcons.trash + '<span>' + escapeHtml(tr.deleteBtn) + '</span>' +
                    '</button>' +
                  '</div>' +
                '</div>' +
              '</div>'
            );
          })
          .join('') +
        '</div>';
    }

    // Attempt result HTML
    let resultHtml = '';
    if (attempt) {
      const pct = attempt.maxScore > 0 ? Math.round((attempt.score / attempt.maxScore) * 100) : 0;
      const isGood = pct >= 70;
      const badgeBg = isGood ? 'var(--success-light)' : '#eef2ff';
      const badgeBorder = isGood ? 'var(--success-border)' : 'var(--primary-border)';
      const badgeColor = isGood ? 'var(--success)' : 'var(--primary)';

      resultHtml +=
        '<div style="border-top:1px solid var(--slate-200);padding-top:16px;display:flex;flex-direction:column;gap:14px;">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;padding:14px 16px;border-radius:var(--radius-md);background:' + badgeBg + ';border:1px solid ' + badgeBorder + ';">' +
            '<div>' +
              '<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:' + badgeColor + ';">' +
                escapeHtml(tr.aiSelfScore) +
              '</div>' +
              '<div style="font-size:22px;font-weight:800;color:var(--slate-900);margin-top:2px;">' +
                attempt.score + ' / ' + attempt.maxScore + ' pts <span style="font-size:13.5px;font-weight:700;color:' + badgeColor + ';">(' + pct + '%)</span>' +
              '</div>' +
            '</div>' +
          '</div>';

      if (attempt.feedback) {
        resultHtml +=
          '<div class="feedback-box">' +
            '<div class="feedback-header"><span>' + escapeHtml(tr.formativeFb) + '</span></div>' +
            '<div class="feedback-text">' + renderMathAndMarkdown(attempt.feedback) + '</div>' +
          '</div>';
      }

      if (opts.showJustification !== false && attempt.justification) {
        resultHtml +=
          '<div class="justification-box">' +
            '<div class="justification-header">' + escapeHtml(tr.detailedJustif) + '</div>' +
            '<div class="justification-text">' + renderMathAndMarkdown(attempt.justification) + '</div>' +
          '</div>';
      }

      resultHtml += '</div>';
    }

    // Rubric Criteria HTML
    let rubricHtml = '';
    const criteriaSource = attempt && attempt.criteria ? attempt.criteria : (activeQ.criteria || []);
    if (showRubricNow && criteriaSource.length > 0) {
      rubricHtml =
        '<div class="criteria-section" style="margin-top:2px;">' +
          '<div class="section-subtitle">' + escapeHtml(tr.rubricCriteriaTitle) + '</div>';
      criteriaSource.forEach(function (c) {
        const isChecked = Boolean(attempt && c.checked);
        const iconSvg = attempt
          ? (isChecked
              ? '<svg class="criterion-icon checked" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
              : '<svg class="criterion-icon unchecked" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>')
          : '<span style="width:7px;height:7px;border-radius:50%;background:var(--slate-400);display:inline-block;margin-top:6px;flex-shrink:0;"></span>';
        const ptsSign = c.points > 0 ? '+' : '';
        const descHtml = c.description ? '<div class="criterion-desc">' + renderMathAndMarkdown(c.description) + '</div>' : '';
        rubricHtml +=
          '<div class="criterion-item ' + (isChecked ? 'checked' : '') + '">' +
            '<div class="criterion-info">' +
              iconSvg +
              '<div class="criterion-body">' +
                '<span class="criterion-label">' + renderMathAndMarkdown(c.label) + '</span>' +
                descHtml +
              '</div>' +
            '</div>' +
            '<span class="criterion-pts">' + ptsSign + c.points + ' pt' + (Math.abs(c.points) > 1 ? 's' : '') + '</span>' +
          '</div>';
      });
      rubricHtml += '</div>';
    } else if (!showRubricNow && (activeQ.criteria || []).length > 0) {
      rubricHtml =
        '<div style="padding:10px 12px;border-radius:var(--radius-sm);background:var(--slate-100);color:var(--slate-600);font-size:12px;display:flex;align-items:center;gap:7px;">' +
          svgIcons.lock +
          '<span>' + escapeHtml(tr.rubricRevealedAfter) + '</span>' +
        '</div>';
    }

    // Reference Solution HTML (after attempt)
    let solutionHtml = '';
    if (showSolutionNow) {
      solutionHtml =
        '<div style="border:1px solid var(--success-border);background:var(--success-light);border-radius:var(--radius-md);padding:14px;display:flex;flex-direction:column;gap:10px;">' +
          '<div style="font-size:12.5px;font-weight:800;color:var(--success);display:flex;align-items:center;gap:6px;">' +
            svgIcons.check +
            '<span>' + escapeHtml(tr.refSolution) + '</span>' +
          '</div>' +
          activeQ.solutionCrops
            .map(function (src) {
              return '<img src="' + src + '" alt="Solution" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--success-border);background:#fff;" />';
            })
            .join('') +
        '</div>';
    }

    // Inline BYOK API Key Card / Gradaly Server AI Relay Bar
    const relayReady = isServerRelayAvailable();
    const isByokExpanded = (!hasKey && !relayReady) || Boolean(practiceState.showByokModal);
    let byokInlineCardHtml = '';
    if (isByokExpanded) {
      byokInlineCardHtml =
        '<div class="practice-key-card">' +
          '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;">' +
            '<div>' +
              '<div style="display:inline-flex;align-items:center;gap:5px;padding:3px 9px;border-radius:9999px;background:#eef2ff;color:var(--primary);font-size:11px;font-weight:700;margin-bottom:6px;">' +
                svgIcons.key +
                '<span>' +
                  escapeHtml(relayReady ? tr.optPersonalKey : tr.initSetupKey) +
                '</span>' +
              '</div>' +
              '<h3 style="font-size:15px;font-weight:800;color:var(--slate-900);line-height:1.3;">' +
                escapeHtml(tr.connectKeyTitle) +
              '</h3>' +
            '</div>' +
            (hasKey || relayReady
              ? '<div style="display:flex;align-items:center;gap:6px;">' +
                  (hasKey && relayReady
                    ? '<button type="button" onclick="window.clearPracticeByokKey()" style="padding:5px 10px;border-radius:var(--radius-sm);border:1px solid var(--primary-border);background:var(--primary-light);font-size:11.5px;font-weight:600;cursor:pointer;color:var(--primary);">' +
                        escapeHtml(tr.useGradalyServer) +
                      '</button>'
                    : '') +
                  '<button type="button" onclick="window.closePracticeByokModal()" style="padding:5px 10px;border-radius:var(--radius-sm);border:1px solid var(--slate-300);background:#fff;font-size:12px;font-weight:600;cursor:pointer;color:var(--slate-600);">' +
                    escapeHtml(tr.closeBtn) +
                  '</button>' +
                '</div>'
              : '') +
          '</div>' +
          '<div class="practice-key-steps">' +
            '<ol>' +
              '<li>' + tr.step1Html + '</li>' +
              '<li>' + tr.step2Html + '</li>' +
              '<li>' + tr.step3Html + '</li>' +
            '</ol>' +
            '<div>' +
              '<a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" class="practice-ext-link">' +
                '<span>' + escapeHtml(tr.getKeyLink) + '</span>' +
                svgIcons.external +
              '</a>' +
            '</div>' +
          '</div>' +
          '<form id="byok-key-form" class="practice-key-input-row" action="javascript:void(0);" onsubmit="return window.savePracticeByokModal(event)" style="margin:0;">' +
            '<input type="text" name="username" autocomplete="username" value="Gradaly Gemini API Key" tabindex="-1" aria-hidden="true" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0;" readonly />' +
            '<input id="byok-key-input" name="password" type="password" autocomplete="current-password" autocapitalize="off" autocorrect="off" spellcheck="false" class="practice-key-input" placeholder="' + escapeHtml(tr.pasteKeyPh) + '" value="' + escapeHtml(byok.apiKey || '') + '" oninput="window.handlePracticeByokInput(this.value)" onchange="window.handlePracticeByokInput(this.value)" />' +
            '<button type="submit" class="practice-key-save-btn">' +
              svgIcons.check +
              '<span>' + escapeHtml(tr.saveKeyBtn) + '</span>' +
            '</button>' +
          '</form>' +
          '<div style="font-size:11.5px;color:var(--slate-500);line-height:1.4;display:flex;align-items:center;gap:6px;">' +
            svgIcons.lock +
            '<span>' + escapeHtml(tr.keyStoredLocal) + '</span>' +
          '</div>' +
        '</div>';
    } else if (hasKey) {
      byokInlineCardHtml =
        '<div class="practice-key-bar">' +
          '<div class="practice-key-status">' +
            '<span class="practice-key-dot ok"></span>' +
            '<span>' + escapeHtml(tr.personalKeyReady) + '</span>' +
          '</div>' +
          '<button type="button" class="practice-key-edit-btn" onclick="window.openPracticeByokModal()">' +
            svgIcons.key +
            '<span>' + escapeHtml(tr.editKeyBtn) + '</span>' +
          '</button>' +
        '</div>';
    } else {
      const remCount =
        practiceState.relayStatus && typeof practiceState.relayStatus.client_remaining === 'number'
          ? practiceState.relayStatus.client_remaining
          : null;
      const quotaTag =
        remCount !== null
          ? ' <span style="color:var(--slate-400);font-weight:500;">(' +
            remCount +
            escapeHtml(tr.evalsLeft) +
            ')</span>'
          : '';
      byokInlineCardHtml =
        '<div class="practice-key-bar">' +
          '<div class="practice-key-status">' +
            '<span class="practice-key-dot ok"></span>' +
            '<span>' +
              escapeHtml(tr.relayReady) +
              quotaTag +
            '</span>' +
          '</div>' +
          '<button type="button" class="practice-key-edit-btn" onclick="window.openPracticeByokModal()" title="' +
            escapeHtml(tr.optKeyTitle) +
          '">' +
            svgIcons.key +
            '<span>' + escapeHtml(tr.customKeyBtn) + '</span>' +
          '</button>' +
        '</div>';
    }

    // Interactive Crop & Rotate Modal HTML
    let cropModalHtml = '';
    if (practiceState.cropModal) {
      const cm = practiceState.cropModal;
      const b = cm.box || { x1: 0.06, y1: 0.06, x2: 0.94, y2: 0.94 };
      const leftPct = (b.x1 * 100).toFixed(2) + '%';
      const topPct = (b.y1 * 100).toFixed(2) + '%';
      const widthPct = ((b.x2 - b.x1) * 100).toFixed(2) + '%';
      const heightPct = ((b.y2 - b.y1) * 100).toFixed(2) + '%';

      cropModalHtml =
        '<div class="practice-modal-backdrop">' +
          '<div class="practice-modal">' +
            '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">' +
              '<div>' +
                '<h3 style="font-size:15px;font-weight:800;color:var(--slate-900);display:flex;align-items:center;gap:6px;">' +
                  svgIcons.crop +
                  '<span>' + escapeHtml(tr.frameTitle) + '</span>' +
                '</h3>' +
                '<p style="font-size:12px;color:var(--slate-600);margin-top:2px;">' +
                  escapeHtml(tr.frameSub) +
                '</p>' +
              '</div>' +
              '<button type="button" onclick="window.cancelPracticeCropModal()" style="border:none;background:transparent;font-size:20px;line-height:1;cursor:pointer;color:var(--slate-400);padding:2px 6px;">×</button>' +
            '</div>' +
            '<div style="display:flex;align-items:center;justify-content:center;background:#0f172a;border-radius:8px;padding:8px;min-height:200px;overflow:hidden;">' +
              '<div id="practice-crop-stage" class="practice-crop-stage">' +
                '<img id="practice-crop-img" src="' + cm.sourceDataUrl + '" alt="Crop preview" />' +
                '<div id="practice-crop-box" class="practice-crop-box" data-crop-action="move" style="left:' + leftPct + ';top:' + topPct + ';width:' + widthPct + ';height:' + heightPct + ';">' +
                  '<div class="practice-crop-grid-h"></div>' +
                  '<div class="practice-crop-grid-v"></div>' +
                  '<div class="practice-crop-handle nw" data-crop-action="nw"></div>' +
                  '<div class="practice-crop-handle ne" data-crop-action="ne"></div>' +
                  '<div class="practice-crop-handle sw" data-crop-action="sw"></div>' +
                  '<div class="practice-crop-handle se" data-crop-action="se"></div>' +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">' +
              '<div style="display:flex;align-items:center;gap:6px;">' +
                '<button type="button" onclick="window.rotatePracticeCropImage(-1)" style="display:inline-flex;align-items:center;gap:4px;padding:7px 10px;border-radius:var(--radius-sm);border:1px solid var(--slate-300);background:var(--slate-100);color:var(--slate-700);font-size:12px;font-weight:600;cursor:pointer;">' + svgIcons.rotateCcw + '<span>90°</span></button>' +
                '<button type="button" onclick="window.rotatePracticeCropImage(1)" style="display:inline-flex;align-items:center;gap:4px;padding:7px 10px;border-radius:var(--radius-sm);border:1px solid var(--slate-300);background:var(--slate-100);color:var(--slate-700);font-size:12px;font-weight:600;cursor:pointer;">' + svgIcons.rotateCw + '<span>90°</span></button>' +
                '<button type="button" onclick="window.selectAllPracticeCrop()" style="display:inline-flex;align-items:center;gap:4px;padding:7px 10px;border-radius:var(--radius-sm);border:1px solid var(--slate-300);background:#fff;color:var(--slate-700);font-size:12px;font-weight:600;cursor:pointer;">' + svgIcons.maximize + '<span>' + escapeHtml(tr.fullBtn) + '</span></button>' +
              '</div>' +
              '<div style="display:flex;align-items:center;gap:8px;">' +
                '<button type="button" onclick="window.cancelPracticeCropModal()" style="padding:8px 12px;border-radius:var(--radius-sm);border:1px solid var(--slate-300);background:#fff;color:var(--slate-700);font-size:12.5px;font-weight:600;cursor:pointer;">' +
                  escapeHtml(tr.cancelBtn) +
                '</button>' +
                '<button type="button" onclick="window.confirmPracticeCropModal()" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:var(--radius-sm);border:none;background:var(--primary);color:#fff;font-size:12.5px;font-weight:700;cursor:pointer;">' +
                  svgIcons.check + '<span>' + escapeHtml(tr.confirmBtn) + '</span>' +
                '</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    }

    // Live Camera Viewfinder Modal HTML
    let cameraModalHtml = '';
    if (practiceState.cameraModalQId) {
      cameraModalHtml =
        '<div class="practice-modal-backdrop">' +
          '<div class="practice-modal">' +
            '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">' +
              '<h3 style="font-size:15px;font-weight:800;color:var(--slate-900);display:flex;align-items:center;gap:7px;">' +
                svgIcons.camera +
                '<span>' + escapeHtml(tr.takePhotoTitle) + '</span>' +
              '</h3>' +
              '<button type="button" onclick="window.closePracticeCameraModal()" style="border:none;background:transparent;font-size:20px;line-height:1;cursor:pointer;color:var(--slate-400);padding:2px 6px;">×</button>' +
            '</div>' +
            '<div style="position:relative;background:#0f172a;border-radius:8px;overflow:hidden;min-height:220px;display:flex;align-items:center;justify-content:center;">' +
              '<video id="practice-live-video" autoplay playsinline muted style="width:100%;max-height:55vh;display:block;object-fit:contain;"></video>' +
            '</div>' +
            '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">' +
              '<button type="button" onclick="window.closePracticeCameraModal();document.getElementById(\'practice-input-gallery\').click();" style="display:inline-flex;align-items:center;gap:6px;padding:8px 12px;border-radius:var(--radius-sm);border:1px solid var(--slate-300);background:#fff;color:var(--slate-700);font-size:12px;font-weight:600;cursor:pointer;">' +
                svgIcons.image + '<span>' + escapeHtml(tr.chooseFileInstead) + '</span>' +
              '</button>' +
              '<div style="display:flex;align-items:center;gap:8px;">' +
                '<button type="button" onclick="window.closePracticeCameraModal()" style="padding:8px 12px;border-radius:var(--radius-sm);border:1px solid var(--slate-300);background:#fff;color:var(--slate-700);font-size:12.5px;font-weight:600;cursor:pointer;">' +
                  escapeHtml(tr.cancelBtn) +
                '</button>' +
                '<button type="button" onclick="window.capturePracticeLiveFrame()" style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:var(--radius-sm);border:none;background:var(--primary);color:#fff;font-size:13px;font-weight:700;cursor:pointer;">' +
                  svgIcons.camera + '<span>' + escapeHtml(tr.captureBtn) + '</span>' +
                '</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    }

    dashboardEl.innerHTML =
      '<div class="practice-shell">' +
        byokInlineCardHtml +
        pillsHtml +
        '<div class="practice-card">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;">' +
            '<div style="display:flex;align-items:center;gap:8px;min-width:0;">' +
              '<span class="q-index-badge">' + escapeHtml(qId) + '</span>' +
              '<h2 style="font-size:15.5px;font-weight:800;color:var(--slate-900);line-height:1.3;">' + escapeHtml(activeQ.title || qId) + '</h2>' +
            '</div>' +
            '<span class="q-score-badge">/' + Number((activeQ.maxScore || 0).toFixed(2)) + ' pts</span>' +
          '</div>' +
          statementHtml +
          '<div class="practice-capture-box">' +
            '<div class="practice-capture-header">' +
              '<div class="practice-capture-title">' +
                escapeHtml(tr.yourAnswerTitle) +
              '</div>' +
              '<div class="practice-capture-sub">' +
                escapeHtml(tr.yourAnswerSub) +
              '</div>' +
            '</div>' +
            '<input id="practice-input-camera" type="file" accept="image/*" capture="environment" style="display:none;" onchange="window.handlePracticeFilesSelected(\'' + escapeHtml(qId) + '\', this.files)" />' +
            '<input id="practice-input-gallery" type="file" accept="image/*" multiple style="display:none;" onchange="window.handlePracticeFilesSelected(\'' + escapeHtml(qId) + '\', this.files)" />' +
            '<div class="practice-capture-grid">' +
              '<button type="button" class="practice-btn-camera" onclick="window.triggerPracticeCamera(\'' + escapeHtml(qId) + '\')">' +
                svgIcons.camera +
                '<span>' + escapeHtml(tr.takePhotoBtn) + '</span>' +
              '</button>' +
              '<button type="button" class="practice-btn-gallery" onclick="document.getElementById(\'practice-input-gallery\').click()">' +
                svgIcons.image +
                '<span>' + escapeHtml(tr.importImgBtn) + '</span>' +
              '</button>' +
            '</div>' +
            photosHtml +
            (practiceState.gradingError
              ? '<div class="error-banner" style="display:block;width:100%;">' + escapeHtml(practiceState.gradingError) + '</div>'
              : '') +
            '<button type="button" class="practice-btn-grade" ' +
              (practiceState.isGrading || photos.length === 0 ? 'disabled ' : '') +
              'onclick="window.runPracticeGrading(\'' + escapeHtml(qId) + '\')">' +
              (practiceState.isGrading
                ? '<span>' + escapeHtml(tr.analyzingAi) + '</span>'
                : svgIcons.sparkles + '<span>' + escapeHtml(tr.gradeAiBtn) + '</span>') +
            '</button>' +
          '</div>' +
          resultHtml +
          rubricHtml +
          solutionHtml +
        '</div>' +
      '</div>' +
      cropModalHtml +
      cameraModalHtml;

    if (practiceState.cropModal) {
      attachPracticeCropEvents();
    }
  }

  function attachPracticeCropEvents() {
    if (practiceState._cropCleanup) {
      practiceState._cropCleanup();
      practiceState._cropCleanup = null;
    }
    const stageEl = document.getElementById('practice-crop-stage');
    const boxEl = document.getElementById('practice-crop-box');
    if (!stageEl || !boxEl || !practiceState.cropModal) return;

    let activeAction = null;
    let startClientX = 0;
    let startClientY = 0;
    let startBox = null;

    function updateBoxStyle() {
      if (!practiceState.cropModal || !boxEl) return;
      const b = practiceState.cropModal.box;
      boxEl.style.left = (b.x1 * 100).toFixed(2) + '%';
      boxEl.style.top = (b.y1 * 100).toFixed(2) + '%';
      boxEl.style.width = ((b.x2 - b.x1) * 100).toFixed(2) + '%';
      boxEl.style.height = ((b.y2 - b.y1) * 100).toFixed(2) + '%';
    }

    function getPointerCoords(e) {
      if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX, y: e.clientY };
    }

    function onPointerDown(e) {
      const target = e.target;
      const action = target && target.getAttribute ? target.getAttribute('data-crop-action') : null;
      const pt = getPointerCoords(e);
      const rect = stageEl.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      if (action) {
        activeAction = action;
        startClientX = pt.x;
        startClientY = pt.y;
        startBox = Object.assign({}, practiceState.cropModal.box);
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
      } else {
        // Clicking outside box starts drawing a new box from that point
        const relX = Math.max(0, Math.min(1, (pt.x - rect.left) / rect.width));
        const relY = Math.max(0, Math.min(1, (pt.y - rect.top) / rect.height));
        practiceState.cropModal.box = {
          x1: Math.max(0, relX - 0.02),
          y1: Math.max(0, relY - 0.02),
          x2: Math.min(1, relX + 0.02),
          y2: Math.min(1, relY + 0.02),
        };
        activeAction = 'se';
        startClientX = pt.x;
        startClientY = pt.y;
        startBox = Object.assign({}, practiceState.cropModal.box);
        updateBoxStyle();
        if (e.cancelable) e.preventDefault();
      }
    }

    function onPointerMove(e) {
      if (!activeAction || !startBox || !practiceState.cropModal) return;
      if (e.cancelable) e.preventDefault();
      const pt = getPointerCoords(e);
      const rect = stageEl.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dx = (pt.x - startClientX) / rect.width;
      const dy = (pt.y - startClientY) / rect.height;
      const minSize = 0.08;
      const b = Object.assign({}, startBox);

      if (activeAction === 'move') {
        const w = startBox.x2 - startBox.x1;
        const h = startBox.y2 - startBox.y1;
        let nx1 = Math.max(0, Math.min(1 - w, startBox.x1 + dx));
        let ny1 = Math.max(0, Math.min(1 - h, startBox.y1 + dy));
        b.x1 = nx1;
        b.y1 = ny1;
        b.x2 = nx1 + w;
        b.y2 = ny1 + h;
      } else {
        if (activeAction.indexOf('w') !== -1) {
          b.x1 = Math.max(0, Math.min(startBox.x2 - minSize, startBox.x1 + dx));
        }
        if (activeAction.indexOf('e') !== -1) {
          b.x2 = Math.min(1, Math.max(startBox.x1 + minSize, startBox.x2 + dx));
        }
        if (activeAction.indexOf('n') !== -1) {
          b.y1 = Math.max(0, Math.min(startBox.y2 - minSize, startBox.y1 + dy));
        }
        if (activeAction.indexOf('s') !== -1) {
          b.y2 = Math.min(1, Math.max(startBox.y1 + minSize, startBox.y2 + dy));
        }
      }

      practiceState.cropModal.box = b;
      updateBoxStyle();
    }

    function onPointerUp() {
      activeAction = null;
      startBox = null;
    }

    stageEl.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    stageEl.addEventListener('touchstart', onPointerDown, { passive: false });
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('touchend', onPointerUp);

    practiceState._cropCleanup = function () {
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
    };
  }

  window.selectPracticeQuestion = function (idx) {
    practiceState.activeIdx = idx;
    practiceState.gradingError = null;
    renderPracticeView();
  };

  window.togglePracticeStatement = function (qId) {
    const cur = practiceState.showStatementByQuestion[qId] !== false;
    practiceState.showStatementByQuestion[qId] = !cur;
    renderPracticeView();
  };

  window.triggerPracticeCamera = async function (qId) {
    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || '');
    if (isMobileDevice) {
      const camInput = document.getElementById('practice-input-camera');
      if (camInput) camInput.click();
      return;
    }

    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' }, width: { ideal: 1600 }, height: { ideal: 1200 } },
          audio: false,
        });
        practiceState.cameraModalQId = qId;
        practiceState._cameraStream = stream;
        renderPracticeView();
        const videoEl = document.getElementById('practice-live-video');
        if (videoEl) {
          videoEl.srcObject = stream;
          videoEl.play().catch(function () {});
        }
        return;
      } catch {
        // Fallback to standard file input if webcam permission denied or unavailable
      }
    }

    const camInput = document.getElementById('practice-input-camera');
    if (camInput) camInput.click();
  };

  window.closePracticeCameraModal = function () {
    if (practiceState._cameraStream) {
      try {
        practiceState._cameraStream.getTracks().forEach(function (t) {
          t.stop();
        });
      } catch {}
      practiceState._cameraStream = null;
    }
    practiceState.cameraModalQId = null;
    renderPracticeView();
  };

  window.capturePracticeLiveFrame = function () {
    const qId = practiceState.cameraModalQId;
    const videoEl = document.getElementById('practice-live-video');
    if (!qId || !videoEl || !videoEl.videoWidth || !videoEl.videoHeight) {
      window.closePracticeCameraModal();
      return;
    }
    const maxDim = 1600;
    let w = videoEl.videoWidth;
    let h = videoEl.videoHeight;
    if (w > maxDim || h > maxDim) {
      if (w >= h) {
        h = Math.round((h * maxDim) / w);
        w = maxDim;
      } else {
        w = Math.round((w * maxDim) / h);
        h = maxDim;
      }
    }
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoEl, 0, 0, w, h);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.88);

    window.closePracticeCameraModal();
    practiceState.cropModal = {
      qId: qId,
      editIdx: null,
      sourceDataUrl: dataUrl,
      box: { x1: 0.06, y1: 0.06, x2: 0.94, y2: 0.94 },
      pendingQueue: [],
    };
    renderPracticeView();
  };

  window.handlePracticeFilesSelected = async function (qId, fileList) {
    if (!fileList || fileList.length === 0) return;
    practiceState.gradingError = null;
    const loadedSources = [];
    for (let i = 0; i < fileList.length; i++) {
      try {
        const compressed = await compressImageFileToDataUrl(fileList[i]);
        loadedSources.push(compressed);
      } catch (e) {
        practiceState.gradingError = e && e.message ? e.message : 'Erreur image';
      }
    }
    // Reset file inputs so selecting the same file again triggers onchange
    const camInput = document.getElementById('practice-input-camera');
    if (camInput) camInput.value = '';
    const galInput = document.getElementById('practice-input-gallery');
    if (galInput) galInput.value = '';

    if (loadedSources.length > 0) {
      const firstSource = loadedSources.shift();
      practiceState.cropModal = {
        qId: qId,
        editIdx: null,
        sourceDataUrl: firstSource,
        box: { x1: 0.06, y1: 0.06, x2: 0.94, y2: 0.94 },
        pendingQueue: loadedSources,
      };
    }
    renderPracticeView();
  };

  window.openPracticeCropModal = function (qId, idx) {
    const originals = practiceState.originalPhotosByQuestion[qId] || [];
    const cropped = practiceState.photosByQuestion[qId] || [];
    const source = originals[idx] || cropped[idx];
    if (!source) return;
    practiceState.cropModal = {
      qId: qId,
      editIdx: idx,
      sourceDataUrl: source,
      box: { x1: 0.06, y1: 0.06, x2: 0.94, y2: 0.94 },
      pendingQueue: [],
    };
    renderPracticeView();
  };

  window.rotatePracticeCropImage = async function (direction) {
    if (!practiceState.cropModal) return;
    try {
      const rotated = await rotateDataUrl90(practiceState.cropModal.sourceDataUrl, direction);
      practiceState.cropModal.sourceDataUrl = rotated;
      practiceState.cropModal.box = { x1: 0.06, y1: 0.06, x2: 0.94, y2: 0.94 };
      renderPracticeView();
    } catch (e) {
      practiceState.gradingError = e && e.message ? e.message : 'Erreur rotation';
      renderPracticeView();
    }
  };

  window.selectAllPracticeCrop = function () {
    if (!practiceState.cropModal) return;
    practiceState.cropModal.box = { x1: 0, y1: 0, x2: 1, y2: 1 };
    renderPracticeView();
  };

  window.cancelPracticeCropModal = function () {
    practiceState.cropModal = null;
    renderPracticeView();
  };

  window.confirmPracticeCropModal = async function () {
    const cm = practiceState.cropModal;
    if (!cm) return;
    try {
      const croppedDataUrl = await cropDataUrlWithBox(cm.sourceDataUrl, cm.box);
      const photos = practiceState.photosByQuestion[cm.qId] || [];
      const originals = practiceState.originalPhotosByQuestion[cm.qId] || [];

      if (typeof cm.editIdx === 'number' && cm.editIdx >= 0 && cm.editIdx < photos.length) {
        photos[cm.editIdx] = croppedDataUrl;
        originals[cm.editIdx] = cm.sourceDataUrl;
      } else {
        photos.push(croppedDataUrl);
        originals.push(cm.sourceDataUrl);
      }

      practiceState.photosByQuestion[cm.qId] = photos;
      practiceState.originalPhotosByQuestion[cm.qId] = originals;

      if (cm.pendingQueue && cm.pendingQueue.length > 0) {
        const nextSource = cm.pendingQueue.shift();
        practiceState.cropModal = {
          qId: cm.qId,
          editIdx: null,
          sourceDataUrl: nextSource,
          box: { x1: 0.06, y1: 0.06, x2: 0.94, y2: 0.94 },
          pendingQueue: cm.pendingQueue,
        };
      } else {
        practiceState.cropModal = null;
      }
    } catch (e) {
      practiceState.gradingError = e && e.message ? e.message : 'Erreur recadrage';
      practiceState.cropModal = null;
    }
    renderPracticeView();
  };

  window.removePracticePhoto = function (qId, idx) {
    const arr = practiceState.photosByQuestion[qId] || [];
    const origArr = practiceState.originalPhotosByQuestion[qId] || [];
    arr.splice(idx, 1);
    origArr.splice(idx, 1);
    practiceState.photosByQuestion[qId] = arr;
    practiceState.originalPhotosByQuestion[qId] = origArr;
    renderPracticeView();
  };

  window.openPracticeByokModal = function () {
    practiceState.showByokModal = true;
    renderPracticeView();
  };

  window.closePracticeByokModal = function () {
    practiceState.showByokModal = false;
    renderPracticeView();
  };

  window.clearPracticeByokKey = function () {
    saveByokConfig({
      provider: 'gemini',
      model: 'gemini-3.8-flash',
      apiKey: '',
    });
    practiceState.showByokModal = false;
    renderPracticeView();
  };

  window.handlePracticeByokInput = function (rawVal) {
    const val = typeof rawVal === 'string' ? rawVal.trim() : '';
    practiceState.draftApiKey = val;
    if (val.length > 5) {
      saveByokConfig({
        provider: 'gemini',
        model: 'gemini-3.8-flash',
        apiKey: val,
      });
    }
  };

  window.savePracticeByokModal = function (ev) {
    if (ev && typeof ev.preventDefault === 'function') {
      ev.preventDefault();
    }
    const keyEl = document.getElementById('byok-key-input');
    const cleanVal = keyEl ? keyEl.value.trim() : (practiceState.draftApiKey || '').trim();
    saveByokConfig({
      provider: 'gemini',
      model: 'gemini-3.8-flash',
      apiKey: cleanVal,
    });
    if (
      cleanVal.length > 5 &&
      window.PasswordCredential &&
      window.navigator &&
      window.navigator.credentials &&
      typeof window.navigator.credentials.store === 'function'
    ) {
      try {
        const cred = new window.PasswordCredential({
          id: 'Gradaly Gemini API Key',
          name: 'Gradaly Gemini API Key',
          password: cleanVal,
        });
        window.navigator.credentials.store(cred).catch(function () {});
      } catch {}
    }
    practiceState.showByokModal = false;
    renderPracticeView();
    return false;
  };

  window.runPracticeGrading = async function (qId) {
    const data = practiceState.data;
    if (!data) return;
    const questions = data.questions || [];
    const activeQ = questions[practiceState.activeIdx] || questions[0];
    if (!activeQ) return;

    const byok = loadByokConfig();
    const hasPersonalKey = Boolean(byok.apiKey && byok.apiKey.trim().length >= 5);
    if (!hasPersonalKey && !isServerRelayAvailable()) {
      practiceState.showByokModal = true;
      renderPracticeView();
      return;
    }

    const photos = practiceState.photosByQuestion[qId] || [];
    if (photos.length === 0) return;

    practiceState.isGrading = true;
    practiceState.gradingError = null;
    renderPracticeView();

    try {
      const attempt = await callClientSideLlmForPractice(activeQ, photos, data, byok);
      saveAttemptForQuestion(data, qId, attempt);
    } catch (err) {
      practiceState.gradingError = err && err.message ? err.message : String(err);
    } finally {
      practiceState.isGrading = false;
      renderPracticeView();
    }
  };

  // Manual unlock handler
  function handleManualUnlock() {
    const input = document.getElementById('manual-key-input');
    if (!input || !currentDocId) return;
    const key = input.value.trim();
    if (!key) return;
    decryptAndRender(currentDocId, key);
  }

  // Initialization on page load
  async function init() {
    activePortalLang = resolveInitialPortalLang();
    applyStaticDomLocalization();

    if (window.__GRADALY_PRACTICE_PREVIEW__) {
      currentData = window.__GRADALY_PRACTICE_PREVIEW__;
      if (!userOverrodeLang && currentData && currentData.lang) {
        const pLang = normalizePortalLang(currentData.lang);
        if (pLang) activePortalLang = pLang;
      }
      applyStaticDomLocalization();
      renderPracticeApp(currentData);
      showView('view-dashboard');
      return;
    }

    const docId = getQueryParam('id') || (getKeyFromHash() ? 'practice' : null);
    currentDocId = docId;

    if (!docId) {
      showView('view-unlock');
      showError(L().missingIdErr);
      const input = document.getElementById('manual-key-input');
      if (input) input.disabled = true;
      const btn = document.getElementById('unlock-button');
      if (btn) btn.disabled = true;
      return;
    }

    const key = getKeyFromHash();
    if (key) {
      // Key is present in URL hash -> auto-unlock seamlessly!
      decryptAndRender(docId, key);
    } else {
      // No key in hash -> ask user to paste secret key
      showView('view-unlock');
    }
  }

  // Listen to hash changes (e.g. if key is appended afterwards)
  window.addEventListener('hashchange', function () {
    const key = getKeyFromHash();
    if (key && currentDocId) {
      decryptAndRender(currentDocId, key);
    }
  });

  // Expose global methods for inline HTML event attributes
  window.setMode = setMode;
  window.selectQuestion = selectQuestion;
  window.prevQuestion = prevQuestion;
  window.nextQuestion = nextQuestion;
  window.zoomIn = zoomIn;
  window.zoomOut = zoomOut;
  window.zoomFitWidth = zoomFitWidth;
  window.setMobilePane = setMobilePane;
  window.handleManualUnlock = handleManualUnlock;
  window.toggleCopyViewType = toggleCopyViewType;
  window.openPdfInNewTab = openPdfInNewTab;
  window.setCopyPage = setCopyPage;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
