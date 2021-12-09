import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { OrderService } from '../order/order.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products: IProduct[] = [];
  categories: string[] = [];

  constructor(public orderService: OrderService, public modalService: ModalService) { }

  ngOnInit(): void {
    this.orderService.getMenu().subscribe(products => {
      this.products = products;
      products.map(p => {
        if (this.categories.indexOf(p.category) == -1) {
          this.categories.push(p.category)
        }
      })
    });
  }

  openModal(product: IProduct) {
    this.modalService.open(product)
  }
}
