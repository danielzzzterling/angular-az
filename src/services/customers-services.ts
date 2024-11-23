import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private baseUrl = 'https://0s3dr1p5-10000.use.devtunnels.ms/customers'; // Reemplaza con la URL de tu API

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl, this.httpOptions);
  }

  // Obtener un cliente por ID
  getCustomerById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`, this.httpOptions);
  }

  // Crear un nuevo cliente
  createCustomer(customer: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, customer, this.httpOptions);
  }

  // Actualizar un cliente existente
  updateCustomer(id: string, customer: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, customer, this.httpOptions);
  }

  // Eliminar un cliente
  deleteCustomer(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`, this.httpOptions);
  }
}
