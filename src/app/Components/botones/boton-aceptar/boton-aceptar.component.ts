import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-aceptar',
  standalone: true,
  imports: [],
  templateUrl: './boton-aceptar.component.html',
  styleUrls: ['./boton-aceptar.component.css']
})
export class BotonAceptarComponent {
  @Output() accion: EventEmitter<string> = new EventEmitter<string>();

  emitirEvento() {
    this.accion.emit('Botón Aceptar clickeado');
  }
}
