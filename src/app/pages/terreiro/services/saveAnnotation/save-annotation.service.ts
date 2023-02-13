import { Injectable } from '@angular/core';
import { Annotacion } from '../../interfaces/annotacion';

@Injectable({
  providedIn: 'root'
})
export class SaveAnnotationService {

  constructor() { }

  public save(dataForm:Annotacion):void{
    console.log("Estou nos serviço de enviar Anotação. \nDados recebidos:");
    console.log(dataForm);
  } 
}
