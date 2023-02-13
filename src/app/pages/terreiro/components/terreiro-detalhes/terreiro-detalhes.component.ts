import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

//Angular Materials
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SaveAnnotationService } from '../../services/saveAnnotation/save-annotation.service';
import { Annotacion } from '../../interfaces/annotacion';

@Component({
  selector: 'app-terreiro-detalhes',
  templateUrl: './terreiro-detalhes.component.html',
  styleUrls: ['./terreiro-detalhes.component.scss']
})
export class TerreiroDetalhesComponent implements OnInit {

   //Para o input com os setores
   public setores: any[] = [
    { name: "Terreiro" },
    { name: "Pré-secagem" },
    { name: "Secador" },
    { name: "Tulha" },
    { name: "Benefício" },
  ];

  // public celulasAvailables: Celula[];

  public celulaIsVisible: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<TerreiroDetalhesComponent>,
    private formBuilder: FormBuilder,
    private saveAnnotationService:SaveAnnotationService
  ) { }

  public formTerreiro: FormGroup = this.formBuilder.group({
    umidade: ['', [Validators.required]],
    observacao: [''],
    data: [''],
    hora: [''],
  });

  ngOnInit(): void {
    
    //o retorno deverá ser um array de celulas e devera implementar o atributo celulas
    //que será implementado dinamicamente no select celulas assim que terreiro for slecionado
    // this.celulasAvailables =  this.cellsAvailable.getAllCellsAvailable();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  public sendForm():void{

    const date = new Date();

    this.formTerreiro.get('data').setValue(date.toLocaleDateString());
    this.formTerreiro.get('hora').setValue(date.getHours()+":"+date.getMinutes());

    const formData:Annotacion = this.formTerreiro.value;

    this.saveAnnotationService.save(formData);

  }

}
