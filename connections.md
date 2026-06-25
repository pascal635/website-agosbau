# Connections

Registry der Datenquellen und Systeme, die dieses Website-AIOS erreichen kann. Die kunden­spezifischen Zeilen (Hosting, Domain, Monitore, Funnel) füllt `/onboard` aus den Intake-Antworten (W4/W5). Über die Zeit erweitern.

## OS-Fähigkeiten (Standard, kommen mit dem Template)

Diese Tools sind Teil jedes Klons und sofort nutzbar — keine pro-Kunde-Einrichtung nötig (außer API-Key, wo vermerkt).

| # | Schicht | Quelle | Liefert | Mechanismus | Auth | Zuletzt geprüft |
|---|---|---|---|---|---|---|
| 1 | Monitor | Sistrix | Sichtbarkeitsindex, Keywords, Wettbewerber | **mcp (in Umgebung vorhanden)** | API-Key nötig | — |
| 2 | Visuals | Gemini (Imagen 4) | KI-Web-Stills (Atmosphäre/Konzept) | **`script` `scripts/generate-image.mjs`** | GEMINI_API_KEY in .env · Modell `imagen-4.0-generate-001` | — |
| 3 | Visuals | Higgsfield | Cinematic/Video, Bild, Audio, 3D | **`mcp` (`.mcp.json`)** | OAuth | — |

## Kunden-Systeme (pro Klon, `/onboard` füllt aus)

Platzhalter — Werte und Auth-Details trägt `/onboard` pro Kunde ein. Default-Status `not yet connected`.

| # | Schicht | Quelle | Liefert | Mechanismus | Auth | Zuletzt geprüft |
|---|---|---|---|---|---|---|
| 4 | Build | Git-Repo | Single Source of Truth der Seite | git (lokal, Klon `agosbau-site`, Branch `main`) | — | 2026-06-24 |
| 5 | Build | Hosting | Auslieferung der Seite | not yet connected (Default: Hetzner statisch) | → offen | — |
| 6 | Build | Domain / Registrar | DNS, Go-Live-Records | **agosbau.de** (Bestand, aktuell WordPress) — Registrar/DNS-Zugang offen | → offen | — |
| 7 | Monitor | Google Search Console | Impressions, Klicks, Rankings, Indexierung | not yet connected | → offen | — |
| 8 | Monitor | Google Ads | Kosten, Conversions, Suchbegriffe | not yet connected | → offen | — |
| 9 | Monitor | Meta Ads | Reichweite, Lead-Kosten, Creatives | not yet connected | → offen | — |
| 10 | Monitor | Matomo | Traffic, Conversions (Privacy-first) | not yet connected | → offen (aufsetzen) | — |
| 11 | Local | Google Business Profile (GBP) | Local-SEO, NAP, Bewertungen | not yet connected (Ø 5,0, 6 Bewertungen vorhanden) | → offen | — |

**NAP (für Schema + Verzeichnisse, NAP-Konsistenz):** AGOS BAU, André Paul Gostomczyk, Auf den Mehren 45, 28832 Achim · Tel 04202 511 61 31 · WhatsApp 0174 8842492 (`https://wa.me/491748842492`) · info@agosbau.de · Instagram @agos_bau · Öffnungszeiten Mo–Do 08–17, Fr 08–14 Uhr. **Lead-Routing: Formulare per E-Mail an info@agosbau.de.**

**Mechanism-Optionen:** `mcp` (MCP-Server), `script` (Python/Node/Bash gegen eine API, in `scripts/`), `export` (CSV/JSON-Dump), `key+ref` (`.env`-Key + `references/{tool}-api.md`), `not yet connected`.

## Tracking-Default dieses Setups

**Matomo** (Web-Analytics, privacy-first) + **Google-Ads-Conversion-Tracking** (auf die primäre Conversion) + **Meta Pixel** (Retargeting). **Kein GA4** — datenschutzfreundlicher und genauer fürs Ads-Tracking. Alles consent-gesteuert (CMP). Build-Stack: **Astro + Tailwind**, statisches Hosting. Siehe `decisions/log.md`.

## Build-Stack-Default

Astro + Tailwind, design-system-basiert, ausgeliefert über Git (statisch). Visual-Pipeline: Gemini Imagen 4 für Stills, Higgsfield für Video/Cinematic/Audio/3D. Skill `generate-visuals`. Playbooks: `references/playbooks/image-generation.md`, `references/playbooks/video-generation.md`.

---

Beim Verbinden eines Monitors zusätzlich `references/{tool}-api.md` anlegen (Endpoints, Auth-Flow, häufige Queries — einmal recherchiert, für immer gespeichert).
