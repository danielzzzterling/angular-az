import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';


export interface Product {
  id: number,
  urlSlug: string,
  product_name: string,
  description: string,
  image_url: string,
  price: number;
  stock_quantity: number;
  category_id: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ProductCardComponent,],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit{
  

  
  productList: Product[] = []
  filteredProducts: Product[] = [];
  categoryId: string = ''

  
  

  
    constructor(private productsService: ProductsService, private route: ActivatedRoute) { }
  
    ngOnInit() {
      console.log('entro')
      this.route.paramMap.subscribe(params => {
        const categoryIdParam = params.get('category_id');
        
        // Asegúrate de que categoryIdParam tenga un valor y convertirlo a número
        if (categoryIdParam) {
          this.categoryId = categoryIdParam;  // El signo '+' convierte a número
          console.log('Category ID from URL:', this.categoryId);  // Verifica el valor
          this.loadProducts();
        } else {
          console.error('categoryID not found in URL');
        }
      });
    }
  
    loadProducts(): void {
      this.productsService.getProducts(this.categoryId).subscribe(products => {
        this.productList = products;
        this.filteredProducts = this.productList
      });
    }
  
    getProductsByCategory(category_id: number): Product[] {
      return this.productList.filter(product => product.category_id === category_id);
    }
  }
  
  
  
  

