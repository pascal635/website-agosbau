# Bildvisualisierung: Infografik, KI-Bild & Foto

> Zweck: Liefert konsistente, schnelle, rechtssichere Visuals für Kundenwebsites. Drei Werkzeuge, klar getrennt: **gecodete Infografiken** für abstrakte Konzepte, **KI-Bilder** für atmosphärische/konzeptionelle Motive, **echte Fotos** wo Vertrauen zählt. Immer im CI, immer performance-optimiert.

## Prinzipien

- **Infografik-First für Abstraktes.** Wo eine abstrakte Idee (Ablauf, Ergebnis, Vergleich, Zahl, System) erklärt werden soll, ist eine **gecodete Infografik (SVG/HTML aus Design-Tokens) die erste Wahl** — nicht ein KI-Bild. Vorteil: gestochen scharf in jeder Größe, winzige Dateigröße, editierbar, barrierefrei (`role="img"` + `<title>/<desc>`), perfekte Core Web Vitals, 100 % markenkonform. Faustregel: enthält das Visual Text, Daten oder exakte Formen → **coden, nicht generieren** (KI-Bildmodelle rendern Text und exakte Layouts unzuverlässig). „Ein Bild sagt mehr als 1000 Wörter" gilt — eine gute Infografik oft noch mehr.
- **KI-Bild für Emotion, Atmosphäre & Konzept.** Stimmungsvolle, fotoreal/illustrative Motive — Hintergründe, Szenen, Brand-Visuals UND **generische Menschen, die Emotion erzeugen** (z. B. ein:e zufriedene:r Betriebsinhaber:in, eine Beratungssituation) — sind eine echte, finale Option. **Menschen-Bilder ausdrücklich erwünscht, wo sie Emotion bringen** (ein Mensch wirkt stärker als jede Grafik). Wichtig: generisch, kein Anspruch auf eine bestimmte Identität, authentisch statt Stock-Klischee (kein aufgesetztes Lächeln, kein Plastik-Look). Blick möglichst Richtung CTA/Headline (Witnessing).
- **Spezifische Identität = immer echtes Foto, nie generiert.** Inhaber:in/Team, namentliche Kund:innen, echte Projekte/Vorher-Nachher, Bewertungen/Zertifikate: **immer echt** (E-E-A-T, Ehrlichkeit). Ein KI-Bild darf nie als reale benannte Person oder als realer benannter Kunde ausgegeben werden. Fehlt echtes Material → anfordern, im Build-Log vermerken.
- **Infografik nur für Abstraktes.** Gecodete Infografiken sind für die *Erklärung abstrakter Dinge* (Daten, Ablauf, Vergleich, Zahl) — nicht als Ersatz für ein emotionales Bild. Wo ein Mensch/Szene mehr Emotion bringt, gewinnt das Bild.
- Jedes Bild folgt dem CI aus `context/brand-profile.md` (Farben als Hex, Bildsprache, Stimmung, Do/Don'ts). Kein Bild ohne CI-Abgleich.
- Konsistenz vor Einzel-Wow: Eine Seite wirkt durch einheitliche Lichtstimmung, Farbtemperatur und Perspektive — nicht durch zehn verschiedene Stile.
- Performance ist Pflicht, nicht Kür: Jedes Bild geht als WebP raus, responsiv ausgespielt, komprimiert. Bilder sind der häufigste Grund für langsame Seiten und schlechte Core Web Vitals.
- Kein Bild ohne Alt-Text. Alt-Text ist Pflicht für Barrierefreiheit, SEO und rechtliche Absicherung (BFSG).

## Schritt für Schritt

1. **CI laden.** Lies `context/brand-profile.md`: Primär-/Sekundärfarben (Hex), Bildsprache (z. B. "warm, natürlich, Handwerk live"), Stimmung, erlaubte Motive, Do/Don'ts. Notiere 3–5 Stil-Anker für die Prompts.
2. **Bild-Bedarf je Seite klären.** Aus `page-structure.md` ablesen, welche Slots Bilder brauchen (Hero, Leistungs-Teaser, Über-uns, Standort, Trust-Sektion). Pro Slot entscheiden: echtes Foto oder generiert? (siehe Entscheidungsbaum unten).
3. **Echtes Material prüfen.** Im Ordner `assets/images/` (Kunden-Input) suchen, ob Inhaber-/Team-/Projekt-/Produktfotos vorliegen. Wenn ja: diese verwenden, nur optimieren. Wenn nein und Slot braucht echtes Foto: beim Kunden anfordern, NICHT generieren — als offenen Punkt im Build-Log vermerken.
4. **Generierte Bilder prompten.** Für freigegebene Slots Prompt aus der CI-Vorlage bauen (siehe Vorlagen). Farben, Stil-Anker und Negativ-Prompt einsetzen. 3–4 Varianten erzeugen, beste wählen.
5. **Konsistenz-Check.** Alle Bilder einer Seite nebeneinander legen. Gleiche Lichtstimmung, Farbtemperatur, Sättigung? Ausreißer neu prompten oder per Farbkorrektur angleichen.
6. **Beschneiden & dimensionieren.** Auf Zielmaße zuschneiden (Hero 1920×1080, Inline 1200×800, Thumbnail 600×400). Wichtiges Motiv mittig/regelkonform. Nie hochskalieren über die native Auflösung.
7. **Nach WebP konvertieren & komprimieren.** Quelle (JPG/PNG) zu WebP, Qualität 80 (Fotos) bzw. 90 (Grafiken mit harten Kanten). Ziel-Dateigröße: Hero < 200 KB, Inline < 100 KB, Thumbnail < 40 KB. Befehl siehe Vorlagen.
8. **Responsive Varianten erzeugen.** Pro Bild Breiten 480 / 768 / 1200 / 1920 px ausgeben, im `<picture>`/`srcset` einbinden, damit Mobil nicht das Desktop-Bild lädt.
9. **Alt-Text & Dateiname setzen.** Sprechender Dateiname (kebab-case, Keyword) + beschreibender Alt-Text (siehe Regeln). Hero-Bild auf der wichtigsten Seite zusätzlich `fetchpriority="high"`, alle unteren Bilder `loading="lazy"`.
10. **Performance verifizieren.** Nach Einbau Seite messen (Lighthouse/PageSpeed): LCP < 2,5 s, kein Bild blockiert den Hauptthread. Bei Verstoß zurück zu Schritt 7.
11. **Rechte dokumentieren.** Quelle/Lizenz jedes Bildes notieren (Kunde / generiert / Stock + Lizenz-ID). KI-Bilder mit Personen kennzeichnen falls erforderlich. Eintrag in `decisions/log.md` bei strittigen Fällen.

## Checkliste

- [ ] `context/brand-profile.md` gelesen, Stil-Anker + Hex-Farben notiert
- [ ] Pro Slot entschieden: Infografik (coden) vs. KI-Bild vs. echtes Foto (Entscheidungsbaum befolgt)
- [ ] Abstrakte Konzepte mit Daten/Text als gecodete Infografik gelöst, nicht als KI-Bild
- [ ] Kein KI-generiertes Bild von echten Personen, Team, Standort, Projekten, Vorher/Nachher
- [ ] Fehlende echte Fotos beim Kunden angefordert + im Build-Log vermerkt
- [ ] Alle Bilder einer Seite konsistent (Licht, Farbtemperatur, Sättigung)
- [ ] Alle Bilder als WebP, Qualität 80/90
- [ ] Ziel-Dateigrößen eingehalten (Hero < 200 KB, Inline < 100 KB, Thumb < 40 KB)
- [ ] Responsive Varianten (480/768/1200/1920) + srcset eingebunden
- [ ] Sprechende Dateinamen (kebab-case, Keyword)
- [ ] Alt-Text für jedes Bild (beschreibend, kein Keyword-Stuffing, leer bei reiner Deko)
- [ ] Hero: fetchpriority="high"; restliche Bilder: loading="lazy"
- [ ] LCP < 2,5 s nach Einbau verifiziert
- [ ] Lizenz/Quelle je Bild dokumentiert; KI-Bilder gekennzeichnet wo nötig

## Vorlagen & Beispiele

### Entscheidungsbaum: Infografik vs. KI-Bild vs. echtes Foto

```
Stellt das Visual eine SPEZIFISCHE reale Identität dar
(Inhaber:in/Team, namentliche:r Kunde:in, echtes Projekt, Beweis/Zertifikat)?
  JA  -> ECHTES FOTO. Liegt keins vor -> anfordern. NIE generieren.
  NEIN ->
    Erklärt es ein abstraktes Konzept (Ablauf, Ergebnis, Vergleich, Zahl, System / Daten/Text)?
      JA  -> GECODETE INFOGRAFIK (SVG/HTML aus Tokens). Vorbild: ein gecodetes Hero-Visual
             (z. B. eine HeroVisual-Komponente).
      NEIN ->
        Emotionales/atmosphärisches Motiv — Szene, Hintergrund ODER generische Menschen
        (Inhaber:in, Beratung, Team-Stimmung) ohne Identitätsanspruch?
          -> KI-BILD (Gemini) — finales Asset, kein Platzhalter. Menschen für Emotion erwünscht,
             authentisch, Blick Richtung CTA. (Echtes/lizenziertes Foto ist gleichwertig erlaubt.)
```

### Werkzeuge — womit wird erzeugt?

| Bedarf | Werkzeug | Warum |
|---|---|---|
| **Infografik / Diagramm / Konzept-Visual** | **Coden** (Astro/SVG aus Design-Tokens), z. B. eine gecodete HeroVisual-Komponente | Scharf, winzig, editierbar, barrierefrei, markenkonform. KI-Bildmodelle scheitern an Text/exakten Layouts. |
| **Stand-/Atmosphärenbild (fotoreal/illustrativ)** | **Gemini Imagen 4** (`imagen-4.0-generate-001`) via `scripts/generate-image.mjs` | Beste Prompt-Treue, aspectRatio-Steuerung, Stil-Konsistenz. Erste Wahl für Web-Stills. Alternativen: `-ultra-` (max. Qualität), `-fast-` (schnell). |
| **Cinematic / Bewegtbild / Hero-Video / Audio / 3D** | **Higgsfield** (via MCP) | Stark bei Video, Kamerafahrten, dramatischen/stilisierten Szenen. Für Motion-Hero, nicht für statische Web-Bilder. Details im Bewegtbild-Playbook `video-generation.md`. |

**Gemini-Stills erzeugen** (Skript liegt bereit):
```bash
node scripts/generate-image.mjs --prompt "<CI-Prompt>" --out public/images/<name>.png --aspect 16:9
cwebp -q 80 public/images/<name>.png -o public/images/<name>.webp   # dann responsive Varianten + Alt-Text
```
Setup: `GEMINI_API_KEY` in `.env` (siehe `.env.example`). **Higgsfield** ist in `.mcp.json` registriert — nach Claude-Code-Neustart + ggf. OAuth nutzbar (für Video/Cinematic/Audio/3D). Stand & Auth in `connections.md`. Infografiken brauchen keins von beidem — die coden wir.

### Prompt-Vorlage (CI-Stil) — Platzhalter aus brand-profile.md füllen

```
[Motiv: z. B. saubere moderne Heizungsanlage in hellem Technikraum],
fotorealistisch, natürliche Beleuchtung, {{Stimmung aus brand-profile, z. B. warm und vertrauenswürdig}},
Farbstimmung passend zu {{Primärfarbe Hex}} und {{Sekundärfarbe Hex}},
{{Bildsprache aus brand-profile, z. B. handwerklich, bodenständig, kein Hochglanz}},
flacher Tiefenschärfebereich, hohe Detailtreue, professionelle Produktfotografie,
Seitenverhältnis 16:9, kein Text im Bild.

Negativ: Logos, Wasserzeichen, verzerrte Hände, deformierte Gesichter,
KI-Artefakte, Stockfoto-Lächeln, Plastik-Look, übersättigt, Text, Schrift.
```

### Branchen-Beispiel-Prompts (typische lokale B2C-Branchen)

- Handwerk/Haustechnik (Hero-Hintergrund): `moderner Werkzeugkasten und saubere Kupferrohre auf Holzwerkbank, weiches Tageslicht, warme Farbstimmung passend zu {{Primärfarbe}}, fotorealistisch, 16:9, kein Text`
- Kosmetik/Aesthetik (Konzept): `ruhige Spa-Atmosphäre, weiche Pastelltöne, sanftes Licht, abstrakte Wellness-Stimmung, hochwertig, minimalistisch, 16:9, keine Personen`
- Immobilienmakler (Hintergrund): `helle modern eingerichtete Wohnung, große Fenster, warmes natürliches Licht, einladend, neutrale Farbpalette mit Akzent {{Primärfarbe}}, fotorealistisch, 16:9`
- Finanz-/Versicherungsberater (abstrakt): `aufgeräumter heller Schreibtisch mit Notizbuch und Pflanze, vertrauenswürdige seriöse Stimmung, weiches Licht, 16:9, keine Gesichter`

### WebP-Konvertierung & Kompression (cwebp)

```bash
# Einzelbild Foto -> WebP Q80
cwebp -q 80 quelle.jpg -o ziel.webp

# Grafik mit harten Kanten -> WebP Q90
cwebp -q 90 grafik.png -o grafik.webp

# Batch ganzer Ordner
for f in *.jpg; do cwebp -q 80 "$f" -o "${f%.jpg}.webp"; done
```

### Responsive Varianten + sauberes Markup

```bash
# Breiten erzeugen (ImageMagick) und je als WebP
for w in 480 768 1200 1920; do
  magick quelle.jpg -resize ${w}x hero-${w}.png
  cwebp -q 80 hero-${w}.png -o hero-${w}.webp && rm hero-${w}.png
done
```

```html
<!-- Hero: priorisiert laden -->
<img
  src="hero-1200.webp"
  srcset="hero-480.webp 480w, hero-768.webp 768w, hero-1200.webp 1200w, hero-1920.webp 1920w"
  sizes="100vw"
  width="1920" height="1080"
  alt="Monteur installiert neue Gastherme im Heizungsraum"
  fetchpriority="high">

<!-- Inline weiter unten: lazy -->
<img src="leistung-1200.webp"
     srcset="leistung-480.webp 480w, leistung-1200.webp 1200w"
     sizes="(max-width: 768px) 100vw, 50vw"
     width="1200" height="800"
     alt="Badsanierung mit bodengleicher Dusche"
     loading="lazy">
```

### Alt-Text-Regeln

- Beschreibe, was zu sehen ist + Kontext zur Seite. Beispiel gut: `alt="Inhaber Max Müller berät Kundin im Ausstellungsraum"`.
- Kein "Bild von" / "Foto von" voranstellen — Screenreader sagen das schon.
- Lokales Keyword natürlich einbauen, wenn es passt: `alt="Elektroinstallation in Neubau in Köln-Ehrenfeld"`. Kein Stuffing.
- Reine Deko/Hintergrund ohne Inhalt: leeres `alt=""` setzen (nicht weglassen).

### Dateinamen-Konvention

```
{{branche-oder-leistung}}-{{motiv}}-{{ort optional}}.webp
heizungswartung-monteur-koeln.webp
badsanierung-dusche.webp
team-portrait-mueller.webp
```

## Bezug

- Skill `generate-visuals` — führt dieses Playbook wörtlich aus (CI-konforme Bilder erzeugen + optimieren). Für Bewegtbild (Video/Cinematic/Audio/3D) siehe das Schwester-Playbook `references/playbooks/video-generation.md`.
- Workflow `build-page` — Schritt "Bilder" zwischen SEO und Komposition.
- Workflow `new-site-build` — Bild-Slots je Seite aus Sitemap.
- Workflow `content-pipeline` — Bilder vor Publish.
- Quellen: `context/brand-profile.md` (CI/Bildsprache), `references/playbooks/page-structure.md` (Bild-Slots je Seitentyp), Kunden-Input `assets/images/`.
- Performance-Bezug: Launch-Checkliste (Core Web Vitals / LCP) im `new-site-build`.
