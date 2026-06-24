# Bewegtbild: Video & Cinematic via Higgsfield

> Zweck: Liefert sparsam eingesetztes, CI-konformes Bewegtbild für Kundenwebsites — Motion-Hero, B-Roll, Testimonial-Untermalung. Video ist Wirkung, nicht Pflicht. Es wird nur dort eingesetzt, wo Bewegung echten Mehrwert bringt UND die Performance nicht leidet. Erzeugt mit Higgsfield (via MCP), ausgeliefert als optimiertes mp4/webm mit poster-Fallback.

## Prinzipien

- **Performance zuerst, immer.** Ein Video ist das schwerste Asset auf einer Seite. Ein langsamer Motion-Hero kostet mehr Conversion, als die Bewegung je bringt. Im Zweifel: kein Video. Eine schnelle, scharfe Seite schlägt eine hübsche, lahme.
- **Sparsam einsetzen.** Pro Seite maximal EIN bewegtes Element above the fold (Motion-Hero), plus optional kurze B-Roll-Schnipsel weiter unten. Niemals mehrere Autoplay-Videos gleichzeitig im Viewport. Bewegung lenkt — zu viel davon zerstört Fokus auf den CTA.
- **Wann Video?** Nur wenn Bewegung die Botschaft trägt: ein Prozess in Aktion (Handwerk live, Behandlung, Produktion), eine Atmosphäre, die ein Standbild nicht transportiert, ein Kamera-Schwenk über einen Raum/Standort. Wenn ein Standbild dasselbe sagt → Standbild nehmen (`image-generation.md`).
- **Wann KEIN Video?** Für abstrakte Konzepte (Ablauf, Vergleich, Zahl, System) → gecodete Infografik. Für Vertrauen/Identität (Inhaber:in, Team, Projekte) → echtes Foto/echtes Video. Für reine Information, die gelesen werden muss → Text. Video ist Untermalung, nie der einzige Träger einer Information.
- **Entscheidungs-Reihenfolge je Slot:** Text/Infografik → Standbild → Video. Erst die nächst-schwerere Stufe wählen, wenn die leichtere die Wirkung nachweislich nicht erreicht.
- **CI gilt auch für Bewegtbild.** Lichtstimmung, Farbtemperatur, Tempo und Bildsprache folgen `context/brand-profile.md`. Ein hektischer Schnitt passt nicht zu einer ruhigen, vertrauenswürdigen Marke.
- **Kein Video von echten, benannten Personen/Projekten ohne echtes Material.** Higgsfield erzeugt generische, atmosphärische Szenen — nie eine konkrete Identität (Inhaber:in, namentliche Kund:innen, reales Projekt). Dafür echtes Filmmaterial anfordern.

## Schritt für Schritt

1. **Bedarf prüfen.** Aus `page-structure.md` den Slot ableiten und gegen die Prinzipien testen: Trägt Bewegung hier die Botschaft? Wenn nein → Standbild/Infografik, kein Video. Entscheidung im Build-Log vermerken.
2. **CI laden.** `context/brand-profile.md` lesen: Farben (Hex), Bildsprache, Stimmung, Tempo (ruhig vs. dynamisch), Do/Don'ts. 3–5 Stil-Anker notieren — identisch zu denen der Stills, damit Video und Bild einer Seite zusammenpassen.
3. **Higgsfield via MCP ansteuern.** Higgsfield ist in `.mcp.json` registriert. Nach Claude-Code-Neustart (+ ggf. OAuth, siehe `connections.md`) sind die Higgsfield-Tools verfügbar. Prüfen, ob das MCP verbunden ist, bevor du generierst.
4. **Prompt im CI-Stil bauen.** Vorlage unten füllen: Motiv, Kamerabewegung, Tempo, Lichtstimmung, Farb-Anker (Hex aus brand-profile), Dauer-Ziel. Bewegung explizit und ruhig beschreiben (langsamer Schwenk, sanfter Push-in), keine wilden Schnitte für einen Loop.
5. **Varianten erzeugen.** 2–3 Varianten generieren (z. B. verschiedene Kamerabewegungen oder Geschwindigkeiten). Bei Loop-Material auf nahtlosen Übergang Anfang↔Ende achten.
6. **Auswahl & Schnitt.** Beste Variante wählen. Auf Hero-Länge kürzen (~6–10 s), wenn nötig Loop-Punkt sauber setzen. Ausreißer in Farbe/Licht angleichen, damit es zur restlichen Seite passt.
7. **poster-Bild ziehen.** Einen repräsentativen Frame als Standbild exportieren → wird poster-/Fallback-Bild (auch für `prefers-reduced-motion`). Wie ein Still optimieren: WebP, Zielgröße, Alt/Hintergrund (siehe `image-generation.md`).
8. **Encodieren & komprimieren.** Nach mp4 (H.264, breit kompatibel) UND webm (VP9/AV1, kleiner) ausgeben. Ohne Audiospur bei Loop/B-Roll (`-an`). Ziel-Dateigrößen einhalten (siehe Technik). Befehle unten.
9. **Einbinden.** `<video>` mit `autoplay muted loop playsinline`, `poster`, `preload="none"` bzw. lazy, plus reduced-motion-Fallback (siehe Vorlagen).
10. **Performance verifizieren.** Lighthouse/PageSpeed nach Einbau: LCP < 2,5 s, Video blockiert nicht den Hauptthread, kein Layout-Shift. Bei Verstoß → kürzen, stärker komprimieren oder auf Standbild zurückfallen.
11. **Rechte/Quelle dokumentieren.** Quelle (Higgsfield-generiert / echtes Material + Lizenz) je Asset notieren. Generierte Clips mit Personen kennzeichnen, falls erforderlich. Strittige Fälle in `decisions/log.md`.

## Einsatz-Slots je Seitentyp

| Slot | Seitentyp | Einsatz | Regel |
|---|---|---|---|
| **Motion-Hero** | Startseite, ggf. Leistung/Landingpage | Kurzer Loop (~6–10 s) hinter/neben Headline + CTA. Atmosphäre, Prozess, Standort-Schwenk. | Headline/CTA müssen lesbar bleiben (Overlay/Abdunklung). Max. 1 pro Seite. Sofort poster sichtbar. |
| **B-Roll Leistungen** | Leistungsseite | Kurze, stumme Schnipsel als Untermalung einer Leistung (Prozess in Aktion). | Lazy laden, erst bei Scroll in den Viewport. Kein Autoplay über dem Fold außer Hero. |
| **Testimonial-Untermalung** | Startseite, Über uns | Dezentes Hintergrund-Bewegtbild hinter einem Zitat; bei echtem Kundenvideo: das echte Video. | Generiertes Material nur als Stimmung, nie als „Beweis". Echtes Testimonial-Video schlägt jede Generierung. |

Für City-/Standort-Pages, Kontakt, FAQ, Blog gilt: in der Regel KEIN Video — Standbild/Infografik reicht und ist schneller.

## Technik

- **Formate:** mp4 (H.264, `yuv420p`) als breit kompatibler Fallback + webm (VP9 oder AV1) für kleinere Größe. Beide im `<video>` per `<source>` anbieten, mp4 zuletzt.
- **Attribute Loop/Hero:** `autoplay muted loop playsinline` (ohne `muted` blockt der Browser Autoplay; `playsinline` verhindert Fullscreen-Übernahme auf iOS). Stummes Loop-Material ohne Audiospur encodieren.
- **poster-Bild:** Immer `poster="…"` setzen — repräsentativer Frame als WebP. Sichtbar sofort, bevor das Video lädt, und als Fallback bei reduced-motion. Verhindert leeren/schwarzen Hero und Layout-Shift.
- **Laden:** Hero-Video `preload="none"` oder `preload="metadata"` (nie `auto` — sonst lädt es vor dem LCP). B-Roll/untere Videos lazy: erst per IntersectionObserver/`loading`-Logik starten, wenn im Viewport.
- **Ziel-Dateigröße:** Hero-Loop < 1,5 MB (Richtwert webm; mp4 darf etwas größer sein). B-Roll-Schnipsel < 800 KB. Im Zweifel kürzer + stärker komprimiert statt länger.
- **Max. Länge:** Hero-Loop ~6–10 s. B-Roll ~3–6 s. Längeres Material lädt schwer und verliert Aufmerksamkeit. Auflösung Hero max. 1920×1080, oft reicht 1280×720 (Skaliert per CSS, spart KB).
- **Layout-Shift vermeiden:** `width`/`height` bzw. `aspect-ratio` am Container setzen, damit poster und Video denselben Platz belegen.

## Barrierefreiheit

- **`prefers-reduced-motion` respektieren — Pflicht.** Nutzer:innen mit dieser Einstellung dürfen kein Autoplay-Video sehen. Lösung: per CSS/JS das Video verstecken/anhalten und das `poster`-Standbild zeigen (Markup-Snippet unten). Bewegung darf nie aufgezwungen werden.
- **Keine reine Info-Vermittlung nur per Video.** Alles, was verstanden werden muss (Preis, Ablauf, Kontakt, USP), steht zusätzlich als Text/Infografik. Video ist Untermalung. Wer das Video nicht sieht, verpasst keine Information.
- **Untertitel bei Sprache.** Enthält ein Video gesprochene Inhalte (z. B. echtes Testimonial), gehören Untertitel dazu (`<track kind="captions" srclang="de">`) — und idealerweise eine Text-Zusammenfassung daneben.
- **Stummes Autoplay.** Loop-/B-Roll-Videos laufen ohne Ton (`muted`, keine Audiospur). Kein automatischer Ton — niemals.
- **Keine Flacker-/Blitz-Effekte.** Schnelle Hell-Dunkel-Wechsel oder Stroboskop-Bewegung vermeiden (Anfallsrisiko). Ruhiges Tempo passt ohnehin besser zum CI.
- **Fokus & CTA bleiben bedienbar.** Bewegung hinter Text darf Lesbarkeit/Kontrast nicht senken (Overlay/Abdunklung). Bedienelemente (falls Controls) müssen tastaturzugänglich sein.

## Checkliste

- [ ] Slot gegen Prinzipien geprüft: Trägt Bewegung hier wirklich die Botschaft? Sonst Standbild/Infografik
- [ ] Max. 1 Autoplay-Video above the fold pro Seite
- [ ] CI geladen, Stil-Anker identisch zu den Stills derselben Seite
- [ ] Higgsfield-MCP verbunden (`.mcp.json`, ggf. OAuth)
- [ ] 2–3 Varianten erzeugt, beste gewählt, Loop nahtlos
- [ ] poster-Bild aus repräsentativem Frame exportiert + als WebP optimiert
- [ ] mp4 (H.264, yuv420p) UND webm ausgegeben; Loop ohne Audiospur (`-an`)
- [ ] Ziel-Dateigröße eingehalten (Hero < 1,5 MB, B-Roll < 800 KB)
- [ ] Länge im Rahmen (Hero ~6–10 s, B-Roll ~3–6 s)
- [ ] `autoplay muted loop playsinline` + `poster` + `preload="none"`/lazy gesetzt
- [ ] `prefers-reduced-motion`-Fallback aktiv (Video aus, poster sichtbar)
- [ ] Keine Information ausschließlich im Video; Untertitel bei Sprache
- [ ] Kein generiertes Video als Identitäts-/Beweis-Material ausgegeben
- [ ] `width`/`height`/`aspect-ratio` gesetzt (kein Layout-Shift)
- [ ] LCP < 2,5 s nach Einbau verifiziert
- [ ] Quelle/Lizenz je Clip dokumentiert

## Vorlagen

### Prompt-Vorlage (CI-Stil) — Platzhalter aus brand-profile.md füllen

```
[Motiv: z. B. saubere moderne Werkstatt, Tageslicht durch große Fenster],
{{Stimmung aus brand-profile, z. B. ruhig, vertrauenswürdig, hochwertig}},
Kamerabewegung: langsamer, gleichmäßiger Schwenk / sanfter Push-in,
Tempo: ruhig, kein harter Schnitt, nahtlos loopbar,
Lichtstimmung: weiches natürliches Licht,
Farbstimmung passend zu {{Primärfarbe Hex}} und {{Sekundärfarbe Hex}},
{{Bildsprache aus brand-profile}},
Dauer ca. 6–8 Sekunden, 16:9, kein Text im Bild, kein Ton.

Negativ: hektischer Schnitt, Blitzeffekte, Logos, Wasserzeichen,
verzerrte Hände/Gesichter, KI-Artefakte, Stockfoto-Look, Text, Schrift.
```

### Encoding (ffmpeg) — mp4 + webm, stumm, web-optimiert

```bash
# mp4 (H.264, breit kompatibel), ohne Audio, faststart fürs Web
ffmpeg -i quelle.mov -c:v libx264 -pix_fmt yuv420p -crf 26 -an \
  -movflags +faststart -vf "scale=1280:-2" hero.mp4

# webm (VP9, kleiner), ohne Audio
ffmpeg -i quelle.mov -c:v libvpx-vp9 -crf 34 -b:v 0 -an \
  -vf "scale=1280:-2" hero.webm

# poster-Frame ziehen (Sekunde 1) -> dann nach WebP (siehe image-generation.md)
ffmpeg -i quelle.mov -ss 00:00:01 -vframes 1 hero-poster.png
cwebp -q 80 hero-poster.png -o hero-poster.webp
```

### Hero-Video mit reduced-motion-Fallback (kopierbar)

```html
<!-- Container hält das Seitenverhältnis, kein Layout-Shift -->
<div class="hero-media" style="aspect-ratio:16/9">
  <video
    class="hero-video"
    autoplay muted loop playsinline
    preload="none"
    poster="/images/hero-poster.webp"
    width="1280" height="720"
    aria-hidden="true">
    <source src="/videos/hero.webm" type="video/webm">
    <source src="/videos/hero.mp4"  type="video/mp4">
  </video>
</div>
```

```css
/* prefers-reduced-motion: Video verstecken, poster zeigen */
@media (prefers-reduced-motion: reduce) {
  .hero-video { display: none; }
  .hero-media {
    background-image: url("/images/hero-poster.webp");
    background-size: cover;
    background-position: center;
  }
}
```

```js
// Optional: Autoplay zusätzlich per JS unterbinden + B-Roll erst im Viewport starten
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('video.lazy-broll').forEach((v) => {
  if (reduce) return;                 // reduced motion -> poster bleibt stehen
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { e.isIntersecting ? v.play() : v.pause(); });
  }, { threshold: 0.25 });
  io.observe(v);
});
```

### B-Roll weiter unten (lazy, erst im Viewport)

```html
<video class="lazy-broll" muted loop playsinline preload="none"
       poster="/images/leistung-poster.webp" width="1280" height="720" aria-hidden="true">
  <source src="/videos/leistung.webm" type="video/webm">
  <source src="/videos/leistung.mp4"  type="video/mp4">
</video>
```

## Bezug

- Skill `generate-visuals` — führt dieses Playbook für Bewegtbild aus (Higgsfield-Clip erzeugen, encodieren, einbinden); für Stills/Infografiken → `image-generation.md`.
- Workflow `build-page` — Schritt 4 (Bilder/Visuals): hier entscheiden, ob ein Slot Video statt Standbild bekommt.
- `references/playbooks/page-structure.md` — Slots je Seitentyp (Motion-Hero, B-Roll, Testimonial).
- `references/playbooks/performance-a11y.md` — Core Web Vitals (LCP), `prefers-reduced-motion`, Lazy-Loading-Regeln.
- `references/playbooks/image-generation.md` — poster-Bild-Optimierung (WebP, Zielgrößen) und Infografik-/Still-First-Entscheidung.
- Quellen: `context/brand-profile.md` (CI/Bildsprache/Tempo), `.mcp.json` (Higgsfield-Registrierung), `connections.md` (Higgsfield-Auth-Status), Kunden-Input `assets/`.
```
