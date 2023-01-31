import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaEntradasComponent } from './tabela-entradas/tabela-entradas.component';

//Angular material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    TabelaEntradasComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class EntradaModule { }
