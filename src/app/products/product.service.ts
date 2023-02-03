import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl='api/products';

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl)
      .pipe(
        tap(data=>console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getPorduct(id:number):Observable<Product>{
    if(id===0){
      return of(this.initializeProduct());
    }
    const url=`${this.productUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        tap(data=>console.log('getProduct:'+JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createProduct(product:Product):Observable<Product>{
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    product.id=null;
    return this.http.post<Product>(this.productUrl,product,{headers})
      .pipe(
        tap(data=>console.log('createProduct'+JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteProduct(id:number){
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    const url=`${this.productUrl}/${id}`;
    return this.http.delete<Product>(url,{headers})
      .pipe(
        tap(data=>console.log('deleteProduct:'+id)),
        catchError(this.handleError)
      );
  }

  upadateProduct(product: Product):Observable<Product>{
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    const url=`${this.productUrl}/${product.id}`;
    return this.http.put<Product>(url,product,{headers})
    .pipe(
      tap(()=>console.log('updateProduct'+product.id)),
      map(()=>product),
      catchError(this.handleError)
    );
  }

  private handleError(err:any){
    let errorMessage:string;
    if(err.error instanceof ErrorEvent){
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage=`An error occurred:${err.error.message}`;
    }else{
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage=`Backend returned code ${err.status}:${err.body.error}`;
    }
    console.log(err);
    return throwError(errorMessage);
  }
  
  private initializeProduct():Product{
    return{
        id:0,
        productName:null,
        productCode:null,
        category:null,
        tags:[],
        releaseDate:null,
        price:null,
        description:null,
        starRating:null,
        imageUrl:null
    };
  }
}
