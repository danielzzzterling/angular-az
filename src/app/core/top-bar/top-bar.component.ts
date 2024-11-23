import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  message = 'ENVÍO GRATIS POR COMPRAS SUPERIORES A $250.000 COP/ CONTRAENTREGA'
}
