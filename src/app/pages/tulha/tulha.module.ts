import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TulhaRoutes } from './tulha.routing';

//Components
import { TabelaTulhaComponent } from './components/tabela-tulha/tabela-tulha.component';




@NgModule({
  declarations: [
    TabelaTulhaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TulhaRoutes),
  ]
})
export class TulhaModule { }
