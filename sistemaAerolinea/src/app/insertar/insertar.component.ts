import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
  
})
export class InsertarComponent {

  nuevaPersona: any = {};

  constructor(private http: HttpClient) {}

  agregarPersona() {
    this.http.post('http://localhost:8080/personas/', this.nuevaPersona).subscribe(
      (response: any) => {
        alert('Persona agregada con éxito:');
        // Puedes mostrar un mensaje de éxito o redirigir a otra página
      },
      (error: any) => {
        alert('Error al agregar persona:');
        // Puedes mostrar un mensaje de error o manejar el error de acuerdo a tus necesidades
      }
    );
  }
}
