import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LavadorRoutes } from './lavador.routing';
import { RouterModule } from '@angular/router';

//Components
import { TabelaLavadorComponent } from './components/tabela-lavador/tabela-lavador.component';


@NgModule({
  declarations: [
    TabelaLavadorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LavadorRoutes),
  ]
})
export class LavadorModule { }
