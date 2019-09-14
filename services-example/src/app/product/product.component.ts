import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products: Product[];
  constructor(private productService: ProductService) {
   }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    // get data from service inside onInit() because it handeling data inside constructor is a bad pratice as constructor gets called when creating a view.
    this.products = this.productService.getProducts();
  }

  increment(product: Product) {
      product.productQuantity += 1;
      product.productPrice += 25 ;
  }

  decrement(product: Product) {
    if (product.productQuantity !== 0) {
    product.productQuantity -= 1;
    product.productPrice -= 25;
    }
  }
}
