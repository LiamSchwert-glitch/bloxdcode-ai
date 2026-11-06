# BloxdCode AI – Vercel-Version

## Veröffentlichung am Handy
1. ZIP entpacken.
2. Auf GitHub ein neues Repository namens `bloxdcode-ai` erstellen.
3. Die Dateien und Ordner aus diesem Projekt in das Repository hochladen (nicht die ZIP-Datei selbst).
4. Auf https://vercel.com anmelden und GitHub verbinden.
5. In Vercel: Add New → Project → Repository `bloxdcode-ai` importieren → Deploy.
6. Nach erfolgreichem Deploy die angezeigte `*.vercel.app`-Adresse öffnen.

## KI
Die Website fragt beim Generieren nach deinem OpenAI API-Key. Der Key wird nicht im Repository gespeichert; der Browser sendet ihn nur für die jeweilige Anfrage an die Vercel Function `/api/generate`. Teile den Key niemals und achte auf API-Kosten. Für eine öffentliche Website ist ein eigenes Login, Rate-Limiting und Missbrauchsschutz sinnvoll.

## Grenzen
Der 7.000-Zeilen-Grenzwert bezieht sich auf die Eingabezeilen im Formular, nicht auf eine Garantie, dass das KI-Modell alles fehlerfrei verarbeiten kann. Die eingebaute Bloxd.io-Wissensbasis ist ein kompakter Startkontext und keine vollständige, automatisch aktualisierte API-Dokumentation. Prüfe Methoden und Callbacks anhand https://bloxd.io/docs.
