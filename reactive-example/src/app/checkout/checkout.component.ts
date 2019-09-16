import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products: IProduct[];
  errorMessage = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.productUpdateListener.subscribe(
       product => {
        this.products = product;
        console.log(this.products[0].productImage);
      },
     err => this.errorMessage = err
    );
  }

}
