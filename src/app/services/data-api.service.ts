import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { productoInterface } from '../model/producto';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private apiUrl = 'http://localhost:3000/api'; // Cambia la URL según donde esté alojada tu API

  constructor(private http: HttpClient) {}

  getTodosLosProductos(): Observable<productoInterface[]> {
    return this.http.get<productoInterface[]>(`${this.apiUrl}/productos`);
  }

  agregarProducto(producto: productoInterface): Observable<any> {
    return this.http.post(`${this.apiUrl}/productos`, producto);
  }

  getProducto(id: string): Observable<productoInterface> {
    return this.http.get<productoInterface>(`${this.apiUrl}/productos/${id}`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener el producto', error);
          return throwError(error);
        })
      );
  }
  actualizarProducto(producto: productoInterface): Observable<any> {
    const url = `${this.apiUrl}/productos/${producto.id}`;
    return this.http.put(url, producto);
  }

  borrarProducto(producto: productoInterface): Observable<any> {
    const url = `${this.apiUrl}/productos/${producto.id}`;
    return this.http.delete(url);
  }
}
