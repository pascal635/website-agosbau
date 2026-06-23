---
name: weekly-review
description: The heart of the Website-AIOS. Run weekly (or on "let's review the site", "what do the numbers say", "what should we do next on the site"). Pulls data from the connected monitors, summarizes what changed, and proposes the next prioritized tasks. One run = data read + decision logged.
---

# Weekly Review — das Herz des Kreislaufs

Der wöchentliche Takt: Daten lesen → was sagen sie → was ist die *eine* wichtigste nächste Maßnahme → Tasks priorisieren → Entscheidung loggen. Alle Änderungen an der Seite entstehen hier.

## Step 1 — Kontext laden

Read `context/about-site.md`, `context/goals.md`, `connections.md`, und die letzten Einträge in `decisions/log.md`. Du musst wissen: was ist das Ziel der Seite, welche KPIs, welche Monitore sind verbunden, was wurde letzte Woche entschieden/umgesetzt.

## Step 2 — Daten ziehen

Für jeden in `connections.md` als verbunden markierten Monitor die relevanten Zahlen holen:
- **Sistrix** (MCP in der Umgebung): Sichtbarkeitsindex-Trend, Keyword-Bewegungen (Gewinner/Verlierer), Wettbewerbsvergleich. Nutze die `ai_*`/`domain_*`/`keyword_*` Tools via ToolSearch.
- **Google Search Console:** Impressions/Klicks/CTR/Position je Query + Seite, Indexierungsprobleme.
- **Google Ads:** Kosten, Conversions, CPL, auffällige Suchbegriffe.
- **Meta Ads:** Lead-Kosten, Creative-Performance, ermüdende Anzeigen.
- **Matomo:** Traffic-Quellen, Conversion-Pfade, Absprünge.

Wenn ein Monitor noch nicht verbunden ist: überspringen und im Output als Lücke nennen — nicht raten.

## Step 3 — Synthese

Knapp, kein Daten-Dump:
- **Was hat sich verändert** (vs. letzte Woche / Ziel-KPIs aus `goals.md`).
- **Was die Zahlen sagen** — 3–5 Beobachtungen mit Bezug zu den 90-Tage-Zielen.
- **Auffälligkeiten/Anomalien**, die Aufmerksamkeit brauchen.

## Step 4 — Tasks vorschlagen

Priorisierte Liste nächster Tasks, kategorisiert (SEO / Content / Conversion / Technik). Jeder Task:
- konkret und in 1–3 Schritten umsetzbar,
- mit Begründung aus den Daten,
- Default Shift: bei jedem Task "in welchem Umfang kann KI das übernehmen?".

Dann klar: **die eine wichtigste Maßnahme diese Woche** + warum.

## Step 5 — Entscheidung loggen

Genehmigte Tasks als Eintrag in `decisions/log.md` vorschlagen (Datum, Entscheidung, Why, Owner). Umsetzung läuft danach über die Build-Schicht (Git) — der Kreislauf schließt sich.

## Regeln
- Niemals aus dem Gedächtnis raten, wenn ein Monitor verbunden ist — Daten ziehen.
- Lieber 3 scharfe Tasks als 12 vage.
- Output endet mit der *einen* nächsten Maßnahme, nicht mit einem Menü.
