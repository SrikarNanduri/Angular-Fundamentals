import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() { // tslint:disable-next-line: max-line-length
    // get data from service inside onInit() because it handeling data inside constructor is a bad pratice as constructor gets called when creating a view.
    this.products = this.productService.getProducts();
  }

}
