import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../../interfaces/user-dto';

import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  constructor(private httpClient: HttpClient) { }

  public listUsers(handle_empresa:number):Observable<UserDTO []>{

    return this.httpClient.get<UserDTO[]>(environment.adressAuthSystem+'/api/user/getAllUsers', {params:{
      handle_empresa,
    }}).pipe(
      res => res,
      error => error,
    )
  }

}
