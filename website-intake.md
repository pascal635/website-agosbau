# Website-AIOS Intake — Phase 0 (Start-Inputs)

Diese Datei erfasst nur das **Minimum**, um das Onboarding zu starten. Mehr ist hier bewusst nicht nötig: Das OS recherchiert den Rest selbst und holt die schweren Inputs (Fragebogen-Antworten, CI, Recht, Zugänge) **gestaffelt** zum richtigen Zeitpunkt ein.

> **Voller Ablauf:** `references/onboarding-flow.md` (7 Phasen, von Transcript bis erster Lead).
> **Prinzip:** Zum Start reicht Transcript + Branche (+ ggf. alte URL). Alles Schwere kommt erst, wenn die Texte freigegeben sind und gebaut wird.

Ausfüllen durch Tippen, Voice-Paste oder `/onboard`. Wenn gefüllt, `/onboard` laufen lassen — das startet Phase 0/1 (Start-Inputs ablegen, Deep Research, Ist-Website-Analyse, Transcript-Auswertung).

---

## 1 — Erstgespräch-Transcript [Pflicht]

Transcript oder Notizen aus dem Discovery-Call: Ziele, Schmerzen, Wunschkunde, Erwartungen, O-Töne. **Roh ablegen in `intake/transcripts/`** — nicht glätten, nicht umschreiben (verbatim ist die Brand-Voice-Quelle).

```
[Datei-Referenz in intake/transcripts/ oder Kernzitate verbatim]
```

## 2 — Branche / Vertical [Pflicht]

Branche/Gewerk des Kunden — steuert Deep Research und den maßgeschneiderten Fragebogen.

```
Branche/Vertical:
```

## 3 — Ist-Website-URL [optional]

URL der aktuellen Seite, falls vorhanden. Das OS crawlt und analysiert sie (Stärken/Schwächen, migrierbare Inhalte, technischer Stand). Leer lassen, wenn keine existiert.

```
Alte URL:
```

---

## Was als Nächstes kommt (nicht jetzt ausfüllen)

Diese Inputs werden **vom OS angefordert**, sobald sie gebraucht werden — nicht vorab:

- **Fragebogen-Antworten** — das OS generiert nach der Recherche einen kunden-spezifischen Fragebogen (Leistungen, USP, Zielgruppe, Einzugsgebiet/NAP, Referenzen, Conversion-Definition). Erst dann ausfüllen.
- **CI / Logo / echte Bilder** — erst vor dem Bau (Phase 6).
- **Recht** (Impressum, Datenschutz, AGB, Handelsregister) — erst vor dem Bau.
- **Zugänge** (Domain, Hosting, GSC, Google Ads, Matomo, GBP) — erst vor dem Bau.

Details und genaue Reihenfolge: `references/onboarding-flow.md`.
