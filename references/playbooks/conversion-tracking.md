# Conversion-Tracking

> Jede Lead-Aktion einer Kundenwebsite (Formular, Anruf, WhatsApp, Termin) zuverlässig und DSGVO-konform in Matomo und als Google-Ads-Conversion erfassen, damit der Kreislauf Messen → Entscheiden mit echten Lead-Zahlen statt mit Klicks arbeitet.

## Prinzipien

- Tracking ist kein Add-on, sondern Abnahmekriterium. Eine Seite ohne funktionierendes Conversion-Tracking gilt als nicht fertig.
- Default-Stack ist Matomo + Google-Ads-Conversion. Kein Google Analytics. Matomo ist die Single Source of Truth für Leads, Google Ads bekommt nur die werbe-relevanten Conversions.
- Getrackt werden vier Pflicht-Events: Formular-Absenden, Anruf-Klick, WhatsApp-Klick, Terminbuchung. Diese vier sind bei jedem Kunden Standard, nicht optional.
- Ein Klick ist kein Lead. Pro Kunde wird genau definiert, welches Event als Lead zählt — sonst sind die Reports wertlos.
- Kein Tracking-Pixel feuert vor dem Consent. Consent zuerst, dann laden. Anonymisiert messen, wo möglich (Matomo cookieless als Fallback).
- Events sind benannt nach festem Schema (`category / action / name`). Gleiche Namen über alle Kunden hinweg, damit Auswertung und Reporting klonbar bleiben.
- Test vor Go-live: jedes Event wird einmal real ausgelöst und in Matomo + Google Ads sichtbar bestätigt, bevor die Seite live geht.

## Schritt für Schritt

1. **Lead-Definition mit Kunde festlegen.** Im Onboarding klären: Welche Aktion ist ein echter Lead? Bei den meisten lokalen B2C-Dienstleistern: Formular-Absenden + Terminbuchung = Hard-Lead; Anruf-Klick + WhatsApp-Klick = Soft-Lead (Intent). Ergebnis in den Kunden-Kontext (`context/`) und in `decisions/log.md` schreiben.
2. **Matomo-Instanz / Site einrichten.** Neue Website in Matomo anlegen, Site-ID notieren, Matomo-Tracking-Code (oder Tag-Manager-Container) ins `<head>` der Seite. Domain und Zeitzone setzen. Site-ID in `connections.md` registrieren.
3. **Consent-Lösung vorschalten.** CMP (z. B. Consent-Banner) einbauen. Matomo und Google-Ads-Tag erst nach Einwilligung der Kategorie „Statistik“/„Marketing“ laden. Matomo cookieless als anonymer Fallback für Nutzer ohne Einwilligung aktivieren (Aggregat-Trends bleiben sichtbar).
4. **Google-Ads-Conversion-Aktionen anlegen.** Pro Hard-Lead eine Conversion-Aktion in Google Ads erstellen (mind. „Formular-Absenden“ und „Terminbuchung“; Anruf/WhatsApp optional je nach Ads-Strategie). Conversion-ID + Conversion-Label notieren. Google-Ads-Tag (gtag / Tag Manager) nach Consent laden.
5. **Die vier Pflicht-Events verdrahten.** Für jedes Element den Trigger setzen — siehe Vorlagen unten:
   - **Formular-Absenden:** auf dem `submit`-Erfolg (nach Server-OK / Danke-Seite), nicht auf Button-Klick.
   - **Anruf-Klick:** auf Klick jedes `tel:`-Links.
   - **WhatsApp-Klick:** auf Klick jedes `wa.me`-/`api.whatsapp.com`-Links.
   - **Terminbuchung:** auf Bestätigung im Buchungstool (Callback/Danke-URL) bzw. Klick auf den Buchungs-CTA, wenn keine Bestätigung greifbar ist.
6. **Matomo-Ziele definieren.** Für jedes der vier Events ein Matomo-Goal anlegen, ausgelöst über das jeweilige Event. So erscheinen Leads im Goal-Report und in der Akquise-Übersicht.
7. **Google-Ads-Conversion an Hard-Leads koppeln.** Bei denselben Triggern wie die Hard-Lead-Events zusätzlich das `gtag('event','conversion', …)` mit der passenden Conversion-ID/-Label feuern. Nur Hard-Leads (und ggf. Anruf, falls Ads darauf optimiert) — nicht jedes Event.
8. **End-to-End-Test.** Jedes Event einmal real auslösen: Testformular absenden, Telefon-Link klicken, WhatsApp-Link klicken, Testbuchung durchführen. In Matomo (Echtzeit-Besucherlog + Goals) und im Google-Ads-Conversion-Status prüfen, dass alles ankommt. Erst dann Freigabe.
9. **Reporting-Anbindung.** Die vier Goals als Lead-KPIs ins monatliche Reporting übernehmen. Lead-Zahl = Hard-Leads laut Kunden-Definition. Soft-Leads getrennt ausweisen.
10. **Monatlich prüfen.** Tracking-Integrität kontrollieren (feuern alle Events noch? Consent korrekt?), nach Relaunch/Template-Änderung Test aus Schritt 8 wiederholen. Auffälligkeiten in `decisions/log.md`.

## Checkliste

- [ ] Lead-Definition pro Kunde schriftlich festgelegt (Hard- vs. Soft-Lead) und in `context/` + `decisions/log.md` abgelegt
- [ ] Matomo-Site angelegt, Tracking-Code im `<head>`, Site-ID in `connections.md`
- [ ] Consent-Banner aktiv — Matomo/Google-Ads-Tag laden erst nach Einwilligung
- [ ] Matomo cookieless als anonymer Fallback aktiviert
- [ ] Kein Google Analytics auf der Seite (alten GA-/GA4-Code entfernt)
- [ ] Google-Ads-Conversion-Aktionen für Hard-Leads angelegt (ID + Label notiert)
- [ ] Event „Formular-Absenden“ feuert (auf Erfolg, nicht auf Klick) → Matomo-Goal + Ads-Conversion
- [ ] Event „Anruf-Klick“ feuert auf alle `tel:`-Links → Matomo-Goal
- [ ] Event „WhatsApp-Klick“ feuert auf alle `wa.me`-Links → Matomo-Goal
- [ ] Event „Terminbuchung“ feuert auf Buchungsbestätigung → Matomo-Goal + Ads-Conversion
- [ ] End-to-End-Test bestanden: alle vier Events in Matomo UND Ads sichtbar
- [ ] Vier Goals als Lead-KPIs im Reporting hinterlegt
- [ ] Monatlicher Tracking-Check terminiert

## Vorlagen & Beispiele

### Event-Namensschema (über alle Kunden gleich)

| Event | Matomo Category | Action | Name | Lead-Typ | Google-Ads-Conversion |
|---|---|---|---|---|---|
| Formular-Absenden | `Lead` | `formular_absenden` | Formularname (z. B. `kontakt`) | Hard | Ja |
| Anruf-Klick | `Lead` | `anruf_klick` | Telefonnummer | Soft | optional |
| WhatsApp-Klick | `Lead` | `whatsapp_klick` | `whatsapp` | Soft | optional |
| Terminbuchung | `Lead` | `terminbuchung` | Tool/Quelle (z. B. `calendly`) | Hard | Ja |

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
  _paq.push(['trackEvent', 'Lead', 'terminbuchung', 'calendly']);
</script>
```

### Google-Ads-Conversion bei Hard-Lead feuern (zusätzlich, nach Consent)

```html
<script>
  // Beim selben Trigger wie das Hard-Lead-Event (Formular-Erfolg / Buchungsbestätigung)
  gtag('event', 'conversion', {
    'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'  // pro Aktion eigenes Label
  });
</script>
```

### Consent-Gate (Pseudo-Logik)

```javascript
onConsentGiven(function (consent) {
  if (consent.statistics) loadMatomo();      // Matomo erst hier
  if (consent.marketing)  loadGoogleAdsTag(); // gtag erst hier
});
// Ohne Einwilligung: Matomo cookieless für anonyme Aggregat-Trends
```

### Lead-Definition pro Kunde (Vorlage für `context/`)

```markdown
## Lead-Definition — {{Kundenname}}
- Hard-Lead (zählt als Lead im Reporting): Formular-Absenden, Terminbuchung
- Soft-Lead (Intent, separat ausgewiesen): Anruf-Klick, WhatsApp-Klick
- An Google Ads als Conversion: Formular-Absenden, Terminbuchung
- Beschluss vom: {{Datum}} — siehe decisions/log.md
```

## Bezug

- **Onboarding neuer Kunde** (vgl. LIKOVO SOP 7.1, Abschnitt „Tracking & Tech-Setup prüfen“) — Tracking-Einrichtung und Abnahme-Check vor dem ersten Task.
- **Playbook Local SEO** — die dort gemessenen Anfragen (Anrufe, Routen, Formular) laufen über diese Events.
- **Kreislauf Messen → Entscheiden** der Website-AIOS-Architektur — liefert die Lead-KPIs für Reporting und Optimierungsentscheidungen.
- **`/audit`** — Freshness/Vollständigkeit des Trackings als Teil der Four-Cs-Bewertung.
- **`connections.md`** — Matomo-Site-ID, Google-Ads-Conversion-IDs/-Labels und Consent-Tool als verbundene Systeme.
