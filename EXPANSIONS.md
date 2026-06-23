# Expansions

Das Kit startet bewusst dünn: `onboard` + `weekly-review`, eine Datenquelle (Sistrix). Hier sind die nächsten Ausbaustufen — füge sie hinzu, wenn der dünne Kreislauf einmal rund läuft.

## Skills

- **`build-page`** — eine Seite aus dem Design-System bauen (Input: Copy + Seitentyp → Output: Komponenten-Komposition, Commit).
- **`seo-task`** — On-Page-Optimierung einer Unterseite (Title/Meta/H-Struktur/interne Links) auf Basis von GSC/Sistrix.
- **`content-task`** — Blog-/Landingpage-Content schreiben/optimieren in Brand Voice.
- **`conversion-task`** — Conversion-Element ändern + (später) A/B-Test vorbereiten.
- **`audit`** — technischer SEO-/Performance-Crawl, Lücken-Report.

## Monitore (Reihenfolge nach Sistrix)

1. **Google Search Console** — kostenlos, SEO-Kern. Skript oder MCP.
2. **Google Ads** — wenn Ads laufen. API/Export.
3. **Meta Ads** — wenn Ads laufen. API/Export.
4. **Matomo** — Privacy-first Traffic/Conversions.

Je Monitor: `references/{tool}-api.md` anlegen (Endpoints, Auth, häufige Queries).

## Build-Schicht

- Tech-Stack-Entscheidung dokumentieren (`decisions/log.md`).
- Design-System v1: Tokens (Farben, Typo, Spacing) + Kern-Komponenten + Komponenten-Doku in `references/design-system.md`.

## Automatisierung

- `weekly-review` per Cron/Schedule wöchentlich anstoßen, Ergebnis als Entwurf.
- Anomalie-Alerts bei KPI-Abweichungen.
