import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = [
    {id:1, name:'shiv'},
    {id:2, name:'prasad'},
    {id:3, name:'shivprasad'}
]

  constructor() { }
  getUsers(){
    return of(this.user);
  }
}
