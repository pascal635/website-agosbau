# Performance & Barrierefreiheit

> Zweck: Jede Kundenseite laedt schnell auf dem Handy und ist fuer alle bedienbar — damit lokale Besucher anrufen oder ein Formular abschicken, statt abzuspringen.

## Prinzipien

- Mobile zuerst. Die ICP-Zielgruppe (lokale B2C-Dienstleister) wird zu 70-80% mobil gefunden. Optimiere fuer 4G-Handy, nicht fuer dein Bueromonitor.
- Core Web Vitals sind die Messlatte: LCP < 2,5 s, CLS < 0,1, INP < 200 ms. Gemessen wird im Feld (echte Nutzer), nicht nur im Lab.
- Jedes Kilobyte muss sich rechtfertigen. Bilder, Fonts und Drittanbieter-Scripts sind die drei groessten Bremsen — in dieser Reihenfolge.
- Barrierefreiheit ist kein Extra. Kontrast, Alt-Texte und Tastaturbedienung sind Pflicht und helfen zugleich dem SEO-Ranking.
- Nichts darf nach dem Laden springen. Feste Masse fuer Bilder, Anzeigen und Embeds verhindern Layout-Sprung (CLS).
- Messbar vor Launch. Kein Go-Live ohne Lighthouse-Lauf mit dokumentiertem Score.

## Schritt fuer Schritt

1. **Baseline messen.** PageSpeed Insights (pagespeed.web.dev) fuer die wichtigste Seite (meist Startseite + Leistungsseite). Notiere LCP, CLS, INP, Performance-Score und Accessibility-Score. Diese Zahlen sind dein Vorher-Wert.

2. **LCP-Element finden und beschleunigen.** Das groesste sichtbare Element above the fold (meist Hero-Bild oder H1). Wenn Bild: in WebP/AVIF konvertieren, richtig dimensionieren (nicht 4000px breit fuer 800px Anzeige), `fetchpriority="high"` setzen, NICHT lazy-loaden.

3. **Bilder optimieren.** Alle Bilder in WebP/AVIF. `width` und `height` als Attribute setzen (gegen CLS). Alle Bilder unterhalb des Folds mit `loading="lazy"`. `srcset` fuer Retina/Mobile. Zielgroesse pro Bild: < 150 KB, Hero < 250 KB.

4. **Fonts zaehmen.** Maximal 2 Schriftfamilien, maximal 4 Schnitte gesamt. Selbst hosten (kein Google-Fonts-CDN, wegen DSGVO und Ladezeit). `font-display: swap`. WOFF2-Format. Preload nur fuer den Schnitt im LCP.

5. **Scripts entschlacken.** Drittanbieter-Scripts auflisten. Matomo und Google-Ads-Conversion sind Pflicht — alles andere (Chat-Widgets, Karten, Social-Embeds) auf `defer` oder erst bei Interaktion laden. Kein render-blocking JS im `<head>`.

6. **Caching & Auslieferung.** Browser-Caching fuer statische Assets (Bilder, CSS, JS, Fonts) auf min. 1 Jahr via `Cache-Control`. Gzip/Brotli-Kompression aktiv. HTTP/2 oder neuer. Bei groesserem Bilderaufkommen: CDN.

7. **CLS abstellen.** Feste Masse fuer Bilder, iframes, Anzeigen. Schriften per `font-display: swap` mit aehnlichem Fallback (gegen Text-Reflow). Keine Inhalte oberhalb des Folds dynamisch nachladen, die alles nach unten schieben.

8. **INP pruefen.** Schwere JS-Aufgaben aufteilen. Keine teuren Event-Handler beim Tippen/Klicken. Cookie-Banner und Menue muessen sofort reagieren.

9. **Barrierefreiheit durchgehen.** Kontrast pruefen (Text min. 4,5:1, grosse Schrift 3:1) — Tool: WebAIM Contrast Checker. Jedes informative Bild bekommt einen Alt-Text, dekorative `alt=""`. Semantisches HTML (`<header>`, `<nav>`, `<main>`, `<button>` statt `<div onclick>`). Tastatur-Test: mit Tab durch die Seite, sichtbarer Fokus, alle CTAs erreichbar.

10. **Nachmessen & dokumentieren.** PageSpeed erneut laufen lassen. Vorher/Nachher in den Mess-Bericht. Wenn Performance < 90 mobil oder Accessibility < 95: zurueck zum schwaechsten Hebel.

## Checkliste

Vor jedem Launch abhaken:

- [ ] LCP < 2,5 s (mobil, Feld- oder Lab-Wert dokumentiert)
- [ ] CLS < 0,1
- [ ] INP < 200 ms
- [ ] PageSpeed Performance >= 90 mobil
- [ ] PageSpeed Accessibility >= 95
- [ ] Alle Bilder in WebP/AVIF, < 150 KB (Hero < 250 KB)
- [ ] Jedes Bild hat `width` + `height` (kein Layout-Sprung)
- [ ] Bilder unter dem Fold haben `loading="lazy"`, Hero NICHT
- [ ] Fonts selbst gehostet, WOFF2, `font-display: swap`, max. 4 Schnitte
- [ ] Kein render-blocking JS/CSS im Above-the-fold-Pfad
- [ ] Nur Matomo + Google-Ads-Conversion blockierend, Rest `defer`/on-demand
- [ ] Browser-Caching >= 1 Jahr fuer statische Assets, Brotli/Gzip aktiv
- [ ] Textkontrast >= 4,5:1 (normal), >= 3:1 (gross)
- [ ] Alt-Texte: informativ = beschreibend, dekorativ = `alt=""`
- [ ] Semantisches HTML: `<main>`, `<nav>`, echte `<button>`/`<a>`
- [ ] Komplett per Tastatur bedienbar, sichtbarer Fokus-Ring
- [ ] Formular-Felder haben `<label>`
- [ ] `lang="de"` im `<html>`, sinnvolle `<title>` + H1
- [ ] Vorher/Nachher-Werte im Mess-Bericht festgehalten

## Vorlagen & Beispiele

**Optimiertes Hero-Bild (LCP-Element):**
```html
<img src="hero-800.webp"
     srcset="hero-800.webp 800w, hero-1200.webp 1200w, hero-1600.webp 1600w"
     sizes="(max-width: 768px) 100vw, 800px"
     width="800" height="500"
     alt="Sanitaer-Notdienst Mueller vor dem Firmenwagen in Koeln"
     fetchpriority="high">
```

**Bild unterhalb des Folds:**
```html
<img src="leistung.webp" width="600" height="400"
     loading="lazy" decoding="async"
     alt="Badsanierung Vorher-Nachher">
```

**Font selbst hosten:**
```css
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter-regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}
```
```html
<link rel="preload" href="/fonts/inter-regular.woff2" as="font" type="font/woff2" crossorigin>
```

**Script erst bei Interaktion laden (z. B. Chat-Widget):**
```html
<script defer src="chat-widget.js"></script>
```

**Caching-Header (Apache .htaccess):**
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/avif "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml
</IfModule>
```

**Caching-Header (nginx):**
```nginx
location ~* \.(webp|avif|css|js|woff2)$ {
  add_header Cache-Control "public, max-age=31536000, immutable";
}
gzip on;
gzip_types text/css application/javascript image/svg+xml;
```

**Barrierefreier CTA (statt `<div onclick>`):**
```html
<a href="tel:+49221123456" class="btn-call">Jetzt anrufen: 0221 123456</a>
<button type="submit">Termin anfragen</button>
```

**Formularfeld mit Label:**
```html
<label for="tel">Telefon</label>
<input id="tel" name="tel" type="tel" autocomplete="tel" required>
```

**Sichtbarer Fokus (nie wegstylen):**
```css
:focus-visible {
  outline: 3px solid #0b5fff;
  outline-offset: 2px;
}
```

**Kontrast-Schnellregeln:**
- Heller Text auf hellem Hintergrund = haeufigster Fehler. Im Zweifel WebAIM Contrast Checker.
- Platzhaltertext in Formularen ist oft zu hell — als Beschriftung ungeeignet, immer echtes `<label>`.
- Buttons: Text-zu-Hintergrund min. 4,5:1.

## Bezug

- **Workflow Bauen:** Dieses Playbook ist Pflicht-Gate vor jedem Go-Live einer neuen Kundenseite.
- **Workflow Messen:** Die PageSpeed-/Lighthouse-Werte fliessen in den wiederkehrenden Mess-Bericht; Verschlechterung der Core Web Vitals loest ein Optimierungs-Ticket aus.
- **Workflow Entscheiden:** Score-Abfall unter Schwelle (Perf < 90, A11y < 95) ist ein Trigger fuer den naechsten Optimierungszyklus.
- **SEO (Sistrix-MCP):** Core Web Vitals und Barrierefreiheit sind Ranking-Faktoren — Performance-Arbeit stuetzt die Sichtbarkeits-Ziele.
- **Tracking-Default:** Beachtet Matomo + Google-Ads-Conversion als einzige blockierende Scripts (kein Google Analytics).
