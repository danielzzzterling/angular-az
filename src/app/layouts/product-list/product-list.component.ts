import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

    productos = [
      {
        titulo: 'Producto 1',
        texto: 'Descripción del producto 1.',
        imagen: 'https://via.placeholder.com/150',
        enlace: '#'
      },
      {
        titulo: 'Producto 2',
        texto: 'Descripción del producto 2.',
        imagen: 'https://via.placeholder.com/150',
        enlace: '#'
      },
      {
        titulo: 'Producto 3',
        texto: 'Descripción del producto 3.',
        imagen: 'https://via.placeholder.com/150',
        enlace: '#'
      }
    ];
  }


