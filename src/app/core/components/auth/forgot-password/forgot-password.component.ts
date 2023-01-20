import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPassService } from 'app/core/services/forgotPass/forgot-pass.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public msgError: string = "";

  constructor(private formBuilder: FormBuilder, private forgotPassService: ForgotPassService) { }

  ngOnInit(): void {
  }

  public formForgotPass: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email]]
  });

  public submitEmail(): void {

    const email = this.formForgotPass.get('email').value;

    this.forgotPassService.sendEmailRec(email).subscribe({
      next: (res) => {
        if(!res.exists){
          this.msgError = res.msg;
        }else{
          this.msgError = "";
          alert(res.msg);
        }
      },

      error: (err) => {
        console.log("Error :");
        console.log(err);

        this.msgError = "Servidor com problemas! Entre em contato com o administrador.";

      }
    })


  }

}
