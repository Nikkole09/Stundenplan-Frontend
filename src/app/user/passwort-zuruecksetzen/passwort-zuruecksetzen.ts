
import { Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-passwort-zuruecksetzen',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './passwort-zuruecksetzen.html',
  styleUrl: './passwort-zuruecksetzen.css'
})
export class PasswortZuruecksetzen {

  private http = inject(HttpClient);

  passwortForm: FormGroup;
  meldung = '';

  constructor(private fb: FormBuilder) {
    this.passwortForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^[^\s@]+@student\.htw-berlin\.de$/i
        )
      ]]
    });
  }

  passwortZuruecksetzen(): void {

    if (this.passwortForm.invalid) {
      this.passwortForm.markAllAsTouched();
      return;
    }

    const email = this.passwortForm.get('email')?.value?.trim();

    this.meldung = '';

    this.http.post(
      'http://localhost:8080/api/auth/passwort-zuruecksetzen',
      { email }
    ).subscribe({
      next: () => {
        this.meldung =
          'Wenn ein Konto mit dieser E-Mail existiert, wurde eine Nachricht verschickt.';
      },
      error: () => {
        this.meldung =
          'Die Anfrage konnte nicht gesendet werden.';
      }
    });
  }
}
