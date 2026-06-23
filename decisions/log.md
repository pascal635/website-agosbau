# Decisions Log

Append-only record meaningful decisions an dieser Website. `/weekly-review` schreibt hier genehmigte Task-Entscheidungen rein. Manuell ergänzbar.

**Format pro Eintrag:**

```
## YYYY-MM-DD — Kurztitel

**Decision:** was entschieden wurde.

**Why:** Begründung, Constraints, was die Entscheidung ändern würde.

**Owner:** wer verantwortlich ist.
```

Terse halten. Das *Warum* festhalten, nicht nur das *Was*.

---

## 2026-06-23 — Tech-Stack der Build-Schicht: Astro

**Decision:** Die Build-Schicht des Website-AIOS wird mit **Astro** umgesetzt — statisch-first, Komponenten + Design-System, Styling via Tailwind mit Tokens aus dem CI, Content Collections für Leistungs-/City-/Ratgeber-Seiten, Tracking via Matomo + Google-Ads-Conversion (mit Consent), statisches Deployment auf Hetzner. Details in `references/tech-stack-empfehlung.md`.

**Why:** Astro liefert reines HTML mit minimalem JS → beste Core Web Vitals out of the box (direkter Local-SEO- und Conversion-Hebel für den ICP). Dateibasiert + Git-nativ → genau die Oberfläche, auf der Coding-Agents zuverlässig bauen und Änderungen diffbar sind (Herz der Architektur). Als Vorlage pro Kunde klonbar, simpel auf Hetzner zu hosten. Was die Entscheidung ändern würde: wenn Kunden-Selbstpflege im Browser zur harten Anforderung wird (→ Git-basiertes CMS wie Decap/Tina ergänzen) oder echte App-Logik/Login zum Standard wird (→ Next.js).

**Alternatives considered:** Next.js (mächtiger, aber Overkill für Content-Seiten, schlechtere CWV-Baseline, Node-Hosting aufwändiger, mehr Agent-Footguns). WordPress/CMS (nicht Git-nativ, DB-Zustand bricht das Kernprinzip, schlecht für Agent-Arbeit, höhere Betriebslast pro Klon).

**Owner:** Pascal.
