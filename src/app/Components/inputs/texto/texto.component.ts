import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {
  texto: string = '';
  error: string = '';

  @Output() textoValido: EventEmitter<string> = new EventEmitter<string>();

  validarTexto(): void {
    const regex = /^[a-zA-Z\s]+$/; 
    if (!regex.test(this.texto)) {
      this.error = 'El texto solo puede contener letras y espacios, intenet nuevamente.';
    } else {
      this.error = '';
      this.textoValido.emit(this.texto);
    }
  }
}
