# SEO + GEO Onpage-Plan — AGOS BAU

**Erstellt:** 2026-08-18 · **Owner:** Pascal · **Status:** in Umsetzung (Schritt für Schritt)
**Danach:** Optimierungsroutine im 4-Wochen-Takt, sobald GSC-Daten vorliegen (GSC verbunden 2026-08-18, Daten ab ~2026-08-19).

---

## 1. Ist-Zustand (Sistrix, 2026-08-18)

**Sichtbarkeitsindex:** 0,0001 (praktisch null; Peak der alten WP-Seite: 0,0025 im Feb 2025).
**Rankings gesamt:** 13 Keywords. Relaunch ist ~8 Wochen live — Google indexiert noch.

| Keyword | Position | URL | Bewertung |
|---|---|---|---|
| badsanierung bremen kosten | **1** | /badsanierung-bremen/ | 💎 wertvollster Asset — schützen |
| fliesenleger achim | **1** | / | ✓ Heimatmarkt steht |
| agos bau | 1–2 | / | ✓ Brand |
| zementfliesen verlegen bremen | 6 | /fliesenverlegung-bremen/ | Quick-Win-Kandidat |
| badsanierung wandfliesen tarmstedt lilienthal | 6 | /fliesenleger-bremen-lilienthal/ | City-Pages greifen |
| vollverfliesung | 9 | / | Quick-Win-Kandidat |
| fliesenleger bremen neustadt | 12 | / | → eigene City-Page fehlt |
| barrierefreies bad bremen | **17** | /barrierefreies-bad-bremen/ | wichtigster Quick Win (Seite 2 → 1) |

**Kritische Lücken (ranken nicht in Top 100):**
- `badsanierung bremen` — 150 Klicks/Mon., CPC 4,40 €, Wettbewerb 42/100. **Das Haupt-Keyword.**
- `fliesenleger bremen` — 150 Suchen/Mon., Wettbewerb 29/100.
- `großformatfliesen verlegen bremen` — Nische, kaum Wettbewerb, trotzdem kein Ranking.

**SERP-Analyse `badsanierung bremen`:** #1 die-olligs-gmbh.de, #2 bergmann-bremen.de, #3 peinemann.de, #4 badsanierung-bremen.com (Exact-Match-Domain), **#5 gutehandwerker.com, #6 gelbeseiten.de** ← Verzeichnisse in den Top 6. Bedeutet: (a) Google belohnt hier dedizierte, tiefe Badsanierungs-Seiten, (b) Verzeichnisse sind exakt die Quellen, aus denen LLMs „wer bietet X in Bremen"-Antworten bauen → Offpage-Einträge sind GEO-Pflicht, nicht Kür.

**Diagnose in einem Satz:** Die Struktur ist richtig (Nischen- und City-Pages greifen bereits), aber die Seite hat zu wenig Tiefe, zu wenig Fragen-Content und null externe Signale — deshalb weder Rankings in der Breite noch LLM-Nennungen.

---

## 2. Ziele

| Ziel | Messgröße | Zielwert (12 Wochen) |
|---|---|---|
| SEO: Haupt-Keyword | `badsanierung bremen` Position | Top 100 → Top 20 → Top 10 |
| SEO: Quick Wins | `barrierefreies bad bremen`, `zementfliesen`, `vollverfliesung` | alle Top 10 |
| SEO: Breite | Anzahl Rankings (Sistrix kwcount) | 13 → 50+ |
| GEO: Nennung | Testfragen an ChatGPT/Gemini/Perplexity (Abschnitt 6) | AGOS wird bei ≥3 von 8 Fragen genannt |
| Leads | Formular-Anfragen (GSC + Web3Forms) | messbarer organischer Lead-Fluss |

---

## 3. Arbeitspakete SEO-Onpage (priorisiert)

### Phase A — Haupt-Keyword & Quick Wins (Woche 1–2)

- [x] **A1 · `/badsanierung-bremen/` auf „Badsanierung Bremen" durchsetzen.** ✅ 2026-08-18
  **Hauptursache gefunden:** Die H1 enthielt das Wort „Badsanierung" überhaupt nicht („Ihr neues Bad in Bremen – einmal richtig, zum Festpreis."); „Badsanierung Bremen" stand nur als `<span>` darüber. H1 jetzt „Badsanierung in Bremen – einmal richtig, zum Festpreis.".
  Neue Sektionen: Gewerke-Koordination · Dauer (Faktentabelle, 4 Umfänge) · Altbau/Bremen (Holzbalkendecken, schiefe Wände, alte Leitungen). 946 → **1.453 Wörter**. Kosten-Sektion + Preistabelle unangetastet (#1-Ranking geschützt).
  <details><summary>ursprüngliche Aufgabenbeschreibung</summary>
  Google versteht die Seite aktuell primär als Kosten-Seite (rankt #1 für „…kosten", gar nicht fürs Haupt-KW). Fix: Content-Tiefe erhöhen, ohne die Kosten-Sektion zu schwächen — Sektionen ergänzen zu Ablauf im Detail (7 Schritte vertiefen), Gewerke-Koordination, Dauer, Altbau-Besonderheiten (Bremer Altbau!), Materialwahl. Ziel ~1.500+ Wörter. H2-Struktur mit KW-Varianten („Badsanierung in Bremen: Ablauf", „Was kostet eine Badsanierung in Bremen?").
  ⚠️ Nicht anfassen: bestehende Kosten-Tabelle + Title/Meta-Teile, die das #1-Ranking tragen.
  </details>
- [ ] **A2 · `/barrierefreies-bad-bremen/` von Pos. 17 auf Seite 1.**
  Content-Ausbau: KfW-Zuschuss 455-B / Pflegekasse-Zuschuss (4.000 €) konkret erklären (Fakten-Block mit Zahlen), DIN 18040-2, bodengleiche Dusche als eigene H2. Interne Links von Startseite + Badsanierung mit Ankertext „barrierefreies Bad Bremen".
- [ ] **A3 · Interne Verlinkung systematisch.**
  Jede City-Page verlinkt auf Badsanierung + passende Nischenseite (kontextuell, differenzierte Ankertexte: „Badsanierung in Bremen-Oberneuland" statt 3× „Badsanierung"). Leistungsseiten untereinander verlinken. Startseite → alle Leistungsseiten mit KW-Ankern.
- [ ] **A4 · Title/Meta-CTR-Pass über alle 21 Seiten.**
  Jeder Title: KW vorn + Differenzierung (Festpreis / 5,0★ / HWK). Meta-Description mit CTA. Einmal systematisch durchgehen.

### Phase B — Content-Lücken (Woche 2–4)

- [ ] **B1 · City-Page „Badsanierung Achim"** (`/badsanierung-achim/`) — Keyword-Recherche Prio #6, Heimatmarkt, wir ranken schon #1 für „fliesenleger achim". Schneller Sieg.
- [ ] **B2 · City-Page „Fliesenleger Bremen-Neustadt"** — wir ranken #12 ohne dedizierte Seite; mit Seite → Seite 1 realistisch.
- [ ] **B3 · `/fliesenverlegung-bremen/` ausbauen** für „fliesen verlegen lassen bremen" + „zementfliesen verlegen bremen" (Pos. 6 → Top 3): eigene H2 „Zementfliesen & Mosaik", eigene H2 „Vollverfliesung".
- [ ] **B4 · `/grossformatfliesen-bremen/` prüfen & schärfen** — Nische ohne Wettbewerb, aber kein Ranking: Indexierung in GSC prüfen (sobald Daten da), Content-Tiefe + interne Links erhöhen.
- [ ] **B5 · Referenzen mit echten Projekten füllen** (braucht Andrés Fotos + Projektdaten: Stadtteil, Dauer, Umfang — keine Kundennamen nötig). Jede Referenz = Long-Tail-Magnet + E-E-A-T-Beweis. **Blocker: Input André.**

---

## 4. Arbeitspakete GEO-Onpage (Woche 1–3, parallel zu SEO)

**Prinzip:** LLMs zitieren Seiten, die (a) Fragen wörtlich beantworten (40–60-Wort-Antworten direkt unter der Frage), (b) harte, datierte Fakten liefern, (c) eine eindeutige, überall identische Entität haben.

- [~] **G1 · Frage-Blöcke auf jeder Leistungsseite.** (Badsanierung ✅ 2026-08-18: 4 neue Fragen ergänzt — Gewerke-Koordination, Ausziehen währenddessen, Altbau, Festpreis-Sinn. Rest offen.)
  Je Seite 3–6 echte Kundenfragen als H2/H3, Antwort in 40–60 Wörtern, alleinstehend verständlich (LLM kann sie ohne Kontext zitieren). Fragenliste je Seite:
  - Badsanierung: „Was kostet eine Badsanierung in Bremen?" (da, schützen) · „Wie lange dauert eine komplette Badsanierung?" · „Wer koordiniert die Gewerke bei einer Badsanierung?" · „Lohnt sich eine Badsanierung zum Festpreis?"
  - Barrierefrei: „Welche Zuschüsse gibt es für ein barrierefreies Bad?" · „Was kostet eine bodengleiche Dusche?"
  - Großformat: „Kann man Großformatfliesen auf Fußbodenheizung verlegen?" · „Was kostet das Verlegen von XXL-Fliesen?"
  - Fliesenverlegung: „Was kostet Fliesenlegen pro m² in Bremen?" ← eine der meistgestellten Fragen überhaupt, fehlt komplett.
- [~] **G2 · FAQPage-Schema erweitern** (Badsanierung ✅ 2026-08-18: 5 → 9 Fragen im Schema. Rest offen.) — jeder neue Frage-Block wandert zusätzlich ins FAQ-Schema der Seite (maschinenlesbar = zitierbar).
- [ ] **G3 · Entitäts-Hub „Über uns" ausbauen.**
  Fakten-Block als Tabelle: gegründet 2019 · Inhaber André Paul Gostomczyk · HWK-eingetragen · 4 Mitarbeiter · >100 Projekte · Ø 5,0 (Google) · Einzugsgebiet · Markensysteme (Schlüter, ARDEX, Sopro, Mirage, Atlas Concorde) · DIN 18534/18040. Sichtbares „Stand: {Monat Jahr}". LocalBusiness-Schema vervollständigen: `geo`, `openingHoursSpecification`, `areaServed` (Stadtteile einzeln), `sameAs` (GBP-URL, Instagram), `knowsAbout`.
- [ ] **G4 · Auswahl-Ratgeber „Woran erkennt man einen guten Fliesenleger in Bremen?"** (`/ratgeber/fliesenleger-finden-bremen/` o. ä.)
  DAS ist die Onpage-Antwort auf „wer ist der beste Fliesenleger in Bremen": Eine ehrliche Checkliste (HWK-Eintrag, DIN-18534-Abdichtung, Festpreis, Referenzen, Bewertungen) — mit AGOS als belegtem Beispiel, das alle Kriterien erfüllt. LLMs zitieren Kriterien-Listen bevorzugt. Bonus: rankt für „fliesenleger bremen erfahrungen/bewertungen/finden".
- [ ] **G5 · `llms.txt` erweitern** um: die Fakten aus G3, Preisspannen je Leistung, die Frage-Antwort-Paare aus G1 (Kurzform). Prüfen, ob `llms-full.txt` mit Volltexten sinnvoll ist.
- [ ] **G6 · Vergleichs-Fakten:** auf Badsanierung eine neutrale Tabelle „Badsanierung Bremen: Kostenrahmen nach Badgröße" (haben wir) + „Dauer nach Umfang" (neu) — datiert, mit Quelle „eigene Projektdaten aus >100 Bädern". Aggregierte eigene Daten sind Zitier-Gold.

---

## 5. GEO-Offpage — ohne das wird's nichts (parallel, Owner: Pascal/André)

**Ehrliche Einordnung:** Auf „wer ist der beste Fliesenleger in Bremen?" antworten ChatGPT/Gemini heute primär aus **Drittquellen**: Google-Bewertungen/Maps, gutehandwerker.com, gelbeseiten.de, 11880, MyHammer, lokale Listen-Artikel. Onpage (Abschnitt 4) macht AGOS zitierfähig — **genannt** wird, wer in diesen Quellen präsent ist. Das ist kein Code, deshalb hier nur als Checkliste mit Ownern:

- [ ] **O1 · Google Business Profile** (wichtigste Einzelquelle): Kategorien (Fliesenleger + Badsanierung), Leistungen gepflegt, Fotos echter Projekte, Öffnungszeiten = Website, Website-Link auf https://agosbau.de. **Owner: Pascal (Zugang: André).**
- [ ] **O2 · Bewertungs-Routine:** Nach jedem abgeschlossenen Projekt aktiv um Google-Bewertung bitten (Ziel: 6 → 25+ in 6 Monaten; Menge × Frische schlägt alles). QR-Karte/WhatsApp-Link für André. **Owner: André.**
- [ ] **O3 · Verzeichnis-Einträge mit zeichengleicher NAP** (exakt wie Impressum): gutehandwerker.com, gelbeseiten.de, 11880.com, werkenntdenbesten.de, MyHammer-Profil, Houzz. Die ersten zwei ranken in den Top 6 für unser Haupt-KW. **Owner: Pascal.**
- [ ] **O4 · Instagram (@agos_bau) verlinken** und Projekt-Posts mit Standort — sekundäres Entitäts-Signal.

---

## 6. Optimierungsroutine (ab GSC-Daten, 4-Wochen-Takt)

Jede Runde = `/weekly-review`-Aufruf mit diesem Ablauf, Ergebnis in `decisions/log.md`:

1. **GSC ziehen:** Impressionen/Klicks/Ø-Position je Cluster (Badsanierung, Fliesenleger, City, Nischen). Quick Wins = Keywords auf Pos. 5–15 mit Impressionen → gezielt stärken.
2. **Sistrix ziehen:** SI-Trend, kwcount (Ziel-Kurve: 13 → 50+), neue Rankings, Wettbewerber-Bewegung.
3. **GEO-Audit (manuell, dokumentiert):** dieselben 8 Testfragen an ChatGPT, Gemini und Perplexity stellen, Antworten in `intake/research/geo-audit-log.md` protokollieren (Datum, Tool, wird AGOS genannt? welche Quellen zitiert das Tool?):
   - „Wer ist der beste Fliesenleger in Bremen?"
   - „Wer bietet Badsanierung in Bremen an?"
   - „Was kostet eine Badsanierung in Bremen?"
   - „Fliesenleger in Achim empfehlen?"
   - „Wer macht barrierefreie Bäder in Bremen?"
   - „Großformatfliesen verlegen lassen Bremen — an wen wenden?"
   - „Badsanierung Bremen Festpreis — welche Firma?"
   - „Wie finde ich einen guten Fliesenleger in Bremen?"
   → Die von den LLMs zitierten Quellen sind die nächsten Offpage-Ziele (O3 erweitern).
4. **Entscheiden:** die *eine* wichtigste Maßnahme der nächsten 4 Wochen festlegen, umsetzen, loggen.

**Erste Routine-Runde:** ~2026-09-15 (4 Wochen nach Plan-Start, GSC hat dann ~4 Wochen Daten).

---

## 7. Reihenfolge der Umsetzung (Vorschlag)

| # | Paket | Aufwand | Hebel |
|---|---|---|---|
| 1 | A1 Badsanierung-Ausbau + G1/G2-Fragen dort | mittel | ★★★ |
| 2 | A2 Barrierefrei Pos. 17→Top 10 + Zuschuss-Fakten | klein | ★★★ |
| 3 | G3 Entitäts-Hub Über uns + Schema | klein | ★★ (GEO) |
| 4 | A3 interne Verlinkung + A4 Title-Pass | klein | ★★ |
| 5 | G4 Auswahl-Ratgeber (neue Seite) | mittel | ★★★ (GEO) |
| 6 | B1/B2 neue City-Pages | klein | ★★ |
| 7 | B3/B4 Leistungsseiten-Ausbau + G1-Rest | mittel | ★★ |
| 8 | G5 llms.txt + G6 Datentabellen | klein | ★ |
| — | O1–O4 Offpage | laufend | ★★★ (GEO) |

**Nicht tun:** separate Kosten-Seite bauen (kannibalisiert das #1-Ranking) · Keyword-Stuffing in City-Pages (Doorway-Risiko — min. 60 % Unique Content halten) · GA4 (Entscheidung steht) · Rankings vor Woche 4 bewerten (Relaunch braucht Indexierungszeit).
