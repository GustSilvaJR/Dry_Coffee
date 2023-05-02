import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateUserService } from 'app/pages/admin/services/createUser/create-user.service';

@Component({
  selector: 'app-modal-create-user',
  templateUrl: './modal-create-user.component.html',
  styleUrls: ['./modal-create-user.component.scss']
})
export class ModalCreateUserComponent implements OnInit {

  public handle_empresa: number;

  constructor(private formBuilder: FormBuilder, private createUserService: CreateUserService) { }

  ngOnInit(): void {
    this.handle_empresa = parseInt(JSON.parse(localStorage.getItem('current_user')).handle_empresa)
    this.formUser.setValue({
      handle_empresa: this.handle_empresa,
      nome_usuario: '',
      email: '',
      senha: ''
    });
  }

  public formUser: FormGroup = this.formBuilder.group({
    nome_usuario: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    senha: ['', [Validators.required, Validators.minLength(5)]],
    handle_empresa: ['', [Validators.required]],
  });


  public submitForm(){

    const dataNewUser = {
      nom_usuario: this.formUser.get('nome_usuario').value,
      nom_email: this.formUser.get('email').value,
      nom_senha: this.formUser.get('senha').value,
      han_empresa: this.formUser.get('handle_empresa').value,
    }

    this.createUserService.createUser(dataNewUser).subscribe({
      next: (res) => {
        console.log("Resultado: ", res);
      },
      error: (error) => {
        console.log("Error: ", error);
        alert("Não foi possível criar um novo usuário, entre em contato com o administrador do sistema.")
      }
    })
    
  }

}
