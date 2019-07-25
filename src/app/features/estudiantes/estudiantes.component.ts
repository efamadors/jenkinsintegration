import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiante[];

  constructor(private _estudiantesService: EstudiantesService, private router: Router) { }

  ngOnInit() {
    this.obtenerEstudiantes();
  }

  crearEstudiante() {
    this.router.navigate(['/estudiantes/crear']);
  }

  editarEstudiante(id: Number) {
    this.router.navigate(['/estudiantes/editar', id]);
  }

  obtenerEstudiantes() {
    this._estudiantesService.obtenerEstudiantes().subscribe(data => {
      this.estudiantes = data;
    });
  }

  eliminarEstudiante(id: Number) {
    const res = confirm("Desea eliminar estudiante?");
    if (res) {
      this._estudiantesService.eliminarEstudiante(id).subscribe(() => {
        this.obtenerEstudiantes();
      })
    }
  }
}
