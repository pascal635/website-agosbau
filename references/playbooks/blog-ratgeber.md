# Playbook — Blog & Ratgeber

> **Zweck:** Aus einem Keyword einen suchintention-treffenden Ratgeber-Artikel bauen, der in ein Topic-Cluster einzahlt, intern verlinkt ist und im Text eine Conversion auslöst.

## Prinzipien

- KI produziert, Mensch entscheidet. Kein Artikel geht ohne menschliche Quality-Review live.
- Suchintention vor Wortzahl. Erst klären, was der Sucher will, dann erst schreiben.
- Ein Cluster, nicht Einzelartikel. Jeder Ratgeber gehört zu einer Pillar-Page und verlinkt zu ihr und zu den Geschwister-Artikeln.
- Ratgeber bauen Vertrauen, die Service-/Landingpage holt den Lead. Im Ratgeber wird weich auf den nächsten Schritt geführt, nicht hart verkauft.
- Lokaler Bezug, wo er passt: Stadt/Region und konkretes Einzugsgebiet einbauen, statt generisch zu bleiben.
- Schlechtes Briefing = schlechter Output. Brief vollständig machen, bevor die KI startet — das ist billiger als zweimal überarbeiten.

## Schritt für Schritt

1. **Keyword & Cluster-Zuordnung prüfen.** Nimm das Ziel-Keyword aus der Keyword-Prioritätsliste (`context/` → SEO-Keywords, siehe Playbook `seo-onpage.md`). Ordne es einem bestehenden Topic-Cluster zu oder eröffne ein neues. Notiere: Pillar-Page des Clusters + 2-4 Geschwister-Artikel zum internen Verlinken.

2. **Suchintention bestimmen.** Klassifiziere das Keyword in genau eine Hauptintention:
   - *Informational* ("was kostet…", "wie funktioniert…", "X oder Y") → Ratgeber-Artikel. Das ist der Normalfall für Blog/Ratgeber.
   - *Transaktional/Lokal* ("X beauftragen", "X in der Nähe") → gehört NICHT in den Ratgeber, sondern auf eine Service-/Landingpage. Zurück an die Build-Schicht melden.
   - *Navigational* (Markenname) → kein Content nötig.
   Prüfe die Intention gegen die echte SERP: Google das Keyword (oder via Sistrix `keyword_seo_searchintent` / `keyword_seo_serpfeatures`). Was rankt auf Seite 1 — Ratgeber, Listen, Vergleiche, Videos? Dein Format muss dazu passen. SERP-Features (FAQ, People-also-ask, Featured Snippet) notieren — die strukturieren den Artikel.

3. **Content-Brief füllen.** Pflichtfelder (siehe Vorlage unten). Fehlt eines, erst ergänzen, dann produzieren. Mindestens: Ziel-Keyword + Sekundär-Keywords, Suchintention, Zielgruppe, Brand-Voice-Referenz (`context/voice.md`), Wortzahl-Korridor (aus Top-3-SERP ableiten), H2-Gliederung aus "People also ask"/Sekundär-Keywords, das eine Conversion-Ziel, Pillar + interne Links.

4. **Gliederung vor Fließtext.** Erst die H2/H3-Struktur festlegen. Jede "People also ask"-Frage und jedes Sekundär-Keyword wird zu einer H2 oder H3. So deckt der Artikel die Intention vollständig ab, bevor ein Satz geschrieben ist.

5. **Artikel produzieren (KI).** Mit Brand Voice, Zielgruppe, Ziel, Format und Gliederung im Prompt. Aufbau nach der Ratgeber-Vorlage unten (Antwort sofort, dann Tiefe). Nie generisch — immer Kundenkontext und lokalen Bezug rein.

6. **Interne Verlinkung setzen.** Im Cluster verlinken (Regeln unten): Artikel → Pillar-Page (Pflicht), Artikel ↔ relevante Geschwister-Artikel, Artikel → die passende Service-/Landingpage (das ist der Conversion-Pfad). Sprechende Ankertexte mit Keyword, keine "hier klicken".

7. **Conversion-Element einbauen.** Mindestens ein CTA-Block, der zur Conversion-Definition des Kunden passt (Formular/Anruf/WhatsApp/Buchung — siehe `context/goals.md`). Platzierung: ein weicher Inline-CTA nach der Kernantwort, ein klarer CTA-Block am Ende. Conversion muss im Tracking erfasst sein (siehe `conversion-tracking.md`).

8. **SEO-Onpage finalisieren.** Meta-Titel (≤ 60 Zeichen, Keyword vorn), Meta-Beschreibung (≤ 155 Zeichen, mit CTA), H1 mit Keyword, sprechende URL, Alt-Texte. Article-/FAQ-Schema setzen (siehe `schema-structured-data.md`). Detail-Regeln: `seo-onpage.md`.

9. **Quality-Review (Mensch).** Checkliste unten abarbeiten. Max. 1 KI-Iteration mit verbessertem Prompt; wenn dann noch nicht passend, manuell überarbeiten und Brief-Vorlage für nächstes Mal schärfen.

10. **Publish & Cluster aktualisieren.** Artikel veröffentlichen. Auf der Pillar-Page den Link zum neuen Artikel ergänzen (Cluster schließt sich). In den Geschwister-Artikeln ggf. Querlinks nachziehen. Im Cluster-Register vermerken.

## Checkliste

**Vor der Produktion**
- [ ] Ziel-Keyword steht, Cluster + Pillar-Page zugeordnet
- [ ] Suchintention bestimmt und ist informational (sonst: kein Ratgeber)
- [ ] SERP gesichtet — Format, Wortzahl-Korridor und SERP-Features notiert
- [ ] Content-Brief vollständig (alle Pflichtfelder)
- [ ] H2/H3-Gliederung steht vor dem Schreiben

**Inhalt & SEO**
- [ ] Kernantwort steht in den ersten 2-3 Sätzen (Featured-Snippet-fähig)
- [ ] Ziel-Keyword in H1, ersten 100 Wörtern, mind. 1× H2 — natürlich, nicht gestopft
- [ ] Sekundär-Keywords / "People also ask"-Fragen als H2/H3 abgedeckt
- [ ] Lokaler Bezug eingebaut, wo sinnvoll
- [ ] Meta-Titel ≤ 60 Z., Meta-Beschreibung ≤ 155 Z. mit CTA
- [ ] Sprechende URL, alle Bilder mit Alt-Text
- [ ] Article-/FAQ-Schema gesetzt

**Cluster & Conversion**
- [ ] Link zur Pillar-Page gesetzt (Pflicht)
- [ ] Mind. 1 Link zu Geschwister-Artikel, sprechende Ankertexte
- [ ] Link zur passenden Service-/Landingpage (Conversion-Pfad)
- [ ] Inline-CTA nach Kernantwort + CTA-Block am Ende
- [ ] CTA passt zur Conversion-Definition des Kunden und ist im Tracking erfasst

**Voice & Freigabe**
- [ ] Ton stimmt mit `context/voice.md` überein — klingt nach Kunde, nicht nach generischer KI
- [ ] Fakten/Branchendetails manuell geprüft (KI halluziniert hier)
- [ ] Keine Grammatik-/Tippfehler
- [ ] Pillar-Page nach Publish um Link zum Artikel ergänzt

## Vorlagen & Beispiele

### Content-Brief (Pflichtfelder, kopierbar)

```
Artikel-Brief — [Arbeitstitel]
- Ziel-Keyword:            z. B. "wallbox installieren kosten"
- Sekundär-Keywords:       z. B. "wallbox förderung", "wallbox 11 kw kosten"
- Suchintention:           informational
- SERP-Befund:             Top-3 sind Ratgeber, ~1.400 Wörter, FAQ-Snippet vorhanden
- Wortzahl-Korridor:       1.200–1.600
- Zielgruppe:              Hausbesitzer, plant E-Auto-Ladepunkt, Region [Stadt]
- Brand-Voice-Referenz:    context/voice.md
- Cluster / Pillar-Page:   "Elektromobilität zuhause" → /ratgeber/wallbox
- Interne Links (Soll):    Pillar; Geschwister "wallbox förderung [stadt]";
                           Service "/leistungen/wallbox-installation"
- Conversion-Ziel:         Angebotsformular (= Lead lt. context/goals.md)
- H2-Gliederung:           [aus People-also-ask + Sekundär-Keywords]
- Do / Don't:              [Kunden-spezifisch]
```

### Aufbau eines Ratgeber-Artikels

```
H1: [Keyword als Frage oder Aussage]
Intro (2–4 Sätze): Problem benennen + Kernantwort SOFORT geben
                    (Featured-Snippet-fähig, eigenständig verständlich).
H2: [Direkte Antwort vertieft]   → Detail, Zahlen, Beispiel
    >> Inline-CTA (weich): "Unsicher bei [X]? [Kostenlose Einschätzung anfragen]"
H2: [Sekundär-Frage 1]           → People-also-ask
H2: [Sekundär-Frage 2]
H2: [Praxis / Schritte / Vergleich]  → Liste oder Tabelle (snippet- & GEO-tauglich)
H2: Häufige Fragen (FAQ)         → 3–5 Q&A, mit FAQ-Schema
H2: Fazit + nächster Schritt
    >> CTA-Block (klar): siehe Conversion-Block unten
```

### Topic-Cluster & Pillar-Page (Beispiel Elektriker)

```
PILLAR-PAGE: /ratgeber/wallbox  — "Wallbox installieren: der komplette Ratgeber"
  breit, deckt das ganze Thema ab, verlinkt zu allen Cluster-Artikeln
   ├── /ratgeber/wallbox-kosten          "Was kostet eine Wallbox-Installation?"
   ├── /ratgeber/wallbox-foerderung-bremen "Wallbox-Förderung in Bremen 2026"
   ├── /ratgeber/wallbox-11-vs-22-kw     "Wallbox 11 kW oder 22 kW?"
   └── /ratgeber/wallbox-altbau          "Wallbox im Altbau nachrüsten"
Conversion-Ziel des Clusters → /leistungen/wallbox-installation (Service-Seite)
```

Regel: Cluster-Artikel verlinken alle zur Pillar-Page und zur Service-Seite. Die Pillar-Page verlinkt zu jedem Cluster-Artikel. Geschwister verlinken bei thematischer Nähe untereinander.

### Interne-Verlinkungs-Anker (kopierbar)

```
zur Pillar:        "Mehr dazu im [Wallbox-Ratgeber]."
zum Geschwister:   "Wie viel das kostet, zeigt [unser Beitrag zu Wallbox-Kosten]."
zum Conversion-Pfad: "Wir übernehmen die [Wallbox-Installation in [Stadt]] für Sie."
```
Nie: "hier", "klicken Sie hier", "mehr".

### Conversion-Block am Artikelende (an Conversion-Definition anpassen)

```
Formular-Lead:  "Wallbox in [Stadt] geplant? Fordern Sie ein
                 unverbindliches Festpreis-Angebot an." [Angebot anfragen]
Anruf:          "Fragen zur Installation? Rufen Sie uns an: [Tel]."
WhatsApp:       "Schnelle Frage? Schreiben Sie uns per WhatsApp: [Link]."
Buchung:        "Termin für die Vor-Ort-Beratung sichern." [Termin buchen]
```

## Bezug

- **Skills:** `write-blog` (führt dieses Playbook wörtlich aus), `seo-optimize` (Schritt 8), `geo-optimize` (snippet-/zitierfähige Struktur), `build-report` (Content-Wirkung im Reporting).
- **Workflows:** `content-pipeline` (Keyword-Research → Brief → Draft → SEO/GEO → Bilder → Publish) ist die Hauptkette dieses Playbooks; `new-site-build` legt initiale Pillar-Pages an.
- **Andere Playbooks:** `seo-onpage.md` (Keyword-Mapping, Title/Meta, interne Verlinkung), `copywriting.md` (Voice, CTAs), `geo.md` (Entitäten/strukturierte Antworten), `schema-structured-data.md` (Article-/FAQ-Schema), `conversion-tracking.md` (CTA-Tracking via Matomo + Google-Ads-Conversion), `local-seo.md` (lokaler Bezug, City-Cluster).
- **Daten:** Keyword-Prioritätsliste aus `context/` (SOP 4.2), Sistrix-MCP (`keyword_seo_searchintent`, `keyword_seo`, `keyword_seo_serpfeatures`) für Intention/Volumen/SERP-Features.
- **Geerntet aus:** SOP 4.1 (Content-Task-Bearbeitung — Brief-Pflichtfelder, KI-produziert/Mensch-entscheidet, Quality-Review, max. 1 Iteration), SOP 4.2 (Keyword-Recherche — Suchintention, Clustering, Priorisierung).
```
