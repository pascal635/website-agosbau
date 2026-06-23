# Workflow: onboarding-pipeline

> **Typ:** Deterministischer Mehr-Schritt-Ablauf (Spezifikation, kein lauffähiges Skript)
> **Zweck:** Roh-Inputs eines Kunden (Assets + Fragebogen + Transkripte) einlesen, das Brand-Profil destillieren, Inhalte strukturieren und die `context/`-Dateien schreiben — die Wissensgrundlage, aus der `new-site-build` später baut.
> **Läuft:** einmal pro Klon, am Anfang. Re-run nach Korrekturen in `intake/` ist idempotent (überschreibt `context/` neu).
> **Verwandter Skill:** `/onboard` (interaktive Variante). Dieser Workflow ist der deterministische Unterbau.

---

## Voraussetzungen

- Inputs liegen vor (siehe Stufe 1). Fehlt etwas, wird es in der Lücken-Liste (Output Stufe 5) markiert, nicht erfunden.
- ICP-Annahme: lokaler B2C-Dienstleister mit physischem Standort (Handwerk/Haustechnik, Makler, Kosmetik/Aesthetik, Versicherungs-/Finanzberater, Coaches). Steuert, was als Pflichtfeld gilt (z. B. Einzugsgebiet, NAP, Conversion-Definition).

---

## Stufe 1 — Inputs einlesen (Ingest)

**Input:**
- `assets/logo/`, `assets/ci/`, `assets/images/` — Logo-Varianten, CI-Manual, Bilder `[K]`
- `intake/` — ausgefüllter `website-intake.md` / Fragebogen-Antworten `[K]`
- `intake/` — Transkripte aus Erstgespräch/Discovery `[K]`
- optional: bestehende Website-URL, Social-Profile, Google Business Profile

**Tun:**
1. Alle Dateien in `assets/` und `intake/` auflisten und nach Typ klassifizieren (Bild, CI-Dokument, Fragebogen, Transkript).
2. CI-Dokumente und Fragebögen volltextlich lesen. PDF/DOCX bei Bedarf über die passenden Skills (`pdf`, `docx`) extrahieren.
3. Transkripte lesen — verbatim-Zitate für Voice und Schmerzpunkte markieren.
4. Bestehende Website (falls vorhanden) crawlen/lesen für migrierbare Inhalte und IST-Stand.

**Output:**
- Interne Roh-Inventarliste: was liegt vor, welcher Typ, welche Qualität.
- Verbatim-Sammlung echter Kundentexte (Quelle für `voice.md`).

---

## Stufe 2 — Brand-Profil extrahieren

**Input:** CI-Dokumente, Logo-Dateien, Bilder, verbatim-Sammlung aus Stufe 1.

**Tun:**
1. Design-Token destillieren: Farben (Hex), Schriften, Abstände, Bildsprache, Do/Don'ts.
2. Logo-Varianten zuordnen (hell/dunkel, Icon, Favicon) und Lücken benennen.
3. Tonalität ableiten: Register, Satzlänge, typische Wörter/Phrasen, Tabus — aus den verbatim-Zitaten, nicht erfunden.

**Output:**
- `context/brand-profile.md` — Farben, Schriften, Logo-Inventar, Bildsprache, visuelle Do/Don'ts.
- `context/voice.md` — Tonalität, Register, Beispielsätze (verbatim als Anker), Don'ts. Externe Texte immer als Draft zeigen, nie ungeprüft im Kundennamen.

---

## Stufe 3 — Inhalte strukturieren

**Input:** Fragebogen-Antworten, Transkripte, bestehende Website-Inhalte.

**Tun:**
1. Unternehmensinfos ordnen: was, USP, Historie, Team, Zertifikate.
2. Leistungen/Angebote als Liste mit je Kurzbeschreibung, Nutzen, Conversion-Ziel.
3. Zielgruppe schärfen: Wunschkunde, Schmerzen, Einwände, Trigger (aus Transkripten).
4. Trust-Material sammeln: Referenzen, Bewertungen, Testimonials, Case Studies.
5. Local-Daten konsolidieren: NAP (Name/Adresse/Telefon), Einzugsgebiet, Standorte, GBP.
6. Conversion-Definition festhalten: Was ist ein Lead (Formular / Anruf / WhatsApp / Buchung)? — steuert später das Tracking.
7. Wettbewerber-Liste für Positionierung/SEO-Gap.

**Output:** strukturierte Zwischenobjekte je Bereich (Unternehmen, Services, Audience, Trust, Local, Conversion, Wettbewerb) — Eingang für Stufe 4.

---

## Stufe 4 — `context/`-Dateien schreiben

**Input:** Brand-Profil (Stufe 2) + strukturierte Inhalte (Stufe 3).

**Tun:** Schreibe/aktualisiere die `context/`-Dateien. Jede Datei knapp, faktentreu, mit Quellenmarkierung bei Unsicherheit.

**Output:**
| Datei | Inhalt |
|---|---|
| `context/about-site.md` | Was die Seite ist, Unternehmen, USP, Historie, Team, Zertifikate |
| `context/brand-profile.md` | (aus Stufe 2) Farben, Schriften, Logo, Bildsprache, Do/Don'ts |
| `context/voice.md` | (aus Stufe 2) Tonalität + verbatim-Anker |
| `context/audience.md` | Wunschkunde, Schmerzen, Einwände, Trigger |
| `context/services.md` | Leistungen mit Nutzen + Conversion-Ziel je Leistung |
| `context/goals.md` | Conversion-Definition, KPIs, Quartalsziel; Wettbewerber; Einzugsgebiet/NAP/GBP für Local SEO |
| `context/legal.md` | Impressum-Daten, Datenschutz, AGB, Handelsregister |

---

## Stufe 5 — Validierung & Übergabe

**Input:** geschriebene `context/`-Dateien.

**Tun:**
1. Pflichtfelder für lokalen B2C-Dienstleister prüfen: NAP vollständig? Einzugsgebiet? Conversion-Definition? Impressum-Daten? Trust-Material vorhanden?
2. Lücken-Liste erstellen: was fehlt vom Kunden, was muss `[W]` noch holen.
3. Monitor-Zugänge (GSC, Google Ads, Matomo, GBP) in `connections.md` vermerken — Default-Tracking: Matomo + Google-Ads-Conversion statt GA.

**Output:**
- Befüllte `context/`-Dateien, bereit für `new-site-build`.
- Lücken-Liste (offene Inputs) an den Operator.
- Aktualisierte `connections.md`-Einträge.

---

## Datenfluss (kompakt)

```
assets/ + intake/  →  [1 Ingest]  →  Roh-Inventar + Verbatim
                                          │
              ┌───────────────────────────┴───────────────────┐
        [2 Brand-Profil]                              [3 Inhalte strukturieren]
        brand-profile.md, voice.md                    Zwischenobjekte je Bereich
              └───────────────────────────┬───────────────────┘
                                  [4 context/ schreiben]
                                          │
                                  [5 Validierung] → Lücken-Liste + connections.md
```
