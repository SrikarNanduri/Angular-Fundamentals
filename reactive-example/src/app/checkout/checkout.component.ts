import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  errorMessage = '';
  unsubscribe;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.unsubscribe = this.productService.productUpdateListener.subscribe(
      product => {
        if (!this.products.includes(product)) {
          this.products.push(product);
          console.log(this.products[0].productImage);
        }
        if (product.productQuantity === 0) {
          console.log('product to remove' + product.productDescription);
          this.products.splice(this.products.findIndex(productIndex => productIndex.productQuantity === 0), 1);
        }
      },
      err => this.errorMessage = err
    );
  }

  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

}
