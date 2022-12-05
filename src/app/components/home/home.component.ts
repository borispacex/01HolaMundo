import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  
  // ngClass
  fondoAmarillo = false;
  letraGrande = false;

  cambiarFondo(): void {
    this.fondoAmarillo = !this.fondoAmarillo;
  }
  cambiarLetra(): void {
    this.letraGrande = !this.letraGrande;
  }
  asignaClases(): object {
    let classes = {
      fa: this.fondoAmarillo,
      lg: this.letraGrande,
    };
    return classes;
  }
  // ngSwitch
  variable = 'C';
  // ngModel
  nombre = '';
  cambiaNombre($event: any): void {
    this.nombre = this.nombre.toUpperCase();
  }
  // ngStyle
  canSave = true;
}
