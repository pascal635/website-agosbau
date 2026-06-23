# Schema & strukturierte Daten

> Zweck: Jeden Seitentyp der Kundenwebsite mit dem korrekten JSON-LD-Markup versehen, damit Google die Seite versteht und Rich Results (Sterne, FAQ-Akkordeon, Standort-Panel) ausspielt.

## Prinzipien

- Eine Quelle der Wahrheit: NAP-Daten (Name, Adresse, Telefon) kommen aus `connections.md` bzw. der Kundenstammdatei. Nie im Schema von der Website abweichen — Inkonsistenz kostet lokale Rankings.
- JSON-LD only. Kein Microdata, kein RDFa. Immer als `<script type="application/ld+json">` in den `<head>` oder ans Ende des `<body>`.
- Nur markieren, was sichtbar auf der Seite steht. Erfundene Bewertungen oder unsichtbare Inhalte = Spam-Risiko und manuelle Abstrafung.
- Ein LocalBusiness-Knoten pro echtem Standort. Bei mehreren Filialen je eigene Seite + eigenes Schema mit eigener Adresse.
- `@id` als stabile URL nutzen (z. B. `https://kunde.de/#business`), damit Knoten über Seiten hinweg referenziert werden können (Entity-Graph).
- Jede Änderung gegen den Rich Results Test prüfen, bevor sie live geht. Kein Schema ohne grünen Validierungslauf.

## Schritt für Schritt

1. Standort-Typ bestimmen: Den spezifischsten `@type` aus dem schema.org-LocalBusiness-Baum wählen (siehe Mapping unten). Beispiel: Makler = `RealEstateAgent`, Haustechnik = `HVACBusiness`, Kosmetik = `BeautySalon`. Fallback wenn nichts passt: `LocalBusiness`.
2. Stammdaten ziehen: NAP, Öffnungszeiten, Geo-Koordinaten, Logo-URL, Social-Profile, Preisniveau aus der Kundenstammdatei holen. Fehlt etwas, beim Kunden anfragen — nicht raten.
3. Seitentyp je URL klassifizieren: Startseite, Leistungsseite, FAQ-Seite, Blog/Ratgeber, Über-uns. Pro Seitentyp das Schema-Set aus der Tabelle unten zuweisen.
4. JSON-LD aus den Vorlagen befüllen: Platzhalter `{{...}}` durch echte Werte ersetzen. Keine leeren Felder ausliefern — Property weglassen statt leer lassen.
5. BreadcrumbList auf jeder Unterseite ergänzen (nicht auf der Startseite). Spiegelt die Klickpfad-Hierarchie.
6. Knoten verlinken: Auf Unterseiten den LocalBusiness nur per `@id` referenzieren statt komplett zu wiederholen. Service-, FAQ- und Article-Knoten via `provider`/`publisher`/`isPartOf` an den Business-Knoten hängen.
7. Validieren: URL bzw. Code in den Rich Results Test (search.google.com/test/rich-results) und den Schema Markup Validator (validator.schema.org) geben. Alle Fehler beheben, Warnungen bewerten.
8. Deployen und in der Search Console unter "Verbesserungen" beobachten, ob die Typen erkannt werden (Latenz: einige Tage bis Wochen).

## Checkliste

- [ ] Spezifischster LocalBusiness-Subtyp gewählt (nicht generisch, wenn ein passender existiert)
- [ ] NAP im Schema = NAP auf der Seite = NAP in Google Business Profile (zeichengenau)
- [ ] `@id` als stabile URL gesetzt und über Seiten hinweg konsistent referenziert
- [ ] Öffnungszeiten als `openingHoursSpecification` (nicht als Freitext)
- [ ] Geo-Koordinaten (`latitude`/`longitude`) gesetzt
- [ ] Logo- und Bild-URLs absolut (https), erreichbar, nicht 404
- [ ] Startseite: LocalBusiness vorhanden
- [ ] Leistungsseite: Service + BreadcrumbList vorhanden, `provider` zeigt auf LocalBusiness
- [ ] FAQ-Seite: FAQPage vorhanden, jede Frage steht auch sichtbar auf der Seite
- [ ] Ratgeber/Blog: Article vorhanden, `author` und `datePublished` gesetzt
- [ ] Review/AggregateRating nur, wenn echte, auf der Seite sichtbare Bewertungen existieren
- [ ] BreadcrumbList auf allen Unterseiten, nicht auf der Startseite
- [ ] Rich Results Test grün (0 Fehler)
- [ ] Schema Markup Validator ohne kritische Fehler
- [ ] Nach Deploy in Search Console > Verbesserungen kontrolliert

## Vorlagen & Beispiele

### Seitentyp-zu-Schema-Mapping

| Seitentyp | Schema-Typen |
|---|---|
| Startseite | `LocalBusiness` (+ Subtyp), optional `WebSite` |
| Leistungsseite | `Service` + `BreadcrumbList` |
| FAQ-Seite / FAQ-Block | `FAQPage` |
| Ratgeber / Blog-Artikel | `Article` + `BreadcrumbList` |
| Über uns / Team | `LocalBusiness`-Referenz (`@id`) + `BreadcrumbList` |
| Bewertungsseite / Testimonials | `Review` bzw. `AggregateRating` am LocalBusiness |

### LocalBusiness-Subtyp je ICP

| ICP-Branche | `@type` |
|---|---|
| Handwerk allgemein | `HomeAndConstructionBusiness` |
| Heizung/Sanitär/Klima | `HVACBusiness` / `Plumber` |
| Elektriker | `Electrician` |
| Dachdecker/Bau | `RoofingContractor` / `GeneralContractor` |
| Immobilienmakler | `RealEstateAgent` |
| Kosmetik/Aesthetik | `BeautySalon` / `HealthAndBeautyBusiness` |
| Versicherung/Finanzberatung | `InsuranceAgency` / `FinancialService` |
| Coaching/Beratung | `ProfessionalService` |

### Vorlage 1 — LocalBusiness (Startseite)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "{{LocalBusiness-Subtyp, z. B. HVACBusiness}}",
  "@id": "https://{{domain}}/#business",
  "name": "{{Firmenname}}",
  "image": "https://{{domain}}/{{bild.jpg}}",
  "logo": "https://{{domain}}/{{logo.png}}",
  "url": "https://{{domain}}/",
  "telephone": "+49{{...}}",
  "priceRange": "{{€€ oder Freitext}}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{Straße Hausnr.}}",
    "postalCode": "{{PLZ}}",
    "addressLocality": "{{Ort}}",
    "addressRegion": "{{Bundesland}}",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "{{lat}}",
    "longitude": "{{lng}}"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "areaServed": {
    "@type": "City",
    "name": "{{Hauptstadt/Region}}"
  },
  "sameAs": [
    "{{Google-Business-Profile-URL}}",
    "{{Instagram/Facebook/LinkedIn}}"
  ]
}
</script>
```

### Vorlage 2 — Service (Leistungsseite)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{{Leistung, z. B. Heizungswartung}}",
  "serviceType": "{{Kategorie}}",
  "description": "{{1–2 Sätze, was die Leistung umfasst}}",
  "provider": { "@id": "https://{{domain}}/#business" },
  "areaServed": {
    "@type": "City",
    "name": "{{Ort/Region}}"
  },
  "url": "https://{{domain}}/{{leistungs-slug}}"
}
</script>
```

### Vorlage 3 — FAQPage (FAQ-Seite oder FAQ-Block)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{{Frage 1, wortgleich zur sichtbaren Frage}}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{Antwort 1, wortgleich zum sichtbaren Text}}"
      }
    },
    {
      "@type": "Question",
      "name": "{{Frage 2}}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{Antwort 2}}"
      }
    }
  ]
}
</script>
```

### Vorlage 4 — Article (Ratgeber/Blog)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{Titel, max. 110 Zeichen}}",
  "image": ["https://{{domain}}/{{artikelbild.jpg}}"],
  "datePublished": "{{2026-06-22}}",
  "dateModified": "{{2026-06-22}}",
  "author": {
    "@type": "Person",
    "name": "{{Autor}}"
  },
  "publisher": { "@id": "https://{{domain}}/#business" },
  "mainEntityOfPage": "https://{{domain}}/{{artikel-slug}}"
}
</script>
```

### Vorlage 5 — BreadcrumbList (jede Unterseite)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Startseite",
      "item": "https://{{domain}}/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{{Kategorie, z. B. Leistungen}}",
      "item": "https://{{domain}}/{{kategorie-slug}}"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "{{Aktuelle Seite}}"
    }
  ]
}
</script>
```

### Vorlage 6 — Review / AggregateRating (am LocalBusiness)

Nur einsetzen, wenn echte Bewertungen sichtbar auf der Seite stehen. Direkt in den LocalBusiness-Knoten eingebettet:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "{{LocalBusiness-Subtyp}}",
  "@id": "https://{{domain}}/#business",
  "name": "{{Firmenname}}",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{4.8}}",
    "reviewCount": "{{37}}"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "{{Kundenname}}" },
      "datePublished": "{{2026-05-10}}",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "{{5}}",
        "bestRating": "5"
      },
      "reviewBody": "{{Zitat aus der Bewertung}}"
    }
  ]
}
</script>
```

## Bezug

- Wird genutzt von der Bauen-Phase (Seitenerstellung) und der Umsetzen-Phase des Kreislaufs.
- Datenquelle für Optimierungspriorität: Sistrix (MCP) — Seiten mit Ranking-Potenzial zuerst mit Rich-Result-fähigem Schema versehen.
- Messung der Wirkung: Google Search Console > Verbesserungen; Conversion-Effekt via Matomo + Google-Ads-Conversion.
- Verwandte Playbooks: On-Page-SEO, Local-SEO / Google Business Profile (NAP-Konsistenz), technisches SEO.
- Stammdaten-Bezug: `connections.md` und Kundenstammdatei für NAP, Öffnungszeiten, Profile.
