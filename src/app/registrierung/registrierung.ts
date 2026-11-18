import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterLink, FormsModule, CommonModule],
  standalone: true,
  selector: 'app-registrierung',
  styleUrl: './registrierung.css',
  templateUrl: './registrierung.html',
})
export class Registrierung {
  name = '';
  email = '';
  passwort = '';
  studienjahrgang = '';
  fehlerName = '';
  fehlerEmail = '';
  fehlerPasswort = '';
  fehlerAllgemein = '';
  erfolg = '';
  passwortSichtbar = false;
  nameGueltig = false;
  emailGueltig = false;
  passwortGueltig = false;

  constructor(private http: HttpClient) {}

  // Schaltet das Passwort sichtbar / unsichtbar um.
  passwortUmschalten() {
    this.passwortSichtbar = !this.passwortSichtbar;
  }

  studienordnungIdAusJahrgang() {
    const neueOrdnung = ['WiSe 2026/27', 'WiSe 2025/26', 'WiSe 2024/25'];
    if (neueOrdnung.includes(this.studienjahrgang)) {
      return 1;
    }
    return 2;
  }


  // Prüft den Namen sofort beim Tippen.
  pruefeName() {
    this.fehlerName = '';
    this.nameGueltig = false;
    if (!this.name) {
      return;
    }
    if (!/^[A-Za-zÄÖÜäöü-]+\s+[A-Za-zÄÖÜäöü-]+$/.test(this.name.trim())) {
      this.fehlerName = 'Bitte gib Vorname und Nachname';
      return;
    }
    this.nameGueltig = true;
  }

  // Prüft die E-Mail sofort beim Tippen
  pruefeEmail() {
    this.fehlerEmail = '';
    this.emailGueltig = false;
    if (!this.email) {
      return;
    }
    // Prüft, ob die E-Mail eine echte HTW-Mail ist.
    const htwMailMuster = /^[a-zäöü-]+\.[a-zäöü-]+@student\.htw-berlin\.de$/;
    if (!htwMailMuster.test(this.email.toLowerCase())) {
      this.fehlerEmail = 'Bitte überprüfe deine Email Eingabe.';
      return;
    }
    this.emailGueltig = true;
  }

  // Prüft das Passwort sofort beim Tippen
  pruefePasswort() {
    this.fehlerPasswort = '';
    this.passwortGueltig = false;
    if (!this.passwort) {
      return;
    }
    if (this.passwort.length < 8) {
      this.fehlerPasswort = 'Das Passwort muss mindestens 8 Zeichen lang sein.';
      return;
    }
    this.passwortGueltig = true;
  }

  registrieren() {
    this.pruefeName();
    this.pruefeEmail();
    this.pruefePasswort();
    this.fehlerAllgemein = '';
    this.erfolg = '';

    if (!this.name) {
      this.fehlerName = 'Bitte gib deinen Namen ein.';
    }
    if (!this.email) {
      this.fehlerEmail = 'Bitte gib deine E-Mail ein.';
    }
    if (!this.passwort) {
      this.fehlerPasswort = 'Bitte gib ein Passwort ein.';
    }

    // Wenn ein Feld falsch ist, schick nichts ans Backend.
    if (this.fehlerName || this.fehlerEmail || this.fehlerPasswort) {
      return;
    }

    const daten = {
      name: this.name,
      email: this.email,
      password: this.passwort,
      studienjahrgang: this.studienjahrgang,
      studienordnung_id: this.studienordnungIdAusJahrgang(),
    };

    this.http.post('http://localhost:8080/api/auth/register', daten).subscribe({
      next: () => {
        this.erfolg = 'Bitte HTW-Mail prüfen!';
      },
      error: () => {
        this.fehlerAllgemein = 'Registrierung fehlgeschlagen. Bitte prüfe deine Angaben.';
      },
    });
  }
}
