# Bild-Assets AGOS BAU — Manifest

*Stand: Juni 2026. Quelle: echte Fotos vom Staging (shibuiagency.de/abau), heruntergeladen. Diese sind **echt** — nicht durch KI ersetzen. Alle übrigen Visual-Slots werden vorerst KI-generiert (`/generate-visuals`).*

> Beim Bau: in WebP konvertieren, responsive `srcset`, sprechende Dateinamen, Alt-Text setzen, lazy-load (außer LCP-Hero). Hero-Bilder priorisiert laden.

| Datei | Echt? | Seite / Slot | Alt-Text-Vorschlag |
|---|---|---|---|
| `agos-leistung.webp` | ✅ André (Portrait, AGOS-Hoodie vor Haus) | **Über uns** (Persönliche Vorstellung) · **Startseite** (Über-André-Sektion) | „André Gostomczyk, Inhaber von AGOS BAU" |
| `badsanierung-bremen-agos-bau.jpg` | ✅ fertiges Designbad (grüne Fischgräten-Dusche, freistehende Wanne) | **Badsanierung** Hero · **Startseite** Hero | „Saniertes Badezimmer mit Fischgräten-Fliesen und bodengleicher Dusche" |
| `badsanierung-nacher-agos-bau-bremen-3ewf.jpg` | ✅ dasselbe Bad, Roh-Aufnahme (Nachher) | **Badsanierung** Galerie · Vorher/Nachher-Slider (Nachher-Seite) | „Fertiggestellte Badsanierung in Bremen – bodengleiche Dusche und Badewanne" |
| `Badsanierung-bremen-agosbau-123rdqw.jpg` | ✅ Bad-Projekt | **Badsanierung** / Referenzen Galerie | „Badsanierung von AGOS BAU in Bremen" |
| `badsanierung-agosbao-32refwefd3.jpg` | ✅ Bad-Projekt | **Badsanierung** / Referenzen Galerie | „Modernes saniertes Bad von AGOS BAU" |
| `badsanierung-bremen-1243e3.jpg` | ✅ Bad-Projekt | **Badsanierung** / Referenzen Galerie | „Badezimmer-Sanierung in Bremen, AGOS BAU" |
| `fliesenverlegen-bremen-agos-bau.jpg` | ✅ Fliesenarbeit | **Fliesenverlegung** Hero | „Fliesenverlegung von AGOS BAU in Bremen" |
| `grossformat-fliesen-bremen.jpg` | ✅ Großformat | **Großformatfliesen** Hero | „Großformatfliesen verlegt von AGOS BAU" |
| `Barrierefreie-baeder-nach-din-18040-2.jpg` | ✅ barrierefreies Bad | **Barrierefreies Bad** Hero | „Barrierefreies Bad mit bodengleicher Dusche, AGOS BAU" |
| `terasse-und-pool-fliesen.jpg` | ✅ Außen/Pool | **Terrasse & Außenbereich** Hero | „Terrassen- und Poolfliesen von AGOS BAU" |

## KI-Stills (generiert, Gemini Imagen 4 — Atmosphäre/Material, KEINE echten Projekte/Personen)

> Lizenz: KI-generiert (Gemini Imagen 4, `scripts/generate-image.mjs`). CI-konform: warm, materialnah, keine Personen/Text. PNG → beim Bau in WebP + responsive Varianten. Nur als Akzent/Hintergrund, nie als „echtes Projekt" ausgeben.

| Datei | Slot | Alt-Text |
|---|---|---|
| `ai/material-fliese-detail.png` | Sektions-Akzent (Material/Fliesen-Themen, z. B. Großformat/Fliesenverlegung), Problem-/Positionierungs-Block | „Detailaufnahme grüner Fischgrätenfliesen" (dekorativ → ggf. `alt=""`) |
| `ai/atmosphaere-warm-material.png` | Atmosphäre-/Sektionshintergrund (Bad/Wellness-Stimmung) | „Warme Materialstimmung mit Naturstein und Lichtfuge" (dekorativ → ggf. `alt=""`) |
| `ai/cta-hintergrund-textur.png` | Abschluss-CTA-Hintergrund (Text-Overlay) | dekorativ → `alt=""` |

## KI-PLATZHALTER (realistisch — `ai/placeholders/`, NACH dem Foto-Shooting gegen echte Fotos tauschen)

> **Status: Platzhalter.** Bewusst realistische Bad-/Fliesen-Bilder, damit die Seite fertig aussieht. Generiert (Gemini Imagen 4), CI-konform (warmes Licht, grüne Fischgräten + Copper-Töne, keine Personen/Text). **Vor/zum finalen Launch durch echte Fotos des Fotografen ersetzen** (gleiche Dateinamen behalten = 1:1-Tausch, kein Code-Eingriff). André-Portrait bleibt **immer echt** (`agos-leistung.webp`), nie KI.

| Datei | Slot (Platzhalter für) | Alt-Text |
|---|---|---|
| `ai/placeholders/bad-modern-hero.png` | Stadtteil-Hero (geteilt) · generischer Bad-Hero-Fallback | „Modernes saniertes Badezimmer mit Dusche und freistehender Wanne" |
| `ai/placeholders/bad-walkin-dusche.png` | Stadtteil-Hero (Variante) · Badsanierung-Sektion | „Bodengleiche Walk-in-Dusche mit grünen Fischgrätenfliesen" |
| `ai/placeholders/bad-barrierefrei.png` | Barrierefreies Bad (Platzhalter-Alternative zum echten Foto) | „Barrierefreies Bad mit bodengleicher Dusche und Haltegriff" |
| `ai/placeholders/fliesen-grossformat-detail.png` | Fliesenverlegung / Großformat-Sektion | „Verlegung großformatiger Bodenfliesen" |
| `ai/placeholders/terrasse-pool.png` | Terrasse & Außenbereich (Platzhalter-Alternative) | „Terrassenfliesen am Pool" |
| `ai/placeholders/bad-waschtisch-detail.png` | Sektions-/Lifestyle-Detail (Bad), CTA-Bereich | „Waschtisch-Detail mit Holzunterschrank und Copper-Armatur" |

## Hinweise
- **Vorher/Nachher-Slider:** Es liegt echtes „Nachher"-Material vor, aber **keine deckungsgleichen „Vorher"-Aufnahmen** → echte Vorher-Bilder weiterhin von André anfragen (sonst Slider mit dem vorhandenen Paar nur dort, wo ein echtes Vorher existiert).
- `badsanierung-bremen-agos-bau.jpg` wirkt professionell gestylt; `…-nacher-…` ist die Roh-Aufnahme desselben Bades — beide echt, beide „Nachher".
- Logos/Markenlogos (Schlüter/ARDEX/Sopro/Mirage/Atlas) bei Bedarf separat vom Staging ziehen.
- Einsatzgebiet-Karte (`Bildschirmfoto-…`) wurde nicht übernommen → im Bau saubere eigene Karte.
