import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  personas: any[] = [];
  nuevaPersona: any = null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.obtenerPersonas();
  }

  obtenerPersonas() {
    this.http.get('http://localhost:8080/personas').subscribe(
      (response: any) => {
        this.personas = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  agregarPersona() {
     this.router.navigateByUrl('/insertar');
  }

  editarPersona(persona: any) {
    this.http.put(`http://localhost:8080/personas/${persona.idPersona}`, persona).subscribe(
      (response: any) => {
        alert('Operacion exitosa')
      },
      (error: any) => {
        alert('Error al guardar los cambios:');
      }
    );
  }

  eliminarPersona(persona: any) {
    this.http.delete(`http://localhost:8080/personas/${persona.idPersona}`, persona).subscribe(
      () => {
        const index = this.personas.indexOf(persona);
        if (index !== -1) {
          this.personas.splice(index, 1);
          alert("Persona eliminada exitosamente");
        }
      },
      (error: any) => {
        console.error(error);
        alert("Persona eliminada exitosamente");
      }
    );  
  }

}
