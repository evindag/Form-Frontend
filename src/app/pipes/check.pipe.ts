import { Pipe, PipeTransform } from '@angular/core';
import { Check } from '../models/check';

@Pipe({
  name: 'checkPipe'
})
export class CheckPipe implements PipeTransform {

  transform(value: Check[],filter:string): Check[] {
    filter = filter ? filter.toLocaleUpperCase():""


    return filter?value.filter((u:Check)=> u.company.toLocaleUpperCase().indexOf(filter)!== -1 ||
     u.company.toLocaleUpperCase().indexOf(filter) !== -1 ): value;
  }

}