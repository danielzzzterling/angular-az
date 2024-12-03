import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { error } from 'console';
import { Product } from '../../layouts/product-list/product-list.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-slider-cards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './slider-cards.component.html',
  styleUrl: './slider-cards.component.scss',
  providers:[ProductsService]
})

export class SliderCardsComponent implements OnInit{

  products: Product[] = [] as Product []
  productsGrouped: Product[][] = [] as Product [][]

  constructor(private ProductsService: ProductsService ){}

  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe({
      next: (Product)=>{
        this.products = Product;
        this.productsGrouped = this.chunkArray(this.products , 4)
      },
      error:(error)=>{
        console.log('error al cargar los productos')
      }
    } )

  }
    chunkArray(arr: any[], size: number): Product[][] {
      const result = [];
      for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
      }
      return result;
    }
    



}
