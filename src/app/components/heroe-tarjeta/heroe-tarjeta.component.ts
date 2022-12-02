import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!: Heroe;
  @Input() index!: number;

  @Output() heroeSeleccionado: EventEmitter<number>;  // HIJO

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();

  }

  ngOnInit() {

  }

  verHeroe() {
    // this.router.navigate(['/heroe', this.index]);
    // Vamos a enviar dato al padre
    console.log('Vamos a enviar idx desde el hijo: ' + this.index);
    this.heroeSeleccionado.emit(this.index);
  }

}
