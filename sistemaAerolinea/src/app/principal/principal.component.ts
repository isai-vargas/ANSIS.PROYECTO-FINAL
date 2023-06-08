import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor( private http: HttpClient,private router: Router) { }

  buttonClicked(buttonNumber: number) {
    switch (buttonNumber) {
      case 1:
        console.log('Botón 1 presionado');
        this.router.navigateByUrl('/Personas');
        break;
      case 2:
        console.log('Botón 2 presionado');
        break;
      case 3:
        console.log('Botón 3 presionado');
        break;
      case 4:
        console.log('Botón 4 presionado');
        break;
      default:
        console.log('Botón no reconocido');
        break;
    }
  }
  

}
