import { Component, OnInit } from '@angular/core';

//same things
import { AfterViewInit, ViewChild } from '@angular/core';

//Angular Material
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabela-terreiro',
  templateUrl: './tabela-terreiro.component.html',
  styleUrls: ['./tabela-terreiro.component.scss']
})
export class TabelaTerreiroComponent implements OnInit, AfterViewInit {

  public terreiroDatas: Terreiro[] = [];

  //Configurations in table
  //Instanciando tabela
  public dataSource: MatTableDataSource<Terreiro>;

  public displayedColumns: string[] = ['Column1','Column2','Column3','Column4'];

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _matPaginatorIntl: MatPaginatorIntl,
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
  }

  ngAfterViewInit() {
    //Inicializando minha tabela e definindo os dados que a irão popular
    this.dataSource = new MatTableDataSource<Terreiro>([
      {Column1:"Amoeba", Column2:"Amoeba2", Column3:"Amoeba3", Column4:"Amoeba4"},
      {Column1:"Feijao", Column2:"Feijao2", Column3:"Feijao3", Column4:"Feijao4"},
      {Column1:"Arroz", Column2:"Arroz2", Column3:"Arroz3", Column4:"Arroz4"},
      {Column1:"Arroz", Column2:"Arroz2", Column3:"Arroz3", Column4:"Arroz4"},
      {Column1:"Arroz", Column2:"Arroz2", Column3:"Arroz3", Column4:"Arroz4"},
      {Column1:"Arroz", Column2:"Arroz2", Column3:"Arroz3", Column4:"Arroz4"},
      {Column1:"Arroz", Column2:"Arroz2", Column3:"Arroz3", Column4:"Arroz4"},
      {Column1:"Arroz", Column2:"Arroz2", Column3:"Arroz3", Column4:"Arroz4"},
    ]);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    console.log("to be implemented");
  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

interface Terreiro {
  Column1:string,
  Column2:string,
  Column3:string,
  Column4:string,
};
