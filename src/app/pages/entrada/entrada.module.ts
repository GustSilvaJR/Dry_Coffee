import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaEntradasComponent } from './tabela-entradas/tabela-entradas.component';

//Angular material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    TabelaEntradasComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class EntradaModule { }
