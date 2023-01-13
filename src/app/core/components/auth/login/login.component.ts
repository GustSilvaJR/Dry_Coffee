import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from 'app/core/services/signIn/sign-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public msgError: string = "";

  constructor(private formBuilder: FormBuilder, private signInService:SignInService) { }

  ngOnInit(): void {
  }

  public formLogin: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  public submitLogin(): void {
    if (true) {
      this.signInService.signIn();
      alert("Formulário enviado com sucesso!");
      this.msgError = "";
    } else {
      this.msgError = "E-mail ou senha incorretos!";
    }
  }

}
