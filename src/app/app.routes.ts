<<<<<<< HEAD

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
=======
import { Routes } from '@angular/router';
import { Registrierung } from './registrierung/registrierung';

export const routes: Routes = [

  {
    path: 'registrierung',
    component: Registrierung
  },
>>>>>>> origin/main
];
