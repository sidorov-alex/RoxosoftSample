import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from '../orders.service';
import { OrderListComponent } from '../order-list/order-list.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{

  @ViewChild(OrderListComponent)
  orderList: OrderListComponent;

  @ViewChild(OrderDetailsComponent)
  orderDetails: OrderDetailsComponent;

  constructor(
    private ordersService: OrdersService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getList()
      .subscribe(orders => this.orderList.orders = orders);
  }

  getOrderEntries(orderId: number) {

    // Запрашиваем список позиций в заказе.

    this.ordersService.getOrderEntries(orderId)
      .subscribe(entries => {

        // Убеждаемся, что выделенный заказ не изменился. Если изменился, то ничего не делаем,
        // т.к. уже отправлен новый запрос.

        if (this.orderList.selected.id == orderId) {

          // Задаем заказ и список позиций для отображения.

          this.orderDetails.setDetails(this.orderList.selected, entries);
        }
      });
  }

  onSelectedOrderChanged() {
    this.getOrderEntries(this.orderList.selected.id)
  }
}
