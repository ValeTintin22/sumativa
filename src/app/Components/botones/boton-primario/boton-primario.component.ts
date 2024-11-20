import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-primario',
  standalone: true,
  imports: [],
  templateUrl: './boton-primario.component.html',
  styleUrls: ['./boton-primario.component.css']
})
export class BotonPrimarioComponent {
  @Output() accion: EventEmitter<string> = new EventEmitter<string>();

  emitirEvento() {
    this.accion.emit('Botón Primario');
  }
}
