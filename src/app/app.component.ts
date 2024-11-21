
import { Component } from '@angular/core';
import { DemostrativoComponent } from './Components/demostrativo/demostrativo.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [DemostrativoComponent], 
})
export class AppComponent {
  modoOscuro: boolean = false;

  toggleModoOscuro() {
    this.modoOscuro = !this.modoOscuro;
    if (this.modoOscuro) {
      document.body.classList.add('modo-oscuro');
    } else {
      document.body.classList.remove('modo-oscuro');
    }
  }
}


