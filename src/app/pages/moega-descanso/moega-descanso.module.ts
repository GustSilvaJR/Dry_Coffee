import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { TabelaMoegaDescansoComponent } from './components/tabela-moega-descanso/tabela-moega-descanso.component';
import { MoegaDescansoRoutes } from './moega-descanso.routing';



@NgModule({
  declarations: [
    TabelaMoegaDescansoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MoegaDescansoRoutes),
  ]
})
export class MoegaDescansoModule { }
