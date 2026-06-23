# Local SEO

> Den lokalen Dienstleister so positionieren, dass er bei standortbezogenen Suchen ("Heizungsbau Köln", "Kosmetik in meiner Nähe") im Local Pack und in der organischen Liste oben steht und daraus Anfragen entstehen.

## Prinzipien

- Google Business Profile (GBP) ist der wichtigste lokale Rankingfaktor — vor der Website. Erst GBP voll ausreizen, dann skalieren.
- NAP (Name, Adresse, Telefon) muss überall byte-identisch sein. Jede Abweichung kostet Vertrauen und Ranking.
- Lokale Keywords sind "Leistung + Ort" und "Leistung + in meiner Nähe". Nicht das Volumen jagen, sondern die Kaufabsicht des Umkreises.
- Eine Standort-Page pro echtem Einzugsgebiet — nie Doorway-Pages mit ausgetauschtem Ortsnamen. Jede Seite braucht eigenen, lokalen Mehrwert.
- Bewertungen sind sozialer Beweis UND Rankingsignal. Menge, Frequenz, Antwortquote und Keyword-Erwähnungen in Rezensionen zählen.
- Lokale Backlinks (Verzeichnisse, regionale Presse, Partner) schlagen generische Links. Relevanz vor Domain Authority.
- Messen statt raten: Local-Pack-Ranking, GBP-Aufrufe, Anrufe und Routenklicks tracken (Matomo + Google-Ads-Conversion, Sichtbarkeit via Sistrix).

## Schritt für Schritt

1. **Bestandsaufnahme.** Aktuelle GBP-Einträge, NAP-Daten und vorhandene Verzeichniseinträge des Kunden erfassen. Sistrix-Sichtbarkeit der Domain ziehen (Tool: `domain_visindex`), bestehende lokale Keywords prüfen.
2. **NAP festlegen.** Eine kanonische Schreibweise von Name, Adresse, Telefon definieren (inkl. Rechtsform, Straßenabkürzung, Telefonformat). In `connections.md` oder Kunden-Kontext als Single Source of Truth ablegen.
3. **GBP optimieren.** Kategorie (primär + sekundär), Leistungen, Beschreibung mit lokalen Keywords, Öffnungszeiten, Einzugsgebiet, mind. 10 echte Fotos, Logo, Beitrag/Update. Verifizierung sicherstellen.
4. **Lokale Keyword-Recherche.** Mit Sistrix (`keyword_seo`, `keyword_seo_metrics`, `keyword_seo_searchintent`) pro Leistung die "Leistung + Ort"-Varianten für jedes Einzugsgebiet sammeln. Nach Volumen und Intent priorisieren.
5. **City-/Standort-Pages bauen.** Pro echtem Einzugsgebiet eine Seite mit URL-Muster `/standort/{ort}` oder `/{leistung}-{ort}`. Unique Content: lokale Referenzen, Anfahrt, Ansprechpartner, Bilder vor Ort, FAQ. Keine Duplikate.
6. **Lokale Schema einbauen.** `LocalBusiness` (oder spezifischer: `HVACBusiness`, `BeautySalon`, `RealEstateAgent`) als JSON-LD auf Startseite und allen Standort-Pages. Felder aus dem kanonischen NAP befüllen.
7. **Zitate / Verzeichnisse (Citations).** In relevanten lokalen und branchenspezifischen Verzeichnissen eintragen — überall identisches NAP. Liste in `connections.md` führen.
8. **Lokale Backlinks aufbauen.** Regionale Presse, lokale Vereine/Sponsoring, Partnerbetriebe, Branchenportale. Mit Sistrix (`links_list`, `links_linktargets`) Wettbewerber-Backlinks als Quellenideen analysieren.
9. **Bewertungs-Strategie aktivieren.** Standardisierte Bitte um Bewertung nach Auftrag (Link/QR), auf jede Rezension antworten, negative Bewertungen professionell adressieren. Frequenz halten.
10. **Messen & iterieren.** Local-Pack-Position, GBP-Insights (Aufrufe, Anrufe, Routen), Anfragen aus Standort-Pages (Matomo-Ziel + Google-Ads-Conversion) und Sistrix-Sichtbarkeit monatlich auswerten. Schwächste Seite/Keyword nachschärfen.

## Checkliste

- [ ] Kanonisches NAP definiert und dokumentiert
- [ ] GBP beansprucht, verifiziert, Kategorie korrekt
- [ ] GBP: Beschreibung, Leistungen, Öffnungszeiten, Einzugsgebiet gepflegt
- [ ] GBP: mind. 10 echte Fotos + Logo hochgeladen
- [ ] Lokale Keywords pro Einzugsgebiet recherchiert (Sistrix)
- [ ] Eine Standort-Page pro echtem Einzugsgebiet mit Unique Content
- [ ] Title/H1/Meta jeder Standort-Page enthält "Leistung + Ort"
- [ ] `LocalBusiness`-Schema (passender Subtyp) auf Start + Standort-Pages, mit NAP befüllt
- [ ] Eingebettete Google-Map auf Kontakt-/Standort-Pages
- [ ] In den wichtigsten lokalen + Branchenverzeichnissen mit identischem NAP eingetragen
- [ ] Mind. 3 lokale/regionale Backlinks aufgebaut
- [ ] Bewertungs-Anfrage-Prozess nach Auftrag etabliert (Link/QR)
- [ ] Antwortquote auf Rezensionen = 100 %
- [ ] Matomo-Ziele für Anruf/Formular/Routenklick eingerichtet
- [ ] Monatliches Reporting: Local-Pack, GBP-Insights, Sistrix-Sichtbarkeit

## Vorlagen & Beispiele

**NAP-Block (kanonisch, überall identisch):**
```
Muster Haustechnik GmbH
Musterstraße 12
50667 Köln
Tel.: +49 221 1234567
```

**Title / Meta für Standort-Page (Beispiel Haustechnik):**
```
Title: Heizungsbau Köln | Wartung & Notdienst – Muster Haustechnik
Meta:  Ihr Heizungsbauer in Köln: Installation, Wartung und 24h-Notdienst.
       Festpreise, schnelle Termine. Jetzt anfragen unter +49 221 1234567.
```

**LocalBusiness JSON-LD (Subtyp je ICP anpassen):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "Muster Haustechnik GmbH",
  "image": "https://example.de/standort/koeln/team.jpg",
  "telephone": "+49 221 1234567",
  "url": "https://example.de/standort/koeln",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 12",
    "postalCode": "50667",
    "addressLocality": "Köln",
    "addressCountry": "DE"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 50.9375, "longitude": 6.9603 },
  "areaServed": ["Köln", "Leverkusen", "Bergisch Gladbach"],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00", "closes": "17:00"
  }],
  "aggregateRating": {
    "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "87"
  }
}
</script>
```
Subtyp-Mapping ICP: Haustechnik/Handwerk → `HVACBusiness`/`Plumber`/`Electrician`, Immobilienmakler → `RealEstateAgent`, Kosmetik/Aesthetik → `BeautySalon`/`HealthAndBeautyBusiness`, Versicherung/Finanz → `InsuranceAgency`/`FinancialService`, Coach → `LocalBusiness` + `ProfessionalService`.

**Bewertungs-Anfrage (per SMS/E-Mail nach Auftrag):**
```
Hallo {Vorname}, danke für Ihr Vertrauen!
Wenn Sie zufrieden waren, freuen wir uns über eine kurze Google-Bewertung:
{GBP-Bewertungslink}
Zwei Minuten, die uns sehr helfen. Danke!
```

**Antwort auf positive Bewertung:**
```
Vielen Dank, {Vorname}! Schön, dass die {Leistung} in {Ort} zu Ihrer
Zufriedenheit lief. Wir sind jederzeit wieder für Sie da.
```

**Antwort auf negative Bewertung:**
```
Hallo {Vorname}, das tut uns leid und entspricht nicht unserem Anspruch.
Bitte melden Sie sich kurz unter {Telefon} – wir klären das persönlich
und finden eine Lösung.
```

**Standort-Page-Gliederung (kopierbar):**
```
H1: {Leistung} in {Ort}
- Intro: lokaler Bezug, Einzugsgebiet, USP
- Leistungen vor Ort (Liste)
- Referenzen/Projekte aus {Ort} (mit Bildern)
- Anfahrt + eingebettete Google-Map
- Ansprechpartner + NAP-Block
- FAQ (3-5 lokale Fragen)
- CTA: Anruf / Formular
```

## Bezug

- **Workflow Bauen:** Standort-Pages, Schema und NAP-Block werden beim Website-Bau gesetzt (siehe `website-aios-blueprint.md`).
- **Workflow Messen:** Matomo-Ziele (Anruf, Formular, Routenklick) + Google-Ads-Conversion liefern die Anfrage-Zahlen; Sistrix (`domain_visindex`, `project_ranking`) liefert lokale Sichtbarkeit.
- **Workflow Entscheiden:** Monatliches Local-SEO-Reporting füttert die Priorisierung; relevante Entscheidungen in `decisions/log.md` loggen.
- **Skills:** `/audit` prüft Freshness der Citations/Connections; `/level-up` kann Bewertungs-Anfrage und Reporting automatisieren.
- **Verwandte Playbooks:** On-Page-SEO, Keyword-Recherche, Conversion-Optimierung (sofern vorhanden in `references/playbooks/`).
