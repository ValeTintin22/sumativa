import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-modo-oscuro',
  standalone: true,
  imports: [],
  templateUrl: './boton-modo-oscuro.component.html',
  styleUrls: ['./boton-modo-oscuro.component.css']
})
export class BotonModoOscuroComponent {
  @Output() modoOscuroCambiado: EventEmitter<boolean> = new EventEmitter<boolean>();

  emitirEvento() {
    this.modoOscuroCambiado.emit(true);  
  }
}
