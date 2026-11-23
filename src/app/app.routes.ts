import { Routes } from '@angular/router';
import { Startseite } from './startseite/startseite';
import { Registrierung } from './registrierung/registrierung';

export const routes: Routes = [
  { path: '', component: Startseite },
{path: 'registrierung',component: Registrierung },
];
