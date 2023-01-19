import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from 'app/core/services/signIn/sign-in.service';
import { Md5 } from 'ts-md5';

import { LoginDTO } from 'app/core/interfaces/loginDTO';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public msgError: string = "";

  constructor(private formBuilder: FormBuilder, private signInService: SignInService) { }

  ngOnInit(): void {
  }

  public formLogin: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  public submitLogin(): void {

    const dataLogin: LoginDTO = {
      email: this.formLogin.get('email').value,
      password: Md5.hashStr(this.formLogin.get('password').value),
    };

    this.signInService.signIn(dataLogin).subscribe({
      next: (res) => {

        if (!res.auth) {
          alert("Formulário enviado com sucesso!");
          this.msgError = res.msg;
        } else {
          this.msgError = '';
        }

      },
      error: (err) => {
        console.log("Error: ");
        console.log(err);

        this.msgError = "Servidor com problemas! Entre em contato com o administrador ou tente novamente mais tarde.";
      }
    })
  }
}
