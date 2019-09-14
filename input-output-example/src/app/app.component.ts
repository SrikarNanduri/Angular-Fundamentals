import { Component } from '@angular/core';
import { Flower } from './flower.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input Output Example';
  /* Here we are creating a variable and then setting it's type as our model class */
  flowers: Flower[];
  constructor() {
    /* any initializations can be done inside constructor because it is called when component is created */
    this.flowers = [
      /* creating an array of flowers as data */
      new Flower(1 , 'Flower', '/assets/images/flower.jpg', 'This is a normal Flower' ),
      new Flower(1 , 'Pink Flower', '/assets/images/pink.jpg', 'This is a Pink Flower' ),
      new Flower(1 , 'Red Flower', '/assets/images/red.jpg', 'This is a Red Flower' ),
      new Flower(1 , 'Rose', '/assets/images/rose.jpg', 'This is a Rose' )
    ];
  }

  /* This is a click method used to raise a window alert */
  onFlowerClicked(flower: Flower): void {
    alert('Flower clicked is: ' + flower.name);
    console.log('app.component: ' + flower.name);

  }
}
