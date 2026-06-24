# Playbook: Seitenaufbau

> Zweck: Definiert für jeden Seitentyp die Sektionen, ihre Reihenfolge und die Aufgabe jeder Sektion — damit die KI Kundenseiten woertlich nach Bauplan erstellt statt zu raten. Jeder Seitentyp hat explizite VISUAL-Slots (Bild/Video), damit klar ist, wo welches Asset hingehoert und wo bewusst keines.

## Prinzipien

- Eine Seite = ein Ziel = ein primaerer CTA. Jede Seite fuehrt zum Erstgespraech, Anruf oder Formular. Kein CTA-Chaos.
- Above the Fold muss in 5 Sekunden klar machen: Was ist das, fuer wen, was tun. Headline + Subline + CTA + Vertrauenssignal.
- ICP zuerst: lokale B2C-Dienstleister mit Standort (Handwerk/Haustechnik, Makler, Kosmetik/Aesthetik, Versicherungs-/Finanzberater, Coaches). Texte sprechen den Inhaber direkt an ("du"), nennen Ort und Branche.
- Genau eine H1 pro Seite. Sektionen tragen H2, Unterpunkte H3. Reihenfolge der Sektionen = SEO- und Lese-Hierarchie.
- Beweis vor Behauptung: Zahlen, Testimonials, Referenzen so frueh wie moeglich. Keine Hochglanz-Floskeln ohne Beleg.
- CTA mindestens zweimal pro Seite: nach dem Hero und am Ende. Lange Seiten: zusaetzlich in der Mitte.
- Tracking-Default ist gesetzt: Matomo auf allen Seiten, Google-Ads-Conversion auf der primaeren Aktion (Formular-Submit / Buchung / Anruf), Meta Pixel wo Meta-Ads laufen. Kein Google Analytics (GA4).
- Stadt-/City-Pages: mindestens 60% Unique Content (lokale Bezuege, regionale Beispiele) — sonst Doorway-Page-Risiko.

## Visual-Prinzipien (Bild & Video)

- Jeder VISUAL-Slot ist entweder ein Still (Bild) oder ein Clip (Video). Stills werden mit Gemini Imagen 4 ueber `scripts/generate-image.mjs` erzeugt — siehe `references/playbooks/image-generation.md`. Video/Cinematic/Audio/3D laeuft ueber Higgsfield (MCP) — siehe `references/playbooks/video-generation.md`.
- Video ist ein Werkzeug, kein Default. Es kostet Ladezeit und Aufmerksamkeit. Einsetzen, wo Bewegung Vertrauen oder Verstaendnis erhoeht (Hero-Stimmung, Prozess zeigen, echtes Gesicht). Weglassen, wo Tempo und Conversion zaehlen.
- Performance-Regel fuer Video: nie als blockierendes Hero-Element auf Conversion-kritischen Seiten. Wenn Video im Hero, dann stumm, autoplay, loop, kurz (unter 10 Sek), Poster-Bild als Fallback, lazy nachgeladen. Auf Landingpages und Kontakt im Zweifel KEIN Video.
- Jedes Bild braucht Alt-Tag. Jedes Video braucht ein Poster-Still (oft ohnehin per Imagen erzeugt) und darf den LCP nicht stellen.
- Reihenfolge im Bau: erst Still generieren (ist immer Fallback/Poster), dann pruefen ob ein Clip echten Mehrwert bringt.

## Schritt fuer Schritt

1. Seitentyp bestimmen und passende Anatomie unten waehlen.
2. Ziel der Seite und primaeren CTA festlegen (genau einer).
3. Sektionen in der vorgegebenen Reihenfolge anlegen — keine Sektion auslassen ohne Grund, keine Reihenfolge tauschen.
4. H1 formulieren (genau eine, enthaelt das Hauptkeyword bzw. bei Standortseiten Ort + Leistung).
5. Pro Sektion den Text erstellen: Aufgabe der Sektion erfuellen, Voice aus `references/voice.md` (du-Ansprache, kurze Saetze, keine Em-Dashes).
6. VISUAL-Slots je Sektion fuellen: Still via `image-generation.md`, Clip nur wo unten als sinnvoll markiert, via `video-generation.md`. Poster + Alt nicht vergessen.
7. CTA-Platzierung pruefen: Hero + Footer-Bereich, lange Seiten zusaetzlich mittig.
8. SEO-Grundstruktur setzen: Meta Title (max. 60 Zeichen), Meta Description (max. 160 Zeichen), Alt-Tags auf allen Bildern, eine H1.
9. Tracking verdrahten: Matomo-Snippet, Google-Ads-Conversion auf die Zielaktion, Meta Pixel wo noetig, UTM-Parameter bei Ads-Zielseiten durchschleusen.
10. Mobile + Desktop pruefen, Ladezeit unter 3 Sekunden (Video-Gewicht mitrechnen).
11. Gegen die Checkliste pruefen, dann freigeben.

## Anatomie je Seitentyp

### 1. Startseite

| # | Sektion | Aufgabe | Visual-Slot |
|---|---|---|---|
| 1 | Hero (Above the Fold) | Headline (Nutzenversprechen) + Subline (fuer wen) + primaerer CTA + Reassurance-Zeile unter dem Button. In 5 Sekunden klar. | Hero-Still (Imagen) als Default. OPTIONAL Motion-Hero: kurzer stummer Loop-Clip (Higgsfield) fuer Stimmung/Marke — nur mit Poster-Fallback, lazy, unter 10 Sek. Bei Performance-Bedenken Still belassen. |
| 2 | Vertrauens-Zeile | Direkt unter Hero. Logos/Branchen/Genutzt-von. Senkt Bounce. | Logo-Strip (vorhandene Kundenlogos, keine KI). Kein Video. |
| 3 | Problem-Block | 3 Schmerzpunkte des ICP woertlich. "Wenn dir das bekannt vorkommt — dafuer sind wir da." | Optional 3 kleine Icon-/Stimmungs-Stills (Imagen). Kein Video. |
| 4 | Positionierung | Was ist das Angebot, was unterscheidet es. Abgrenzung zum Status quo. CTA auf Leistungsseite. | Ein erklaerendes Still oder Vorher/Nachher-Visual (Imagen). |
| 5 | Testimonial (Feature) | Ein starkes Zitat mit Name/Branche. | Testimonial-Foto (echt). OPTIONAL kurzer Testimonial-Video-Clip wenn echtes Material vorhanden — echtes Kundenvideo schlaegt jede KI. |
| 6 | Leistungs-/Angebots-Uebersicht | Kernleistungen oder Pakete/Preise. Transparent. Je Element ein "Mehr erfahren". | Je Leistung ein konsistentes Still (Imagen, gleicher Stil). Kein Video. |
| 7 | Warum wir (3 Kernpunkte) | Differenzierung in 3 Bullets. Ergebnisse statt Aktivitaeten. | Optional dezente Stills/Icons. Kein Video. |
| 8 | Abschluss-CTA | Wiederholung des primaeren CTA mit kurzer Reassurance. | Optional Hintergrund-Still. Bewusst kein Video (Fokus auf Klick). |

### 2. Leistungsseite

| # | Sektion | Aufgabe | Visual-Slot |
|---|---|---|---|
| 1 | Hero | Headline = konkrete Leistung + Nutzen. Subline = Klarheit/Transparenz. | Hero-Still (Imagen). OPTIONAL kurzer Loop-Clip wenn die Leistung visuell ist. Poster + lazy Pflicht. |
| 2 | Einleitung | Wie das Angebot grundsaetzlich funktioniert. Einwand "kostet extra" entkraeften. | Ein erklaerendes Still. Kein Video. |
| 3 | So funktioniert es | Ablauf/Prozess sichtbar machen (Schritte oder Queue-Logik). | EMPFOHLEN Video/B-Roll: kurzer Prozess- oder Erklaer-Clip (Higgsfield) macht den Ablauf greifbar. Alternativ Prozess-Grafik/Still wenn Video zu teuer. |
| 4 | Leistungsbereiche | Was konkret uebernommen wird, in 4-6 Bloecken. | Je Block ein konsistentes Still (Imagen). Kein Video. |
| 5 | Pakete/Preise im Detail | Pro Paket: Fuer wen, Inklusive, typische Beispiele, ggf. Onboarding-Fee, CTA. | Keine Visuals — Tabelle/Karten muessen schnell scanbar sein. Bewusst kein Video. |
| 6 | FAQ | Die 4-6 haeufigsten Kaufeinwaende beantworten (Wechsel, Laufzeit, Zufriedenheit). | Kein Visual noetig. |
| 7 | Abschluss-CTA | "Nicht sicher welches passt?" -> Erstgespraech. | Optional Hintergrund-Still. Kein Video. |

### 3. Landingpage (Ads-/Funnel-Ziel)

Muss eigenstaendig funktionieren — Besucher hat oft keine andere Seite gesehen. Eine Aktion, keine Ablenkung, schlanke Navigation. Conversion vor allem anderen.

| # | Sektion | Aufgabe | Visual-Slot |
|---|---|---|---|
| 1 | Hero | Klares Versprechen + Subline. Conversion-Element direkt darunter (Buchungstool/Formular) — das ist der CTA. | Statisches Hero-Still (Imagen) als Default — schnell, kein Ladegewicht. OPTIONAL sehr kurzer Hero-Clip (< 6 Sek, stumm, Poster) nur wenn er nachweislich konvertiert. Im Zweifel KEIN Video. |
| 2 | Was passiert / Was du bekommst | 3 Punkte, was den Besucher erwartet. Nimmt Angst vor dem Klick. | Optional 3 Icons/Stills. Kein Video. |
| 3 | Fuer wen / nicht fuer wen | Qualifiziert. "Das ist fuer dich wenn..." + "Nicht fuer dich wenn...". | Kein Visual noetig. |
| 4 | Testimonial (kurz) | Ein knappes Vertrauenssignal. | Testimonial-Foto (echt). Kein KI-Video. |
| 5 | Zweites Conversion-Element | Buchungstool/Formular am Ende wiederholen — nicht alle scrollen hoch. | Kein Visual — nichts darf vom CTA ablenken. Bewusst kein Video. |
| 6 | Kontakt-Alternative | Niedrigschwellige Option (E-Mail/Anruf) mit Antwortzeit-Versprechen. | Kein Visual. |

### 4. Ueber uns

| # | Sektion | Aufgabe | Visual-Slot |
|---|---|---|---|
| 1 | Hero | Identitaets-Headline. "Wir sind X. Nicht irgendeine Y." | Hero-Still (echtes Team-/Standortfoto bevorzugt, sonst Imagen). |
| 2 | Persoenliche Vorstellung | Gesicht/Inhaber, Erfahrung, Haltung, Foto. Schafft Naehe und Vertrauen. | Echtes Foto Pflicht. OPTIONAL kurzes Vorstell-/Story-Video (Higgsfield-Veredelung oder echtes Material) — hier zahlt Bewegung auf Vertrauen ein. |
| 3 | Das Team | Rollen und was sie fuer den Kunden tun (nutzenorientiert, nicht nur Titel). | Echte Team-Fotos im einheitlichen Stil. Kein KI-Gesicht. |
| 4 | Werte / Warum wir | Haltung und Differenzierung. Ehrlichkeit, Vorgehen. | Optional Stimmungs-Stills. Kein Video. |
| 5 | CTA | "Lern uns kennen" -> Erstgespraech. | Optional Hintergrund-Still. Kein Video. |

### 5. Kontakt

Conversion-Seite. Schnell, klar, ablenkungsfrei.

| # | Sektion | Aufgabe | Visual-Slot |
|---|---|---|---|
| 1 | Hero/Intro | Kurz: wie erreichbar, Antwortzeit-Versprechen. | Kleines Still oder gar keins. Bewusst kein Video (Ladezeit, Fokus). |
| 2 | Kontaktformular | Primaere Aktion. Wenige Felder (Name, E-Mail, Anliegen). Conversion auf Submit tracken. | Kein Visual. |
| 3 | Direkte Kanaele | Telefon (klickbar tel:), E-Mail, ggf. WhatsApp. Oeffnungszeiten. | Optional Icons. Kein Video. |
| 4 | Standort/Karte | Adresse + Karte (wichtig fuer lokalen ICP + Local SEO). | Echtes Standortfoto + eingebettete Karte. Kein KI-Bild des Standorts. |
| 5 | Reassurance | "Antwort innerhalb von 24 Stunden." Senkt Absprung. | Kein Visual. |

### 6. Standort-/City-Page

Ziel: lokal ranken (z.B. "Elektriker Leipzig"). Mindestens 60% Unique Content — keine Copy-Paste mit getauschtem Stadtnamen. Conversion-orientiert.

| # | Sektion | Aufgabe | Visual-Slot |
|---|---|---|---|
| 1 | Hero | H1 = Leistung + Ort. Subline mit lokalem Nutzen. CTA. | Hero-Still (Imagen, idealerweise lokaler Bezug). Statisch — kein Video auf Conversion-Seite. |
| 2 | Lokaler Bezug | Stadtteile, regionale Beispiele, Einzugsgebiet konkret nennen. | Echtes lokales Foto wenn vorhanden (staerker als KI). |
| 3 | Leistungen vor Ort | Welche Leistungen am Standort, lokal formuliert. | Konsistente Stills je Leistung. Kein Video. |
| 4 | Lokaler Beweis | Referenzen/Projekte aus der Region, ggf. Zahlen. | Echte Projekt-/Referenzfotos. Kein KI-Bild fuer echte Referenzen. |
| 5 | Lokale FAQ | Ortsbezogene Fragen (Anfahrt, Gebiet, Termine). | Kein Visual. |
| 6 | Standort-Info | Adresse, Karte, Anfahrt, Oeffnungszeiten. | Karte + echtes Standortfoto. |
| 7 | CTA | Lokaler Abschluss-CTA. | Optional Hintergrund-Still. Kein Video. |

### 7. Ratgeber / Blog (Einzelartikel)

Ziel: organischer Traffic ueber informationsorientierte Keywords, dann weich zur Conversion fuehren.

| # | Sektion | Aufgabe | Visual-Slot |
|---|---|---|---|
| 1 | H1 + Intro | H1 = Suchintention. Erste 2 Saetze beantworten die Frage direkt (Featured-Snippet-Chance). | Ein Beitragsbild (Imagen, Alt-Tag mit Keyword). Kein Video noetig. |
| 2 | Inhaltsverzeichnis | Bei langen Artikeln. Sprungmarken, verbessert Lesbarkeit + SERP. | Kein Visual. |
| 3 | Hauptteil (H2/H3) | Frage vollstaendig beantworten. Scanbar: kurze Absaetze, Listen, Zwischenueberschriften. | Erklaer-Stills/Diagramme wo es das Verstaendnis hebt (Imagen). OPTIONAL eingebetteter Erklaer-Clip nur bei stark visuellen Themen. |
| 4 | Praxis/Beispiel | Konkretes Beispiel oder Schritt-Anleitung. Zeigt Kompetenz. | Schritt-Stills oder Screenshots. Optional kurzer Demo-Clip. |
| 5 | Soft-CTA | Mittig + am Ende: Bezug zur Leistung, Verlinkung auf Leistungs-/Kontaktseite. | Kein Visual. |
| 6 | Verwandte Artikel | Interne Verlinkung, haelt Besucher auf der Seite. | Thumbnail-Stills der Artikel. |
| 7 | Autor/Datum | E-E-A-T-Signal: Autor, Aktualisierungsdatum. | Echtes Autorenfoto. |

### 8. FAQ-Seite

| # | Sektion | Aufgabe | Visual-Slot |
|---|---|---|---|
| 1 | Hero/Intro | Kurze Einleitung, ggf. Suche/Kategorien. | Kleines Still oder keins. Kein Video. |
| 2 | Fragenbloecke | Nach Themen gruppiert (Leistung, Preis, Ablauf, Vertrag). Frage als H2/H3, Antwort knapp. | Kein Visual — Lesbarkeit zaehlt. |
| 3 | FAQ-Schema | FAQPage-strukturierte-Daten (JSON-LD) fuer Rich Results. | Kein Visual. |
| 4 | Rest-CTA | "Frage nicht dabei?" -> Kontakt/Erstgespraech. | Optional Hintergrund-Still. Kein Video. |

## Wo Video JA, wo Video NEIN (Schnelluebersicht)

| Seitentyp | Video sinnvoll? | Form |
|---|---|---|
| Startseite | Optional | Motion-Hero (stumm, loop, kurz) + ggf. echtes Testimonial-Video |
| Leistungsseite | Empfohlen | B-Roll / Prozess-Erklaer-Clip in "So funktioniert es" |
| Landingpage | Eher nein | Statisch; hoechstens sehr kurzer Hero-Clip wenn er konvertiert |
| Ueber uns | Optional | Story-/Vorstell-Video (Vertrauen) |
| Kontakt | Nein | Conversion-Fokus, Ladezeit |
| Standort-/City-Page | Nein | Conversion + Performance lokal |
| Blog | Selten | Nur Erklaer-/Demo-Clip bei visuellen Themen |
| FAQ | Nein | Lesbarkeit |

Faustregel: Conversion- und Performance-kritische Seiten (Landingpage, Kontakt, City-Page) bleiben statisch. Marken-, Erklaer- und Vertrauens-Seiten (Startseite, Leistung, Ueber uns) duerfen Bewegung tragen — immer mit Poster-Fallback.

## Checkliste

- [ ] Seitentyp gewaehlt, passende Anatomie befolgt (Sektionen + Reihenfolge)
- [ ] Genau ein primaerer CTA definiert
- [ ] Hero erfuellt 5-Sekunden-Test (Headline + Subline + CTA + Vertrauen)
- [ ] CTA mindestens zweimal platziert (Hero + Ende; lange Seiten auch mittig)
- [ ] Genau eine H1; Sektionen mit H2/H3 strukturiert
- [ ] Beweis (Zahlen/Testimonials/Referenzen) frueh eingebaut
- [ ] du-Ansprache, kurze Saetze, keine Em-Dashes (Voice)
- [ ] VISUAL-Slots gefuellt: Stills via `image-generation.md`, Clips nur wo markiert via `video-generation.md`
- [ ] Jedes Video hat Poster-Still, ist stumm/loop/lazy, stellt nicht den LCP; Landingpage/Kontakt/City-Page bleiben statisch
- [ ] Meta Title <= 60 Zeichen, Meta Description <= 160 Zeichen
- [ ] Alt-Tags auf allen Bildern
- [ ] Matomo eingebunden, Google-Ads-Conversion auf Zielaktion, Meta Pixel wo noetig, UTM bei Ads-Seiten durchgeschleust; kein GA4
- [ ] Mobile + Desktop getestet, Ladezeit < 3 Sekunden (Video-Gewicht mitgerechnet)
- [ ] Bei City-Page: >= 60% Unique Content, lokale Bezuege, Adresse/Karte
- [ ] Bei Blog: erste Saetze beantworten die Suchintention, interne Verlinkung, Autor/Datum
- [ ] Bei FAQ/Blog/Standort: passendes Schema (FAQPage / Article / LocalBusiness)
- [ ] Rechtliche Seiten verlinkt (Impressum, Datenschutz)

## Vorlagen & Beispiele

### Hero-Block (kopierbar, ICP-Beispiel Handwerk)

```
Headline:   Dein Elektriker in [Stadt] — schnell vor Ort, fair im Preis.
Subline:    Fuer Privatkunden und Betriebe im Raum [Stadt]. Termin oft schon morgen.
CTA-Button: Jetzt Termin anfragen ->
Unter CTA:  Antwort innerhalb von 24 Stunden. Kein Callcenter.
Visual:     Hero-Still via image-generation.md. Optional Motion-Hero via video-generation.md (Poster Pflicht).
```

### Problem-Block (3 Schmerzpunkte, ICP-Beispiel Kosmetik)

```
Ueberschrift: Kennst du das?
Block 1: "Ich finde keinen Termin der in meinen Alltag passt."
Block 2: "Bei der letzten Behandlung wurde mir was aufgeschwatzt."
Block 3: "Ich weiss vorher nie genau was es kostet."
Text:    Genau dafuer machen wir es anders.
```

### Standort-/City-Page Meta-Set (Muster, anpassen)

```
URL:         /elektriker-[stadt]
Title:       Elektriker in [Stadt] | Schnell, fair, zuverlaessig
Description: Elektriker fuer [Stadt] & Umgebung. Termin oft schon morgen, transparente Preise, Festpreis-Angebot. Jetzt anfragen.
H1:          Elektriker in [Stadt] — schnell vor Ort fuer Privat und Gewerbe
```

### FAQ-Schema (JSON-LD, einbettbar)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Wie schnell bekomme ich einen Termin?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In der Regel innerhalb von 24-48 Stunden, bei Notfaellen am selben Tag."
    }
  }]
}
```

### CTA-Bausteine (wiederverwendbar)

```
Primaer:     Kostenloses Erstgespraech buchen ->
Reassurance: Kein Pitch. Kein Druck. Wir schauen gemeinsam ob es passt.
Kontakt-Alt: Lieber schreiben? name@domain.de — Antwort innerhalb von 24 Stunden.
```

### SEO-Grundregeln (gelten fuer jede Seite)

- Genau eine H1 pro Seite
- Meta Title max. 60 Zeichen, Meta Description max. 160 Zeichen
- Alt-Tags auf allen Bildern
- Sprechende URL mit Keyword bzw. Ort+Leistung

## Bezug

- Skill/Workflow `build-page` (Bau-Kreislauf): erstellt Seiten woertlich nach diesem Bauplan inkl. VISUAL-Slots.
- Skill `generate-visuals`: erzeugt pro Slot das passende Asset (Infografik, Imagen-Bild oder Higgsfield-Video) und prueft Performance.
- Playbook `copywriting`/Voice (`references/voice.md`): liefert Ton und Textbausteine fuer jede Sektion.
- Playbook `image-generation` (`references/playbooks/image-generation.md`): Stills via Gemini Imagen 4 / `scripts/generate-image.mjs` fuer alle Bild-Slots und Video-Poster.
- Playbook `video-generation` (`references/playbooks/video-generation.md`): Higgsfield (MCP) fuer Motion-Hero, B-Roll, Story-/Erklaer-Clips — nur in den markierten Slots.
- Playbook `seo-onpage`: Keyword je Seite, Meta-Daten, City-Page-Auswahl.
- Playbook `tracking-setup`: Matomo + Google-Ads-Conversion + Meta Pixel auf die jeweilige Zielaktion, kein GA4.
- Workflow `weekly-review`/`audit`: prueft live gebaute Seiten gegen die Checkliste (Bauen -> Messen -> Entscheiden -> Umsetzen).
