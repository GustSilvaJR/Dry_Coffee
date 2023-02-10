import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { TabelaTerreiroComponent } from './components/tabela-terreiro/tabela-terreiro.component';
import { RouterModule } from '@angular/router';
import { TerreiroRoutes } from './terreiro.routing';
import { SharedModule } from '../shared/shared.module';
import { TerreiroDetalhesComponent } from './components/terreiro-detalhes/terreiro-detalhes.component';

@NgModule({
  declarations: [
    TabelaTerreiroComponent,
    TerreiroDetalhesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TerreiroRoutes),
    SharedModule,
  ]
})
export class TerreiroModule { }
