import { Pipe, PipeTransform } from '@angular/core';
import { Receipt } from '../models/receipt';

@Pipe({
  name: 'receiptPipe'
})
export class ReceiptPipePipe implements PipeTransform {

  transform(value: Receipt[],filter:string): Receipt[] {
    filter = filter ? filter.toLocaleUpperCase():""


    return filter?value.filter((u:Receipt)=> u.receiptType.toLocaleUpperCase().indexOf(filter)!== -1 ||
     u.company.toLocaleUpperCase().indexOf(filter) !== -1 ): value;
  }

}
