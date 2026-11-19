import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardApiService } from './../../core/services/dashboard-api.service';
import { DashboardResponse } from './../../models/dashboard.model';
import { WelcomeBox } from './welcome-box/welcome-box';

/**
 * Hauptseite nach dem Login.
 
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WelcomeBox],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  private readonly dashboardApi = inject(DashboardApiService);
  private readonly router = inject(Router);

  dashboard: DashboardResponse | null = null;
  loading = true;
  errorMessage = '';

  //Test daten, um Frontend laufen zu lassen
  ngOnInit(): void {
  this.dashboard = {
    user: {
      id: 1,
      name: 'Test Studentin',
      email: 'test@htw-berlin.de',
      profilbildUrl: null
    },
    showWelcomeBox: true,
    completedEcts: 0,
    totalEcts: 180,
    weightedAverage: null,
    semesters: []
  };

  this.loading = false;
}

//werden Kommentiert, um erst mit Testdaten zu arbeiten, bis die Registrierung und das Login fertig sind (wegen echte API Daten)
  /*ngOnInit(): void {
    this.dashboardApi.getDashboard().subscribe({
      next: (data) => {
        this.dashboard = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Das Dashboard konnte nicht geladen werden.';
        this.loading = false;
      }
    });
  }*/

  finishOnboardingAndNavigate(path: string): void {
    this.dashboardApi.finishOnboarding().subscribe({
      next: () => this.router.navigate([path]),
      error: () => {
        this.errorMessage = 'Die Aktion konnte nicht gespeichert werden.';
      }
    });
  }
}