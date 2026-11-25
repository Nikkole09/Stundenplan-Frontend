
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

interface LoginResponse {
  token: string;
  tokenType: string;
  roles: string[];
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm: FormGroup;
  hidePassword = true;
  errorMessage = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^[^\s@]+@student\.htw-berlin\.de$/i
        )
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.errorMessage = '';
    });
  }

  onSubmit(): void {
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    const loginDaten = {
      email: this.loginForm.value.email.trim(),
      password: this.loginForm.value.password
    };

    this.http.post<LoginResponse>(
      'http://localhost:8080/api/auth/login',
      loginDaten
    ).subscribe({
      next: (response) => {
        this.isLoading = false;

        if (!response.token) {
          this.errorMessage = 'Anmeldung fehlgeschlagen.';
          return;
        }

        sessionStorage.setItem('token', response.token);
        void this.router.navigate(['/uebersicht']);
      },

      error: (error) => {
        this.isLoading = false;

        if (error.status === 401 || error.status === 403) {
          this.errorMessage = 'E-Mail oder Passwort ist falsch.';
        } else if (error.status === 0) {
          this.errorMessage = 'Das Backend ist nicht erreichbar.';
        } else {
          this.errorMessage = 'Anmeldung fehlgeschlagen.';
        }
      }
    });
  }
}
