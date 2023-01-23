import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from 'app/core/services/signIn/sign-in.service';
import { Md5 } from 'ts-md5';
import { environment } from 'environments/environment';

import { LoginDTO } from 'app/core/interfaces/loginDTO';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public msgError: string = "";

  constructor(private formBuilder: FormBuilder, private signInService: SignInService, private router:Router) { }

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
          this.msgError = res.msg;

          console.log(document.querySelector('#error'));
          const span = document.querySelector('#error');
          if(span){
            
            span.classList.remove('animate-error');

            setTimeout(() => {
              span.classList.add('animate-error');  
            }, 0.2);
            
          }
        } else {
          this.msgError = '';

          console.log(res);

          environment.adress = res.adress;

          localStorage.removeItem('access_token');
          localStorage.setItem('access_token', res.token);
          
          this.router.navigate(['/dashboard']);

          console.log(environment);

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
