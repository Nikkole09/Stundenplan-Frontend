## Startanleitung für das Frontend (Angular)

Diese Anleitung beschreibt, wie das Frontend des Stundenplan-Projekts lokal eingerichtet und gestartet werden kann.

### Voraussetzungen

Für die lokale Entwicklung werden folgende Programme benötigt:

- **Git** – zum Herunterladen und Aktualisieren des Projekts.
- **Node.js** – passende Version für das Angular-Projekt.
- **npm** – wird mit Node.js installiert.
- **Visual Studio Code** – empfohlene Entwicklungsumgebung.

### Frontend installieren und starten

**1. Repository herunterladen**

Das Frontend-Repository von GitHub klonen:

```bash
git clone https://github.com/Nikkole09/Stundenplan-Frontend.git
```

**2. Projekt öffnen**

Den Ordner `Stundenplan-Frontend` in Visual Studio Code öffnen und ein Terminal starten.

**3. Abhängigkeiten installieren**

```bash
npm install
```

Dieser Befehl installiert die benötigten Pakete. Er wird bei der ersten Einrichtung und bei Änderungen an den Abhängigkeiten benötigt.

**4. Frontend starten**

```bash
npx ng serve
```

**5. Anwendung im Browser öffnen**

Nach erfolgreichem Start ist das Frontend normalerweise unter folgender Adresse erreichbar:

http://localhost:4200

Änderungen am Quellcode werden während der Entwicklung automatisch neu geladen.

### Frontend beenden

Zum Beenden des Entwicklungsservers im Terminal `Strg + C` drücken.

### Hinweis

Für die vollständige Nutzung der Stundenplan-Anwendung muss auch das Backend gestartet und die Verbindung zwischen Frontend und Backend korrekt konfiguriert sein.