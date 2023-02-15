import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecadorRoutes } from './secador.routing';

//Components
import { TabelaSecadorComponent } from './components/tabela-secador/tabela-secador.component';



@NgModule({
  declarations: [
    TabelaSecadorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SecadorRoutes),
  ]
})
export class SecadorModule { }
