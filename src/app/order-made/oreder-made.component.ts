import { Component, OnInit, OnDestroy } from '@angular/core';
import { IOrderCompleted, OrderService } from '../order/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-made',
  templateUrl: './order-made.component.html'
})
export class PedidoRealizadoComponent implements OnInit, OnDestroy {

  idOrder?: number;
  order?: IOrderCompleted;
  interval?: any;
  constructor(private route: ActivatedRoute, public orderService: OrderService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.idOrder = parseInt(paramMap.get('idPedido') || '0');
      this.loadOrder();
    });
    this.interval = setInterval(() => {
      this.loadOrder();
    }, 5000);
  }

  loadOrder() {
    if (this.idOrder) {
      this.orderService.getOrder(this.idOrder)
        .subscribe(order => {
          this.order = order;
        });
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
