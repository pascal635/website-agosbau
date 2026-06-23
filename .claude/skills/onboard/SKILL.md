---
name: onboard
description: Use on Day 1 of a Website-AIOS clone, or when someone says "set up this site", "onboard the website", "let's get started", or has just cloned the kit. Reads assets/ + intake answers, then distills them into context/ files and fills CLAUDE.md + connections.md. Idempotent — re-run after editing website-intake.md or adding assets.
---

# Website-AIOS Onboarding

Der Wizard, der eine frisch geklonte Instanz scharf macht. Liest die **Assets** (Logo, CI, Bilder) und die **Intake-Antworten**, destilliert beides in `context/`, füllt `connections.md` und `CLAUDE.md`, und übergibt an den `onboarding-pipeline`-Workflow.

Eine Marke ≠ der Betreiber: Die Brand Voice und das Profil gehören der Kundenseite, nicht uns.

## Schritt 0 — Inventar

Verschaffe dir den Überblick, bevor du etwas schreibst:

1. **`website-intake.md`** lesen. Sektionen prüfen — gefüllt vs. `[Antwort hier]` / `[Sample — roh einfügen]` Platzhalter.
2. **`assets/`** scannen — `logo/`, `ci/`, `images/`. Welche Logo-Varianten (hell/dunkel/Icon/Favicon)? Gibt es ein CI-Manual (Farben/Hex, Schriften, Do/Don'ts)? Welche echten Fotos liegen vor?
3. **`intake/`** scannen — Fragebogen-Antworten, Erstgespräch-Transkripte, Unternehmensprofil, Referenzen/Bewertungen.
4. **`context/`** prüfen — existieren schon destillierte Dateien? Dann ist das ein **Re-Run** (siehe Schritt 1 Backup).

Status melden in einer Zeile: was an Assets da ist, was an Intake gefüllt ist, was fehlt.

## Schritt 1 — Lücken klären (kein Frage-Marathon)

- **Intake vollständig + Assets da** → direkt zu Schritt 2.
- **Teilweise gefüllt** → fehlende Felder gezielt erfragen, eins nach dem anderen, jede Antwort sofort in `website-intake.md` schreiben. Kein Smalltalk.
- **Leer** → die Intake-Sektionen W1–W6 konversationell durchgehen, je Antwort in die Datei schreiben.

Zwei harte Regeln:
- **Brand-Voice-Samples (W2) MÜSSEN roh eingefügt werden.** Tippt der User frische Prosa mitten im Chat: ablehnen und um echte Seitentexte/Angebote/Kunden-E-Mails verbatim bitten. Chat-geformte Proben verfälschen die Stimme.
- **Conversion-Definition + Einzugsgebiet + Recht** sind Pflicht für ICP-Seiten (lokale B2C-Dienstleister mit Standort). Fehlen sie, gezielt nachfragen — ohne sie geht keine Seite live und kein Tracking sauber.

**Re-Run:** Existieren schon Dateien in `context/`, `connections.md` (gefüllt) oder eine ausgefüllte `CLAUDE.md`, sichere sie vorher nach `archives/onboard-{YYYY-MM-DD-HHMM}/` — kopieren, nicht verschieben-und-vergessen, dann neu schreiben.

## Schritt 2 — In `context/` destillieren

Je Datei ein Schritt. Lege fehlende Ordner an. Schreibe konkret und knapp — keine Platzhalter im Output, nur das, was Intake + Assets hergeben. Wo Daten fehlen: explizit `→ offen: …` notieren statt erfinden.

1. **`context/about-site.md`** — Domain, was das Business macht, USP/Positionierung, das *eine* primäre Ziel der Seite, Conversion-Definition (was zählt als Lead: Formular / Anruf / WhatsApp / Buchung), Wettbewerber. Aus W1 + Unternehmensprofil + Transkript.

2. **`context/brand-profile.md`** — **aus Logo + CI**. Liste die vorhandenen Logo-Varianten mit Pfad. Extrahiere Farben als Hex, Schriften, Abstände/Bildsprache, Do/Don'ts aus dem CI-Manual. Gibt es kein Manual: aus dem Logo ableiten, was sicher ist (Primärfarben, Stilrichtung), Rest als `→ offen` markieren. Das ist die Design-Wahrheit für alle gebauten Seiten.

3. **`context/voice.md`** — **aus den Samples (W2), verbatim**. Header: "Match this register. Brand Voice der Seite, nicht des Betreibers. Externe Inhalte (Copy, Blog) immer erst als Entwurf zeigen." Dann die Roh-Samples unbearbeitet, danach 3–5 destillierte Voice-Regeln (Satzlänge, Ansprache du/Sie, Tonalität, typische Wörter).

4. **`context/audience.md`** — Zielgruppe/Wunschkunde, Schmerzen/Bedürfnisse, **Einzugsgebiet / Standorte** (Pflicht für Local SEO), Keyword-Themen. Aus W6 + Transkript + Standortdaten.

5. **`context/services.md`** — Leistungen/Angebote, je Service kurz Nutzen + Zielsuchbegriff, Referenzen/Bewertungen/Testimonials/Case Studies (Trust-Material), Zertifikate. Aus Fragebogen.

6. **`context/goals.md`** — nummerierte, messbare 90-Tage-KPIs aus W3. "Mehr Traffic" → in Zahl/Keyword-Set/Conversion-Rate übersetzen.

7. **`context/legal.md`** — Impressum-Daten, Datenschutz, AGB, Handelsregister, verantwortliche Person. Aus Recht-Intake. Fehlt etwas: als Blocker für Launch markieren.

## Schritt 3 — `connections.md` füllen

Aus W4 (Monitore) + W5 (Build/Hosting) + den Zugängen aus dem Intake (Domain/Registrar, GSC, Google Ads, Meta, Matomo, Google Business Profile, Hosting/Hetzner, Lead-Routing).
- Je Quelle: Mechanismus / Auth / Stand setzen. Verbundenes als verbunden markieren, Rest `not yet connected`.
- **Sistrix** bleibt `mcp (in Umgebung vorhanden)`.
- **Tracking-Default beibehalten:** Matomo + Google-Ads-Conversion statt Google Analytics.
- **Google Business Profile** als eigene Zeile (Local SEO) ergänzen, falls nicht vorhanden.

## Schritt 4 — `CLAUDE.md`-Platzhalter füllen

Alle `{{...}}` ersetzen:
- **Site Name + domain** ← W1
- **Knowledge base** ← about-site + audience + services (was die Seite ist, ICP, Top-Keywords)
- **Goals / KPIs** ← goals.md
- **Build layer** ← W5
- **Connections** ← W4 + connections.md

One-shot-Batch, kein Multi-Turn-Confirm. Der User iteriert über Edit an `website-intake.md` / neue Assets + Re-Run.

## Schritt 5 — Übergabe

Verweise auf den **`onboarding-pipeline`-Workflow** (`.claude/workflows/`) als nächsten deterministischen Schritt, falls Tiefenextraktion aus Assets/Transkripten nötig ist, und nenne die nächsten Schritte:

```
✓ Onboarding fertig. context/ ist gefüllt (about-site, brand-profile, voice, audience, services, goals, legal), connections.md + CLAUDE.md sind scharf.

Tiefe:   /onboarding-pipeline laufen lassen, wenn Transkripte/CI tiefer ausgewertet werden sollen.
Heute:   Build-Schicht entscheiden — Tech-Stack + Repo + Design-System v1 aus brand-profile.md.
Diese Woche: ersten Monitor wiren (Sistrix zuerst — Key reicht), dann /weekly-review einmal durchlaufen.
Laufend: jede Woche /weekly-review — Daten lesen, nächste Tasks entscheiden.
```

## Regeln
1. Erst Assets + Intake inventarisieren, dann schreiben.
2. Voice-Paste (W2) nicht überspringbar.
3. Conversion-Definition, Einzugsgebiet, Recht für ICP-Seiten Pflicht.
4. One-shot-Scaffold der sieben context/-Dateien + connections.md + CLAUDE.md.
5. Idempotent — Re-Run refresht, Backup nach `archives/onboard-{Datum}/`.
6. Brand-Profil & Voice der Seite ≠ Profil/Stimme des Betreibers. Nichts erfinden — Lücken als `→ offen` markieren.
