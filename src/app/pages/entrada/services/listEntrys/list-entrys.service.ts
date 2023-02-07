import { Injectable } from '@angular/core';
import { Entry } from '../../interfaces/entry';

@Injectable({
  providedIn: 'root'
})
export class ListEntrysService {

    private entrys: Entry[] = [
    { nde: '1', produtor: 'Hydrogen', cod_produtor: '1.0079', fazenda: 'H' },
    { nde: '2', produtor: 'Helium', cod_produtor: '4.0026', fazenda: 'He' },
    { nde: '3', produtor: 'Lithium', cod_produtor: '6.941', fazenda: 'Li' },
    { nde: '4', produtor: 'Beryllium', cod_produtor: '9.0122', fazenda: 'Be' },
    { nde: '5', produtor: 'Boron', cod_produtor: '10.811', fazenda: 'B' },
    { nde: '6', produtor: 'Carbon', cod_produtor: '12.0107', fazenda: 'C' },
    { nde: '7', produtor: 'Nitrogen', cod_produtor: '14.0067', fazenda: 'N' },
    { nde: '8', produtor: 'Oxygen', cod_produtor: '15.9994', fazenda: 'O' },
    { nde: '9', produtor: 'Fluorine', cod_produtor: '18.9984', fazenda: 'F' },
    { nde: '10', produtor: 'Neon', cod_produtor: '20.1797', fazenda: 'Ne' },
    { nde: '11', produtor: 'Sodium', cod_produtor: '22.9897', fazenda: 'Na' },
    { nde: '12', produtor: 'Magnesium', cod_produtor: '24.305', fazenda: 'Mg' },
    { nde: '13', produtor: 'Aluminum', cod_produtor: '26.9815', fazenda: 'Al' },
    { nde: '14', produtor: 'Silicon', cod_produtor: '28.0855', fazenda: 'Si' },
    { nde: '15', produtor: 'Phosphorus', cod_produtor: '30.9738', fazenda: 'P' },
    { nde: '16', produtor: 'Sulfur', cod_produtor: '32.065', fazenda: 'S' },
    { nde: '17', produtor: 'Chlorine', cod_produtor: '35.453', fazenda: 'Cl' },
    { nde: '18', produtor: 'Argon', cod_produtor: '39.948', fazenda: 'Ar' },
    { nde: '19', produtor: 'Potassium', cod_produtor: '39.0983', fazenda: 'K' },
    { nde: '20', produtor: 'Calcium', cod_produtor: '40.078', fazenda: 'Ca' },
  ];

  constructor() { }

  public getAllEntrys():Entry[]{

    return  this.entrys ;
  }

}
