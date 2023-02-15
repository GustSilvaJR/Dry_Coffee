import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { TabelaBeneficioComponent } from './components/tabela-beneficio/tabela-beneficio.component';
import { BeneficioRoutes } from './beneficio.routing';



@NgModule({
  declarations: [
    TabelaBeneficioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BeneficioRoutes),
  ]
})
export class BeneficioModule { }
