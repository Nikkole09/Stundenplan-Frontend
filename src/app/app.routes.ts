import { Routes } from '@angular/router';
import { Login } from './user/login/login';
import { Registrierung } from './registrierung/registrierung';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Login
  },
  {
    path: 'anmeldung',
    component: Login
  },
  {
    path: 'registrierung',
    component: Registrierung
  },

]
