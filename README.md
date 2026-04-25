# AlienCampaign — Recall Authority

GM-Arbeitsrepo für die laufende Alien-RPG-Kampagne *Recall Authority* (Free League, Alien — The Roleplaying Game). Deutsch, WY-Terminal-Look, modular pro Mission.

## Einstieg

- **Start:** [`index.html`](index.html) — Landing-Page mit Navigation zu allem.
- **Kampagnen-Hub:** [`campaign/`](campaign/) — Timeline, Lore, Player-Hook-Register.
- **Missionen:** [`missions/`](missions/) — eine HTML pro Mission, separat editierbar.
- **Charaktere:** [`characters/`](characters/) — PCs und NPCs.
- **Handouts:** [`handouts/`](handouts/) — Spieler-Material (PDFs, Terminal-Logs, etc.).

## Warum diese Struktur?

Vorgänger war eine einzige 11,8-MB-HTML mit allen Missionen — schwer zu pflegen und teuer beim Laden in Claude. Neues Modell: **Hub-and-Spoke**.

- Ein schlanker Hub mit Charakteren, Lore und Timeline liegt immer im Kontext.
- Jede Mission ist eine eigenständige HTML-Datei. Beim Arbeiten an *einer* Mission wird nur sie geladen.
- Gemeinsames CSS in [`assets/css/`](assets/css/), damit das Design konsistent bleibt.

Details zur Struktur: [`docs/structure.md`](docs/structure.md).
Claude-Workflow: [`docs/claude-workflow.md`](docs/claude-workflow.md).
Visueller Stil: [`docs/design-system.md`](docs/design-system.md).

## Missions-Status

| # | Mission | Datei | Status |
|---|---------|-------|--------|
| 01 | 40 Eridani | [`missions/easy-missionen/01-routine-exchange.html`](missions/easy-missionen/01-routine-exchange.html) | **migriert** |
| 02 | Theta Persei | [`missions/easy-missionen/02-theta-persei.html`](missions/easy-missionen/02-theta-persei.html) | **migriert** |
| 03 | Jeremiah VI (inkl. Aftermath) | [`missions/schwerere-missionen/03-jeremiah-vi.html`](missions/schwerere-missionen/03-jeremiah-vi.html) | **migriert** |
| 04 | Atlas Station | [`missions/schwerere-missionen/04-atlas-station.html`](missions/schwerere-missionen/04-atlas-station.html) | **migriert** |
| 05 | Arceon Station | [`missions/schwerere-missionen/05-arceon-station.html`](missions/schwerere-missionen/05-arceon-station.html) | **migriert** |
| 06 | Lambda Aurigae — Cinder Reach | [`missions/schwerere-missionen/06-lambda-aurigae.html`](missions/schwerere-missionen/06-lambda-aurigae.html) | **migriert** |
| 07 | Tiamat IV | [`missions/07-tiamat-iv.html`](missions/07-tiamat-iv.html) | **Referenz-Mission** (migriert) |
| 08 | Van Maanen's Star | [`missions/08-van-maanens-star.html`](missions/08-van-maanens-star.html) | **migriert** |
| 99 | Akt 2 & 3 (Finale) | [`missions/99-act-2-3.html`](missions/99-act-2-3.html) | **migriert** |

## Sicherheit

Kampagneninhalte sind privat. Passwörter **nie** in committetem Code — siehe [`config.example.js`](config.example.js) und `.gitignore`. Für Verschlüsselung siehe [`scripts/encrypt.bat`](scripts/encrypt.bat) (staticrypt, AES-256).
