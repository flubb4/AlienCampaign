# Recall Authority — Design System

**Projekt:** Alien RPG Kampagne (Recall Authority)
**Zweck:** Einheitliches visuelles Vokabular für Campaign Book, Missionen, Handouts und GM-Tools.
**Single Source of Truth:** [`assets/css/design-system.css`](../assets/css/design-system.css) — jede Seite linkt darauf.

---

## Farbpalette

### Backgrounds
| Variable | Hex | Verwendung |
|---|---|---|
| `--bg`  | `#080c09` | Haupt-Bg (dunkelgrün-schwarz) |
| `--bg2` | `#0d1210` | Topbar, Sidebar, Modals |
| `--bg3` | `#111916` | Karten, Panels, Tabellen-Zebra |
| `--bg4` | `#162018` | Hover-States |

### Akzente
| Variable | Hex | Verwendung |
|---|---|---|
| `--green`        | `#4dff91` | Haupt-Akzent, H3, aktive Items, Status OK |
| `--green-dim`    | `#2a8a4d` | dezenter Grün-Ton, Ränder, Blockquote |
| `--green-dark`   | `#1a4a2a` | aktive Nav-Items Hintergrund |
| `--amber`        | `#ffb830` | Sekundär-Akzent, H2, `em`, Warn-Header, Kategorie-Labels |
| `--amber-dim`    | `#a07010` | Warn-Borders |
| `--red`          | `#ff3a3a` | Alarm, Danger-Header |
| `--red-dim`      | `#8a1a1a` | Danger-Borders, Loss-Flag |

### Text
| Variable | Hex | Verwendung |
|---|---|---|
| `--text`         | `#c8e8cc` | Standard-Text |
| `--text-dim`     | `#6a9470` | Sekundärtext, Meta, Breadcrumbs |
| `--text-bright`  | `#e8f8ec` | Headlines, Page-Titles |

### Ränder & Effekte
| Variable | Hex / Value | Verwendung |
|---|---|---|
| `--border`         | `#1e3522` | Standard-Ränder |
| `--border-bright`  | `#2e5535` | Prominente Ränder, info-box |
| `--scan`           | `rgba(0,255,80,0.02)` | Scanlines-Overlay |
| `--glow-green`     | `0 0 8px rgba(77,255,145,0.3)` | Phosphor-Glow Grün |
| `--glow-amber`     | `0 0 8px rgba(255,184,48,0.3)` | Phosphor-Glow Amber |

---

## Typografie

- **Hauptschrift (Body, Headlines):** `Rajdhani` 300–700
- **Tech-Schrift (Meta, Nav, Tech-Labels):** `Share Tech Mono`
- **Read-Aloud (Spieler-Text):** `Libre Baskerville` kursiv

Ladezeile — immer am Anfang der `design-system.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
```

### Headline-Hierarchie innerhalb `.content`

| Tag | Farbe | Typo |
|---|---|---|
| `h1` | `--text-bright` | Rajdhani 28px 700, Border-Bottom |
| `h2` | `--amber`       | Rajdhani 22px 700 |
| `h3` | `--green`       | Rajdhani 17px 700 UPPERCASE |

Body: Rajdhani 17px, `line-height: 1.8`, Farbe `#d4ead8`.

### Inline-Highlights

- `<strong>` → `#f0f8f2` kräftig
- `<em>` → `--amber` **kursiv**
- `<code>` → `--green` auf `--bg3`
- `<a>` → `--green`, dotted underline

---

## Layout-Struktur

Jede Seite nutzt das **Shell-Pattern**: Topbar + Sidebar + Main.

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>...</title>
  <link rel="stylesheet" href="{base}assets/css/design-system.css">
</head>
<body>
<script src="{base}assets/js/shell.js"></script>
<script>renderShell({base: "{base}", active: "{itemId}"});</script>

<main id="main">
  <div id="page">
    <header class="page-header">
      <div class="breadcrumb"><a href="...">Hub</a> › <span>Aktuelle Seite</span></div>
      <h1 class="page-title">Titel — <em>accent</em></h1>
      <div class="page-meta">
        <span class="tag">TAG</span>
        <span>meta-info</span>
      </div>
    </header>

    <div class="content">
      <!-- Page-Inhalt -->
    </div>
  </div>
</main>
</body>
</html>
```

- `{base}` ist Pfad-Präfix: `""` im Root, `"../"` ein Level tief, `"../../"` zwei.
- `active` matcht `item.id` in `NAV` (shell.js) → markiert Sidebar-Eintrag.

---

## Komponenten

### `.info-box` — farbcodierte Hinweise

```html
<div class="info-box">
  <div class="info-box-header">HEADER</div>
  <p>...</p>
</div>
```

Varianten: Standard (grün), `.warn` (amber), `.danger` (rot), `.secret` (dunkelrot).
**`.readaloud`** — Cyan-Border + Libre Baskerville kursiv, für GM-Vorlesetext.
Visuell getrennt von grün/amber/rot, damit der Spieler-Text nicht mit System-Blöcken kollidiert.

### `.tag` — Label-Pills

```html
<span class="tag">NEUTRAL</span>
<span class="tag green">OK</span>
<span class="tag amber">WARN</span>
<span class="tag danger">DANGER</span>
```

### `.char-card` / `.char-grid` — PC-Übersichten

```html
<div class="char-grid">
  <a class="char-card" href="...">
    <div class="char-name">Name</div>
    <div class="char-alias">„ALIAS"</div>
    <div class="char-role">ROLE</div>
    <div class="char-player">Zusatz-Info</div>
  </a>
</div>
```

### `.mission-card` / `.mission-grid` — Missions-Liste

```html
<div class="mission-grid">
  <a class="mission-card" href="...">
    <div class="mission-num">01</div>
    <div class="mission-info">
      <div class="mission-name">Name</div>
      <div class="mission-sub">Subtitle</div>
      <div class="mission-tags"><span class="tag">TAG</span></div>
    </div>
  </a>
</div>
```

`.mission-card.hard` → roter Left-Border für Finale/Hardcore-Missionen.

### Terminal-Log-Block

```html
<div class="log-section open">
  <div class="log-section-header" onclick="this.parentElement.classList.toggle('open')">
    <span>MU-TH-UR 9000 — SYSTEM LOG</span>
    <span class="log-chevron">▸</span>
  </div>
  <div class="log-section-body">
    <div class="t-block">
      <div class="t-head">╔══════════════════╗
║  NODE: ATLAS    ║
╚══════════════════╝</div>
      <div class="t-entry"><span class="t-ts">[2183.127/04:12]</span> <span class="t-who">MURO_D</span> &gt; ...</div>
      <div class="t-entry t-warn"><span class="t-ts">[...]</span> <span class="t-who">MU-TH-UR</span> &gt; LOSS-FLAG aktiv.</div>
      <div class="t-foot">── END OF LOG ──</div>
    </div>
  </div>
</div>
```

Timestamp-Format: `[Jahr.Tag-des-Jahres/HH:MM]`. Sprecher in `VERSALIEN_UNTERSTRICH`. `>` als Trenner.

### Weitere Komponenten

- `.phase-timeline` / `.phase-item` — vertikale Timeline mit Punkten und Connectoren
- `.enc-card` — Encounter-Karten (Amber-Hover)
- `.stat-box` / `.stat-grid` — Zahlen-Kacheln
- `.ql-btn` / `.quick-links` — Landing-Page-CTAs
- `.welcome-header` — Hero-Titel fürs Landing

---

## Ton & Stimme

- **Sprache:** Deutsch, nüchtern, militärisch-korporativ.
- Em-Dash `—` statt Hyphen-Minus für Einschübe.
- Typografische Anführungszeichen: `„…"` und `‚…'`.
- Keine Emojis. Keine modernen UX-Phrasen.
- WY-Firmenjargon: `NDA`, `Asset-Recall`, `Section-8`, `Loss-Flag`, `Charter-Lease`, `Informant-Status`, `Containment`, `BV-Fragment`, `Cold-Storage`, `Purge-Order`.
- Versalien sparsam: `ACHTUNG`, `KLASSIFIZIERT`, `NUR FÜR AUTORISIERTE`, `LOSS-FLAG AKTIV`.
- Box-Drawing in Terminal-Heads: `╔ ═ ╗ ║ ╚ ╝ ─ │`.

## Kern-Canon

- **Firma:** Weyland-Yutani („The Company"), Corporate-Orwell-Ton.
- **KI:** MU-TH-UR 9000 (Bordcomputer, Logs).
- **Setting:** Frontier-Kolonien, späte 22. Jh., Hyperschlaf, Frachter-Ökonomie.
- **Spieler-Charaktere (Hooks konsistent halten):**
  - Maelys „Mae" Harlan — Schuld, Charter-Lease HX-8821, Ship *Argo's Debt* (ZG-4471-M).
  - Silas — Link zu DVS-7741.
  - Scott Reynolds — Ex-USCM, NDA, BV-Fragmente.
  - Isabella Cruz — siehe Personalakte-PDF.

## Mechanik-Regel

- **+Stress** bei kleinen Kreaturen / Atmosphäre (Geräusche, Schatten, Hints).
- **Panic Roll** reserviert für Xenomorph-Tier und gebrochene PCs.

---

## Instructions-Feld (für Claude-Prompts)

> Du schreibst Content für eine laufende Alien-RPG-Kampagne. Alle Outputs folgen dem **Recall Authority Design System** (siehe `assets/css/design-system.css` und dieser Datei).
>
> **Sprache:** Deutsch, nüchtern, militärisch-korporativ. Em-Dash `—`, typografische Anführungszeichen. Keine Emojis, keine modernen UX-Formulierungen.
>
> **Layout:** Jede Seite nutzt das Shell-Pattern (Topbar + Sidebar + Main via `shell.js`). Inhalte gehen in `<div class="content">`.
>
> **Headlines:** `<h1>` für große Abschnitte (text-bright, border-bottom), `<h2>` für Unterabschnitte (amber), `<h3>` für kleine Gruppen (green uppercase).
>
> **Info-Boxen:** `<div class="info-box warn|danger|secret|readaloud">` mit `<div class="info-box-header">LABEL</div>` und Body.
>
> **Tabellen, Listen, Blockquotes** nutzen die `.content`-Styles automatisch — einfach schreiben, keine inline-Styles.
>
> **Terminal-Logs:** Timestamps `[Jahr.Tag-des-Jahres/HH:MM]`, Sprecher `VERSALIEN_UNTERSTRICH`, `>` als Trenner. Box-Drawing für Header.
>
> **Jargon:** NDA, Asset-Recall, Section-8, Loss-Flag, Charter-Lease, Containment, Purge-Order, BV-Fragment.
>
> **Ton-Regel:** Firma wirkt hilfsbereit, ist aber kalt-ausbeuterisch. Infos werden redacted (`█████`) oder per Freigabestufe verweigert. Player-Hooks (Mae/Silas/Scott/Isabella) konsistent halten.
>
> **Mechanik-Regel:** Kleine Kreaturen/Atmosphäre erzeugen nur +Stress. Panic Rolls sind Xenomorph-Tier und gebrochenen PCs vorbehalten.
