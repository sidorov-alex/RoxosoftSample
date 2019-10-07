import { Component, Output, EventEmitter } from '@angular/core';
import { Order } from '../orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  orders: Order[];
  selected: Order;

  @Output() selectedChanged = new EventEmitter();

  constructor() { }
  
  selectOrder(order: Order) {
    this.selected = order;

    this.selectedChanged.emit();
  }
}
