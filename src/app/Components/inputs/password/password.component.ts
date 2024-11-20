import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password: string = '';
  error: string = '';
  
  @Output() passwordValida: EventEmitter<string> = new EventEmitter<string>();

  validarPassword(): void {
    if (this.password.length < 8) {
      this.error = 'La contraseña debe tener al menos 8 caractéres, intente de nuevo.';
    } else {
      this.error = '';
      this.passwordValida.emit(this.password); 
    }
  }
}
