import { Component } from '@angular/core';
import { Order, OrderEntry } from '../orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  private order: Order;
  private orderEntries: OrderEntry[];

  private orderTotalQuantity: number;
  private orderTotalCost: number;

  constructor() { }

  public setDetails(order: Order, entries: OrderEntry[]) {
    this.order = order;
    this.orderEntries = entries;

    this.calcTotals();
  }

  private calcTotals() {
    this.orderTotalQuantity = this.orderEntries.reduce((t, e) => t + e.quantity, 0);
    this.orderTotalCost = this.orderEntries.reduce((t, e) => t + e.quantity * e.price, 0);
  }
  
}
