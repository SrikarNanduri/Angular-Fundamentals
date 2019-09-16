import { Injectable, OnInit } from '@angular/core';
import { Product } from './product';
import { of, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  protected productSource = new Subject<IProduct[]>();
  public productUpdateListener = this.productSource.asObservable();

  onProductUpdate(data: IProduct[]) {
    this.productSource.next(data);
    console.log(this.productUpdateListener.subscribe(console.log));
  }
  constructor() {
    this.products = [
      // creating multiple products inside constructor to pass them as data to components.
      new Product(1, 'Naruto poster', 'A poster of Naruto', '/assets/images/naruto.jpg', 25.00, 1),
      new Product(1, 'Kakashi poster', 'A poster of Kakashi', '/assets/images/kakashi.jpg', 25.00, 1),
      new Product(1, 'Goku poster', 'A poster of Goku', '/assets/images/dragonball.jpg', 25.00, 1),
      new Product(1, 'Avengers logo poster', 'A poster of Avengers', '/assets/images/Avengers.jpg', 25.00, 1),
      new Product(1, 'Spiderman poster', 'A poster of Spiderman', '/assets/images/spiderman.jpeg', 25.00, 1),
  ];
  }

/*   getProducts(): Observable<IProduct[]> {
    return of(this.products);
  } */
}
