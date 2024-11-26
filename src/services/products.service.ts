import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'https://0s3dr1p5-10000.use.devtunnels.ms/products'; 

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Obtener un producto por ID
  getProductByUrlSlug(urlSlug: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${urlSlug}`);
  }





  // Agregar un nuevo producto
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, product);
  }

  // Actualizar un producto
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, product);
  }

  // Eliminar un producto
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}