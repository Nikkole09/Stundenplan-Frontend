import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Zeigt die Direkteinstiege beim ersten Dashboard-Aufruf.
 *
 * Die Komponente zeigt nur die Willkommens-Box.
 * Die Navigation bleibt in der Dashboard-Seite.
 */
@Component({
  selector: 'app-welcome-box',
  standalone: true,
  templateUrl: './welcome-box.html',
  styleUrl: './welcome-box.css'
})
export class WelcomeBox{
  // Meldet dem Dashboard den Klick auf „Module eintragen“.
  @Output() startModules = new EventEmitter<void>();

  // Meldet dem Dashboard den Klick auf „Semester planen“.
  @Output() startPlan = new EventEmitter<void>();
}