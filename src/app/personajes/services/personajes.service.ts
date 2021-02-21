import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private baseURL: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  mostrarPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${this.baseURL}/personajes`);
  }

  mostrarPersonajePorID(id: string): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.baseURL}/personajes/${id}`);
  }

  buscarPersonaje(termino: string): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${this.baseURL}/personajes?q=${termino}&_limit=3`);
  }

  registrarPersonaje(personaje: Personaje): Observable<Personaje> {
    return this.http.post<Personaje>(`${this.baseURL}/personajes`, personaje);
  }

  editarPersonaje(personaje: Personaje): Observable<Personaje> {
    return this.http.put<Personaje>(`${this.baseURL}/personajes/${personaje.id}`, personaje);
  }

  eliminarPersonaje(personaje: Personaje): Observable<Personaje> {
    return this.http.delete<Personaje>(`${this.baseURL}/personajes/${personaje.id}`);
  }

}
