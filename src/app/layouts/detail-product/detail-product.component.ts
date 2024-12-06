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


  productData: Product = {} as Product 

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {

  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const urlSlugParam = params.get('urlSlug');
      
      // Asegúrate de que categoryIdParam tenga un valor y convertirlo a número
      if (urlSlugParam) {
        this.loadProduct(urlSlugParam);
      } else {
        console.error('categoryID not found in URL');
      }
    });
    
    
    
  }

  loadProduct(productUrlSlug:string){
    this.productsService.getProductByUrlSlug(productUrlSlug).subscribe({
      next: (productElementResponsive)=>{
        this.productData = productElementResponsive
      },
      complete:()=>{},
      error: (e)=>{}
    })
  }
}

