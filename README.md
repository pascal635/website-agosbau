# Website-AIOS

Ein eigenständiges, klonbares Betriebssystem für eine Website. Es baut die Seite und lässt sie danach **laufend wachsen** — SEO, Content, Conversion und Überwachung in einem geschlossenen Kreislauf, gesteuert allein über das wöchentliche Gespräch mit dem AIOS.

Gebaut nach demselben Muster wie ein persönliches AIOS: **Repo klonen → `/onboard` → läuft.** Ein Klon pro Website. Erste Instanz: die LIKOVO-Seite. Danach jede Kundenseite.

## Der Kreislauf

```
   ┌──────────────────────────────────────────────────────┐
   │                                                        ▼
1 · Bauen  →  2 · Messen  →  3 · Entscheiden  →  4 · Umsetzen
(Git +        (Daten         (Wöchentliches      (Tasks über
Design-       einsammeln)     Review = Herz)      das AIOS)
System)            ▲
                   │
            Monitoring: GSC · Sistrix · Ads · Meta
```

Phase 3 — das wöchentliche Review — ist das Herz: Du schaust mit dem AIOS auf die Daten und entscheidest die nächsten Tasks. Alle Änderungen an der Seite laufen ausschließlich darüber.

## So startest du

1. Repo klonen.
2. `/onboard` ausführen — der Wizard fragt ab, welche Seite, Brand Voice, Ziele/KPIs, welche Monitore und den Tech-Stack. Schreibt das Ergebnis in `context/`, `connections.md` und `CLAUDE.md`.
3. `/weekly-review` wöchentlich laufen lassen — zieht die verbundenen Daten, fasst zusammen, schlägt priorisierte Tasks vor.

## Wo was liegt

- `website-intake.md` — Source-of-Truth-Fragebogen, von `/onboard` gelesen.
- `context/` — über die Seite, Brand Voice, Ziele (von `/onboard` gefüllt).
- `references/` — Architektur, Design-System-Doku, API-Guides je Monitor.
- `connections.md` — Registry der Datenquellen + Git + Hosting.
- `decisions/log.md` — was wann warum an der Seite geändert wurde.
- `.claude/skills/` — `onboard`, `weekly-review` (mehr via `EXPANSIONS.md`).

Vollständige Architektur: `references/website-aios-architektur.md`.
