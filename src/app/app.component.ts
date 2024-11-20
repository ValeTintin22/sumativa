
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modoOscuro: boolean = false;

  // Método para alternar entre modo oscuro y claro
  toggleModoOscuro() {
    this.modoOscuro = !this.modoOscuro;
    if (this.modoOscuro) {
      document.body.classList.add('modo-oscuro');
    } else {
      document.body.classList.remove('modo-oscuro');
    }
  }
}

