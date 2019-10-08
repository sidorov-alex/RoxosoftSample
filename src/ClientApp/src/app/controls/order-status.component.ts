import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-status',
  template: `
    <style>
      .orderStatusBox {
        width: 12px;
        height: 12px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
      }
    </style>
    <div class="orderStatusBox rounded-circle" [ngClass]="colorClass"></div>
  `
})
export class OrderStatusComponent {

  colorClass: string;

  @Input()
  public set status(value: number) {

    this.colorClass = "bg-dark"

    switch (value) {
      case 0:
        this.colorClass = "bg-danger";
        break;
      case 1:
        this.colorClass = "bg-success"
        break;
    }
  }

  constructor() { }

}
