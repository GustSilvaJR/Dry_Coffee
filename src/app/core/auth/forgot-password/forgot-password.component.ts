import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public msgError:string = "";

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  public formForgotPass: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email]]
  });

  public submitEmail():void{
    if(false){
      alert("E-mail enviado com sucesso!");
      this.msgError = "";
    }else{
      this.msgError = "E-mail não cadastrado!"
    }
  }

}
