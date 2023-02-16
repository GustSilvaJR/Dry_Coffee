import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


//Angular Material
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

//Components
import { TerreiroDetalhesComponent } from '../terreiro-detalhes/terreiro-detalhes.component';

//Interface
import { Lote } from '../../../shared/interfaces/lote';

//Serviços
import { GetLotesService } from '../../services/getLotes/get-lotes.service';

@Component({
  selector: 'app-tabela-terreiro',
  templateUrl: './tabela-terreiro.component.html',
  styleUrls: ['./tabela-terreiro.component.scss']
})
export class TabelaTerreiroComponent implements OnInit, AfterViewInit {

  public lotes: Lote[] = []; 

  //Instanciando tabela
  public dataSource: MatTableDataSource<Lote>;

  public displayedColumns: string[] = ['nde','produtor','cod_produtor','fazenda', 'acoes'];

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _matPaginatorIntl: MatPaginatorIntl,
    public dialog: MatDialog,
    public getLotesService:GetLotesService,
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
    this.lotes = this.getLotesService.getAllLotes();
  }

  ngAfterViewInit() {
    //Inicializando minha tabela e definindo os dados que a irão popular
    this.dataSource = new MatTableDataSource<Lote>(this.lotes);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TerreiroDetalhesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });

  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
