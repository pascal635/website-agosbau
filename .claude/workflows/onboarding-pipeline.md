# Workflow: onboarding-pipeline

> **Typ:** Deterministischer Mehr-Stufen-Ablauf (Spezifikation, kein lauffähiges Skript)
> **Zweck:** Eine Kundenwebsite gestaffelt von Null bis Bau bringen — mit minimalem manuellem Input. Das OS erarbeitet sich Kontext selbst, generiert den Fragebogen, schreibt Strategie/Struktur/Texte, holt Freigaben und übergibt an den Bau.
> **Prinzip:** Gestaffelt statt alles-auf-einmal. Jede Stufe hat **Input → Tun → Output → Gate**. Inputs werden erst verlangt, wenn sie gebraucht werden. Gate FAIL = Stopp, nachfassen, Stufe wiederholen. Gate PASS = nächste Stufe.
> **Quelle:** Verbindliche Fassung von `references/onboarding-flow.md`. Ersetzt das alte „Kunde füllt großen Fragebogen vorne aus"-Modell.
> **Verwandte Skills:** `onboard` (Stufe 0/1), `generate-questionnaire` (Stufe 2), `generate-content` (Stufe 4/5), `new-site-build` (Stufe 6).

---

## Voraussetzungen

- Zum Start reicht **Transcript + Branche** (+ ggf. Ist-URL). Alles Schwere (CI, Recht, Zugänge) kommt erst bei Stufe 6.
- ICP-Annahme: lokaler B2C-Dienstleister mit physischem Standort. Steuert die Pflichtfelder (Einzugsgebiet/NAP, Conversion-Definition).
- Fehlende Fakten werden in Lücken-Listen markiert, nie erfunden.

---

## Stufe 0 — Start-Inputs erfassen

**Input:**
- `transcript` (Pflicht) — Erstgespräch-Mitschnitt/Notiz
- `branche` (Pflicht) — Vertical/Branche des Kunden
- `ist_url` (optional) — bestehende Website-URL

**Tun:**
1. Transcript ablegen unter `intake/transcripts/`.
2. `branche` und `ist_url` in `intake/start-inputs.md` notieren.
3. Keine weiteren Inputs anfragen.

**Output:** `intake/transcripts/{datei}`, `intake/start-inputs.md`

**Gate:** Transcript liegt vor UND `branche` gesetzt. → sonst STOPP (fehlende Pflicht-Inputs einfordern).

---

## Stufe 1 — Deep Research + Ist-Analyse + Transcript-Auswertung

> OS arbeitet autonom, Kunde wartet. Kein Kunden-Input nötig. Skill: `onboard`.

**Input:** `intake/transcripts/{datei}`, `branche`, `ist_url` (falls vorhanden)

**Tun:**
1. **Deep Research** via Skill `deep-research` → Branchen-Report: Markt, Wettbewerb, Kundenpsychologie, konversionsstarke digitale Positionierung für `branche` + Region.
2. **Ist-Website-Analyse** (nur falls `ist_url`): crawlen, Stärken/Schwächen, migrierbare Inhalte, technischer Stand. Ohne URL: Schritt überspringen, im Output vermerken.
3. **Transcript-Auswertung:** Ziele, Schmerzen, Wunschkunde, Einwände, Voice-Anker (verbatim zitieren).

**Output:**
- `intake/research/branchen-report.md`
- `intake/research/ist-website-analyse.md` (oder Skip-Vermerk „keine Ist-URL")
- `context/gespraechs-insights.md`

**Gate:** Alle drei Output-Dateien existieren (Ist-Analyse ggf. als Skip-Vermerk). → sonst Stufe 1 wiederholen.

---

## Stufe 2 — Maßgeschneiderten Fragebogen generieren

> Skill: `generate-questionnaire`.

**Input:** `intake/research/branchen-report.md`, `intake/research/ist-website-analyse.md`, `context/gespraechs-insights.md`, `references/questionnaire-base.md`

**Tun:**
1. Pflicht-Rahmen aus `references/questionnaire-base.md` laden (sichert Abdeckung: Leistungen, USP, Zielgruppe, Einzugsgebiet/NAP, Referenzen, Conversion-Definition).
2. Abgleich gegen Research + Insights: Nur Fragen behalten, die noch NICHT beantwortet sind. Kein generisches 60-Fragen-Monster.
3. Kunden-spezifischen Fragebogen schreiben und an den Kunden schicken.

**Output:** `intake/fragebogen-{kunde}.md`

**Gate:** Fragebogen geschrieben UND an Kunden rausgeschickt. → sonst STOPP.

---

## Stufe 3 — Antworten einlesen

> Wartet auf Kunden-Input.

**Input:** Ausgefüllte Fragebogen-Antworten vom Kunden

**Tun:**
1. Antworten ablegen unter `intake/antworten-{kunde}.md`.
2. Pflichtfelder prüfen: Leistungen, USP, Zielgruppe, Einzugsgebiet/NAP, Referenzen, Conversion-Definition.
3. Lücken gezielt nachfassen (nur fehlende Felder, nicht den ganzen Bogen).

**Output:** `intake/antworten-{kunde}.md`

**Gate:** Alle Pflichtfelder ausreichend gefüllt. → sonst nachfassen und Stufe 3 wiederholen.

---

## Stufe 4 — Strategie + Struktur + Texte generieren

> Skill: `generate-content`.

**Input:** `intake/antworten-{kunde}.md`, `intake/research/branchen-report.md`, `context/gespraechs-insights.md`

**Tun:**
1. **Strategie** → `context/strategie.md`: Positionierung, Conversion-Strategie, SEO/GEO-Winkel, Wettbewerbsabgrenzung.
2. **Seitenstruktur/Sitemap** nach `references/playbooks/page-structure.md` → `context/sitemap.md`.
3. **Texte je Seite** nach `references/playbooks/copywriting.md` + `seo-onpage.md` + `geo.md` → Entwurf in `intake/texte/v1/`.

**Output:**
- `context/strategie.md`
- `context/sitemap.md`
- `intake/texte/v1/` (Entwurf-Texte) → an den Kunden

**Gate:** Strategie + Sitemap + Text-Entwurf existieren und sind an Kunden raus. → sonst Stufe 4 wiederholen.

---

## Stufe 5 — Freigabe-Schleife

> Iterativ. Wiederholt sich, bis Freigabe. Skill: `generate-content`.

**Input:** Kunden-Korrekturen zum aktuellen Text-Stand

**Tun:**
1. Korrekturen einarbeiten.
2. Neue Version versionieren: `intake/texte/v2/`, `v3/`, … (alten Stand nie überschreiben).
3. Überarbeiteten Stand an Kunden zur Prüfung.
4. Bei weiteren Korrekturen: zurück zu Schritt 1.

**Output:** Versionierte Text-Stände in `intake/texte/`, finaler Stand markiert als freigegeben (`intake/texte/FINAL/`).

**Gate:** Kunde hat Texte ausdrücklich freigegeben. → sonst Schleife fortsetzen. ERST dann Übergabe an Stufe 6.

---

## Stufe 6 — Bauen (Übergabe an `new-site-build`)

> Erst jetzt werden die schweren Inputs (CI, Recht, Zugänge) verlangt.

**Input (jetzt erst!):**
- Freigegebene Texte aus `intake/texte/FINAL/`
- CI-Manual / Farben / Fonts
- Logo-Varianten
- Echte Bilder
- Recht: Impressum, Datenschutz, AGB, Handelsregister
- Zugänge: Domain, Hosting, GSC, Google Ads, Matomo, GBP

**Tun:**
1. CI destillieren via `onboard` → `context/brand-profile.md`.
2. Übergabe an `new-site-build`: Design-System aus CI, Seiten aus freigegebenen Texten (Astro + Tailwind), Schema, Tracking (Matomo + Google-Ads-Conversion + Meta Pixel, KEIN GA4), Launch-Checkliste.

**Output:** Gebaute Site + `context/brand-profile.md` + Launch-Checkliste

**Gate:** Tracking verifiziert, Recht vorhanden, Performance ok. → erst dann Launch.

---

## Datenfluss (kompakt)

```
[0] Transcript + Branche + (Ist-URL)
        ↓  Gate: Transcript + Branche vorhanden
[1] Deep Research + Ist-Analyse + Transcript-Auswertung  → research/ + insights
        ↓  Gate: 3 Output-Dateien existieren
[2] Fragebogen generieren (nur offene Fragen)            → intake/fragebogen-{kunde}.md
        ↓  Gate: rausgeschickt
[3] Antworten einlesen                                   → intake/antworten-{kunde}.md
        ↓  Gate: Pflichtfelder gefüllt
[4] Strategie + Sitemap + Texte                          → context/ + intake/texte/v1/
        ↓  Gate: an Kunde raus
[5] Freigabe-Schleife (versioniert)                      → intake/texte/FINAL/
        ↓  Gate: Texte freigegeben
[6] CI + Logo + Recht + Zugänge  →  new-site-build       → Site + Launch
        ↓  Gate: Tracking/Recht/Performance ok
    Launch
```
