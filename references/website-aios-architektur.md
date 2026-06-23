# Website-AIOS — Architektur

> **Vision in einem Satz:** Ein eigenständiges, klonbares AIOS, das eine Website baut und danach laufend wachsen lässt — SEO, Content, Conversion und Überwachung in einem geschlossenen Kreislauf, gesteuert allein über das wöchentliche Gespräch mit dem AIOS.

Ein Klon pro Website. Erste Instanz: die LIKOVO-Seite. Danach jede Kundenseite — damit wird dieses Kit zum LIKOVO-Add-on "Website mit KI bauen & laufend optimieren".

---

## 1. Das Prinzip: ein geschlossener Kreislauf

```
   ┌──────────────────────────────────────────────────────┐
   │                                                        ▼
1 · Bauen  →  2 · Messen  →  3 · Entscheiden  →  4 · Umsetzen
(Git +        (Daten         (Wöchentliches      (Tasks über
Design-       einsammeln)     Review = Herz)      das AIOS)
System)            ▲
                   │
            ┌──────────────┐
            │  Monitoring   │
            │ GSC · Sistrix │
            │ Ads · Meta    │
            └──────────────┘
```

Phase 3 ist das Herz: Review der Daten → Entscheidung der nächsten Tasks. Alle Änderungen laufen über dieses Gespräch.

---

## 2. Schichten

### Schicht A — Build (Bauen & Pflegen)
- **Git-Repo** als Single Source of Truth. Jede Änderung = Commit.
- **Design-System** (Tokens + Komponenten-Bibliothek). Die KI baut nur aus diesen Bausteinen → konsistent über viele Seiten.
- **Klare Anweisungs-Struktur** (Komponenten-Doku, Patterns, Do/Don't), damit die KI weiß, was zu tun ist.

### Schicht B — Data / Monitoring (Messen)
| Quelle | Liefert | Anbindung |
|---|---|---|
| Google Search Console | Impressions, Klicks, Rankings, Indexierung | API → Skript/MCP |
| Sistrix | Sichtbarkeitsindex, Keywords, Wettbewerber | **MCP vorhanden** — nur API-Key |
| Google Ads | Kosten, Conversions, Suchbegriffe | API/Export |
| Meta Ads | Reichweite, Lead-Kosten, Creatives | API/Export |
| Matomo | Traffic, Conversions (Privacy-first) | API/Export |

### Schicht C — Decision (Entscheiden) — das Herz
- **Skill `weekly-review`**: zieht die Daten aller verbundenen Quellen, fasst zusammen, schlägt priorisierte nächste Tasks vor (SEO / Content / Conversion / Technik), loggt Entscheidungen.

### Schicht D — Execution (Umsetzen)
- Genehmigte Tasks via Git umsetzen (Content schreiben/optimieren, On-Page-SEO, Conversion-Änderungen). Ergebnis fließt zurück in Schicht A.

---

## 3. Aufbau des Kits (klonbar, entkoppelt)

| Baustein | Inhalt |
|---|---|
| `website-intake.md` | 6-Fragen-Intake, von `/onboard` gelesen |
| `context/` | über die Seite, Brand Voice, Ziele/KPIs |
| `.claude/skills/onboard` | Setup-Wizard (pro Klon einmal) |
| `.claude/skills/weekly-review` | das Herz — wöchentlicher Daten→Tasks-Loop |
| `connections.md` | Monitore + Git + Hosting |
| `decisions/log.md` | Änderungshistorie mit Begründung |
| `references/` | diese Architektur, Design-System-Doku, API-Guides |

---

## 4. Phasen-Roadmap (dünn anfangen, dann verbreitern)

> Leitregel: lieber ein kleiner Kreis der sich dreht als ein großer der stillsteht.

- **Phase 0 — Build-Grundgerüst:** Tech-Stack, Repo, Design-System v1, erste Seite.
- **Phase 1 — Dünner Loop:** Sistrix-Key wiren (einzige Quelle), `weekly-review` darauf, einmal kompletten Kreis durchlaufen.
- **Phase 2 — Monitore verbreitern:** GSC → Google Ads → Meta Ads, je eine Quelle.
- **Phase 3 — Skills vertiefen:** eigene Skills für SEO-, Content-, Conversion-Tasks; mehr Autonomie (KI produziert → Mensch reviewed).
- **Phase 4 — Produktisieren:** auf erste Kundenseite klonen → LIKOVO-Add-on.

---

## 5. Offene Entscheidungen (pro Instanz)
1. Tech-Stack der Build-Schicht (Framework + Hosting).
2. Umfang Design-System v1 (welche Komponenten zuerst).
3. Reihenfolge der Monitore nach Sistrix (GSC empfohlen — kostenlos, SEO-Kern).
