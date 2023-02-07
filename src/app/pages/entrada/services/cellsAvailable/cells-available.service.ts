import { Injectable } from '@angular/core';
import { Celula } from '../../interfaces/celula';

@Injectable({
  providedIn: 'root'
})
export class CellsAvailableService {

  //Mock de dados que representa o retorno de todas as celulas disponiveis
  private celulas: Celula[] = [
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
  ]

  constructor() { }

  public getAllCellsAvailable():Celula[]{
    return this.celulas;
  }

}
