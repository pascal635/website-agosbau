# Workflow: new-site-build

> **Typ:** Deterministischer Mehr-Schritt-Ablauf (Spezifikation, kein lauffähiges Skript)
> **Zweck:** Der große Bau-Workflow. Aus befülltem `context/` und dem Design-System entsteht eine vollständige, getrackte, rechts- und performance-konforme Kundenseite — Phase 1 "Bauen" des AIOS-Kreislaufs (Bauen → Messen → Entscheiden → Umsetzen).
> **Voraussetzung:** `onboarding-pipeline` ist gelaufen, `context/` ist befüllt. Design-System v1 existiert.
> **Orchestriert:** die Skills (`build-page`, `write-copy`, `seo-optimize`, `geo-optimize`, `generate-images`, `setup-tracking`) und die Playbooks in `references/playbooks/` als Bausteine.
> **Output am Ende:** committete Seite im Git-Repo, launch-bereit.

---

## Stufe 0 — Sitemap & Plan

**Input:** `context/services.md`, `context/audience.md`, `context/goals.md`, `context/about-site.md`.

**Tun:**
1. Seitentypen je Bedarf ableiten: Home, Leistungsseite(n), Über-uns, Kontakt, Standort-/City-Page(s), Landingpage(s), Ratgeber/FAQ.
2. URL-Struktur und interne Verlinkungslogik festlegen.
3. Je Seite ein Ziel definieren (primäre Conversion aus `goals.md`).
4. Keyword-Mapping pro Seite (eine Seite = ein Keyword-Cluster). SEO-Daten via Sistrix-MCP, lokale Keywords nach `local-seo.md`.

**Playbooks:** `page-structure.md` (Anatomie je Seitentyp, **geplant**), `seo-onpage.md`, `local-seo.md`.

**Output:** Sitemap-Tabelle (Seite · URL · Typ · Ziel · Keyword-Cluster · interne Links). Freigabe durch Operator vor Bau.

---

## Stufe 1 — Je Seite bauen (Schleife über die Sitemap)

Pro Seite die folgenden Teilschritte in Reihenfolge. Verantwortlicher Skill: `build-page` (orchestriert die Teilschritte und committet am Ende).

### 1a — Copy
- **Input:** Seitenziel + Keyword-Cluster, `context/voice.md`, `context/services.md`, `context/audience.md`, Trust-Material aus `context/`.
- **Tun:** Text in Brand Voice schreiben — Frameworks (AIDA/PAS), nutzenorientierte Headlines, klare CTAs auf das Seitenziel. Landingpages 1 Ziel, message-match zu Ads.
- **Playbooks:** `copywriting.md`; für Landingpages `landingpage.md`; für Ratgeber `blog-ratgeber.md`.
- **Skill:** `write-copy` / `write-blog` / `build-landingpage`.
- **Output:** Seitentext-Entwurf (Sektionen), externe Texte als Draft markiert.

### 1b — SEO (On-Page)
- **Input:** Copy-Entwurf + Keyword-Cluster.
- **Tun:** Title/Meta-Description, H-Struktur, Keyword-Platzierung, interne Verlinkung, Snippet-Optimierung. Lokale Signale nach `local-seo.md` (NAP, City-Bezug).
- **Playbooks:** `seo-onpage.md`, `local-seo.md`.
- **Skill:** `seo-optimize` / `local-seo`.
- **Output:** SEO-angereicherte Copy + Meta-Felder.

### 1c — GEO (Generative Engine Optimization)
- **Input:** SEO-Copy.
- **Tun:** Zitierfähig machen für ChatGPT/Perplexity/Google AI Overviews — klare Entitäten, strukturierte Frage-Antwort-Blöcke, Quellen/Fakten.
- **Playbook:** `geo.md`.
- **Skill:** `geo-optimize`.
- **Output:** GEO-optimierte Inhalte (inkl. FAQ-/Antwort-Blöcke, die in 1e Schema bekommen).

### 1d — Bilder
- **Input:** Sektionen der Seite, `context/brand-profile.md` (CI-Stil), `assets/images/` (echte Fotos zuerst).
- **Tun:** Entscheiden echtes Foto vs. generieren; CI-konforme Prompts; Alt-Text je Bild; WebP/Kompression.
- **Playbook:** `image-generation.md`.
- **Skill:** `generate-images`.
- **Output:** optimierte Bilder + Alt-Texte, eingehängt in die Sektionen.

### 1e — Komposition aus dem Design-System
- **Input:** Copy + Meta + Bilder + GEO-Blöcke.
- **Tun:** Seite aus den Design-System-Komponenten zusammensetzen (nur aus den Bausteinen → Konsistenz über viele Seiten). Schema-Markup einsetzen: `LocalBusiness`, `Service`, `FAQ`, `Article`, `Breadcrumb` je nach Seitentyp.
- **Playbooks:** `design-system-usage.md` (**geplant**), `schema-structured-data.md`, `references/design-system.md`.
- **Output:** fertige Seite im Code, committet.

**Stufen-Output:** alle Seiten der Sitemap gebaut und im Repo committet.

---

## Stufe 2 — Tracking-Setup

**Input:** gebaute Seiten, Conversion-Definition aus `context/goals.md`.

**Tun:**
1. Tracking nach Default dieses Setups: **Matomo + Google-Ads-Conversion** (kein Google Analytics).
2. Conversions verdrahten, die als Lead zählen: Formular-Absenden, Anruf-Klick, WhatsApp-Klick, Buchung — je nach `goals.md`.
3. Events auf CTAs legen; DSGVO-Consent-Mechanik vor allen nicht-essentiellen Tags.
4. Google-Ads-Conversion-Tag für Landingpages mit Ads-Bezug (message-match aus 1a beachten).

**Playbook:** `conversion-tracking.md` (**geplant**).
**Skill:** `setup-tracking`.

**Output:** funktionierendes Tracking, in `connections.md` vermerkt (Matomo, Google Ads, GBP, GSC). Test-Conversion verifiziert.

---

## Stufe 3 — Launch-Checkliste

**Input:** fertige, getrackte Seite.

**Tun:** drei Gates prüfen, alle müssen grün sein vor Go-Live.

### Recht
- Impressum, Datenschutz, AGB aus `context/legal.md` vorhanden und verlinkt.
- Consent-Banner aktiv, Tags erst nach Einwilligung.
- Bild-/Schriftlizenzen geklärt.

### Schema & SEO-Technik
- Strukturierte Daten valide (`LocalBusiness`, `FAQ`, `Service`, `Breadcrumb`) — nach `schema-structured-data.md`.
- Title/Meta je Seite gesetzt, keine Duplikate; `robots`/Sitemap/Canonical korrekt; Indexierung freigegeben.
- NAP-Konsistenz zu GBP — nach `local-seo.md`.

### Performance & Barrierefreiheit
- Core Web Vitals im grünen Bereich, Bilder WebP/komprimiert, Ladezeit geprüft.
- A11y-Basics: Alt-Texte, Kontraste, Fokus, Semantik.
- **Playbook:** `performance-a11y.md` (**geplant**).

**Output:** abgehakte Launch-Checkliste; bei Lücken Task-Liste statt Go-Live. Entscheidung im `decisions/log.md` festhalten.

---

## Stufe 4 — Übergabe in den Loop

**Tun:** Nach Launch übergeben an Phase 2 "Messen" — Monitore (Sistrix, GSC, Matomo, Google Ads) laufen, `weekly-review` übernimmt den Optimierungs-Kreislauf (`conversion-optimization.md`, `reporting.md` — **geplant**).

**Output:** Live-Seite im Monitoring; erster `weekly-review`-Zyklus terminiert.

---

## Datenfluss (kompakt)

```
context/ + Design-System
        │
   [0 Sitemap & Plan]  ──(Freigabe)──┐
        │                            │
   [1 je Seite]  Copy→SEO→GEO→Bilder→Komposition (Schema)  → committete Seiten
        │
   [2 Tracking-Setup]  Matomo + Google-Ads-Conversion, Consent
        │
   [3 Launch-Checkliste]  Recht · Schema · Performance/A11y
        │
   [4 Übergabe]  → Monitoring + weekly-review (Mess-/Optimier-Loop)
```

---

## Playbook-Register (Verweise)

**Vorhanden:** `copywriting.md` · `seo-onpage.md` · `geo.md` · `local-seo.md` · `image-generation.md` · `schema-structured-data.md` · `landingpage.md` · `blog-ratgeber.md`
**Geplant (siehe Blueprint Part B):** `page-structure.md` · `design-system-usage.md` · `conversion-tracking.md` · `performance-a11y.md` · `conversion-optimization.md` · `reporting.md`
