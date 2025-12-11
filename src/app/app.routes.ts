import { Routes } from '@angular/router';
import { Inicio } from './contenido/inicio';
import { TorneoGeneral } from './torneos/torneo-general';

export const routes: Routes = [
    {
        path: '',
        component: Inicio,
        title: 'Home page',
    },
    {
        path: 'torneo-general',
        component: TorneoGeneral,
        title: 'Torneo General',
    },
];
