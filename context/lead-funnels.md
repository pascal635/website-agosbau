# Lead-Funnels — AGOS BAU (Multistep-Formulare)

*Stand: Juni 2026. Conversion-Strategie: `context/strategie.md`. Tracking: `references/playbooks/conversion-tracking.md`. Wird im Bau (Phase 6) als Astro-Komponente umgesetzt; hier die verbindliche Spezifikation.*

## Warum Multistep

Ein langes Formular schreckt ab. Ein Multistep-Funnel startet mit einer **leichten Auswahl** (ein Klick, keine Daten), qualifiziert den Lead Schritt für Schritt und fragt **Kontaktdaten zuletzt** — wenn die Hürde am niedrigsten ist. Für AGOS heißt das: bessere Lead-Qualität (André weiß vor dem Rückruf, worum es geht) bei höherer Abschlussrate.

## Zwei Funnels

1. **Bad-Funnel** — primäres Conversion-Ziel der Seite. Einstieg von `/badsanierung-bremen/`, `/barrierefreies-bad-bremen/`, Startseite-Bad-CTA, allen Stadtteilseiten (Bad-Bezug).
2. **Fliesen-Funnel** — Einstieg von `/fliesenverlegung-bremen/`, `/grossformatfliesen-bremen/`, `/terrasse-pool-fliesen/`, Startseite-Fliesen-CTA.

Beide enden im selben Kontakt-Schritt und derselben Danke-Logik. Welcher Funnel startet, hängt vom Einstiegs-CTA ab (vorausgewählter Kontext).

## Gemeinsame Regeln (beide Funnels)

- **Mobile-first**, große Tap-Flächen, eine Frage pro Schritt, Fortschrittsbalken (`Schritt X von Y`).
- **Zurück-Button** ab Schritt 2. Auswahl per Klick springt automatisch weiter (kein „Weiter" nötig, außer im Kontakt-Schritt).
- **Telefonnummer ist das Pflicht-Schlüsselfeld** — André ruft zurück. E-Mail optional.
- Persistente Reassurance unter jedem Schritt: „Kostenlos & unverbindlich. Persönlicher Rückruf von André — kein Callcenter."
- **Alternativ-Kanäle immer sichtbar:** Anruf (`tel:+4942025116131`) + WhatsApp (`https://wa.me/491748842492`, 0174 8842492), für alle, die nicht klicken wollen.
- **Foto-Upload optional** im Kontakt-Schritt (Bilder vom Ist-Zustand → präziseres Angebot). Mehrere Dateien, Bildformate, je < 10 MB.
- **DSGVO:** schlanker Consent-Hinweis + Link Datenschutz am Submit. Keine Tracking-Pixel vor Consent (CMP).
- **4–5 Schritte**, nie mehr. Abbruch je Schritt messen (Funnel-Analyse).
- Voice: Sie, kurz, ehrlich (siehe `references/voice.md`).

---

## Funnel A — Badsanierung

**Einstiegs-CTA:** „Kostenloses Angebot anfragen →" → öffnet Funnel (Bad vorausgewählt).

**Schritt 1 — Worum geht es?**
- Komplette Badsanierung
- Teilsanierung / Modernisierung
- Barrierefreies Bad / bodengleiche Dusche
- Nur Fliesen erneuern → *(leitet in Fliesen-Logik über, bleibt aber im Flow)*

**Schritt 2 — Wie groß ist Ihr Bad ungefähr?**
- Bis 6 m² · 6–10 m² · Über 10 m² · Weiß ich nicht

**Schritt 3 — Wann möchten Sie starten?**
- So schnell wie möglich · In 1–3 Monaten · In 3–6 Monaten · Erst mal nur Orientierung

**Schritt 4 — Aktueller Stand?** *(qualifiziert, optional überspringbar)*
- Bestehendes Bad wird saniert · Neubau / Rohbau · Mehrere Bäder / Objekt

**Schritt 5 — Ihr kostenloses Angebot**
- Name *
- Telefonnummer * (für den Rückruf)
- Ort / PLZ * (Einzugsgebiet-Check)
- E-Mail (optional)
- Nachricht (optional)
- Fotos vom Bad hochladen (optional)
- Button: **Kostenloses Angebot anfragen →**
- Reassurance: „André meldet sich persönlich, meist am selben Werktag."

---

## Funnel B — Fliesen

**Einstiegs-CTA:** „Kostenloses Angebot anfragen →" → öffnet Funnel (Fliesen vorausgewählt).

**Schritt 1 — Was soll gefliest werden?**
- Bad · Wohnraum · Küche · Außenbereich / Terrasse / Pool · Gewerbe

**Schritt 2 — Welche Arbeiten?**
- Komplett neu verlegen · Alte Fliesen erneuern · Einzelne Fliesen / Reparatur · Großformat / XXL-Platten

**Schritt 3 — Ungefähre Fläche?**
- Bis 10 m² · 10–30 m² · Über 30 m² · Weiß ich nicht

**Schritt 4 — Wann soll es losgehen?**
- So schnell wie möglich · In 1–3 Monaten · Flexibel

**Schritt 5 — Ihr kostenloses Angebot**
- Name * · Telefonnummer * · Ort / PLZ * · E-Mail (optional) · Nachricht (optional) · Fotos hochladen (optional)
- Button: **Kostenloses Angebot anfragen →**

---

## Danke-Schritt (beide)

- Überschrift: „Danke — wir haben Ihre Anfrage."
- Text: „André meldet sich persönlich, in der Regel am selben Werktag. Kein Callcenter, kein Verkaufsdruck."
- Sofort-Kontakt: Telefon (klickbar) + WhatsApp, falls es eilig ist.
- *(Dies ist die Tracking-Erfolgsseite — hier feuern die Conversion-Events.)*

## Lead-Definition & Tracking (an `conversion-tracking.md`)

- **Hard-Lead / primäre Conversion:** Funnel-Absenden (Danke-Schritt erreicht).
  - Matomo-Goal: `trackEvent('Lead','formular_absenden','badfunnel'|'fliesenfunnel')`
  - Google-Ads-Conversion: nur hier feuern (primäre Conversion).
  - Meta Pixel: `fbq('track','Lead')`.
- **Soft-Leads:** Anruf-Klick (`anruf_klick`), WhatsApp-Klick (`whatsapp_klick`).
- **Funnel-Diagnose (Micro-Events, keine Conversion):** je Schritt `trackEvent('Funnel','step','{funnel}_step_{n}')` → zeigt im Weekly-Review, wo Nutzer abbrechen.
- Alles consent-gated (CMP); ohne Consent Matomo cookieless.
- **Lead-Routing (entschieden):** Funnel-Absenden schickt die Anfrage **per E-Mail an info@agosbau.de** (inkl. aller Antworten + ggf. Foto-Anhänge). Kein CRM nötig. WhatsApp: 0174 8842492 (`https://wa.me/491748842492`).
- Bau: serverseitiger Mail-Versand (z. B. Form-Endpoint/Serverless), Spam-Schutz (Honeypot/Rate-Limit), Bestätigungs-Autoreply an den Absender optional.

## Bau-Hinweise (Phase 6)

- Eine wiederverwendbare Astro-Funnel-Komponente, parametrisiert über die Schritt-Konfiguration (Bad vs. Fliesen) — kein doppelter Code.
- State im Client (kein Reload je Schritt), Submit serverseitig verarbeitet (Mail/Webhook), Danke-Seite/-State als Conversion-Trigger.
- Funktioniert ohne JS als Fallback (progressive enhancement) oder mindestens mit klarer Fehlermeldung.
- Performance: Funnel darf den LCP der Landingpage nicht blockieren.
- A/B-fähig bauen (Schrittzahl, Reihenfolge) — Conversion-Optimierung später über `conversion-optimization.md`.

## Integration in die Seiten

Der primäre CTA „Kostenloses Angebot anfragen →" auf den jeweiligen Seiten öffnet den passenden Funnel (Modal oder eigene `/angebot/`-Route mit vorausgewähltem Kontext). Die `/kontakt/`-Seite behält zusätzlich das einfache Direktformular für Leute, die lieber alles auf einmal eingeben.
