import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

//Angular Material
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

//Interfaces
import { Lote } from 'app/pages/interfaces/lote';

//Services
import { GetAllLotesLavadorService } from '../../services/get-all-lotes-lavador.service';

@Component({
  selector: 'app-tabela-lavador',
  templateUrl: './tabela-lavador.component.html',
  styleUrls: ['./tabela-lavador.component.scss']
})
export class TabelaLavadorComponent implements OnInit, AfterViewInit {

  public lotes: Lote[] = []; 

  //Instanciando tabela
  public dataSource: MatTableDataSource<Lote>;

  public displayedColumns: string[] = ['nde','produtor','cod_produtor','fazenda', 'acoes'];

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _matPaginatorIntl: MatPaginatorIntl,
    private getAllLotesLavador: GetAllLotesLavadorService,
    public dialog: MatDialog,
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

    //Setando configurações da tabela
    this._matPaginatorIntl.itemsPerPageLabel = "";
    this._matPaginatorIntl.nextPageLabel = "Próximo";
    this._matPaginatorIntl.previousPageLabel = "Anterior";
    this._matPaginatorIntl.firstPageLabel = "Primeira Página";
    this._matPaginatorIntl.lastPageLabel = "Ultima Página";

    this.lotes = this.getAllLotesLavador.getAllLotes();
  }

  ngAfterViewInit(): void {
    //Inicializando minha tabela e definindo os dados que a irão popular
    this.dataSource = new MatTableDataSource<Lote>(this.lotes);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    // const dialogRef = this.dialog.open(TerreiroDetalhesComponent);

    // dialogRef.afterClosed().subscribe(result => {
    // });

    console.log("To be implemented");

  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
