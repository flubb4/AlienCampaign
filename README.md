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
| 01 | Routine Exchange | [`missions/01-routine-exchange.html`](missions/01-routine-exchange.html) | Platzhalter |
| 02 | Theta Persei | [`missions/02-theta-persei.html`](missions/02-theta-persei.html) | Platzhalter |
| 03 | Jeremiah VI (inkl. Aftermath) | [`missions/03-jeremiah-vi.html`](missions/03-jeremiah-vi.html) | Platzhalter |
| 04 | Atlas Station | [`missions/04-atlas-station.html`](missions/04-atlas-station.html) | Platzhalter |
| 05 | Arceon Station | [`missions/05-arceon-station.html`](missions/05-arceon-station.html) | Platzhalter |
| 06 | Lambda Aurigae — Cinder Reach | [`missions/06-lambda-aurigae.html`](missions/06-lambda-aurigae.html) | Platzhalter |
| 07 | Tiamat IV | [`missions/07-tiamat-iv.html`](missions/07-tiamat-iv.html) | **Referenz-Mission** (migriert) |
| 08 | Van Maanen's Star | [`missions/08-van-maanens-star.html`](missions/08-van-maanens-star.html) | Platzhalter |
| 99 | Akt 2 & 3 (Finale) | [`missions/99-act-2-3.html`](missions/99-act-2-3.html) | Platzhalter |

## Sicherheit

Kampagneninhalte sind privat. Passwörter **nie** in committetem Code — siehe [`config.example.js`](config.example.js) und `.gitignore`. Für Verschlüsselung siehe [`scripts/encrypt.bat`](scripts/encrypt.bat) (staticrypt, AES-256).
