import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TabelaEntradasComponent } from './components/tabela-entradas/tabela-entradas.component';
import { EntradaDetalhesComponent } from './components/entrada-detalhes/entrada-detalhes.component';
import { EntradaRoutes } from './entrada.routing';
import { SharedModule } from '../shared/shared.module';

//Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    TabelaEntradasComponent, 
    EntradaDetalhesComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(EntradaRoutes),
    CommonModule,
  ]
})
export class EntradaModule { }
