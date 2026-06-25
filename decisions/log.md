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

---

## 2026-06-24 — Klon für AGOS BAU initialisiert, Onboarding fast-forwarded

**Decision:** Dieser Klon (`agosbau-site`) ist die Website-AIOS-Instanz für **AGOS BAU** (agosbau.de). Bei `/onboard` lag bereits umfangreiches Vorarbeits-Material vor (ausgefüllter Fragenkatalog, Deep-Research-Strategie, Keyword-Recherche, Unternehmensprofil, finalisierte Sitemap, Logo). Daher: **Phase 2 (`/generate-questionnaire`) und Phase 3 übersprungen** — der Fragebogen ist beantwortet. Material in `intake/` ingestiert, Phase-0/1-Outputs (branchen-report, ist-website-analyse, gespraechs-insights) erzeugt, Klon initialisiert (CLAUDE.md, `references/voice.md`, `connections.md`). Bestehende Deep Research übernommen, **nicht neu generiert** (Idempotenz/keine Verschwendung).

**Why:** Das Vorarbeits-Material ist reichhaltiger als ein Standard-Discovery-Call + generierter Fragebogen. Neu-Erzeugen wäre teuer und schlechter. Nächster sinnvoller Schritt: Phase 4+5 (`/generate-content`) — Strategie verdichten + Seitentexte + Freigabe-Schleife. Was die Entscheidung ändern würde: wenn André Kern-Antworten revidiert oder die Sitemap verworfen wird.

**Owner:** Pascal (Operator/WEBCLAN) · Kunde: André Gostomczyk.

---

## 2026-06-24 — Visuals: erstmal KI-generiert · Lead-Funnels: zwei Multistep-Formulare

**Decision:**
- **Visuals** werden **vorerst mit KI generiert** (Gemini Imagen 4 für Stills, ggf. Higgsfield für Video) statt auf echte Fotos zu warten. Echte Vorher/Nachher- und Team-/André-Fotos können später ergänzt werden (echtes Material schlägt KI, besonders bei Referenzen). Generierung im Bau über `/generate-visuals`.
- **Lead-Generierung über zwei Multistep-Funnels:** je einer für **Badsanierung** und **Fliesen** (Spezifikation: `context/lead-funnels.md`). Primäre Conversion = Funnel-Absenden (Hard-Lead) → Matomo + Google-Ads-Conversion + Meta Lead.
- **Bad-Sanierungsdauer** „2–3 Wochen" als Richtwert von André **bestätigt** (Marker in den Texten entfernt).
- **Google-Profil:** 5,0 ★ bei **25 Rezensionen** (bisheriges Profil sagte fälschlich 6). Vollständige Rezensionen holt Pascal aus dem GBP (Paste) → strukturiert für Testimonials + `AggregateRating`-Schema.

**Why:** KI-Fotos entkoppeln den Launch von der Fotoproduktion. Multistep senkt die Formular-Hürde und liefert André vorqualifizierte Leads. Echte Bewertungszahl (25) stärkt Trust + Schema.

**Owner:** Pascal · Kunde: André Gostomczyk.

---

## 2026-06-24 — Vorher/Nachher-Schieberegler + echte Bildpaare (Ausnahme zur KI-Foto-Regel)

**Decision:** Referenzen werden über einen **Vorher/Nachher-Schieberegler** (Image-Comparison-Slider) gezeigt — auf der Referenzen-Seite (primär), der Badsanierungs-Seite und passenden Leistungsseiten. Komponenten-Spec in `intake/texte/referenzen.md`. **Wichtige Ausnahme zur KI-Foto-Entscheidung:** Für Vorher/Nachher werden **echte, deckungsgleiche Bildpaare** verwendet — KI ist hier ungeeignet (kein authentisches „Vorher" generierbar). KI-Visuals bleiben für Atmosphäre/Hero. André liefert die Paare (laut Profil vorhanden).

**Why:** Authentische Vorher/Nachher-Bilder sind das stärkste Trust-Signal im Handwerk und ein E-E-A-T-/GEO-Plus (eigenes Bildmaterial). Ein gefaktes KI-„Vorher" würde Vertrauen zerstören.

**Owner:** Pascal · Kunde: André Gostomczyk.
**Offen:** André liefert echte Vorher/Nachher-Paare je Projekt (gleiche Kameraperspektive).

---

## 2026-06-24 — WhatsApp, Lead-Routing per E-Mail, echte Fotos vom Staging, ASAP-Launch

**Decision:**
- **WhatsApp:** 0174 8842492 → Link `https://wa.me/491748842492`. In Funnels, Kontakt und als Alternativ-Kanal eingetragen.
- **Lead-Routing (entschieden):** Funnel- und Kontaktformular schicken die Anfrage **per E-Mail an info@agosbau.de**. Kein CRM. (Tracking trotzdem: Matomo + Google-Ads-Conversion + Meta Lead.)
- **Echte Fotos:** 10 echte Bilder vom Staging (shibuiagency.de/abau) gezogen → `assets/images/` (Manifest: `assets/images/README.md`). Darunter ein **echtes André-Portrait** (`agos-leistung.webp`) und echte Bad-/Leistungsfotos. Diese ersetzen an den jeweiligen Slots die KI-Generierung. **Alles übrige bleibt KI** (`/generate-visuals`).
- **Priorität: ASAP live gehen und Leads gewinnen** — Scope schlank halten, schnelle Launch-fähige Seiten.

**Why:** E-Mail-Routing ist die einfachste, schnellste Lead-Zustellung ohne CRM-Setup. Echte Fotos (v. a. André) schlagen KI bei Trust/E-E-A-T und sind bereits vorhanden. Tempo vor Vollständigkeit.

**Owner:** Pascal · Kunde: André Gostomczyk.
**Offen für Phase 6:** echte Vorher/Nachher-Paare; restliche Visual-Slots KI; Recht (Impressum/Datenschutz), Zugänge (Hosting/Domain/GSC/Ads/Matomo/GBP).

---

## 2026-06-24 — CI festgelegt: Akzent = Warm Copper (offizielles Brand Manual)

**Decision:** Das offizielle Brand Manual liegt vor → CI in `context/brand-profile.md` destilliert, Manual gesichert in `assets/brand/agos-bau-brand-manual.html`. **Akzent-/CTA-Farbe = Warm Copper `#B07D4A`** (+ Hover `#C89566`, Tint `#F5EBDF`); Neutrals aus dem Logo: Anthrazit `#2C2C2C`, Grautöne, Off-White `#F5F3F0`. **Fonts:** Montserrat (Headlines), Inter (Text), JetBrains Mono (Labels). Copper nur als Akzent (max. 10 % Fläche). Bildsprache: echte Fotos, natürliches/warmes Licht, hohe Schärfe.

**Why:** Damit ist die zuvor offene Akzentfarbe entschieden — durch das Kunden-Manual selbst, nicht durch Vermutung (frühere Empfehlung Grün/Blau ist obsolet). Copper passt zur Material-/Handwerks-Positionierung und harmoniert mit den echten, warm beleuchteten Bad-Fotos.

**Owner:** Pascal · Kunde: André Gostomczyk.

---

## 2026-06-24 — Komplette Website gebaut (Astro) + CI-Update auf Slate/Tan

**Decision:** Gesamte Site in Astro + Tailwind v4 gebaut, buildet sauber (**21 Seiten + Sitemap**). **CI durch finales Brand Manual abgelöst** (ersetzt die Copper/Montserrat-Version oben): kühle **Slate-Töne `#26333D`…`#EEF0F2` + Warm Tan `#C39A63`**, **Cormorant Garamond** (Headlines) + **Archivo** (Body/UI), **kein JetBrains Mono** (Kundenwunsch). Echtes Logo-SVG in Header/Footer. Token-basiertes Design-System in `src/styles/global.css`.

**Seiten:** Startseite, Badsanierung (★ Funnel+Vorher/Nachher-Slider), Fliesenverlegung, Großformat, barrierefrei, Terrasse/Pool, Referenzen, Über uns, FAQ, Kontakt, Impressum, Datenschutz + 9 Stadtteilseiten (`[stadt].astro` + `src/data/cities.ts`). Jede editorial/tief: layered Hero, Stat-Band, Featured-Grids, Full-Bleed-Zitat.

**SEO je Seite:** Keyword-H1, interne Verlinkung (Startseite → City-Pages), Schema (Service/FAQPage/LocalBusiness/Person, AggregateRating 5,0/25), Sitemap, robots.txt (KI-Bots erlaubt), WebP-Bilder.

**Vor Go-live offen:** Web3Forms-Access-Key (Funnel → info@agosbau.de), Tracking-IDs (Matomo/Google-Ads/Meta), echte Rechtstexte, echte Vorher/Nachher-Fotos, Hosting + Domain.

**Owner:** Pascal · Kunde: André Gostomczyk.
