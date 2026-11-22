import { Component, EventEmitter, Output } from '@angular/core';
/**
 * Zeigt den Einstieg beim ersten Login und meldet Klicks an das Dashboard.
 * Die eigentlichen Werte kommen aus den vorhandenen Services bzw. der API.
 */
@Component({
  selector: 'app-welcome-box',
  standalone: true,
  templateUrl: './welcome-box.html',
  styleUrl: './welcome-box.css'
})
export class WelcomeBox {

  @Output() start = new EventEmitter<void>();

}