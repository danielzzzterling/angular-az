import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../app/layouts/product-list/product-list.component';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'https://0s3dr1p5-10000.use.devtunnels.ms/products'; 

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProducts(category_id?: string): Observable<any[]> {
    return this.http.get<Product[]>(`${this.baseUrl}${category_id ? '?category_id='+category_id : ''}`);
  }

  // Obtener un producto por ID
  getProductByUrlSlug(urlSlug: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${urlSlug}`);
  }
  }