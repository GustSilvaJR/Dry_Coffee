import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private httpClient:HttpClient) { }

  public createUser(dataNewUser:any):Observable<boolean>{
    return this.httpClient.post<boolean>(environment.adressAuthSystem+'/api/user/createUser', dataNewUser).pipe(
      res => res,
      error => error,
    )
  }
}
