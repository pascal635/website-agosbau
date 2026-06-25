# Referenzen · `/referenzen/`

**Version:** v1 · **Stand:** Juni 2026 · **Seitentyp:** Social Proof / Trust
**Primary Keyword:** fliesenleger bremen referenzen
**Primärer CTA:** Kostenloses Angebot anfragen →

**Title (≤60):** `Referenzen – Bäder & Projekte | AGOS BAU Bremen` (47)
**Meta-Description (≤160):** `Echte Projekte von AGOS BAU: Badsanierungen, Großformatfliesen und Außenbereiche im Raum Bremen & Achim. Vorher/Nachher und Kundenstimmen. Jetzt ansehen.` (152)

---

## 1 — Hero
**H1 (gewählt):** Unsere Arbeit, in echt.
**Subline:** Über 100 abgeschlossene Projekte seit 2019. Hier sehen Sie, was „einmal richtig gemacht" bedeutet.
**CTA-Button:** Kostenloses Angebot anfragen →
[VISUAL: Galerie-Aufmacher – stärkstes Vorher/Nachher-Bild.]

## 2 — Filter (Bau)
Filter nach Leistungstyp: Bad · Großformat · Terrasse/Pool · Gewerbe.

## 3 — Projekte (mit Vorher/Nachher-Schieberegler)
> Jede Karte: **Vorher/Nachher-Slider** (siehe Komponenten-Spec unten) · Ort · Leistung · Besonderheit · (wo vorhanden) Kundenzitat.
> Stadtteil im Projekttitel nennen (SEO/lokaler Bezug). [VISUAL: echte, deckungsgleiche Vorher/Nachher-Paare – kein KI-Bild für echte Referenzen.]

**Projekt 1 — Zwei Villen in Oberneuland**
Komplett geplant und koordiniert: Poolbau, Terrassenfliesen und Bäder mit Großformatfliesen. Alle Gewerke aus einer Hand.
*Ort: Bremen-Oberneuland · Leistung: Bad, Großformat, Pool/Terrasse, Koordination.*

**Projekt 2 — Physiotherapie-Praxis in Bremen-Schwachhausen (Gewerbe)**
> „Top Arbeit – absolut empfehlenswert! Vom ersten Kontakt bis zur Fertigstellung lief alles völlig reibungslos. Die Jungs waren pünktlich, freundlich und haben äußerst sauber gearbeitet … Man merkt sofort, dass hier echte Profis am Werk sind."
*Ort: Bremen-Schwachhausen · Leistung: Vinyl-Boden, Gewerbe (physioWERK).*

**Projekt 3 — Außenanlage mit Pool (Grundstück 1.100 m²)**
> „Auf unserem Grundstück wurde 2023 ein komplett neuer Garten angelegt, inkl. neuer Fliesenverlegung rund ums Haus sowie Pool (7 × 4 m) … Sehr gute Qualität und saubere Arbeit!"
*Leistung: Terrassen-/Außenfliesen, Poolbereich, Gesamtkoordination (arautenhaus).*

**Projekt 4 — Designbad mit Fischgräten-Optik**
> „Gerade die Fischgräten-Optik war sicher nicht ganz einfach umzusetzen, aber das Ergebnis ist wirklich top geworden. Es sieht edel, modern und sehr hochwertig aus."
*Leistung: Badsanierung, Großformat/Fischgräten (Merlin Varol). Foto vorhanden.*

→ offen: echte Vorher/Nachher-Paare + Ort/Foto von André je Projekt ergänzen (mehr lokale Stadtteile = mehr lokaler SEO-Wert).

## 4 — Kundenstimmen
> „Absolute Profis am Werk. Agos-Bau hat nun bereits mehrere Badezimmer bei uns gemacht … Wir sind von der Qualität und dem Service mehr als begeistert. Preis-Leistungs-Verhältnis ist einfach mehr als fair. Sogar die Baustelle wurde sauber hinterlassen."
— Robin Bennecke

> „Wir sind mit der Arbeit von AGOS Bau wirklich zu 100 Prozent zufrieden. Unser Badezimmer sieht wirklich klasse aus, mit den großen Fliesen. Wir werden euch immer wieder weiterempfehlen."
— Christian Heinzl

> „Super zuverlässig, freundlich, schnell, faire Preise und es wird am Ende sogar die Verpackung mitgenommen und fachgerecht entsorgt. Absolut empfehlenswert!"
— Greta Szibbat

> „Die Leidenschaft fürs Handwerk sieht man dem jungen Chef an. Klare Empfehlung."
— Lars D.

*Alle Bewertungen: 5,0 ★ bei Google (25 Bewertungen). Weitere verbatim in `intake/reviews.md`.*

## 5 — Abschluss-CTA
**Soll Ihr Projekt das nächste hier sein?**
**CTA-Button:** Kostenloses Angebot anfragen →
**Darunter:** Oder anrufen: 04202 511 61 31

---

## Komponente: Vorher/Nachher-Schieberegler (Image-Comparison-Slider)

> Wiederverwendbare Komponente. Zuhause: Referenzen (Galerie). Auch eingesetzt auf: Badsanierung (Referenz-Sektion), Leistungsseiten (wo Vorher/Nachher passt). Bau in Phase 6 als Astro-Komponente.

**Verhalten**
- Zwei deckungsgleiche Bilder (Vorher/Nachher) übereinander, vertikaler Trenn-Regler. Bedienung per **Maus-Ziehen, Touch-Swipe und Tastatur** (Pfeiltasten).
- Sichtbare Labels „Vorher" / „Nachher". Startposition ~50 %.

**Bilder (Pflicht-Voraussetzung)**
- **Echte, deckungsgleiche Paare** desselben Bildausschnitts (gleiche Kameraposition vorher/nachher). → Material von André (laut Profil vorhanden).
- **KI ist hier ungeeignet** (kein authentisches „Vorher" generierbar). KI nur für Atmosphäre-/Hero-Stills, nicht für Referenz-Vorher/Nachher.
- Format: WebP, responsive `srcset`, beide Bilder gleiche Maße/Seitenverhältnis.

**Performance & A11y**
- Lazy-load, feste Aspect-Ratio (kein Layout-Shift), nicht im LCP-kritischen Hero.
- `role="slider"`, `aria-valuenow`, Tastaturbedienbar; Alt-Text für beide Bilder (z. B. „Badezimmer in Oberneuland vorher / nachher").
- Progressive Enhancement: ohne JS beide Bilder untereinander mit Vorher-/Nachher-Beschriftung.

**Pro Projekt benötigt:** 1 Bildpaar (vorher+nachher), Ort/Stadtteil, Leistung, kurze Besonderheit, optional Kundenzitat.

→ offen: André liefert die Vorher/Nachher-Paare (am besten je Projekt aus gleicher Perspektive). Foto-Quellen aus Bewertungen (Kunden-Uploads) sind kein Ersatz für deckungsgleiche Paare, helfen aber für die normale Galerie.

---
### SEO/GEO-Notizen
- Stadtteile in Projekttiteln nennen → stützt Stadtteilseiten. Intern auf passende Leistungs-/Stadtteilseiten verlinken.
- Schema im Bau: ggf. `Review`/`AggregateRating` (5,0 / 25), echte Bewertungen. Bilder mit `ImageObject` möglich.
### Changelog
- **v1 (Juni 2026):** Erststellung. Echte Projekte (Oberneuland, Arztpraxis) + verbatim Testimonials.
- **v1.1 (Juni 2026):** Vorher/Nachher-Schieberegler als Komponente spezifiziert; Projektkarten nutzen ihn.
