# OS-Sync — Manifest & Regeln (Quell-OS <-> Klon)

Dieses Dokument regelt, was zum **Quell-OS** (Template) gehoert und was im **Klon** (pro Kunde) bleibt — und wie zwischen beiden synchronisiert wird.

## 1. Fester Quell-OS-Pfad

```
/Users/pascalberlik/Documents/claude/Website-AIOS
```

Das ist die Wahrheitsquelle (= GitHub `origin`). Generische Verbesserungen (Skills, Workflows, Playbooks, Scripts) werden HIER gepflegt und von hier in Klone verteilt. Klone werden pro Kunde aus diesem Pfad erzeugt.

## 2. Manifest — wer gehoert wohin

### OS-Ebene (generisch — gehoeren ins Quell-OS)

Diese Pfade enthalten nichts Kundenspezifisches und werden zentral gepflegt:

- `.claude/skills/` — alle Skills
- `.claude/workflows/` — alle Workflows
- `references/playbooks/` — z. B. `image-generation.md`, `video-generation.md`
- `references/*.md` — generische Referenzen (Ausnahme: kunden-spezifische Referenzen, z. B. eingelesene Voice-/Marken-Dateien)
- `scripts/` — z. B. `generate-image.mjs`
- `.mcp.json` — MCP-Konfiguration (z. B. Higgsfield)
- `.env.example` — Vorlage fuer Secrets (NIE die echte `.env`)
- Template-Versionen von: `CLAUDE.md`, `README.md`, `website-intake.md`, `connections.md`

### Kunden-Ebene (spezifisch — bleiben im Klon)

Diese Pfade enthalten Kundendaten und werden NIE ins Quell-OS zurueckgespielt:

- `context/` — Kunde, Marke, Prioritaeten
- `assets/` — Logos, Bilder, Quellmaterial des Kunden
- `intake/` — ausgefuellte Intake-Antworten
- `decisions/log.md` — Entscheidungs-Log des Klons
- gefuellte `connections.md` — mit echten Konten/Domains/Keys
- kundenspezifische Copy/Seiten — fertige Inhalte und gebaute Seiten
- die echte `.env` — Secrets (nie irgendwohin syncen)

## 3. Ablaeufe

### promote-to-os (Klon -> Quell-OS)

Generische Verbesserung im Klon entstanden? Zurueck ins Template ernten:

1. Pruefe gegen Manifest: Aenderung liegt ausschliesslich auf **OS-Ebene** und enthaelt keine Kunden-Spezifika (Domain, Namen, Keys, Copy).
2. Generalisiere — Kundenwerte durch Platzhalter/Defaults ersetzen.
3. Datei an den gleichen relativen Pfad unter `/Users/pascalberlik/Documents/claude/Website-AIOS` schreiben.
4. Im Quell-OS committen + nach `origin` pushen.

### update-from-os (Quell-OS -> Klon)

Quell-OS hat neue/verbesserte OS-Ebene? In den Klon ziehen:

1. Im Quell-OS `origin` aktualisieren (pull) und gewuenschte OS-Ebene-Pfade bestimmen.
2. Pruefe gegen Manifest: nur **OS-Ebene**-Pfade uebernehmen — Kunden-Ebene NIE ueberschreiben.
3. OS-Ebene-Dateien in den Klon kopieren (gleicher relativer Pfad).
4. Im Klon kurz testen (Skill/Workflow laeuft), dann im Klon committen.

## 4. Konfliktregel

OS-Ebene und Kunden-Ebene **ueberschneiden sich nicht** — getrennte Pfade. Daher:

- `update-from-os` ueberschreibt nie Kundendaten.
- `promote-to-os` traegt nie Kundendaten ins Template.

Solange jede Datei eindeutig einer Ebene zugeordnet ist (siehe Manifest), ist der Sync **konfliktfrei**. Liegt eine Datei doppelt vor (z. B. `connections.md` als Template im OS und gefuellt im Klon): Template bleibt im OS, gefuellte Version bleibt im Klon — nie gegeneinander syncen.
