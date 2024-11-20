import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-cancelar',
  standalone: true,
  imports: [],
  templateUrl: './boton-cancelar.component.html',
  styleUrls: ['./boton-cancelar.component.css']
})
export class BotonCancelarComponent {
  @Output() accion: EventEmitter<string> = new EventEmitter<string>();

  emitirEvento() {
    this.accion.emit('Botón Cancelar clickeado');
  }
}
