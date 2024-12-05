import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}`, this.httpOptions);
  }

  // Obtener un cliente por ID
  getCustomerById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${id}`, this.httpOptions);
  }

  // Crear un nuevo cliente
  createCustomer(customer: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}`, customer, this.httpOptions);
  }

  // Actualizar un cliente existente
  updateCustomer(id: string, customer: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/${id}`, customer, this.httpOptions);
  }

  // Eliminar un cliente
  deleteCustomer(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${id}`, this.httpOptions);
  }
}
