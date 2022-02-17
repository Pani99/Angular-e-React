import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return[
      {name:'Palle',age:110,email:'pallepelose@gmai.com'},
      {name:'Cane',age:8,email:'cane@gmai.com'},
      {name:'Sgrodolox',age:12,email:'smerdalox@gmai.com'}
    ]
  }
}
