---
name: build-page
description: Use to build ONE page from the Website-AIOS design system, or on "baue die Leistungsseite", "neue City-Page für X", "erstell die Startseite", "build the contact page". Takes a page type + a copy source/briefing and produces a committed, design-system-conform, SEO- and schema-tagged page. One run = one shipped page.
---

# Build Page — eine Seite aus dem Baukasten

Baut **genau eine** Seite des Kunden-Setups: vom Seitentyp über Copy, On-Page-SEO, Schema und Bilder bis zur fertig komponierten, committeten Seite. Arbeitet woertlich nach den Playbooks unter `references/playbooks/` und dem Baukasten in `references/design-system.md`. Nichts wird geraten — fehlt ein Pflicht-Input, erst nachfragen.

Voice ist Pflicht-Kontext: `references/voice.md` bzw. `context/voice.md` vor dem ersten Wort laden. Tracking-Default des Setups: Matomo + Google-Ads-Conversion (kein Google Analytics). SEO-Datenquelle: Sistrix (MCP).

## Input (vor dem Start prüfen)

- **Seitentyp** — einer aus `page-structure.md` (Startseite, Leistungsseite, Landingpage, Über uns, Kontakt, Standort-/City-Page, Ratgeber/Blog, FAQ).
- **Copy-Quelle / Briefing** — Roh-Copy, Angebot, bestehender Text oder ein Briefing mit: Ziel der Seite, Zielgruppe, primärer CTA/Conversion-Definition (Formular/Anruf/WhatsApp/Buchung), Primary Keyword (bei SEO-Seiten), bei City-Pages der Ort, Do/Don'ts.

Fehlt Seitentyp oder eine Pflicht-Angabe im Briefing → erst ergänzen lassen. Schlechtes Briefing = schlechte Seite.

## Schritte

### 1. Seitenaufbau wählen — `references/playbooks/page-structure.md`
- Passende Anatomie für den Seitentyp aus dem Playbook übernehmen: Sektionen **und** ihre Reihenfolge. Keine Sektion auslassen, keine Reihenfolge tauschen ohne Grund.
- Ziel der Seite + genau **einen** primären CTA festlegen.
- H1 (genau eine), H2/H3-Gerüst nach der Sektions-Hierarchie anlegen.
- Bei City-Page: Ort gehört in H1, URL und Meta; mind. 60% Unique Content einplanen.

### 2. Copy schreiben — `references/playbooks/copywriting.md`
- Voice laden (`references/voice.md` / `context/voice.md`) und im Prompt halten.
- Framework wählen: PAS (Schmerzpunkt-Seiten, Landingpage) oder AIDA (Leistungs-/Verkaufsseiten).
- 3 Headline-Varianten, beste wählen. Jeden Feature-Satz in einen Nutzen übersetzen.
- Du-Ansprache, kurze Sätze, keine Em-Dashes, Bullets vor Absätzen, Zahlen statt Adjektive.
- CTA direkt und handlungsstark, mind. zweimal (Hero + Ende); Reibung-Reducer darunter.

### 3. On-Page-SEO + Schema — `references/playbooks/seo-onpage.md` und `references/playbooks/schema-structured-data.md`
- Primary Keyword aus dem Mapping zuweisen (eine Seite = ein Keyword). Bei Bedarf Recherche/Validierung über Sistrix-MCP (`keyword_seo`, `keyword_seo_metrics`, `keyword_seo_searchintent`, `keyword_seo_serpfeatures`).
- URL, Title (≤ 60 Zeichen), Meta-Description (≤ 160 Zeichen mit CTA) nach `seo-onpage.md`. Keyword in H1 + erste 100 Wörter, Dichte < 2%. Interne Verlinkung rein und raus.
- Schema-Set je Seitentyp aus dem Mapping in `schema-structured-data.md` setzen (LocalBusiness-Subtyp je ICP / Service / FAQPage / Article / BreadcrumbList). NAP zeichengenau aus `context/` bzw. `connections.md`. JSON-LD aus den Vorlagen befüllen, nur Sichtbares markieren.

### 4. Bilder — `references/playbooks/image-generation.md`
- Bild-Slots der Seite aus der Anatomie ableiten. Pro Slot: echtes Foto vs. generiert (Entscheidungsbaum). Echte Person/Team/Standort/Projekt nie generieren — fehlt es, beim Kunden anfordern und im Build-Log vermerken.
- Generierte Bilder mit CI-Prompt aus `context/brand-profile.md`. Alle als WebP, responsive Varianten (480/768/1200/1920) + srcset, sprechende Dateinamen, Alt-Text für jedes Bild. Hero `fetchpriority="high"`, Rest `loading="lazy"`.

### 5. Komposition aus dem Baukasten — `references/design-system.md`
- Seite **nur** aus den Kern-Komponenten stapeln (Header → Sektionen → Footer) gemäß der Kompositions-Tabelle für den Seitentyp. Keine neue Komponente ohne Dokumentation in der Datei.
- Nur Tokens (keine Roh-Hex/-px/-Schriftnamen). Mobile-first, eine H1, Sektionen wechseln `--color-bg` / `--color-bg-subtle`.
- Tracking-Hooks Pflicht: `data-track="lead"` auf Formular-Submit, `tel:`-Klick, WhatsApp, Buchungs-Button (Matomo + Google-Ads-Conversion, kein GA). DSGVO-Consent am Formular, Karten/Drittinhalte erst nach Consent.
- Gegen die Checklisten aus `page-structure.md`, `seo-onpage.md` und §4 `design-system.md` prüfen (5-Sekunden-Hero-Test, Kontrast AA, Touch ≥44px, LCP < 2,5 s).

### 6. Commit — Git
- Geänderte/neue Dateien in einem Branch committen (nicht direkt auf default). Aussagekräftige Message, z. B. `feat(page): Leistungsseite Wallbox <Ort>`.
- Build-Log / offene Punkte (z. B. angeforderte echte Fotos) vermerken; strittige Entscheidungen in `decisions/log.md`.

## Output

Eine fertig komponierte, design-system-konforme Seite (Markup + Assets + JSON-LD), gegen die Playbook-Checklisten geprüft und committet — bereit für Review und Launch.

## Bezug

- Playbooks: `page-structure.md`, `copywriting.md`, `seo-onpage.md`, `schema-structured-data.md`, `image-generation.md`
- Baukasten: `references/design-system.md` (Tokens, Komponenten, Kompositions- + Konsistenzregeln)
- Kontext: `references/voice.md` / `context/voice.md`, `context/brand-profile.md`, `connections.md` (NAP)
- Daten/Tracking: Sistrix (MCP) für Keywords/Rankings; Matomo + Google-Ads-Conversion (kein GA)
- Kreislauf: Bauen-Phase. Gebaute Seiten werden via `/weekly-review` gemessen und priorisiert (Messen → Entscheiden → Umsetzen).
