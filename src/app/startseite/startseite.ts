
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-startseite',
  imports: [Header],
  templateUrl: './startseite.html',
  styleUrl: './startseite.css'
})
export class Startseite {

  constructor(private router: Router) {}

  starten() {
    this.router.navigate(['/anmeldung']);
  }
}
