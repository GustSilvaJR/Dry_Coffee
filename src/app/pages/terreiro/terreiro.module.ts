import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { TabelaTerreiroComponent } from './components/tabela-terreiro/tabela-terreiro.component';
import { RouterModule } from '@angular/router';
import { TerreiroRoutes } from './terreiro.routing';

@NgModule({
  declarations: [
    TabelaTerreiroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TerreiroRoutes),
  ]
})
export class TerreiroModule { }
