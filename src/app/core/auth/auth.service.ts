import { Injectable } from '@angular/core';

/**
 * Verwaltet das JWT im Browser.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'stundenplan_jwt';

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}