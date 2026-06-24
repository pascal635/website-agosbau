# Conversion-Tracking

> Jede Lead-Aktion einer Kundenwebsite (Formular, Anruf, WhatsApp, Termin) zuverlässig und DSGVO-konform erfassen — in Matomo als Single Source of Truth, als Google-Ads-Conversion auf der primären Conversion und im Meta Pixel fürs Retargeting. So arbeitet der Kreislauf Messen → Entscheiden mit echten Lead-Zahlen statt mit Klicks.

## Fester Standard-Stack

Drei Werkzeuge, jedes mit genau einer Aufgabe. Dieser Stack ist entschieden, keine Empfehlung — bei jedem Kunden gleich, damit Auswertung und Reporting klonbar bleiben.

| Tool | Rolle | Was es bekommt |
|---|---|---|
| **Matomo** (privacy-first) | Single Source of Truth für alle Leads | Alle vier Pflicht-Events (Hard- und Soft-Leads) |
| **Google-Ads-Conversion** | Kampagnen-Optimierung | NUR die primäre Conversion (der wichtigste Hard-Lead) |
| **Meta Pixel** | Retargeting | Seitenaufrufe + Lead-Signal fürs Custom-Audience-/Retargeting |

**Kein Google Analytics / GA4.** GA4 schickt Nutzerdaten an Google-Server in den USA ohne echten Mehrwert gegenüber Matomo — das ist DSGVO-Risiko ohne Nutzen, da Matomo dieselben Reports privacy-first und in unserer Hand liefert.

## Prinzipien

- Tracking ist kein Add-on, sondern Abnahmekriterium. Eine Seite ohne funktionierendes Conversion-Tracking gilt als nicht fertig.
- Matomo ist die Single Source of Truth für Leads. Google Ads bekommt nur die werbe-relevante primäre Conversion, Meta nur das Retargeting-Signal. Reporting-Zahlen kommen immer aus Matomo.
- Getrackt werden vier Pflicht-Events: Formular-Absenden, Anruf-Klick, WhatsApp-Klick, Terminbuchung. Diese vier sind bei jedem Kunden Standard, nicht optional.
- Ein Klick ist kein Lead. Pro Kunde wird genau definiert, welches Event als Lead zählt und welcher Hard-Lead die *primäre* Conversion ist — sonst sind Reports und Ads-Optimierung wertlos.
- Kein Tracking-Pixel feuert vor dem Consent. Consent zuerst, dann laden — alle drei Tools sind consent-gesteuert über die CMP. Anonymisiert messen, wo möglich (Matomo cookieless als Fallback).
- Events sind benannt nach festem Schema (`category / action / name`). Gleiche Namen über alle Kunden hinweg.
- Test vor Go-live: jedes Event wird einmal real ausgelöst und in Matomo + Google Ads + Meta Events Manager sichtbar bestätigt, bevor die Seite live geht.

## Schritt für Schritt

1. **Lead-Definition + primäre Conversion mit Kunde festlegen.** Im Onboarding klären: Welche Aktion ist ein echter Lead? Bei den meisten lokalen B2C-Dienstleistern: Formular-Absenden + Terminbuchung = Hard-Lead; Anruf-Klick + WhatsApp-Klick = Soft-Lead (Intent). Zusätzlich genau EINEN Hard-Lead als **primäre Conversion** bestimmen — das ist die Aktion, auf die Google Ads optimiert. Ergebnis in den Kunden-Kontext (`context/`) und in `decisions/log.md` schreiben.
2. **Matomo-Instanz / Site einrichten.** Neue Website in Matomo anlegen, Site-ID notieren, Matomo-Tracking-Code (oder Tag-Manager-Container) ins `<head>` der Seite. Domain und Zeitzone setzen. Site-ID in `connections.md` registrieren.
3. **Consent-Lösung (CMP) vorschalten.** CMP / Consent-Banner einbauen. Matomo, Google-Ads-Tag und Meta Pixel laden erst nach Einwilligung der jeweiligen Kategorie („Statistik"/„Marketing"). Matomo cookieless als anonymer Fallback für Nutzer ohne Einwilligung aktivieren (Aggregat-Trends bleiben sichtbar).
4. **Google-Ads-Conversion-Aktion anlegen.** Für die primäre Conversion eine Conversion-Aktion in Google Ads erstellen. Conversion-ID + Conversion-Label notieren. Weitere Hard-Leads optional als sekundäre Conversion-Aktionen, aber Ads optimiert nur auf die primäre. Google-Ads-Tag (gtag / Tag Manager) nach Consent laden.
5. **Meta Pixel anlegen.** Pixel im Meta Events Manager erstellen, Pixel-ID notieren und in `connections.md` registrieren. Base-Pixel (PageView) nach Marketing-Consent laden. Lead-Event (`fbq('track', 'Lead')`) auf den Hard-Leads feuern — primär fürs Retargeting / Custom Audiences, nicht als Reporting-Quelle.
6. **Die vier Pflicht-Events verdrahten.** Für jedes Element den Trigger setzen — siehe Vorlagen unten:
   - **Formular-Absenden:** auf dem `submit`-Erfolg (nach Server-OK / Danke-Seite), nicht auf Button-Klick.
   - **Anruf-Klick:** auf Klick jedes `tel:`-Links.
   - **WhatsApp-Klick:** auf Klick jedes `wa.me`-/`api.whatsapp.com`-Links.
   - **Terminbuchung:** auf Bestätigung im Buchungstool (Callback/Danke-URL) bzw. Klick auf den Buchungs-CTA, wenn keine Bestätigung greifbar ist.
7. **Matomo-Ziele definieren.** Für jedes der vier Events ein Matomo-Goal anlegen, ausgelöst über das jeweilige Event. So erscheinen Leads im Goal-Report und in der Akquise-Übersicht.
8. **Google-Ads-Conversion an primäre Conversion koppeln.** Beim Trigger der primären Conversion zusätzlich `gtag('event','conversion', …)` mit der passenden Conversion-ID/-Label feuern. Nur die primäre Conversion (plus ggf. definierte sekundäre Aktionen) — nicht jedes Event.
9. **Meta-Lead-Event an Hard-Leads koppeln.** Bei den Hard-Lead-Triggern zusätzlich `fbq('track', 'Lead')` feuern. Versorgt Retargeting und Lookalike-Audiences mit Signal.
10. **End-to-End-Test.** Jedes Event einmal real auslösen: Testformular absenden, Telefon-Link klicken, WhatsApp-Link klicken, Testbuchung durchführen. In Matomo (Echtzeit-Besucherlog + Goals), im Google-Ads-Conversion-Status und im Meta Events Manager (Test-Events) prüfen, dass alles ankommt. Erst dann Freigabe.
11. **Reporting-Anbindung.** Die vier Matomo-Goals als Lead-KPIs ins monatliche Reporting übernehmen. Lead-Zahl = Hard-Leads laut Kunden-Definition. Soft-Leads getrennt ausweisen. Google Ads + Meta dienen der Kampagnen-Steuerung, nicht dem Lead-Reporting.
12. **Monatlich prüfen.** Tracking-Integrität kontrollieren (feuern alle Events noch in allen drei Tools? Consent korrekt?), nach Relaunch/Template-Änderung Test aus Schritt 10 wiederholen. Auffälligkeiten in `decisions/log.md`.

## Checkliste

- [ ] Lead-Definition pro Kunde schriftlich festgelegt (Hard- vs. Soft-Lead) und in `context/` + `decisions/log.md` abgelegt
- [ ] Primäre Conversion (genau ein Hard-Lead) bestimmt
- [ ] Matomo-Site angelegt, Tracking-Code im `<head>`, Site-ID in `connections.md`
- [ ] CMP / Consent-Banner aktiv — Matomo, Google-Ads-Tag UND Meta Pixel laden erst nach Einwilligung
- [ ] Matomo cookieless als anonymer Fallback aktiviert
- [ ] Kein Google Analytics / GA4 auf der Seite (alten GA-/GA4-Code entfernt)
- [ ] Google-Ads-Conversion-Aktion für die primäre Conversion angelegt (ID + Label notiert)
- [ ] Meta Pixel angelegt, Pixel-ID in `connections.md`, Base-PageView nach Consent
- [ ] Event „Formular-Absenden" feuert (auf Erfolg, nicht auf Klick) → Matomo-Goal (+ Ads, falls primär) (+ Meta Lead)
- [ ] Event „Anruf-Klick" feuert auf alle `tel:`-Links → Matomo-Goal
- [ ] Event „WhatsApp-Klick" feuert auf alle `wa.me`-Links → Matomo-Goal
- [ ] Event „Terminbuchung" feuert auf Buchungsbestätigung → Matomo-Goal (+ Ads, falls primär) (+ Meta Lead)
- [ ] End-to-End-Test bestanden: alle vier Events in Matomo, primäre Conversion in Ads, Lead in Meta sichtbar
- [ ] Vier Goals als Lead-KPIs im Reporting hinterlegt
- [ ] Monatlicher Tracking-Check terminiert

## Vorlagen & Beispiele

### Event-Namensschema (über alle Kunden gleich)

| Event | Matomo Category | Action | Name | Lead-Typ | Google Ads | Meta Pixel |
|---|---|---|---|---|---|---|
| Formular-Absenden | `Lead` | `formular_absenden` | Formularname (z. B. `kontakt`) | Hard | wenn primär | `Lead` |
| Anruf-Klick | `Lead` | `anruf_klick` | Telefonnummer | Soft | – | – |
| WhatsApp-Klick | `Lead` | `whatsapp_klick` | `whatsapp` | Soft | – | – |
| Terminbuchung | `Lead` | `terminbuchung` | Tool/Quelle | Hard | wenn primär | `Lead` |

### Matomo-Event auslösen (nach Consent verfügbar)

```html
<script>
  // Formular-Absenden (auf Erfolg, z. B. auf der Danke-Seite oder nach AJAX-OK)
  _paq.push(['trackEvent', 'Lead', 'formular_absenden', 'kontakt']);

  // Anruf-Klick — auf alle tel:-Links
  document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
    el.addEventListener('click', function () {
      _paq.push(['trackEvent', 'Lead', 'anruf_klick', this.getAttribute('href')]);
    });
  });

  // WhatsApp-Klick — wa.me / api.whatsapp.com
  document.querySelectorAll('a[href*="wa.me"], a[href*="api.whatsapp.com"]').forEach(function (el) {
    el.addEventListener('click', function () {
      _paq.push(['trackEvent', 'Lead', 'whatsapp_klick', 'whatsapp']);
    });
  });

  // Terminbuchung — auf Bestätigung/Callback des Buchungstools
  _paq.push(['trackEvent', 'Lead', 'terminbuchung', 'buchung']);
</script>
```

### Google-Ads-Conversion bei primärer Conversion feuern (zusätzlich, nach Consent)

```html
<script>
  // Nur beim Trigger der primären Conversion (z. B. Formular-Erfolg)
  gtag('event', 'conversion', {
    'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'  // pro Aktion eigenes Label
  });
</script>
```

### Meta Pixel: Lead bei Hard-Lead feuern (zusätzlich, nach Marketing-Consent)

```html
<script>
  // Base-Pixel (PageView) wird nach Consent geladen; hier das Lead-Signal:
  fbq('track', 'Lead');   // bei jedem Hard-Lead (Formular-Erfolg / Buchungsbestätigung)
</script>
```

### Consent-Gate (Pseudo-Logik, CMP-gesteuert)

```javascript
onConsentGiven(function (consent) {
  if (consent.statistics) loadMatomo();        // Matomo erst hier
  if (consent.marketing) {
    loadGoogleAdsTag();                         // gtag erst hier
    loadMetaPixel();                            // fbq erst hier
  }
});
// Ohne Einwilligung: Matomo cookieless für anonyme Aggregat-Trends
```

### Lead-Definition pro Kunde (Vorlage für `context/`)

```markdown
## Lead-Definition — {{Kundenname}}
- Hard-Lead (zählt als Lead im Reporting): Formular-Absenden, Terminbuchung
- Soft-Lead (Intent, separat ausgewiesen): Anruf-Klick, WhatsApp-Klick
- Primäre Conversion (Ads optimiert darauf): {{z. B. Formular-Absenden}}
- An Google Ads als Conversion: primäre Conversion (+ ggf. sekundäre)
- An Meta Pixel als Lead (Retargeting): Formular-Absenden, Terminbuchung
- Beschluss vom: {{Datum}} — siehe decisions/log.md
```

## Bezug

- **Onboarding neuer Kunde** — Tracking-Einrichtung und Abnahme-Check vor dem ersten Task.
- **Playbook Local SEO** — die dort gemessenen Anfragen (Anrufe, Routen, Formular) laufen über diese Events.
- **Kreislauf Messen → Entscheiden** der Website-AIOS-Architektur — liefert die Lead-KPIs für Reporting und Optimierungsentscheidungen.
- **`/audit`** — Freshness/Vollständigkeit des Trackings als Teil der Four-Cs-Bewertung.
- **`connections.md`** — Matomo-Site-ID, Google-Ads-Conversion-ID/-Label, Meta-Pixel-ID und CMP als verbundene Systeme.
