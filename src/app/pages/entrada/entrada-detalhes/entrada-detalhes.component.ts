import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Angular Materials
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-entrada-detalhes',
  templateUrl: './entrada-detalhes.component.html',
  styleUrls: ['./entrada-detalhes.component.scss']
})
export class EntradaDetalhesComponent implements OnInit {

  //Para o input com os setores
  public setores: Setor[] = [
    {name: "Terreiro"},
    {name: "Pré-secagem"},
    {name: "Secador"},
    {name: "Tulha"},
    {name: "Benefício"},
  ];

  //Para o input celulas
  public celulas: Celula[] = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
    {value: '5'},
    {value: '6'},
  ]

  constructor(
    public dialogRef: MatDialogRef<EntradaDetalhesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder
  ) { }

  public formEntrada: FormGroup = this.formBuilder.group({
    setor: ['', [Validators.required, Validators.email]],
    equipamento: [''],
    celula: [''],
    peso_medida: ['', [Validators.required]],
    medida_produtor: ['', [Validators.required]]
  });

  ngOnInit(): void {
    //o retorno deverá ser um array de celulas e devera implementar o atributo celulas
    //que será implementado dinamicamente no select celulas assim que terreiro for slecionado
    this.getCelulasDisponiveis();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private getCelulasDisponiveis(){
    //To be developed
    console.log('getCelulas');
  }

}

export interface DialogData {
  animal: string;
  nde: string;
}

//Para o input com os setores
export interface Setor {
  name: string,
};

//Para o input referente as celulas
export interface Celula{
  value: string,
};


