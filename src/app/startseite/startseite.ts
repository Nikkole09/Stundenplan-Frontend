
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startseite',
  imports: [],
  templateUrl: './startseite.html',
  styleUrl: './startseite.css'
})
export class Startseite {

  constructor(private router: Router) {}

  starten() {
    this.router.navigate(['/anmeldung']);
  }
}
