import { Component, OnInit } from '@angular/core';
import { OrdersService, Order } from '../orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  selectedId: number;

  constructor(
    private ordersService: OrdersService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getList()
      .subscribe(orders => this.orders = orders);
  }

  onSelect(id: number) {
    this.selectedId = id;
  }
}
