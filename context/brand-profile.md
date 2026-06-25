# Brand-Profil / CI — AGOS BAU

*Stand: Juni 2026 (Rev. 2 — neues Manual). Quelle: `assets/brand/agos-bau-brand-manual.html`. Pflicht-Input für `/generate-visuals` und Build (Design-System).*

> Leitidee: „Reduziert, handwerklich, ohne Schnickschnack. Jedes Element hat eine Funktion." Kühle Slate-Töne + **ein** warmer Akzent (Warm Tan). Leere Fläche ist Teil der Komposition.

## Farben (kanonisch — keine anderen Neutralwerte zulassen)

| Token | Hex | Rolle |
|---|---|---|
| Slate Tief (`--color-anthrazit`) | `#26333D` | Headlines, dunkle Flächen, Footer, Text-Stark |
| Slate Dunkel (`--color-dunkelgrau`) | `#4A5A66` | Fließtext, Sublines |
| Slate Mittel (`--color-mittelgrau`) | `#7B8B96` | Meta, Labels, Muted |
| Slate Hell (`--color-hellgrau`) | `#B4BEC6` | Input-Border, dezente Linien |
| Off-White (`--color-offwhite`) | `#EEF0F2` | **Seiten-Hintergrund** |
| Weiss (`--color-weiss`) | `#FFFFFF` | Karten, Tiles |
| Rule (`--color-rule`) | `#DEE1E5` | Haarlinien / Trenner |
| **Warm Tan (`--color-copper`)** | **`#C39A63`** | **Akzent / primärer CTA, Links, Akzentlinien, Fokus** |
| Tan Hell (`--color-copper-hover`) | `#D8B488` | CTA-Hover |
| Tan Tint (`--color-copper-tint`) | `#F0E6D6` | sanfte Tint-Flächen |

**Flächen-Verhältnis:** Off-White ~55 % · Slate Tief ~22 % · Grau ~14 % · **Tan ~9–10 % (max. 10 %)**. Tan ist Akzent, nicht Flächenfarbe — „wirkt nur, wenn sie Luft hat". Nie flächig, nie dekorativ. Materialreferenz: Messing, Ton, gebrannter Stein.

## Typografie

| Rolle | Font | Hinweise |
|---|---|---|
| Headlines (H1–H3, Display) | **Cormorant Garamond** (Serif) | elegant, hoher Kontrast, editorial. **Nie als Fließtext.** Gewicht 500–700. |
| Fließtext & UI | **Archivo** (Grotesk) | neutral, lesbar — Absätze, Listen, Formulare, Navigation, Buttons, Meta. |
| Labels / Meta / Eyebrows | **Archivo** (UPPERCASE, weite Laufweite ~0.12–0.16em, klein, oft in Tan) | **kein Mono** (JetBrains Mono auf Kundenwunsch entfernt). |

**Regel:** Nur zwei Schriften — Cormorant Garamond für echte Überschriften, Archivo für alles andere (Body, Nav, Buttons, Labels). Kein Mono.

## Komponenten

- **Primärer CTA:** Tan-BG, weißer Text, Radius 4px, Archivo 700 UPPERCASE, Hover → Tan Hell.
- **Sekundär-Button:** transparent + Border Slate Tief, Hover → Slate-Fill.
- **Karte:** weiß, Radius 6px, dezenter Schatten.
- **Formular-Input:** Border Slate Hell, Radius 4px, Fokus = 2px Tan.
- **Radien:** 4px Buttons/Inputs, 6px Karten. **Nie höher. Keine Pillow-Shapes, keine Kreise ohne Grund.**

**Spacing/Layout:** großzügiger Whitespace als Gestaltungsmittel, Haarlinien `#DEE1E5`, max-width ~1240px.

## Bildsprache (für `/generate-visuals` + Foto-Briefing)

**„Jedes Bild ist echt. Vom Team, von den Projekten, aus dem Alltag. Natürliches Licht, warme Töne, hohe Schärfe."**

- **Ja:** echte Aufnahmen aus echten Projekten · Handwerk im Detail (Hände, Werkzeug, Fugen) · natürliches Licht, warme Temperatur · scharfe Aufnahmen · Portrait 16:9, natürliches Licht.
- **Nein:** Stockfotos (nie) · generische Handwerker-Symbolbilder · posierte Gruppenfotos mit verschränkten Armen · harter Blitz / kaltblaues Licht.

> KI-Stills nur für generische Atmosphäre, strikt nach diesen Ankern (warmes Licht, scharf, materialnah, kein kaltes Blau). Echte Identitäten/Projekte = echtes Foto (`assets/images/README.md`). André-Portrait bleibt echt.

## Bezug
- Manual: `assets/brand/agos-bau-brand-manual.html` · Assets: `assets/images/README.md` · Build-Tokens: `src/styles/global.css`.
