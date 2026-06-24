# Website-AIOS — Standardisiertes Onboarding (der verbindliche Ablauf)

> **Zweck:** Eine Kundenwebsite von Null zum ersten Lead bringen — mit minimalem manuellem Input des Operators. Das OS erarbeitet sich den Kontext selbst, generiert den Fragebogen, schreibt Strategie/Struktur/Texte, holt Freigaben, baut, misst.
> **Prinzip:** Gestaffelt statt alles-auf-einmal. Jede Phase hat klare Inputs, ein Output und ein Gate. Inputs werden erst verlangt, wenn sie gebraucht werden.
> **Ersetzt** das alte „Kunde füllt großen Fragebogen vorne aus"-Modell.

---

## Welche Dokumente/Daten wann vorliegen müssen

| Wann | Wer liefert | Was |
|---|---|---|
| **Phase 0 — Start (Minimum)** | Operator/Kunde | **Erstgespräch-Transcript** (Pflicht) · **Branche/Vertical** (Pflicht) · **Ist-Website-URL** (falls vorhanden) |
| Phase 1–2 | **Das OS generiert** | Branchen-Report (Deep Research) · Ist-Website-Analyse · maßgeschneiderter Fragebogen |
| **Phase 3 — nach Fragebogen** | Kunde | Fragebogen-Antworten (Leistungen, USP, Zielgruppe, Einzugsgebiet, Referenzen, Conversion-Wunsch, Öffnungszeiten …) |
| **Phase 6 — vor dem Bau** | Kunde | **CI-Manual / Farben / Fonts** · **Logo-Varianten** · **echte Bilder** · **Recht** (Impressum, Datenschutz, AGB, Handelsregister) · **Zugänge** (Domain, Hosting, GSC, Google Ads, Matomo, GBP) |

Kernaussage: Zum **Start** reicht das Transcript + Branche (+ ggf. alte URL). Alles Schwere (CI, Recht, Zugänge) kommt erst, wenn die Texte freigegeben sind und gebaut wird.

---

## Der Ablauf in 7 Phasen

### Phase 0 — Start-Inputs erfassen
**Input:** Erstgespräch-Transcript, Branche, Ist-Website-URL (optional).
**Tun:** Transcript in `intake/transcripts/` ablegen, Branche + URL notieren. Mehr nicht.
**Gate:** Transcript liegt vor. → sonst Stopp.

### Phase 1 — Selbst-Recherche (OS arbeitet, Kunde wartet)
**Tun:**
1. **Deep Research** → Branchen-Report (Markt, Wettbewerb, Kundenpsychologie, konversionsstarke digitale Positionierung für diese Branche + Region). Nutzt die `deep-research`-Skill.
2. **Ist-Website-Analyse** (falls URL): crawlen, Stärken/Schwächen, migrierbare Inhalte, technischer Stand.
3. **Transcript-Auswertung:** Ziele, Schmerzen, Wunschkunde, Einwände, Voice-Anker (verbatim).
**Output:** `intake/research/branchen-report.md`, `intake/research/ist-website-analyse.md`, `context/gespraechs-insights.md`.

### Phase 2 — Maßgeschneiderten Fragebogen generieren
**Tun:** Aus Phase 0+1 baut das OS einen **kunden-spezifischen** Fragebogen — fragt nur, was Research + Transcript noch NICHT beantwortet haben. Kein generisches 60-Fragen-Monster. Basis-Rahmen: `references/questionnaire-base.md` (sichert Pflicht-Abdeckung: Leistungen, USP, Zielgruppe, Einzugsgebiet/NAP, Referenzen, Conversion-Definition).
**Output:** `intake/fragebogen-{kunde}.md` → an den Kunden.
**Gate:** Fragebogen rausgeschickt.

### Phase 3 — Kunde füllt Fragebogen
**Tun:** Kunde füllt aus, Antworten zurück nach `intake/`.
**Gate:** Antworten vollständig genug (Pflichtfelder). Lücken gezielt nachfassen.

### Phase 4 — Strategie + Seitenstruktur + Texte generieren
**Input:** Fragebogen-Antworten + Branchen-Report + Transcript-Insights.
**Tun:**
1. `context/strategie.md` — Positionierung, Conversion-Strategie, SEO/GEO-Winkel, Wettbewerbsabgrenzung.
2. **Seitenstruktur/Sitemap** nach `playbooks/page-structure.md`.
3. **Texte je Seite** nach `playbooks/copywriting.md` + `seo-onpage.md` + `geo.md`.
**Output:** Strategie + Sitemap in `context/`, Texte als Entwurf-Dokument an den Kunden.

### Phase 5 — Text-Freigabe-Schleife
**Tun:** Kunde gibt Korrekturen → OS überarbeitet → wiederholen, bis der Kunde zufrieden ist. Änderungen versioniert in `intake/texte/`.
**Gate:** Texte vom Kunden freigegeben. → erst dann Phase 6.

### Phase 6 — Bauen
**Input (jetzt erst!):** CI-Manual, Logo, Bilder, Recht, Zugänge + die freigegebenen Texte.
**Tun:** `onboard` destilliert CI → `context/brand-profile.md`; dann `new-site-build`: Design-System aus CI, Seiten aus freigegebenen Texten, Schema, Tracking (Meta Pixel + Matomo + Google-Ads-Conversion), Launch-Checkliste.
**Gate:** Tracking verifiziert, Recht vorhanden, Performance ok → Launch.

### Phase 7 — Messen → erster Lead
**Tun:** `weekly-review`-Loop: Daten lesen (GSC, Sistrix, Matomo, Ads), optimieren bis zum ersten Lead. **Den ganzen Ablauf dokumentieren = die erste Fallstudie.**
> Genau das liefert die Handwerk-Referenz, die für die Meta-Kampagne fehlt: dokumentierter Weg „von der Website-Erstellung bis zum ersten Lead".

---

## Datenfluss (kompakt)

```
[0] Transcript + Branche + (alte URL)
        ↓
[1] Deep Research + Ist-Analyse + Transcript-Auswertung  → research + insights
        ↓
[2] OS generiert maßgeschneiderten Fragebogen  → an Kunde
        ↓
[3] Kunde füllt aus  → zurück
        ↓
[4] OS schreibt Strategie + Seitenstruktur + Texte  → an Kunde
        ↓
[5] Freigabe-Schleife (überarbeiten bis zufrieden)
        ↓
[6] CI + Logo + Recht + Zugänge liefern  →  BAUEN (new-site-build)  →  Launch
        ↓
[7] Messen → erster Lead  →  Fallstudie
```

---

## Was sich im OS dafür ändert (Bau-Liste)
- `website-intake.md` → schrumpft auf **Phase-0-Start-Inputs** (Minimum) + Verweis auf diesen Flow.
- `.claude/skills/onboard/SKILL.md` → wird **Phase-0/1-Orchestrator** (Start-Inputs + Deep Research + Ist-Analyse + Insights).
- **NEU** `.claude/skills/generate-questionnaire/SKILL.md` → Phase 2.
- **NEU** `.claude/skills/generate-content/SKILL.md` → Phase 4+5 (Strategie/Struktur/Texte + Freigabe-Schleife).
- **NEU** `references/questionnaire-base.md` → Pflicht-Rahmen für den generierten Fragebogen.
- `.claude/workflows/onboarding-pipeline.md` → auf diesen gestaffelten Flow umschreiben.
- `intake/`-Struktur: `transcripts/`, `research/`, `texte/`.
- `CLAUDE.md` / `README.md` → neuen Flow als Standard nennen.
