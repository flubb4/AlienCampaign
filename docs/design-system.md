# Weyland-Yutani Terminal — Design System

**Projekt:** Alien RPG Kampagne (Recall Authority)
**Zweck:** Einheitliches visuelles & sprachliches Vokabular für Terminal-Logs, Handouts, Personalakten, Missionstexte und GM-Tools.

---

## Name & Kurzbeschreibung

- **Name:** Weyland-Yutani Terminal (MU-TH-UR 6000)
- **Tagline:** CRT-Phosphor-Terminal + Imperial-Ink-Papier. Alien-RPG-Handouts im Firmenjargon.
- **Sprache:** Deutsch. Militärisch-nüchterner WY-Ton.

---

## Farbpaletten

### Primär — Terminal (MU-TH-UR / Computer-Screens)

| Rolle        | Hex        | Verwendung                                   |
|--------------|------------|----------------------------------------------|
| Background   | `#020a0f`  | Haupt-Bg, nahezu schwarz mit Cyan-Stich      |
| Panel        | `#04111a`  | Karten, Modals, Einschübe                    |
| Border       | `#0a2535`  | 1px Rahmen, Trennlinien                      |
| Accent       | `#00e5ff`  | Phosphor-Cyan: Headlines, aktive Elemente    |
| Text         | `#b8dde8`  | Fließtext                                    |
| Dim          | `#3a6070`  | Sekundärtext, Timestamps, Metadaten          |
| Warn/Yellow  | `#ffcc00`  | Warnhinweise, Flags                          |
| Danger/Red   | `#d66a5a`  | Fehler, Alarm, kritische Zustände            |

### Sekundär — Imperial Ink (Papier-Handouts, Personalakten, Briefe)

| Rolle        | Hex        | Verwendung                                   |
|--------------|------------|----------------------------------------------|
| Ink          | `#d8b26b`  | Haupt-Tinte (warm-ocker)                     |
| Ink-Bright   | `#ffcf7a`  | Hervorhebungen                               |
| Ink-Dim      | `#8a6d3b`  | Sekundär                                     |
| Ink-Faint    | `#4a3a20`  | Rahmen, fast-weggewischt                     |
| Green        | `#7fb27a`  | OK / bestätigt                               |
| Red          | `#d66a5a`  | Gesperrt / abgelehnt                         |
| Warn         | `#e2c94a`  | Achtung                                      |
| Stripe       | `#f2c325`  | Warnband, Klassifizierungs-Balken            |

---

## Typografie

- **Display / Headlines:** `Orbitron`, `font-weight: 900`, `letter-spacing: 3–4px`, `UPPERCASE`
- **Body / Mono / Alles andere:** `Share Tech Mono`, `letter-spacing: 1–2px`
- **Terminal-Logs:** Monospace mit festem Präfix-Pattern
- **Größen:** Sehr kompakt. Base 10–11px, Headline 12–14px. Interfaces wirken dicht/informationsreich.

---

## Ton & Stimme

- Deutsch, nüchtern, militärisch-korporativ.
- Em-Dash `—` statt Hyphen-Minus für Einschübe.
- Typografische Anführungszeichen: `„…"` und `‚…'`.
- Keine Emojis. Keine modernen UX-Phrasen ("Jetzt loslegen!" etc.).
- WY-Firmenjargon: `NDA`, `Asset-Recall`, `Section-8`, `Loss-Flag`, `Charter-Lease`, `Informant-Status`, `Containment`, `BV-Fragment`, `Cold-Storage`, `Purge-Order`.
- Warnungen sparsam in Versalien: `ACHTUNG`, `KLASSIFIZIERT`, `NUR FÜR AUTORISIERTE`, `LOSS-FLAG AKTIV`.
- Box-Drawing-Characters für Terminal-Header: `╔ ═ ╗ ║ ╚ ╝ ─ │ ┌ ┐ └ ┘`.

---

## Komponenten-Patterns

### Terminal-Log-Block

```html
<div class="t-head">
╔══════════════════════════════════════════╗
║  MU-TH-UR 6000 — SYSTEM LOG              ║
║  NODE: GJ2092-ATLAS / SECTION-8          ║
╚══════════════════════════════════════════╝
</div>
<div class="t-entry">
  <span class="t-ts">[2183.127/04:12]</span>
  <span class="t-who">MURO_D</span> &gt; Frachtabgleich bestätigt.
</div>
<div class="t-entry t-warn">
  <span class="t-ts">[2183.127/04:13]</span>
  <span class="t-who">MU-TH-UR</span> &gt; LOSS-FLAG aktiv auf ZG-4471-M.
</div>
```

- Timestamp-Format: `[Jahr.Tag-des-Jahres/HH:MM]` (z. B. `[2183.127/04:12]`)
- Sprecher in Versalien, Unterstrich statt Leerzeichen
- `>` als Sprecher-Trenner (HTML: `&gt;`)
- `.t-warn` Variante für Warn-Einträge (Gelb/Rot)

### Panels / Karten

- `background: var(--panel)` oder `rgba(0,229,255,0.04)` für subtilen Cyan-Fill
- `border: 1px solid var(--border)`
- **Keine** Rundung (`border-radius: 0`) oder maximal `2px`
- Kein box-shadow im klassischen Sinn — stattdessen Phosphor-Glow via `text-shadow`

### Buttons

```css
.btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  font-family: "Share Tech Mono", monospace;
  font-size: 10px;
  padding: 7px 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.15s;
}
.btn:hover {
  color: var(--accent);
  border-color: var(--accent);
  text-shadow: 0 0 8px var(--accent);
}
```

### Headlines / Phosphor-Glow

```css
h1, h2, .modal h3 {
  font-family: "Orbitron", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--accent);
  text-shadow: 0 0 16px var(--accent);
}
```

### Inputs

```css
input, textarea {
  background: rgba(0,229,255,0.04);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: "Share Tech Mono", monospace;
  font-size: 11px;
  padding: 7px 9px;
  letter-spacing: 1px;
  outline: none;
  border-radius: 0;
}
input:focus, textarea:focus {
  border-color: var(--accent);
}
```

### Imperial-Ink-Handout (Papier-Modus)

- Dunkler Untergrund, warm-ocker Tinte (`--im-ink: #d8b26b`)
- Header mit Klassifizierungs-Streifen (`--im-stripe: #f2c325`) oder rotem `KLASSIFIZIERT`-Stempel
- Typo: gleiche Mono-Schrift, aber mit Papier-Feel (leichte Serifenvariante oder `Share Tech Mono` in Ink-Farbe)
- Metadaten-Block oben: `PERSONALAKTE — LFD-NR — AUSSTELLUNGSDATUM — FREIGABESTUFE`

---

## Kern-Canon (für Prompts / Writing)

- **Firma:** Weyland-Yutani ("The Company"), Corporate-Orwell-Ton.
- **KI:** MU-TH-UR 6000 (Bordcomputer, Logs).
- **Setting:** Frontier-Kolonien, späte 22. Jh., Hyperschlaf, Frachter-Ökonomie.
- **Spieler-Charaktere (Hooks konsistent halten):**
  - Maelys "Mae" Harlan — Schuld, Charter-Lease HX-8821, Ship *Argo's Debt* (ZG-4471-M).
  - Silas — Link zu DVS-7741.
  - Scott Reynolds — Ex-USCM, NDA, BV-Fragmente.
  - Isabella Cruz — siehe Personalakte-PDF.

---

## Instructions-Feld (für Claude Design)

> Du schreibst Content für eine laufende Alien-RPG-Kampagne (Free League, "Alien — The Roleplaying Game"). Alle Outputs im Stil eines Weyland-Yutani MU-TH-UR-6000-Terminals oder einer WY-Personalakte.
>
> **Sprache:** Deutsch, nüchtern, militärisch-korporativ. Em-Dash `—`, typografische Anführungszeichen. Keine Emojis, keine modernen UX-Formulierungen.
>
> **Terminal-Logs:** Timestamps im Format `[Jahr.Tag-des-Jahres/HH:MM]`, Sprecher in VERSALIEN_UNTERSTRICH, `>` als Trenner. Header mit Box-Drawing (`╔═╗║╚╝`).
>
> **Handouts/Personalakten:** Imperial-Ink-Modus (warmer Ocker auf dunkel), Klassifizierungsstreifen, Metadaten-Kopfblock.
>
> **Jargon nutzen:** NDA, Asset-Recall, Section-8, Loss-Flag, Charter-Lease, Containment, Purge-Order, BV-Fragment.
>
> **Ton-Regel:** Firma wirkt hilfsbereit, ist aber kalt-ausbeuterisch. Informationen werden geschwärzt, redacted (`█████`), oder per Freigabestufe verweigert. Player-Hooks (Mae/Silas/Scott/Isabella) konsistent halten — siehe Canon.
>
> **Mechanik-Regel:** Kleine Kreaturen/Atmosphäre erzeugen nur +Stress, keine Panic Rolls. Panic Rolls sind Xenomorph-Tier und gebrochenen PCs vorbehalten.
