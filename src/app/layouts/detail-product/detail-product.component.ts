import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})
export class DetailProductComponent {
  productId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Capturar el ID desde la URL
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Producto ID:', this.productId);

    // Puedes usar el ID para buscar el producto en un servicio o mostrar detalles
  }

}
