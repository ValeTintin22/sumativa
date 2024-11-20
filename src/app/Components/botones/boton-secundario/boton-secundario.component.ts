import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-secundario',
  standalone: true,
  imports: [],
  templateUrl: './boton-secundario.component.html',
  styleUrls: ['./boton-secundario.component.css']
})
export class BotonSecundarioComponent {
  @Output() accion: EventEmitter<string> = new EventEmitter<string>();

  emitirEvento() {
    this.accion.emit('Botón Secundario clickeado');
  }
}

