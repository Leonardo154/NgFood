import { Pipe, PipeTransform } from '@angular/core';
import { IItemOrder } from './product';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(itens: IItemOrder[]): number {
    let total = 0;
    for (const item of itens) {
      total += item.product.price * item.quantity;
    }
    return total;
  }

}
