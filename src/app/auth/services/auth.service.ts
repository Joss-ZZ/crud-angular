import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators'

import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.baseURL;
  private _usuario: Usuario | undefined;

  constructor(private http: HttpClient) { }

  get usuario(): Usuario{
    return {...this._usuario!};
  }

  verificarAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('id')){
      return of(false);
    }else{
      return this.http.get<Usuario>(`${this.baseURL}/usuarios/1`)
        .pipe(
          map(usuario =>{
            console.log('Usuario del map:',usuario);
            this._usuario = usuario;
            return true;
          })
        );
    }
  }

  ingresar(): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseURL}/usuarios/1`)
            .pipe(
              tap(usuario =>{
                this._usuario = usuario,
                localStorage.setItem('id', usuario.id)  
              })
            )
  }

  cerrarSesion() {
    localStorage.removeItem('id');
    this._usuario = undefined;
  }

}
