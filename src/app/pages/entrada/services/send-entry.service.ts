import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendEntryService {

  constructor() { }

  public send():string{
    return "The entry has been sent!";
  };
  
}
