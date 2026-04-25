# Claude-Workflow

Wie dieses Repo mit Claude Code (oder claude.ai) effizient bearbeitet wird.

## Grundprinzip

Claude liest nur die Dateien, die er wirklich braucht. Die Ordnerstruktur ist so gebaut, dass eine typische Session nur **2–3 Dateien** gleichzeitig aufmachen muss:

1. Der schlanke **Hub** (z. B. `campaign/hook-register.html` + ein PC-Dossier) für Kontext.
2. Die **eine Mission**, an der gearbeitet wird.
3. Bei Bedarf: ein **Handout** oder das Design-System.

Ergebnis: Statt 14.500 Zeilen pro Anfrage nur noch einige hundert bis tausend.

## Typische Session-Patterns

### Pattern A — Neue Szene in bestehender Mission schreiben

```
Datei offen: missions/schwerere-missionen/03-jeremiah-vi.html
Referenz:    docs/design-system.md (wenn neuer Komponententyp)
```

Prompt-Beispiel:
> Füge in `missions/schwerere-missionen/03-jeremiah-vi.html` unter `#m03-scene-ingress` eine neue
> Szene ein: Mae stolpert auf ein altes Logbuch mit Bezug zu HX-8821.
> Nutze das übliche `<section>`-Muster.

### Pattern B — Player-Hook pflegen (Cross-Mission-Thema)

```
Datei offen: campaign/hook-register.html
             characters/pcs/mae.html
             missions/XX (die betroffenen)
```

Prompt-Beispiel:
> In welchen Missionen kommen Mae-Hooks zu HX-8821 vor? Update das Register.

### Pattern C — Neue Mission migrieren (aus altem Campaign-Book)

```
Datei offen: missions/0N-neue-mission.html (leer/Platzhalter)
Quelle:      die Sektion aus alten Campaign-Book
```

Prompt-Beispiel:
> Extrahiere die Mission "Atlas Station" aus
> `C:\Users\Daniel\Desktop\Alien\Claude Code\_source\RecallAuthority_CampaignBook.html`
> (ab Zeile 2503) und migriere sie nach `missions/schwerere-missionen/04-atlas-station.html`.
> Nutze `07-tiamat-iv.html` als Template für Struktur und Styles.

## Checkliste pro Mission (wenn sie "fertig" sein soll)

- [ ] Meta-Block oben vollständig: Name, Nummer, Orte, PC-Hooks, Status
- [ ] Mindestens ein PC-Hook pro Mission getriggert (siehe Feedback-Regel)
- [ ] Kein Inline-CSS, nur `design-system.css`
- [ ] Navigation zurück zum Hub vorhanden
- [ ] Sektionen haben `id`s mit Missionspräfix (`m03-…`)
- [ ] Im `campaign/hook-register.html` eingetragen
- [ ] Im `campaign/timeline.html` eingetragen
- [ ] Im `README.md` Status aktualisiert

## Mechanik-Erinnerung (für Claude beim Schreiben)

- **+Stress** bei kleinen Kreaturen / Atmosphäre (Facehugger-Vorläufer, Geräusche, etc.)
- **Panic Roll** reserviert für Xenomorph-Tier und gebrochene PCs
- Siehe `docs/design-system.md` → "Mechanik-Regel"

## Tokens sparen — gute Angewohnheiten

- Nicht den gesamten Hub laden, wenn nur ein PC betroffen ist → einzelne Datei aus `characters/pcs/` reicht
- Bei Edits: `Edit`-Tool statt `Write` nutzen (nur das Diff wird gesendet)
- Grep statt Read, wenn nur eine Stelle gesucht wird
- Mission-Dateien klein halten (Richtwert: unter 2000 Zeilen pro Mission)
