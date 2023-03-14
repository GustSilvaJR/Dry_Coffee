import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'modal-delete-user-component',
    templateUrl: './modal-delete-user.component.html',
    styleUrls: ['./modal-delete-user.component.scss']
})
export class ModalDeleteUserComponent {
    constructor(public dialogRef: MatDialogRef<ModalDeleteUserComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

    onNoClick(): void {
        this.dialogRef.close(false);
    }

    onYesClick(): void {
        this.dialogRef.close(true);
    }
}