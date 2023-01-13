import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPassService } from 'app/core/services/forgotPass/forgot-pass.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public msgError:string = "";

  constructor(private formBuilder:FormBuilder, private forgotPassService:ForgotPassService) { }

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
      this.forgotPassService.sendForgotPass();
      this.msgError = "E-mail não cadastrado!";
    }
  }

}
