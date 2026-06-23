# Playbook: Seitenaufbau

> Zweck: Definiert für jeden Seitentyp die Sektionen, ihre Reihenfolge und die Aufgabe jeder Sektion — damit die KI Kundenseiten woertlich nach Bauplan erstellt statt zu raten.

## Prinzipien

- Eine Seite = ein Ziel = ein primaerer CTA. Jede Seite fuehrt zum Erstgespraech, Anruf oder Formular. Kein CTA-Chaos.
- Above the Fold muss in 5 Sekunden klar machen: Was ist das, fuer wen, was tun. Headline + Subline + CTA + Vertrauenssignal.
- ICP zuerst: lokale B2C-Dienstleister mit Standort (Handwerk/Haustechnik, Makler, Kosmetik/Aesthetik, Versicherungs-/Finanzberater, Coaches). Texte sprechen den Inhaber direkt an ("du"), nennen Ort und Branche.
- Genau eine H1 pro Seite. Sektionen tragen H2, Unterpunkte H3. Reihenfolge der Sektionen = SEO- und Lese-Hierarchie.
- Beweis vor Behauptung: Zahlen, Testimonials, Referenzen so frueh wie moeglich. Keine Hochglanz-Floskeln ohne Beleg.
- CTA mindestens zweimal pro Seite: nach dem Hero und am Ende. Lange Seiten: zusaetzlich in der Mitte.
- Tracking-Default ist gesetzt: Matomo auf allen Seiten, Google-Ads-Conversion auf der primaeren Aktion (Formular-Submit / Buchung / Anruf). Kein Google Analytics.
- Stadt-/City-Pages: mindestens 60% Unique Content (lokale Bezuege, regionale Beispiele) — sonst Doorway-Page-Risiko.

## Schritt fuer Schritt

1. Seitentyp bestimmen und passende Anatomie unten waehlen.
2. Ziel der Seite und primaeren CTA festlegen (genau einer).
3. Sektionen in der vorgegebenen Reihenfolge anlegen — keine Sektion auslassen ohne Grund, keine Reihenfolge tauschen.
4. H1 formulieren (genau eine, enthaelt das Hauptkeyword bzw. bei Standortseiten Ort + Leistung).
5. Pro Sektion den Text erstellen: Aufgabe der Sektion erfuellen, Voice aus `references/voice.md` (du-Ansprache, kurze Saetze, keine Em-Dashes).
6. CTA-Platzierung pruefen: Hero + Footer-Bereich, lange Seiten zusaetzlich mittig.
7. SEO-Grundstruktur setzen: Meta Title (max. 60 Zeichen), Meta Description (max. 160 Zeichen), Alt-Tags auf allen Bildern, eine H1.
8. Tracking verdrahten: Matomo-Snippet, Google-Ads-Conversion auf die Zielaktion, UTM-Parameter bei Ads-Zielseiten durchschleusen.
9. Mobile + Desktop pruefen, Ladezeit unter 3 Sekunden.
10. Gegen die Checkliste pruefen, dann freigeben.

## Anatomie je Seitentyp

### 1. Startseite

| # | Sektion | Aufgabe |
|---|---|---|
| 1 | Hero (Above the Fold) | Headline (Nutzenversprechen) + Subline (fuer wen) + primaerer CTA + Reassurance-Zeile unter dem Button. In 5 Sekunden klar. |
| 2 | Vertrauens-Zeile | Direkt unter Hero. Logos/Branchen/Genutzt-von. Senkt Bounce. |
| 3 | Problem-Block | 3 Schmerzpunkte des ICP woertlich. "Wenn dir das bekannt vorkommt — dafuer sind wir da." |
| 4 | Positionierung | Was ist das Angebot, was unterscheidet es. Abgrenzung zum Status quo. CTA auf Leistungsseite. |
| 5 | Testimonial (Feature) | Ein starkes Zitat mit Name/Branche, Video wenn vorhanden. |
| 6 | Leistungs-/Angebots-Uebersicht | Kernleistungen oder Pakete/Preise. Transparent. Je Element ein "Mehr erfahren". |
| 7 | Warum wir (3 Kernpunkte) | Differenzierung in 3 Bullets. Ergebnisse statt Aktivitaeten. |
| 8 | Abschluss-CTA | Wiederholung des primaeren CTA mit kurzer Reassurance. |

### 2. Leistungsseite

| # | Sektion | Aufgabe |
|---|---|---|
| 1 | Hero | Headline = konkrete Leistung + Nutzen. Subline = Klarheit/Transparenz. |
| 2 | Einleitung | Wie das Angebot grundsaetzlich funktioniert. Einwand "kostet extra" entkraeften. |
| 3 | So funktioniert es | Ablauf/Prozess sichtbar machen (Schritte oder Queue-Logik). Grafik-Hinweis fuer Designer. |
| 4 | Leistungsbereiche | Was konkret uebernommen wird, in 4-6 Bloecken. |
| 5 | Pakete/Preise im Detail | Pro Paket: Fuer wen, Inklusive, typische Beispiele, ggf. Onboarding-Fee, CTA. |
| 6 | FAQ | Die 4-6 haeufigsten Kaufeinwaende beantworten (Wechsel, Laufzeit, Zufriedenheit). |
| 7 | Abschluss-CTA | "Nicht sicher welches passt?" -> Erstgespraech. |

### 3. Landingpage (Ads-/Funnel-Ziel)

Muss eigenstaendig funktionieren — Besucher hat oft keine andere Seite gesehen. Eine Aktion, keine Ablenkung, schlanke Navigation.

| # | Sektion | Aufgabe |
|---|---|---|
| 1 | Hero | Klares Versprechen + Subline. Conversion-Element direkt darunter (Calendly/Formular) — das ist der CTA. |
| 2 | Was passiert / Was du bekommst | 3 Punkte, was den Besucher erwartet. Nimmt Angst vor dem Klick. |
| 3 | Fuer wen / nicht fuer wen | Qualifiziert. "Das ist fuer dich wenn..." + "Nicht fuer dich wenn...". |
| 4 | Testimonial (kurz) | Ein knappes Vertrauenssignal. |
| 5 | Zweites Conversion-Element | Calendly/Formular am Ende wiederholen — nicht alle scrollen hoch. |
| 6 | Kontakt-Alternative | Niedrigschwellige Option (E-Mail/Anruf) mit Antwortzeit-Versprechen. |

### 4. Ueber uns

| # | Sektion | Aufgabe |
|---|---|---|
| 1 | Hero | Identitaets-Headline. "Wir sind X. Nicht irgendeine Y." |
| 2 | Persoenliche Vorstellung | Gesicht/Inhaber, Erfahrung, Haltung, Foto. Schafft Naehe und Vertrauen. |
| 3 | Das Team | Rollen und was sie fuer den Kunden tun (nutzenorientiert, nicht nur Titel). |
| 4 | Werte / Warum wir | Haltung und Differenzierung. Ehrlichkeit, Vorgehen. |
| 5 | CTA | "Lern uns kennen" -> Erstgespraech. |

### 5. Kontakt

| # | Sektion | Aufgabe |
|---|---|---|
| 1 | Hero/Intro | Kurz: wie erreichbar, Antwortzeit-Versprechen. |
| 2 | Kontaktformular | Primaere Aktion. Wenige Felder (Name, E-Mail, Anliegen). Conversion auf Submit tracken. |
| 3 | Direkte Kanaele | Telefon (klickbar tel:), E-Mail, ggf. WhatsApp. Oeffnungszeiten. |
| 4 | Standort/Karte | Adresse + Karte (wichtig fuer lokalen ICP + Local SEO). |
| 5 | Reassurance | "Antwort innerhalb von 24 Stunden." Senkt Absprung. |

### 6. Standort-/City-Page

Ziel: lokal ranken (z.B. "Elektriker Leipzig"). Mindestens 60% Unique Content — keine Copy-Paste mit getauschtem Stadtnamen.

| # | Sektion | Aufgabe |
|---|---|---|
| 1 | Hero | H1 = Leistung + Ort. Subline mit lokalem Nutzen. CTA. |
| 2 | Lokaler Bezug | Stadtteile, regionale Beispiele, Einzugsgebiet konkret nennen. |
| 3 | Leistungen vor Ort | Welche Leistungen am Standort, lokal formuliert. |
| 4 | Lokaler Beweis | Referenzen/Projekte aus der Region, ggf. Zahlen. |
| 5 | Lokale FAQ | Ortsbezogene Fragen (Anfahrt, Gebiet, Termine). |
| 6 | Standort-Info | Adresse, Karte, Anfahrt, Oeffnungszeiten. |
| 7 | CTA | Lokaler Abschluss-CTA. |

### 7. Ratgeber / Blog (Einzelartikel)

Ziel: organischer Traffic ueber informationsorientierte Keywords, dann weich zur Conversion fuehren.

| # | Sektion | Aufgabe |
|---|---|---|
| 1 | H1 + Intro | H1 = Suchintention. Erste 2 Saetze beantworten die Frage direkt (Featured-Snippet-Chance). |
| 2 | Inhaltsverzeichnis | Bei langen Artikeln. Sprungmarken, verbessert Lesbarkeit + SERP. |
| 3 | Hauptteil (H2/H3) | Frage vollstaendig beantworten. Scanbar: kurze Absaetze, Listen, Zwischenueberschriften. |
| 4 | Praxis/Beispiel | Konkretes Beispiel oder Schritt-Anleitung. Zeigt Kompetenz. |
| 5 | Soft-CTA | Mittig + am Ende: Bezug zur Leistung, Verlinkung auf Leistungs-/Kontaktseite. |
| 6 | Verwandte Artikel | Interne Verlinkung, haelt Besucher auf der Seite. |
| 7 | Autor/Datum | E-E-A-T-Signal: Autor, Aktualisierungsdatum. |

### 8. FAQ-Seite

| # | Sektion | Aufgabe |
|---|---|---|
| 1 | Hero/Intro | Kurze Einleitung, ggf. Suche/Kategorien. |
| 2 | Fragenbloecke | Nach Themen gruppiert (Leistung, Preis, Ablauf, Vertrag). Frage als H2/H3, Antwort knapp. |
| 3 | FAQ-Schema | FAQPage-strukturierte-Daten (JSON-LD) fuer Rich Results. |
| 4 | Rest-CTA | "Frage nicht dabei?" -> Kontakt/Erstgespraech. |

## Checkliste

- [ ] Seitentyp gewaehlt, passende Anatomie befolgt (Sektionen + Reihenfolge)
- [ ] Genau ein primaerer CTA definiert
- [ ] Hero erfuellt 5-Sekunden-Test (Headline + Subline + CTA + Vertrauen)
- [ ] CTA mindestens zweimal platziert (Hero + Ende; lange Seiten auch mittig)
- [ ] Genau eine H1; Sektionen mit H2/H3 strukturiert
- [ ] Beweis (Zahlen/Testimonials/Referenzen) frueh eingebaut
- [ ] du-Ansprache, kurze Saetze, keine Em-Dashes (Voice)
- [ ] Meta Title <= 60 Zeichen, Meta Description <= 160 Zeichen
- [ ] Alt-Tags auf allen Bildern
- [ ] Matomo eingebunden, Google-Ads-Conversion auf Zielaktion, UTM bei Ads-Seiten durchgeschleust
- [ ] Mobile + Desktop getestet, Ladezeit < 3 Sekunden
- [ ] Bei City-Page: >= 60% Unique Content, lokale Bezuege, Adresse/Karte
- [ ] Bei Blog: erste Saetze beantworten die Suchintention, interne Verlinkung, Autor/Datum
- [ ] Bei FAQ/Blog/Standort: passendes Schema (FAQPage / Article / LocalBusiness)
- [ ] Rechtliche Seiten verlinkt (Impressum, Datenschutz)

## Vorlagen & Beispiele

### Hero-Block (kopierbar, ICP-Beispiel Handwerk)

```
Headline:   Dein Elektriker in Leipzig — schnell vor Ort, fair im Preis.
Subline:    Fuer Privatkunden und Betriebe im Raum Leipzig. Termin oft schon morgen.
CTA-Button: Jetzt Termin anfragen ->
Unter CTA:  Antwort innerhalb von 24 Stunden. Kein Callcenter.
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
URL:         /elektriker-leipzig
Title:       Elektriker in Leipzig | Schnell, fair, zuverlaessig
Description: Elektriker fuer Leipzig & Umgebung. Termin oft schon morgen, transparente Preise, Festpreis-Angebot. Jetzt anfragen.
H1:          Elektriker in Leipzig — schnell vor Ort fuer Privat und Gewerbe
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

- Skill/Workflow `seiten-bauen` bzw. `page-builder` (Sektion W-1 bis W-7 im Bau-Kreislauf): erstellt Seiten woertlich nach diesem Bauplan.
- Playbook `copywriting`/Voice (`references/voice.md`): liefert Ton und Textbausteine fuer jede Sektion.
- Playbook `seo-onpage` und Sistrix-MCP: Keyword je Seite, Meta-Daten, City-Page-Auswahl.
- Playbook `tracking-setup`: Matomo + Google-Ads-Conversion auf die jeweilige Zielaktion.
- Workflow `audit`/`/audit`: prueft live gebaute Seiten gegen die Checkliste (Bauen -> Messen -> Entscheiden -> Umsetzen).
- Quellen: LIKOVO `SOP_6.1_Website-Neuaufbau.md` (Task-Sequenz, Qualitaetschecks) und `Website-Copy_LIKOVO.md` (Sektions-Anatomie je Seitentyp).
