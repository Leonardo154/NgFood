import { Component, Input } from '@angular/core';
import { IItemOrder } from '../product';

@Component({
  selector: 'app-order-itens',
  templateUrl: './order-itens.component.html',
  styles: [':host { display: block; }']
})
export class OrderItensComponent {

  @Input()
  itens: IItemOrder[] = [];

}
