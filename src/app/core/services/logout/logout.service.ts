import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router:Router) { }

  public logOff(){
    localStorage.setItem('access_token', null);
    this.router.navigate(['']);
  }
}
