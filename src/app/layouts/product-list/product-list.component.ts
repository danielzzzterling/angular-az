import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductsService } from '../../../services/products.service';

export interface Product {
  id: number,
  urlSlug: string,
  product_name: string,
  description: string,
  image_url: string,
  price: number;
  stock_quantity: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit{
  

  
  productList: Product[] = [] as Product[]

  

  
    constructor(private productsService: ProductsService) { }
  
    ngOnInit() {
      this.productsService.getProducts().subscribe(products  => {
        this.productList = products; 
        console.log(this.productList)
        
      });
    }
  }
  
  
  
  

