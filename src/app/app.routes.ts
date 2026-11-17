
import { Routes } from '@angular/router';
import { Login } from './user/login/login';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Login
  },
  {
    path: 'anmeldung',
    component: Login
  }
];
