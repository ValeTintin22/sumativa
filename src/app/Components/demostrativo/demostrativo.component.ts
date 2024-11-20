import { Component } from '@angular/core';
import { BotonAceptarComponent } from '../botones/boton-aceptar/boton-aceptar.component';
import { BotonCancelarComponent } from '../botones/boton-cancelar/boton-cancelar.component';
import { BotonPrimarioComponent } from '../botones/boton-primario/boton-primario.component';
import { BotonSecundarioComponent } from '../botones/boton-secundario/boton-secundario.component';
import { BotonModoOscuroComponent } from '../botones/boton-modo-oscuro/boton-modo-oscuro.component';  // Importamos el nuevo botón

@Component({
  selector: 'app-demostrativo',
  standalone: true,
  imports: [
    BotonAceptarComponent,
    BotonCancelarComponent,
    BotonPrimarioComponent,
    BotonSecundarioComponent,
    BotonModoOscuroComponent  // Añadimos el botón de modo oscuro
  ],
  templateUrl: './demostrativo.component.html',
  styleUrls: ['./demostrativo.component.css']
})
export class DemostrativoComponent {
  mensaje: string = '';
  modoOscuro: boolean = false;  // Estado para el modo oscuro

  manejarAccion(mensaje: string): void {
    this.mensaje = mensaje;
  }

  // Cambiar el tema cuando se active el modo oscuro
  cambiarModoOscuro(isModoOscuro: boolean): void {
    this.modoOscuro = isModoOscuro;
    document.body.classList.toggle('modo-oscuro', this.modoOscuro); // Cambia la clase en el body
  }
}
