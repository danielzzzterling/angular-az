import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomersService } from '../../../services/customers-services';


@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
  providers: [CustomersService]
})
export class DetailProductComponent {
  productUrlSlug: string = '';

  constructor(private route: ActivatedRoute, private customersService: CustomersService) {

  }
  ngOnInit(): void {
    this.customersService.getCustomers().subscribe({
      next: (customerElement)=>{
        console.log(customerElement)
      },
      complete:()=>{},
      error: (e)=>{}
    })
    // Capturar el ID desde la URL
    this.productUrlSlug = this.route.snapshot.paramMap.get('urlSlug')!;
    console.log('Producto ID:', this.productUrlSlug);

    // Puedes usar el ID para buscar el producto en un servicio o mostrar detalles
  }};

