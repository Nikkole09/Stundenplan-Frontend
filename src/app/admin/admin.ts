import { Component, signal } from '@angular/core';

// Hier wird festgelegt, welche HTML- und CSS-Dateien zu unserer Admin-Komponente gehören
@Component({
  imports: [],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {
// Speichert, welcher Bereich im Admin-Dashboard gerade geöffnet ist (beim ersten Aufrufen der Seite wird die Übersicht angezeigt)
  aktiverBereich = signal('uebersicht');

  // Diese Funktion wird aufgerufen, wenn ein Navigationsbutton oder eine Übersichtskarte angeklickt wird.
  // Der übergebene Bereich wird als aktiver Bereich gespeichert (dadurch wird automatisch der passende Inhalt angezeigt)
  bereichWechseln(bereich: string) {
    this.aktiverBereich.set(bereich);
  }

}