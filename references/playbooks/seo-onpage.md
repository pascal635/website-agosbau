# Playbook: On-Page SEO

> Zweck: Jede Kundenseite so strukturieren und auszeichnen, dass sie für die priorisierten Keywords rankt und lokale B2C-Anfragen in Leads verwandelt.

## Prinzipien

- Eine Seite = ein Primary Keyword = eine Suchintention. Keine zwei Seiten kämpfen um dasselbe Keyword (Kannibalisierung vermeiden).
- Lokal vor generisch: Bei lokalen Dienstleistern gewinnt "[Leistung] + [Stadt]" fast immer vor dem Wort ohne Ort. Stadt gehört in Title, H1 und URL.
- Transaktionale und lokale Intention zuerst bedienen — die bringen direkt Leads. Informational dient dem Vertrauensaufbau (Blog).
- Keyword-Recherche steht vor jedem Text. Kein Title, keine H1, keine Seite ohne zugewiesenes Keyword aus dem Mapping.
- Schreiben für Menschen, auszeichnen für Maschinen: Keyword natürlich platzieren, nie stopfen. Zielwert Keyword-Dichte unter 2 %.
- Quick Wins zuerst: Seiten/Keywords auf Position 5–15 (Sistrix) bringen den schnellsten Return — kleine On-Page-Optimierung statt neuer Seite.

## Schritt für Schritt

### Phase A — Keyword-Recherche (Grundlage, vor jedem Bau)

1. **Seed-Keywords sammeln (10 Min).** Quellen: Onboarding-Fragebogen (Leistungen, Zielgruppe, Region), bestehende Kunden-Website, Google Business Profil (Kategorien), Top-2-3-Wettbewerber. Struktur für lokale Dienstleister:
   - `[Leistung] + [Stadt/Region]`
   - `[Leistung] + [Kundenproblem]`
   - `[Branche] + [Stadt/Region]`
   - `[Leistung] in der Nähe`
2. **Expansion mit Sistrix (20 Min).** Seeds in Sistrix (MCP) eingeben. Pro Keyword erheben: Suchvolumen (DE), Keyword-Difficulty (KD), SERP-Features (Ads? Local Pack? Featured Snippet?), Suchintention. Verwandte Keywords und "People also ask"-Fragen ergänzen.
   - Sistrix-Tools: `keyword_seo` (Volumen), `keyword_seo_metrics` (KD), `keyword_seo_searchintent`, `keyword_seo_serpfeatures`, `domain_competitors_seo` (Wettbewerber).
3. **Suchintention klassifizieren.** Transaktional > Lokal > Informational > Navigational (Prioritätsreihenfolge, siehe Vorlage).
4. **Clustern (15 Min).** Keywords nach Thema gruppieren. Jedes Cluster = eine Seite oder ein Artikel.
5. **Priorisieren.** Sortieren nach: (1) Kaufintention, (2) lokale Relevanz, (3) realistisches Ranking-Potenzial (KD vs. Domain-Stärke), (4) Suchvolumen als Tiebreaker. Ergebnis: Top 20–30 Keywords. Filter: Volumen unter 50/Monat raus — Ausnahme: sehr niedrige KD + direkter Fit.
6. **Mappen.** Jedes Cluster einer URL zuweisen (Keyword-Mapping-Tabelle). Top-5 für sofortige Maßnahmen markieren.

### Phase B — On-Page-Umsetzung pro Seite

7. **URL festlegen.** Kurz, sprechend, mit Primary Keyword. Kleinbuchstaben, Bindestriche, keine Stoppwörter, keine IDs. Beispiel: `/elektriker-bremen-notdienst`.
8. **Title-Tag schreiben.** Max. 60 Zeichen. Primary Keyword vorne, Stadt rein, Marke ans Ende. Genau ein Title pro Seite.
9. **Meta-Description schreiben.** Max. 160 Zeichen. Primary Keyword + Nutzen + Call-to-Action. Kein Ranking-Faktor, aber treibt die Klickrate.
10. **H-Struktur aufbauen.** Genau eine H1 (enthält Primary Keyword, darf vom Title abweichen). H2 für Hauptabschnitte (Secondary Keywords + W-Fragen aus "People also ask"). H3 untergeordnet. Keine Ebene überspringen (kein H3 ohne H2).
11. **Body-Text.** Primary Keyword in den ersten 100 Wörtern. Secondary Keywords natürlich verteilen. Lokale Signale: Stadt, Stadtteile, Anfahrtsgebiet nennen.
12. **Bilder auszeichnen.** Jedes inhaltliche Bild bekommt ein beschreibendes Alt-Attribut (was ist zu sehen + ggf. Keyword/Ort, natürlich). Dateiname sprechend (`wallbox-installation-bremen.jpg`, nicht `IMG_2031.jpg`). Dekobilder: leeres Alt (`alt=""`).
13. **Interne Verlinkung setzen.** Service-Unterseiten verlinken auf die Haupt-Service-Seite und umgekehrt. Blog-Artikel verlinken auf die passende Geld-Seite (Service/Kontakt). Ankertext = Ziel-Keyword, nicht "hier klicken". Jede neue Seite von mindestens einer bestehenden Seite verlinken.
14. **Snippet-Optimierung.** Bei Keywords mit Featured Snippet / People-also-ask (aus Sistrix `keyword_seo_serpfeatures`): die Frage als H2/H3 setzen und direkt darunter in 40–55 Wörtern beantworten. Für lokale Treffer: NAP (Name, Adresse, Telefon) konsistent + LocalBusiness-Schema (siehe Playbook Technical/Schema).

### Phase C — Kontrolle & Pflege

15. **Vor Launch prüfen** mit der Checkliste unten.
16. **Nach Indexierung messen.** Sistrix `project_ranking` / `domain_visindex` beobachten. Seiten auf Position 5–15 als nächste Quick Wins nachschärfen (Title/H1/Snippet).
17. **Halbjährlich aktualisieren.** Neue Keywords durch Wettbewerber/Trends? Welche Rankings sind reif für die nächste Stufe? Welche Keywords ranken schon auf Seite 2 → Quick Wins.

## Checkliste

Pro Seite vor Launch:

- [ ] Seite hat genau ein zugewiesenes Primary Keyword aus dem Mapping
- [ ] URL kurz, kleingeschrieben, mit Keyword, Bindestriche, keine IDs/Stoppwörter
- [ ] Title-Tag ≤ 60 Zeichen, Primary Keyword vorne, Stadt drin, Marke hinten
- [ ] Meta-Description ≤ 160 Zeichen mit Keyword + Nutzen + CTA
- [ ] Genau eine H1 mit Primary Keyword
- [ ] H2/H3 hierarchisch, keine Ebene übersprungen, Secondary Keywords + W-Fragen drin
- [ ] Primary Keyword in den ersten 100 Wörtern, Dichte unter 2 %
- [ ] Lokale Signale (Stadt/Stadtteile/Gebiet) im Text genannt
- [ ] Jedes inhaltliche Bild mit Alt-Text + sprechendem Dateiname; Deko-Bilder alt=""
- [ ] Mindestens eine interne Verlinkung rein und raus, Ankertext = Keyword
- [ ] Bei Snippet-Chance: Frage als Überschrift + 40–55-Wort-Antwort darunter
- [ ] Keine Keyword-Kannibalisierung mit anderer Seite

Pro Recherche:

- [ ] 20–30 priorisierte Keywords mit Volumen, KD, Intention, SERP-Features
- [ ] Keine Keywords < 50 Volumen (außer niedrige KD + Fit)
- [ ] Jedes Keyword-Cluster genau einer URL zugewiesen
- [ ] Top-5-Sofortmaßnahmen markiert

## Vorlagen & Beispiele

### Keyword-Mapping-Tabelle (Output der Recherche)

| Keyword | Volumen (DE) | KD | Intention | SERP-Features | Ziel-URL | Priorität | Begründung |
|---|---|---|---|---|---|---|---|
| elektriker bremen | 1.300 | 38 | Lokal | Local Pack, Ads | /elektriker-bremen | Hoch | Hauptleistung + Stadt, direkt Leads |
| elektriker notdienst bremen | 320 | 22 | Transaktional | Ads | /elektriker-notdienst-bremen | Hoch | Niedrige KD, hohe Intention |
| wallbox installieren bremen | 90 | 18 | Transaktional | — | /wallbox-bremen | Mittel | Quick Win, geringe Konkurrenz |
| was kostet ein elektriker | 720 | 41 | Informational | Featured Snippet | /blog/elektriker-kosten | Mittel | Vertrauen + Snippet-Chance |

### Suchintention → Priorität

| Intention | Beispiel | Priorität |
|---|---|---|
| Transaktional (kaufen/buchen) | "elektriker bremen beauftragen" | Sehr hoch — direkt Leads |
| Lokal (in der Nähe) | "elektriker bremen mitte" | Sehr hoch — Local Pack |
| Informational (lernen) | "was kostet elektriker stundensatz" | Mittel — Vertrauen |
| Navigational (Marke) | "[Firmenname] bremen" | Niedrig — wird sowieso gefunden |

### Title-Tag (≤ 60 Zeichen)

```
[Primary Keyword inkl. Stadt] | [Nutzen/USP] – [Marke]
```
Beispiele:
- `Elektriker Bremen – 24h Notdienst & Festpreis | Mustermann`
- `Kosmetikstudio München – Termin in 24h | Studio Bella`
- `Immobilienmakler Hamburg – kostenlose Bewertung | Nord Immo`

### Meta-Description (≤ 160 Zeichen)

```
[Leistung] in [Stadt]? [Nutzen/Beweis]. [CTA mit Verb].
```
Beispiel:
`Elektriker in Bremen gesucht? Schnell vor Ort, Festpreis, 4,9★ bei Google. Jetzt unverbindlich anfragen — Rückruf in 30 Minuten.`

### H-Struktur (Service-Seite)

```
H1: Elektriker in Bremen – schnell, sauber, zum Festpreis
  H2: Unsere Leistungen für Bremen und Umgebung
    H3: Elektroinstallation
    H3: Wallbox & E-Mobilität
  H2: Was kostet ein Elektriker in Bremen?      (Snippet-Chance)
  H2: Notdienst in Bremen – rund um die Uhr
  H2: So erreichen Sie uns                       (NAP + CTA)
```

### Bild-Alt

```
Gut:   alt="Elektriker installiert Wallbox in Garage in Bremen-Nord"
Deko:  alt=""
```

### Interne Verlinkung (Beispiel-Logik)

- Startseite → alle Haupt-Service-Seiten
- Service-Seite → relevante Unterseiten + Kontakt/Termin
- Blog-Artikel ("Was kostet…") → passende Service-Seite (Ankertext = Service-Keyword)
- Jede Unterseite → zurück zur Haupt-Service-Seite

### Snippet-Block (Direct Answer)

```
H2: Was kostet ein Elektriker in Bremen?
Ein Elektriker in Bremen kostet im Schnitt 50–70 € pro Stunde plus
Anfahrt. Für planbare Aufträge bieten wir Festpreise an. [40–55 Wörter,
Frage in einem Satz direkt beantwortet, dann Details darunter.]
```

## Bezug

- **Workflow Bauen:** Keyword-Mapping + On-Page-Auszeichnung sind Pflichtinput, bevor eine Seite gebaut wird. URL- und H-Struktur fließen direkt in den Seitenbau.
- **Workflow Messen:** Rankings über Sistrix-MCP (`project_ranking`, `domain_visindex`) verfolgen; speist die Quick-Win-Liste.
- **Workflow Entscheiden:** Position-5–15-Keywords priorisieren statt neuer Seiten.
- **Verwandte Playbooks:** Technical SEO / Schema (LocalBusiness, NAP), Content/Blog (Informational-Cluster), Local SEO (Google Business Profil).
- **Datenquelle:** Sistrix (MCP). **Tracking:** Matomo + Google-Ads-Conversion (nicht GA).
- **Quelle dieses Wissens:** geerntet aus LIKOVO SOP 4.2 (Keyword-Recherche) und SEO-Briefing_Agent.md.
