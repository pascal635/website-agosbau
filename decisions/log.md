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

---

## 2026-06-25 — Go-live Phase 6: Deploy-Pipeline + Rechtstexte

**Decision:** AGOS-Seite auf den Hetzner-Webspace deployt. **Eigenes GitHub-Repo `pascal635/website-agosbau`** (privat) angelegt, `origin` von Template (`Website-AIOS`) dorthin umgehängt. **Deploy via GitHub Actions** (`.github/workflows/deploy.yml`): Push auf `main` → `npm ci` + `astro build` + **FTPS-Upload via lftp** auf `dedi1145.your-server.de`. FTP-Creds als GitHub Secrets. Apache → `public/.htaccess` (301-Redirects `/leistungen/`→Fliesenverlegung, `/fliesenleger-kosten/`→Badsanierung; 404; Caching). 404-Seite ergänzt.

**Rechtstexte:** Impressum 1:1 von Live-Seite übernommen (USt-IdNr. nicht vorhanden). Datenschutz: Rahmen (I–VII) verbatim, Dienst-Abschnitte **auf tatsächlich genutzte reduziert** (Google Ads, Meta Pixel, Matomo) statt der 30+ WP-Dienste der Altseite.

**Why:** Webspace war leer → kein Risiko fürs alte WP (läuft noch unter agosbau.de). JS-FTP-Action scheiterte an Hetzner-FTPS (ECONNRESET data socket), lftp läuft. Datenschutz darf keine ungenutzten Dienste deklarieren.

**Offen:** (1) DNS-Cutover agosbau.de → Webspace (Registrar). (2) Tracking-Einbau Matomo/Ads/Pixel + Consent — nach Live. (3) Datenschutz anwaltlich/Generator gegen reale Tool-Liste prüfen. (4) Web3Forms-Key fürs Leadformular.

**Owner:** Pascal · Kunde: André Gostomczyk.

---

## 2026-08-18 — SEO-Fixes Startseite (Seobility-Report)

**Decision:** Kanonische URL erzwungen. Die Seite war unter **vier** Varianten mit Status 200 erreichbar (`http://`, `http://www.`, `https://www.`, `https://`) → echter Duplicate Content. In `public/.htaccess` per mod_rewrite 301 auf `https://agosbau.de` erzwungen; HTTPS-Bedingung prüft zusätzlich `X-Forwarded-Proto`, damit hinter einem TLS-Proxy keine Redirect-Schleife entsteht. Alt-URL-Redirects auf absolute HTTPS-Ziele umgestellt (spart einen Hop). `AddDefaultCharset UTF-8` ergänzt (charset fehlte im HTTP-Header). Startseite: USP-Satz „Wer günstig baut, baut zweimal – wir machen Ihr Bad einmal richtig." ergänzt, damit die H1-Wörter im Fließtext vorkommen.

**Verifiziert live:** alle 4 Varianten laufen in genau 1 Hop auf `https://agosbau.de` zusammen, keine Schleife; `content-type: text/html; charset=UTF-8`.

**Deploy-Härtung:** Der lftp-Upload hing einmal >13 Min. Jetzt `timeout-minutes: 8`, expliziter Passive-Mode, `xfer:timeout`, `--parallel=3` (Deploy nun ~2,5 Min).

**Bewusst NICHT gemacht:** (1) Social-Sharing-Buttons — Seobility stuft sie selbst als „nice to have" ein; sie bringen Drittanbieter-Skripte und Tracking auf eine lokale Handwerker-Leadseite bei nahezu null Nutzen. (2) Doppelte Ankertexte („Badsanierung"/„Fliesenverlegung" je 3×) — entsteht durch Navigation + Footer + Inline-Link und ist auf praktisch jeder Website normal; Google kommt damit klar.

**Offen:** Backlinks/Externe Faktoren (66%) sind Off-Page — GBP pflegen, Verzeichnisse mit zeichengleicher NAP. Gehört ins `/weekly-review`.

**Owner:** Pascal · Kunde: André Gostomczyk.

---

## 2026-08-18 — SEO+GEO-Onpage-Plan erstellt (Datenbasis: Sistrix)

**Decision:** Onpage-Plan in `context/seo-geo-plan.md` abgelegt — wird Schritt für Schritt umgesetzt, danach Optimierungsroutine im 4-Wochen-Takt (erste Runde ~2026-09-15, wenn GSC ~4 Wochen Daten hat). GSC wurde heute verbunden (Daten ab ~19.08.).

**Datenbasis (Sistrix 18.08.):** SI 0,0001 · 13 Rankings · 💎 `badsanierung bremen kosten` #1 und `fliesenleger achim` #1 · Haupt-KW `badsanierung bremen` (150 Klicks/Mon., CPC 4,40 €) rankt NICHT in Top 100 · `barrierefreies bad bremen` #17 = größter Quick Win. SERP-Befund: gutehandwerker.com + gelbeseiten.de in Top 6 → Verzeichnisse sind GEO-Pflichtquellen.

**Kernpunkte des Plans:** (A) Badsanierung-Seite aufs Haupt-KW durchsetzen ohne das Kosten-#1 zu gefährden, Barrierefrei auf Seite 1. (G) Frage-Blöcke + FAQ-Schema auf allen Leistungsseiten, Entitäts-Hub Über-uns, Auswahl-Ratgeber „guten Fliesenleger erkennen" als Onpage-Antwort auf „bester Fliesenleger Bremen". (O) Offpage klar als Pflicht markiert: GBP, Bewertungs-Routine (6→25+), Verzeichnis-NAP — LLM-Nennungen kommen primär aus Drittquellen. GEO-Erfolg wird per 8 dokumentierten Testfragen an ChatGPT/Gemini/Perplexity gemessen (`intake/research/geo-audit-log.md`).

**Owner:** Pascal · Kunde: André Gostomczyk.

---

## 2026-08-18 — Plan-Schritt A1 umgesetzt: Badsanierungsseite aufs Haupt-Keyword

**Decision:** Erster Schritt aus `context/seo-geo-plan.md` umgesetzt und live.

**Hauptursache gefunden:** Die H1 der Badsanierungsseite enthielt das Wort „Badsanierung" **gar nicht** — sie lautete „Ihr neues Bad in Bremen – einmal richtig, zum Festpreis.". „Badsanierung Bremen" stand nur als Eyebrow-`<span>` darüber, also ohne Überschriften-Gewicht. Das erklärt, warum die Seite für `badsanierung bremen` nicht in den Top 100 rankte, obwohl sie für `badsanierung bremen kosten` auf #1 steht. H1 jetzt: „Badsanierung in Bremen – einmal richtig, zum Festpreis.".

**Ausbau:** Drei neue Sektionen (Gewerke-Koordination „ohne fünf Handwerker" · Dauer mit Richtwert-Tabelle nach Umfang · Altbau in Bremen: Holzbalkendecken/Entkopplung, schiefe Wände, alte Leitungen). 946 → **1.453 Wörter**. Vier neue Frage-Blöcke à 40–60 Wörter (GEO-zitierfähig) → FAQPage-Schema von 5 auf **9 Fragen**.

**Geschützt:** Kosten-H2, Preistabelle und Title/Meta blieben unverändert, damit das #1-Ranking für „badsanierung bremen kosten" nicht gefährdet wird. Live verifiziert.

**Nächster Schritt:** A2 — `/barrierefreies-bad-bremen/` von Position 17 auf Seite 1 (KfW-/Pflegekasse-Zuschüsse als Fakten-Block, DIN 18040-2).

**Owner:** Pascal · Kunde: André Gostomczyk.

---

## 2026-08-18 — Plan-Schritt A2: barrierefreies Bad + Korrektur einer falschen Förderangabe

**Decision:** A2 umgesetzt und live. **Wichtigster Punkt ist kein SEO-Punkt:** Die Seite nannte den KfW-Zuschuss als Fördermöglichkeit („Förderprogramme, zum Beispiel der KfW"). An der Quelle (kfw.de) geprüft: **455-B nimmt seit 31.07.2026 keine neuen Anträge an**, die Bundesmittel für 2026 sind ausgeschöpft; Wiederaufnahme frühestens 2027. Ein Interessent hätte mit Geld gerechnet, das es nicht gibt. Ersetzt durch eine Förder-Tabelle mit geprüften Zahlen: Pflegekasse bis 4.180 € je Maßnahme (§ 40 Abs. 4 SGB XI, alle Pflegegrade, **Antrag vor Baubeginn**), bis 16.720 € bei mehreren Anspruchsberechtigten, KfW-Kredit 159 bis 50.000 €. 455-B bleibt offen als „derzeit keine Antragstellung" ausgewiesen — mit Stand-Datum und Prüfhinweis.

**SEO/GEO-Ausbau:** DIN-18040-2-Maßtabelle (120×120 cm, max. 2 cm Schwelle, min. 90 cm lichte Türbreite, R10/R11) · eigene H2 „Die bodengleiche Dusche" fürs Sekundär-Keyword · FAQ von 3 auf 6 Fragen à 40–60 Wörter (FAQPage-Schema) · kontextueller interner Link von der Badsanierungsseite mit Ankertext „barrierefreies Bad in Bremen".

**Grundsatz daraus:** Förderbeträge nie aus dem Gedächtnis schreiben. In die 4-Wochen-Routine als fester Prüfpunkt aufgenommen.

**Nächster Schritt:** G3 — Entitäts-Hub „Über uns" + LocalBusiness-Schema vervollständigen (GEO-Fundament).

**Owner:** Pascal · Kunde: André Gostomczyk.

---

## 2026-08-18 — Plan-Schritte G3 + G5: Entitäts-Fundament für GEO

**Decision:** Die Entität AGOS BAU ist jetzt maschinenlesbar und kanonisch beschrieben — Voraussetzung dafür, dass LLMs den Betrieb überhaupt als benennbare Größe erfassen.

**Schema (`Base.astro`, gilt auf allen 21 Seiten):** Typ von `LocalBusiness` auf **`HomeAndConstructionBusiness`** präzisiert. Ergänzt: `@id` (stabile Entitäts-ID), `geo`, `openingHoursSpecification`, `areaServed` (10 Orte, dedupliziert aus `cities.ts`), `knowsAbout` (7 Fachthemen inkl. DIN 18534/18040-2), `sameAs`, `founder`, `foundingDate`, `numberOfEmployees`, `legalName`, `slogan`, `logo`. JSON-Validität und Live-Ausgabe geprüft.

**Geo-Koordinaten nicht geschätzt:** über OSM/Nominatim geokodiert (exakter Treffer inkl. Hausnummer und PLZ: 53.0212379, 9.0033922), Quelle in `site.ts` kommentiert. Falsche Koordinaten hätten Kunden an den falschen Ort geschickt.

**Sichtbar (`/ueber-uns/`):** Fakten-Tabelle mit 14 Zeilen (Firmierung, Gründung, HWK, Team, Projekte, Bewertung, Sitz, Einzugsgebiet, Leistungen, Normen, Markensysteme, Abrechnung, Kontakt) + „Stand: August 2026". LLMs zitieren bevorzugt datierte Faktenblöcke.

**AggregateRating geprüft:** 5,0 / 25 Rezensionen ist durch `intake/reviews.md` belegt (24 verbatim erfasst, Quelle GBP). Keine erfundene Zahl im Schema.

**G5:** `llms.txt` um dieselben Fakten + 5 Frage-Antwort-Kurzpaare erweitert (Kosten, Dauer, Gewerke, Zuschüsse, Altbau).

**Offen:** GBP-URL fehlt in `sameAs` — nachtragen, sobald der Zugang vorliegt. Das ist zugleich Offpage-Punkt O1 und die wichtigste einzelne GEO-Quelle.

**Nächster Schritt:** G4 — Auswahl-Ratgeber „Woran erkennt man einen guten Fliesenleger in Bremen?" (die Onpage-Antwort auf „bester Fliesenleger Bremen").

**Owner:** Pascal · Kunde: André Gostomczyk.

---

## 2026-08-18 — G4: Auswahl-Ratgeber live + Klärungspunkt Meisterpflicht

**Decision:** Ratgeber `/guten-fliesenleger-finden-bremen/` live. Das ist die Onpage-Antwort auf die Frage, die Kunden LLMs stellen („wer ist der beste Fliesenleger in Bremen?"). Aufbau: 8 Prüfkriterien mit je Prüffrage und Warnsignal, bewusst **allgemeingültig** formuliert (Handwerksrolle, Aufmaß vor Ort, DIN 18534 im Angebot, Untergrundprüfung, Gewerke-Regelung, Nachtragsregelung, prüfbare Bewertungen, fester Ansprechpartner). Danach eine Transparenz-Tabelle, wie AGOS selbst antwortet — mit dem ausdrücklichen Satz, dass ein anderer Betrieb mit gleichen Antworten ebenso eine gute Wahl ist. Ein gerigged wirkender Kriterienkatalog hätte weder Kunden noch LLMs überzeugt. Article- + FAQPage-Schema, eingehender Link von der Fliesenverlegungsseite.

**Google-Entität verknüpft (schließt G3-Lücke):** Aus dem von Pascal geteilten Link die Knowledge-Graph-ID **`/g/11s79_135l`** aufgelöst und in `sameAs` + `identifier` eingetragen — bereinigt um die Tracking-Parameter der Share-URL. Bewertung auf `/ueber-uns/` und im Ratgeber aufs Google-Profil verlinkt, damit die 5,0/25 nachprüfbar ist.

**⚠️ Klärungspunkt Meisterpflicht:** Fliesenleger ist seit 14.02.2020 wieder meisterpflichtig (Anlage A HwO). AGOS BAU ist 2019 gegründet, fällt also unter Bestandsschutz. Mehrere Quellen nennen eine Nachweisfrist bis 01.01.2028 (Meisterbrief oder Ausnahmebewilligung § 8 HwO) — nicht sicher genug verifiziert, um damit zu arbeiten. Konsequenz: „Meisterbetrieb" wurde **nicht** als Kriterium aufgenommen, und die Website macht **keine** Aussage zum Meisterstatus. Auf der Seite steht nur das Belegte: Eintrag in der Handwerksrolle. **To-do für Pascal/André: bei der HWK klären** — Betriebsfrage, nicht SEO. Ein vorhandener Meisterbrief wäre ein starkes Trust-Signal für die Seite.

**Owner:** Pascal · Kunde: André Gostomczyk.

---

## 2026-08-18 — A3 + A4: interne Ankertexte und Meta-Pass

**A3 (interne Verlinkung):** Die 9 City-Pages verlinkten ihre Leistungen mit generischem Ankertext („Badsanierung", „Fliesenverlegung"). Über die Vorlage `[stadt].astro` sind die Ankertexte jetzt ortsspezifisch („Badsanierung in Bremen-Oberneuland"). Eine Änderung, neun Seiten, und sie variiert automatisch — das behebt zugleich die von Seobility monierten doppelten Ankertexte. **Bewusst nicht gemacht:** ein identischer Zusatz-Absatz auf allen 9 City-Pages. Das hätte Boilerplate über neun Seiten dupliziert und dem eigenen 60-%-Unique-Ziel widersprochen (Doorway-Risiko).

**A4 (Title/Meta):** Audit über alle 22 Seiten. Ergebnis: **alle Titles waren bereits in Ordnung** (≤ 60 Zeichen, Keyword vorn) — hier war nichts zu tun. Bei den Descriptions waren 6 über 160 Zeichen und wurden gekürzt (Keyword + CTA erhalten). Jetzt 0 überlange.

**Messfehler korrigiert:** Der erste Audit meldete 13 zu lange Descriptions. Ursache: Ich hatte die Länge im HTML-Quelltext gemessen, wo `&` als `&amp;` steht (5 statt 1 Zeichen). Nach Entity-Dekodierung waren es 6. Ohne die Gegenprüfung hätte ich sieben funktionierende Descriptions ohne Grund umgeschrieben. Methodik-Hinweis im Plan vermerkt.

**Owner:** Pascal · Kunde: André Gostomczyk.

---

## 2026-08-18 — B3 + B4 + G1/G2 abgeschlossen: Leistungsseiten ausgebaut

**B3 Fliesenverlegung:** Gleiches Muster wie bei A1 gefunden — **„Zementfliesen" kam 0× auf der Seite vor**, obwohl agosbau.de dafür auf Position 6 rankt. Google ordnet die Seite thematisch zu, ohne dass der Begriff dasteht; mit eigener Sektion ist Top 3 realistisch. Neue H2 „Vollverfliesung in Bremen" (Ranking #9) und „Zementfliesen, Naturstein und Mosaik" plus Materialtabelle (Feinsteinzeug, Keramik, Naturstein, Zementfliesen, Mosaik — je Eignung und Praxishinweis). 560 → 959 Wörter.

**B4 Großformat:** Hier war Keyword-Dichte nicht das Problem („Großformat" 26×), sondern Dünne — 503 Wörter, die dünnste Leistungsseite. Zusätzlich fehlte **„Fußbodenheizung" komplett (0×)**, obwohl das eine der häufigsten Fragen zum Thema ist. Neue Sektionen „Welche XXL-Formate wir verlegen" (Formattabelle) und „Großformat auf Fußbodenheizung" (hohlraumfreie Verklebung im Buttering-Floating-Verfahren, Aufheizen des Estrichs vor Verlegung). 503 → 784 Wörter.

**G1/G2 damit abgeschlossen:** Frage-Blöcke auf allen Leistungsseiten, alle Antworten 40–60 Wörter und alleinstehend verständlich. **31 Fragen im FAQPage-Schema** über alle Seiten.

**Preisfragen bewusst ohne erfundene Zahlen:** Bei „Was kostet Fliesenlegen pro m²?" und „Was kostet eine bodengleiche Dusche?" habe ich keine Beträge erfunden, sondern die Kostentreiber erklärt und auf den Festpreis nach Aufmaß verwiesen. Eine erfundene m²-Zahl auf der Website wäre eine Preisaussage, an der André gemessen würde.

**Offen in Phase B:** B1 (City-Page Badsanierung Achim), B2 (City-Page Bremen-Neustadt), B5 (echte Referenzen — blockiert durch Andrés Fotos/Projektdaten).

**Owner:** Pascal · Kunde: André Gostomczyk.

---

## 2026-08-18 — B1 + B2: zwei neue Ortsseiten, Verlinkungsfehler behoben

**B1 `/badsanierung-achim/` (866 Wörter):** Heimatmarkt-Seite. Wichtig war die Abgrenzung: Die Seite trägt den **lokalen** Bezug (Sitz Auf den Mehren 45 im Ortsteil Bierden, alle 9 Achimer Ortsteile, kurze Wege, schnelles Aufmaß) und verweist für die Leistungstiefe auf `/badsanierung-bremen/`, statt Ablauf, Kosten und Technik zu duplizieren. Eine Kopie der Bremen-Seite mit ausgetauschtem Ortsnamen wäre eine Doorway-Page gewesen.

**B2 `/fliesenleger-bremen-neustadt/`:** Statt Boilerplate ein echter lokaler Winkel — die Neustadt ist geprägt von **Altbremer Häusern** (Buntentor, Südervorstadt, Alte Neustadt), also Holzbalkendecken, Entkopplung, schiefe Wände. Das knüpft direkt an die Altbau-Sektion der Badsanierungsseite an. Ortsteile und Baucharakter vorab verifiziert, statt sie zu vermuten — bei einer Ortsseite wäre ein falscher Ortsteil besonders peinlich.

**Zwei Verlinkungsfehler gefunden und behoben:**
1. Die Ortsliste auf der Startseite war **hartcodiert**. Neustadt wäre unverlinkt geblieben, obwohl die Seite existiert. Sie wird jetzt aus `cities.ts` abgeleitet — künftige Stadtteilseiten erscheinen automatisch.
2. `/badsanierung-achim/` war nach dem Anlegen **verwaist** (keine eingehenden Links). Behoben über ein neues optionales `related`-Feld in `cities.ts` (Link von `/fliesenleger-achim/`) plus einen kontextuellen Link von `/badsanierung-bremen/`.

**Stand:** 24 URLs in der Sitemap. Onpage-Plan bis auf B5 abgearbeitet.

**Offen:** B5 (echte Referenzen) — blockiert durch Andrés Projektfotos und -daten. Offpage O1–O4. Klärung Meisterpflicht.

**Owner:** Pascal · Kunde: André Gostomczyk.
