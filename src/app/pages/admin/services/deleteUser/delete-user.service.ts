import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  constructor(private httpClient:HttpClient) { }

  public execute(email:string):Observable<boolean>{
    return this.httpClient.delete<boolean>(environment.adressAuthSystem+'/api/user/deleteUser', {body: {email: email}} ).pipe(
      res => res,
      err => err,
    )
  }

}
