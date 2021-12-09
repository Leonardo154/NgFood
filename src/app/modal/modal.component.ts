import { Component, Injectable } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { OrderService } from "../order/order.service";
import { IProduct } from '../product';
import { ModalService } from "./modal.service";

@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  templateUrl: './modal.component.html',
})

@Injectable({
  providedIn: 'root'
})
export class ModalComponent {
  constructor(public modal: NgbActiveModal, public orderService: OrderService, public modalService: ModalService) { }

  quantity: number = 1

  add() {
    this.quantity++
  }

  sub() {
    if (this.quantity > 1) {
      this.quantity--
    }
  }

  addToCart(product: IProduct, quantity: number) {
    this.orderService.addToCart(product, quantity)
    this.modal.close()
  }

}