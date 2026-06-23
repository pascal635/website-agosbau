# Playbook: Design-System nutzen

> Zweck: Die KI baut jede Seite aus den vorhandenen Komponenten und Tokens des Design-Systems zusammen statt frei zu erfinden — damit alle Seiten und Klone konsistent, schnell und wartbar bleiben.

## Prinzipien

- **Komponenten zuerst, frei nur im Notfall.** Vor jedem Bau-Schritt gilt: gibt es in `references/design-system.md` eine Komponente, die das loest? Dann diese nehmen. Eine Seite ist eine Anordnung bestehender Bloecke, kein neues Custom-HTML. Freies Bauen ist die Ausnahme, nicht der Standard.
- **Tokens sind Gesetz, keine Vorschlaege.** Farben, Abstaende, Schriftgroessen, Radien, Schatten kommen ausschliesslich aus den definierten Tokens. Nie ein Hex-Wert, nie ein `px`-Abstand hart in den Code. Wer einen Token braucht, der fehlt, meldet das — er wird nicht erfunden.
- **Konsistenz schlaegt Kreativitaet.** Gleiche Funktion = gleiche Komponente = gleiches Aussehen ueber alle Seiten. Ein CTA-Button sieht auf der Startseite aus wie auf der Landingpage. Wiedererkennung baut Vertrauen — gerade bei lokalen B2C-Dienstleistern, die ueber Serioesitaet verkaufen.
- **Eine neue Komponente ist eine Entscheidung, kein Reflex.** Neue Komponenten entstehen nur, wenn ein echtes Muster 3x gebraucht wird und keine bestehende es abdeckt. Dann wird sie sauber ins Design-System aufgenommen — mit Tokens, Varianten und Doku — nicht als Einzelfall-Code in eine Seite gekippt.
- **Varianten nutzen, nicht kopieren-und-aendern.** Braucht ein Block eine Abwandlung (z.B. CTA in dunkel), zuerst pruefen: gibt es eine Variante (Prop) dafuer? Wenn ja, Variante setzen. Wenn nein und der Bedarf wiederholt sich, Variante zur Komponente hinzufuegen — nicht die Komponente duplizieren.
- **Mobile-first und barrierearm by default.** Jede Komponente kommt responsiv und mit korrekten Kontrasten/ARIA aus dem System. Beim Zusammensetzen nichts an diesen Defaults brechen (keine zu kleinen Touch-Ziele, keine Token-Farbe gegen Token-Farbe ohne Kontrast-Check).

## Schritt fuer Schritt

1. **Design-System lesen.** Oeffne `references/design-system.md`. Verschaffe dir Ueberblick ueber: (a) Token-Sets (Farbe, Typografie, Spacing, Radius, Schatten, Breakpoints), (b) Komponenten-Inventar (Name, Zweck, Varianten/Props), (c) Do/Don't-Regeln. Baue nichts, bevor du dieses Inventar kennst.

2. **Seitenziel und Bloecke festlegen.** Lege fest, was die Seite leisten soll (aus dem jeweiligen Seiten-Playbook, z.B. Landingpage). Schreibe die Seite als Liste von Bloecken auf — von oben nach unten — und ordne jedem Block eine Komponente aus dem Inventar zu. Beispiel: Hero -> `Hero`, Beweis -> `TestimonialGrid`, Abschluss -> `CtaBanner`.

3. **Abdeckung pruefen (Gap-Check).** Fuer jeden Block: deckt eine Komponente ihn ab? Markiere drei Faelle: (a) deckt direkt -> nutzen, (b) deckt mit Variante -> Variante setzen, (c) keine Abdeckung -> in Schritt 7 entscheiden. Erst weiterbauen, wenn jeder Block einem dieser Faelle zugeordnet ist.

4. **Komponenten instanziieren, Inhalt fuellen.** Setze die Komponenten mit ihren dokumentierten Props ein. Fuelle nur Inhalt (Text, Bild, Link, Variante) — verandere nie das innere Markup oder Styling der Komponente direkt auf der Seite. Brauchst du andere Abstaende zwischen Bloecken, nutze die Layout-/Spacing-Tokens, nicht eigene Werte.

5. **Tokens statt Festwerte verwenden.** Beim Setzen jeder Eigenschaft: Token referenzieren (z.B. `--color-primary`, `--space-6`, `--radius-md`), nie `#1a73e8` oder `24px`. Grep am Ende den erzeugten Seiten-Code nach harten Hex-Werten und `px`-Abstaenden — Treffer sind Fehler und werden auf Tokens umgestellt.

6. **Konsistenz gegen bestehende Seiten pruefen.** Vergleiche die gebaute Seite mit einer bereits existierenden Seite des Klons: Sieht der CTA gleich aus? Gleiche Ueberschriften-Hierarchie? Gleiche Abstaende? Abweichungen ohne Grund sind ein Konsistenzbruch und werden korrigiert.

7. **Neue Komponente — nur bei bestaetigtem Bedarf.** Wenn ein Block von keiner Komponente/Variante abgedeckt ist, durchlaufe die Entscheidung in der Vorlage unten ("Wann eine neue Komponente?"). Faellt sie auf "ja", lege die Komponente sauber an (Tokens, Varianten, Doku, responsiv, barrierearm), trage sie in `references/design-system.md` ein und nutze sie dann. Niemals Einzelfall-Custom-Code in die Seite schreiben und liegen lassen.

8. **Design-System aktuell halten.** Jede neue Komponente, jede neue Variante, jeder neue Token wird im selben Zug in `references/design-system.md` dokumentiert (Name, Zweck, Props, Beispiel). Ein undokumentierter Baustein existiert fuer den naechsten Bau-Lauf nicht.

9. **Final pruefen und uebergeben.** Mobile + Desktop sichten, Token-Grep sauber, alle Bloecke aus Komponenten, neue Bausteine dokumentiert. Erst dann geht die Seite in den weiteren Bau-/Optimierungs-Schritt (Tracking, Launch, Messen).

## Checkliste

**Vor dem Bau**
- [ ] `references/design-system.md` gelesen (Tokens + Komponenten-Inventar + Do/Don't)
- [ ] Seite als Block-Liste (oben nach unten) notiert
- [ ] Jedem Block eine Komponente zugeordnet (direkt / Variante / Gap)

**Beim Bau**
- [ ] Komponenten via dokumentierte Props instanziiert (kein inneres Markup veraendert)
- [ ] Abwandlungen ueber Varianten/Props geloest, nicht durch Kopieren
- [ ] Abstaende/Layout ueber Spacing-Tokens, nicht ueber Festwerte
- [ ] Alle Farben/Schriften/Radien/Schatten via Tokens

**Konsistenz & Neue Komponenten**
- [ ] Gegen eine bestehende Seite auf Konsistenz geprueft (CTA, Hierarchie, Abstaende)
- [ ] Jeder Gap-Block durch die "Wann neue Komponente?"-Entscheidung gelaufen
- [ ] Neue Komponente/Variante/Token sauber angelegt (Tokens, responsiv, barrierearm)
- [ ] Neue Bausteine in `references/design-system.md` dokumentiert

**Abschluss**
- [ ] Token-Grep: keine harten Hex-Werte, keine harten `px`-Abstaende im Seiten-Code
- [ ] Mobile + Desktop gesichtet (Touch-Ziele, Kontraste, Umbruch)
- [ ] Alle Bloecke stammen aus Komponenten (kein liegengebliebener Custom-Code)

## Vorlagen & Beispiele

**Block -> Komponente Mapping (Beispiel: lokale Dienstleister-Startseite)**
```
[Hero]            -> Hero            (Variante: mit-Bild | mit-Formular)
[Leistungen]      -> ServiceCardGrid (3 Karten)
[Beweis]          -> TestimonialGrid + BadgeRow (Meisterbetrieb, Google 4,9)
[Standort/Kontakt]-> MapContact      (Adresse, Oeffnungszeiten, Telefon)
[Abschluss-CTA]   -> CtaBanner       (Variante: primary)
[Footer]          -> SiteFooter
```

**Token statt Festwert — richtig vs. falsch**
```
FALSCH:  background: #1a73e8;  padding: 24px;   border-radius: 8px;
RICHTIG: background: var(--color-primary);  padding: var(--space-6);  border-radius: var(--radius-md);
```

**Variante setzen statt duplizieren — richtig vs. falsch**
```
FALSCH:  <CtaBanner> + danach im Seiten-CSS die Farbe auf dunkel ueberschrieben
RICHTIG: <CtaBanner variant="dark">   (Variante in der Komponente definiert)
```

**Entscheidung: Wann eine neue Komponente?**
```
1. Deckt eine bestehende Komponente es ab?            -> JA: nutzen. Ende.
2. Deckt sie es mit einer bestehenden Variante ab?    -> JA: Variante setzen. Ende.
3. Wird das Muster >= 3x ueber Seiten gebraucht?      -> NEIN: einmaliger Fall ->
                                                          loese mit Tokens im naechstpassenden Block,
                                                          KEINE neue Komponente.
4. Ja, gebraucht und keine Abdeckung?                 -> Variante zu bestehender Komponente moeglich?
                                                          JA: Variante hinzufuegen (bevorzugt).
                                                          NEIN: neue Komponente anlegen (Tokens,
                                                          Props, responsiv, a11y) + in
                                                          design-system.md dokumentieren.
```

**Definition-of-Done fuer eine neue Komponente**
```
[ ] Nutzt ausschliesslich Tokens (keine Festwerte)
[ ] Hat klar benannte Props/Varianten
[ ] Responsiv (mobile-first), Touch-Ziele >= 44px
[ ] Kontrast geprueft (Text gegen Hintergrund)
[ ] Beispiel-Nutzung + Props in references/design-system.md eingetragen
```

**Haeufige Fehler (vermeiden)**
| Fehler | Konsequenz | Vermeidung |
|---|---|---|
| Hex-/px-Werte hart im Seiten-Code | Inkonsistenz, kein zentrales Update moeglich | Nur Tokens; Token-Grep vor Abschluss |
| Komponente kopiert und leicht geaendert | Doppelter Code, divergiert ueber Zeit | Variante setzen oder Variante hinzufuegen |
| Custom-Block fuer Einmal-Fall | Design-System verwaessert, naechster Bau kennt ihn nicht | Mit Tokens im bestehenden Block loesen |
| Neue Komponente ohne Doku | Naechster Bau-Lauf findet sie nicht, baut erneut | Sofort in design-system.md eintragen |
| Inneres Markup einer Komponente auf der Seite veraendert | Bricht globale Updates, Inkonsistenz | Nur Inhalt/Props fuellen, Komponente unangetastet |

## Bezug

- **references/design-system.md:** Single Source fuer Tokens und Komponenten-Inventar. Dieses Playbook setzt sie um; jede neue Komponente/Variante/Token wird dort dokumentiert.
- **Workflow Bauen (Schicht A):** Dieses Playbook ist die Bau-Disziplin im Kreislauf Bauen -> Messen -> Entscheiden -> Umsetzen. Es greift bei jeder Seiten-Erstellung.
- **Playbook Landingpages / weitere Seiten-Playbooks:** Die definieren *welche* Bloecke eine Seite braucht; dieses Playbook definiert, *wie* die Bloecke aus dem System gebaut werden (Komponenten + Tokens).
- **Skill weekly-review (Schicht C):** Entscheidet u.a. Conversion-/Design-Aenderungen. Werden Anpassungen am Look beschlossen, laufen sie ueber Tokens/Komponenten — eine Token-Aenderung wirkt konsistent auf alle Seiten.
- **Klonbarkeit:** Konsequente Nutzung von Tokens + Komponenten macht den Klon pro Kundenseite trivial — nur Tokens (Brand-Farben, Schrift) tauschen, Struktur bleibt.
