import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  email: string = '';
  error: string = '';

  @Output() emailValido: EventEmitter<string> = new EventEmitter<string>();

  validarEmail(): void {
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(this.email)) {
      this.error = 'Correo electrónico no válido, intente de nuevo.';
    } else {
      this.error = '';
      this.emailValido.emit(this.email); 
    }
  }
}
