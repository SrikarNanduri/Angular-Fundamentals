import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
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

  getProducts(): Product[] {
    return this.products;
  }
}
