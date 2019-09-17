import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: IProduct[];
  errorMessage = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
      }
    );
    /*  this.productService.productUpdateListener.subscribe(
       product => {
         this.products = product;
         console.log(this.products[0].productName);
       },
        err => this.errorMessage = err
     ); */
  }

  increment(product: IProduct) {
    product.productQuantity += 1;
    if (product.productQuantity > 1) {
      product.productPrice += 25;
    }
    this.productService.onProductUpdate(product);
  }

  decrement(product: IProduct) {
    if (product.productQuantity !== 0) {
      product.productQuantity -= 1;
      if (product.productQuantity < 1) {

      } else {
        product.productPrice -= 25;
      }
    }
  }

}
