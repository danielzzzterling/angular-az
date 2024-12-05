import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../app/layouts/product-list/product-list.component';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // private baseUrl = 'http://127.0.0.1:10000/products'; 
  
  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProducts(category_id?: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products${category_id ? '?category_id='+category_id : ''}`);
  }

  // Obtener un producto por ID
  getProductByUrlSlug(urlSlug: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/products}/${urlSlug}`);
  }
  }