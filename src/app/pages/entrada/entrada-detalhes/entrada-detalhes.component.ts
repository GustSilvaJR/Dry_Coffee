import { Component, Inject, OnInit } from '@angular/core';

//Angular Materials
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-entrada-detalhes',
  templateUrl: './entrada-detalhes.component.html',
  styleUrls: ['./entrada-detalhes.component.scss']
})
export class EntradaDetalhesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EntradaDetalhesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  animal: string;
  nde: string;
}
