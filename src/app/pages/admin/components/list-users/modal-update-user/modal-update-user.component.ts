import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDTO } from 'app/pages/admin/interfaces/user-dto';
import { ListUsersService } from 'app/pages/admin/services/listUsers/list-users.service';
import { UpdateUserService } from 'app/pages/admin/services/updateUser/update-user-service';

@Component({
  selector: 'app-modal-update-user',
  templateUrl: './modal-update-user.component.html',
  styleUrls: ['./modal-update-user.component.scss']
})
export class ModalUpdateUserComponent implements OnInit {

  public emailOriginal:string = this.data.nom_email;

  constructor( private listUserService: ListUsersService, private updateUserService: UpdateUserService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ModalUpdateUserComponent>, @Inject(MAT_DIALOG_DATA) public data: UserDTO) { }

  ngOnInit(): void {
  }

  public formUserUpdate: FormGroup = this.formBuilder.group({
    nome_usuario: [this.data.nom_usuario, [Validators.required]],
    nome_email: [this.data.nom_email, [Validators.email, Validators.required]],
    flg_status: [this.data.flg_status, [Validators.required]],
    flg_tipo_usuario: [this.data.flg_tipo_usuario, [Validators.required]],
    senha: ['', [Validators.required]]
  });

  public async  submitFormUpdate():Promise<boolean> {

    const user = {
      nome_usuario: this.formUserUpdate.get('nome_usuario').value,
      nome_email: this.formUserUpdate.get('nome_email').value,
      flg_status: this.formUserUpdate.get('flg_status').value,
      flg_tipo_usuario: this.formUserUpdate.get('flg_tipo_usuario').value,
      senha: this.formUserUpdate.get('senha').value,
      email_original: this.emailOriginal,
    }

    let response: boolean;
    
    await this.updateUserService.execute(user).subscribe({
      next: res =>{   
       response = res
      },  
      error: err => err,
    })

    let han_empresa = JSON.parse(localStorage.getItem('current_user')).handle_empresa;

    alert('Usuario alterado com sucesso');

    this.listUserService.listUsers(han_empresa);

    

    return response;

  }

}
