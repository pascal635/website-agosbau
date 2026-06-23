# GEO — Generative Engine Optimization

> Zweck: Eine Seite so bauen, dass KI-Antwortmaschinen (ChatGPT, Perplexity, Google AI Overviews, Gemini) sie als Quelle zitieren und den lokalen Dienstleister namentlich nennen.

## Abgrenzung zu klassischem SEO

| | Klassisches SEO | GEO |
|---|---|---|
| Ziel | Ranking in der Trefferliste (Klick zur Seite) | Zitiert/genannt in der generierten Antwort (oft ohne Klick) |
| Erfolg | Position 1-10, CTR | Erwähnung als Quelle, korrekte Entitäts-Nennung |
| Belohnt | Keywords, Backlinks, technisches On-Page | Klare Fakten, extrahierbare Antworten, Entitäts-Konsistenz, Autorität |
| Einheit | Die Seite/das Keyword | Die Aussage/der Absatz (Passage) |
| Messung | GSC, Sistrix-Sichtbarkeit | Sistrix AI-Tracker (`ai_*`), manuelle Prompt-Tests |

GEO ersetzt SEO nicht. GEO ist die zweite Schicht: Du nimmst eine sauber rankende Seite und machst ihre einzelnen Aussagen maschinell extrahier- und zitierbar.

## Prinzipien

- **Eine Entität, eindeutig benannt.** Firmenname, Standort, Leistung immer identisch schreiben — Wort für Wort gleich auf Website, Schema, Google-Business-Profil, Branchenverzeichnissen. KI baut Vertrauen über Konsistenz.
- **Antwort zuerst, Begründung danach.** Jede Frage in den ersten 1-2 Sätzen direkt beantworten (40-60 Wörter, selbsterklärend ohne Kontext). KI extrahiert genau diesen Block.
- **Fakten statt Marketing.** Zahlen, Orte, Preise ab/von, Öffnungszeiten, Zertifikate, Jahre Erfahrung. "Wir sind die Besten" ist nicht zitierbar — "Meisterbetrieb seit 2008, 4 Monteure, Notdienst im Umkreis 30 km um {Stadt}" schon.
- **Struktur, die Maschinen lesen.** Frage als H2/H3, kurze Antwort darunter, Listen und Tabellen statt Fließtext-Wänden. Schema-Markup macht die Struktur explizit (siehe `schema-structured-data.md`).
- **Aktualität signalisieren.** Sichtbares Datum ("Stand: Juni 2026"), `dateModified` im Schema, jährliche Faktenprüfung. KI bevorzugt frische, datierte Quellen.
- **Autorität belegen, nicht behaupten.** Autor mit Name + Qualifikation, externe Belege (Innung, Kammer, TÜV, Hersteller-Zertifikat), echte Referenzen mit Ort. E-E-A-T ist der GEO-Filter.

## Schritt für Schritt

1. **Entität definieren.** Lege die kanonische Schreibweise fest: `{Firmenname}`, `{Rechtsform}`, `{Straße + Stadt}`, `{Hauptleistung}`. Schreibe sie in `context/` und nutze sie überall wortgleich. Prüfe Google-Business-Profil und Top-Branchenverzeichnisse auf dieselbe Schreibweise (NAP-Konsistenz: Name, Address, Phone).

2. **Frage-Inventar bauen.** Sammle die echten Fragen der Zielgruppe — aus dem Content-Fragebogen, "Nutzer fragen auch" (Sistrix `keyword_seo_serpfeatures`), und 5-10 selbst formulierten Prompts wie ein Kunde sie an ChatGPT stellt ("Was kostet eine neue Heizung in {Stadt}?", "Bester Kosmetiker in {Stadt} für {Behandlung}?"). Pro Seite 3-8 Fragen.

3. **Antwort-Blöcke schreiben.** Für jede Frage: H2/H3 = die Frage wortnah, darunter 1-2 Sätze direkte Antwort (40-60 Wörter), dann optional Detail/Liste. Antwort muss alleinstehend stimmen, wenn man sie aus der Seite herauskopiert.

4. **Fakten verdichten.** Baue mindestens einen "Fakten-Block" je Seite: Tabelle oder Definitionsliste mit harten Daten (Leistungen, Gebiet, Preise ab, Zeiten, Qualifikationen). Das ist das, was KI am liebsten zitiert.

5. **Schema setzen.** `LocalBusiness` auf jeder Seite, `FAQPage` für FAQ-Blöcke, `Article` + `author` für Ratgeber, `Service` für Leistungsseiten, `BreadcrumbList` für Navigation. Markup muss exakt den sichtbaren Text spiegeln. Details und JSON-LD-Vorlagen in `schema-structured-data.md`.

6. **Autorität verankern.** Autoren-Box mit Name, Rolle, Qualifikation. Verlinke externe Autoritäts-Belege (Innung, Handwerkskammer, Hersteller-Partnerseite). Setze 1-2 belastbare Quellenangaben in Ratgeber-Content (Norm, Förderprogramm, Gesetz mit Link).

7. **Aktualität markieren.** Sichtbares "Stand: {Monat Jahr}" oben oder unten, `datePublished`/`dateModified` im Schema. Bei jeder Überarbeitung Datum mitziehen.

8. **Crawlbarkeit für KI-Bots prüfen.** `robots.txt` darf `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `Google-Extended`, `ClaudeBot` nicht blocken, wenn Zitierung gewünscht ist. Kerninhalt muss serverseitig im HTML stehen (nicht erst per JS nachgeladen). `llms.txt` im Root optional als Wegweiser.

9. **Testen.** Stelle die 5-10 Prompts aus Schritt 2 live an ChatGPT, Perplexity und Google AI Overviews. Wird die Seite genannt? Stimmen die genannten Fakten? Notiere Lücken als Tasks fürs `weekly-review`.

10. **Messen & wiederholen.** Sistrix AI-Tracker (`ai_tracker`, `ai_entity`, `ai_prompt_answers`) zeigt, ob und wofür die Entität in KI-Antworten auftaucht. Monatlich prüfen, schwache Fragen nachschärfen.

## Checkliste

- [ ] Kanonische Entitäts-Schreibweise in `context/` festgelegt und überall wortgleich
- [ ] NAP (Name/Adresse/Telefon) auf Website, Google-Business-Profil, Verzeichnissen identisch
- [ ] Pro Seite 3-8 echte Zielgruppen-Fragen als H2/H3
- [ ] Jede Frage in 40-60 Wörtern direkt beantwortet, alleinstehend verständlich
- [ ] Mindestens ein Fakten-Block (Tabelle/Liste) mit harten Daten je Seite
- [ ] `LocalBusiness`-Schema auf jeder Seite, Markup spiegelt sichtbaren Text
- [ ] `FAQPage`-Schema für FAQ-Blöcke gesetzt
- [ ] Autoren-Box mit Name + Qualifikation bei Ratgeber-Content
- [ ] Externe Autoritäts-Belege verlinkt (Innung/Kammer/Zertifikat)
- [ ] Sichtbares "Stand: {Monat Jahr}" + `dateModified` im Schema
- [ ] KI-Bots in `robots.txt` nicht geblockt; Kerninhalt im server-gerenderten HTML
- [ ] Live-Prompt-Test in ChatGPT + Perplexity + AI Overviews durchgeführt
- [ ] Sistrix AI-Tracker für die Entität eingerichtet

## Vorlagen & Beispiele

### Antwort-Block (direkt zitierbar)

```markdown
## Was kostet ein Heizungstausch in {Stadt}?

Ein Heizungstausch in {Stadt} kostet je nach System zwischen
8.000 und 18.000 Euro. Wärmepumpen liegen am oberen Ende, moderne
Gas-Brennwertgeräte am unteren. Über die BEG-Förderung sind bis zu
70 % der Kosten erstattungsfähig.

| System | Preis ab | Förderfähig |
|---|---|---|
| Gas-Brennwert | 8.000 € | nein |
| Wärmepumpe Luft/Wasser | 16.000 € | bis 70 % |
| Hybrid | 14.000 € | teilweise |

*Stand: Juni 2026. Preise inkl. Einbau, ohne Sanierungsbedarf am Heizkreis.*
```

### Fakten-Block (Definitionsliste am Seitenkopf)

```markdown
**{Firmenname} auf einen Blick**
- Leistung: {Hauptleistung}, {Nebenleistung}
- Gebiet: {Stadt} + 30 km Umkreis
- Qualifikation: Meisterbetrieb, Innungsmitglied seit {Jahr}
- Team: {n} Mitarbeiter
- Erreichbarkeit: Mo–Fr 7–18 Uhr, Notdienst 24/7
```

### Autoren-Box

```markdown
**Geschrieben von {Vorname Nachname}**
{Rolle}, {Qualifikation, z. B. Heizungsbaumeister}. Seit {Jahr} bei
{Firmenname}. Fachgebiet: {Thema}.
```

### FAQ-Block + zugehöriges Schema (Auszug)

```html
<h2>Häufige Fragen zu {Leistung} in {Stadt}</h2>
<h3>Wie schnell ist ein Termin verfügbar?</h3>
<p>In der Regel innerhalb von 3 Werktagen. Für Notfälle bieten wir
einen 24/7-Notdienst im Umkreis von 30 km um {Stadt}.</p>
```
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Wie schnell ist ein Termin verfügbar?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In der Regel innerhalb von 3 Werktagen. Für Notfälle bieten wir einen 24/7-Notdienst im Umkreis von 30 km um {Stadt}."
    }
  }]
}
```
> Vollständige Schema-Vorlagen (LocalBusiness, Article, Service, Breadcrumb): `schema-structured-data.md`.

### robots.txt — KI-Bots zulassen

```
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: ClaudeBot
Allow: /
```

### Prompt-Test-Set (anpassen pro Kunde)

```
1. Bester {Leistung}-Anbieter in {Stadt}?
2. Was kostet {Leistung} in {Stadt}?
3. {Firmenname} {Stadt} — Erfahrungen / seriös?
4. {Problem des Kunden} in {Stadt} — wer hilft?
5. Wer bietet {Leistung} mit Notdienst in {Stadt}?
```

## Bezug

- **Skill `geo-optimize`** — wendet dieses Playbook auf eine bestehende oder neue Seite an.
- **Workflow `new-site-build`** — der GEO-Schritt je Seite (Copy → SEO → **GEO** → Bilder → Komposition).
- **Workflow `content-pipeline`** — GEO-Schritt nach SEO im Content-Draft.
- **Playbook `schema-structured-data.md`** — liefert das Markup, das GEO voraussetzt.
- **Playbook `page-structure.md`** — wo Frage-Blöcke und FAQ je Seitentyp sitzen.
- **Skill `weekly-review`** — nimmt schwache KI-Sichtbarkeit (Sistrix `ai_*`) als nächste Tasks auf.
