import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrderCompleted, OrderService } from '../order/order.service';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styles: [
  ]
})
export class OrderManagerComponent implements OnInit {

  order?: IOrderCompleted;
  constructor(private route: ActivatedRoute, private router: Router, public orderService: OrderService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const idOrder = parseInt(paramMap.get('idPedido') || '0');
      this.orderService.getOrder(idOrder)
        .subscribe(order => {
          this.order = order;
        });
    });
  }

  atualiza() {
    if (this.order) {
      this.orderService.updateOrderSituation(this.order)
        .subscribe(order => {
          this.order = order;
          this.router.navigate(["/pedidos"]);
        });
    }
  }
}
