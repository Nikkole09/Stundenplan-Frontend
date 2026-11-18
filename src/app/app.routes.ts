import { Routes } from '@angular/router';
import { Startseite } from './startseite/startseite';
import { Login } from './user/login/login';

export const routes: Routes = [
  { path: '', component: Startseite },
  { path: 'anmeldung', component: Login }
];
