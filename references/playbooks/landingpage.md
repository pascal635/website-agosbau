# Playbook: Landingpages

> Zweck: Conversion-fokussierte 1-Ziel-Seiten bauen, die exakt zur schaltenden Anzeige passen, Ablenkung eliminieren und Besucher in genau eine Aktion fuehren (Anruf, Formular oder Buchung).

## Prinzipien

- **Ein Ziel pro Seite.** Eine Landingpage hat genau eine Conversion-Aktion. Keine Navigation, keine "auch noch das" Links, kein Footer-Menue mit 20 Punkten. Jedes Element fragt: bringt es den Besucher naeher zur Aktion? Wenn nein, raus.
- **Message-Match zur Anzeige.** Die Headline der Seite spiegelt das Anzeigen-Versprechen woertlich. Wer auf "Heizung defekt? Notdienst in 60 Min" klickt, muss exakt das oben sehen. Bruch = Absprung.
- **Tracking ist nicht optional.** Keine Landingpage geht live ohne verifiziertes Conversion-Tracking (Matomo Goal + Google-Ads-Conversion). Ohne Tracking kein ROI, ohne ROI keine Entscheidung im Kreislauf.
- **Ablenkung reduziert Conversion.** Jeder zusaetzliche Klickpfad senkt die Rate. Header-Nav weg, externe Links weg, Social-Icons weg. Der einzige Ausgang ist der CTA.
- **Beweis schlaegt Behauptung.** B2C-Dienstleister mit Standort leben von Vertrauen: echte Bewertungen, Anzahl Kunden, lokale Referenzen, Foto vom Team/Standort. Keine Stockfotos als Hauptbeweis.
- **CTA mehrfach, identisch.** Dieselbe Aktion erscheint nach Hero, nach Beweis und am Ende. Gleiche Beschriftung, gleiche Farbe. Der Besucher entscheidet, wann er bereit ist.

## Schritt fuer Schritt

1. **Ziel und Anzeige festlegen.** Hole das Conversion-Ziel aus dem Ads-Setup (siehe Ads-Erst-Setup): Formular-Absendung, Anruf oder Buchung. Notiere die exakte Anzeigen-Headline und das Haupt-Keyword der Anzeigengruppe, die auf diese Seite zeigt. Eine Landingpage = eine Anzeigengruppe = ein Versprechen.

2. **Message-Match Headline schreiben.** Die H1 greift das Anzeigen-Versprechen und das Haupt-Keyword auf. Format: [Problem/Leistung] + [Region] + [Differenzierer]. Beispiel Anzeige "Maklerwert kostenlos ermitteln" -> H1 "Was ist Ihre Immobilie in Koeln wert? Kostenlose Bewertung in 24h".

3. **Hero-Block bauen.** Above the fold sichtbar: H1 (Versprechen), eine Subline (1 Satz Nutzen), primaerer CTA, ein Trust-Element (z.B. "4,9 Sterne aus 120 Bewertungen" oder "seit 2008 in [Region]"). Bei Telefon-Conversion: klickbare Telefonnummer prominent. Keine Navigation im Header — nur Logo (nicht verlinkt zur Hauptseite) und ggf. Telefonnummer.

4. **Problem-Block.** 2-4 Saetze oder Bullets, die den Schmerz des Besuchers benennen. Spiegelt seine Suchintention wider. Zeigt: "wir verstehen dein Problem". Bei Handwerk/Haustechnik konkret (Heizung aus, Wasserschaden); bei Coaches/Berater emotional (Unsicherheit, fehlende Klarheit).

5. **Loesungs-Block.** Wie loest die Leistung das Problem? 3 Schritte oder 3 Nutzen-Bullets. Konkret, kein Fachjargon. Idealerweise als "So laeuft es: 1. Anfrage 2. Termin 3. Erledigt". Senkt die wahrgenommene Huerde.

6. **Beweis-Block.** Echte Bewertungen (Name, ggf. Foto, Region), Logos/Zahlen (X zufriedene Kunden, Jahre am Markt), Vorher/Nachher bei sichtbaren Leistungen, Siegel/Zertifikate (Meisterbetrieb, IHK, Kammer). Bei lokalen Anbietern: Standort-Foto + Google-Bewertungs-Schnitt.

7. **CTA-Block(e) platzieren.** Primaerer CTA nach Hero, nach Beweis und als Abschluss-Block. Bei Formular-Conversion: Formular direkt above the fold sichtbar (rechts neben Hero auf Desktop) ODER nach dem Beweis-Block — kurz halten (Name, Telefon/E-Mail, optional 1 Auswahlfeld). Jedes Pflichtfeld weniger erhoeht die Rate.

8. **Ablenkung entfernen.** Pruefe: keine Top-Navigation, keine ausgehenden Links ausser dem CTA, kein voller Footer (nur Impressum + Datenschutz als Pflicht, klein). Social-Icons raus. Der einzige logische naechste Klick ist die Conversion.

9. **Tracking einrichten (Matomo + Google Ads).**
   - Matomo-Goal anlegen pro Conversion (Formular-Absendung, Telefon-Klick).
   - Google-Ads-Conversion-Tag fuer dieselbe Aktion einbauen (nicht via GA — direkter Conversion-Tag oder Server-side).
   - Telefon-Klick als Conversion tracken (tel:-Link Klick-Event).
   - Test-Conversion ausloesen und in Matomo UND Google Ads verifizieren, bevor live.

10. **Qualitaet pruefen und launchen.** Mobile + Desktop testen (Hero ohne Scrollen sichtbar?), Ladezeit unter 3 Sekunden (PageSpeed), Formular sendet und Lead landet korrekt, SSL aktiv, Impressum + Datenschutz vorhanden. Erst dann Anzeige auf diese URL zeigen lassen.

11. **In den Optimierungskreislauf geben.** Nach Launch Daten sammeln. Ab ausreichend Klicks: Conversion-Rate in Matomo lesen, eine Hypothese ableiten (Headline, CTA-Text, Formularlaenge, Beweis), genau eine Aenderung testen. Bauen -> Messen -> Entscheiden -> Umsetzen.

## Checkliste

**Vor Bau**
- [ ] Conversion-Ziel definiert (Formular / Anruf / Buchung)
- [ ] Anzeigen-Headline und Haupt-Keyword der Anzeigengruppe notiert
- [ ] Echte Beweise gesammelt (Bewertungen, Zahlen, Fotos, Siegel)

**Aufbau**
- [ ] H1 matcht das Anzeigen-Versprechen woertlich
- [ ] Hero above the fold: H1 + Subline + CTA + Trust-Element
- [ ] Problem-Block vorhanden
- [ ] Loesungs-Block (3 Schritte / 3 Nutzen)
- [ ] Beweis-Block mit echten Belegen
- [ ] CTA mind. 3x, identische Beschriftung und Farbe
- [ ] Formular kurz (max. noetige Felder), gut platziert

**Ablenkung**
- [ ] Keine Top-Navigation
- [ ] Keine ausgehenden Links ausser CTA
- [ ] Footer reduziert (nur Impressum + Datenschutz)
- [ ] Keine Social-Icons

**Tracking & Launch**
- [ ] Matomo-Goal angelegt
- [ ] Google-Ads-Conversion-Tag aktiv
- [ ] Telefon-Klick getrackt (falls relevant)
- [ ] Test-Conversion in Matomo UND Google Ads verifiziert
- [ ] Mobile + Desktop getestet
- [ ] Ladezeit unter 3 Sekunden
- [ ] SSL aktiv, Impressum + Datenschutz vorhanden
- [ ] Anzeige zeigt auf finale URL

## Vorlagen & Beispiele

**Seitengeruest (von oben nach unten)**
```
[Hero]   H1-Versprechen + Subline + CTA + Trust-Zeile   (+ Formular auf Desktop rechts)
[Problem] "Kennen Sie das? ..." 3-4 Bullets
[Loesung] "So einfach geht es: 1. ... 2. ... 3. ..."
[Beweis]  Bewertungen + Zahlen + Fotos + Siegel
[CTA]     Wiederholung der Hero-Aktion
[Footer]  Impressum · Datenschutz   (sonst nichts)
```

**Message-Match Beispiele (Anzeige -> H1)**
- Handwerk: "Heizung defekt? Notdienst in 60 Min" -> "Heizungsnotdienst in [Stadt] — wir sind in 60 Minuten bei Ihnen"
- Makler: "Was ist Ihre Immobilie wert?" -> "Kostenlose Immobilienbewertung in [Region] — Ergebnis in 24 Stunden"
- Kosmetik: "Faltenbehandlung ab 99 EUR" -> "Faltenbehandlung in [Stadt] ab 99 EUR — Beratung kostenlos"
- Finanzberater: "Altersvorsorge-Check gratis" -> "Kostenloser Altersvorsorge-Check fuer [Region] — in 30 Minuten Klarheit"
- Coach: "Endlich raus aus dem Stillstand" -> "1:1 Coaching in [Stadt] — in 8 Wochen zu mehr Klarheit"

**CTA-Beschriftungen (handlungsorientiert, nicht "Senden")**
- "Kostenlosen Termin sichern"
- "Jetzt unverbindlich anfragen"
- "Rueckruf in 24h anfordern"
- "Bewertung kostenlos starten"

**Kurzformular (Conversion-Ziel Lead)**
```
Name*
Telefon*
Worum geht es? (optional, 1 Auswahlfeld)
[Button: Kostenlosen Termin sichern]
Hinweis: Wir melden uns innerhalb von 24h. Keine Weitergabe an Dritte.
```

**Trust-Zeilen fuer Hero (ICP-spezifisch)**
- "4,9 Sterne aus 120 Google-Bewertungen"
- "Meisterbetrieb seit 2008 in [Region]"
- "Ueber 500 zufriedene Kunden in [Stadt]"

**Haeufige Fehler (vermeiden)**
| Fehler | Konsequenz | Vermeidung |
|---|---|---|
| Navigation auf der LP | Besucher klickt weg, kein Lead | Nur Logo + Telefonnummer im Header |
| Headline passt nicht zur Anzeige | Sofort-Absprung | H1 spiegelt Anzeigen-Versprechen |
| Langes Formular | Abbruch | Nur Pflichtfelder, Rest optional |
| Kein/ungetestetes Tracking | ROI nicht messbar | Test-Conversion vor Launch verifizieren |
| Stockfotos als Beweis | Kein Vertrauen | Echte Bewertungen, Team-/Standort-Foto |

## Bezug

- **Workflow Bauen:** Teil der Seiten-Erstellung im Website-AIOS-Kreislauf (Bauen -> Messen -> Entscheiden -> Umsetzen). Eine Landingpage wird pro Anzeigengruppe gebaut.
- **Ads-Setup:** Eng verzahnt mit dem Ads-Erst-Setup — das Conversion-Ziel und die Anzeigen-Headline kommen von dort, die LP liefert die passende Zielseite. Conversion-Tracking (Matomo-Goal + Google-Ads-Conversion) wird gemeinsam verifiziert.
- **Messen:** Conversion-Rate-Auswertung ueber Matomo-Goals; Optimierungs-Hypothesen fuettern den Kreislauf.
- **SEO:** Landingpages sind primaer fuer Paid-Traffic. Fuer organische Sichtbarkeit Keyword-Daten via Sistrix (MCP) — aber Message-Match zur Anzeige hat Vorrang vor SEO-Keyword-Stuffing.
