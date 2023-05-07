import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataSqrt'
})
export class DataSqrtPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    
    return Math.sqrt(value);
  }

}
