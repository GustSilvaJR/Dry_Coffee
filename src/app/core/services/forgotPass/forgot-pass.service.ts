import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotPassService {

  constructor() { }

  public sendForgotPass(){
    console.log("E-mail de recuperação enviada");
  }
}
