import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService, OrderDetails } from '../orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order: OrderDetails;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService) { }

  ngOnInit() {

    const orderId = +this.route.snapshot.paramMap.get('id');

    this.getData(orderId);
  }

  getData(orderId: number) {
    this.ordersService.getOrderDetails(orderId)
      .subscribe(order => this.order = order);
  }
}
