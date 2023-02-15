import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PreSecagemRoutes } from './pre-secagem.routing';

//Components
import { TabelaPreSecagemComponent } from './components/tabela-pre-secagem/tabela-pre-secagem.component';




@NgModule({
  declarations: [
    TabelaPreSecagemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PreSecagemRoutes)
  ]
})
export class PreSecagemModule { }
