import { Product } from 'src/app/product';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private categoriesUrl = "https://dummyjson.com/products/categories";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    console.log('Chiamata HTTP per ottenere categorie...');
    return this.http.get<string[]>(this.categoriesUrl).pipe(
      catchError(error => {
        console.error('Errore nella richiesta delle categorie:', error);
        return throwError(() => new Error('Errore nella richiesta delle categorie'));
      })
    );
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const apiUrl = `https://dummyjson.com/products/category/${category}`;
    console.log(`Chiamata HTTP per ottenere prodotti per la categoria: ${category}...`);
    return this.http.get<{ products: Product[] }>(apiUrl).pipe(
      map(response => response.products), // Estrarre 'products' dalla risposta
      catchError(error => {
        console.error('Errore nella richiesta dei prodotti per la categoria:', category, error);
        return throwError(() => new Error(`Errore nella richiesta dei prodotti per la categoria: ${category}`));
      })
    );
  }

}

