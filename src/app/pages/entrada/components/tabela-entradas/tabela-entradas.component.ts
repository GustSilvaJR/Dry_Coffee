import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EntradaDetalhesComponent } from '../entrada-detalhes/entrada-detalhes.component';
import { ListEntrysService } from '../../services/listEntrys/list-entrys.service';

//Interfaces
import { Entry } from '../../interfaces/entry';


//Angular Material
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-tabela-entradas',
  templateUrl: './tabela-entradas.component.html',
  styleUrls: ['./tabela-entradas.component.scss']
})
export class TabelaEntradasComponent implements OnInit, AfterViewInit {

  //Atributo que irá receber todas as entradas vindas do serviço listEntrys
  public entrys: Entry[] = [];

  //Instanciando atributo que irá representar minha tabela
  public dataSource: MatTableDataSource<Entry>;

  //Definindo colunas da tabela
  public displayedColumns: string[] = ['nde', 'produtor', 'cod_produtor', 'fazenda', 'placa', 'motorista', 'data', 'acoes'];

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _matPaginatorIntl: MatPaginatorIntl,
    public dialog: MatDialog,
    private listEntrys: ListEntrysService,
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

    //Consumindo serviço que irá retornar todas as entradas
    this.entrys = this.listEntrys.getAllEntrys();
  }

  ngAfterViewInit() {
    //Inicializando minha tabela e definindo os dados que a irão popular
    this.dataSource = new MatTableDataSource<Entry>(this.entrys);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //Função responsável por abrir o modal, nesse caso o nosso componente entrada detalhes
  //A partir dela se pode definir quais dados se deseja passar para o modal
  openDialog(nde: string): void {

    const dialogRef = this.dialog.open(EntradaDetalhesComponent, {
      data: { nde: nde },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}


