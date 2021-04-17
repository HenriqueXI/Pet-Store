import { environments } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }


  getProduct(): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
        // Faça o importe do environment para poder adicionar a url da aplicação
        this.http.get<Product[]>(`${environment.apiUrl}v1/products-highlights`).subscribe(
          products => {
            observer.next(products);
            observer.complete();
          },
          () => { // Se der algum erro na requisição ira ser chamado esse callback
            observer.error('error_on_get_products');
            observer.complete();
          }
        )
    });
  }

  getProducts(id: string): Observable<Product> {
    return new Observable<Product>(observer => {
      this.http.get<Product>(`${environments.apiUrl}v1/product/${id}`).subscribe(
        products =>{
          observer.next(products);
          observer.complete();
        },
        error => {
          observer.next(error);
          observer.complete();
        }
      )
    })
  }
}
