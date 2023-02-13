import { Routes } from '@angular/router';

import { HomeComponent } from '../dashboard/home/home.component';
import { TabelaEntradasComponent } from '../entrada/components/tabela-entradas/tabela-entradas.component';
import { TabelaTerreiroComponent } from '../terreiro/components/tabela-terreiro/tabela-terreiro.component';
import { UserComponent } from '../user/user.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent },
    {
        path: 'user',
        component: UserComponent,
    },

    {
        path: 'entrada',
        component: TabelaEntradasComponent, 
        children: [
            {
                path: '',
                loadChildren: () => import('./../entrada/entrada.routing').then(x => x.EntradaRoutes)
            }],
    },
    
    { 
        path: 'terreiro',
        component: TabelaTerreiroComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./../terreiro/terreiro.routing').then(x => x.TerreiroRoutes)
            }
        ]
        
    },
];
