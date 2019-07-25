import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  apiURL = 'http://localhost:50239/api/estudiantes';

  constructor(private http: HttpClient) { }

  obtenerEstudiante(id: Number) {
    return this.http.get<Estudiante>(this.apiURL + '/' + id);
  }

  obtenerEstudiantes() {
    return this.http.get<Estudiante[]>(this.apiURL);
  }

  eliminarEstudiante(id: Number) {
    return this.http.delete(this.apiURL + "/" + id);
  }

  crearEstudiante(estudiante: Estudiante) {
    return this.http.post<Estudiante>(this.apiURL, estudiante);
  }

  editarEstudiante(estudiante: Estudiante) {
    return this.http.put<Estudiante>(this.apiURL + "/" + estudiante.id, estudiante);
  }
}