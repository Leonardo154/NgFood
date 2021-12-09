import { Injectable, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from '../product';
import { ModalComponent } from './modal.component';

const MODALS: { [name: string]: Type<any> } = {
  autofocus: ModalComponent,
};

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal: NgbModal) { }

  product: IProduct = {
    id: 0,
    category: '',
    title: '',
    price: 0,
    img: ''
  }

  open(product: IProduct) {
    this.product = product;
    this.modal.open(MODALS['autofocus'])
  }
}
