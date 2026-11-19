import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: 'uebersicht', component: Dashboard },
  { path: '', pathMatch: 'full', redirectTo: 'uebersicht' },
  { path: '**', redirectTo: 'uebersicht' }
];