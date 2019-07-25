import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  apiURL = 'http://localhost:50239/api/cursos';

  constructor(private http: HttpClient) { }

  obtenerCursos() {
    return this.http.get<Curso[]>(this.apiURL);
  }
}
