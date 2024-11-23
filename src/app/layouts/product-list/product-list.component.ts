import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

interface  Product {
  id: number,
  urlSlug: string,
  titulo: string,
  texto: string,
  imagen: string,  
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

  products: Product[] = [] as Product[]

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        urlSlug: 'producto_1',
        titulo: 'Producto 1',
        texto: 'Descripción del producto 1.',
        imagen: 'https://via.placeholder.com/150',
        
      },
      {
        id: 2,
        urlSlug: 'producto_2',
        titulo: 'Producto 2',
        texto: 'Descripción del producto 2.',
        imagen: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        urlSlug: 'producto_3',
        titulo: 'Producto 3',
        texto: 'Descripción del producto 3.',
        imagen: 'https://via.placeholder.com/150',
      }
    ];
    
  }
  }


