# Website-AIOS — Tech-Stack (Build-Schicht)

> ## ✅ ENTSCHIEDEN (2026-06-23): Astro + Tailwind
> **Status:** Entschieden. Gilt als **OS-Default für alle Klone** — keine offene Frage mehr.
> Build-Stack ist **Astro** (statisch-first) + **Tailwind CSS** mit Design-Tokens.
> **Begründung in einem Satz:** Astro liefert statisch-first die beste Core-Web-Vitals-Baseline und eine ruhige, git-native, dateibasierte Oberfläche, die Coding-Agents zuverlässig bauen und pflegen — exakt das Profil "viele kleine, schnelle, content-lastige lokale Dienstleister-Seiten, pro Kunde geklont".
> Der Optionen-Vergleich (Astro vs. Next.js vs. CMS) unten bleibt als **Historie** stehen.
> Bezug: Schicht A (Build) aus `website-aios-architektur.md`. Tracking-Default: Matomo + Google-Ads-Conversion + Meta Pixel (kein GA4). ICP: lokale B2C-Dienstleister mit physischem Standort.

---

> Hinweis: Abschnitte 1–4 dokumentieren die Entscheidungsgrundlage (Historie). Die Entscheidung selbst steht im Status-Block oben.

---

## 1. Worauf der Stack einzahlen muss

Die Anforderungen ergeben sich direkt aus dem Kreislauf (Bauen → Messen → Entscheiden → Umsetzen) und dem ICP:

| Kriterium | Warum es zählt |
|---|---|
| **KI-freundlich** | Coding-Agents bauen und pflegen die Seiten. Wenig Magie, viel lesbarer Code, kleine Dateien, klare Konventionen. Das ist das wichtigste Kriterium. |
| **Git-basiert** | Single Source of Truth ist das Repo. Jede Änderung = Commit. Kein Klick-Backend, das am Git vorbei Zustand hält. |
| **Hosting auf Hetzner** | Statisches Deployment soll trivial sein (Hetzner Storage/Webspace, oder Nginx auf einem CX-Server, oder Coolify/Docker). |
| **Core Web Vitals** | Lokale Dienstleister gewinnen über Local SEO + schnelle, mobile Seiten. Standardmäßig wenig/kein JS ist ein Ranking- und Conversion-Vorteil. |
| **Einfaches Design-System** | Tokens + Komponenten-Bibliothek, aus der die KI konsistent baut. Über viele Seiten konsistent. |
| **Skalierung auf viele kleine Seiten** | Ein Klon pro Website. Der Stack muss sich wie eine Vorlage duplizieren lassen — nicht 50 schwere CMS-Installationen pflegen. |
| **Matomo integrierbar** | Privacy-first Tracking + Google-Ads-Conversion müssen sauber (mit Consent) einbindbar sein — bei jedem Framework lösbar, aber sauberer ohne schweren Client-State. |

Leitsatz: **Statisch-first.** Lokale Dienstleister-Seiten sind zu 95 % Content + Conversion-Elemente (Formular, Anruf, WhatsApp). Das braucht keine schwere Laufzeit.

---

## 2. Die Optionen

### Option A — Astro (statisch, komponentenbasiert)

Astro rendert standardmäßig zu purem HTML/CSS, schickt **null JavaScript** an den Browser, wenn keins gebraucht wird, und lädt interaktive Inseln nur dort, wo nötig ("Islands"). Komponenten in `.astro`, optional React/Vue/Svelte für Einzelfälle.

**Vorteile**
- Beste Core Web Vitals out of the box — kein JS-Ballast, ideal für mobile lokale Seiten.
- Sehr KI-freundlich: simple, deklarative Komponenten, kleine Dateien, wenig versteckte Konventionen. Agents bauen das zuverlässig.
- Content Collections (Markdown/MDX + Schema-Validierung) passen perfekt zu City-Pages, Leistungsseiten, Ratgeber — genau die Seitentypen aus dem Blueprint.
- Git-nativ, deployt als statisches Verzeichnis → auf Hetzner trivial (Nginx, Static Hosting, Coolify).
- Design-System via Tokens + Astro-Komponenten sauber abbildbar; gut als klonbare Vorlage.
- Matomo + Ads-Conversion als kleines Skript/Partytown-Insel mit Consent einbindbar.

**Nachteile**
- Für hochinteraktive App-artige Features weniger geeignet (brauchen wir hier aber kaum).
- Kleineres Ökosystem als Next.js (für unseren Use Case irrelevant).
- Bei stark dynamischen, eingeloggten Bereichen müsste man nachrüsten (nicht der ICP).

---

### Option B — Next.js (React, SSG/SSR/ISR)

Das Vollframework. Kann statisch (SSG), serverseitig (SSR) und inkrementell (ISR) rendern. Sehr großes Ökosystem.

**Vorteile**
- Maximale Flexibilität: wenn später doch App-Logik, Auth oder dynamische Bereiche dazukommen, ist alles möglich.
- Riesiges Ökosystem, viel Trainingsmaterial → Agents kennen es gut.
- Bildoptimierung, Routing, API-Routes eingebaut.

**Nachteile**
- Liefert standardmäßig React-Runtime an den Client → mehr JS, schlechtere CWV-Baseline als Astro, wenn man nicht diszipliniert optimiert.
- Hosting auf Hetzner aufwändiger: voller Nutzen (ISR, Image-Optimization, Middleware) will eine Node-Laufzeit → Server + Prozessmanagement + Updates. Reiner Static-Export verschenkt halbe Framework-Features.
- Komplexer für Agents: App Router, Server/Client Components, Caching-Verhalten sind subtile Fehlerquellen. Mehr "warum rendert das so".
- Overkill für eine Visitenkarten-große Dienstleister-Seite. Mehr Wartungsfläche pro Klon.

---

### Option C — Klassisches CMS (WordPress / Headless-CMS wie Statamic/Payload)

Der Branchenstandard für lokale Dienstleister-Seiten — meist WordPress.

**Vorteile**
- Kunde kann theoretisch selbst editieren (bei WP).
- Riesiges Plugin-Ökosystem (Local SEO, Schema, Formulare fertig).
- Bekannt bei Agenturen.

**Nachteile**
- **Nicht Git-nativ** — Inhalt und Konfiguration leben in einer Datenbank, nicht im Repo. Das bricht das Kernprinzip der Architektur ("Git = Single Source of Truth", "jede Änderung = Commit").
- **Schlecht für Coding-Agents** — KI arbeitet am besten auf Dateien im Repo, nicht über ein Klick-Backend / DB-Zustand. Reviewbarkeit über Diffs entfällt.
- CWV-Baseline meist schlechter (PHP-Rendering, Plugin-Bloat, schwere Themes) — braucht Caching/Tuning, um an statisch heranzukommen.
- Hosting + Wartung schwerer skalierbar: Updates, Sicherheit, Backups pro Installation × viele Kunden = Betriebslast.
- Headless-CMS (Statamic flat-file, Payload) lindert das Git-Problem teilweise, fügt aber Komplexität hinzu, die der ICP nicht braucht.

> CMS bleibt sinnvoll, wenn **Kunden-Selbstpflege** harte Anforderung wird. Für ein KI-getriebenes, agentengebautes System ist es das schwächste Match.

---

## 3. Vergleich auf einen Blick

| Kriterium | Astro | Next.js | CMS (WP) |
|---|---|---|---|
| KI-/Agent-freundlich | ★★★ | ★★ | ★ |
| Git-nativ | ★★★ | ★★★ | ★ |
| Hetzner-Hosting einfach | ★★★ (statisch) | ★★ (Node nötig) | ★★ (LAMP + Wartung) |
| Core Web Vitals default | ★★★ | ★★ | ★ |
| Design-System / Komponenten | ★★★ | ★★★ | ★★ |
| Skalierung viele kleine Seiten | ★★★ | ★★ | ★ |
| Matomo + Ads-Conversion | ★★★ | ★★★ | ★★★ |
| Spätere App-Logik möglich | ★★ | ★★★ | ★★ |

---

## 4. Entscheidung: **Astro** (entschieden 2026-06-23)

Für das Website-AIOS und seinen ICP ist **Astro** gesetzt — OS-Default für alle Klone.

**Begründung in einem Satz:** Astro ist statisch-first und damit genau auf das Profil "viele kleine, schnelle, content-lastige lokale Dienstleister-Seiten, von Coding-Agents gebaut, in Git verwaltet, auf Hetzner statisch deployt" zugeschnitten — bei der besten Core-Web-Vitals-Baseline ohne Extraarbeit.

Konkret deckt Astro alle Pflichtkriterien am saubersten ab:
- **Agent-Tauglichkeit + Git** sind das Herz der Architektur. Astros einfache, dateibasierte Komponenten und Content Collections geben Agents eine ruhige, gut diffbare Oberfläche. Weniger Footguns als der Next.js App Router.
- **CWV + Conversion**: null JS by default → mobil schnell → besser für Local SEO und Lead-Conversion (Telefon/Formular/WhatsApp). Genau die Hebel des Geschäftsmodells.
- **Hetzner**: statischer Build-Output → simpelstes Deployment (Nginx/Static/Coolify), minimale Betriebslast pro Klon.
- **Skalierung**: ein Astro-Repo als Vorlage, pro Kunde geklont — passt 1:1 zum "ein Klon pro Website"-Prinzip.

**Wann anders entscheiden:**
- Wenn ein Großteil der Kunden **Kunden-Selbstpflege** im Browser fordert → Headless-CMS (z. B. Statamic flat-file, bleibt Git-nah) vor Astro setzen, oder Astro + leichtes Git-basiertes CMS (Decap/TinaCMS) kombinieren.
- Wenn echte **App-Funktionalität** (Login, Dashboards, viel Dynamik) zum Standard wird → Next.js. Für den aktuellen ICP nicht der Fall.

**Festgelegte Defaults für die Build-Schicht:**
- Framework: **Astro**
- Styling: **Tailwind CSS** mit Design-Tokens (Farben/Schriften/Abstände aus dem CI-Manual) → konsistente Komponenten-Bibliothek.
- Content: **Content Collections** (Markdown/MDX) für Leistungs-, City- und Ratgeber-Seiten.
- Interaktive Inseln nur wo nötig (Formular, ggf. Slider) — sonst statisch.
- Tracking: **Matomo** + **Google-Ads-Conversion** + **Meta Pixel** via consent-gesteuertem Skript (kein GA4; Partytown optional, um den Main-Thread frei zu halten).
- Schema: LocalBusiness/FAQ/Service als JSON-LD-Komponenten im Design-System (siehe `playbooks/schema-structured-data.md`).
- Hosting: **Hetzner**, statischer Output über Nginx oder Coolify; Deploy via Git-Push/CI.
- Optional, falls Kunden-Selbstpflege gefragt: Git-basiertes CMS (Decap/Tina) on top.

> Nächster Schritt: Phase 0 pro Klon (Repo + Astro-Grundgerüst + Design-System v1 + `build-page`) starten. Entscheidung ist getroffen und im `decisions/log.md` des Klons verankert.
