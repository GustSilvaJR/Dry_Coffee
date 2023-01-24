import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

//Services
import { SignInService } from '../services/signIn/sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private signInService: SignInService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.signInService.isAuthenticated()) {
      
      this.router.navigate(['']);
      console.log("Recusado");
      return false;
    } else {
      console.log("Autenticado");
      return true;
    }
  }

}
