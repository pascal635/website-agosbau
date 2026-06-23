# Reporting

> Jeden Kunden in einem festen Rhythmus mit einem kommentierten Report versorgen, der eine einzige Frage beantwortet: Hat sich das Business des Kunden verbessert — und wodurch?

## Prinzipien

- Ergebnisbericht, kein Aktivitätsbericht. Nie "wir haben X optimiert" — immer "die Leads sind von A auf B gestiegen, weil Y".
- Leads gesamt und Cost per Lead stehen immer oben. Das ist die Zahl, die den lokalen Dienstleister wirklich interessiert.
- Automatisiert wo möglich, menschlich kommentiert wo es Mehrwert bringt. Daten zieht die KI, die Einordnung macht den Unterschied.
- Schlechte Monate werden klar benannt, nie schöngeredet. Zahl + Ursache + Maßnahme. Kein Kunde kündigt, wenn er sieht, dass wir das Problem verstehen und handeln.
- White-Label: Der Report trägt das Branding des Agentur-Kunden, nie das der Tools (Matomo, Sistrix, Google Ads). Keine Tool-Logos, keine technischen Fachbegriffe ungeklärt.
- Wöchentlich ist operativ (was tun wir gerade), monatlich ist strategisch (hat es gewirkt). Nicht vermischen.
- Datenquellen sind fix: Anfragen/Conversions aus Matomo + Google-Ads-Conversion, Sichtbarkeit & Rankings aus Sistrix. Fehlen Daten, wird das Tracking sofort geprüft — nicht auf den nächsten Monat vertröstet.

## Schritt für Schritt

1. **Zeitfenster festlegen.** Monatsreport immer zwischen dem 1. und 5. des Folgemonats. Wochenreport (nur Tier 3) jeden Montag für die Vorwoche.
2. **Tier bestimmen.** Tier 1 = automatisiert ohne Kommentar. Tier 2 = automatisiert + 3–5 Bulletpoints. Tier 3 = vollständiger kommentierter Report + Strategie-Update. Steht im Kunden-Kontext.
3. **Daten ziehen.** Matomo: Sitzungen, Conversions, Cost per Lead, Top-Seiten. Google-Ads-Conversion: Conversions, CPL, Conversion Rate. Sistrix: Sichtbarkeitsindex (`domain_visindex`), Rankings Top-10 (`project_ranking`), organische Klicks (`domain_traffic_estimation`). GBP-Insights (Aufrufe, Anrufe, Routen) falls lokal relevant.
4. **Monats-Vergleich rechnen.** Jede KPI gegen Vormonat UND gegen Vorjahresmonat (Saisonalität). Veränderung in Prozent und absolut. Nie nackte Zahlen ohne Vergleichswert.
5. **KPIs nach Leistungsbereich auswählen.** Nur die für diesen Kunden relevanten Bereiche zeigen (siehe Tabelle in Vorlagen). Versteht der Kunde Zahlen schlecht: auf die 2–3 wichtigsten KPIs reduzieren, Rest weglassen.
6. **Kommentieren (Tier 2 & 3).** Den Kommentar-Block nach fester Struktur schreiben (siehe Vorlagen). Immer: Highlight, was nicht lief + warum, Empfehlung nächster Monat.
7. **Schlechte Werte einordnen.** Bei jedem KPI im Minus: Ursache benennen (Saisonalität, Algorithmus-Update, Budget-Änderung, Wettbewerb) und konkrete Maßnahme nennen. Falls selbst verschuldet: offen ansprechen.
8. **White-Label-Layout anwenden.** Logo des Agentur-Kunden, dessen Farben, kein Tool-Branding. Export als PDF (Tier 3) oder eingebettet in die Report-Mail.
9. **Versenden.** Per E-Mail mit passender Vorlage (Tier-2- bzw. Tier-3-Mailtext als Intro). Bei Tier 1 reiner Report-Anhang/Link.
10. **Loggen & Anschluss herstellen.** Versanddatum und Kern-KPIs festhalten. Der Monatsreport ist die Grundlage für den nächsten Strategy Call und füttert die Priorisierung im Workflow "Entscheiden". Größere Erkenntnisse in `decisions/log.md`.

## Checkliste

- [ ] Tier des Kunden korrekt bestimmt
- [ ] Daten aus Matomo + Google-Ads-Conversion gezogen und plausibel
- [ ] Sistrix-Sichtbarkeit + Rankings Top-10 gezogen
- [ ] Leads gesamt und Cost per Lead stehen ganz oben
- [ ] Jede KPI mit Vergleich Vormonat + Vorjahresmonat
- [ ] Nur relevante Leistungsbereiche gezeigt (kein Daten-Müll)
- [ ] Kommentar geschrieben (Tier 2: 3–5 Bullets, Tier 3: voller Block)
- [ ] Jeder KPI im Minus hat Ursache + Maßnahme
- [ ] White-Label: Branding des Kunden, kein Tool-Logo, keine ungeklärten Fachbegriffe
- [ ] Fehlende/auffällige Daten = Tracking sofort geprüft, nicht verschoben
- [ ] Export (PDF bei Tier 3) + Versand mit passender Mailvorlage
- [ ] Versand zwischen 1. und 5. erfolgt
- [ ] Kern-KPIs festgehalten, Anschluss an Strategy Call / Workflow "Entscheiden"

## Vorlagen & Beispiele

**KPIs nach Leistungsbereich (nur Relevantes zeigen):**

| Bereich | Primäre KPIs | Sekundäre KPIs | Quelle |
|---|---|---|---|
| Website / Conversion | Leads gesamt, Cost per Lead, Conversion Rate | Sitzungen, Absprungrate, Top-Seiten, Ladezeit | Matomo |
| Google Ads | Cost per Lead, Conversions, Conversion Rate | Klicks, CTR, Qualitätsfaktor | Google-Ads-Conversion |
| SEO / Sichtbarkeit | Organische Klicks, Rankings Top-10, Sichtbarkeitsindex | Impressionen, neu indexierte Seiten | Sistrix |
| Local / GBP | Profilaufrufe, Anrufklicks, Routenanfragen | Bewertungs-Entwicklung | GBP-Insights |

**Tier-Übersicht (kopierbar):**

| Tier | Report-Typ | Versand |
|---|---|---|
| Tier 1 | Automatisiert ohne Kommentar | 1.–3. des Monats |
| Tier 2 | Automatisiert + 3–5 AM-Bulletpoints | 1.–3. des Monats |
| Tier 3 | Vollständiger kommentierter Report + Strategie-Update | 1.–5. des Monats |

**Kommentar-Block Tier 2 (3–5 Bullets):**
```
- Highlight des Monats: {z.B. CPL von 42 € auf 31 € gesenkt, 18 % mehr Leads}
- Lief nicht wie erwartet: {z.B. organische Klicks -8 %} — Ursache: {z.B. Sommerloch}
- Empfehlung nächster Monat: {konkrete Maßnahme, z.B. Landingpage für Notdienst testen}
```

**Kommentar-Block Tier 3 (voller Block):**
```
Executive Summary (3 Sätze): Was war der Monat auf einen Blick?

Performance je Kanal:
- Website/Conversion: {Bewertung + Ableitung}
- Google Ads: {Bewertung + Ableitung}
- SEO/Sichtbarkeit: {Bewertung + Ableitung}
- Local/GBP: {Bewertung + Ableitung}

Top-Ergebnis des Monats: {was hat am besten funktioniert}
Herausforderung des Monats: {was lief nicht — was machen wir anders}
Fokus nächster Monat: {die 3 wichtigsten Tasks}
```

**Formulierung schlechter Monat (Muster — Heizungsbauer):**
```
Die Leads über Google Ads lagen im Oktober 30 % unter dem Vormonat.
Ursache war ein starker CPC-Anstieg durch erhöhte Wettbewerbsaktivität
vor der Heizungssaison. Wir haben die Kampagne auf Smart Bidding
umgestellt und neue Anzeigentexte eingespielt — für November erwarten
wir eine Normalisierung.
```

**Report-Mail Tier 2/3 (Intro-Text):**
```
Betreff: Ihr Monatsbericht {Monat} — {Firmenname}

Hallo {Vorname},

anbei Ihr Report für {Monat}. Das Wichtigste vorab:
{2–3 Kern-Sätze: Leads, CPL, Trend}

Den vollständigen Bericht finden Sie im Anhang. Bei Fragen gehen wir
das gerne im nächsten Termin durch.

Beste Grüße
{Absender}
```

**Abgrenzung wöchentlich vs. monatlich:**
```
Wöchentlich (operativ, nur Tier 3):
- Was wurde diese Woche umgesetzt (Bauen/Umsetzen)
- Live-Zahlen: Leads, CPL, auffällige Ausschläge
- Was machen wir nächste Woche
- Kein PDF, kurze Notiz / Strategy-Call-Input

Monatlich (strategisch, alle Tier):
- Hat die Arbeit gewirkt? Vergleich Vormonat + Vorjahr
- Volle KPI-Auswertung über alle Kanäle
- Kommentar + Empfehlung
- White-Label-PDF + Versand
```

## Bezug

- **Workflow Messen:** Liefert die Rohdaten — Matomo + Google-Ads-Conversion (Leads, CPL, Conversions), Sistrix (`domain_visindex`, `project_ranking`, `domain_traffic_estimation`) für Sichtbarkeit und Rankings.
- **Workflow Entscheiden:** Der Monatsreport ist die Grundlage für die Priorisierung des nächsten Zyklus und für den Strategy Call. Erkenntnisse in `decisions/log.md` loggen.
- **Workflow Bauen / Umsetzen:** Empfehlungen aus dem Report ("Fokus nächster Monat") werden als Tasks in den Bau-/Umsetzungs-Zyklus überführt.
- **Skills:** `/audit` prüft Tracking- und Connection-Freshness (fehlende Datenquellen = Reporting unvollständig); `/level-up` kann Datenabruf, Report-Generierung und Versand automatisieren.
- **Verwandte Playbooks:** Local SEO (GBP-Insights, Local-Pack-Reporting), On-Page-SEO und GEO (Sichtbarkeits-KPIs als Report-Input).
