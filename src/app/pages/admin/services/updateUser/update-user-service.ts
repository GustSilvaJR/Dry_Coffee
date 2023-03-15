import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserUpdateDTO } from '../../interfaces/user-update-dto';

import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(private httpClient: HttpClient) { }

  public execute(user:UserUpdateDTO):Observable<boolean>{
    return this.httpClient.put<boolean>(environment.adressAuthSystem+'/api/user/updateUser', user).pipe(
      res => res,
      err => err,
    )
  }

}
