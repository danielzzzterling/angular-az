import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() titulo: string= '';
  @Input() texto: string= '';
  @Input() imagen: string= '';
  @Input() id: number = 0;
  
}
