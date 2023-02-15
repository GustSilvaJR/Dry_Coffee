import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

//Angular Material
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

//Interfaces
import { Lote } from 'app/pages/interfaces/lote';

@Component({
  selector: 'app-tabela-lavador',
  templateUrl: './tabela-lavador.component.html',
  styleUrls: ['./tabela-lavador.component.scss']
})
export class TabelaLavadorComponent implements OnInit, AfterViewInit {

  public lotes: Lote[] = []; 

  //Instanciando tabela
  public dataSource: MatTableDataSource<Lote>;

  public displayedColumns: string[] = ['N_Lote','produtor','cod_produtor','fazenda', 'acoes'];

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _matPaginatorIntl: MatPaginatorIntl,
    public dialog: MatDialog,
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
