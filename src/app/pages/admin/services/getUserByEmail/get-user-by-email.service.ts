import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserDTO } from '../../interfaces/user-dto';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetUserByEmailService {

  constructor(private httpClient: HttpClient) { }

  public execute(email: string):Observable<UserDTO>{
    return this.httpClient.get<UserDTO>(environment.adressAuthSystem+'/api/user/getUser').pipe(
      res => res,
      err => err
    )
  }

}
