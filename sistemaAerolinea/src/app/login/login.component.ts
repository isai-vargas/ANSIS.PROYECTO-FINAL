import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const nombreUsuario = this.email;
    const contrasena = this.password;

    this.http.get(`http://localhost:8080/usuarios/${nombreUsuario}/${contrasena}`)
      .subscribe(response => {
        if (response === 1) {
          alert('Inicio de sesion exitoso');
          this.router.navigateByUrl('/principal');

        } else {
          alert('Credenciales inválidas');
        }
      }, error => {
        console.error(error);
        alert('Ocurrió un error');
      });
  }
}
