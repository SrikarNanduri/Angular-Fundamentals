import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flower } from '../flower.model';

@Component({
  selector: 'app-flowers-card',
  templateUrl: './flowers-card.component.html',
  styleUrls: ['./flowers-card.component.css']
})
export class FlowersCardComponent implements OnInit {
@Input() flower: Flower[];
@Output() flowerSelected: EventEmitter<Flower> = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  onFlowerSelected(flowerCard: Flower): void {
    this.flowerSelected.emit(flowerCard);
    console.log('card: ' + flowerCard.name);
  }
}
