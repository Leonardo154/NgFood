import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct, IItemOrder } from '../product';

const URL = "https://i-ng-food.herokuapp.com"

export interface IOrderCompleted {
  id: number;
  dataHour: string;
  situation: string;
  itens: IItemOrder[];
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  itens: { product: IProduct, quantity: number }[] = [];

  addToCart(product: IProduct, quantity: number) {
    let item = this.itens.find(item => item.product.id === product.id);
    if (item) {
      item.quantity = quantity;
    } else {
      this.itens.push({ product, quantity: quantity });
    }
  }

  clearOrder() {
    this.itens = [];
  }

  get total() {
    let total = 0;
    for (const item of this.itens) {
      total += item.product.price * item.quantity;
    }
    return total;
  }

  get totalQuantity() {
    let quantity = 0;
    for (const item of this.itens) {
      quantity += item.quantity;
    }
    return quantity;
  }

  makeOrder() {
    return this.httpClient.post<IOrderCompleted>(URL + '/pedidos', { itens: this.itens });
  }

  getMenu() {
    return this.httpClient.get<IProduct[]>(URL + '/cardapio');
  }

  getOrder(idOrder: number) {
    return this.httpClient.get<IOrderCompleted>(URL + '/pedidos/' + idOrder);
  }

  getOrders() {
    return this.httpClient.get<IOrderCompleted[]>(URL + '/pedidos/');
  }

  updateOrderSituation(order: IOrderCompleted) {
    return this.httpClient.put<IOrderCompleted>(URL + `/pedidos/${order.id}`, order);
  }
}
