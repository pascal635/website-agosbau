# Website-AIOS — System-Blueprint (Verfeinerung)

> **Status:** Plan · Stand 2026-06-22
> Vollständiges Inventar von dem, was das Website-AIOS braucht, um eine Kundenseite aufzubauen UND laufend zu betreiben. Grundlage für den Bau in Phasen.

Leitidee: Vieles existiert schon als SOP im LIKOVO-Ordner. Wir **ernten und portieren** statt neu zu erfinden. Quelle je Baustein unten markiert mit → SOP.

---

## 1. Verfeinerte Ordnerstruktur

```
Website-AIOS/
├── website-intake.md            # Onboarding-Fragebogen (Kunde + Setup)
├── assets/                      # INPUT: Logo, CI, Bilder (vom Kunden)
│   ├── logo/  ci/  images/
├── intake/                      # INPUT: Fragebogen-Antworten, Transkripte
├── context/                     # vom onboard gefüllt — Wissen über die Seite
│   ├── about-site.md  brand-profile.md  voice.md
│   ├── audience.md  services.md  goals.md  legal.md
├── references/
│   ├── website-aios-architektur.md
│   ├── website-aios-blueprint.md   (diese Datei)
│   ├── design-system.md
│   └── playbooks/               # DAS WISSEN — wie macht man X
├── .claude/skills/              # on-demand
├── .claude/workflows/           # deterministische Abläufe
├── decisions/log.md
└── connections.md
```

---

## 2. Part A — Onboarding-Inputs (Asset- & Wissens-Intake)

Was reingeht, bevor gebaut wird. `[K]` = Kunde liefert, `[W]` = wir holen/erzeugen.

### Marke & Design
- `[K]` Logo (+ Varianten: hell/dunkel, Icon, Favicon)
- `[K]` CI-Manual (Farben als Hex, Schriften, Abstände, Bildsprache, Ton, Do/Don'ts)
- `[K]` Erste Bilder (Betrieb, Team, Arbeiten/Projekte, Produkte)
- `[W]` Brand-Voice-Samples (echte Texte des Kunden, verbatim)

### Unternehmen & Inhalt
- `[K]` Unternehmensprofil (was, USP, Historie, Team, Zertifikate)
- `[K]` Ausgefüllter Content-Fragebogen (Leistungen, Angebote, FAQs, Referenzen, Zielgruppe)
- `[K]` Transkripte aus dem Erstgespräch (Ziele, Schmerzen, Wunschkunde) → SOP_1.3 Discovery
- **`[+] Referenzen/Bewertungen/Testimonials/Case Studies** (fehlte — kritisch für Trust & Conversion)
- **`[+] Einzugsgebiet / Standorte** (fehlte — Pflicht für Local SEO bei lokalen Dienstleistern)
- **`[+] Wettbewerber-Liste** (fehlte — für Positionierung + SEO-Gap-Analyse)
- **`[+] Conversion-Definition: was ist ein "Lead"?** (Formular / Anruf / WhatsApp / Buchung — fehlte, steuert das Tracking)

### Zugänge & Technik
- **`[+] Domain/Registrar, Hosting-Zugang** (fehlte)
- **`[+] Google Business Profile** (fehlte — Local SEO)
- **`[+] Monitor-Zugänge: GSC, Google Ads, Meta, Matomo** (für `connections.md`)
- **`[+] Bestehende Website-URL + Inhalte zum Migrieren** (fehlte)
- **`[+] Social-Profile** (fehlte)

### Recht
- **`[+] Impressum-Daten, Datenschutz, AGB, Handelsregister** (fehlte — ohne das geht keine Seite live)

> `/onboard` zieht das alles ein und destilliert es in `context/` (brand-profile, audience, services, legal, goals, voice).

---

## 3. Part B — Knowledge base = Playbooks (`references/playbooks/`)

Das Wissen, das die KI befolgt. Jedes Playbook: Prinzipien + Schritte + Checkliste + Beispiele.

| Playbook | Inhalt | Ernten aus |
|---|---|---|
| `copywriting.md` | Wie Texte geschrieben werden: Frameworks (AIDA/PAS), Headlines, CTAs, benefit-driven, in Brand Voice | → SOP_4.1, Website-Copy_LIKOVO |
| `page-structure.md` | Anatomie je Seitentyp: Home, Leistungsseite, Landingpage, Über-uns, Kontakt, Standort-/City-Page, Ratgeber, FAQ | → SOP_6.1 |
| `seo-onpage.md` | Title/Meta/H-Struktur, interne Verlinkung, Keyword-Mapping, Snippets | → SOP_4.2, SEO-Briefing_Agent |
| `geo.md` | **Generative Engine Optimization** — zitierfähig für ChatGPT/Perplexity/Google AI Overviews: klare Entitäten, strukturierte Antworten, Schema, Quellen | `[+] neu` |
| `local-seo.md` | **Google Business Profile, NAP-Konsistenz, City-Pages, lokale Keywords** | `[+] neu` (Kern für lokale Dienstleister) |
| `schema-structured-data.md` | **LocalBusiness, FAQ, Article, Service, Breadcrumb Schema** | `[+] neu` |
| `blog-ratgeber.md` | Content-Briefs, Suchintention, Topic-Cluster, Pillar-Pages, Ratgeber-Aufbau | → SOP_4.1/4.2 |
| `landingpage.md` | Conversion-fokussierte 1-Ziel-Seiten, Message-Match zu Ads | → SOP_6.1, SOP_5.1 |
| `image-generation.md` | Wann generieren vs. echte Fotos, Prompts in CI-Stil, Alt-Text, WebP/Kompression | `[+] neu` |
| `conversion-tracking.md` | **Was getrackt werden MUSS: Formular, Anruf, WhatsApp, Buchung; Matomo + Google-Ads-Conversion, Events, DSGVO-Consent** | → SOP_7.1 |
| `conversion-optimization.md` | CRO-Loop: Hypothese → Test → Messung; Heatmaps, A/B | `[+] neu` |
| `reporting.md` | Was ein Report enthält, KPIs, White-Label-Format, wie kommentiert wird | → SOP_3.4 |
| `performance-a11y.md` | **Core Web Vitals, Ladezeit, Barrierefreiheit-Basics** | `[+] neu` |
| `design-system-usage.md` | Wie aus Komponenten gebaut wird, Konsistenzregeln | `[+] neu` |

---

## 4. Part C — Skills (on-demand, interaktiv)

| Skill | Tut |
|---|---|
| `onboard` | Assets + Fragebogen + Transkripte einlesen → `context/` aufbauen (Verfeinerung nötig) |
| `weekly-review` | Das Herz — Daten → nächste Tasks (existiert) |
| `build-page` | Eine Seite aus dem Design-System bauen (Copy → SEO → Bilder → Komposition → Commit) |
| `write-copy` | Seitentext in Brand Voice nach `copywriting.md` |
| `write-blog` | Ratgeber/Blogbeitrag nach `blog-ratgeber.md` |
| `build-landingpage` | Conversion-Landingpage nach `landingpage.md` |
| `seo-optimize` | On-Page-SEO einer Seite nach `seo-onpage.md` |
| `geo-optimize` | GEO-Optimierung nach `geo.md` |
| `local-seo` | GBP + City-Pages nach `local-seo.md` |
| `generate-images` | Bilder nach `image-generation.md` (CI-konform) |
| `setup-tracking` | Conversion-Tracking einrichten nach `conversion-tracking.md` |
| `conversion-optimize` | CRO-Hypothesen + Tests nach `conversion-optimization.md` |
| `build-report` | Report erstellen nach `reporting.md` |
| `audit` | Technischer SEO-/Performance-Crawl, Lücken-Report |

---

## 5. Part D — Workflows (deterministische Mehr-Schritt-Abläufe)

| Workflow | Kette |
|---|---|
| `onboarding-pipeline` | Assets einlesen → Brand-Profil extrahieren → Fragebogen/Transkript auswerten → `context/` schreiben |
| `new-site-build` | Sitemap → je Seite (Copy → SEO → GEO → Bilder → Komposition) → Tracking-Setup → Launch-Checkliste (Recht, Schema, Performance) |
| `content-pipeline` | Keyword-Research → Brief → Draft → SEO/GEO → Bilder → Publish |
| `monthly-report` | Alle Monitore ziehen → synthetisieren → Format → kommentieren |

> Workflows nutzen die Skills + Playbooks als Bausteine. `new-site-build` ist der große — er orchestriert den ganzen Seitenaufbau.

---

## 6. Part E — Integrationen / Schnittstellen

| Zweck | Schnittstelle | Stand |
|---|---|---|
| SEO-Sichtbarkeit | Sistrix | MCP vorhanden — Key |
| Search-Daten | Google Search Console | zu bauen |
| Ads-Daten | Google Ads, Meta Ads | zu bauen |
| Traffic/Conversion | Matomo | zu bauen |
| Local | Google Business Profile | zu bauen |
| Code/Deploy | Git + Hosting (Hetzner) | zu bauen |
| Lead-Routing | Formular-Handler → CRM/E-Mail/WhatsApp | `[+] zu klären` |
| Bildgenerierung | Bild-Modell-API | `[+] zu klären` |

---

## 7. Empfohlene Bau-Reihenfolge

1. **Onboarding verfeinern** — Intake erweitern (Assets, Recht, Zugänge, Referenzen, Local, Conversion-Definition) + `onboarding-pipeline`-Workflow. *Das hast du als Erstes geflaggt.*
2. **Playbooks ernten** — die SOPs in `references/playbooks/` portieren. Das ist das Gehirn; ohne das baut die KI beliebig.
3. **Build-Schicht** — Tech-Stack + Design-System v1 + `build-page`.
4. **`new-site-build`-Workflow** — erste echte Seite (LIKOVO) end-to-end.
5. **Tracking + Monitore** — `setup-tracking`, Sistrix → GSC.
6. **Betriebs-Loop** — `weekly-review` + `monthly-report` schärfen.

---

## 8. Offene Fragen
- Lead-Routing: wohin geht ein Formular-Lead (CRM fehlt aktuell — siehe persönliches AIOS)?
- Bildgenerierung: welches Modell/Tool?
- Design-System: aus Figma ableiten (Figma-MCP vorhanden) oder im Code starten?
