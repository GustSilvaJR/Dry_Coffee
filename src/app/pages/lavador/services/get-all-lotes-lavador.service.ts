import { Injectable } from '@angular/core';
import { Lote } from 'app/pages/interfaces/lote';

@Injectable({
  providedIn: 'root'
})
export class GetAllLotesLavadorService {
  
  private lotes:Lote[] = [
    {nde:"1", produtor:"Lucas", cod_produtor:"1235", fazenda:"FazendaA"},
    {nde:"2", produtor:"Gustavo", cod_produtor:"1235", fazenda:"FazendaB"},
    {nde:"3", produtor:"Julio", cod_produtor:"1235", fazenda:"FazendaC"},
    {nde:"4", produtor:"Maria", cod_produtor:"1235", fazenda:"FazendaD"},
    {nde:"5", produtor:"Fernanda", cod_produtor:"1235", fazenda:"FazendaE"},
    {nde:"6", produtor:"Aruan", cod_produtor:"1235", fazenda:"FazendaF"},
    {nde:"7", produtor:"Gabriel", cod_produtor:"1235", fazenda:"FazendaG"},
    {nde:"8", produtor:"Renan", cod_produtor:"1235", fazenda:"FazendaH"},
  ];

  public getAllLotes():Lote[]{
    return this.lotes;
  }
}
