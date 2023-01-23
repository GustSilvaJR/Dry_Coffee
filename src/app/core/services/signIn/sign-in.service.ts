
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import jwt from 'jsonwebtoken';


//Observable
import { Observable} from 'rxjs';

import { LoginDTO } from 'app/core/interfaces/loginDTO';

@Injectable()

export class SignInService {

  private url:string = "http://localhost:8000/login";

  constructor(private httpClient: HttpClient) { }

  public signIn({email, password}):Observable<any>{
    const data:LoginDTO = {
      email,
      password
    };

    return this.httpClient.post<boolean>(this.url, data).pipe(
      res => {
        console.log(res);
        return res;
      },
      error => {
        console.log(error);
        return error;
      }
    )
  }

  public isAuthenticated():boolean{
    const token = localStorage.getItem('access_token');
    
    if(!token) return false;

    return !jwt.JsonWebTokenError
    
  }

}
