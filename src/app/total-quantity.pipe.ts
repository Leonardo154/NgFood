import { Pipe, PipeTransform } from '@angular/core';
import { IItemOrder } from './product';

@Pipe({
  name: 'totalQuantity'
})
export class TotalQuantityPipe implements PipeTransform {

  transform(itens: IItemOrder[]): number {
    let quantity = 0;
    for (const item of itens) {
      quantity += item.quantity;
    }
    return quantity;
  }

}
