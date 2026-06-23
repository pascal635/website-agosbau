# Website-AIOS Intake — v2

Source-of-truth-Datei für diese Website-Instanz. Sie deckt **alle** Onboarding-Inputs ab, die das System braucht, bevor gebaut wird (Blueprint Part A). Ausfüllen durch Tippen, Voice-Paste oder `/onboard` (geführtes Gespräch). `/onboard` liest diese Datei + die Dateien in `assets/` und `intake/`, destilliert sie nach `context/` (brand-profile, audience, services, legal, goals, voice) und füllt `connections.md`.

Legende: **[K]** = Kunde liefert · **[W]** = wir holen/erzeugen. Jederzeit editier- und re-runbar. Felder leer lassen, was (noch) nicht vorliegt — `/onboard` markiert Lücken im Audit.

---

## Abschnitt 1 — Marke & Design

### 1.1 Logo [K]
Logo in allen Varianten: hell/dunkel, Icon-only, Favicon. Vektor bevorzugt (SVG/AI/PDF), sonst PNG hochauflösend mit Transparenz. **Dateien ablegen in `assets/logo/`.**
```
[Liste der gelieferten Dateien / fehlende Varianten hier notieren]
```

### 1.2 CI-Manual / Styleguide [K]
Farben als **Hex**, Schriften (Namen + Web-Font-Quelle), Abstände, Bildsprache, Ton, Do/Don'ts. PDF oder Link. **Datei in `assets/ci/`.** Wenn kein Manual existiert: Farben/Schriften hier roh eintragen.
```
[Hex-Farben, Schriften, Link/Datei oder "kein Manual — siehe Eintrag"]
```

### 1.3 Erste Bilder [K]
Echtes Bildmaterial: Betrieb/Standort, Team, Arbeiten/Projekte/vorher-nachher, Produkte. Original-Auflösung. **Dateien in `assets/images/`.** Lücken füllen wir per `generate-images` (CI-konform).
```
[Was vorhanden ist / was fehlt und generiert werden muss]
```

### 1.4 Brand-Voice-Samples [W] — HARD RULE
Echte Texte des Kunden, **verbatim eingefügt — nicht neu tippen, nicht glätten, nicht aus dem Chat formen**. Bestehende Seitentexte, ein Angebot, eine Kunden-E-Mail, ein Social-Post — was die Marke klingen lässt. Das ist die eine Regel, die nicht gebeugt wird (chat-geformte Proben verfälschen die Brand Voice). Mehrere Samples = besser. Zusätzlich roh ablegen in `intake/voice-samples/`.
```
[Sample 1 — roh einfügen]
```
```
[Sample 2 — roh einfügen]
```

---

## Abschnitt 2 — Unternehmen & Inhalt

### 2.1 Unternehmensprofil [K]
Was macht das Business, USP, Historie, Team, Zertifikate/Auszeichnungen, Mitgliedschaften.
```
[Antwort hier]
```

### 2.2 Ausgefüllter Content-Fragebogen [K]
Leistungen/Angebote (je Leistung: was, für wen, Nutzen, Preis-Logik), FAQs, Zielgruppe. **Ausgefüllten Fragebogen in `intake/` ablegen** und hier verlinken.
```
[Datei-Referenz oder Kernpunkte]
```

### 2.3 Erstgespräch-Transkripte [K]
Transkripte/Notizen aus dem Discovery-Call: Ziele, Schmerzen, Wunschkunde, Erwartungen. Roh ablegen in `intake/transcripts/`.
```
[Datei-Referenz oder Kernzitate verbatim]
```

### 2.4 Referenzen / Bewertungen / Testimonials / Case Studies [K]
Kritisch für Trust & Conversion. Google-/Bewertungsportal-Links, Kundenstimmen (mit Freigabe), abgeschlossene Projekte als Case Study.
```
[Bewertungs-Links, Zitate (verbatim + Freigabe-Status), Case Studies]
```

### 2.5 Einzugsgebiet / Standorte [K]
Pflicht für Local SEO. Hauptstandort(e) mit vollständiger Adresse, bediente Orte/Stadtteile/Radius (steuert City-Pages), Öffnungszeiten.
```
Adresse(n):
Einzugsgebiet (Orte/PLZ/Radius):
Öffnungszeiten:
```

### 2.6 Wettbewerber [K/W]
Für Positionierung + SEO-Gap-Analyse. 3–5 lokale/inhaltliche Konkurrenten mit Domain. Kunde nennt; wir ergänzen über Sistrix.
```
1. [Name + Domain]
2. [Name + Domain]
3. [Name + Domain]
```

### 2.7 Conversion-Definition: Was ist ein "Lead"? [K]
Steuert das gesamte Tracking. Was genau zählt als Conversion: Formular-Absenden / Anruf / WhatsApp-Nachricht / Online-Buchung / E-Mail-Klick? Was ist das *eine* primäre Ziel der Seite?
```
Primäres Ziel:
Zählt als Conversion:
```

---

## Abschnitt 3 — Zugänge & Technik

### 3.1 Domain & Registrar [K]
Domain(s) der Seite, bei welchem Registrar, Zugang zu DNS (für Go-Live / Records).
```
Domain(s):
Registrar + Zugang:
```

### 3.2 Hosting [K/W]
Wo wird gehostet (Default-Stack: Git + Hetzner), oder soll von uns aufgesetzt werden? Bestehende Zugangsdaten.
```
[Hosting-Anbieter + Zugang / "von uns aufsetzen"]
```

### 3.3 Monitor-Konten & Keys [K/W]
Für `connections.md`. Markiere, was heute schon verbunden werden kann. Default-Tracking dieses Setups: **Matomo + Google-Ads-Conversion** (nicht GA).
```
Google Search Console:        [Zugang / vorhanden? ]
Sistrix (MCP vorhanden):      [API-Key griffbereit? ]
Google Ads (Conversion):      [Konto-ID / Zugang ]
Meta Ads:                     [Zugang / relevant? ]
Matomo:                       [Instanz-URL + Zugang / aufsetzen? ]
```

### 3.4 Google Business Profile [K]
Local-SEO-Kern. Existiert ein GBP? Inhaber-/Verwaltungszugang vorhanden? NAP (Name/Adresse/Telefon) wie aktuell eingetragen.
```
GBP vorhanden / Zugang:
NAP wie eingetragen:
```

### 3.5 Bestehende Website [K]
URL der aktuellen Seite (falls vorhanden), welche Inhalte migriert werden sollen, Redirect-Bedarf (alte URLs).
```
Alte URL:
Zu migrieren:
```

### 3.6 Social-Profile [K]
Instagram, Facebook, LinkedIn, etc. — für Verlinkung, Konsistenz, ggf. Meta-Ads.
```
[Profil-Links]
```

---

## Abschnitt 4 — Recht

Ohne diese Inputs geht keine Seite live. **[K]** — Kunde liefert die Daten, wir setzen Impressum/Datenschutz/AGB-Seiten um.

### 4.1 Impressum-Daten [K]
Vollständige Anbieterkennzeichnung: Firmenname, Rechtsform, Anschrift, Vertretungsberechtigte, Kontakt (Tel/E-Mail), USt-IdNr.
```
[Antwort hier]
```

### 4.2 Datenschutz [K]
Bestehende Datenschutzerklärung oder Datengrundlage (verarbeitete Daten, Tools, Auftragsverarbeiter). Wichtig wegen Matomo/Ads-Consent.
```
[Bestehende Erklärung / Datengrundlage]
```

### 4.3 AGB [K]
Allgemeine Geschäftsbedingungen, falls vorhanden/erforderlich.
```
[Vorhanden? Datei-Referenz]
```

### 4.4 Handelsregister [K]
Registergericht + Registernummer (falls eingetragen). Für Impressum erforderlich.
```
Registergericht:
Registernummer:
```

---

Wenn gefüllt, `/onboard` (re-)laufen lassen — liest Intake + `assets/` + `intake/`, scaffoldet `context/`, `references/voice.md`, `connections.md`. `/audit` zeigt danach offene Lücken.
