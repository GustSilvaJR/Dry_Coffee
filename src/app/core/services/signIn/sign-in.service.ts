import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor() { }

  public signIn():void{
    console.log("Login efetuado a partir do service");
  }

}
