// Legt die Navigationswege der Angular-Anwendung fest.
import { Routes } from '@angular/router';
import { Startseite } from './startseite/startseite';
import { Dashboard } from './pages/dashboard/dashboard';


//werden beide noch später benötigt, dann hier importieren
//import { Profile } from './pages/dashboard/profile/profile';
//import { Semesterplan } from './pages/dashboard/semesterplan/semesterplan';

/**
 * Legt fest, welche Angular-Komponente unter welcher URL erreichbar ist.
 * Die eigentlichen Werte kommen aus den vorhandenen Services bzw. der API.
 */
export const routes: Routes = [
    {
        path: '',
        component: Startseite
    },
    {
        path: 'uebersicht',
        component: Dashboard
    },
    
    // Hier später die Team-Komponenten eintragen:
    // { path: 'semesterplan', component: Semesterplan },
    // { path: 'profil', component: Profil },
    {
        path: '**',
        redirectTo: 'uebersicht'
    }
];