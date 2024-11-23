import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() titulo!: string;
  @Input() texto!: string;
  @Input() imagen!: string;
  @Input() enlace!: string;
  
}
