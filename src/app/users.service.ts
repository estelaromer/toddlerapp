import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: Http) { 

  }

  nuevoUsuario(pdatosRegistro, pruta) {
    this.http.post(`http://localhost:3000/api/${pruta}/create`, {param1: pdatosRegistro}).toPromise().
    then( res => console.log(res.json()));
  }
}
