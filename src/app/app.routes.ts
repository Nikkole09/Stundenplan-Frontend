import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Startseite } from './startseite/startseite';

export const routes: Routes = [
  { path: '', component: Startseite },
  { path: 'uebersicht', component: Dashboard },
  { path: '**', redirectTo: 'uebersicht' },

];
