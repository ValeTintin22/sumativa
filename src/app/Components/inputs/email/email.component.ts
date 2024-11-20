import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, CommonModule], // Importamos los módulos necesarios
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  email: string = '';
  error: string = '';

  @Output() emailValido: EventEmitter<string> = new EventEmitter<string>();

  validarEmail(): void {
    // Expresión regular para validar formato de correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(this.email)) {
      this.error = 'El correo electrónico no es válido.';
    } else {
      this.error = '';
      this.emailValido.emit(this.email); // Emitimos el correo válido
    }
  }
}
