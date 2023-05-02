import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


//Componentes
import { TabelaTerreiroComponent } from './components/tabela-terreiro/tabela-terreiro.component';
import { RouterModule } from '@angular/router';
import { TerreiroRoutes } from './terreiro.routing';
import { SharedModule } from '../shared/shared.module';
import { TerreiroDetalhesComponent } from './components/terreiro-detalhes/terreiro-detalhes.component';
import { TerreiroInfoComponent } from './components/terreiro-info/terreiro-info.component';

@NgModule({
  declarations: [
    TabelaTerreiroComponent,
    TerreiroDetalhesComponent,
    TerreiroInfoComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(TerreiroRoutes),
    SharedModule,
  ]
})
export class TerreiroModule { }
