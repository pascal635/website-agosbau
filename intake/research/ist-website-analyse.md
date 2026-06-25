# Ist-Website-Analyse — agosbau.de

*Stand: 2026-06-24. Quelle: Live-Auswertung von https://agosbau.de.*

> Zweck: Was vom Bestand in den Relaunch migriert, was verbessert, was neu aufgebaut wird.

## Tech-Stack

- **CMS:** WordPress (erkennbar an `/wp-content/uploads/`-Pfaden in allen Asset-Links, z. B. Logo unter `/wp-content/uploads/2023/12/AGOS_Bau_Logo-1.svg`).
- **Mobile:** responsives Layout vorhanden.
- → Relaunch-Ziel laut OS-Default: **Astro + Tailwind**, statisch (bessere Core Web Vitals — direkter Local-SEO-/Conversion-Hebel). WordPress wird abgelöst.

## Struktur / Navigation (Ist)

Menü: **Leistungen · Referenzen · Über uns · Kontakt · [Angebot anfragen]**

Erkennbare URLs:
- `/leistungen/`
- `/fliesenleger-kosten/` (Angebots-/Kosten-Seite)
- `/ueber-uns/`
- `/kontakt/`
- `/impressum/`, `/datenschutz/`

→ **Flach, generisch.** Keine eigenständige Badsanierungs-Landingpage, keine Spezial-/Nischenseiten (Großformat, barrierefrei), keine Stadtteil-Seiten. Genau das ist der SEO-Hebel des Relaunches (siehe `sitemap.md`).

## Migrierbare Inhalte ✅

- **Leistungsbeschreibungen:** Vollverfliesung, Fliesen-Erneuerung, Austausch Einzelfliesen, Wandreparatur.
- **Bewertungen:** 6 Google-Bewertungen, Ø 5,0 Sterne — starkes Trust-Signal.
- **NAP (teilweise):** Telefon `04202 51 161 31`, Mail `info@agosbau.de`.
- **Prozess:** 4-Schritte-Darstellung (Planung → Kostenvoranschlag → Durchführung → Abnahme). *Hinweis: Profil/Fragenkatalog beschreiben einen reicheren 7-Schritte-Prozess — der ist die bessere Grundlage für die neue Badsanierungs-Seite.*
- **Vorteils-Punkte:** u. a. „Alles aus einer Hand", „Festpreisangebot".
- **Logo:** als SVG vorhanden (`AGOS_Bau_Logo-1.svg`) — plus PDF in `assets/logo/`.

## Schwächen (= Relaunch-Begründung)

1. **Keine Badsanierungs-Landingpage** — obwohl Badsanierung das erklärte Lead-Ziel #1 ist. Schwerster strategischer Mangel.
2. **Referenzen verlinkt, aber ohne Inhalt** — Flaggschiff (2 Villen Oberneuland, Pool + Großformat) wird verschenkt.
3. **Kein Schema-Markup** — Google-Bewertungen nicht als `Review`/`LocalBusiness` strukturiert → keine Rich Snippets.
4. **Leadformular minimal** — nur Name/Tel/Mail; keine Qualifizierungsfelder (Leistung, Fläche, Wunschtermin), keine Urgency/Versprechen.
5. **Keine FAQ** — Andrés echte Kundenfragen (Dauer, Kosten, Start, Gewerke) ungenutzt; kein Featured-Snippet-Potenzial.
6. **Telefon nicht prominent** (nur Footer), kein sichtbarer WhatsApp-CTA — obwohl André per WhatsApp erreichbar ist.
7. **NAP unvollständig** — Öffnungszeiten + vollständige Adresse fehlen (NAP-Konsistenz ist Local-SEO-kritisch).
8. **Bilder vermutlich nicht optimiert** (mehrere hochauflösende Uploads) → Ladezeit-Risiko.

## SEO-Beobachtungen

- **H1 Startseite:** „Fachbetrieb für Fliesenarbeiten in Bremen" ✅ (lokales Keyword vorhanden, aber Badsanierung fehlt im wichtigsten Signal).
- **Title/Meta:** im Content nicht greifbar — vermutlich WordPress-Default, ungeprüft. → im Relaunch sauber je Seite setzen.
- **Schema:** fehlt komplett.
- **Domain:** agosbau.de bleibt — Bestandsdomain mit Historie übernehmen (kein Domainwechsel).

## Fazit für den Relaunch

Inhaltlicher Kern (Leistungen, Bewertungen, Prozess, NAP, Logo) ist migrierbar. Der Bestand scheitert an **fehlender Spezialisierung (keine Badsanierungs-/Nischen-/Lokal-Seiten), fehlendem Trust-Ausbau (Referenzen, Schema, FAQ) und schwachem Lead-Funnel**. Der Relaunch laut `sitemap.md` adressiert exakt diese Lücken.

→ Migrations-Checkliste fürs Bauen (Phase 6): NAP final + vollständig, Logo-SVG, 6 Google-Bewertungen verbatim, Bestands-Leistungstexte als Rohmaterial, Bestands-URLs auf neue Struktur **301-redirecten**.
