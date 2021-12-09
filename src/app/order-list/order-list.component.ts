import { Component, OnInit } from '@angular/core';
import { IOrderCompleted, OrderService } from '../order/order.service';

@Component({
  selector: 'app-order-lists',
  templateUrl: './order-list.component.html',
  styles: [':host { display: block; }']
})
export class OrderListComponent implements OnInit {

  orders: IOrderCompleted[] = [];

  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders()
      .subscribe(orders => {
        this.orders = orders;
      });
  }

}
