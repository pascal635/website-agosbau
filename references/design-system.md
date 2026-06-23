# Website-AIOS — Design-System

> **Zweck:** Der verbindliche Baukasten, aus dem die KI jede Kundenseite zusammensetzt. Tokens + Komponenten + Kompositions- und Konsistenzregeln. Die KI baut **nur** aus diesen Bausteinen — so bleiben viele Seiten konsistent, schnell und wartbar.
>
> **Status:** TEMPLATE. Die Platzhalter (`{{...}}`) füllt `/onboard` pro Kunde aus dem CI-Manual (`assets/ci/`) in eine kundenspezifische `theme.css` / `tokens.json`. Diese Datei selbst bleibt unverändert — sie beschreibt die Struktur, nicht die Werte.
>
> **Ziel-Kunden (ICP):** lokale B2C-Dienstleister mit physischem Standort — Handwerk/Haustechnik, Immobilienmakler, Kosmetik/Aesthetik, Versicherungs-/Finanzberater, Coaches. Jeder Token und jede Komponente ist auf Vertrauen, lokale Auffindbarkeit und Lead-Generierung ausgelegt.

---

## 0. Prinzipien

- **Token-first.** Keine Hardcode-Farben, -Größen oder -Abstände im Markup. Immer die Variable.
- **Mobile-first.** Default-Stile gelten für Mobil. Breakpoints erweitern nach oben.
- **Conversion-first.** Jeder Seitentyp hat genau ein primäres Ziel (Lead). Jede Komponente dient ihm oder stört nicht.
- **Trust-first.** Lokale Dienstleister verkaufen über Vertrauen: echte Fotos, Bewertungen, Standort, klare Kontaktwege.
- **Ein CTA-Ziel pro Seite.** Sekundäre Aktionen sind sichtbar untergeordnet.

---

## 1. Design-Tokens

Benannte Variablen mit Platzhalter-Werten. Onboarding ersetzt die Hex/Werte; die **Namen bleiben stabil**, damit Komponenten nie neu verdrahtet werden müssen.

### 1.1 Farben

Semantisch benannt (nicht „blau", sondern `--color-primary`), damit ein CI-Wechsel nur die Werte tauscht.

```
/* Marke */
--color-primary:        {{#1A4D8F}};   /* Hauptmarkenfarbe — CTAs, Links, Akzente */
--color-primary-hover:  {{#143C70}};   /* dunklere Variante für Hover/Active */
--color-secondary:      {{#E8A23D}};   /* Zweitfarbe — Highlights, sekundäre Akzente */
--color-accent:         {{#16A34A}};   /* Signal/Erfolg — z. B. „Jetzt anrufen", Verfügbarkeit */

/* Neutrale Skala (Text, Flächen, Linien) */
--color-fg:             {{#1C1F23}};   /* Fließtext */
--color-fg-muted:       {{#5B6470}};   /* sekundärer Text, Captions */
--color-bg:             {{#FFFFFF}};   /* Seitenhintergrund */
--color-bg-subtle:      {{#F5F7FA}};   /* abgesetzte Sektionen, Karten */
--color-border:         {{#E2E6EB}};   /* Trennlinien, Karten-Rand */

/* Status (Formulare, Hinweise) */
--color-success:        {{#16A34A}};
--color-warning:        {{#D97706}};
--color-error:          {{#DC2626}};

/* On-Color (Text auf farbigem Grund) */
--color-on-primary:     {{#FFFFFF}};
--color-on-accent:      {{#FFFFFF}};
```

**Regel:** Kontrast min. WCAG AA (4.5:1 Text, 3:1 große Schrift/UI). Onboarding prüft die gelieferten CI-Farben gegen den weißen/dunklen Grund und vermerkt Verstöße.

### 1.2 Typografie

Eine Schrift-Skala mit fester Ratio statt freier Größen.

```
--font-sans:   {{"Inter", system-ui, sans-serif}};   /* UI + Fließtext */
--font-head:   {{"Inter", system-ui, sans-serif}};   /* Überschriften (oft = sans) */

/* Skala (1.250 — Major Third), rem-basiert */
--text-xs:    0.75rem;   /* 12px — Captions, Labels */
--text-sm:    0.875rem;  /* 14px — Hilfetext, Meta */
--text-base:  1rem;      /* 16px — Fließtext (Mindestgröße Body) */
--text-lg:    1.25rem;   /* 20px — Intro/Lead */
--text-xl:    1.563rem;  /* 25px — H3 */
--text-2xl:   1.953rem;  /* 31px — H2 */
--text-3xl:   2.441rem;  /* 39px — H1 (mobil) */
--text-4xl:   3.052rem;  /* 49px — H1/Hero (Desktop) */

/* Line-Height & Gewicht */
--leading-tight:  1.15;  /* Überschriften */
--leading-normal: 1.6;   /* Fließtext */
--weight-regular: 400;
--weight-medium:  500;
--weight-bold:    700;
```

**Regel:** Pro Seite genau **eine** H1. Überschriften-Hierarchie lückenlos (H1→H2→H3). Body nie unter `--text-base`.

### 1.3 Spacing

8px-Basisraster. Abstände kommen ausschließlich aus dieser Skala.

```
--space-1:  0.25rem;  /*  4px */
--space-2:  0.5rem;   /*  8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px — vertikaler Sektionsabstand Desktop */

--section-y:   var(--space-16);   /* vertikaler Abstand zwischen Sektionen (mobil) */
--container:   1200px;            /* max. Inhaltsbreite */
--gutter:      var(--space-4);    /* seitlicher Rand (mobil) */
```

### 1.4 Radien & Schatten

```
--radius-sm:  0.25rem;   /* Inputs, Tags */
--radius-md:  0.5rem;    /* Buttons, Karten */
--radius-lg:  1rem;      /* Hero-Bilder, große Flächen */
--radius-full: 9999px;   /* Pills, Avatare */

--shadow-sm:  0 1px 2px rgba(0,0,0,0.06);
--shadow-md:  0 4px 12px rgba(0,0,0,0.08);   /* Karten, Hover */
--shadow-lg:  0 12px 32px rgba(0,0,0,0.12);  /* schwebende Elemente, Modals */
```

### 1.5 Breakpoints

Mobile-first, min-width.

```
--bp-sm:  640px;   /* großes Handy / kleines Tablet */
--bp-md:  768px;   /* Tablet — Nav wird horizontal */
--bp-lg:  1024px;  /* Desktop — mehrspaltige Layouts */
--bp-xl:  1280px;  /* breiter Desktop */
```

**Regel:** Touch-Ziele min. 44×44px. Auf `<md` ist die Nav ein Burger-Menü, Grids kollabieren auf eine Spalte.

---

## 2. Kern-Komponenten

Jede Komponente ist ein in sich geschlossener Baustein. Sie nutzt nur Tokens, nimmt Inhalt von außen (Props/Slots) und kennt keine Seiten-Logik.

| Komponente | Zweck | Pflicht-Inhalte |
|---|---|---|
| **Header / Nav** | Orientierung + ständiger Kontaktweg. Logo, Hauptnavigation, prominenter Kontakt-CTA (Tel./„Termin"). Sticky auf Scroll. | Logo, 3–6 Nav-Links, 1 Telefon/CTA-Button, Burger auf Mobil |
| **Hero** | Sofort klarmachen: was, für wen, wo + erste Aktion. Headline (Nutzenversprechen), Subline, primärer CTA, optional Trust-Zeile (Sterne/Region). | H1, Subline, 1 CTA, Bild/Hintergrund |
| **Leistungs-Karte** | Eine Leistung kompakt darstellen, anteasern, verlinken. In Grids verwendet. | Icon/Bild, Titel, 1–2 Sätze Nutzen, Link „Mehr erfahren" |
| **CTA-Block** | Conversion-Aufforderung als eigene Sektion. Wiederholt das Seitenziel mittig/abgesetzt. | Headline, Stütztext, primärer Button (+ optional Tel.) |
| **Testimonial** | Vertrauensbeweis durch echte Kundenstimmen/Bewertungen. Einzeln oder Slider/Grid. | Zitat, Name, Ort/Kontext, optional Foto + Sterne |
| **FAQ-Akkordeon** | Einwände entkräften + GEO/SEO (FAQ-Schema). Aufklappbare Frage/Antwort-Paare. | 3–8 Frage/Antwort-Paare |
| **Formular** | Lead-Erfassung — die Conversion. Minimal-Felder, klares Ziel, DSGVO-Consent. | Felder (Name, Kontakt, Anliegen), Consent-Checkbox, Absende-Button, Erfolgs-/Fehlerzustand |
| **Footer** | Abschluss, Recht, NAP-Wiederholung, Sekundärnavigation. | NAP (Name/Adresse/Tel.), Öffnungszeiten, Impressum/Datenschutz-Links, Social, Sekundär-Nav |
| **Standort-Block** | Local-SEO + Vertrauen: physische Präsenz zeigen. NAP, Karte, Öffnungszeiten, Anfahrt. | Adresse (NAP), eingebettete Karte, Öffnungszeiten, optional „Route planen" |

**Querschnitt-Bausteine** (in mehreren Komponenten genutzt): Button (primär/sekundär/Text), Badge/Sterne-Rating, Section-Wrapper (sorgt für `--container` + `--section-y`), Icon-Set.

**Tracking-Hooks (Pflicht).** Alle Conversion-Elemente tragen stabile Daten-Attribute, damit `setup-tracking` ohne Code-Änderung greift (Matomo-Event + Google-Ads-Conversion — **kein** Google Analytics):
`data-track="lead"` für Formular-Submit, Telefon-Klick (`tel:`), WhatsApp-Klick, Termin-/Buchungs-Button. Jeder CTA-Button und das Formular sind ohne diese Hooks unvollständig.

---

## 3. Kompositions-Regeln (Komponenten → Seitentypen)

Seiten werden aus Sektionen in fester Reihenfolge gestapelt. Header und Footer rahmen jede Seite. Reihenfolge folgt der Überzeugungs-Dramaturgie: Aufmerksamkeit → Nutzen → Vertrauen → Aktion.

**Header → [Seiten-Sektionen] → Footer** gilt immer.

| Seitentyp | Sektions-Abfolge | Primäres Ziel |
|---|---|---|
| **Home** | Hero → Leistungs-Karten (Grid) → Trust/Testimonials → Standort-Block → FAQ → CTA-Block | Überblick + Lead |
| **Leistungsseite** | Hero (zur Leistung) → Nutzen/Ablauf → Testimonial → FAQ (leistungsspezifisch) → CTA-Block (+ Formular) | Lead für diese Leistung |
| **Landingpage** | Hero → Nutzen-Bullets → Testimonials → FAQ → Formular | **1 Ziel**, message-match zur Ad |
| **Standort-/City-Page** | Hero (Ort im H1) → Leistungen vor Ort → Standort-Block → lokale Testimonials → FAQ → CTA-Block | lokaler Lead (Local SEO) |
| **Über uns** | Hero (Team/Story) → Werte → Team → Testimonials → CTA-Block | Vertrauen → Lead |
| **Kontakt** | Hero (kurz) → Formular + Standort-Block (zweispaltig) → FAQ | Lead |
| **Ratgeber / Blog** | Hero (Titel/Intro) → Artikel-Inhalt → FAQ → CTA-Block | Soft-Lead + SEO/GEO |

**Regeln:**
- **Landingpage:** keine Haupt-Navigation mit Ablenkungen — Header reduziert auf Logo + den einen CTA. Genau ein Conversion-Ziel.
- **Standort-/City-Page:** Standort-Block ist Pflicht und nutzt echte NAP-Daten; Ortsname in H1, URL und Meta.
- **CTA-Block** mindestens einmal je Seite, spätestens am Ende. Lange Seiten wiederholen ihn.
- **Formular** auf jeder Seite mit Lead-Ziel erreichbar (eingebettet oder via CTA verlinkt).
- Sektionen wechseln optisch zwischen `--color-bg` und `--color-bg-subtle` (kein zweimal gleicher Grund hintereinander).

---

## 4. Konsistenz-Regeln

Diese Regeln sind nicht verhandelbar — sie sind der Grund, warum viele Seiten aus einem Klon konsistent bleiben.

1. **Nur Tokens.** Keine Roh-Hex, -px oder -Schriftnamen im Markup. Fehlt ein Wert, neuen Token vorschlagen — nicht hardcoden.
2. **Nur Kern-Komponenten.** Neuer Bedarf → erst prüfen, ob Bestehendes via Variante reicht. Neue Komponente nur dokumentiert + in dieser Datei ergänzt.
3. **Eine H1 pro Seite**, lückenlose Überschriften-Hierarchie.
4. **Ein primäres CTA-Ziel pro Seite.** Sekundäre Aktionen sichtbar untergeordnet (sekundärer/Text-Button).
5. **Button-Hierarchie konsistent:** primär = `--color-primary`, sekundär = Outline, Text-Link = ohne Fläche. Gleiche Aktion = gleicher Button-Typ über alle Seiten.
6. **Spacing aus der Skala**, Sektionsabstand immer `--section-y` / `--space-24` (Desktop).
7. **Bilder:** echte Kundenfotos vor generischen Stock-/KI-Bildern; jedes Bild mit Alt-Text; WebP, responsive, lazy-load außerhalb des Viewports.
8. **Barrierefreiheit:** Kontrast AA, Fokus-Ringe sichtbar, Touch-Ziele ≥44px, Formularfelder mit Labels.
9. **Tracking-Hooks Pflicht** an allen Lead-Aktionen (siehe §2) — Matomo + Google-Ads-Conversion.
10. **DSGVO:** Consent-Checkbox an jedem Formular, Datenschutz-Link im Footer, Karten/Drittinhalte erst nach Consent laden.
11. **NAP-Konsistenz:** Name/Adresse/Telefon überall identisch zur Quelle in `context/` (Local-SEO-kritisch).
12. **Voice:** Texte folgen `references/playbooks/copywriting.md` und `context/voice.md` — kurze Sätze, nutzenorientiert, keine Gedankenstriche.

---

> **Onboarding-Hinweis:** `/onboard` liest `assets/ci/` (CI-Manual, Logo, Schriften), füllt alle `{{...}}`-Tokens in eine kundenspezifische Theme-Datei und vermerkt fehlende/regelwidrige CI-Angaben (z. B. Kontrast) in `decisions/log.md`. Die Komponenten- und Kompositionsregeln bleiben über alle Klone gleich.
