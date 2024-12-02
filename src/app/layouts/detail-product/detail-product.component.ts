import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../product-list/product-list.component';


@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
  providers: [ProductsService]
})
export class DetailProductComponent {


  productUrlSlug: string = '';
  productData: Product = {} as Product 

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {

  }
  ngOnInit(): void {
    
    this.productUrlSlug = this.route.snapshot.paramMap.get('urlSlug')!;
    console.log('Producto URL:', this.productUrlSlug);
    
    this.productsService.getProductByUrlSlug(this.productUrlSlug).subscribe({
      next: (productElementResponsive)=>{
        this.productData = productElementResponsive
        console.log(productElementResponsive)
      },
      complete:()=>{},
      error: (e)=>{}
    })
  }}

