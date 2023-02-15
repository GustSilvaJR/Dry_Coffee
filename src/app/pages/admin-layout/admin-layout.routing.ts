import { Routes } from '@angular/router';

//Components
import { HomeComponent } from '../dashboard/home/home.component';
import { TabelaEntradasComponent } from '../entrada/components/tabela-entradas/tabela-entradas.component';
import { TabelaTerreiroComponent } from '../terreiro/components/tabela-terreiro/tabela-terreiro.component';
import { UserComponent } from '../user/user.component';
import { TabelaLavadorComponent } from '../lavador/components/tabela-lavador/tabela-lavador.component';
import { TabelaPreSecagemComponent } from '../pre-secagem/components/tabela-pre-secagem/tabela-pre-secagem.component';
import { TabelaSecadorComponent } from '../secador/components/tabela-secador/tabela-secador.component';
import { TabelaMoegaDescansoComponent } from '../moega-descanso/components/tabela-moega-descanso/tabela-moega-descanso.component';
import { TabelaTulhaComponent } from '../tulha/components/tabela-tulha/tabela-tulha.component';
import { TabelaBeneficioComponent } from '../beneficio/components/tabela-beneficio/tabela-beneficio.component';

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
    { 
        path: 'lavador',
        component: TabelaLavadorComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./../lavador/lavador.routing').then(x => x.LavadorRoutes)
            }
        ]
        
    },
    { 
        path: 'pre-secagem',
        component: TabelaPreSecagemComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./../pre-secagem/pre-secagem.routing').then(x => x.PreSecagemRoutes)
            }
        ]
        
    },
    { 
        path: 'secador',
        component: TabelaSecadorComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./../secador/secador.routing').then(x => x.SecadorRoutes)
            }
        ]
        
    },
    { 
        path: 'moega-descanso',
        component: TabelaMoegaDescansoComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./../moega-descanso/moega-descanso.routing').then(x => x.MoegaDescansoRoutes)
            }
        ]
        
    },
    { 
        path: 'tulha',
        component: TabelaTulhaComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./../tulha/tulha.routing').then(x => x.TulhaRoutes)
            }
        ]
        
    },
    { 
        path: 'beneficio',
        component: TabelaBeneficioComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./../beneficio/beneficio.routing').then(x => x.BeneficioRoutes)
            }
        ]
        
    },
];
