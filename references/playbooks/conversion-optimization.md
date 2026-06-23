# Conversion-Optimierung (CRO)

> Aus dem vorhandenen Traffic der Kundenseite messbar mehr qualifizierte Anfragen (Anruf, Formular, WhatsApp, Buchung) herausholen — über einen disziplinierten Loop: Daten → Hypothese → Test → Messung → Entscheidung.

## Prinzipien

- Erst messen, dann ändern. Keine Optimierung ohne Datenbasis. Bauchgefühl liefert Ideen, nicht Entscheidungen.
- Eine Hypothese pro Test, eine Änderung pro Variante. Bündelst du fünf Änderungen, weißt du nie, welche gewirkt hat.
- Die Conversion ist definiert, nicht beliebig. Maßgeblich ist die im Onboarding festgelegte Lead-Definition (siehe `context/goals.md`) — Anruf, Formular, WhatsApp oder Buchung. Mikro-Conversions (Klick auf Telefonnummer, Scrolltiefe) sind Frühindikatoren, nicht das Ziel.
- Reihenfolge nach Hebel: Was die meisten Nutzer sehen und blockiert, zuerst. Hero und CTA vor Detailoptimierung.
- Lokale B2C-Besucher entscheiden in Sekunden und brauchen drei Dinge sofort: "Macht der das, was ich brauche?", "Kann ich dem trauen?", "Wie nehme ich Kontakt auf?". Jeder Test dient einer dieser Fragen.
- Mobil zuerst optimieren. Der Großteil lokaler Suchen läuft mobil; ein Test gilt erst als gewonnen, wenn er auf Mobile gewinnt.
- Signifikanz vor Schnellschuss. Kleine lokale Seiten haben wenig Traffic — lieber große, eindeutige Änderungen testen als 2-%-Feintuning, das nie signifikant wird.
- Jedes Ergebnis fließt zurück. Gewonnen, verloren oder unentschieden: Erkenntnis ins `weekly-review` und in `decisions/log.md`.

## Schritt für Schritt

1. **Daten ziehen (Diagnose).** Aus Matomo: Conversion-Rate gesamt und pro Seite, Einstiegsseiten, Absprungrate, Ausstiegsseiten, Geräte-Split (Mobile/Desktop), Ladezeit. Aus Google Ads: welche Landingpages Klicks bekommen und wo Conversions fehlen. Aus Sistrix (`project_onpage`, `project_onpage_overview`): technische On-Page-Probleme. Ziel: die eine Seite mit Traffic UND schwacher Conversion finden.
2. **Verhalten verstehen (qualitativ).** Heatmap und Session-Recordings in Matomo aktivieren (Matomo HeatmapSessionRecording-Plugin). Auswerten: Wo wird geklickt (auch auf nicht-klickbare Elemente)? Wie weit wird gescrollt (sehen Nutzer den CTA)? Wo brechen Formulare ab (Form-Analytics)? Wo entsteht "Rage-Click" oder Zögern?
3. **Engpass benennen.** Aus 1+2 den größten Conversion-Killer der Zielseite festlegen — genau einen. Beispiele: Hero sagt nicht, was angeboten wird; CTA unter der Falz; Formular zu lang; fehlender Trust; Ladezeit über 3 s.
4. **Hypothese formulieren.** Im festen Format (siehe Vorlage): "Weil [Daten], glauben wir, dass [Änderung] zu [erwartetem Effekt auf KPI] führt." Ohne messbares KPI keine Hypothese.
5. **Priorisieren (PIE/ICE).** Jede Hypothese nach Potenzial (Impact), Aufwand (Effort) und Vertrauen (Confidence) auf 1–5 bewerten. Höchster Score gewinnt den nächsten Slot. Ein Test gleichzeitig pro Seite.
6. **Test wählen — A/B oder Vorher/Nachher.** Genug Traffic (Faustregel: ~100+ Conversions/Variante erreichbar in ≤4 Wochen) → echtes A/B (Matomo A/B Testing). Zu wenig Traffic → Vorher/Nachher-Messung mit klar markiertem Stichtag und gleich langen Zeiträumen. Bei sehr großen Schwächen direkt umsetzen und nachmessen statt splitten.
7. **Variante bauen.** Genau die eine Änderung umsetzen, Brand Voice und Design-System einhalten (siehe `copywriting.md`, `design-system-usage.md`). Tracking der Conversion prüfen, damit das Ziel sauber feuert (siehe `conversion-tracking.md`).
8. **Laufzeit & Stichprobe festlegen.** Mindestens 2 volle Wochen (volle Wochenzyklen, um Wochentag-Effekte zu glätten), bis zur Zielstichprobe. Während der Laufzeit nicht abbrechen, nicht früh "gewinnen lassen".
9. **Messen.** Primär-KPI (Conversion-Rate auf die definierte Lead-Aktion) vergleichen, plus Guardrail-Metriken (Absprungrate, Ladezeit, Anteil qualifizierter Anfragen). Signifikanz prüfen (Matomo zeigt Konfidenz; Daumenregel: ≥95 %).
10. **Entscheiden.** Gewonnen → Variante ausrollen, Erkenntnis loggen. Verloren → Original behalten, Hypothese widerlegt, Erkenntnis loggen. Unentschieden → kein Rollout, beim nächsten Mal größere Änderung. In `decisions/log.md` festhalten.
11. **Zurück in den Loop.** Ergebnis ins `weekly-review` geben, nächste Hypothese aus der Backlog-Liste ziehen. Optimierung ist nie "fertig".

## Was zuerst optimieren (Reihenfolge nach Hebel)

1. **Hero (above the fold).** Klare Aussage: Wer, was, wo, für wen. Innerhalb von 5 Sekunden muss der Besucher wissen, dass er richtig ist. Standort/Region sichtbar.
2. **Primärer CTA.** Eindeutig, sichtbar ohne Scrollen, handlungsorientiert ("Jetzt Termin anfragen", "Rückruf in 24 h"). Telefonnummer mobil klickbar (`tel:`). Sticky-CTA-Leiste auf Mobile.
3. **Ladezeit / Core Web Vitals.** Über 3 s Ladezeit kostet messbar Conversions. Bilder als WebP/komprimiert, LCP optimieren (siehe `performance-a11y.md`). Schnelle Seite ist Voraussetzung, nicht Kür.
4. **Trust-Elemente.** Echte Bewertungen/Sternschnitt, Logos/Zertifikate, Referenzen mit Bild, Garantien, echte Team-/Betriebsfotos, NAP sichtbar. Für lokale Dienstleister oft der größte Hebel.
5. **Formular.** Felderzahl minimieren (Name, Telefon/E-Mail, kurzes Anliegen reichen oft). Pflichtfelder klar, Fehlertexte freundlich, DSGVO-Consent schlank, Bestätigungsseite mit nächstem Schritt. Alternative Kontaktwege (Anruf/WhatsApp) danebenstellen.
6. **Seitenstruktur & Einwände.** FAQ gegen typische Einwände, Preis-/Ablauf-Transparenz, klare Leistungsbeschreibung. Sekundäre CTAs an logischen Stopppunkten.

## A/B-Test-Grundlagen

- **Kontrolle (A) vs. Variante (B):** A ist immer der Status quo. B ändert genau eine Sache.
- **Eine Variable:** Headline ODER CTA-Text ODER Button-Farbe — nicht alles zusammen.
- **Vorab festlegen:** Primär-KPI, Mindestlaufzeit, Zielstichprobe, Erfolgsschwelle (≥95 % Konfidenz). Vor Start dokumentieren, nicht nachträglich.
- **Volle Wochen laufen lassen:** Mindestens 2 Wochen, in vollen 7-Tage-Zyklen. Nicht mitten in der Woche stoppen.
- **Nicht spähen und stoppen:** Frühes Beenden, sobald es "gut aussieht", erzeugt Scheinerfolge. Bis zum geplanten Ende laufen lassen.
- **Bei zu wenig Traffic:** Vorher/Nachher mit gleich langen, vergleichbaren Zeiträumen und sauber notiertem Stichtag. Saisonalität beachten (z. B. Heizungsbau im Winter).
- **Guardrails mitmessen:** Eine höhere Conversion-Rate bei sinkender Lead-Qualität ist kein Gewinn. Qualität der Anfragen mitbewerten.

## Checkliste

- [ ] Conversion-Definition aus `context/goals.md` bekannt und in Matomo als Ziel eingerichtet
- [ ] Matomo-Tracking, Heatmaps, Session-Recordings und Form-Analytics aktiv
- [ ] Datenbasis gezogen (Matomo + Google Ads + Sistrix On-Page)
- [ ] Eine Zielseite mit Traffic UND schwacher Conversion identifiziert
- [ ] Genau ein Engpass benannt
- [ ] Hypothese im Standardformat mit messbarem KPI formuliert
- [ ] Nach PIE/ICE priorisiert, höchster Score gewählt
- [ ] Testmethode passend zum Traffic gewählt (A/B vs. Vorher/Nachher)
- [ ] Nur eine Variable geändert, Brand Voice + Design-System eingehalten
- [ ] Conversion-Tracking der Variante verifiziert (feuert sauber)
- [ ] Laufzeit (≥2 volle Wochen) und Zielstichprobe vorab festgelegt
- [ ] Mobil getestet und gewonnen, nicht nur Desktop
- [ ] Primär-KPI + Guardrails (Absprung, Ladezeit, Lead-Qualität) ausgewertet
- [ ] Signifikanz/Konfidenz geprüft (≥95 %)
- [ ] Entscheidung getroffen (Rollout / behalten / wiederholen)
- [ ] Erkenntnis in `decisions/log.md` und ins `weekly-review` eingetragen
- [ ] Nächste Hypothese aus dem Backlog gezogen

## Vorlagen & Beispiele

**Hypothesen-Format (kopierbar):**
```
Hypothese #{Nr} — {Seite}
Weil: {Beobachtung aus Daten/Heatmap}
glauben wir, dass: {konkrete Änderung}
zu: {erwarteter Effekt} beim KPI {Conversion-Rate auf {Lead-Aktion}} führt.
Messen über: {A/B | Vorher/Nachher}, Laufzeit {x Wochen}, Ziel {≥95% Konfidenz}.
```

**Beispiel (Haustechnik-Startseite):**
```
Hypothese #3 — Startseite
Weil: Heatmap zeigt, dass 70% der Mobil-Nutzer den CTA nie sehen (Scrolltiefe < 50%),
glauben wir, dass: eine Sticky-Anruf-Leiste am unteren Bildrand
zu: +25% Telefon-Klicks beim KPI Conversion-Rate auf Anruf führt.
Messen über: Vorher/Nachher (zu wenig Traffic für A/B), Laufzeit 3 Wochen.
```

**PIE/ICE-Priorisierung (Tabelle):**
```
| # | Hypothese                       | Impact | Confidence | Effort | Score |
|---|---------------------------------|--------|------------|--------|-------|
| 1 | Sticky-CTA mobil                |   5    |     4      |   1    |  13   |
| 2 | Formular von 7 auf 3 Felder     |   4    |     4      |   2    |  10   |
| 3 | Bewertungs-Sterne in Hero       |   4    |     3      |   2    |   9   |
(Score = Impact + Confidence + (6 - Effort); höchster zuerst)
```

**Ergebnis-Log (für `decisions/log.md`):**
```
{Datum} — CRO-Test #{Nr} {Seite}: {Änderung}
Methode: {A/B|V/N}, Laufzeit {x Wo}, Stichprobe {n}
Ergebnis: Kontrolle {x,x%} vs. Variante {y,y%}, Konfidenz {z%}
Entscheidung: {Rollout | behalten | wiederholen}
Erkenntnis: {1 Satz Learning}
```

**ICP-Schnellstart — typische erste Tests je Branche:**
```
Handwerk/Haustechnik: Sticky-Anruf-Leiste mobil; "24h-Notdienst" im Hero; Festpreis-Trust.
Immobilienmakler:     "Kostenlose Wertermittlung"-CTA; Referenz-Objekte mit Bild; kurzes Formular.
Kosmetik/Aesthetik:   Online-Buchungs-Button statt Formular; Vorher/Nachher-Galerie; Bewertungssterne.
Versicherung/Finanz:  "Kostenloses Erstgespräch"-CTA; Berater-Foto + Vita (Trust); WhatsApp-Option.
Coaches:              Klares Ergebnis-Versprechen im Hero; Testimonials; Calendly-Buchung statt Formular.
```

**Heatmap-Auswertungs-Fragen (Checkfragen):**
```
- Sehen Mobil-Nutzer den primären CTA ohne Scrollen?
- Wird auf nicht-klickbare Elemente geklickt (= Erwartung verfehlt)?
- Wo bricht die Scrolltiefe ab (= Inhalt davor überzeugt nicht)?
- An welchem Formularfeld steigen Nutzer aus?
- Gibt es Rage-Clicks (= Frust/Bug)?
```

## Bezug

- **Workflow Messen:** Datenquelle ist Matomo (Conversion-Ziele, Heatmaps, Session-Recordings, Form-Analytics) + Google-Ads-Conversion; technische On-Page-Signale via Sistrix (`project_onpage`, `project_onpage_overview`, `project_onpage_issue`).
- **Workflow Entscheiden:** `weekly-review` ist die Drehscheibe — jedes Testergebnis fließt dort ein und erzeugt die nächste Hypothese/Task; Entscheidungen nach `decisions/log.md`.
- **Workflow Umsetzen:** Varianten werden über `build-page`/`build-landingpage` gebaut, Tracking über `setup-tracking` verifiziert.
- **Skills:** `/conversion-optimize` führt diesen Loop aus; `/audit` deckt Performance-/Trust-Lücken als CRO-Kandidaten auf; `/level-up` kann wiederkehrende Schritte (Datenzug, Reporting) automatisieren.
- **Verwandte Playbooks:** `conversion-tracking.md` (Voraussetzung — ohne sauberes Tracking kein CRO), `copywriting.md` (CTA-/Headline-Varianten), `landingpage.md` (1-Ziel-Seiten), `performance-a11y.md` (Ladezeit), `local-seo.md` (Anfragen aus Standort-Pages).
