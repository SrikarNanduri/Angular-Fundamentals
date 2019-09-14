import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flower } from '../flower.model';

@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.css']
})
export class FlowersListComponent implements OnInit {
  /* Here we are getting the  data from the parent component.
  Note: the name of the field should match the binding property name in our case binging property is [flowersList]*/
@Input() flowersList: Flower[];

/* The output is used to send back an event to the parent.
Note: the name of the field also whould match the name of the event property in the parent in our case it is (flowerSelected1) */
@Output() flowerSelected1: EventEmitter<Flower>  = new EventEmitter();

constructor() {
}

  ngOnInit() {
  }

  clicked(flower: Flower): void {
    /* Here we are emitting the data back to the parent by calling emit() on the EventEmitter */
    this.flowerSelected1.emit(flower);
    console.log('list: ' + flower.name);
  }

}
