
import { Routes } from '@angular/router';
import { Startseite } from './startseite/startseite';
import { Login } from './user/login/login';
import { Registrierung } from './registrierung/registrierung';
import { PasswortZuruecksetzen } from './user/passwort-zuruecksetzen/passwort-zuruecksetzen';
import { Admin } from './admin/admin';

export const routes: Routes = [
  { path: '', component: Startseite },
  { path: 'anmeldung', component: Login },
  { path: 'registrierung', component: Registrierung },
  { path: 'passwort-zuruecksetzen', component: PasswortZuruecksetzen },
  { path: 'admin', component: Admin }
];
