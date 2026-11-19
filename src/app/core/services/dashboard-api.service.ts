import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardResponse } from '../../models/dashboard.model';

/**
 * Kommuniziert mit der Dashboard-API.
 */
@Injectable({ providedIn: 'root' })
export class DashboardApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/dashboard';

  getDashboard(): Observable<DashboardResponse> {
    return this.http.get<DashboardResponse>(this.apiUrl);
  }

  finishOnboarding(): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/onboarding`, {});
  }
}