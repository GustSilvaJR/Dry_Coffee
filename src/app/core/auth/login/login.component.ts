import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public msgError: string = "";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public formLogin: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  public submitLogin(): void {
    if (false) {
      alert("Formulário enviado com sucesso!");
      this.msgError = "";
    } else {
      this.msgError = "E-mail ou senha incorretos!";
    }
  }

}
