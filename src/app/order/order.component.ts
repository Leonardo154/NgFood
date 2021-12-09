import { Component } from '@angular/core';
import { OrderService } from './order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  constructor(public orderService: OrderService, private router: Router) { }

  makeOrder() {
    this.orderService.makeOrder().subscribe(order => {
      this.router.navigate(['/pedidos', order.id]);
    });
  }

}
