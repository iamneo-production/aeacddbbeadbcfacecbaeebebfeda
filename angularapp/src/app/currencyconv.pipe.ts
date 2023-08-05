import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconv'
})
export class CurrencyconvPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
