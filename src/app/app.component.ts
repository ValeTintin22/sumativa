import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemostrativoComponent } from './Components/demostrativo/demostrativo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemostrativoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
