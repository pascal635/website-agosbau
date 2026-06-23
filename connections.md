# Connections

Registry der Datenquellen und Systeme, die dieses Website-AIOS erreichen kann. Von `/onboard` aus W4/W5 gefüllt, über Zeit erweitert.

| # | Schicht | Quelle | Liefert | Mechanismus | Auth | Zuletzt geprüft |
|---|---|---|---|---|---|---|
| 1 | Build | Git-Repo | Single Source of Truth der Seite | _von /onboard_ | — | — |
| 2 | Build | Hosting | Auslieferung der Seite | _von /onboard_ | — | — |
| 3 | Monitor | Google Search Console | Impressions, Klicks, Rankings, Indexierung | not yet connected | — | — |
| 4 | Monitor | Sistrix | Sichtbarkeitsindex, Keywords, Wettbewerber | **mcp (in Umgebung vorhanden)** | API-Key nötig | — |
| 5 | Monitor | Google Ads | Kosten, Conversions, Suchbegriffe | not yet connected | — | — |
| 6 | Monitor | Meta Ads | Reichweite, Lead-Kosten, Creatives | not yet connected | — | — |
| 7 | Monitor | Matomo | Traffic, Conversions (Privacy-first) | not yet connected | — | — |

**Mechanism-Optionen:** `mcp` (MCP-Server), `script` (Python/Bash gegen eine API, in `scripts/`), `export` (CSV/JSON-Dump), `key+ref` (`.env`-Key + `references/{tool}-api.md`), `not yet connected`.

**Tracking-Default dieses Setups:** Matomo + Google-Ads-Conversion-Tracking statt Google Analytics (datenschutzfreundlicher, genauer fürs Ads-Tracking).

Beim Verbinden eines Monitors zusätzlich `references/{tool}-api.md` anlegen (Endpoints, Auth-Flow, häufige Queries — einmal recherchiert, für immer gespeichert).
