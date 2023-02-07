import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Angular Materials
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SendEntryService } from '../../services/sendEntry/send-entry.service';
import { Celula } from '../../interfaces/celula';
import { CellsAvailableService } from '../../services/cellsAvailable/cells-available.service';

@Component({
  selector: 'app-entrada-detalhes',
  templateUrl: './entrada-detalhes.component.html',
  styleUrls: ['./entrada-detalhes.component.scss']
})
export class EntradaDetalhesComponent implements OnInit {

  //Para o input com os setores
  public setores: Setor[] = [
    { name: "Terreiro" },
    { name: "Pré-secagem" },
    { name: "Secador" },
    { name: "Tulha" },
    { name: "Benefício" },
  ];

  public celulasAvailables: Celula[];

  public celulaIsVisible: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EntradaDetalhesComponent>,
    private formBuilder: FormBuilder,
    private sendEntryService:SendEntryService,
    private cellsAvailable:CellsAvailableService,
  ) { }

  public formEntrada: FormGroup = this.formBuilder.group({
    setor: ['', [Validators.required]],
    equipamento: [''],
    celula: [''],
    peso_medida: ['', [Validators.required]],
    medida_produtor: ['', [Validators.required]]
  });

  ngOnInit(): void {
    
    //o retorno deverá ser um array de celulas e devera implementar o atributo celulas
    //que será implementado dinamicamente no select celulas assim que terreiro for slecionado
    this.celulasAvailables =  this.cellsAvailable.getAllCellsAvailable();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public setorAux(): boolean {
    const setor = this.formEntrada.get('setor').value;

    if (setor == "Terreiro") {

      this.celulaIsVisible = true;
      return this.celulaIsVisible;

    }else{

      this.celulaIsVisible = false;
      return this.celulaIsVisible;

    }
  }

  public sendForm():void{

    const answer = this.sendEntryService.send();
    alert(answer);

  }

}

//Para o input com os setores
export interface Setor {
  name: string,
};



