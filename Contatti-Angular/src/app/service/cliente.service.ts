import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cliente } from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private cliente!: Cliente;
  private baseUrl: string= 'http://127.0.0.1:8080/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE,OPTIONS',
      'Content-type':'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

    getClienti():Observable<any>{
      return this._http.get(this.baseUrl+'/contatti',this.httpOptions).pipe(
        map((reponse => reponse)));

    }

    getCliente(id: string): Observable<any>{
      return this._http.get(this.baseUrl + '/contatto/' +id,this.httpOptions).pipe(
        map((reponse => reponse)));
    }

    createCliente(cliente : Cliente): Observable<any>{
      return this._http.post(this.baseUrl + '/save', cliente,this.httpOptions).pipe(
        map((reponse => reponse)));
    }
    
    updateCliente(cliente : Cliente): Observable<any>{
      return this._http.put(this.baseUrl + '/update', cliente,this.httpOptions).pipe(
        map((reponse => reponse)));
    }
  
    deleteCliente(id : string): Observable<any>{
      return this._http.delete(this.baseUrl + '/delete/' +id,this.httpOptions).pipe(
        map((reponse => reponse)));
    }

    setter(cliente : Cliente){
      this.cliente = cliente;
    }

    getter(){
      return this.cliente;
    }
 
}
