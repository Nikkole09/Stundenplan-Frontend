
import { Routes } from '@angular/router';
import { Login } from './user/login/login';
import { PasswortZuruecksetzen } from './user/passwort-zuruecksetzen/passwort-zuruecksetzen';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Login
  },
    
  {
    path: 'passwort-zuruecksetzen',
    component: PasswortZuruecksetzen
  }
];
