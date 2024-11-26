import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../layouts/product-list/product-list.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product: Product = {} as Product
  
}
