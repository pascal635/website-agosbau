---
name: generate-questionnaire
description: Phase 2 des Website-Onboardings. Generiert aus Branchen-Report + Ist-Website-Analyse + Transcript-Insights einen KUNDEN-SPEZIFISCHEN Fragebogen, der nur fragt, was Research und Erstgespräch noch NICHT beantwortet haben. Trigger nach Phase 1 (Research liegt vor) oder auf "Fragebogen erstellen", "generate questionnaire", "was müssen wir den Kunden noch fragen". Ein Lauf = eine Datei intake/fragebogen-{kunde}.md an den Kunden.
---

# Fragebogen generieren (Phase 2)

Der Schritt, der den großen generischen Vorab-Fragebogen ersetzt. Das OS hat in Phase 1 schon recherchiert. Jetzt fragt es den Kunden **nur das, was es selbst nicht wissen kann** — Fakten, Wahrheiten, Entscheidungen, die nur der Kunde liefert. Ziel: kurzer, präziser, beantwortbarer Fragebogen. Kein 60-Fragen-Monster.

Leitprinzip: **Jede Frage, die Research oder Transcript schon beantwortet, wird gestrichen.** Was wir wissen, fragen wir nicht — wir spiegeln es als Annahme zur Bestätigung zurück.

## Schritt 0 — Inputs einlesen

Voraussetzung: Phase 1 ist gelaufen. Lies in dieser Reihenfolge:

1. `intake/research/branchen-report.md` — Markt, Wettbewerb, Kundenpsychologie, was in dieser Branche konvertiert.
2. `intake/research/ist-website-analyse.md` (falls vorhanden) — was die alte Seite schon hergibt: Leistungen, NAP, Referenzen, Bilder, Texte, technischer Stand.
3. `context/gespraechs-insights.md` — Ziele, Schmerzen, Wunschkunde, Einwände, Voice-Anker, Conversion-Wunsch aus dem Erstgespräch.
4. `references/questionnaire-base.md` — der **Pflicht-Rahmen** (Themenblöcke, die jeder Fragebogen abdecken muss).

Fehlt einer der ersten drei Inputs: Stopp und melden, welche Phase-1-Datei fehlt. Ohne Research baust du sonst doch ein generisches Monster.

Kundenname/Kürzel für den Dateinamen aus `context/about-site.md` oder dem Insights-Dokument ziehen (z. B. Firmenname klein, ohne Sonderzeichen → `{kunde}`).

## Schritt 1 — Wissens-Inventar bauen (das Herz dieses Skills)

Gehe jeden Pflicht-Block aus `questionnaire-base.md` durch und stufe ihn pro Punkt in eine von drei Spalten ein:

- **GEKLÄRT** — Research/Transcript liefert eine belastbare Antwort. → wird NICHT gefragt. Wandert in „Annahmen bestätigen" (Schritt 3).
- **HALB** — es gibt ein Indiz, aber unsicher/unvollständig. → wird als **gezielte Bestätigungs-/Lückenfrage** gestellt („Wir sehen X — stimmt das, und fehlt etwas?"), nicht offen aus dem Nichts.
- **OFFEN** — nur der Kunde kann es liefern (interne Fakten, Entscheidungen, Material, Recht). → wird als echte Frage gestellt.

Pflicht-Abdeckung (jeder Block MUSS am Ende in genau einer Spalte gelandet sein — kein Block darf fehlen):

1. **Leistungen** — welche Services, Priorität, was beworben werden soll, was nicht mehr.
2. **USP / Positionierung** — warum dieser Anbieter statt Wettbewerb. (Transcript hat oft Anker → meist HALB.)
3. **Zielgruppe / Wunschkunde** — wen ansprechen, wen explizit nicht.
4. **Einzugsgebiet / NAP** — Standorte, bediente Orte/Radius, exakter Name + Adresse + Telefon (NAP muss verbatim stimmen — Local SEO). NAP ist fast immer OFFEN, weil Genauigkeit Pflicht ist.
5. **Referenzen / Trust** — Bewertungen, Testimonials, Case Studies, Zertifikate, Auszeichnungen, Mitgliedschaften, Garantien.
6. **Conversion-Definition** — was zählt als Lead: Formular / Anruf / WhatsApp / Buchung / Termin. **Welches Tool**, falls Termin/Buchung gewünscht (kein Default-Tool annehmen — Kunde nennt seins).
7. **Recht-Eckdaten** — Impressumsdaten, verantwortliche Person, Rechtsform/Handelsregister, USt-IdNr., Datenschutz/AGB vorhanden? (Pflicht-Block, auch wenn das Material erst in Phase 6 kommt — hier nur die Eckdaten klären, kein PDF-Upload.)

Zusätzliche, kunden-spezifische OFFEN-Punkte, die aus Research/Transcript auftauchen (z. B. Branchen-typische Pflichtangaben, Saisonalität, Preis-Transparenz-Frage), als eigene Fragen ergänzen — aber nur, wenn sie wirklich offen sind.

## Schritt 2 — Fragen formulieren

Regeln für gute Fragen:

- **Konkret und beantwortbar.** „Welche 3 Leistungen sollen auf der Startseite ganz oben stehen?" statt „Erzählen Sie von Ihren Leistungen."
- **Eine Sache pro Frage.** Keine Doppel-Fragen.
- **Geschlossen wo möglich** — Auswahl/Ja-Nein mit Platz für Ergänzung, schlägt offene Prosa.
- **Begründung kurz mitliefern, wo es hilft** („…damit wir die richtige Conversion sauber tracken können"). Macht das Ausfüllen leichter.
- **Voice spiegeln:** Register aus `context/voice.md` bzw. den Voice-Ankern übernehmen (du/Sie, Tonalität). Den Fragebogen liest der Kunde.
- **Kein Doppel mit Research.** Vor jeder Frage gegenprüfen: Steht die Antwort schon im Report/Insights? Dann raus oder zur Bestätigung umbauen.

Halte die Gesamtzahl niedrig. Richtwert: so wenige Fragen wie nötig, damit Phase 4 (Strategie + Texte) sauber laufen kann. Wenn ein Block komplett GEKLÄRT ist, hat er null Fragen — nur eine Annahme zur Bestätigung.

## Schritt 3 — Datei schreiben

Schreibe mit dem Write-Tool an **`intake/fragebogen-{kunde}.md`**. Ordner anlegen, falls nötig. Struktur:

```markdown
# Fragebogen — {Firmenname}

Kurz vorab: Wir haben uns Ihre Branche, Ihren Markt{, Ihre aktuelle Website} und unser Erstgespräch
schon angeschaut. Deshalb ist dieser Fragebogen kurz — wir fragen nur, was wir noch nicht sicher wissen.
Bitte direkt in die Datei schreiben oder uns zurückschicken.

## Bitte nur kurz bestätigen (das haben wir schon — stimmt es?)
- [Annahme 1 aus Research/Transcript]  → richtig? ☐ ja ☐ korrigieren: ____
- [Annahme 2]  → richtig? ☐ ja ☐ korrigieren: ____
  (nur GEKLÄRTE Punkte — als knappe Bestätigungs-Checkliste)

## Ihre Fragen
### Leistungen
1. …
### USP / Positionierung
…
### Zielgruppe
…
### Einzugsgebiet & Kontaktdaten (NAP)
- Exakter Firmenname (wie er überall stehen soll): ____
- Adresse (Straße, PLZ, Ort): ____
- Telefon (zentrale Nummer): ____
- Welche Orte/Region bedienen Sie? (oder Radius in km): ____
### Referenzen & Vertrauen
…
### Was soll passieren? (Conversion)
- Was ist für Sie ein „Lead"? ☐ Formular ☐ Anruf ☐ WhatsApp ☐ Termin/Buchung ☐ anderes: ____
- Falls Termin/Buchung: Welches Tool nutzen Sie (oder sollen wir vorschlagen)? ____
### Rechtliche Eckdaten
- Rechtsform / Handelsregister-Nr. / Registergericht: ____
- USt-IdNr.: ____
- Verantwortlich i. S. d. § 18 MStV (Name): ____
- Datenschutzerklärung & AGB vorhanden? ☐ ja ☐ nein, bitte mit erstellen

> Material (Logo, Bilder, CI, Recht-Dokumente, Zugänge) brauchen wir erst später — nicht jetzt.
```

Nur die Blöcke mit echten Fragen ausführlich; komplett geklärte Blöcke erscheinen ausschließlich als Bestätigungspunkt. Platzhalter `____` / `☐` für die Kundenantworten lassen.

## Schritt 4 — Gate

- Prüfen: **Jeder** der 7 Pflicht-Blöcke ist abgedeckt (entweder als Frage oder als Bestätigungs-Annahme). Fehlt einer → ergänzen.
- Keine Frage doppelt das, was schon im Research steht.
- Eine Zeile zurückmelden: Datei-Pfad + wie viele Fragen + welche Blöcke bereits als „geklärt" rausgefallen sind.
- Hinweis an den Operator: Fragebogen an den Kunden rausschicken = Gate-Übergang zu **Phase 3** (Kunde füllt aus). Antworten kommen zurück nach `intake/`.

## Notizen
- Re-Run: Existiert `intake/fragebogen-{kunde}.md` schon, vorher nach `archives/fragebogen-{YYYY-MM-DD-HHMM}.md` kopieren, dann neu schreiben.
- Nichts erfinden. Wo Research und Transcript schweigen → echte Frage, nicht geratene Annahme.
- Kein Default-Buchungstool, keine angenommene Domain, keine erfundenen Referenzen. Der Kunde liefert die Wahrheit.
