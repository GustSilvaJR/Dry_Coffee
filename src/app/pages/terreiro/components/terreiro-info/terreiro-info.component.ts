import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-terreiro-info',
  templateUrl: './terreiro-info.component.html',
  styleUrls: ['./terreiro-info.component.scss']
})
export class TerreiroInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TerreiroInfoComponent>,
  ) { }

  ngOnInit(): void {
  }

}
