import { Component, OnInit, inject } from '@angular/core';
import { DashboardApiService } from './../../core/services/dashboard-api.service';
import { DashboardResponse } from './../../models/dashboard.model';
import { WelcomeBox } from './welcome-box/welcome-box';
import { DashboardHeader } from './dashboard-header/dashboard-header';
import { Router, RouterLink } from '@angular/router';

/**
 * Hauptseite nach dem Login.
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WelcomeBox, DashboardHeader, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  private readonly dashboardApi = inject(DashboardApiService);
  private readonly router = inject(Router);

  dashboard: DashboardResponse | null = null;
  loading = true;
  errorMessage = '';

  // Steuert, ob die Welcome Box angezeigt wird
  welcomeVisible = true;

  // Testdaten, um das Frontend laufen zu lassen
  ngOnInit(): void {
    this.dashboard = {
  user: {
    id: 1,
    name: 'Test Studentin',
    email: 'test@htw-berlin.de',
    profilbildUrl: null
  },

  studienordnung: null,
  aktuellesSemester: null,

  showWelcomeBox: true,
  completedEcts: 0,
  totalEcts: 180,
  weightedAverage: null,
  semesters: []
};

    this.loading = false;
  }

  // Echte API-Daten werden später wieder aktiviert
  /*
  ngOnInit(): void {
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
  }
  */

  finishOnboardingAndNavigate(path: string): void {
    this.dashboardApi.finishOnboarding().subscribe({
      next: () => this.router.navigate([path]),
      error: () => {
        this.errorMessage = 'Die Aktion konnte nicht gespeichert werden.';
      }
    });
  }

  // Wird aufgerufen, wenn man auf "Los geht's" klickt
  startWelcome(): void {

    // Welcome Box sofort ausblenden
    this.welcomeVisible = false;

    this.dashboardApi.finishOnboarding().subscribe({

      next: () => {

        if (this.dashboard) {
          this.dashboard = {
            ...this.dashboard,
            showWelcomeBox: false
          };
        }

        document
          .getElementById('deine-module')
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

      },

      error: () => {
        this.errorMessage =
          'Der Einstieg konnte nicht gespeichert werden.';
      }

    });
  }
}
