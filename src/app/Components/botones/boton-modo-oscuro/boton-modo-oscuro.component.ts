import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-modo-oscuro',
  templateUrl: './boton-modo-oscuro.component.html',
  styleUrls: ['./boton-modo-oscuro.component.css'],
  standalone: true
})
export class BotonModoOscuroComponent {
  @Output() modoOscuroCambiado = new EventEmitter<boolean>();
  private estadoOscuro: boolean = false;

  toggleModoOscuro() {
    this.estadoOscuro = !this.estadoOscuro;
    this.modoOscuroCambiado.emit(this.estadoOscuro);
  }
}
