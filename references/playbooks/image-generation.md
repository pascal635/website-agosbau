# Bildgenerierung & Bildoptimierung

> Zweck: Liefert konsistente, schnelle, rechtssichere Bilder für Kundenwebsites — echte Fotos wo Vertrauen zählt, generierte Bilder nur als Lückenfüller, immer im CI und immer WebP-optimiert.

## Prinzipien

- Echte Fotos schlagen generierte Bilder immer dort, wo es um Vertrauen geht: Inhaber, Team, Standort, echte Arbeiten/Projekte, Produkte. Lokale B2C-Dienstleister verkaufen über Nähe und Beweis — KI-Gesichter zerstören genau das.
- Generierte Bilder nur für Hintergründe, abstrakte Konzepte, Hero-Texturen, Icons/Illustrationen, Platzhalter bis echtes Material da ist. Nie als gefakte Person, gefaktes Team, gefakter Vorher/Nachher.
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
- [ ] Pro Bild-Slot entschieden: echtes Foto vs. generiert (Entscheidungsbaum befolgt)
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

### Entscheidungsbaum: echtes Foto vs. generiert

```
Zeigt das Bild eine reale Person, Team, den Standort,
echte Arbeit/Projekt, ein echtes Produkt oder einen Beweis (Bewertung, Zertifikat)?
  JA  -> echtes Foto. Liegt keins vor -> beim Kunden anfordern. NIE generieren.
  NEIN ->
    Ist es Hintergrund / Textur / abstraktes Konzept / Illustration / Icon?
      JA  -> generieren erlaubt (CI-Prompt nutzen).
      NEIN -> im Zweifel echtes Foto / lizenziertes Stock anfordern.
```

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

### Branchen-Beispiel-Prompts (ICP)

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

- Skill `generate-images` — führt dieses Playbook wörtlich aus (CI-konforme Bilder erzeugen + optimieren).
- Workflow `build-page` — Schritt "Bilder" zwischen SEO und Komposition.
- Workflow `new-site-build` — Bild-Slots je Seite aus Sitemap.
- Workflow `content-pipeline` — Bilder vor Publish.
- Quellen: `context/brand-profile.md` (CI/Bildsprache), `references/playbooks/page-structure.md` (Bild-Slots je Seitentyp), Kunden-Input `assets/images/`.
- Performance-Bezug: Launch-Checkliste (Core Web Vitals / LCP) im `new-site-build`.
