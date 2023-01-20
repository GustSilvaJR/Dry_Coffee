import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { Observable } from 'rxjs';

@Injectable()

export class ForgotPassService {

  private url:string = "http://localhost:8000/change-pass";

  constructor( private httpClient:HttpClient) { }

  public sendEmailRec(email:string):Observable<any> {
    return this.httpClient.post<any>(this.url, {email:email}).pipe(
      res =>{
        console.log(res);
        return res;
      },

      error => {
        console.log(error);
        return error;
      }
    )
  }
}
