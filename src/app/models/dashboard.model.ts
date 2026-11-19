/**
 * Daten des Profilbereichs im Dashboard.
 * Der Passwort-Hash wird niemals vom Backend geliefert.
 */
export interface DashboardUser {
  id: number;
  name: string;
  email: string;
  profilbildUrl: string | null;
}

// Gesamte Antwort von GET /api/dashboard.
export interface DashboardResponse {
  user: DashboardUser;
  showWelcomeBox: boolean;
  completedEcts: number | null;
  totalEcts: number | null;
  weightedAverage: number | null;
  semesters: DashboardSemester[];
}

export interface DashboardSemester {
  semester: number;
  modules: DashboardModule[];
}

export type ModuleStatus =
  | 'BESTANDEN'
  | 'BELEGT'
  | 'OFFEN'
  | 'DURCHGEFALLEN';

export interface DashboardModule {
  id: number;
  nummer: string;
  name: string;
  ects: number;
  semester: number;
  status: ModuleStatus;
  note: number | null;
}