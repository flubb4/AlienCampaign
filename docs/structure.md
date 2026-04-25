# Struktur des Repos

Hub-and-Spoke-Modell. Kleiner Kampagnen-Hub, pro Mission eine Standalone-Datei.

## Top-Level

```
AlienCampaign/
├── index.html            Landing-Page, Navigation zu allem
├── README.md
│
├── campaign/             Hub — immer klein genug zum Mitladen
│   ├── overview.html     Zusammenfassung der Kampagne
│   ├── timeline.html     Chronologie (Session-by-Session)
│   ├── lore.html         Recall Authority, Welt, Setting
│   └── hook-register.html  Story-Hooks pro PC und Mission
│
├── characters/
│   ├── pcs/              Spieler-Charaktere
│   │   ├── mae.html
│   │   ├── silas.html
│   │   ├── scott.html
│   │   └── isabella.html
│   └── npcs/             wichtige NPCs (nach Bedarf)
│
├── missions/             eine HTML pro Mission, selbstständig lesbar
│   ├── index.html
│   ├── easy-missionen/
│   │   ├── 01-routine-exchange.html
│   │   └── 02-theta-persei.html
│   ├── schwerere-missionen/
│   │   ├── 03-jeremiah-vi.html
│   │   ├── 04-atlas-station.html
│   │   ├── 05-arceon-station.html
│   │   └── 06-lambda-aurigae.html
│   ├── 07-tiamat-iv.html       ← Referenz-Migration
│   ├── 08-van-maanens-star.html
│   └── 99-act-2-3.html
│
├── handouts/             Spieler-sichtbares Material
│   ├── agenda-isabella-cruz.pdf
│   ├── personalakte-isabela-cruz.pdf
│   ├── blackveil-datafragments.html
│   └── terminal-logs/    Einzelne Terminal-Log-Handouts
│
├── tools/                GM-Werkzeuge
│   ├── starmap.html
│   └── terminal-log-template.html
│
├── assets/
│   ├── css/
│   │   ├── design-system.css   gemeinsame Terminal-Styles
│   │   └── print.css
│   ├── js/
│   │   └── shell.js            Topbar + Sidebar rendern (NAV-Definition hier)
│   └── images/
│       └── starmap.jpg
│
├── docs/
│   ├── structure.md          diese Datei
│   ├── claude-workflow.md    wie Claude an Missionen arbeitet
│   └── design-system.md      Weyland-Yutani-Terminal-Stil
│
├── scripts/
│   └── encrypt.bat           staticrypt-Batch (AES-256)
│
├── config.example.js
├── .staticrypt.json
└── .gitignore
```

## Regeln pro Missionsdatei

Jede `missions/*.html` ist **selbstständig**. Das heißt:

1. Sie linkt zurück zum Hub (`../index.html`) und zum Mission-Index.
2. Sie inkludiert `../assets/css/design-system.css` — **nie** Styles inline duplizieren.
3. Oben steht ein Metadaten-Kopfblock: Missionsname, Nummer, Orte, PC-Hooks die getriggert werden, Status.
4. Sie enthält alles zur Mission nötige: Szenen, NPCs, Encounter, Beute, Handouts.
5. Wo Cross-Mission-Referenzen nötig sind, wird auf den Hub verwiesen — nicht Inhalte duplizieren.

## Namenskonvention

- **Missionen:** `NN-slug.html` (z. B. `03-jeremiah-vi.html`). Nummer = geplante Reihenfolge in Akt 1. Finale = `99-`.
- **Dateinamen:** kleinbuchstaben, Bindestriche, keine Umlaute.
- **HTML-IDs in Missionen:** `m03-` Präfix, z. B. `<section id="m03-scene-ingress">`.
- **Handouts:** beschreibender Name, z. B. `agenda-isabella-cruz.pdf`, `terminal-logs/muro-d-loss-flag.html`.

## Was NICHT ins Repo gehört

- Klartext-Passwörter (nur `config.example.js` mit Platzhaltern)
- Verschlüsselte Build-Outputs (`build/`, falls angelegt — in `.gitignore`)
- Persönliche Notizen, die nicht die Spieler erreichen sollen (dafür lokal außerhalb des Repos arbeiten)
