
import { Component } from '@angular/core';
import { DemostrativoComponent } from "./Components/demostrativo/demostrativo.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [DemostrativoComponent],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
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

