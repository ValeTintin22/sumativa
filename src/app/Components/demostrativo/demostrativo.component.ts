import { Component } from '@angular/core';
import { BotonAceptarComponent } from '../botones/boton-aceptar/boton-aceptar.component';
import { BotonCancelarComponent } from '../botones/boton-cancelar/boton-cancelar.component';
import { BotonPrimarioComponent } from '../botones/boton-primario/boton-primario.component';
import { BotonSecundarioComponent } from '../botones/boton-secundario/boton-secundario.component';
import { BotonModoOscuroComponent } from '../botones/boton-modo-oscuro/boton-modo-oscuro.component';
import { PasswordComponent } from '../inputs/password/password.component';
import { EmailComponent } from '../inputs/email/email.component';
import { TextoComponent } from '../inputs/texto/texto.component'; // Importamos el componente app-texto

@Component({
  selector: 'app-demostrativo',
  standalone: true,
  imports: [
    BotonAceptarComponent,
    BotonCancelarComponent,
    BotonPrimarioComponent,
    BotonSecundarioComponent,
    BotonModoOscuroComponent,
    PasswordComponent,
    EmailComponent,
    TextoComponent, // Importamos el nuevo componente app-texto
  ],
  templateUrl: './demostrativo.component.html',
  styleUrls: ['./demostrativo.component.css']
})
export class DemostrativoComponent {
  mensaje: string = '';
  modoOscuro: boolean = false;
  passwordAlmacenada: string = '';
  emailAlmacenado: string = '';
  textoAlmacenado: string = '';

  manejarAccion(mensaje: string): void {
    this.mensaje = mensaje;
  }

  cambiarModoOscuro(isModoOscuro: boolean): void {
    this.modoOscuro = isModoOscuro;
    document.body.classList.toggle('modo-oscuro', this.modoOscuro);
  }

  manejarPasswordValida(password: string): void {
    this.passwordAlmacenada = password;
  }

  manejarEmailValido(email: string): void {
    this.emailAlmacenado = email;
  }

  manejarTextoValido(texto: string): void {
    this.textoAlmacenado = texto;
  }
}
<div class="contenedor">
  <p>Modo Oscuro: {{ modoOscuro ? 'Activado' : 'Desactivado' }}</p>
  <app-boton-modo-oscuro (modoOscuroCambiado)="cambiarModoOscuro($event)"></app-boton-modo-oscuro>
</div>
