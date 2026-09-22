# GEO-Audit-Log — AGOS BAU

Protokoll der KI-Sichtbarkeit (ChatGPT, Google AI Overviews, Google AI Mode). Ein Eintrag je Routine-Runde.

**Methodik (ab Runde 1):** Sistrix AI Check statt manueller 8-Fragen-Abfrage — reproduzierbar, datiert, über Runden vergleichbar. Manuelle Stichproben in ChatGPT/Gemini/Perplexity bleiben optional als Plausibilitätscheck. Die 8 Testfragen aus `context/seo-geo-plan.md` Abschnitt 6 gelten weiterhin als inhaltlicher Rahmen.

---

## 2026-09-22 — Runde 1 (Baseline)

### AGOS BAU / agosbau.de
- **Prompts mit Nennung: 0** (ChatGPT 0 · AI Overviews 0 · AI Mode 0). Keine KI-Sichtbarkeit.

### Benchmark: die Google-Top-Wettbewerber für „Badsanierung Bremen"
Geprüft: Die Olligs (Google #1), Bergmann Bremen (#2), badsanierung-bremen.com (#3), Peinemann (#4), Installateur John (#5), Badsanierung Budak (#10).
- **Gesamt: 13 Prompts** (7 AIO, 5 AI Mode, 1 ChatGPT) — aber fast ausschließlich **Peinemann** zu **Heizungsthemen** (Ölheizung-Alternative, Heizöl, Heizungsnotdienst, Vitocal-Datenblatt, Gasleitung prüfen, Fußbodenheizung-Wasser). Dazu Fehltreffer durch Namensgleichheit („Peinemann Natursaat", Tomaten).
- **Bad-/Fliesenbezug: genau 1 Prompt** — ChatGPT „was kostet ein gäste-wc-fliesen?" zitiert badsanierung-bremen.com als eine von 12 Quellen.
- Die Olligs (Google #1 fürs Haupt-Keyword): 2 Quellennennungen, keine erkennbar zum Thema Bad.

**Schluss:** Für Bad- und Fliesenthemen wird im Raum Bremen **kein lokaler Betrieb** von KI-Systemen genannt — auch die Google-Spitze nicht. AGOS' Null ist die Null der ganzen Kategorie. Das Feld ist offen; der Rückstand ist keiner.

### Muster: wann KI lokale Betriebe überhaupt nennt
Die einzigen Prompts mit **namentlich genannten lokalen Betrieben inkl. Telefonnummer** waren Notdienst-Anfragen („heizungsnotdienst bremen", „klempner bremen notdienst") in Google AI Overviews. Quellen: die **eigenen Websites** der Betriebe (pinkepank-bremen.de, peinemann.de, hueser-haustechnik.de, hagen-drzysga.de) plus ein Vermittlungsportal. Muster: dringend + lokal + Leistung und Telefonnummer stehen klar auf der Seite.

### Topic Research „badsanierung" (Sistrix, was Menschen KI-Chatbots fragen)
- **206 Themen**, Ø 3,5 Dialogschritte. **96 % Learning-Intent, 99 % Consideration-Phase.** Kommerzielle/„welcher Anbieter"-Themen: **keine erfasst.**
- Top-Themen nach Volumen: Eigenleistung/Kosten/Gewerke (12.100) · Badrenovierung Kosten + Fördermittel (11.500) · **Fugenloses Bad / Mikrozement (11.300)** · Kosten Handwerker/Material/Sanitär (7.350) · Mietminderung bei Badsanierung (5.000) · Planung/Werkzeuge/Voraussetzungen (3.500) · Handwerkerleistungen steuerlich absetzen (200) · Gewährleistung 5 Jahre (150).
- **Bedeutung:** Menschen lassen sich von KI *erklären*, nicht *empfehlen*. Der realistische GEO-Weg ist, als **zitierte Quelle** für Lernfragen (Kosten, Förderung, Gewerke, Eigenleistung vs. Fachbetrieb) aufzutauchen — genau das Format der FAQ-Blöcke und des Ratgebers. Inhaltliche Lücke gegenüber den Top-Themen: **fugenloses Bad / Mikrozement** (kein Inhalt auf agosbau.de), Eigenleistung (was geht selbst, was nicht — Abdichtung!), Handwerkerkosten steuerlich, Gewährleistung.

### KPI-Kalibrierung
Plan-Ziel „AGOS bei ≥3 von 8 Fragen genannt" war ohne Benchmark gesetzt. Neu: **Runde 2 → ≥1 Prompt im Sistrix AI Check** (Kategorie-Benchmark liegt bei ~0). Zusätzlich beobachten, ob AIO für „badsanierung bremen"/„fliesenleger bremen" überhaupt ausgespielt wird.

### Nächste Messung
~2026-10-20 (Runde 2). Gleiche Abfragen: AI Check overview/prompts/sources für AGOS + Wettbewerber-Batch.
