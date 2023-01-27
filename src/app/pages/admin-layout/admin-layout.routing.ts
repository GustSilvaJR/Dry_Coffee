import { Routes } from '@angular/router';

import { TabelaEntradasComponent } from '../entrada/tabela-entradas/tabela-entradas.component';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'entrada',         component: TabelaEntradasComponent }
];
